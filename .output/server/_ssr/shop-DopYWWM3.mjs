import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { o as products, t as categories } from "./products-ZEpX92BZ.mjs";
import { t as ProductCard } from "./ProductCard-Cn33b2hp.mjs";
import { t as Route } from "./shop-Ca2Ymty8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DopYWWM3.js
var import_jsx_runtime = require_jsx_runtime();
var filterTabs = [
	{ label: "All" },
	...categories.map((c) => ({
		label: c.name,
		value: c.slug
	})),
	{
		label: "New Arrivals",
		value: "new"
	},
	{
		label: "Best Sellers",
		value: "bestsellers"
	},
	{
		label: "Sale",
		value: "sale"
	}
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
			case "price-asc": return a.price - b.price;
			case "price-desc": return b.price - a.price;
			case "newest": return Number(b.isNew ?? false) - Number(a.isNew ?? false);
			default: return b.reviewCount - a.reviewCount;
		}
	});
	const heading = filterTabs.find((t) => t.value === category)?.label ?? "All Jewelry";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-lux pt-28 pb-20 sm:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-semibold sm:text-5xl",
						children: heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: [
							sorted.length,
							" piece",
							sorted.length === 1 ? "" : "s"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-2",
				children: filterTabs.map((tab) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: (prev) => ({
							...prev,
							category: tab.value
						}),
						className: `rounded-full border px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all ${tab.value === category || !tab.value && !category ? "border-gold bg-gold text-gold-foreground shadow-gold" : "border-border bg-card hover:border-gold hover:text-gold"}`,
						children: tab.label
					}, tab.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }),
						"Max price",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: maxPrice ?? "",
							onChange: (e) => navigate({ search: (prev) => ({
								...prev,
								maxPrice: e.target.value ? Number(e.target.value) : void 0
							}) }),
							className: "rounded-full border border-input bg-card px-3 py-1.5 text-sm outline-none focus:border-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Any"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "30",
									children: "Under $30"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "50",
									children: "Under $50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "75",
									children: "Under $75"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: ["Sort by", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sort ?? "popular",
						onChange: (e) => navigate({ search: (prev) => ({
							...prev,
							sort: e.target.value
						}) }),
						className: "rounded-full border border-input bg-card px-3 py-1.5 text-sm outline-none focus:border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "popular",
								children: "Most Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "newest",
								children: "Newest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-asc",
								children: "Price: Low to High"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-desc",
								children: "Price: High to Low"
							})
						]
					})]
				})]
			}),
			sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-24 text-center text-muted-foreground",
				children: "No pieces match these filters — try widening your search."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4",
				children: sorted.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})
		]
	});
}
//#endregion
export { ShopPage as component };
