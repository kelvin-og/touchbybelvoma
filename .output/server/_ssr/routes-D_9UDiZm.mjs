import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as hero_default } from "./hero-DIesiSDX.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Quote, At as ArrowRight, _ as Star, v as Sparkles } from "../_libs/lucide-react.mjs";
import { o as products, t as categories } from "./products-ZEpX92BZ.mjs";
import { t as ProductCard } from "./ProductCard-Cn33b2hp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_9UDiZm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	initial: {
		opacity: 0,
		y: 32
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-60px"
	},
	transition: {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}
};
var testimonials = [
	{
		name: "Amara K.",
		text: "The Luna necklace is my everyday staple now. The quality feels far beyond the price — I get compliments constantly.",
		rating: 5
	},
	{
		name: "Jessica T.",
		text: "Beautifully packaged, fast shipping, and the hoops are so lightweight I forget I'm wearing them. Obsessed.",
		rating: 5
	},
	{
		name: "Naomi A.",
		text: "I bought the Riviera set as a gift for my sister and she cried. The presentation box alone feels luxury.",
		rating: 5
	}
];
function Index() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
	const [email, setEmail] = (0, import_react.useState)("");
	const [subscribed, setSubscribed] = (0, import_react.useState)(false);
	const bestSellers = products.filter((p) => p.isBestSeller);
	const newArrivals = products.filter((p) => p.isNew);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative h-[92svh] min-h-[560px] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y },
					className: "absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Woman wearing delicate layered gold necklaces in warm light",
						className: "h-[115%] w-full object-cover",
						width: 1920,
						height: 1080,
						fetchPriority: "high"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-charcoal/45 via-charcoal/15 to-transparent" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					animate: { y: [
						0,
						-14,
						0
					] },
					transition: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "absolute top-[22%] right-[12%] hidden text-gold-light md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					animate: { y: [
						0,
						12,
						0
					] },
					transition: {
						duration: 7,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1
					},
					className: "absolute bottom-[28%] right-[24%] hidden text-gold-light/70 md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-lux relative flex h-full items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
								className: "text-xs font-semibold tracking-[0.35em] text-gold-light uppercase",
								children: "Touch by Bel'voma"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								initial: {
									opacity: 0,
									y: 28
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .3
								},
								className: "mt-4 text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl",
								children: "Touch Every Moment with Elegance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 24
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .45
								},
								className: "mt-5 max-w-md text-base font-light text-primary-foreground/85 sm:text-lg",
								children: "Discover timeless jewelry designed to celebrate your beauty, confidence, and individuality."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .6
								},
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									className: "btn-gold",
									children: ["Shop Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									className: "btn-outline-lux border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-charcoal",
									children: "Explore New Arrivals"
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Curated for you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold sm:text-4xl",
					children: "Featured Collections"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3",
				children: categories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 28
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .6,
						delay: i * .07,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: cat.slug },
						className: "group card-lift relative block overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image,
								alt: `${cat.name} collection`,
								loading: "lazy",
								width: 800,
								height: 1e3,
								className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-108"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-semibold text-primary-foreground sm:text-xl",
									children: cat.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 flex items-center gap-1 text-xs tracking-[0.15em] text-gold-light uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100",
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							})
						]
					})
				}, cat.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Customer favorites"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold sm:text-4xl",
						children: "Best Sellers"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: { sort: "popular" },
						className: "text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-gold",
						children: "View all →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: bestSellers.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[260px] shrink-0 snap-start sm:w-[300px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product: p,
							index: i
						})
					}, p.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Just landed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold sm:text-4xl",
					children: "New Arrivals"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					search: { sort: "newest" },
					className: "text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-gold",
					children: "View all →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4",
				children: newArrivals.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Loved by thousands"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold sm:text-4xl",
						children: "What Our Customers Say"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .6,
							delay: i * .1
						},
						className: "card-lift rounded-2xl bg-card p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								className: "h-6 w-6 text-gold",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: t.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex gap-0.5 text-gold",
									"aria-label": `${t.rating} out of 5 stars`,
									children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, s))
								})]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "@naasjewelryoutlet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold sm:text-4xl",
					children: "Follow the Sparkle"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6",
				children: [...categories].map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: "https://instagram.com",
					target: "_blank",
					rel: "noreferrer",
					initial: {
						opacity: 0,
						scale: .94
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "group relative block overflow-hidden rounded-xl",
					"aria-label": `Instagram post featuring ${cat.name}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cat.image,
						alt: "",
						loading: "lazy",
						width: 400,
						height: 400,
						className: "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/35",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" })
					})]
				}, cat.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal py-20 text-primary-foreground sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "container-lux max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.3em] text-gold-light uppercase",
						children: "Join the inner circle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold sm:text-4xl",
						children: "Get 10% Off Your First Order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-primary-foreground/70",
						children: "New arrivals, exclusive offers, and styling inspiration — straight to your inbox."
					}),
					subscribed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-gold-light",
						children: "Thank you — welcome to the family! ✨"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row",
						onSubmit: (e) => {
							e.preventDefault();
							if (email.trim()) setSubscribed(true);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Your email address",
							"aria-label": "Email address",
							className: "flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-gold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold",
							children: "Subscribe"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
