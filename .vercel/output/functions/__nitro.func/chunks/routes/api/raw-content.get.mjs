import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, g as getQuery, c as createError } from '../../nitro/nitro.mjs';
import { promises } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const rawContent_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const path = query.path;
  console.log("Raw content request for path:", path);
  if (!path) {
    console.error("No path provided");
    throw createError({
      statusCode: 400,
      message: "Path parameter is required"
    });
  }
  try {
    const __filename = fileURLToPath(globalThis._importMeta_.url);
    const projectRoot = resolve(dirname(__filename), "../../..");
    console.log("Project root:", projectRoot);
    const normalizedPath = path.replace(/^content\//, "").replace(/\\/g, "/").replace(/^\/+/, "");
    console.log("Normalized path:", normalizedPath);
    const contentPath = join(projectRoot, "content", normalizedPath);
    console.log("Full content path:", contentPath);
    const exists = await promises.stat(contentPath).then(() => true).catch(() => false);
    console.log("File exists:", exists);
    if (!exists) {
      console.error("File does not exist:", contentPath);
      throw createError({
        statusCode: 404,
        message: `File not found: ${normalizedPath}`
      });
    }
    const contentDir = resolve(projectRoot, "content");
    console.log("Content directory:", contentDir);
    console.log("Path starts with content dir:", contentPath.startsWith(contentDir));
    if (!contentPath.startsWith(contentDir)) {
      console.error("Path traversal attempt:", contentPath);
      throw createError({
        statusCode: 403,
        message: "Invalid path: Must be within content directory"
      });
    }
    const content = await promises.readFile(contentPath, "utf-8");
    console.log("Content loaded successfully, length:", content.length);
    return {
      content,
      path: contentPath
    };
  } catch (error) {
    console.error("Error reading file:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: `Failed to read file content: ${error.message}`
    });
  }
});

export { rawContent_get as default };
//# sourceMappingURL=raw-content.get.mjs.map
