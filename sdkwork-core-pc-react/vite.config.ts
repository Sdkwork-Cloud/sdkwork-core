import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const currentDirectory = resolve(fileURLToPath(import.meta.url), "..");

export default defineConfig({
  build: {
    lib: {
      entry: resolve(currentDirectory, "src/index.ts"),
      name: "SdkworkCorePcReact",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@sdkwork/app-sdk"
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
