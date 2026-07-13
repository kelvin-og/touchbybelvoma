import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation._orderId-NYeBkVKG.js
var $$splitComponentImporter = () => import("./order-confirmation._orderId-BvBaC7jc.mjs");
var Route = createFileRoute("/order-confirmation/$orderId")({
	head: () => ({ meta: [{ title: `Order Placed | Touch by Bel'voma` }, {
		name: "description",
		content: `Thank you for choosing Touch by Bel'voma. Your order is confirmed.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
