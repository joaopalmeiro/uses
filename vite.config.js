import { svelte } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/VdustR/example-vite-svelte-markdown#setup-mdsvex
    // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md
    svelte({
      extensions: [".svx"],
      preprocess: mdsvex(),
    }),
    svelte(),
  ],
  server: {
    // https://vitejs.dev/config/#server-open
    open: true,
  },
});
