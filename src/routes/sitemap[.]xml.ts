import { createFileRoute } from "@tanstack/react-router";
import { products } from "../data/products";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Server-side XML generation is only available in the TanStack Start / Cloudflare
// deployment.  For the static GitHub Pages build this route is registered but
// serves no component (the TanStack Router plugin still needs it in the tree).
export const Route = createFileRoute("/sitemap.xml")({
  loader: async () => {
    const entries: SitemapEntry[] = [
      { path: "/", changefreq: "weekly", priority: "1.0" },
      { path: "/shop", changefreq: "weekly", priority: "0.9" },
      { path: "/about", changefreq: "monthly", priority: "0.6" },
      { path: "/contact", changefreq: "monthly", priority: "0.6" },
      ...products.map((p) => ({
        path: `/product/${p.id}`,
        changefreq: "weekly" as const,
        priority: "0.8",
      })),
    ];
    return { entries };
  },
});
