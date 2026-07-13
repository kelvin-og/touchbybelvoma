import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Heart, At as ArrowRight, B as MapPin, H as LogOut, Q as History, T as Settings, f as Trash2, ht as Clock, i as User, kt as Award, v as Sparkles, w as ShieldAlert, wt as Check, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as formatPrice, o as products } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-8pwrqMyb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DashboardComponent() {
	const navigate = useNavigate();
	const { user, logout, wishlist, recentlyViewed, addresses, orders, addAddress, deleteAddress, toggleWishlist, addToCart } = useStore();
	const [activeTab, setActiveTab] = (0, import_react.useState)("welcome");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [gpsAddress, setGpsAddress] = (0, import_react.useState)("");
	const [streetAddress, setStreetAddress] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)("Greater Accra");
	const [addrError, setAddrError] = (0, import_react.useState)("");
	const [addrSuccess, setAddrSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!user) {
			const timer = setTimeout(() => {
				navigate({ to: "/login" });
			}, 1e3);
			return () => clearTimeout(timer);
		}
	}, [user, navigate]);
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-center items-center py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: { rotate: 360 },
			transition: {
				duration: 1.2,
				repeat: Infinity,
				ease: "linear"
			},
			className: "h-10 w-10 border-t-2 border-gold rounded-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-light text-muted-foreground mt-4 tracking-widest uppercase",
			children: "Verifying secure luxury session..."
		})]
	});
	const getGreeting = () => {
		const hr = (/* @__PURE__ */ new Date()).getHours();
		if (hr < 12) return "Good morning";
		if (hr < 17) return "Good afternoon";
		return "Good evening";
	};
	const handleAddAddress = (e) => {
		e.preventDefault();
		setAddrError("");
		setAddrSuccess(false);
		if (!/^[A-Z]{2}-\d{3,4}-\d{4}$/.test(gpsAddress.toUpperCase().trim())) {
			setAddrError("Invalid Ghana Post GPS Address. Format must be XX-XXX-XXXX (e.g. GA-182-9902 or AK-0329-8120).");
			return;
		}
		if (phone.trim().length < 9) {
			setAddrError("Please enter a valid phone number.");
			return;
		}
		addAddress({
			fullName,
			phone,
			gpsAddress: gpsAddress.toUpperCase().trim(),
			streetAddress,
			city,
			region
		});
		setAddrSuccess(true);
		setFullName("");
		setPhone("");
		setGpsAddress("");
		setStreetAddress("");
		setCity("");
		setTimeout(() => setAddrSuccess(false), 3e3);
	};
	const tabContentVariants = {
		hidden: {
			opacity: 0,
			y: 15
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [getGreeting(), ","]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-semibold text-foreground tracking-tight mt-1",
						children: user.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4 mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] tracking-widest bg-gold/10 text-gold font-medium px-3 py-1 rounded-full uppercase flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Gold Tier Member"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] tracking-widest text-muted-foreground font-light uppercase flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5" }), " 350 Bel'voma Points"]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						logout();
						navigate({ to: "/" });
					},
					className: "flex items-center gap-2 text-xs font-light text-muted-foreground hover:text-gold transition-colors py-2 px-4 rounded-full border border-border hover:border-gold/30 bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign Out"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border min-w-0 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("welcome"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "welcome" ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), " Account Overview"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("orders"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "orders" ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), " Order History"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("wishlist"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "wishlist" ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }),
								" Wishlist (",
								wishlist.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("addresses"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "addresses" ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
								" Addresses (",
								addresses.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("recent"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "recent" ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-4 w-4" }), " Recently Viewed"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("settings"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "settings" ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" }), " Settings"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
						mode: "wait",
						children: [
							activeTab === "welcome" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 rounded-2xl bg-card border border-gold/15 shadow-soft flex flex-col md:flex-row justify-between items-start md:items-center gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-semibold text-foreground",
											children: "Welcome to your private lounge"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-light text-muted-foreground mt-1 max-w-md",
											children: "As a valued member, enjoy complimentary shipping within Accra and Kumasi, early access to new seasonal edits, and 10% points accumulation."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/shop",
											className: "btn-gold shrink-0",
											children: ["Explore Edits ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-3 gap-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-6 bg-card border border-border rounded-xl",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-gold mb-3" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Recent Purchases"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "text-2xl font-semibold mt-1",
														children: [orders.length, " Orders"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setActiveTab("orders"),
														className: "text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block",
														children: "View orders →"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-6 bg-card border border-border rounded-xl",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 text-gold mb-3" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Saved Pieces"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "text-2xl font-semibold mt-1",
														children: [wishlist.length, " Items"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setActiveTab("wishlist"),
														className: "text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block",
														children: "Manage list →"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-6 bg-card border border-border rounded-xl",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-gold mb-3" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Delivery Address"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-xl font-semibold mt-1 truncate",
														children: addresses[0]?.gpsAddress || "No address saved"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setActiveTab("addresses"),
														className: "text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block",
														children: "Manage book →"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 bg-charcoal text-primary-foreground rounded-2xl relative overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute right-[-5%] top-[-20%] text-gold-light/10 pointer-events-none",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-48 w-48" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative z-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-gold-light tracking-[0.25em] uppercase font-semibold",
													children: "Special Offer"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-2xl font-semibold mt-2",
													children: "Unlock Your Welcome Gift"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-primary-foreground/75 mt-2 max-w-lg leading-relaxed",
													children: "Spend your earned points on checkout or redeem them for a free Touch by Bel'voma Velvet Jewelry Roll on orders above GH₵ 1,000."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-5 flex gap-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] border border-gold-light/30 px-3 py-1 rounded-full text-gold-light font-medium uppercase",
														children: "Code: TBBGIFT"
													})
												})
											]
										})]
									})
								]
							}, "welcome"),
							activeTab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold text-foreground border-b border-border pb-4",
									children: "Purchase History"
								}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center py-12 border border-dashed border-border rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground/60 mx-auto mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold",
											children: "No orders yet"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto",
											children: "Your jewelry box is empty. Begin shopping to build your timeless custom collection."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shop",
											className: "btn-gold mt-6 inline-flex",
											children: "Shop Jewelry"
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-6",
									children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border border-border bg-card rounded-xl p-6 shadow-soft",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap justify-between items-start border-b border-border pb-4 mb-4 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Order Reference"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 mt-0.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold",
															children: order.id
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/track-order",
															search: { orderId: order.id },
															className: "text-[9px] text-gold border border-gold/20 hover:border-gold px-2 py-0.5 rounded-md uppercase font-semibold transition-colors",
															children: "Track"
														})]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Transaction Date"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-light mt-0.5",
														children: order.date
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Payment Method"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-light mt-0.5",
														children: order.paymentMethod
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest",
														children: "Status"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `inline-block text-[10px] font-semibold uppercase tracking-widest mt-1 px-3 py-0.5 rounded-full ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-gold/10 text-gold"}`,
														children: order.status
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-4",
												children: order.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-4 items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "h-12 w-12 rounded-lg bg-accent overflow-hidden border border-border flex items-center justify-center shrink-0",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-muted-foreground uppercase",
																children: "TBB"
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
															className: "text-xs font-medium text-foreground",
															children: item.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[10px] text-muted-foreground mt-0.5",
															children: ["Quantity: ", item.qty]
														})] })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold text-gold",
														children: formatPrice(item.price * item.qty)
													})]
												}, idx))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "border-t border-border mt-4 pt-4 flex justify-between items-center text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground font-light",
													children: "Delivery Digital Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground uppercase",
													children: order.shippingAddress.gpsAddress
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center border-t border-border mt-2 pt-2 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: "Total Charged"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-gold",
													children: formatPrice(order.total)
												})]
											})
										]
									}, order.id))
								})]
							}, "orders"),
							activeTab === "wishlist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold text-foreground border-b border-border pb-4",
									children: "Saved Jewelry Pieces"
								}), wishlist.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center py-12 border border-dashed border-border rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-10 w-10 text-muted-foreground/60 mx-auto mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold",
											children: "Wishlist is empty"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto",
											children: "Add items you desire to your wishlist while shopping to track availability."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shop",
											className: "btn-gold mt-6 inline-flex",
											children: "Shop Pieces"
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: wishlist.map((id) => {
										const item = products.find((p) => p.id === id);
										if (!item) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 bg-card border border-border rounded-xl flex gap-4 items-center justify-between shadow-soft",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.images[0],
													alt: item.name,
													className: "h-16 w-16 rounded-lg object-cover shrink-0"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xs font-semibold text-foreground",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-gold mt-1",
													children: formatPrice(item.price)
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => addToCart(item.id, 1),
													className: "p-2 bg-gold/10 hover:bg-gold/25 text-gold text-[10px] rounded-lg font-medium uppercase transition-colors",
													children: "Add Cart"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => toggleWishlist(item.id),
													className: "p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors rounded-lg",
													"aria-label": "Delete item",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
												})]
											})]
										}, item.id);
									})
								})]
							}, "wishlist"),
							activeTab === "addresses" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold text-foreground border-b border-border pb-4",
										children: "Saved Ghana Delivery Addresses"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [addrSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: -5
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: { opacity: 0 },
										className: "p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " New delivery address saved successfully."]
									}), addrError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: -5
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: { opacity: 0 },
										className: "p-3 bg-destructive/5 border border-destructive/10 text-destructive text-xs font-light rounded-xl flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4" }),
											" ",
											addrError
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleAddAddress,
										className: "p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xs uppercase tracking-widest font-semibold text-gold",
												children: "Register New Address"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-2 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
													children: "Recipient Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: fullName,
													onChange: (e) => setFullName(e.target.value),
													placeholder: "e.g. Akosua Mensah",
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
													children: "Contact Phone"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "tel",
													required: true,
													value: phone,
													onChange: (e) => setPhone(e.target.value),
													placeholder: "e.g. +233 24 123 4567",
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-3 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
													children: "Ghana Post Digital GPS Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: gpsAddress,
													onChange: (e) => setGpsAddress(e.target.value),
													placeholder: "Format: GA-182-9902",
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "md:col-span-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
														children: "Street Address"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														required: true,
														value: streetAddress,
														onChange: (e) => setStreetAddress(e.target.value),
														placeholder: "e.g. Ring Road East, Danquah Circle",
														className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-2 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
													children: "City / Town"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: city,
													onChange: (e) => setCity(e.target.value),
													placeholder: "e.g. Osu, Accra",
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
													children: "Region"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: region,
													onChange: (e) => setRegion(e.target.value),
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none",
													children: [
														"Greater Accra",
														"Ashanti",
														"Eastern",
														"Western",
														"Central",
														"Volta",
														"Northern",
														"Upper East",
														"Upper West",
														"Bono",
														"Bono East",
														"Ahafo",
														"Oti",
														"Savannah",
														"North East",
														"Western North"
													].map((reg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: reg,
														children: reg
													}, reg))
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase",
												children: "Add to Address Book"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-4 mt-6",
										children: addresses.map((addr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 border border-border rounded-xl bg-card flex justify-between items-start gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs space-y-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-foreground",
														children: addr.fullName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground font-light",
														children: [
															addr.streetAddress,
															", ",
															addr.city
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground font-light",
														children: [addr.region, " Region, Ghana"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-gold font-medium uppercase tracking-widest text-[10px] pt-1",
														children: ["GPS Address: ", addr.gpsAddress]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground font-light text-[10px]",
														children: ["Contact: ", addr.phone]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => deleteAddress(addr.id),
												className: "p-2 text-muted-foreground hover:text-red-500 transition-colors",
												"aria-label": "Remove Address",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
											})]
										}, addr.id))
									})
								]
							}, "addresses"),
							activeTab === "recent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold text-foreground border-b border-border pb-4",
									children: "Recently Viewed Pieces"
								}), recentlyViewed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center py-12 border border-dashed border-border rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-10 w-10 text-muted-foreground/60 mx-auto mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold",
											children: "No recent browsing"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto",
											children: "Explore our timeless collections to build your browsing history."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shop",
											className: "btn-gold mt-6 inline-flex",
											children: "Browse Shop"
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-3 gap-6",
									children: recentlyViewed.map((id) => {
										const item = products.find((p) => p.id === id);
										if (!item) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "group card-lift relative border border-border bg-card rounded-xl overflow-hidden p-3 flex flex-col justify-between",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.images[0],
													alt: item.name,
													className: "aspect-square w-full object-cover rounded-lg"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-xs font-semibold text-foreground line-clamp-1",
														children: item.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold text-gold mt-0.5",
														children: formatPrice(item.price)
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/product/$productId",
													params: { productId: item.id },
													className: "mt-3 text-[10px] text-center font-medium uppercase tracking-widest py-2 rounded-lg bg-accent/40 group-hover:bg-gold group-hover:text-white transition-colors",
													children: "View Piece"
												})
											]
										}, item.id);
									})
								})]
							}, "recent"),
							activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold text-foreground border-b border-border pb-4",
										children: "Account Settings"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5 border border-border bg-card rounded-xl space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xs font-semibold uppercase tracking-wider text-gold",
												children: "Membership Profile"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs font-light space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold",
															children: "Registered Email:"
														}),
														" ",
														user.email
													] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold",
															children: "Account Level:"
														}),
														" ",
														"Premium Customer"
													] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold",
															children: "Join Date:"
														}),
														" ",
														new Date(user.createdAt).toLocaleDateString()
													] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-4 border-t border-border space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3 cursor-pointer group text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground group-hover:text-foreground transition-colors font-light",
														children: "Enable two-factor authentication (recommended)"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3 cursor-pointer group text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground group-hover:text-foreground transition-colors font-light",
														children: "Subscribe to Ghana collection alerts and flash discounts"
													})]
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5 border border-red-100 bg-red-50/10 rounded-xl space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xs font-semibold uppercase tracking-wider text-red-700",
												children: "Account Safety"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-light text-muted-foreground",
												children: "Deactivating your account will permanently delete saved delivery settings, accrued points, and previous order transactions."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-wider text-[10px] uppercase rounded-xl transition-all",
												children: "Deactivate Account"
											})
										]
									})
								]
							}, "settings")
						]
					})
				})]
			})]
		})
	});
}
//#endregion
export { DashboardComponent as component };
