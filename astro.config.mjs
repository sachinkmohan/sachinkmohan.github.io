// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "sachinkmohan.github.io",
  base: "/sachinkmohan.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
