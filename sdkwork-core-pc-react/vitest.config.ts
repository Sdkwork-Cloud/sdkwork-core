import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vitest/config";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@sdkwork/app-sdk": path.resolve(
        currentDirectory,
        "../../../spring-ai-plus-app-api/sdkwork-sdk-app/sdkwork-app-sdk-typescript/src/index.ts"
      )
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    pool: "threads"
  }
});
