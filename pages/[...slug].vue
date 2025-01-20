<template>
  <div class="page-wrapper">
    <ClientOnly>
      <div>
        <Header />
        <div class="content-area" :class="{ 'editing-mode': isEditing }">
          <!-- Mobile menu wrapper -->
          <div class="mobile-menu-wrapper md:hidden">
            <DesignSidebar />
          </div>

          <!-- Desktop sidebar shown only in non-editing mode -->
          <aside
            v-if="!isEditing && showSidebar"
            class="sidebar hidden md:block fixed top-[60px] left-0 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto"
          >
            <DesignSidebar />
          </aside>

          <div
            class="main-content flex-1"
            :class="{ 'md:ml-64': !isEditing && showSidebar }"
          >
            <!-- Content header with edit controls - only show when logged in -->
            <div
              v-if="isLoggedIn"
              class="content-header fixed top-[76px] right-6 z-10 flex items-center gap-3"
            >
              <ClientOnly>
                <div class="branch-select-wrapper">
                  <select
                    :value="currentBranch"
                    @change="handleBranchChange"
                    class="branch-select"
                    :disabled="loading"
                  >
                    <option
                      v-for="branch in branches"
                      :key="branch"
                      :value="branch"
                    >
                      {{ branch }}
                    </option>
                  </select>
                  <div v-if="loading" class="loading-indicator"></div>
                </div>
                <button
                  v-if="!isEditing"
                  @click="handleEditClick"
                  class="edit-button px-4 py-2 bg-[#0969DA] text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  v-else
                  @click="exitEditor"
                  class="edit-button px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Exit
                </button>
                <ContentCreator v-if="isLoggedIn" />
              </ClientOnly>
            </div>

            <!-- Main content area -->
            <ClientOnly>
              <div v-if="isEditing" class="editor-container mt-4">
                <Editor
                  :content="editorContent.toString()"
                  :filePath="contentPath"
                  @update:content="handleContentChange"
                  @save="handleSave"
                  @error="handleEditorError"
                />
                <CollaborationSidebar
                  v-if="isLoggedIn"
                  :filePath="contentPath"
                  class="collaboration-sidebar"
                  @load-save="handleLoadSave"
                />
              </div>
              <div v-else class="prose-content max-w-[960px] mx-auto px-6 py-8">
                <div :key="githubContent">
                  <template v-if="!isLoggedIn">
                    <ContentDoc :path="path" :head="false">
                      <template #empty>
                        <p>No content found.</p>
                      </template>
                      <template #not-found>
                        <p>Content not found. Path: {{ path }}</p>
                      </template>
                    </ContentDoc>
                  </template>
                  <template v-else>
                    <div v-html="githubContent" class="markdown-content"></div>
                  </template>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { queryContent } from "#imports";
import { useGithub } from "~/composables/useGithub";
import { useToast } from "~/composables/useToast";
import { useAsyncData } from "#app";
import Editor from "~/components/playground/Editor.vue";
import CollaborationSidebar from "~/components/CollaborationSidebar.vue";
import ContentCreator from "~/components/ContentCreator.vue"; // Import ContentCreator component
import DesignSidebar from "~/components/DesignSidebar.vue";
import Header from "~/components/Header.vue";
import { useRuntimeConfig, useNuxtApp } from "#app";
import { marked } from "marked";

// Initialize GitHub functionality and services
const {
  getRawContent,
  saveFileContent,
  isLoggedIn,
  currentBranch,
  switchBranch,
} = useGithub();
const { showToast } = useToast();

// State management
const loading = ref(false);
const isEditing = ref(false);
const githubContent = ref("");
const editorContent = ref("");
const contentKey = ref(0);
const contentLastModified = ref<string | null>(null);
const branches = ref<string[]>([]);

// Route handling setup
const route = useRoute();
const slug = route.params.slug || [];
const path = Array.isArray(slug) ? slug.join("/") : slug;

// Compute whether to show sidebar based on path
const showSidebar = computed(() => path !== "");
// const contentKey = computed(() => `${path}-${Date.now()}`);

// Compute the content file path
const contentPath = computed(() => {
  if (!path) return "content/index.md";
  return `content/${path}.md`;
});

/**
 * Load GitHub content
 */
const loadGithubContent = async () => {
  if (!isLoggedIn.value) return;

  try {
    const content = await getRawContent(
      "tiresomefanatic",
      "HeroEchoPreview",
      contentPath.value,
      currentBranch.value
    );

    // Convert markdown to HTML
    githubContent.value = marked(content);
    editorContent.value = content;
    contentKey.value++; // Force re-render
  } catch (error) {
    console.error("Error loading GitHub content:", error);
    showToast({
      title: "Error",
      message: "Failed to load content from GitHub",
      type: "error",
    });
  }
};

/**
 * Handle visibility change event
 */
const handleVisibilityChange = async () => {
  if (
    document.visibilityState === "visible" &&
    !isEditing.value &&
    isLoggedIn.value
  ) {
    await loadGithubContent();
  }
};

