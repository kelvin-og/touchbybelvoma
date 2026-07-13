import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Heart, E as Search, R as Menu, Y as Instagram, i as User, n as X, ot as Facebook, s as Twitter, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as formatPrice, o as products } from "./products-ZEpX92BZ.mjs";
import { n as useStore, t as StoreProvider } from "./store-N7ANSPqd.mjs";
import { t as Route$16 } from "./order-confirmation._orderId-NYeBkVKG.mjs";
import { t as Route$17 } from "./product._productId-DbzEzIl1.mjs";
import { t as Route$18 } from "./track-order-BRF8qM0k.mjs";
import { t as Route$19 } from "./shop-Ca2Ymty8.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-JjfDWjig.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D0ljVYSr.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var logo_default = "/assets/logo-Den04JhT.png";
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shop",
		label: "Shop",
		search: {}
	},
	{
		to: "/shop",
		label: "Earrings",
		search: { category: "earrings" }
	},
	{
		to: "/shop",
		label: "Necklaces",
		search: { category: "necklaces" }
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const { cartCount, wishlist, user } = useStore();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const results = query.trim().length > 1 ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || mobileOpen || searchOpen ? "bg-background/95 shadow-soft backdrop-blur-md" : "bg-transparent"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[1fr_auto_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-10 w-10 place-items-center lg:hidden",
						"aria-label": "Open menu",
						onClick: () => setMobileOpen((o) => !o),
						children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						children: navLinks.slice(0, 4).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							search: l.search,
							className: "text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-gold",
							children: l.label
						}, l.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "min-w-0 justify-self-center",
						"aria-label": "Touch by Bel'voma — Home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Touch by Bel'voma",
							className: "mx-auto h-11 w-auto sm:h-14",
							width: 500,
							height: 275,
							fetchPriority: "high"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-1 sm:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent",
								"aria-label": "Search",
								onClick: () => setSearchOpen((o) => !o),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-[18px] w-[18px]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								className: "relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent",
								"aria-label": "Wishlist",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-[18px] w-[18px]" }), wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.6rem] font-semibold text-gold-foreground",
									children: wishlist.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent",
								"aria-label": "Cart",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-[18px] w-[18px]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.6rem] font-semibold text-gold-foreground",
									children: cartCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: user ? user.role === "admin" ? "/admin/dashboard" : "/dashboard" : "/login",
								className: "hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent sm:grid",
								"aria-label": "Account",
								children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gold bg-gold/10 text-xs font-semibold text-gold uppercase",
									children: user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-[18px] w-[18px]" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				className: "overflow-hidden border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-lux py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search jewelry…",
						className: "w-full rounded-full border border-input bg-card px-5 py-3 text-sm outline-none focus:border-gold",
						"aria-label": "Search products"
					}), results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft",
						children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/product/$productId",
							params: { productId: p.id },
							onClick: () => {
								setSearchOpen(false);
								setQuery("");
							},
							className: "flex items-center gap-4 px-4 py-3 transition-colors hover:bg-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									className: "h-12 w-12 rounded-lg object-cover",
									loading: "lazy",
									width: 48,
									height: 48
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 flex-1 truncate text-sm font-medium",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-gold",
									children: formatPrice(p.price)
								})
							]
						}) }, p.id))
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				className: "overflow-hidden border-t border-border lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "container-lux flex flex-col py-3",
					children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						search: l.search,
						onClick: () => setMobileOpen(false),
						className: "block py-3 text-sm font-medium tracking-[0.15em] uppercase",
						children: l.label
					}) }, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-border mt-2 pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: user ? user.role === "admin" ? "/admin/dashboard" : "/dashboard" : "/login",
							onClick: () => setMobileOpen(false),
							className: "block py-3 text-sm font-semibold tracking-[0.15em] text-gold uppercase",
							children: user ? `Dashboard (${user.name})` : "Sign In / Join"
						})
					})]
				})
			}) })
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Touch by Bel'voma",
						className: "h-16 w-auto",
						width: 500,
						height: 275,
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Luxury jewelry crafted to elevate your everyday style — timeless elegance for every woman, every moment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://facebook.com",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://twitter.com",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Twitter",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-4 w-4" })
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Shop links",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] uppercase",
						children: "Shop"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "earrings" },
								className: "hover:text-gold",
								children: "Earrings"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "necklaces" },
								className: "hover:text-gold",
								children: "Necklaces"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "rings" },
								className: "hover:text-gold",
								children: "Rings"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "bracelets" },
								className: "hover:text-gold",
								children: "Bracelets"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "sets" },
								className: "hover:text-gold",
								children: "Sets"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Company links",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] uppercase",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-gold",
								children: "Our Story"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-gold",
								children: "Contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/wishlist",
								className: "hover:text-gold",
								children: "Wishlist"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								className: "hover:text-gold",
								children: "Cart"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] uppercase",
					children: "Customer Care"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Free shipping over $75" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "30-day easy returns" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1-year plating warranty" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "hello@naasjewelry.com" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "container-lux text-center text-xs text-muted-foreground flex justify-center items-center gap-1.5 flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Touch by Bel'voma. All Rights Reserved." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground/30",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/superadmin/login",
						className: "hover:text-gold transition-colors font-medium",
						children: "System Core"
					})
				]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-gold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-gold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline-lux",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Touch by Bel'voma | Luxury Jewelry in Ghana" },
			{
				name: "description",
				content: "Discover elegant earrings, necklaces, bracelets, rings, anklets, and luxury accessories at Touch by Bel'voma. Premium jewelry crafted to elevate your everyday style."
			},
			{
				name: "keywords",
				content: "Touch by Bel'voma, Luxury Jewelry Ghana, Earrings Ghana, Necklaces Ghana, Bracelets, Fashion Jewelry, Women's Accessories, Gold Jewelry Ghana"
			},
			{
				name: "author",
				content: "Touch by Bel'voma"
			},
			{
				property: "og:title",
				content: "Touch by Bel'voma | Luxury Jewelry in Ghana"
			},
			{
				property: "og:description",
				content: "Discover elegant earrings, necklaces, bracelets, rings, anklets, and luxury accessories at Touch by Bel'voma. Premium jewelry crafted to elevate your everyday style."
			},
			{
				property: "og:site_name",
				content: "Touch by Bel'voma"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Touch by Bel'voma | Luxury Jewelry in Ghana"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300..700&family=Poppins:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		] })
	});
}
var $$splitComponentImporter$13 = () => import("./wishlist-LT7Lzzvn.mjs");
var Route$14 = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Wishlist — Touch by Bel'voma" },
		{
			name: "description",
			content: "The pieces you've fallen in love with."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var BASE_URL = "";
var Route$13 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/shop",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.6"
			},
			...products.map((p) => ({
				path: `/product/${p.id}`,
				changefreq: "weekly",
				priority: "0.8"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$12 = () => import("./signup-AOx8k7RS.mjs");
var Route$12 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Join Touch by Bel'voma | Luxury Jewelry Registration" }, {
		name: "description",
		content: "Create an account at Touch by Bel'voma and unlock exclusive offers, orders, and premium jewelry collections in Ghana."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./login-DpbIC3DI.mjs");
var Route$11 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign In | Touch by Bel'voma" }, {
		name: "description",
		content: "Sign in to your Touch by Bel'voma account to manage your luxury jewelry collection and track your orders in Ghana."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./forgot-password-Wn_joUuD.mjs");
var Route$10 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Reset Password | Touch by Bel'voma" }, {
		name: "description",
		content: "Recover your Touch by Bel'voma account password securely."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./dashboard-8pwrqMyb.mjs");
var Route$9 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "My Account | Touch by Bel'voma" }, {
		name: "description",
		content: "Manage your luxury profile, track order history, and edit delivery details at Touch by Bel'voma."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-3x2OOTiM.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Touch by Bel'voma" },
		{
			name: "description",
			content: "Get in touch with Touch by Bel'voma. Questions about orders, sizing or styling? We'd love to help."
		},
		{
			property: "og:title",
			content: "Contact Us — Touch by Bel'voma"
		},
		{
			property: "og:description",
			content: "Questions about orders, sizing or styling? We'd love to help."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./checkout-DwTURGmV.mjs");
var Route$7 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Secured Checkout | Touch by Bel'voma" }, {
		name: "description",
		content: "Finalize your luxury jewelry purchase securely at Touch by Bel'voma."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./cart-B8Afic79.mjs");
var Route$6 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Shopping Cart — Touch by Bel'voma" },
		{
			name: "description",
			content: "Review your selected jewelry pieces and checkout securely."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-DvJ3j_Y1.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Our Story — Touch by Bel'voma" },
		{
			name: "description",
			content: "Touch by Bel'voma was born from a belief that elegance shouldn't be exclusive. Discover our story of craftsmanship, quality and affordable luxury."
		},
		{
			property: "og:title",
			content: "Our Story — Touch by Bel'voma"
		},
		{
			property: "og:description",
			content: "Elegance shouldn't be exclusive. Discover our story."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./routes-D_9UDiZm.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Touch by Bel'voma | Luxury Jewelry in Ghana" }, {
		name: "description",
		content: "Discover elegant earrings, necklaces, bracelets, rings, anklets, and luxury accessories at Touch by Bel'voma. Premium jewelry crafted to elevate your everyday style."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./superadmin.login-DHFjTOVc.mjs");
var Route$3 = createFileRoute("/superadmin/login")({
	head: () => ({ meta: [{ title: "Super Admin Gateway | Touch by Bel'voma" }, {
		name: "description",
		content: "Super Administrator portal for Touch by Bel'voma security clearance."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./superadmin.dashboard-Bkr5cf1b.mjs");
var Route$2 = createFileRoute("/superadmin/dashboard")({
	head: () => ({ meta: [{ title: "Super Admin | Touch by Bel'voma Control Center" }, {
		name: "description",
		content: "World-class Super Administrator control center."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin.login-D-EUUQoP.mjs");
var Route$1 = createFileRoute("/admin/login")({
	head: () => ({ meta: [{ title: "Admin Portal Access | Touch by Bel'voma" }, {
		name: "description",
		content: "Secure administrative entrance for Touch by Bel'voma."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.dashboard-BSMTglmA.mjs");
var Route = createFileRoute("/admin/dashboard")({
	head: () => ({ meta: [{ title: "Control Panel | Touch by Bel'voma Admin" }, {
		name: "description",
		content: "Administrative management portal for Touch by Bel'voma luxury brand."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WishlistRoute = Route$14.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$15
});
var TrackOrderRoute = Route$18.update({
	id: "/track-order",
	path: "/track-order",
	getParentRoute: () => Route$15
});
var SitemapDotxmlRoute = Route$13.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$15
});
var SignupRoute = Route$12.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$15
});
var ShopRoute = Route$19.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$15
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$15
});
var ForgotPasswordRoute = Route$10.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$15
});
var DashboardRoute = Route$9.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var CheckoutRoute = Route$7.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$15
});
var CartRoute = Route$6.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var SuperadminLoginRoute = Route$3.update({
	id: "/superadmin/login",
	path: "/superadmin/login",
	getParentRoute: () => Route$15
});
var SuperadminDashboardRoute = Route$2.update({
	id: "/superadmin/dashboard",
	path: "/superadmin/dashboard",
	getParentRoute: () => Route$15
});
var ProductProductIdRoute = Route$17.update({
	id: "/product/$productId",
	path: "/product/$productId",
	getParentRoute: () => Route$15
});
var OrderConfirmationOrderIdRoute = Route$16.update({
	id: "/order-confirmation/$orderId",
	path: "/order-confirmation/$orderId",
	getParentRoute: () => Route$15
});
var AdminLoginRoute = Route$1.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$15
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	DashboardRoute,
	ForgotPasswordRoute,
	LoginRoute,
	ShopRoute,
	SignupRoute,
	SitemapDotxmlRoute,
	TrackOrderRoute,
	WishlistRoute,
	AdminDashboardRoute: Route.update({
		id: "/admin/dashboard",
		path: "/admin/dashboard",
		getParentRoute: () => Route$15
	}),
	AdminLoginRoute,
	OrderConfirmationOrderIdRoute,
	ProductProductIdRoute,
	SuperadminDashboardRoute,
	SuperadminLoginRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
