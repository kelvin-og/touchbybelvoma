import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Use the repo subpath as basepath when deployed to GitHub Pages
  const basepath =
    typeof window !== "undefined" && window.location.hostname.endsWith("github.io")
      ? "/-touch-by-bel-voma"
      : "/";

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
