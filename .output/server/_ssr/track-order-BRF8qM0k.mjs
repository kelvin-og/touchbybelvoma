import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-BRF8qM0k.js
var $$splitComponentImporter = () => import("./track-order-DdEBV6PO.mjs");
var Route = createFileRoute("/track-order")({
	validateSearch: (search) => {
		return { orderId: search.orderId };
	},
	head: () => ({ meta: [{ title: "Track Your Order | Touch by Bel'voma" }, {
		name: "description",
		content: "Track the real-time shipping and packaging status of your premium jewelry orders in Ghana."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
