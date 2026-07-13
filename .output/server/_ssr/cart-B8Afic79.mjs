import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Minus, f as Trash2, g as Tag, j as Plus, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { a as getProduct, n as formatPrice } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-B8Afic79.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { cart, setQty, removeFromCart } = useStore();
	const [promo, setPromo] = (0, import_react.useState)("");
	const [promoApplied, setPromoApplied] = (0, import_react.useState)(false);
	const [promoError, setPromoError] = (0, import_react.useState)(false);
	const items = cart.map((i) => ({
		...i,
		product: getProduct(i.productId)
	})).filter((i) => i.product);
	const subtotal = items.reduce((n, i) => n + i.product.price * i.qty, 0);
	const discount = promoApplied ? subtotal * .1 : 0;
	const shipping = subtotal - discount >= 75 || items.length === 0 ? 0 : 6.95;
	const total = subtotal - discount + shipping;
	const applyPromo = () => {
		if (promo.trim().toUpperCase() === "NAA10") {
			setPromoApplied(true);
			setPromoError(false);
		} else setPromoError(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-lux pt-28 pb-20 sm:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "text-4xl font-semibold sm:text-5xl",
			children: "Your Cart"
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mx-auto h-12 w-12 text-muted-foreground/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Your cart is beautifully empty."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "btn-gold mt-8",
					children: "Start Shopping"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-4 lg:col-span-2",
				children: items.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					layout: true,
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "flex gap-4 rounded-2xl bg-card p-4 shadow-soft sm:gap-6 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$productId",
						params: { productId: product.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[0],
							alt: product.name,
							width: 112,
							height: 140,
							loading: "lazy",
							className: "h-28 w-24 rounded-xl object-cover sm:h-32 sm:w-28"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$productId",
									params: { productId: product.id },
									className: "block truncate font-medium hover:text-gold",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-xs text-muted-foreground capitalize",
									children: [
										product.category,
										" · ",
										product.material
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeFromCart(product.id),
								"aria-label": `Remove ${product.name}`,
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center justify-between pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-full border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(product.id, qty - 1),
										"aria-label": "Decrease quantity",
										className: "grid h-9 w-9 place-items-center hover:text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-7 text-center text-sm",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(product.id, qty + 1),
										"aria-label": "Increase quantity",
										className: "grid h-9 w-9 place-items-center hover:text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: formatPrice(product.price * qty)
							})]
						})]
					})]
				}, product.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .15 },
				className: "h-fit rounded-3xl bg-ivory p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Subtotal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: formatPrice(subtotal)
								})]
							}),
							promoApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Promo (NAA10 −10%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["−", formatPrice(discount)] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Shipping"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: shipping === 0 ? "Free" : formatPrice(shipping)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-t border-border pt-3 text-base font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatPrice(total) })]
							})
						]
					}),
					!promoApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "promo",
								className: "text-xs font-semibold tracking-[0.15em] uppercase",
								children: "Promo code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "promo",
									value: promo,
									onChange: (e) => {
										setPromo(e.target.value);
										setPromoError(false);
									},
									placeholder: "e.g. NAA10",
									className: "min-w-0 flex-1 rounded-full border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: applyPromo,
									className: "flex items-center gap-1.5 rounded-full border border-charcoal px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors hover:bg-charcoal hover:text-primary-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }), " Apply"]
								})]
							}),
							promoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: "That code isn't valid. Try NAA10 for 10% off."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						className: "btn-gold mt-6 w-full block text-center",
						children: "Proceed to Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: "Secure checkout · Free shipping over $75"
					})
				]
			})]
		})]
	});
}
//#endregion
export { CartPage as component };
