import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Heart } from "../_libs/lucide-react.mjs";
import { o as products } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
import { t as ProductCard } from "./ProductCard-Cn33b2hp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-LT7Lzzvn.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { wishlist } = useStore();
	const items = products.filter((p) => wishlist.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-lux pt-28 pb-20 sm:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Saved with love"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl font-semibold sm:text-5xl",
				children: "Your Wishlist"
			})]
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "mx-auto h-12 w-12 text-muted-foreground/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Nothing saved yet — tap the heart on any piece you love."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "btn-gold mt-8",
					children: "Browse Jewelry"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4",
			children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				index: i
			}, p.id))
		})]
	});
}
//#endregion
export { WishlistPage as component };
