import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: "我的令人愉悦的文档网站",
    }),
  ],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