/**
 * Handles the edit button click.
 */
const handleEditClick = async () => {
  if (!isLoggedIn.value) {
    showToast({
      title: "Authentication Required",
      message: "Please sign in with GitHub to edit content",
      type: "warning",
    });
    return;
  }

  isEditing.value = true;
  await loadGithubContent();
};

const handleContentChange = (newContent: string) => {
  editorContent.value = newContent;
};

/**
 * Handles saving content to GitHub.
 */
const handleSave = async (content: string) => {
  if (!content || !isLoggedIn.value) {
    showToast({
      title: "Error",
      message: "Please sign in to save changes",
      type: "error",
    });
    return;
  }

  try {
    const result = await saveFileContent(
      "tiresomefanatic",
      "HeroEchoPreview",
      contentPath.value,
      content,
      `Update ${contentPath.value}`,
      currentBranch.value
    );

    if (result) {
      // Update local content immediately
      githubContent.value = marked(content);
      editorContent.value = content;
      contentKey.value++; // Force re-render

      showToast({
        title: "Success",
        message: `Content saved successfully to branch: ${currentBranch.value}`,
        type: "success",
      });

      isEditing.value = false;
      await loadGithubContent(); // Refresh content from GitHub
    } else {
      throw new Error(`Failed to save to branch: ${currentBranch.value}`);
    }
  } catch (error) {
    console.error(`Error saving content:`, error);
    showToast({
      title: "Error",
      message: `Failed to save to branch: ${currentBranch.value}`,
      type: "error",
    });
  }
};

const handleEditorError = (error: Error) => {
  showToast({
    title: "Editor Error",
    message: error.message,
    type: "error",
  });
};

const exitEditor = async () => {
  await loadGithubContent();
  isEditing.value = false;
};

const handleLoadSave = (content: string) => {
  editorContent.value = content;
  githubContent.value = marked(content);
  contentKey.value++; // Force re-render
  isEditing.value = true; // Switch to edit mode to show the loaded content
};

const handleBranchChange = async (event: Event) => {
  const select = event.target as HTMLSelectElement;
  const newBranch = select.value;

  if (newBranch !== currentBranch.value) {
    const editorStore = useEditorStore();

    // Save current content before switching
    if (props.filePath) {
      const currentContent = store.rawText;
      editorStore.saveContent(props.filePath, currentContent);
    }

    // Switch branch
    await switchBranch(newBranch);

    // Load content for new branch
    try {
      const { content, sha } = await getFileContent(props.filePath, newBranch);
      if (content) {
        editorStore.saveGitContent(props.filePath, content, newBranch, sha);
        // Update the editor content
        store.rawText = content;

        showToast({
          title: "Branch Switched",
          message: `Successfully switched to branch "${newBranch}"`,
          type: "success",
        });
      }
    } catch (error) {
      console.error("Error loading content for new branch:", error);
      showToast({
        title: "Error",
        message: `Failed to load content for branch "${newBranch}"`,
        type: "error",
      });
    }
  }
};

// Watch for editing mode changes
watch(isEditing, async (newValue, oldValue) => {
  if (newValue && !oldValue) {
    await loadGithubContent();
  }
});

// Watch for route changes
watch(
  () => route.path,
  async () => {
    if (isLoggedIn.value && !isEditing.value) {
      await loadGithubContent();
    }
  }
);

// Watch for login state changes
watch(isLoggedIn, async (newValue) => {
  if (newValue && !isEditing.value) {
    await loadGithubContent();
  }
});

// Setup content refresh and event handlers
onMounted(async () => {
  if (isLoggedIn.value && !isEditing.value) {
    await loadGithubContent();
  }

  if (process.client) {
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }

  //const branchesList = await getBranches("tiresomefanatic", "HeroEchoPreview");
  // branches.value = branchesList;
});

onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  }
});
</script>

<style scoped>
.page-wrapper {
  @apply min-h-screen bg-white;
}

.content-area {
  @apply flex relative pt-16;
}

.sidebar {
  @apply fixed top-[60px] left-0 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto z-20;
}

.main-content {
  @apply w-full min-h-[calc(100vh-64px)] transition-all duration-200 ease-in-out;
  margin-left: 16rem;
}

.content-header {
  @apply flex justify-end items-center;
}

.prose-content {
  @apply px-6 py-8 max-w-[960px] mx-auto;
}

.markdown-content {
  @apply prose prose-sm md:prose-base lg:prose-lg max-w-none;
}

.editor-container {
  @apply h-[calc(100vh-200px)];
}

.branch-select-wrapper {
  position: relative;
  display: inline-block;
}

.branch-select {
  appearance: none;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #374151;
  min-width: 160px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}

.branch-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.branch-select:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.loading-indicator {
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  border: 2px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

/* Editing mode styles */
.editing-mode .sidebar {
  @apply hidden;
}

.editing-mode .main-content {
  @apply ml-0;
}

/* Mobile styles */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }

  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.active {
    transform: translateX(0);
  }
}
</style>
