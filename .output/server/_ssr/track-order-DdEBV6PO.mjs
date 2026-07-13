import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { Dt as Calendar, E as Search, c as Truck, vt as CircleCheckBig, yt as CircleAlert } from "../_libs/lucide-react.mjs";
import { r as getCediMultiplier } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
import { t as Route } from "./track-order-BRF8qM0k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-DdEBV6PO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE_STEPS = [
	{
		status: "Order Received",
		label: "Order Received",
		desc: "Your selection has been successfully received."
	},
	{
		status: "Payment Confirmed",
		label: "Payment Approved",
		desc: "Transaction confirmed via mobile money/cards."
	},
	{
		status: "Processing",
		label: "Edits Selection",
		desc: "We are selecting and polishing your pieces."
	},
	{
		status: "Packaging",
		label: "VIP Packaging",
		desc: "Pieces are set in our signature gift wrap box."
	},
	{
		status: "Shipped",
		label: "Shipped",
		desc: "Dispatched to courier service hubs."
	},
	{
		status: "Out for Delivery",
		label: "Out for Delivery",
		desc: "Courier dispatcher is heading to your location."
	},
	{
		status: "Delivered",
		label: "Delivered",
		desc: "Received at your digital address. Enjoy your sparkles! ✨"
	}
];
function TrackOrderComponent() {
	const { orderId: searchId } = Route.useSearch();
	const { orders } = useStore();
	const [inputVal, setInputVal] = (0, import_react.useState)("");
	const [order, setOrder] = (0, import_react.useState)(null);
	const [searched, setSearched] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (searchId) {
			setInputVal(searchId);
			const found = orders.find((o) => o.id.toLowerCase() === searchId.toLowerCase());
			if (found) setOrder(found);
			else setOrder(null);
			setSearched(true);
		}
	}, [searchId, orders]);
	const handleSearch = (e) => {
		e.preventDefault();
		setErrorState(false);
		if (!inputVal.trim()) return;
		const found = orders.find((o) => o.id.toLowerCase() === inputVal.trim().toLowerCase());
		if (found) setOrder(found);
		else setOrder(null);
		setSearched(true);
	};
	const [errorState, setErrorState] = (0, import_react.useState)(false);
	const getStatusIndex = (currentStatus) => {
		if (currentStatus === "Payment Pending") return 0;
		return TIMELINE_STEPS.findIndex((s) => s.status === currentStatus);
	};
	const currentStepIdx = order ? getStatusIndex(order.status) : -1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background py-32 relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux max-w-3xl relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Dispatch Tracking"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-semibold tracking-tight mt-1 text-foreground",
								children: "Track Your Order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-light text-muted-foreground mt-2 max-w-sm mx-auto",
								children: "Input your Touch by Bel'voma order reference number to review shipping metrics."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSearch,
						className: "mb-12 flex gap-2 max-w-md mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: inputVal,
								onChange: (e) => setInputVal(e.target.value),
								placeholder: "e.g. TBB-90812",
								className: "w-full text-xs border border-border bg-card pl-10 pr-4 py-3.5 rounded-xl focus:border-gold outline-none uppercase"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "px-6 py-3.5 bg-charcoal hover:bg-black text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all",
							children: "Track Status"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
						mode: "wait",
						children: [searched && order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 15
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: 15
							},
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 bg-card border border-border rounded-2xl shadow-soft flex flex-wrap justify-between items-center gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
												children: "Order Reference"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold text-foreground",
												children: order.id
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
												children: "Expected Delivery Forecast"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-semibold text-gold flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
													" ",
													order.estDeliveryDate
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground uppercase tracking-widest font-medium",
												children: "Carrier Dispatch"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-semibold text-foreground flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-gold" }),
													" ",
													order.shippingFee === 0 && order.paymentMethod.includes("Pickup") ? "Showroom Pick-Up" : "Speedaf Express / DHL"
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 sm:p-8 bg-card border border-border rounded-2xl shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs uppercase tracking-widest font-semibold text-gold mb-8",
										children: "Delivery Timeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative pl-8 space-y-8 border-l border-border ml-3",
										children: TIMELINE_STEPS.map((s, idx) => {
											const isActive = currentStepIdx >= idx;
											const isCurrent = currentStepIdx === idx;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `absolute left-[-41px] top-0.5 h-6 w-6 rounded-full border flex items-center justify-center transition-all ${isCurrent ? "bg-gold text-white border-gold ring-4 ring-gold/15 scale-110" : isActive ? "bg-gold/10 text-gold border-gold" : "bg-card text-muted-foreground border-border"}`,
													children: isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3.5 w-3.5 text-gold fill-current bg-white rounded-full" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold",
														children: idx + 1
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1 text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: `text-xs font-semibold uppercase tracking-wider ${isCurrent ? "text-gold" : isActive ? "text-foreground" : "text-muted-foreground font-medium"}`,
														children: s.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: `text-xs font-light leading-relaxed ${isActive ? "text-muted-foreground" : "text-muted-foreground/50"}`,
														children: s.desc
													})]
												})]
											}, idx);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 bg-card border border-border rounded-2xl shadow-soft space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs uppercase tracking-widest font-semibold text-gold border-b border-border pb-2",
											children: "Purchased Items"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y divide-border",
											children: order.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-3 flex justify-between items-center text-xs font-light",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													item.name,
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
														className: "font-semibold",
														children: ["x", item.qty]
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-gold",
													children: [
														"GH₵",
														" ",
														(item.price * getCediMultiplier() * item.qty).toLocaleString()
													]
												})]
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-border pt-4 text-xs space-y-1.5 font-light",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping Digital Address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground uppercase",
														children: order.shippingAddress.gpsAddress
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Street Landmark Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-foreground",
														children: [
															order.shippingAddress.streetAddress,
															",",
															" ",
															order.shippingAddress.area || ""
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between border-t border-border pt-3 font-semibold text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Transaction Total Charged" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-gold",
														children: [
															"GH₵",
															" ",
															(order.total * getCediMultiplier()).toLocaleString("en-US", { minimumFractionDigits: 2 })
														]
													})]
												})
											]
										})
									]
								})
							]
						}, "track-found"), searched && !order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 15
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							className: "p-8 border border-dashed border-border bg-card rounded-2xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-10 w-10 text-destructive mx-auto mb-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: "Order Reference Unresolved"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto",
									children: [
										"No active Touch by Bel'voma purchases correspond to the reference code",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground uppercase",
											children: inputVal
										}),
										"."
									]
								})
							]
						}, "track-not-found")]
					})
				]
			})
		]
	});
}
//#endregion
export { TrackOrderComponent as component };
