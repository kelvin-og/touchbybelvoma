/**
 * Static SPA build config for GitHub Pages deployment.
 *
 * This bypasses the TanStack Start / Nitro SSR pipeline entirely and produces
 * a plain client-side React SPA in dist/.  The SSR config (vite.config.ts) is
 * still used for Cloudflare Workers / Lovable deployments.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  // Subpath where GitHub Pages serves this project repo.
  // Must match the <repo-name> slug from the Pages URL.
  base: "/-touch-by-bel-voma/",

  plugins: [
    // Generate a separate static route tree — this avoids overwriting the
    // TanStack Start routeTree.gen.ts that the dev server and SSR build need.
    TanStackRouterVite({
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.static.gen.ts",
      routeFileIgnorePattern: "sitemap",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
