import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://hannaan123.github.io",
  base: "/", // ✅ Important for user pages (no subpath)
  outDir: "dist", // ✅ Ensures Astro builds to the right directory
  integrations: [mdx(), sitemap(), tailwind()],
});
