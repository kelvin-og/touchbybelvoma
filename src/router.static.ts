/**
 * Static SPA router — used only by the GitHub Pages build (vite.static.config.ts).
 * Imports from the static route tree which excludes server-only routes.
 */
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.static.gen";

export const getStaticRouter = () => {
  const queryClient = new QueryClient();

  // GitHub Pages serves this project at: kelvin-og.github.io/touchbybelvoma/
  const basepath =
    typeof window !== "undefined" && window.location.hostname.endsWith("github.io")
      ? "/touchbybelvoma"
      : "/";

  return createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
