import { defineConfig } from "vite";
import { resolve } from "path";

const root = import.meta.dirname;

// Served from https://iamzayn19.github.io/xo-arena-pages/ (a GitHub Pages project site,
// not a custom domain), so every asset/link must resolve under that base path.
export default defineConfig({
  base: "/xo-arena-pages/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        privacy: resolve(root, "privacy.html"),
        terms: resolve(root, "terms.html"),
        support: resolve(root, "support.html"),
      },
    },
  },
});
