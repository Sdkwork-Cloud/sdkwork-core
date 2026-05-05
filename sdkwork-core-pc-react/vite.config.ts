import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SdkworkCorePcReact",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@sdkwork/app-sdk",
        "@sdkwork/im-sdk",
        "@sdkwork/rtc-sdk"
      ]
    },
    sourcemap: true
  },
  plugins: [
    dts({
      include: ["src"],
      outDir: "dist"
    })
  ]
});
