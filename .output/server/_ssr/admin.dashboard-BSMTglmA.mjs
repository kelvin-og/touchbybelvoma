import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Package, H as LogOut, N as Percent, f as Trash2, j as Plus, r as Users, u as TrendingUp, vt as CircleCheckBig, w as ShieldAlert, wt as Check, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as formatPrice, o as products, r as getCediMultiplier } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.dashboard-BSMTglmA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboardComponent() {
	const navigate = useNavigate();
	const { user, logout, orders: globalOrders, updateOrderStatus } = useStore();
	const [activeTab, setActiveTab] = (0, import_react.useState)("analytics");
	const [productsList, setProductsList] = (0, import_react.useState)([]);
	const ordersList = globalOrders;
	const [promosList, setPromosList] = (0, import_react.useState)([]);
	const [customersList, setCustomersList] = (0, import_react.useState)([]);
	const [newProdName, setNewProdName] = (0, import_react.useState)("");
	const [newProdPrice, setNewProdPrice] = (0, import_react.useState)("");
	const [newProdCategory, setNewProdCategory] = (0, import_react.useState)("earrings");
	const [newProdStock, setNewProdStock] = (0, import_react.useState)("35");
	const [prodSuccess, setProdSuccess] = (0, import_react.useState)(false);
	const [promoCode, setPromoCode] = (0, import_react.useState)("");
	const [promoDiscount, setPromoDiscount] = (0, import_react.useState)("");
	const [promoSuccess, setPromoSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const storedProds = localStorage.getItem("tbb_admin_products");
		if (storedProds) setProductsList(JSON.parse(storedProds));
		else {
			const seededProds = products.map((p) => ({
				id: p.id,
				name: p.name,
				price: p.price,
				category: p.category,
				stock: p.id.includes("hoops") || p.id.includes("studs") ? 8 : 45
			}));
			setProductsList(seededProds);
			localStorage.setItem("tbb_admin_products", JSON.stringify(seededProds));
		}
		const storedPromos = localStorage.getItem("tbb_admin_promos");
		if (storedPromos) setPromosList(JSON.parse(storedPromos));
		else {
			const initialPromos = [
				{
					code: "TBBGIFT",
					discount: 15,
					status: "Active"
				},
				{
					code: "BELVOMA10",
					discount: 10,
					status: "Active"
				},
				{
					code: "KUMASI5",
					discount: 5,
					status: "Active"
				}
			];
			setPromosList(initialPromos);
			localStorage.setItem("tbb_admin_promos", JSON.stringify(initialPromos));
		}
		const dbString = localStorage.getItem("naa-users-db");
		if (dbString) setCustomersList(JSON.parse(dbString));
		else setCustomersList([]);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!user || user.role !== "admin") {
			const timer = setTimeout(() => {
				navigate({ to: "/admin/login" });
			}, 1e3);
			return () => clearTimeout(timer);
		}
	}, [user, navigate]);
	if (!user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-charcoal flex flex-col justify-center items-center py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: { rotate: 360 },
			transition: {
				duration: 1.2,
				repeat: Infinity,
				ease: "linear"
			},
			className: "h-10 w-10 border-t-2 border-gold rounded-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-light text-gold-light mt-4 tracking-widest uppercase",
			children: "Verifying secure admin protocols..."
		})]
	});
	const handleAddProduct = (e) => {
		e.preventDefault();
		if (!newProdName || !newProdPrice || !newProdStock) return;
		const updated = [{
			id: newProdName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
			name: newProdName,
			price: parseFloat(newProdPrice),
			category: newProdCategory,
			stock: parseInt(newProdStock)
		}, ...productsList];
		setProductsList(updated);
		localStorage.setItem("tbb_admin_products", JSON.stringify(updated));
		setNewProdName("");
		setNewProdPrice("");
		setNewProdStock("25");
		setProdSuccess(true);
		setTimeout(() => setProdSuccess(false), 3e3);
	};
	const handleUpdateStock = (id, newStockVal) => {
		const updated = productsList.map((p) => p.id === id ? {
			...p,
			stock: Math.max(0, newStockVal)
		} : p);
		setProductsList(updated);
		localStorage.setItem("tbb_admin_products", JSON.stringify(updated));
	};
	const handleAddPromo = (e) => {
		e.preventDefault();
		if (!promoCode || !promoDiscount) return;
		const updated = [{
			code: promoCode.toUpperCase().trim(),
			discount: parseInt(promoDiscount),
			status: "Active"
		}, ...promosList];
		setPromosList(updated);
		localStorage.setItem("tbb_admin_promos", JSON.stringify(updated));
		setPromoCode("");
		setPromoDiscount("");
		setPromoSuccess(true);
		setTimeout(() => setPromoSuccess(false), 3e3);
	};
	const handleDeletePromo = (code) => {
		const updated = promosList.filter((p) => p.code !== code);
		setPromosList(updated);
		localStorage.setItem("tbb_admin_promos", JSON.stringify(updated));
	};
	const handleProcessOrder = (orderId, newStatus) => {
		updateOrderStatus(orderId, newStatus);
	};
	const totalSalesGhs = ordersList.reduce((sum, o) => sum + o.total, 0) * getCediMultiplier();
	const totalOrders = ordersList.length;
	const averageOrderGhs = totalOrders > 0 ? totalSalesGhs / totalOrders : 0;
	const tabContentVariants = {
		hidden: {
			opacity: 0,
			y: 12
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
				className: "border-b border-border pb-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Executive Panel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold tracking-tight mt-1 text-foreground",
						children: "Touch by Bel'voma Control Panel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-light text-muted-foreground mt-1",
						children: [
							"Logged in as ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: user.name
							}),
							" ",
							"(Security Level: Principal Administrator)"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						logout();
						navigate({ to: "/admin/login" });
					},
					className: "flex items-center gap-2 text-xs font-semibold text-charcoal border border-charcoal/20 hover:border-gold py-2 px-5 bg-card rounded-xl transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " End Admin Session"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border shrink-0 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("analytics"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "analytics" ? "bg-charcoal text-white font-semibold shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-gold" }), " Sales Analytics"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("products"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "products" ? "bg-charcoal text-white font-semibold shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4 text-gold" }), " Product Catalog"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("inventory"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "inventory" ? "bg-charcoal text-white font-semibold shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4 text-gold" }), " Stock & Inventory"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("orders"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "orders" ? "bg-charcoal text-white font-semibold shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-gold" }), " Processing Orders"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("customers"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "customers" ? "bg-charcoal text-white font-semibold shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-gold" }), " Customer Registry"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("promos"),
							className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${activeTab === "promos" ? "bg-charcoal text-white font-semibold shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { className: "h-4 w-4 text-gold" }), " Discounts & Promos"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
						mode: "wait",
						children: [
							activeTab === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-3 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6 bg-card border border-border rounded-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground uppercase tracking-widest font-semibold",
													children: "Total Revenue (Localized)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
													className: "text-3xl font-semibold mt-1 text-gold",
													children: ["GH₵ ", totalSalesGhs.toLocaleString()]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground mt-2 font-light",
													children: "Accumulated value from processed cart checks."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6 bg-card border border-border rounded-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground uppercase tracking-widest font-semibold",
													children: "Processed Sales"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
													className: "text-3xl font-semibold mt-1",
													children: [totalOrders, " Purchases"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground mt-2 font-light",
													children: "Total verified transactions dispatched."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6 bg-card border border-border rounded-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground uppercase tracking-widest font-semibold",
													children: "Average Ticket Value"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
													className: "text-3xl font-semibold mt-1",
													children: [
														"GH₵",
														" ",
														averageOrderGhs.toLocaleString("en-US", { maximumFractionDigits: 0 })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground mt-2 font-light",
													children: "Cedi shopping ticket mean conversion rate."
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 bg-card border border-border rounded-xl space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs uppercase tracking-widest font-semibold text-gold",
										children: "Cedi Revenue Projection (2026)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-48 w-full flex items-end gap-3 pt-6",
										children: [
											15,
											30,
											45,
											25,
											60,
											80,
											95
										].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 flex flex-col items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: { height: 0 },
												animate: { height: `${h}%` },
												transition: {
													duration: .8,
													delay: i * .05
												},
												className: "w-full bg-gradient-to-t from-gold to-gold-light rounded-t-md relative group",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "opacity-0 group-hover:opacity-100 absolute top-[-25px] left-1/2 -translate-x-1/2 text-[9px] font-semibold bg-charcoal text-white px-1.5 py-0.5 rounded transition-all whitespace-nowrap",
													children: [
														"GH₵",
														" ",
														(h * 100 * getCediMultiplier()).toLocaleString()
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase tracking-wider text-muted-foreground",
												children: [
													"Jan",
													"Feb",
													"Mar",
													"Apr",
													"May",
													"Jun",
													"Jul"
												][i]
											})]
										}, i))
									})]
								})]
							}, "analytics"),
							activeTab === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold text-foreground border-b border-border pb-4",
										children: "Product Catalog"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: prodSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: -10
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: { opacity: 0 },
										className: "p-3.5 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4.5 w-4.5 text-green-600" }),
											" ",
											"New jewelry catalog entry logged successfully."
										]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleAddProduct,
										className: "p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xs uppercase tracking-widest font-semibold text-gold",
												children: "Log New Catalog Entry"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-4 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "md:col-span-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[9px] uppercase tracking-widest text-muted-foreground block mb-1",
															children: "Product Name"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															required: true,
															value: newProdName,
															onChange: (e) => setNewProdName(e.target.value),
															placeholder: "e.g. Aurelia Gold Hoops",
															className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[9px] uppercase tracking-widest text-muted-foreground block mb-1",
														children: "Base Price ($)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "number",
														required: true,
														value: newProdPrice,
														onChange: (e) => setNewProdPrice(e.target.value),
														placeholder: "e.g. 42",
														className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[9px] uppercase tracking-widest text-muted-foreground block mb-1",
														children: "Category"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: newProdCategory,
														onChange: (e) => setNewProdCategory(e.target.value),
														className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "earrings",
																children: "Earrings"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "necklaces",
																children: "Necklaces"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "rings",
																children: "Rings"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "bracelets",
																children: "Bracelets"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "anklets",
																children: "Anklets"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "sets",
																children: "Sets"
															})
														]
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 md:grid-cols-4 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[9px] uppercase tracking-widest text-muted-foreground block mb-1",
													children: "Stock Pieces"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													required: true,
													value: newProdStock,
													onChange: (e) => setNewProdStock(e.target.value),
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "md:col-span-3 flex items-end",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "submit",
														className: "btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add catalog piece"]
													})
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto border border-border rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left border-collapse text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "bg-muted/40 border-b border-border uppercase tracking-widest text-[9px] text-muted-foreground font-semibold",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Name"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Category"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Base Price"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Cedi Price"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Stock"
													})
												]
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-border",
												children: productsList.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "hover:bg-accent/10",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-4 font-semibold text-foreground",
															children: prod.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-4 text-muted-foreground uppercase tracking-widest text-[10px]",
															children: prod.category
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "p-4 text-muted-foreground",
															children: ["$", prod.price]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-4 font-semibold text-gold",
															children: formatPrice(prod.price)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: `p-4 font-semibold ${prod.stock < 10 ? "text-red-500 font-bold" : "text-foreground"}`,
															children: [prod.stock, " Units"]
														})
													]
												}, prod.id))
											})]
										})
									})
								]
							}, "products"),
							activeTab === "inventory" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold text-foreground border-b border-border pb-4",
									children: "Stock Level Indicators"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: productsList.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 border border-border bg-card rounded-xl flex items-center justify-between shadow-soft",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground",
													children: prod.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground uppercase tracking-widest",
													children: prod.category
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1.5 pt-1",
													children: prod.stock < 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[9px] uppercase tracking-wider font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-3 w-3" }), " Critical Stock Level"]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[9px] uppercase tracking-wider font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Stock Level Good"]
													})
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 shrink-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => handleUpdateStock(prod.id, prod.stock - 5),
													className: "h-8 w-8 rounded-lg border border-border flex items-center justify-center text-xs font-semibold bg-accent/30 hover:bg-accent transition-colors",
													children: "-5"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-foreground w-12 text-center",
													children: prod.stock
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => handleUpdateStock(prod.id, prod.stock + 5),
													className: "h-8 w-8 rounded-lg border border-border flex items-center justify-center text-xs font-semibold bg-accent/30 hover:bg-accent transition-colors",
													children: "+5"
												})
											]
										})]
									}, prod.id))
								})]
							}, "inventory"),
							activeTab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold text-foreground border-b border-border pb-4",
									children: "Processing Orders"
								}), ordersList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center py-12 border border-dashed border-border rounded-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground/50 mx-auto mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold",
											children: "No transactions logged"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto",
											children: "No orders have been generated in system session database."
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: ordersList.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5 border border-border bg-card rounded-xl space-y-4 shadow-soft",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap justify-between items-start border-b border-border pb-3 gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
														children: "Order Ref"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold",
														children: order.id
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
														children: "Recipient Name"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold",
														children: order.shippingAddress.fullName
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
														children: "Payment Channel"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold text-gold",
														children: order.paymentMethod
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
														children: "Current Status"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `inline-block text-[9px] font-semibold uppercase tracking-widest mt-0.5 px-2.5 py-0.5 rounded-full ${order.status === "Delivered" ? "bg-green-50 text-green-700 border border-green-100" : "bg-gold/10 text-gold border border-gold/20"}`,
														children: order.status
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs space-y-1 bg-accent/20 p-3 rounded-lg",
												children: order.items.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-light",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: i.name
														}),
														" ",
														"x ",
														i.qty,
														" —",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-gold font-medium",
															children: [formatPrice(i.price), " each"]
														})
													]
												}, idx))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"Ship To Digital Address:",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground uppercase",
														children: order.shippingAddress.gpsAddress
													}),
													" ",
													"(",
													order.shippingAddress.streetAddress,
													",",
													" ",
													order.shippingAddress.city,
													")"
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-gold text-sm",
													children: formatPrice(order.total)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-4 justify-between items-center border-t border-border pt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] uppercase tracking-widest font-semibold text-muted-foreground",
													children: "Adjust Dispatch Stage:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: order.status,
													onChange: (e) => handleProcessOrder(order.id, e.target.value),
													className: "text-xs border border-border bg-card p-2 rounded-xl focus:border-gold outline-none font-semibold text-gold",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Payment Pending",
															children: "Payment Pending"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Order Received",
															children: "Order Received"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Payment Confirmed",
															children: "Payment Confirmed"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Processing",
															children: "Processing"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Packaging",
															children: "Packaging"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Shipped",
															children: "Shipped"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Out for Delivery",
															children: "Out for Delivery"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Delivered",
															children: "Delivered"
														})
													]
												})]
											})
										]
									}, order.id))
								})]
							}, "orders"),
							activeTab === "customers" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold text-foreground border-b border-border pb-4",
									children: "Customer Directory"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto border border-border rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left border-collapse text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "bg-muted/40 border-b border-border uppercase tracking-widest text-[9px] text-muted-foreground font-semibold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Customer Name"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Email"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Ghana Phone"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Role"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Registration Date"
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border",
											children: customersList.map((cust, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-accent/10",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 font-semibold text-foreground",
														children: cust.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-muted-foreground",
														children: cust.email
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-muted-foreground",
														children: cust.phone
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${cust.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-gold/10 text-gold"}`,
															children: cust.role
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-muted-foreground",
														children: new Date(cust.createdAt).toLocaleDateString()
													})
												]
											}, idx))
										})]
									})
								})]
							}, "customers"),
							activeTab === "promos" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								exit: "hidden",
								variants: tabContentVariants,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold text-foreground border-b border-border pb-4",
										children: "Discount Code Campaigns"
									}),
									promoSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Promotional discount code generated successfully."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleAddPromo,
										className: "p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs uppercase tracking-widest font-semibold text-gold",
											children: "Create Campaign Code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-3 gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[9px] uppercase tracking-widest text-muted-foreground block mb-1",
													children: "Coupon Code"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: promoCode,
													onChange: (e) => setPromoCode(e.target.value),
													placeholder: "e.g. LUXURY20",
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[9px] uppercase tracking-widest text-muted-foreground block mb-1",
													children: "Percentage Off (%)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													required: true,
													value: promoDiscount,
													onChange: (e) => setPromoDiscount(e.target.value),
													placeholder: "e.g. 20",
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-end",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "submit",
														className: "btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase w-full",
														children: "Register Coupon"
													})
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto border border-border rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left border-collapse text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "bg-muted/40 border-b border-border uppercase tracking-widest text-[9px] text-muted-foreground font-semibold",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Promo Code"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Discount Rate"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4",
														children: "Active Status"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-4 text-right",
														children: "Actions"
													})
												]
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-border",
												children: promosList.map((promo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "hover:bg-accent/10",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-4 font-semibold text-foreground uppercase tracking-widest",
															children: promo.code
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "p-4 text-muted-foreground",
															children: [promo.discount, "% Off"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-4",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-50 text-green-700",
																children: promo.status
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-4 text-right",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => handleDeletePromo(promo.code),
																className: "text-muted-foreground hover:text-red-500 transition-colors p-2",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
															})
														})
													]
												}, promo.code))
											})]
										})
									})
								]
							}, "promos")
						]
					})
				})]
			})]
		})
	});
}
//#endregion
export { AdminDashboardComponent as component };
