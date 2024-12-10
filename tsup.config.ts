import { defineConfig } from "tsup";
import svgrPlugin from "esbuild-plugin-svgr";

const config = defineConfig({
  entry: ["src/popup/index.tsx", "src/scripts"],
  globalName: "blotup",
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  format: ["iife"],
  minify: true,
  publicDir: "public",
  target: ["chrome58"],
  outDir: "./dist",
  esbuildOptions(options) {
    options.outbase = "./src";
  },
  esbuildPlugins: [svgrPlugin()],
});

export default config;
