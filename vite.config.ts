// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use SPA mode when building for GitHub Pages (set GITHUB_PAGES=1 env var)
const isGithubPages = process.env.GITHUB_PAGES === "1";

export default defineConfig(
  isGithubPages
    ? {
        // SPA / static mode for GitHub Pages
        tanstackStart: {
          spa: true,
          server: { entry: "server" },
        },
      }
    : {
        // Default SSR mode (Cloudflare Workers)
        tanstackStart: {
          server: { entry: "server" },
        },
      },
);
