import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@sdkwork/app-sdk": path.resolve(
        __dirname,
        "../../../spring-ai-plus-app-api/sdkwork-sdk-app/sdkwork-app-sdk-typescript/src/index.ts"
      ),
      "@sdkwork/im-backend-sdk": path.resolve(
        __dirname,
        "../../openchat/sdkwork-im-sdk/sdkwork-im-sdk-typescript/generated/server-openapi/src/index.ts"
      ),
      "@openchat/sdkwork-im-sdk": path.resolve(
        __dirname,
        "../../openchat/sdkwork-im-sdk/sdkwork-im-sdk-typescript/composed/src/index.ts"
      ),
      "@openchat/sdkwork-im-wukongim-adapter": path.resolve(
        __dirname,
        "../../openchat/sdkwork-im-sdk/sdkwork-im-sdk-typescript/adapter-wukongim/src/index.ts"
      )
    }
  },
  test: {
    environment: "jsdom",
    globals: true
  }
});
