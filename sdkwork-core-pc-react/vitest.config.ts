import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@sdkwork/app-sdk": path.resolve(
        __dirname,
        "../../../spring-ai-plus-app-api/sdkwork-sdk-app/sdkwork-app-sdk-typescript/src/index.ts"
      ),
      "@sdkwork/sdk-common": path.resolve(
        __dirname,
        "../../../sdk/sdkwork-sdk-commons/sdkwork-sdk-common-typescript/src/index.ts"
      ),
      "@sdkwork/im-sdk": path.resolve(
        __dirname,
        "../../craw-chat/sdks/sdkwork-im-sdk/sdkwork-im-sdk-typescript/src/index.ts"
      ),
      "@sdkwork/rtc-sdk": path.resolve(
        __dirname,
        "../../craw-chat/sdks/sdkwork-rtc-sdk/sdkwork-rtc-sdk-typescript/src/index.ts"
      )
    }
  },
  test: {
    environment: "jsdom",
    globals: true
  }
});
