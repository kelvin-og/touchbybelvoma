import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-Ca2Ymty8.js
var $$splitComponentImporter = () => import("./shop-DopYWWM3.mjs");
var Route = createFileRoute("/shop")({
	validateSearch: (search) => ({
		category: search.category || void 0,
		sort: search.sort || void 0,
		maxPrice: search.maxPrice ? Number(search.maxPrice) : void 0
	}),
	head: () => ({ meta: [
		{ title: "Shop Jewelry — Touch by Bel'voma" },
		{
			name: "description",
			content: "Shop earrings, necklaces, rings, bracelets, anklets and sets. Premium handcrafted jewelry at outlet prices."
		},
		{
			property: "og:title",
			content: "Shop Jewelry — Touch by Bel'voma"
		},
		{
			property: "og:description",
			content: "Shop earrings, necklaces, rings, bracelets, anklets and sets."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
