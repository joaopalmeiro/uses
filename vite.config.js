import { svelte } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://windicss.org/integrations/vite.html
    // https://stackoverflow.com/a/69606329
    // https://github.com/windicss/vite-plugin-windicss
    WindiCSS(),
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
