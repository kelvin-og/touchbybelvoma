import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowRight, L as MessageSquare, V as Mail, _t as CircleCheck, ut as Download, v as Sparkles } from "../_libs/lucide-react.mjs";
import { n as formatPrice, r as getCediMultiplier } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
import { t as Route } from "./order-confirmation._orderId-NYeBkVKG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation._orderId-BvBaC7jc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfirmationComponent() {
	const { orderId } = Route.useParams();
	const { orders } = useStore();
	const [order, setOrder] = (0, import_react.useState)(null);
	const [showSmsAlert, setShowSmsAlert] = (0, import_react.useState)(false);
	const [showEmailAlert, setShowEmailAlert] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const found = orders.find((o) => o.id === orderId);
		if (found) {
			setOrder(found);
			const smsTimer = setTimeout(() => setShowSmsAlert(true), 1e3);
			const emailTimer = setTimeout(() => setShowEmailAlert(true), 2500);
			return () => {
				clearTimeout(smsTimer);
				clearTimeout(emailTimer);
			};
		}
	}, [orderId, orders]);
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-foreground",
					children: "Order Not Found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground font-light",
					children: [
						"We are unable to locate an active transaction associated with the reference ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: orderId
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "btn-gold",
					children: "Return to Boutique"
				})
			]
		})
	});
	const grandTotalGhs = order.total * getCediMultiplier();
	const shippingCostGhs = order.shippingFee * getCediMultiplier();
	const discountGhs = order.discount * getCediMultiplier();
	const itemsSubtotalGhs = grandTotalGhs - shippingCostGhs + discountGhs;
	const handleDownloadInvoice = () => {
		const dateStr = new Date(order.date).toLocaleDateString();
		const invoiceContent = `
=============================================
         TOUCH BY BEL'VOMA JEWELRY
          Airport Residential Area
               Accra, Ghana
=============================================
INVOICE RECEIPT: ${order.id}
Date: ${dateStr}
Recipient: ${order.shippingAddress.fullName}
Digital Address: ${order.shippingAddress.gpsAddress}
Street: ${order.shippingAddress.streetAddress}, ${order.shippingAddress.area || ""}
City/Region: ${order.shippingAddress.city}, ${order.shippingAddress.region}
Contact Phone: ${order.shippingAddress.phone}
---------------------------------------------
ITEMS PURCHASED:
${order.items.map((i) => `- ${i.name} (x${i.qty}): GH₵ ${(i.price * getCediMultiplier() * i.qty).toFixed(2)}`).join("\n")}
---------------------------------------------
Subtotal:    GH₵ ${itemsSubtotalGhs.toFixed(2)}
Shipping:    GH₵ ${shippingCostGhs.toFixed(2)}
Discount:   -GH₵ ${discountGhs.toFixed(2)}
---------------------------------------------
GRAND TOTAL: GH₵ ${grandTotalGhs.toFixed(2)}
Payment:     ${order.paymentMethod}
Status:      ${order.status}
=============================================
      Thank you for choosing Bel'voma!
     Touch Every Moment with Elegance.
=============================================
`;
		const blob = new Blob([invoiceContent], { type: "text/plain;charset=utf-8" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = `Invoice_${order.id}.txt`;
		link.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background py-32 relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none max-w-sm w-full px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [showSmsAlert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30,
						scale: .9
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .9
					},
					className: "bg-charcoal text-white border border-gold/20 p-4 rounded-xl shadow-lift flex items-start gap-3 pointer-events-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-light",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-gold-light uppercase tracking-wider text-[9px]",
							children: "SMS Dispatch Confirmation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 leading-normal text-white/90",
							children: [
								"Receipt sent to ",
								order.shippingAddress.phone,
								": \"Order",
								" ",
								order.id,
								" confirmed! Track progress on touchbybelvoma.com.\""
							]
						})]
					})]
				}), showEmailAlert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30,
						scale: .9
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .9
					},
					className: "bg-charcoal text-white border border-gold/20 p-4 rounded-xl shadow-lift flex items-start gap-3 pointer-events-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-light",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-gold-light uppercase tracking-wider text-[9px]",
							children: "Email Invoice Sent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 leading-normal text-white/90",
							children: [
								"Premium receipt invoice copy successfully delivered to",
								" ",
								order.shippingAddress.fullName,
								" at your registered account mail."
							]
						})]
					})]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux max-w-2xl relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 25
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .7 },
					className: "bg-card border border-gold/15 p-8 sm:p-10 rounded-2xl shadow-lift text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scale: .3,
								rotate: -15,
								opacity: 0
							},
							animate: {
								scale: 1,
								rotate: 0,
								opacity: 1
							},
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 15,
								delay: .1
							},
							className: "mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "h-10 w-10",
								strokeWidth: 1.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-semibold tracking-tight text-foreground",
							children: "Thank You For Your Purchase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-light text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed",
							children: "Your selection has been successfully logged. Touch by Bel'voma is preparing your premium packaging."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-8 border-t border-b border-border py-6 grid grid-cols-2 gap-y-4 gap-x-2 text-left text-xs font-light",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground uppercase tracking-widest",
									children: "Order Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground mt-0.5",
									children: order.id
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground uppercase tracking-widest",
									children: "Estimated Delivery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-gold mt-0.5",
									children: order.estDeliveryDate
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground uppercase tracking-widest",
									children: "Payment Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground mt-0.5",
									children: order.status === "Payment Pending" ? "MOMO pending authorization" : "Transaction Approved"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground uppercase tracking-widest",
									children: "Total Transaction"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-gold mt-0.5",
									children: formatPrice(order.total)
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-accent/25 border border-border p-5 rounded-xl text-left text-xs font-light mb-8 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold border-b border-border pb-2 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Order Summary"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2 max-h-40 overflow-y-auto pr-1",
									children: order.items.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											i.name,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "font-semibold",
												children: ["x", i.qty]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-muted-foreground",
											children: formatPrice(i.price * i.qty)
										})]
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-3 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Shipping Delivery"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shippingCostGhs === 0 ? "Free" : `GH₵ ${shippingCostGhs.toFixed(2)}` })]
										}),
										discountGhs > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[11px] text-green-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Coupon Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["-GH₵ ", discountGhs.toFixed(2)] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between font-semibold pt-1.5 border-t border-border/60 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grand Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-gold",
												children: [
													"GH₵",
													" ",
													grandTotalGhs.toLocaleString("en-US", { minimumFractionDigits: 2 })
												]
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-3 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleDownloadInvoice,
								className: "flex items-center justify-center gap-2 py-3 px-6 border border-border rounded-xl text-xs font-semibold text-charcoal bg-card hover:border-gold transition-colors focus:outline-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download PDF Invoice"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/track-order",
								search: { orderId: order.id },
								className: "btn-gold flex items-center justify-center gap-2",
								children: ["Track Order Progress ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "text-xs text-muted-foreground hover:text-gold transition-colors font-light",
								children: "← Return to Jewelry boutique"
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ConfirmationComponent as component };
