import { r as motion } from "../_libs/framer-motion.mjs";
import { t as hero_default } from "./hero-DIesiSDX.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { W as Leaf, it as Gem, tt as HandHeart, v as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DvJ3j_Y1.js
var import_jsx_runtime = require_jsx_runtime();
var about_default = "/assets/about-BrUudVWp.jpg";
var values = [
	{
		icon: Gem,
		title: "Quality Craftsmanship",
		text: "Every piece is inspected by hand and finished with premium plating that's made to last, not tarnish."
	},
	{
		icon: HandHeart,
		title: "Affordable Luxury",
		text: "Luxury-level design without the luxury markup. Beautiful jewelry should be within everyone's reach."
	},
	{
		icon: Sparkles,
		title: "Timeless Design",
		text: "We design pieces that outlive trends — jewelry you'll reach for year after year, occasion after occasion."
	},
	{
		icon: Leaf,
		title: "Thoughtful Sourcing",
		text: "Hypoallergenic materials, recycled packaging, and partners who share our standards."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex h-[52svh] min-h-[380px] items-center overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Elegant gold jewelry worn in warm natural light",
					className: "absolute inset-0 h-full w-full object-cover",
					width: 1920,
					height: 1080
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-lux relative text-center text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "text-xs font-semibold tracking-[0.35em] text-gold-light uppercase",
						children: "Our Story"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mx-auto mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl",
						children: "Where Elegance Meets Everyday Style"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -24
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_default,
					alt: "Artisan hands crafting a gold pendant necklace at a workbench",
					loading: "lazy",
					width: 1200,
					height: 900,
					className: "rounded-3xl shadow-lift"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 24
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: {
					duration: .7,
					delay: .1
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The beginning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold sm:text-4xl",
						children: "Born from a simple belief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Touch by Bel'voma is a luxury jewelry brand devoted to timeless elegance and refined craftsmanship. Every piece is designed to feel personal — a quiet celebration of the woman who wears it." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We work with skilled artisans who share our obsession with detail: considered proportions, hand-finished settings, and materials chosen to last. The result is jewelry that carries the weight of a luxury house with the warmth of something made just for you." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From everyday essentials to statement heirlooms, our collections are here to help you express your unique style — and touch every moment with a little more elegance." })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What we stand for"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold sm:text-4xl",
						children: "Our Values"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .55,
							delay: i * .08
						},
						className: "card-lift rounded-2xl bg-card p-7 text-center shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: v.text
							})
						]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-20 text-center sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto max-w-xl text-3xl font-semibold sm:text-4xl",
					children: "Ready to find the piece that feels like you?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "btn-gold mt-8",
					children: "Explore the Collection"
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
