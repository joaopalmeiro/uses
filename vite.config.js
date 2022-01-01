import { svelte } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// https://github.com/VdustR/example-vite-svelte-markdown#setup-mdsvex
// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md
export default defineConfig({
  plugins: [
    svelte({
      extensions: [".svx"],
      preprocess: mdsvex(),
    }),
    svelte(),
  ],
});
