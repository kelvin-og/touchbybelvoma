import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getProduct } from "./products-ZEpX92BZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._productId-DbzEzIl1.js
var $$splitComponentImporter = () => import("./product._productId-DHV7YJQ0.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._productId-BdJHwFrS.mjs");
var Route = createFileRoute("/product/$productId")({
	loader: ({ params }) => {
		const product = getProduct(params.productId);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product not found — Touch by Bel'voma" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		return { meta: [
			{ title: `${product.name} — Touch by Bel'voma` },
			{
				name: "description",
				content: product.description
			},
			{
				property: "og:title",
				content: `${product.name} — Touch by Bel'voma`
			},
			{
				property: "og:description",
				content: product.description
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
