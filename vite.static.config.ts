/**
 * Static SPA build config for GitHub Pages deployment.
 *
 * Deliberately does NOT use TanStackRouterVite or @lovable.dev/vite-tanstack-config
 * to avoid SSR/Nitro pipeline interference. This produces a plain client-side
 * React SPA in dist/ from index.static.html as the entry point.
 *
 * Route tree (src/routeTree.static.gen.ts) is pre-generated and committed —
 * no plugin needed at build time.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Subpath where GitHub Pages serves this project.
  base: "/touchbybelvoma/",

  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.static.html",
    },
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
