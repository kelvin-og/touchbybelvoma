import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as MapPin, Ct as ChevronDown, D as Save, E as Search, Et as ChartColumn, F as Package, G as LayoutDashboard, H as LogOut, K as Layers, L as MessageSquare, Mt as Archive, Ot as Boxes, P as PenLine, Pt as Activity, S as Shield, St as ChevronRight, T as Settings, Tt as ChartNoAxesColumn, U as Lock, V as Mail, X as Info, Z as Image, _ as Star, _t as CircleCheck, a as UserCheck, at as FileText, b as ShoppingCart, c as Truck, d as TrendingDown, dt as DollarSign, et as Hash, f as Trash2, ft as Crown, g as Tag, gt as CircleX, h as Terminal, ht as Clock, j as Plus, k as RefreshCw, l as TriangleAlert, lt as ExternalLink, m as ToggleLeft, mt as Copy, n as X, nt as Globe, o as Upload, p as ToggleRight, pt as CreditCard, q as Key, r as Users, rt as Gift, t as Zap, u as TrendingUp, ut as Download, v as Sparkles, wt as Check, x as ShoppingBag, xt as ChevronUp, yt as CircleAlert, z as Megaphone } from "../_libs/lucide-react.mjs";
import { n as formatPrice, o as products } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/superadmin.dashboard-Bkr5cf1b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function KpiCard({ label, value, sub, icon: Icon, trend, trendValue, color = "gold" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `p-2.5 rounded-xl border ${{
					gold: "text-amber-600 bg-amber-50 border-amber-100",
					green: "text-emerald-600 bg-emerald-50 border-emerald-100",
					blue: "text-blue-600 bg-blue-50 border-blue-100",
					red: "text-red-600 bg-red-50 border-red-100",
					purple: "text-purple-600 bg-purple-50 border-purple-100"
				}[color]}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}), trend && trendValue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `text-[10px] font-semibold flex items-center gap-0.5 px-2 py-0.5 rounded-full ${trend === "up" ? "text-emerald-600 bg-emerald-50" : trend === "down" ? "text-red-500 bg-red-50" : "text-gray-500 bg-gray-100"}`,
				children: [trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }) : trend === "down" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3" }) : null, trendValue]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-bold text-gray-900",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium text-gray-500 mt-0.5 uppercase tracking-wider",
					children: label
				}),
				sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-gray-400 mt-1",
					children: sub
				})
			]
		})]
	});
}
function NavItem({ icon: Icon, label, section, active, badge, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => onClick(section),
		className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${active ? "bg-amber-50 text-amber-700 border border-amber-200 shadow-sm" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 shrink-0 ${active ? "text-amber-600" : ""}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 text-left tracking-wide",
				children: label
			}),
			badge !== void 0 && badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-red-500 text-white text-[9px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center",
				children: badge
			})
		]
	});
}
function MiniBarChart({ data, color = "#D4AF37" }) {
	const max = Math.max(...data, 1);
	const months = [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-end gap-1 h-20",
		children: data.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { height: 0 },
				animate: { height: `${v / max * 100}%` },
				transition: {
					duration: .6,
					delay: i * .04,
					ease: "easeOut"
				},
				style: {
					backgroundColor: color,
					minHeight: 2
				},
				className: "w-full rounded-t-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[8px] text-gray-400",
				children: months[i]
			})]
		}, i))
	});
}
function SectionHeader({ icon: Icon, title, subtitle, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-2 bg-amber-50 border border-amber-100 rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-amber-600" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold text-gray-900",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-gray-500",
				children: subtitle
			})] })]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2",
			children: actions
		})]
	});
}
function Field({ label, children, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5",
		children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-red-400 ml-0.5",
			children: "*"
		})]
	}), children] });
}
var inputCls = "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300";
var selectCls = "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all";
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${{
			Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
			"Order Received": "bg-blue-50 text-blue-700 border-blue-200",
			"Payment Confirmed": "bg-indigo-50 text-indigo-700 border-indigo-200",
			Processing: "bg-amber-50 text-amber-700 border-amber-200",
			Packaging: "bg-orange-50 text-orange-700 border-orange-200",
			Shipped: "bg-purple-50 text-purple-700 border-purple-200",
			"Out for Delivery": "bg-teal-50 text-teal-700 border-teal-200",
			"Payment Pending": "bg-red-50 text-red-600 border-red-200",
			published: "bg-emerald-50 text-emerald-700 border-emerald-200",
			draft: "bg-gray-100 text-gray-600 border-gray-200",
			archived: "bg-orange-50 text-orange-700 border-orange-200",
			active: "bg-emerald-50 text-emerald-700 border-emerald-200",
			expired: "bg-red-50 text-red-600 border-red-200",
			paused: "bg-yellow-50 text-yellow-700 border-yellow-200",
			Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
			Banned: "bg-red-50 text-red-600 border-red-200"
		}[status] || "bg-gray-100 text-gray-600 border-gray-200"}`,
		children: status
	});
}
function Toast({ msg, type = "success", onClose }) {
	(0, import_react.useEffect)(() => {
		const t = setTimeout(onClose, 3e3);
		return () => clearTimeout(t);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: -12,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -12,
			scale: .96
		},
		className: `fixed top-6 right-6 z-[200] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl text-sm font-medium ${type === "success" ? "bg-emerald-600 text-white" : type === "error" ? "bg-red-600 text-white" : "bg-gray-900 text-white"}`,
		children: [
			type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : type === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4" }),
			msg,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "ml-2 opacity-70 hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
function OverviewSection({ orders, products: prods, customers, cediMultiplier, addLog }) {
	const totalRevGhs = orders.reduce((s, o) => s + o.total, 0) * cediMultiplier;
	const completedOrders = orders.filter((o) => o.status === "Delivered").length;
	const pendingOrders = orders.filter((o) => o.status !== "Delivered" && o.status !== "Payment Pending").length;
	const cancelledOrders = orders.filter((o) => o.status === "Payment Pending").length;
	const inStockProds = prods.filter((p) => p.stock > 10).length;
	const lowStockProds = prods.filter((p) => p.stock > 0 && p.stock <= 10).length;
	const outOfStock = prods.filter((p) => p.stock === 0).length;
	const todaySales = orders.filter((o) => o.date === (/* @__PURE__ */ new Date()).toISOString().split("T")[0]).reduce((s, o) => s + o.total * cediMultiplier, 0);
	const avgOrderGhs = orders.length > 0 ? totalRevGhs / orders.length : 0;
	const revenueData = [
		12,
		19,
		28,
		22,
		35,
		41,
		38,
		50,
		45,
		62,
		58,
		74
	];
	const salesData = [
		3,
		5,
		7,
		4,
		9,
		11,
		8,
		13,
		10,
		15,
		12,
		18
	];
	const recentOrders = [...orders].slice(0, 5);
	const bestSellers = prods.filter((p) => p.isBestSeller).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: LayoutDashboard,
				title: "Executive Dashboard",
				subtitle: "Real-time overview of Touch by Bel'voma operations",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => addLog({
						category: "Config",
						action: "Dashboard refreshed",
						user: "superadmin",
						ip: "127.0.0.1"
					}),
					className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), " Refresh"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Revenue",
						value: `GH₵ ${totalRevGhs.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
						sub: "All-time accumulated",
						icon: DollarSign,
						color: "gold",
						trend: "up",
						trendValue: "+18.4%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Today's Sales",
						value: `GH₵ ${todaySales.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
						sub: "Current day revenue",
						icon: Zap,
						color: "green",
						trend: "up",
						trendValue: "+5.2%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Orders",
						value: orders.length,
						sub: `${completedOrders} completed`,
						icon: ShoppingCart,
						color: "blue",
						trend: "up",
						trendValue: "+12%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Avg Order Value",
						value: `GH₵ ${avgOrderGhs.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
						sub: "Per transaction",
						icon: TrendingUp,
						color: "purple",
						trend: "up",
						trendValue: "+3.1%"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Pending Orders",
						value: pendingOrders,
						sub: "Awaiting processing",
						icon: Clock,
						color: "gold",
						trend: "neutral",
						trendValue: "live"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Completed Orders",
						value: completedOrders,
						sub: "Successfully delivered",
						icon: CircleCheck,
						color: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Cancelled / Pending Pay",
						value: cancelledOrders,
						sub: "Needs attention",
						icon: CircleX,
						color: "red",
						trend: "down",
						trendValue: "-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Customers",
						value: customers.length,
						sub: `${customers.filter((c) => c.active !== false).length} active`,
						icon: UserCheck,
						color: "blue",
						trend: "up",
						trendValue: "+8"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Products In Stock",
						value: inStockProds,
						sub: "Healthy stock level",
						icon: Package,
						color: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Low Stock",
						value: lowStockProds,
						sub: "≤10 units remaining",
						icon: TriangleAlert,
						color: "gold",
						trend: lowStockProds > 0 ? "down" : "neutral",
						trendValue: lowStockProds > 0 ? "Restock!" : "OK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Out of Stock",
						value: outOfStock,
						sub: "Needs immediate restock",
						icon: CircleAlert,
						color: "red"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Products",
						value: prods.length,
						sub: "Across all categories",
						icon: Boxes,
						color: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-gray-900",
							children: "Revenue Trend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-gray-400",
							children: "GH₵ — Monthly 2026"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full",
							children: "+18.4% YTD"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBarChart, {
						data: revenueData,
						color: "#D4AF37"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-gray-900",
							children: "Orders Volume"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-gray-400",
							children: "Orders per month 2026"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full",
							children: "+12% MoM"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBarChart, {
						data: salesData,
						color: "#6366f1"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-amber-500" }), " Recent Orders"]
					}), recentOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gray-400 py-4 text-center",
						children: "No orders yet"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: recentOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs border-b border-gray-50 pb-3 last:border-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-gray-800",
								children: o.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gray-400",
								children: o.shippingAddress.fullName
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-amber-600",
									children: [
										"GH₵",
										" ",
										(o.total * cediMultiplier).toLocaleString("en-US", { maximumFractionDigits: 0 })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: o.status })]
							})]
						}, o.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4 text-amber-500" }), " Best Selling Products"]
					}), bestSellers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gray-400 py-4 text-center",
						children: "No bestsellers marked"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: bestSellers.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs border-b border-gray-50 pb-3 last:border-0 last:pb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-gray-800 truncate",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-gray-400 capitalize",
										children: p.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-amber-600",
										children: formatPrice(p.price)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-gray-400",
										children: [p.stock, " units"]
									})]
								})
							]
						}, p.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-amber-500" }), " Quick Actions"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
					children: [
						{
							icon: Plus,
							label: "Add Product",
							color: "amber"
						},
						{
							icon: Tag,
							label: "New Promo",
							color: "purple"
						},
						{
							icon: Mail,
							label: "Send Email",
							color: "blue"
						},
						{
							icon: Download,
							label: "Export Orders",
							color: "green"
						},
						{
							icon: Upload,
							label: "Bulk Import",
							color: "indigo"
						},
						{
							icon: ChartColumn,
							label: "View Reports",
							color: "rose"
						}
					].map(({ icon: Ic, label, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50 text-[10px] font-semibold uppercase tracking-wider text-gray-600 hover:text-amber-700 transition-all`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ic, { className: "h-5 w-5" }), label]
					}, label))
				})]
			})
		]
	});
}
function ProductsSection({ products: prods, setProducts, cediMultiplier, addLog }) {
	const [view, setView] = (0, import_react.useState)("list");
	const [search, setSearch] = (0, import_react.useState)("");
	const [catFilter, setCatFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		status: "published",
		isFeatured: false,
		isBestSeller: false,
		isNew: false,
		tags: [],
		images: [],
		category: "earrings"
	});
	const [tagInput, setTagInput] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => prods.filter((p) => {
		const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.sku?.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
		const matchCat = catFilter === "all" || p.category === catFilter;
		const matchStatus = statusFilter === "all" || p.status === statusFilter;
		return matchSearch && matchCat && matchStatus;
	}), [
		prods,
		search,
		catFilter,
		statusFilter
	]);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => {
		setToast({
			msg,
			type
		});
	}, []);
	const saveProduct = (e) => {
		e.preventDefault();
		if (!form.name || !form.price) return;
		if (editingId) {
			setProducts((prev) => prev.map((p) => p.id === editingId ? {
				...p,
				...form
			} : p));
			addLog({
				category: "Product",
				action: `Edited product: ${form.name}`,
				user: "superadmin",
				ip: "127.0.0.1"
			});
			showToast(`"${form.name}" updated successfully`);
		} else {
			const newProd = {
				id: (form.name || "product").toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
				name: form.name || "",
				sku: form.sku || `TBB-${Math.floor(Math.random() * 9e3 + 1e3)}`,
				category: form.category || "earrings",
				price: form.price || 0,
				discountPrice: form.discountPrice,
				costPrice: form.costPrice,
				stock: form.stock || 0,
				status: form.status || "published",
				isFeatured: form.isFeatured || false,
				isBestSeller: form.isBestSeller || false,
				isNew: form.isNew || false,
				material: form.material || "",
				description: form.description || "",
				tags: form.tags || [],
				images: form.images || [],
				weight: form.weight,
				seoTitle: form.seoTitle,
				seoDesc: form.seoDesc
			};
			setProducts((prev) => {
				const updated = [newProd, ...prev];
				localStorage.setItem("tbb_admin_products_v2", JSON.stringify(updated));
				return updated;
			});
			addLog({
				category: "Product",
				action: `Created product: ${newProd.name}`,
				user: "superadmin",
				ip: "127.0.0.1"
			});
			showToast(`"${newProd.name}" added to catalog`);
		}
		setForm({
			status: "published",
			isFeatured: false,
			isBestSeller: false,
			isNew: false,
			tags: [],
			images: [],
			category: "earrings"
		});
		setEditingId(null);
		setView("list");
	};
	const deleteProduct = (id, name) => {
		setProducts((prev) => prev.filter((p) => p.id !== id));
		addLog({
			category: "Product",
			action: `Deleted product: ${name}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`"${name}" removed from catalog`, "info");
	};
	const duplicateProduct = (prod) => {
		const dup = {
			...prod,
			id: prod.id + "-copy-" + Date.now(),
			name: prod.name + " (Copy)",
			status: "draft"
		};
		setProducts((prev) => [dup, ...prev]);
		showToast(`Duplicated "${prod.name}"`);
	};
	const toggleFeatured = (id) => {
		setProducts((prev) => prev.map((p) => p.id === id ? {
			...p,
			isFeatured: !p.isFeatured
		} : p));
	};
	const toggleBestSeller = (id) => {
		setProducts((prev) => prev.map((p) => p.id === id ? {
			...p,
			isBestSeller: !p.isBestSeller
		} : p));
	};
	const archiveProduct = (id, name) => {
		setProducts((prev) => prev.map((p) => p.id === id ? {
			...p,
			status: "archived"
		} : p));
		addLog({
			category: "Product",
			action: `Archived product: ${name}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`"${name}" archived`);
	};
	const bulkDelete = () => {
		setProducts((prev) => prev.filter((p) => !selected.includes(p.id)));
		addLog({
			category: "Product",
			action: `Bulk deleted ${selected.length} products`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`${selected.length} products deleted`, "info");
		setSelected([]);
	};
	const exportCSV = () => {
		const header = "ID,Name,SKU,Category,Price,Stock,Status\n";
		const rows = prods.map((p) => `${p.id},${p.name},${p.sku || ""},${p.category},${p.price},${p.stock},${p.status}`).join("\n");
		const blob = new Blob([header + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "products.csv";
		a.click();
		showToast("Products exported as CSV");
	};
	const startEdit = (prod) => {
		setForm({ ...prod });
		setEditingId(prod.id);
		setView("form");
	};
	const categories = [
		"earrings",
		"necklaces",
		"rings",
		"bracelets",
		"anklets",
		"sets"
	];
	if (view === "form") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: editingId ? PenLine : Plus,
				title: editingId ? "Edit Product" : "Add New Product",
				subtitle: "Complete product information below",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setView("list");
						setEditingId(null);
						setForm({
							status: "published",
							isFeatured: false,
							isBestSeller: false,
							isNew: false,
							tags: [],
							images: [],
							category: "earrings"
						});
					},
					className: "flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-2 rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), " Cancel"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: saveProduct,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-gray-800 uppercase tracking-widest",
								children: "Basic Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Product Name",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.name || "",
											onChange: (e) => setForm((f) => ({
												...f,
												name: e.target.value
											})),
											placeholder: "e.g. Aurelia Gold Hoops",
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "SKU",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.sku || "",
											onChange: (e) => setForm((f) => ({
												...f,
												sku: e.target.value
											})),
											placeholder: "Auto-generated if blank"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Category",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: selectCls,
											value: form.category || "earrings",
											onChange: (e) => setForm((f) => ({
												...f,
												category: e.target.value
											})),
											children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: c,
												children: c.charAt(0).toUpperCase() + c.slice(1)
											}, c))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Status",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: selectCls,
											value: form.status || "published",
											onChange: (e) => setForm((f) => ({
												...f,
												status: e.target.value
											})),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "published",
													children: "Published"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "draft",
													children: "Draft"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "archived",
													children: "Archived"
												})
											]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 h-24 resize-none",
									value: form.description || "",
									onChange: (e) => setForm((f) => ({
										...f,
										description: e.target.value
									})),
									placeholder: "Product description..."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Material",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: form.material || "",
									onChange: (e) => setForm((f) => ({
										...f,
										material: e.target.value
									})),
									placeholder: "e.g. 18k Gold Plated Brass"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-gray-800 uppercase tracking-widest",
								children: "Pricing & Inventory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Base Price (USD)",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											step: "0.01",
											className: inputCls,
											value: form.price || "",
											onChange: (e) => setForm((f) => ({
												...f,
												price: parseFloat(e.target.value)
											})),
											placeholder: "0.00",
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sale Price (USD)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											step: "0.01",
											className: inputCls,
											value: form.discountPrice || "",
											onChange: (e) => setForm((f) => ({
												...f,
												discountPrice: parseFloat(e.target.value)
											})),
											placeholder: "0.00"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Cost Price (USD)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											step: "0.01",
											className: inputCls,
											value: form.costPrice || "",
											onChange: (e) => setForm((f) => ({
												...f,
												costPrice: parseFloat(e.target.value)
											})),
											placeholder: "0.00"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Stock Qty",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											className: inputCls,
											value: form.stock ?? "",
											onChange: (e) => setForm((f) => ({
												...f,
												stock: parseInt(e.target.value)
											})),
											placeholder: "0",
											required: true
										})
									})
								]
							}),
							form.price && form.costPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-emerald-600 font-medium",
								children: [
									"Profit Margin:",
									" ",
									((form.price - form.costPrice) / form.price * 100).toFixed(1),
									"% — GH₵",
									" ",
									((form.price - form.costPrice) * cediMultiplier).toFixed(2),
									" ",
									"per unit"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-bold text-gray-800 uppercase tracking-widest mb-4",
							children: "Labels & Flags"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-4",
							children: [
								{
									key: "isFeatured",
									label: "Featured Product"
								},
								{
									key: "isBestSeller",
									label: "Best Seller"
								},
								{
									key: "isNew",
									label: "New Arrival"
								}
							].map(({ key, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: !!form[key],
									onChange: (e) => setForm((f) => ({
										...f,
										[key]: e.target.checked
									})),
									className: "w-4 h-4 rounded accent-amber-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-gray-700",
									children: label
								})]
							}, key))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-gray-800 uppercase tracking-widest mb-4",
								children: "Tags"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 flex-1",
									value: tagInput,
									onChange: (e) => setTagInput(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											if (tagInput.trim()) {
												setForm((f) => ({
													...f,
													tags: [...f.tags || [], tagInput.trim()]
												}));
												setTagInput("");
											}
										}
									},
									placeholder: "Add tag and press Enter..."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										if (tagInput.trim()) {
											setForm((f) => ({
												...f,
												tags: [...f.tags || [], tagInput.trim()]
											}));
											setTagInput("");
										}
									},
									className: "px-4 py-2 bg-amber-100 text-amber-700 rounded-xl text-xs font-semibold hover:bg-amber-200 transition-colors",
									children: "Add"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: (form.tags || []).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-semibold px-2.5 py-1 rounded-full",
									children: [tag, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setForm((f) => ({
											...f,
											tags: (f.tags || []).filter((t) => t !== tag)
										})),
										className: "hover:text-red-500",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
									})]
								}, tag))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-gray-800 uppercase tracking-widest",
								children: "SEO Settings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "SEO Title",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.seoTitle || "",
										onChange: (e) => setForm((f) => ({
											...f,
											seoTitle: e.target.value
										})),
										placeholder: "Search engine title..."
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Weight",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.weight || "",
										onChange: (e) => setForm((f) => ({
											...f,
											weight: e.target.value
										})),
										placeholder: "e.g. 25g"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "SEO Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 h-20 resize-none",
									value: form.seoDesc || "",
									onChange: (e) => setForm((f) => ({
										...f,
										seoDesc: e.target.value
									})),
									placeholder: "Meta description for search engines..."
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "btn-gold px-8 py-3 text-xs tracking-widest",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }),
								" ",
								editingId ? "Update Product" : "Add Product"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setView("list");
								setEditingId(null);
							},
							className: "px-6 py-3 border border-gray-200 text-gray-600 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors",
							children: "Cancel"
						})]
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Package,
				title: "Product Management",
				subtitle: `${prods.length} total products in catalog`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: exportCSV,
							className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export CSV"]
						}),
						selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: bulkDelete,
							className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-red-500 hover:text-white hover:bg-red-500 border border-red-200 hover:border-red-500 px-3 py-2 rounded-xl transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }),
								" Delete (",
								selected.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setView("form"),
							className: "btn-gold px-4 py-2 text-[10px] tracking-widest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add Product"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 min-w-[180px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 pl-9",
							placeholder: "Search products...",
							value: search,
							onChange: (e) => setSearch(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all w-auto",
						value: catFilter,
						onChange: (e) => setCatFilter(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All Categories"
						}), [
							"earrings",
							"necklaces",
							"rings",
							"bracelets",
							"anklets",
							"sets"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c.charAt(0).toUpperCase() + c.slice(1)
						}, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all w-auto",
						value: statusFilter,
						onChange: (e) => setStatusFilter(e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "published",
								children: "Published"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "draft",
								children: "Draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "archived",
								children: "Archived"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-gray-50 border-b border-gray-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 w-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										onChange: (e) => setSelected(e.target.checked ? filtered.map((p) => p.id) : []),
										checked: selected.length === filtered.length && filtered.length > 0,
										className: "w-3.5 h-3.5 accent-amber-500"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "SKU"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Price (GH₵)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Stock"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Flags"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-gray-50",
							children: filtered.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-amber-50/30 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: selected.includes(prod.id),
											onChange: (e) => setSelected((s) => e.target.checked ? [...s, prod.id] : s.filter((x) => x !== prod.id)),
											className: "w-3.5 h-3.5 accent-amber-500"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-gray-900",
											children: prod.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-gray-400 capitalize",
											children: prod.category
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-gray-500 font-mono text-[10px]",
										children: prod.sku || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold text-amber-600",
											children: [
												"GH₵",
												" ",
												(prod.price * cediMultiplier).toLocaleString("en-US", { maximumFractionDigits: 0 })
											]
										}), prod.discountPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] text-gray-400 line-through",
											children: ["GH₵ ", (prod.discountPrice * cediMultiplier).toFixed(0)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `font-bold ${prod.stock === 0 ? "text-red-600" : prod.stock <= 10 ? "text-amber-600" : "text-gray-700"}`,
											children: [prod.stock, " units"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: prod.status })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1.5 flex-wrap",
											children: [
												prod.isBestSeller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full",
													children: "Best Seller"
												}),
												prod.isFeatured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full",
													children: "Featured"
												}),
												prod.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full",
													children: "New"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => startEdit(prod),
													title: "Edit",
													className: "p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => duplicateProduct(prod),
													title: "Duplicate",
													className: "p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => toggleFeatured(prod.id),
													title: "Toggle Featured",
													className: `p-1.5 rounded-lg transition-colors ${prod.isFeatured ? "text-purple-600 bg-purple-50" : "text-gray-400 hover:text-purple-600 hover:bg-purple-50"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => toggleBestSeller(prod.id),
													title: "Toggle Best Seller",
													className: `p-1.5 rounded-lg transition-colors ${prod.isBestSeller ? "text-amber-600 bg-amber-50" : "text-gray-400 hover:text-amber-600 hover:bg-amber-50"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => archiveProduct(prod.id, prod.name),
													title: "Archive",
													className: "p-1.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => deleteProduct(prod.id, prod.name),
													title: "Delete",
													className: "p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})
											]
										})
									})
								]
							}, prod.id))
						})]
					})
				}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-10 w-10 text-gray-200 mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-gray-400",
						children: "No products found"
					})]
				})]
			})
		]
	});
}
function OrdersSection({ orders, updateOrderStatus, cediMultiplier, addLog }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	const [toast, setToast] = (0, import_react.useState)(null);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => setToast({
		msg,
		type
	}), []);
	const filtered = (0, import_react.useMemo)(() => orders.filter((o) => {
		const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase()) || o.shippingAddress.fullName.toLowerCase().includes(search.toLowerCase()) || o.paymentMethod.toLowerCase().includes(search.toLowerCase());
		const matchStatus = statusFilter === "all" || o.status === statusFilter;
		return matchSearch && matchStatus;
	}), [
		orders,
		search,
		statusFilter
	]);
	const handleStatus = (id, status) => {
		updateOrderStatus(id, status);
		addLog({
			category: "Order",
			action: `Updated order ${id} status to ${status}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`Order ${id} → ${status}`);
	};
	const exportOrders = () => {
		const header = "ID,Date,Customer,Total (GHS),Payment,Status\n";
		const rows = orders.map((o) => `${o.id},${o.date},${o.shippingAddress.fullName},${(o.total * cediMultiplier).toFixed(2)},${o.paymentMethod},${o.status}`).join("\n");
		const blob = new Blob([header + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "orders.csv";
		a.click();
		showToast("Orders exported");
	};
	const generateInvoice = (o) => {
		const ghs = (o.total * cediMultiplier).toFixed(2);
		const content = `TOUCH BY BEL'VOMA\nINVOICE: ${o.id}\nDate: ${o.date}\nCustomer: ${o.shippingAddress.fullName}\nAddress: ${o.shippingAddress.streetAddress}, ${o.shippingAddress.city}\nGPS: ${o.shippingAddress.gpsAddress}\n\nItems:\n${o.items.map((i) => `  ${i.name} x${i.qty} — GH₵ ${(i.price * cediMultiplier * i.qty).toFixed(2)}`).join("\n")}\n\nTotal: GH₵ ${ghs}\nPayment: ${o.paymentMethod}\nStatus: ${o.status}`;
		const blob = new Blob([content], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `invoice-${o.id}.txt`;
		a.click();
		showToast(`Invoice downloaded for ${o.id}`);
	};
	const orderStatuses = [
		"Order Received",
		"Payment Confirmed",
		"Processing",
		"Packaging",
		"Shipped",
		"Out for Delivery",
		"Delivered",
		"Payment Pending"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: ShoppingBag,
				title: "Order Management",
				subtitle: `${orders.length} total orders`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: exportOrders,
					className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export CSV"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "All Orders",
						val: orders.length,
						color: "bg-gray-50 text-gray-700"
					},
					{
						label: "Delivered",
						val: orders.filter((o) => o.status === "Delivered").length,
						color: "bg-emerald-50 text-emerald-700"
					},
					{
						label: "In Progress",
						val: orders.filter((o) => !["Delivered", "Payment Pending"].includes(o.status)).length,
						color: "bg-amber-50 text-amber-700"
					},
					{
						label: "Pending Pay",
						val: orders.filter((o) => o.status === "Payment Pending").length,
						color: "bg-red-50 text-red-700"
					}
				].map(({ label, val, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${color} rounded-2xl p-4 border border-white/60`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-bold",
						children: val
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-widest font-semibold mt-1",
						children: label
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 pl-9",
						placeholder: "Search orders, customers...",
						value: search,
						onChange: (e) => setSearch(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all w-auto",
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All Statuses"
					}), orderStatuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s,
						children: s
					}, s))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl py-16 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-gray-200 mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-gray-400",
						children: "No orders found"
					})]
				}) : filtered.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors",
						onClick: () => setExpandedId(expandedId === order.id ? null : order.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 bg-amber-50 rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-amber-600" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-gray-900",
								children: order.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] text-gray-400",
								children: [
									order.date,
									" · ",
									order.shippingAddress.fullName
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-bold text-amber-600",
									children: [
										"GH₵",
										" ",
										(order.total * cediMultiplier).toLocaleString("en-US", { maximumFractionDigits: 0 })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: order.status }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gray-300",
									children: expandedId === order.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: expandedId === order.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: { duration: .25 },
						className: "overflow-hidden border-t border-gray-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
											children: "Payment"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-gray-800",
											children: order.paymentMethod
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
											children: "GPS Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-gray-800",
											children: order.shippingAddress.gpsAddress
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
											children: "City"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-semibold text-gray-800",
											children: [
												order.shippingAddress.city,
												",",
												" ",
												order.shippingAddress.region
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
											children: "Est. Delivery"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-gray-800",
											children: order.estDeliveryDate || "—"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-gray-50 rounded-xl p-3 space-y-2",
									children: [order.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-gray-700 font-medium",
											children: [
												item.name,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-gray-400",
													children: ["×", item.qty]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-amber-600",
											children: [
												"GH₵",
												" ",
												(item.price * cediMultiplier * item.qty).toFixed(2)
											]
										})]
									}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-gray-200 pt-2 flex justify-between text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-amber-600",
											children: ["GH₵ ", (order.total * cediMultiplier).toFixed(2)]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3 items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold text-gray-500 uppercase tracking-widest",
											children: "Update Status:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: order.status,
											onChange: (e) => handleStatus(order.id, e.target.value),
											className: "text-xs border border-gray-200 bg-white px-3 py-2 rounded-xl focus:border-amber-400 outline-none font-semibold text-amber-700",
											children: orderStatuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s,
												children: s
											}, s))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => generateInvoice(order),
											className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Invoice"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-blue-600 border border-gray-200 hover:border-blue-300 px-3 py-2 rounded-xl transition-all",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5" }), " Note"]
										})]
									})]
								})
							]
						})
					}) })]
				}, order.id))
			})
		]
	});
}
function CustomersSection({ customers, orders, updateUserRole, updateUserStatus, addLog }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("all");
	const [expandedEmail, setExpandedEmail] = (0, import_react.useState)(null);
	const [toast, setToast] = (0, import_react.useState)(null);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => setToast({
		msg,
		type
	}), []);
	const filtered = (0, import_react.useMemo)(() => customers.filter((c) => {
		const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search);
		const matchRole = roleFilter === "all" || c.role === roleFilter;
		return matchSearch && matchRole;
	}), [
		customers,
		search,
		roleFilter
	]);
	const exportCustomers = () => {
		const header = "Name,Email,Phone,Role,Status,Joined\n";
		const rows = customers.map((c) => `${c.name},${c.email},${c.phone},${c.role},${c.active !== false ? "Active" : "Banned"},${c.createdAt}`).join("\n");
		const blob = new Blob([header + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "customers.csv";
		a.click();
		showToast("Customers exported");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Users,
				title: "Customer Management",
				subtitle: `${customers.length} registered customers`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: exportCustomers,
					className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export CSV"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "Total",
						val: customers.length,
						color: "bg-blue-50 text-blue-700"
					},
					{
						label: "Active",
						val: customers.filter((c) => c.active !== false).length,
						color: "bg-emerald-50 text-emerald-700"
					},
					{
						label: "Admins",
						val: customers.filter((c) => c.role === "admin").length,
						color: "bg-purple-50 text-purple-700"
					},
					{
						label: "Banned",
						val: customers.filter((c) => c.active === false).length,
						color: "bg-red-50 text-red-700"
					}
				].map(({ label, val, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${color} rounded-2xl p-4`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-bold",
						children: val
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-widest font-semibold mt-1",
						children: label
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 pl-9",
						placeholder: "Search by name, email, phone...",
						value: search,
						onChange: (e) => setSearch(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all w-auto",
					value: roleFilter,
					onChange: (e) => setRoleFilter(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All Roles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "user",
							children: "Customers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "admin",
							children: "Admins"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "superadmin",
							children: "Super Admins"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-gray-50 border-b border-gray-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Customer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Role"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Joined"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-gray-50",
							children: filtered.map((cust) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-amber-50/20 cursor-pointer transition-colors",
								onClick: () => setExpandedEmail(expandedEmail === cust.email ? null : cust.email),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xs uppercase shrink-0",
												children: cust.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-gray-900",
												children: cust.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-gray-400 text-[10px]",
												children: cust.email
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-gray-600",
										children: cust.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: cust.role,
											onClick: (e) => e.stopPropagation(),
											onChange: (e) => {
												updateUserRole(cust.email, e.target.value);
												addLog({
													category: "Customer",
													action: `Role changed for ${cust.email} → ${e.target.value}`,
													user: "superadmin",
													ip: "127.0.0.1"
												});
												showToast(`${cust.name}'s role updated to ${e.target.value}`);
											},
											className: "text-[10px] border border-gray-200 bg-white px-2 py-1 rounded-lg focus:border-amber-400 outline-none font-semibold text-gray-700",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "user",
													children: "Customer"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "admin",
													children: "Admin"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "superadmin",
													children: "Super Admin"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: cust.active !== false ? "Active" : "Banned" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-gray-500",
										children: new Date(cust.createdAt).toLocaleDateString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => {
												e.stopPropagation();
												const next = !(cust.active !== false);
												updateUserStatus(cust.email, next);
												addLog({
													category: "Customer",
													action: `Account ${next ? "activated" : "banned"}: ${cust.email}`,
													user: "superadmin",
													ip: "127.0.0.1"
												});
												showToast(`${cust.name} ${next ? "activated" : "banned"}`, next ? "success" : "info");
											},
											className: `text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl border transition-all ${cust.active !== false ? "text-red-500 border-red-200 hover:bg-red-500 hover:text-white" : "text-emerald-600 border-emerald-200 hover:bg-emerald-500 hover:text-white"}`,
											children: cust.active !== false ? "Ban" : "Activate"
										})
									})
								]
							}, cust.email), expandedEmail === cust.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "bg-amber-50/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 6,
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-6 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-gray-700",
												children: cust.email
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
												children: "Phone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-gray-700",
												children: cust.phone
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
												children: "Account ID"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-gray-700 text-[10px]",
												children: cust.email.split("@")[0]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													className: "flex items-center gap-1.5 text-[10px] font-semibold text-blue-600 border border-blue-200 px-3 py-1.5 rounded-xl hover:bg-blue-50 transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }), " Send Email"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													className: "flex items-center gap-1.5 text-[10px] font-semibold text-purple-600 border border-purple-200 px-3 py-1.5 rounded-xl hover:bg-purple-50 transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3 w-3" }), " Issue Coupon"]
												})]
											})
										]
									})
								})
							}, cust.email + "-exp")] }))
						})]
					})
				}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-10 w-10 text-gray-200 mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-gray-400",
						children: "No customers found"
					})]
				})]
			})
		]
	});
}
function MarketingSection({ addLog }) {
	const [promos, setPromos] = (0, import_react.useState)(() => {
		const stored = localStorage.getItem("tbb_admin_promos_v2");
		if (stored) return JSON.parse(stored);
		return [
			{
				id: "1",
				code: "TBBGIFT",
				discount: 15,
				type: "percentage",
				status: "active",
				usageCount: 24,
				maxUsage: 100
			},
			{
				id: "2",
				code: "BELVOMA10",
				discount: 10,
				type: "percentage",
				status: "active",
				usageCount: 67,
				maxUsage: 200
			},
			{
				id: "3",
				code: "KUMASI5",
				discount: 5,
				type: "percentage",
				status: "active",
				usageCount: 12
			},
			{
				id: "4",
				code: "FLAT50",
				discount: 50,
				type: "fixed",
				status: "paused",
				usageCount: 3
			}
		];
	});
	const [form, setForm] = (0, import_react.useState)({
		code: "",
		discount: "",
		type: "percentage",
		maxUsage: ""
	});
	const [toast, setToast] = (0, import_react.useState)(null);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => setToast({
		msg,
		type
	}), []);
	const savePromos = (updated) => {
		setPromos(updated);
		localStorage.setItem("tbb_admin_promos_v2", JSON.stringify(updated));
	};
	const addPromo = (e) => {
		e.preventDefault();
		if (!form.code || !form.discount) return;
		const newPromo = {
			id: Date.now().toString(),
			code: form.code.toUpperCase().trim(),
			discount: parseFloat(form.discount),
			type: form.type,
			status: "active",
			usageCount: 0,
			maxUsage: form.maxUsage ? parseInt(form.maxUsage) : void 0
		};
		savePromos([newPromo, ...promos]);
		addLog({
			category: "Config",
			action: `Created promo code: ${newPromo.code}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`Promo "${newPromo.code}" created`);
		setForm({
			code: "",
			discount: "",
			type: "percentage",
			maxUsage: ""
		});
	};
	const togglePromoStatus = (id) => {
		const updated = promos.map((p) => p.id === id ? {
			...p,
			status: p.status === "active" ? "paused" : "active"
		} : p);
		savePromos(updated);
		showToast("Promo status updated");
	};
	const deletePromo = (id, code) => {
		savePromos(promos.filter((p) => p.id !== id));
		addLog({
			category: "Config",
			action: `Deleted promo code: ${code}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`Promo "${code}" deleted`, "info");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Megaphone,
				title: "Marketing Center",
				subtitle: "Promo codes, discounts & campaigns"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "Active Promos",
						val: promos.filter((p) => p.status === "active").length,
						color: "bg-emerald-50 text-emerald-700"
					},
					{
						label: "Total Uses",
						val: promos.reduce((s, p) => s + p.usageCount, 0),
						color: "bg-blue-50 text-blue-700"
					},
					{
						label: "Paused",
						val: promos.filter((p) => p.status === "paused").length,
						color: "bg-amber-50 text-amber-700"
					},
					{
						label: "Total Codes",
						val: promos.length,
						color: "bg-purple-50 text-purple-700"
					}
				].map(({ label, val, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${color} rounded-2xl p-4`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-bold",
						children: val
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-widest font-semibold mt-1",
						children: label
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xs font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-4 w-4 text-amber-500" }), " Create Promo Code"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: addPromo,
					className: "grid grid-cols-1 md:grid-cols-5 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Coupon Code",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 uppercase",
								value: form.code,
								onChange: (e) => setForm((f) => ({
									...f,
									code: e.target.value
								})),
								placeholder: "e.g. LUXURY20",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Discount Value",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: inputCls,
								value: form.discount,
								onChange: (e) => setForm((f) => ({
									...f,
									discount: e.target.value
								})),
								placeholder: "e.g. 15",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectCls,
								value: form.type,
								onChange: (e) => setForm((f) => ({
									...f,
									type: e.target.value
								})),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "percentage",
									children: "Percentage (%)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "fixed",
									children: "Fixed (GH₵)"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Max Uses",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: inputCls,
								value: form.maxUsage,
								onChange: (e) => setForm((f) => ({
									...f,
									maxUsage: e.target.value
								})),
								placeholder: "Unlimited"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "btn-gold w-full py-2.5 text-[10px] tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create"]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-gray-50 border-b border-gray-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Discount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Usage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-gray-50",
							children: promos.map((promo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-amber-50/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 font-bold text-gray-900 tracking-widest uppercase",
										children: promo.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-4 font-bold text-amber-600",
										children: [
											promo.discount,
											promo.type === "percentage" ? "%" : " GH₵",
											" Off"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-gray-600 capitalize",
										children: promo.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-4 text-gray-600",
										children: [promo.usageCount, promo.maxUsage ? ` / ${promo.maxUsage}` : ""]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: promo.status })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => togglePromoStatus(promo.id),
												className: `text-[9px] font-bold uppercase px-3 py-1.5 rounded-xl border transition-all ${promo.status === "active" ? "text-amber-600 border-amber-200 hover:bg-amber-50" : "text-emerald-600 border-emerald-200 hover:bg-emerald-50"}`,
												children: promo.status === "active" ? "Pause" : "Activate"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => deletePromo(promo.id, promo.code),
												className: "text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
											})]
										})
									})
								]
							}, promo.id))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-amber-500" }), " Campaign Tools"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-3",
						children: [
							"Email Campaigns",
							"SMS Blasts",
							"Push Notifications",
							"Loyalty Program",
							"Gift Cards",
							"Referral Program",
							"Flash Sales",
							"Abandoned Cart"
						].map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 bg-white border border-amber-100 rounded-xl text-[10px] font-semibold text-gray-600",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-amber-300 shrink-0" }), tool]
						}, tool))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-amber-600 mt-3 font-medium",
						children: "✦ Campaign integrations available via API or Mailchimp / Klaviyo connection"
					})
				]
			})
		]
	});
}
function AnalyticsSection({ orders, customers, products: prods, cediMultiplier }) {
	const totalRev = orders.reduce((s, o) => s + o.total * cediMultiplier, 0);
	const avgOrder = orders.length > 0 ? totalRev / orders.length : 0;
	const convRate = customers.length > 0 ? (orders.length / customers.length * 100).toFixed(1) : "0";
	const statusBreakdown = [
		"Order Received",
		"Payment Confirmed",
		"Processing",
		"Packaging",
		"Shipped",
		"Out for Delivery",
		"Delivered",
		"Payment Pending"
	].map((s) => ({
		status: s,
		count: orders.filter((o) => o.status === s).length
	})).filter((x) => x.count > 0);
	const catBreakdown = [
		"earrings",
		"necklaces",
		"rings",
		"bracelets",
		"anklets",
		"sets"
	].map((cat) => ({
		cat,
		count: prods.filter((p) => p.category === cat).length,
		rev: orders.flatMap((o) => o.items).filter((i) => prods.find((p) => p.id === i.productId)?.category === cat).reduce((s, i) => s + i.price * i.qty * cediMultiplier, 0)
	}));
	const topProducts = [...prods].sort((a, b) => b.stock - a.stock).slice(0, 5);
	const lowStock = prods.filter((p) => p.stock > 0 && p.stock <= 10);
	const revenueData = [
		12e3,
		18500,
		24e3,
		19500,
		31e3,
		38e3,
		35e3,
		47e3,
		43e3,
		56e3,
		52e3,
		68e3
	].map((v) => Math.round(v * cediMultiplier / 15));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: ChartColumn,
				title: "Analytics & Reports",
				subtitle: "Business intelligence at a glance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Revenue",
						value: `GH₵ ${totalRev.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
						icon: DollarSign,
						color: "gold",
						trend: "up",
						trendValue: "+18%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Avg Order Value",
						value: `GH₵ ${avgOrder.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
						icon: TrendingUp,
						color: "green",
						trend: "up",
						trendValue: "+5%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Conversion Rate",
						value: `${convRate}%`,
						sub: "Orders / Customers",
						icon: ChartNoAxesColumn,
						color: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Customer LTV",
						value: `GH₵ ${(avgOrder * 2.4).toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
						sub: "Est. lifetime value",
						icon: UserCheck,
						color: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-gray-900",
							children: "Annual Revenue (GH₵)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-gray-400 mt-0.5",
							children: "Monthly revenue projection for 2026"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: [
								"1M",
								"3M",
								"6M",
								"1Y"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-all ${t === "1Y" ? "bg-amber-100 text-amber-700" : "text-gray-400 hover:text-gray-700"}`,
								children: t
							}, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBarChart, {
						data: revenueData,
						color: "#D4AF37"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-bold text-gray-900",
									children: ["GH₵ ", revenueData.reduce((a, b) => a + b, 0).toLocaleString()]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-gray-400",
									children: "Total YTD"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-emerald-600",
									children: "+18.4%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-gray-400",
									children: "vs Last Year"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-bold text-gray-900",
									children: [
										"GH₵",
										" ",
										Math.round(revenueData.reduce((a, b) => a + b, 0) / 12).toLocaleString()
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-gray-400",
									children: "Monthly Avg"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-gray-900 mb-4",
						children: "Order Status Breakdown"
					}), statusBreakdown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gray-400 py-4 text-center",
						children: "No orders yet"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: statusBreakdown.map(({ status, count }) => {
							const pct = orders.length > 0 ? count / orders.length * 100 : 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-gray-700",
									children: status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-gray-500",
									children: [
										count,
										" (",
										pct.toFixed(0),
										"%)"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 bg-gray-100 rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: `${pct}%` },
									transition: {
										duration: .8,
										ease: "easeOut"
									},
									className: "h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
								})
							})] }, status);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-gray-900 mb-4",
						children: "Revenue by Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: catBreakdown.filter((c) => c.count > 0).map(({ cat, count, rev }) => {
							const maxRev = Math.max(...catBreakdown.map((c) => c.rev), 1);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-gray-700 capitalize",
									children: [
										cat,
										" (",
										count,
										" products)"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-amber-600 font-semibold",
									children: [
										"GH₵",
										" ",
										rev.toLocaleString("en-US", { maximumFractionDigits: 0 })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 bg-gray-100 rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: `${rev / maxRev * 100}%` },
									transition: {
										duration: .8,
										ease: "easeOut"
									},
									className: "h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
								})
							})] }, cat);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-amber-500" }), " Top Products by Stock"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: topProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-gray-800 truncate",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-gray-400 capitalize",
										children: p.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-bold text-amber-600",
										children: ["GH₵ ", (p.price * cediMultiplier).toFixed(0)]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-gray-400",
										children: [p.stock, " units"]
									})]
								})
							]
						}, p.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-500" }), " Low Stock Alerts"]
					}), lowStock.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-emerald-300 mx-auto mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gray-400",
							children: "All products well-stocked"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: lowStock.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs p-3 bg-amber-50 border border-amber-100 rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-gray-800",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gray-500 capitalize",
								children: p.category
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-red-600",
									children: [p.stock, " left"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-amber-600",
									children: "Restock needed"
								})]
							})]
						}, p.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-amber-500" }), " Export Reports"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-3",
					children: [
						"Revenue Report (CSV)",
						"Order Summary (CSV)",
						"Customer Report (CSV)",
						"Inventory Report (CSV)",
						"Marketing Report (CSV)",
						"Full Analytics (JSON)"
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-xl transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }),
							" ",
							r
						]
					}, r))
				})]
			})
		]
	});
}
function ContentSection({ addLog }) {
	const defaultSettings = {
		siteName: "Touch by Bel'voma",
		tagline: "Touch Every Moment with Elegance",
		currency: "GHS",
		timezone: "Africa/Accra",
		primaryColor: "#D4AF37",
		accentColor: "#2D2D2D",
		heroHeadline: "Luxury Jewelry Crafted for Every Moment",
		heroSubheading: "Explore handcrafted gold-plated pieces designed to elevate your everyday elegance.",
		announcementBar: "✦ Free shipping on orders over GH₵1000 ✦ New arrivals just dropped — Shop Now",
		announcementEnabled: true,
		freeShippingMessage: "Free Shipping on orders over GH₵1,000",
		instagramHandle: "@touchbybelvoma",
		facebookHandle: "touchbybelvoma",
		twitterHandle: "@belvoma",
		supportEmail: "hello@touchbybelvoma.com",
		supportPhone: "+233 20 000 0000",
		businessAddress: "Airport Residential Area, Accra, Ghana",
		googleAnalyticsId: "",
		metaPixelId: ""
	};
	const [settings, setSettings] = (0, import_react.useState)(() => {
		const stored = localStorage.getItem("tbb_site_settings");
		return stored ? {
			...defaultSettings,
			...JSON.parse(stored)
		} : defaultSettings;
	});
	const [activeTab, setActiveTab] = (0, import_react.useState)("homepage");
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => setToast({
		msg,
		type
	}), []);
	const saveSettings = () => {
		localStorage.setItem("tbb_site_settings", JSON.stringify(settings));
		addLog({
			category: "Config",
			action: "Site settings updated",
			user: "superadmin",
			ip: "127.0.0.1"
		});
		setSaved(true);
		setTimeout(() => setSaved(false), 2500);
		showToast("Settings saved successfully");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: FileText,
				title: "Website Content Manager",
				subtitle: "Edit homepage, pages, and site-wide settings",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: saveSettings,
					className: `btn-gold px-5 py-2.5 text-[10px] tracking-widest flex items-center gap-1.5 ${saved ? "opacity-80" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }),
						" ",
						saved ? "Saved ✓" : "Save All"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 bg-gray-100 p-1 rounded-2xl w-fit flex-wrap",
				children: [
					"homepage",
					"pages",
					"general",
					"integrations"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(t),
					className: `px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all capitalize ${activeTab === t ? "bg-white text-amber-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
					children: t
				}, t))
			}),
			activeTab === "homepage" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4 text-amber-500" }), " Announcement Bar"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold text-gray-500",
									children: settings.announcementEnabled ? "Enabled" : "Disabled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSettings((s) => ({
										...s,
										announcementEnabled: !s.announcementEnabled
									})),
									className: "text-amber-500",
									children: settings.announcementEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRight, {
										className: "h-8 w-8 text-amber-500",
										strokeWidth: 1.5
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleLeft, {
										className: "h-8 w-8 text-gray-300",
										strokeWidth: 1.5
									})
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: settings.announcementBar,
							onChange: (e) => setSettings((s) => ({
								...s,
								announcementBar: e.target.value
							})),
							placeholder: "Announcement bar text..."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-amber-500" }), " Hero Section"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Hero Headline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: settings.heroHeadline,
										onChange: (e) => setSettings((s) => ({
											...s,
											heroHeadline: e.target.value
										}))
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Hero Subheading",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: settings.heroSubheading,
										onChange: (e) => setSettings((s) => ({
											...s,
											heroSubheading: e.target.value
										}))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Free Shipping Message",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.freeShippingMessage,
									onChange: (e) => setSettings((s) => ({
										...s,
										freeShippingMessage: e.target.value
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-gray-50 border border-gray-200 rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",
									children: "Live Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-gray-900 text-white rounded-xl p-4",
									children: [
										settings.announcementEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-center text-[10px] text-amber-400 bg-black/30 py-1.5 mb-3 rounded-lg",
											children: settings.announcementBar
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg font-bold",
											children: settings.heroHeadline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-gray-400 mt-1",
											children: settings.heroSubheading
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] text-amber-400 mt-2",
											children: ["✦ ", settings.freeShippingMessage]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-bold text-gray-800 uppercase tracking-widest mb-4",
							children: "Homepage Sections Visibility"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-3 gap-3",
							children: [
								"Hero Section",
								"Featured Collections",
								"Best Sellers",
								"New Arrivals",
								"Testimonials",
								"Instagram Feed",
								"Newsletter",
								"Announcement Banner",
								"Flash Sale Banner",
								"Countdown Timer"
							].map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 cursor-pointer p-3 bg-gray-50 hover:bg-amber-50 rounded-xl border border-gray-100 hover:border-amber-200 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									className: "w-3.5 h-3.5 accent-amber-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold text-gray-700",
									children: section
								})]
							}, section))
						})]
					})
				]
			}),
			activeTab === "pages" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold text-gray-700 uppercase tracking-widest",
						children: "Website Pages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "btn-gold px-4 py-2 text-[10px] tracking-widest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Page"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-gray-50",
					children: [
						{
							name: "Homepage",
							path: "/",
							editable: true
						},
						{
							name: "Shop",
							path: "/shop",
							editable: false
						},
						{
							name: "About",
							path: "/about",
							editable: true
						},
						{
							name: "Contact",
							path: "/contact",
							editable: true
						},
						{
							name: "FAQs",
							path: "/faqs",
							editable: true
						},
						{
							name: "Shipping Policy",
							path: "/shipping",
							editable: true
						},
						{
							name: "Privacy Policy",
							path: "/privacy",
							editable: true
						},
						{
							name: "Terms & Conditions",
							path: "/terms",
							editable: true
						},
						{
							name: "Returns Policy",
							path: "/returns",
							editable: true
						},
						{
							name: "404 Page",
							path: "/404",
							editable: true
						},
						{
							name: "Maintenance Page",
							path: "/maintenance",
							editable: true
						}
					].map(({ name, path, editable }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-3.5 hover:bg-amber-50/30 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-gray-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-gray-900",
								children: name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-gray-400 font-mono",
								children: path
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: path,
								target: "_blank",
								className: "p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
							}), editable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 text-[10px] font-semibold text-amber-600 border border-amber-200 px-3 py-1.5 rounded-xl hover:bg-amber-50 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3 w-3" }), " Edit Content"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-gray-400 px-3 py-1.5",
								children: "Auto-generated"
							})]
						})]
					}, path))
				})]
			}),
			activeTab === "general" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-amber-500" }), " Business Information"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Site Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.siteName,
									onChange: (e) => setSettings((s) => ({
										...s,
										siteName: e.target.value
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tagline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.tagline,
									onChange: (e) => setSettings((s) => ({
										...s,
										tagline: e.target.value
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Support Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.supportEmail,
									onChange: (e) => setSettings((s) => ({
										...s,
										supportEmail: e.target.value
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Support Phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.supportPhone,
									onChange: (e) => setSettings((s) => ({
										...s,
										supportPhone: e.target.value
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Business Address",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.businessAddress,
									onChange: (e) => setSettings((s) => ({
										...s,
										businessAddress: e.target.value
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Currency",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: selectCls,
									value: settings.currency,
									onChange: (e) => setSettings((s) => ({
										...s,
										currency: e.target.value
									})),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "GHS",
											children: "Ghana Cedi (GH₵)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "USD",
											children: "US Dollar ($)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "EUR",
											children: "Euro (€)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "GBP",
											children: "British Pound (£)"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Timezone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: selectCls,
									value: settings.timezone,
									onChange: (e) => setSettings((s) => ({
										...s,
										timezone: e.target.value
									})),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Africa/Accra",
											children: "Africa/Accra (GMT+0)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Europe/London",
											children: "Europe/London"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "America/New_York",
											children: "America/New_York"
										})
									]
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-amber-500" }), " Social Media Links"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Instagram Handle",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.instagramHandle,
									onChange: (e) => setSettings((s) => ({
										...s,
										instagramHandle: e.target.value
									})),
									placeholder: "@handle"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Facebook Page",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.facebookHandle,
									onChange: (e) => setSettings((s) => ({
										...s,
										facebookHandle: e.target.value
									})),
									placeholder: "page name"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Twitter/X Handle",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									value: settings.twitterHandle,
									onChange: (e) => setSettings((s) => ({
										...s,
										twitterHandle: e.target.value
									})),
									placeholder: "@handle"
								})
							})
						]
					})]
				})]
			}),
			activeTab === "integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-amber-500" }), " Analytics & Tracking"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Google Analytics ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								value: settings.googleAnalyticsId,
								onChange: (e) => setSettings((s) => ({
									...s,
									googleAnalyticsId: e.target.value
								})),
								placeholder: "G-XXXXXXXXXX"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Meta Pixel ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								value: settings.metaPixelId,
								onChange: (e) => setSettings((s) => ({
									...s,
									metaPixelId: e.target.value
								})),
								placeholder: "000000000000000"
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-4",
					children: [
						"Paystack",
						"Flutterwave",
						"Mailchimp",
						"Klaviyo",
						"Google Tag Manager",
						"Hotjar",
						"WhatsApp Business",
						"Twilio SMS",
						"Firebase Push",
						"Google Search Console"
					].map((int) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-gray-700",
							children: int
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full",
							children: "Connect"
						})]
					}, int))
				})]
			})
		]
	});
}
function SettingsSection({ cediMultiplier, freeShippingThreshold, maintenanceMode, maxFailedAttempts, updateCediMultiplier, updateFreeShippingThreshold, updateMaintenanceMode, updateMaxFailedAttempts, addLog }) {
	const [multInput, setMultInput] = (0, import_react.useState)(cediMultiplier.toString());
	const [threshInput, setThreshInput] = (0, import_react.useState)(freeShippingThreshold.toString());
	const [maxAttInput, setMaxAttInput] = (0, import_react.useState)(maxFailedAttempts.toString());
	const [toast, setToast] = (0, import_react.useState)(null);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => setToast({
		msg,
		type
	}), []);
	(0, import_react.useEffect)(() => {
		setMultInput(cediMultiplier.toString());
	}, [cediMultiplier]);
	(0, import_react.useEffect)(() => {
		setThreshInput(freeShippingThreshold.toString());
	}, [freeShippingThreshold]);
	(0, import_react.useEffect)(() => {
		setMaxAttInput(maxFailedAttempts.toString());
	}, [maxFailedAttempts]);
	const applyMult = (e) => {
		e.preventDefault();
		const val = parseFloat(multInput);
		if (isNaN(val) || val <= 0) return;
		updateCediMultiplier(val);
		addLog({
			category: "Config",
			action: `Cedi multiplier set to ${val}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`Exchange rate updated: 1 USD = GH₵ ${val}`);
	};
	const applyThresh = (e) => {
		e.preventDefault();
		const val = parseInt(threshInput);
		if (isNaN(val) || val < 0) return;
		updateFreeShippingThreshold(val);
		addLog({
			category: "Config",
			action: `Free shipping threshold set to GH₵ ${val}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`Free shipping threshold: GH₵ ${val}`);
	};
	const applyMaxAtt = (e) => {
		e.preventDefault();
		const val = parseInt(maxAttInput);
		if (isNaN(val) || val <= 0) return;
		updateMaxFailedAttempts(val);
		addLog({
			category: "Security",
			action: `Max login attempts set to ${val}`,
			user: "superadmin",
			ip: "127.0.0.1"
		});
		showToast(`Max login attempts: ${val}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Settings,
				title: "System Settings",
				subtitle: "Core platform configuration"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-gray-900",
							children: "Maintenance Mode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gray-500 mt-1 max-w-lg",
							children: "Suspends the storefront and shows a luxury splash screen to all visitors. Admin/superadmin access is unaffected."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2.5 h-2.5 rounded-full ${maintenanceMode ? "bg-red-500 animate-pulse" : "bg-emerald-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs font-bold ${maintenanceMode ? "text-red-600" : "text-emerald-600"}`,
								children: maintenanceMode ? "MAINTENANCE MODE ACTIVE" : "Store Online"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							updateMaintenanceMode(!maintenanceMode);
							addLog({
								category: "Config",
								action: `Maintenance mode ${!maintenanceMode ? "enabled" : "disabled"}`,
								user: "superadmin",
								ip: "127.0.0.1"
							});
							showToast(`Maintenance mode ${!maintenanceMode ? "enabled" : "disabled"}`, !maintenanceMode ? "info" : "success");
						},
						className: "shrink-0",
						children: maintenanceMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRight, {
							className: "h-12 w-12 text-amber-500",
							strokeWidth: 1.5
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleLeft, {
							className: "h-12 w-12 text-gray-300",
							strokeWidth: 1.5
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4 text-amber-500" }), " Currency Exchange Rate"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-gray-500",
						children: [
							"All product prices are stored in USD and converted to Ghana Cedis using this multiplier. Currently:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-amber-600",
								children: ["1 USD = GH₵ ", cediMultiplier]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: applyMult,
						className: "flex gap-3 max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							step: "0.01",
							min: "1",
							className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 flex-1",
							value: multInput,
							onChange: (e) => setMultInput(e.target.value),
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold px-5 py-2.5 text-[10px] tracking-widest shrink-0",
							children: "Apply"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-amber-500" }), " Free Shipping Threshold"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-gray-500",
						children: [
							"Orders meeting or exceeding this value (in GH₵) qualify for free shipping. Currently:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-amber-600",
								children: ["GH₵ ", freeShippingThreshold]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: applyThresh,
						className: "flex gap-3 max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "0",
							className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 flex-1",
							value: threshInput,
							onChange: (e) => setThreshInput(e.target.value),
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold px-5 py-2.5 text-[10px] tracking-widest shrink-0",
							children: "Apply"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-gray-900 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-amber-500" }), " Security — Login Rate Limiter"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-gray-500",
						children: [
							"Maximum failed login attempts before forcing CAPTCHA verification. Currently:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-amber-600",
								children: [maxFailedAttempts, " attempts"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: applyMaxAtt,
						className: "flex gap-3 max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "1",
							max: "20",
							className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 flex-1",
							value: maxAttInput,
							onChange: (e) => setMaxAttInput(e.target.value),
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold px-5 py-2.5 text-[10px] tracking-widest shrink-0",
							children: "Apply"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-amber-500" }), " Payment Methods"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-3",
					children: [
						{
							name: "MTN Mobile Money",
							enabled: true
						},
						{
							name: "Telecel Cash",
							enabled: true
						},
						{
							name: "AirtelTigo Money",
							enabled: false
						},
						{
							name: "Paystack (Card)",
							enabled: true
						},
						{
							name: "Flutterwave",
							enabled: false
						},
						{
							name: "Bank Transfer",
							enabled: true
						}
					].map(({ name, enabled }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center justify-between p-3.5 rounded-xl border transition-all ${enabled ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-gray-700",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${enabled ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-500"}`,
							children: enabled ? "ON" : "OFF"
						})]
					}, name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-amber-500" }), " Shipping Zones"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							zone: "Greater Accra",
							rate: "GH₵ 25",
							time: "Same Day / Next Day"
						},
						{
							zone: "Kumasi & Ashanti",
							rate: "GH₵ 45",
							time: "2–3 Business Days"
						},
						{
							zone: "Other Regions",
							rate: "GH₵ 65",
							time: "3–5 Business Days"
						},
						{
							zone: "Showroom Pickup",
							rate: "Free",
							time: "Ready in 2 Hours"
						}
					].map(({ zone, rate, time }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-gray-800",
							children: zone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-gray-500",
							children: time
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-amber-600",
								children: rate
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3.5 w-3.5" })
							})]
						})]
					}, zone))
				})]
			})
		]
	});
}
function SecuritySection({ customers, addLog }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Shield,
				title: "Security Center",
				subtitle: "Access control, sessions & permissions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Active Admins",
						value: customers.filter((c) => c.role === "admin").length,
						icon: Shield,
						color: "purple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Active Users",
						value: customers.filter((c) => c.active !== false).length,
						icon: UserCheck,
						color: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Banned Accounts",
						value: customers.filter((c) => c.active === false).length,
						icon: Lock,
						color: "red"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "h-4 w-4 text-amber-500" }), " Role Definitions"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							role: "superadmin",
							label: "Super Admin",
							desc: "Full ROOT access to all systems, configurations, and data. Can manage all users, orders, products, and system settings.",
							color: "bg-purple-50 border-purple-200 text-purple-700"
						},
						{
							role: "admin",
							label: "Store Admin",
							desc: "Access to orders, products, inventory, customers, and marketing. Cannot modify system configurations or manage Super Admins.",
							color: "bg-amber-50 border-amber-200 text-amber-700"
						},
						{
							role: "user",
							label: "Customer",
							desc: "Standard storefront access. Can browse, purchase, manage their account, orders, addresses, and wishlist.",
							color: "bg-blue-50 border-blue-200 text-blue-700"
						}
					].map(({ role, label, desc, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-start gap-4 p-4 rounded-xl border ${color}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-lg bg-white/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-mono bg-black/10 px-1.5 py-0.5 rounded",
									children: role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px]",
									children: [customers.filter((c) => c.role === role).length, " accounts"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] opacity-80",
							children: desc
						})] })]
					}, role))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-amber-500" }), " Security Protocols"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-3",
					children: [
						{
							label: "Rate Limiting (Login)",
							status: true,
							desc: "Active — blocks brute force attempts"
						},
						{
							label: "CAPTCHA on Failed Attempts",
							status: true,
							desc: "Triggers after threshold exceeded"
						},
						{
							label: "Session Expiry",
							status: true,
							desc: "Auto-logout on inactivity"
						},
						{
							label: "Account Lockout",
							status: true,
							desc: "Ban hammer for repeated violations"
						},
						{
							label: "Two-Factor Authentication",
							status: false,
							desc: "Coming soon — TOTP / SMS"
						},
						{
							label: "IP Restriction",
							status: false,
							desc: "Allowlist specific IPs for admin panel"
						}
					].map(({ label, status, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center justify-between p-4 rounded-xl border ${status ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-gray-800",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-gray-500",
							children: desc
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ${status ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-500"}`,
							children: status ? "Active" : "Inactive"
						})]
					}, label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-gray-100 rounded-2xl p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-gray-900 mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "h-4 w-4 text-amber-500" }), " API Keys"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						"Paystack Secret Key",
						"Paystack Public Key",
						"Flutterwave Secret",
						"Google Analytics",
						"Meta Pixel"
					].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-gray-700",
							children: key
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-[10px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded font-mono",
								children: "sk_••••••••••••"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-[10px] text-amber-600 hover:text-amber-700 font-semibold",
								children: "Edit"
							})]
						})]
					}, key))
				})]
			})
		]
	});
}
function ActivitySection({ logs, clearLogs }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => logs.filter((l) => {
		const matchCat = filter === "all" || l.category.toLowerCase() === filter;
		const matchSearch = !search || l.action.toLowerCase().includes(search.toLowerCase()) || l.user.includes(search) || l.ip.includes(search);
		return matchCat && matchSearch;
	}), [
		logs,
		filter,
		search
	]);
	const exportLogs = () => {
		const header = "Timestamp,Category,Action,User,IP\n";
		const rows = logs.map((l) => `${l.timestamp},${l.category},"${l.action}",${l.user},${l.ip}`).join("\n");
		const blob = new Blob([header + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "audit-log.csv";
		a.click();
	};
	const catColor = {
		Auth: "bg-blue-100 text-blue-700",
		Config: "bg-amber-100 text-amber-700",
		Security: "bg-red-100 text-red-700",
		Product: "bg-purple-100 text-purple-700",
		Order: "bg-green-100 text-green-700",
		Customer: "bg-teal-100 text-teal-700"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Activity,
				title: "Activity Log",
				subtitle: `${logs.length} events recorded`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: exportLogs,
						className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: clearLogs,
						className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase text-red-500 hover:text-white hover:bg-red-500 border border-red-200 hover:border-red-500 px-3 py-2 rounded-xl transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Clear"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300 pl-9",
						placeholder: "Search logs...",
						value: search,
						onChange: (e) => setSearch(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all w-auto",
					value: filter,
					onChange: (e) => setFilter(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All Categories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "auth",
							children: "Auth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "config",
							children: "Config"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "security",
							children: "Security"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "product",
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "order",
							children: "Order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "customer",
							children: "Customer"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 md:grid-cols-6 gap-3",
				children: [
					"Auth",
					"Config",
					"Security",
					"Product",
					"Order",
					"Customer"
				].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-bold text-gray-900",
						children: logs.filter((l) => l.category === cat).length
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${catColor[cat]}`,
						children: cat
					})]
				}, cat))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[520px] overflow-y-auto",
					children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-8 w-8 text-gray-200 mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-gray-400",
							children: "No log entries"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-gray-50",
						children: filtered.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -10
							},
							animate: {
								opacity: 1,
								x: 0
							},
							className: "flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `shrink-0 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full mt-0.5 ${catColor[log.category] || "bg-gray-100 text-gray-600"}`,
									children: log.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-gray-800",
											children: log.action
										}),
										log.details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-gray-400 mt-0.5",
											children: log.details
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] text-gray-400 mt-1",
											children: [
												"by",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-gray-600",
													children: log.user
												}),
												" ",
												"· ",
												new Date(log.timestamp).toLocaleString()
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono text-gray-400 shrink-0",
									children: log.ip
								})
							]
						}, log.id))
					})
				})
			})
		]
	});
}
function PlaceholderSection({ icon: Icon, title, subtitle, features }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: Icon,
			title,
			subtitle
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-100 rounded-2xl p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 bg-amber-100 rounded-2xl w-fit mx-auto mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-amber-600" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold text-gray-900 mb-2",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-gray-500 max-w-md mx-auto mb-6",
					children: subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-3 text-left max-w-2xl mx-auto",
					children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 p-3 bg-white border border-amber-100 rounded-xl text-[10px] font-semibold text-gray-700",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-amber-500 shrink-0" }),
							" ",
							f
						]
					}, f))
				})
			]
		})]
	});
}
function SuperAdminDashboardComponent() {
	const navigate = useNavigate();
	const { user, logout, orders, cediMultiplier, freeShippingThreshold, maintenanceMode, maxFailedAttempts, usersList, updateCediMultiplier, updateFreeShippingThreshold, updateMaintenanceMode, updateMaxFailedAttempts, updateUserRole, updateUserStatus } = useStore();
	const [activeSection, setActiveSection] = (0, import_react.useState)("overview");
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(true);
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [adminProducts, setAdminProducts] = (0, import_react.useState)(() => {
		const stored = localStorage.getItem("tbb_admin_products_v2");
		if (stored) return JSON.parse(stored);
		return products.map((p) => ({
			id: p.id,
			name: p.name,
			sku: `TBB-${p.id.slice(0, 6).toUpperCase()}`,
			category: p.category,
			price: p.price,
			discountPrice: p.originalPrice,
			costPrice: Math.round(p.price * .45),
			stock: p.id.includes("hoops") || p.id.includes("studs") || p.id.includes("sculpt") ? 7 : 45,
			status: "published",
			isFeatured: false,
			isBestSeller: p.isBestSeller || false,
			isNew: p.isNew || false,
			material: p.material,
			description: p.description,
			tags: [p.category, p.material.split(",")[0].trim().toLowerCase()],
			images: p.images,
			weight: "25g",
			seoTitle: `${p.name} | Touch by Bel'voma`,
			seoDesc: p.description.slice(0, 120)
		}));
	});
	(0, import_react.useEffect)(() => {
		localStorage.setItem("tbb_admin_products_v2", JSON.stringify(adminProducts));
	}, [adminProducts]);
	(0, import_react.useEffect)(() => {
		if (!user || user.role !== "superadmin") {
			const t = setTimeout(() => navigate({ to: "/superadmin/login" }), 800);
			return () => clearTimeout(t);
		}
	}, [user, navigate]);
	(0, import_react.useEffect)(() => {
		setLogs([
			{
				id: "1",
				timestamp: (/* @__PURE__ */ new Date(Date.now() - 36e5 * 3)).toISOString(),
				category: "Security",
				action: "Superadmin authenticated successfully",
				user: "superadmin@tbbv.com",
				ip: "127.0.0.1"
			},
			{
				id: "2",
				timestamp: (/* @__PURE__ */ new Date(Date.now() - 36e5 * 2.5)).toISOString(),
				category: "Config",
				action: `Free shipping threshold seeded at GH₵ ${freeShippingThreshold}`,
				user: "system",
				ip: "0.0.0.0"
			},
			{
				id: "3",
				timestamp: (/* @__PURE__ */ new Date(Date.now() - 36e5 * 2)).toISOString(),
				category: "Auth",
				action: "Admin session approved: admin@belvoma.com",
				user: "system",
				ip: "192.168.1.12"
			},
			{
				id: "4",
				timestamp: (/* @__PURE__ */ new Date(Date.now() - 36e5 * 1)).toISOString(),
				category: "Config",
				action: "Dashboard initialized — Super Admin Control Center v2.0",
				user: "system",
				ip: "0.0.0.0"
			}
		]);
	}, [freeShippingThreshold]);
	const addLog = (0, import_react.useCallback)((log) => {
		setLogs((prev) => [{
			...log,
			id: Date.now().toString(),
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev].slice(0, 200));
	}, []);
	const clearLogs = (0, import_react.useCallback)(() => setLogs([]), []);
	const pendingOrderCount = orders.filter((o) => !["Delivered", "Payment Pending"].includes(o.status)).length;
	const lowStockCount = adminProducts.filter((p) => p.stock > 0 && p.stock <= 10).length;
	const outOfStockCount = adminProducts.filter((p) => p.stock === 0).length;
	if (!user || user.role !== "superadmin") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-gray-950 flex flex-col justify-center items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: { rotate: 360 },
			transition: {
				duration: 1,
				repeat: Infinity,
				ease: "linear"
			},
			className: "h-10 w-10 border-t-2 border-amber-400 rounded-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-amber-400 mt-4 tracking-widest uppercase animate-pulse",
			children: "Authorizing access..."
		})]
	});
	const navItems = [
		{
			icon: LayoutDashboard,
			label: "Overview",
			section: "overview"
		},
		{
			icon: Package,
			label: "Products",
			section: "products"
		},
		{
			icon: ShoppingBag,
			label: "Orders",
			section: "orders",
			badge: pendingOrderCount
		},
		{
			icon: Users,
			label: "Customers",
			section: "customers"
		},
		{
			icon: Megaphone,
			label: "Marketing",
			section: "marketing"
		},
		{
			icon: ChartColumn,
			label: "Analytics",
			section: "analytics"
		},
		{
			icon: FileText,
			label: "Content & Pages",
			section: "content"
		},
		{
			icon: Image,
			label: "Media Library",
			section: "media"
		},
		{
			icon: Star,
			label: "Reviews",
			section: "reviews"
		},
		{
			icon: Globe,
			label: "SEO Manager",
			section: "seo"
		},
		{
			icon: CreditCard,
			label: "Payments",
			section: "payments"
		},
		{
			icon: Truck,
			label: "Shipping",
			section: "shipping"
		},
		{
			icon: Shield,
			label: "Security",
			section: "security"
		},
		{
			icon: Settings,
			label: "Settings",
			section: "settings"
		},
		{
			icon: Activity,
			label: "Activity Log",
			section: "activity",
			badge: logs.length > 0 ? void 0 : void 0
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-gray-50 flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm h-14 flex items-center px-4 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSidebarOpen((o) => !o),
					className: "p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all",
					"aria-label": "Toggle sidebar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4 text-white" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-bold text-gray-900 hidden sm:block",
						children: ["Touch by Bel'voma", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1.5 text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full uppercase tracking-wider",
							children: "Super Admin"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-3",
					children: [maintenanceMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full animate-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " Maintenance Mode ON"]
					}), lowStockCount + outOfStockCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }),
							" ",
							lowStockCount + outOfStockCount,
							" Stock Alerts"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "hidden sm:flex items-center gap-1.5 text-[10px] font-semibold text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), " View Store"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center font-bold text-amber-700 text-xs uppercase",
								children: user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-gray-800 leading-tight",
									children: user.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] text-amber-600 font-bold uppercase tracking-wider",
									children: "Root Access"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								logout();
								navigate({ to: "/superadmin/login" });
							},
							className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all",
							title: "Logout",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 pt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
				initial: {
					width: 0,
					opacity: 0
				},
				animate: {
					width: 220,
					opacity: 1
				},
				exit: {
					width: 0,
					opacity: 0
				},
				transition: {
					duration: .25,
					ease: "easeInOut"
				},
				className: "fixed left-0 top-14 bottom-0 z-40 bg-white border-r border-gray-200 overflow-hidden shadow-sm flex flex-col",
				style: { width: 220 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto py-4 px-3 space-y-1",
					children: navItems.map(({ icon, label, section, badge }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
						icon,
						label,
						section,
						active: activeSection === section,
						badge,
						onClick: (s) => {
							setActiveSection(s);
						}
					}, section))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 border-t border-gray-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 bg-amber-50 rounded-xl border border-amber-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold text-amber-700 uppercase tracking-wider",
							children: "Root Access Level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[9px] text-amber-600 mt-0.5",
							children: "Full system privileges active"
						})]
					})
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 min-w-0 transition-all duration-250",
				style: { marginLeft: sidebarOpen ? 220 : 0 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-6 text-xs text-gray-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3.5 w-3.5 text-amber-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-600 font-semibold",
								children: "Super Admin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-gray-600",
								children: {
									overview: "Dashboard Overview",
									products: "Product Management",
									orders: "Order Management",
									customers: "Customer Management",
									marketing: "Marketing Center",
									analytics: "Analytics & Reports",
									content: "Content Manager",
									media: "Media Library",
									reviews: "Reviews Manager",
									seo: "SEO Manager",
									payments: "Payment Settings",
									shipping: "Shipping Manager",
									security: "Security Center",
									settings: "System Settings",
									activity: "Activity Log"
								}[activeSection]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "visible",
							exit: "hidden",
							variants: {
								hidden: {
									opacity: 0,
									y: 16
								},
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: .4,
										ease: [
											.16,
											1,
											.3,
											1
										]
									}
								}
							},
							children: [
								activeSection === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewSection, {
									orders,
									products: adminProducts,
									customers: usersList,
									cediMultiplier,
									addLog
								}),
								activeSection === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsSection, {
									products: adminProducts,
									setProducts: setAdminProducts,
									cediMultiplier,
									addLog
								}),
								activeSection === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersSection, {
									orders,
									updateOrderStatus,
									cediMultiplier,
									addLog
								}),
								activeSection === "customers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomersSection, {
									customers: usersList,
									orders,
									updateUserRole,
									updateUserStatus,
									addLog
								}),
								activeSection === "marketing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingSection, { addLog }),
								activeSection === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsSection, {
									orders,
									customers: usersList,
									products: adminProducts,
									cediMultiplier
								}),
								activeSection === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentSection, { addLog }),
								activeSection === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSection, {
									cediMultiplier,
									freeShippingThreshold,
									maintenanceMode,
									maxFailedAttempts,
									updateCediMultiplier,
									updateFreeShippingThreshold,
									updateMaintenanceMode,
									updateMaxFailedAttempts,
									addLog
								}),
								activeSection === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecuritySection, {
									customers: usersList,
									addLog
								}),
								activeSection === "activity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivitySection, {
									logs,
									clearLogs
								}),
								activeSection === "media" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderSection, {
									icon: Image,
									title: "Media Library",
									subtitle: "Upload, organize, and manage all images, videos, and files for your store",
									features: [
										"Upload Images",
										"Upload Videos",
										"Upload PDFs",
										"Folder Organization",
										"Bulk Upload",
										"Image Compression",
										"Image Optimizer",
										"Replace Images",
										"Delete Files",
										"Search Media",
										"CDN Integration",
										"Lazy Loading"
									]
								}),
								activeSection === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderSection, {
									icon: Star,
									title: "Reviews Manager",
									subtitle: "Moderate customer reviews and manage your store's reputation",
									features: [
										"Approve Reviews",
										"Delete Reviews",
										"Reply to Reviews",
										"Feature Reviews",
										"Report Spam",
										"Review Analytics",
										"Star Ratings",
										"Verified Purchase Badge",
										"Import Reviews",
										"Export Reviews",
										"Email Notifications",
										"Review Moderation"
									]
								}),
								activeSection === "seo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderSection, {
									icon: Globe,
									title: "SEO Manager",
									subtitle: "Optimize your store for search engines and maximize organic traffic",
									features: [
										"Meta Titles",
										"Meta Descriptions",
										"Open Graph Tags",
										"Twitter Cards",
										"Robots.txt",
										"XML Sitemap",
										"Structured Data",
										"Canonical URLs",
										"301 Redirects",
										"Broken Link Checker",
										"Schema Generator",
										"Keyword Tracking"
									]
								}),
								activeSection === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderSection, {
									icon: CreditCard,
									title: "Payment Settings",
									subtitle: "Configure payment gateways and manage transaction processing",
									features: [
										"Paystack",
										"Flutterwave",
										"MTN Mobile Money",
										"Telecel Cash",
										"AirtelTigo",
										"Bank Transfer",
										"Payment Verification",
										"Refund Settings",
										"Transaction Logs",
										"Tax Settings",
										"Invoice Generation",
										"Currency Management"
									]
								}),
								activeSection === "shipping" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderSection, {
									icon: Truck,
									title: "Shipping Manager",
									subtitle: "Configure delivery zones, rates, and courier integrations",
									features: [
										"Shipping Zones",
										"Delivery Charges",
										"Regional Rates",
										"Estimated Times",
										"Pickup Locations",
										"Courier Integration",
										"Free Shipping Rules",
										"Packaging Fees",
										"Tracking Integration",
										"Shipping Labels",
										"Bulk Shipping",
										"International Shipping"
									]
								})
							]
						}, activeSection)
					})]
				})
			})]
		})]
	});
}
//#endregion
export { SuperAdminDashboardComponent as component };
