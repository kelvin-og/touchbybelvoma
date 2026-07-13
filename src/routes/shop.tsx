import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { categories, products, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type SortOption = "popular" | "newest" | "price-asc" | "price-desc";

interface ShopSearch {
  category?: Category | "new" | "bestsellers" | "sale";
  sort?: SortOption;
  maxPrice?: number;
}

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    category: (search.category as ShopSearch["category"]) || undefined,
    sort: (search.sort as SortOption) || undefined,
    maxPrice: search.maxPrice ? Number(search.maxPrice) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Jewelry — Touch by Bel'voma" },
      {
        name: "description",
        content:
          "Shop earrings, necklaces, rings, bracelets, anklets and sets. Premium handcrafted jewelry at outlet prices.",
      },
      { property: "og:title", content: "Shop Jewelry — Touch by Bel'voma" },
      {
        property: "og:description",
        content: "Shop earrings, necklaces, rings, bracelets, anklets and sets.",
      },
    ],
  }),
  component: ShopPage,
});

const filterTabs: { label: string; value?: ShopSearch["category"] }[] = [
  { label: "All" },
  ...categories.map((c) => ({
    label: c.name,
    value: c.slug as ShopSearch["category"],
  })),
  { label: "New Arrivals", value: "new" },
  { label: "Best Sellers", value: "bestsellers" },
  { label: "Sale", value: "sale" },
];

function ShopPage() {
  const { category, sort, maxPrice } = Route.useSearch();
  const navigate = Route.useNavigate();

  let filtered = products.filter((p) => {
    if (category === "new") return p.isNew;
    if (category === "bestsellers") return p.isBestSeller;
    if (category === "sale") return !!p.originalPrice;
    if (category) return p.category === category;
    return true;
  });
  if (maxPrice) filtered = filtered.filter((p) => p.price <= maxPrice);

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return Number(b.isNew ?? false) - Number(a.isNew ?? false);
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  const heading = filterTabs.find((t) => t.value === category)?.label ?? "All Jewelry";

  return (
    <div className="container-lux pt-28 pb-20 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{heading}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {sorted.length} piece{sorted.length === 1 ? "" : "s"}
        </p>
      </motion.div>

      {/* Category tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filterTabs.map((tab) => {
          const active = tab.value === category || (!tab.value && !category);
          return (
            <Link
              key={tab.label}
              to="/shop"
              search={(prev: ShopSearch) => ({ ...prev, category: tab.value })}
              className={`rounded-full border px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all ${
                active
                  ? "border-gold bg-gold text-gold-foreground shadow-gold"
                  : "border-border bg-card hover:border-gold hover:text-gold"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* Sort + price filter */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          Max price
          <select
            value={maxPrice ?? ""}
            onChange={(e) =>
              navigate({
                search: (prev: ShopSearch) => ({
                  ...prev,
                  maxPrice: e.target.value ? Number(e.target.value) : undefined,
                }),
              })
            }
            className="rounded-full border border-input bg-card px-3 py-1.5 text-sm outline-none focus:border-gold"
          >
            <option value="">Any</option>
            <option value="30">Under $30</option>
            <option value="50">Under $50</option>
            <option value="75">Under $75</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by
          <select
            value={sort ?? "popular"}
            onChange={(e) =>
              navigate({
                search: (prev: ShopSearch) => ({
                  ...prev,
                  sort: e.target.value as SortOption,
                }),
              })
            }
            className="rounded-full border border-input bg-card px-3 py-1.5 text-sm outline-none focus:border-gold"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>

      {sorted.length === 0 ? (
        <p className="py-24 text-center text-muted-foreground">
          No pieces match these filters — try widening your search.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {sorted.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
