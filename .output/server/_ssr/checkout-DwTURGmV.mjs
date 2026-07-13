import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Heart, At as ArrowRight, C as ShieldCheck, I as Minus, O as RotateCcw, U as Lock, f as Trash2, j as Plus, jt as ArrowLeft, rt as Gift, vt as CircleCheckBig, w as ShieldAlert, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { i as getFreeShippingThreshold, n as formatPrice, o as products, r as getCediMultiplier } from "./products-ZEpX92BZ.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DwTURGmV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ghanaRegions = [
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
];
function CheckoutComponent() {
	const navigate = useNavigate();
	const { cart, user, setQty, removeFromCart, addToCart, wishlist, toggleWishlist, addresses, createOrderFromCart } = useStore();
	const [step, setStep] = (0, import_react.useState)(1);
	const [items, setItems] = (0, import_react.useState)([]);
	const [lastRemovedItem, setLastRemovedItem] = (0, import_react.useState)(null);
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("+233");
	const [region, setRegion] = (0, import_react.useState)("Greater Accra");
	const [city, setCity] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("");
	const [gpsAddress, setGpsAddress] = (0, import_react.useState)("");
	const [landmark, setLandmark] = (0, import_react.useState)("");
	const [streetAddress, setStreetAddress] = (0, import_react.useState)("");
	const [additionalNotes, setAdditionalNotes] = (0, import_react.useState)("");
	const [saveAddress, setSaveAddress] = (0, import_react.useState)(true);
	const [shippingMethod, setShippingMethod] = (0, import_react.useState)("standard");
	const [promoInput, setPromoInput] = (0, import_react.useState)("");
	const [appliedPromo, setAppliedPromo] = (0, import_react.useState)("");
	const [discountPercent, setDiscountPercent] = (0, import_react.useState)(0);
	const [promoError, setPromoError] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("momo_mtn");
	const [momoNumber, setMomoNumber] = (0, import_react.useState)("");
	const [otpSent, setOtpSent] = (0, import_react.useState)(false);
	const [otpVal, setOtpVal] = (0, import_react.useState)("");
	const [isProcessingPayment, setIsProcessingPayment] = (0, import_react.useState)(false);
	const [agreeTerms, setAgreeTerms] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [isPlacingOrder, setIsPlacingOrder] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const list = cart.map((item) => {
			const p = products.find((prod) => prod.id === item.productId);
			return {
				id: item.productId,
				name: p?.name || "Jewelry Piece",
				price: p?.price || 0,
				qty: item.qty,
				image: p?.images[0] || "/assets/logo.png"
			};
		});
		setItems(list);
		if (user) {
			const nameParts = user.name.split(" ");
			setFirstName(nameParts[0] || "");
			setLastName(nameParts.slice(1).join(" ") || "");
			setEmail(user.email || "");
			setPhone(user.phone || "+233");
			if (addresses.length > 0) {
				const primary = addresses[0];
				setRegion(primary.region);
				setCity(primary.city);
				setArea(primary.area || "");
				setGpsAddress(primary.gpsAddress);
				setLandmark(primary.landmark || "");
				setStreetAddress(primary.streetAddress);
			}
		}
	}, [
		cart,
		user,
		addresses
	]);
	if (cart.length === 0 && step < 7) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
				className: "h-12 w-12 text-gold mb-4",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold text-foreground",
				children: "Your shopping cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-2 max-w-xs text-center font-light",
				children: "There are no items currently queued for checkout. Return to our boutique to select your jewelry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "btn-gold mt-6",
				children: "Explore Boutique"
			})
		]
	});
	const itemsSubtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
	const itemsSubtotalGhs = itemsSubtotal * getCediMultiplier();
	const discountGhs = Math.round(itemsSubtotalGhs * (discountPercent / 100));
	const isFreeShipping = itemsSubtotalGhs >= getFreeShippingThreshold();
	const getShippingCostGhs = () => {
		if (isFreeShipping || shippingMethod === "pickup") return 0;
		switch (shippingMethod) {
			case "sameday": return 60;
			case "nextday": return 45;
			default: return 30;
		}
	};
	const shippingCostGhs = getShippingCostGhs();
	const grandTotalGhs = itemsSubtotalGhs + shippingCostGhs - discountGhs;
	const getEstimatedDeliveryDate = () => {
		const today = /* @__PURE__ */ new Date();
		switch (shippingMethod) {
			case "sameday": return "Today, before 6:00 PM";
			case "nextday":
				today.setDate(today.getDate() + 1);
				return today.toLocaleDateString("en-US", {
					weekday: "long",
					month: "short",
					day: "numeric"
				});
			case "pickup": return "Ready in 2 hours at Accra Gallery";
			default: {
				today.setDate(today.getDate() + 3);
				const max = /* @__PURE__ */ new Date();
				max.setDate(max.getDate() + 5);
				return `${today.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric"
				})} - ${max.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
					year: "numeric"
				})}`;
			}
		}
	};
	const handleQtyChange = (id, currentQty, delta) => {
		const target = currentQty + delta;
		setQty(id, target);
	};
	const handleRemove = (id, currentQty) => {
		setLastRemovedItem({
			id,
			qty: currentQty
		});
		removeFromCart(id);
	};
	const handleUndoRemove = () => {
		if (lastRemovedItem) {
			addToCart(lastRemovedItem.id, lastRemovedItem.qty);
			setLastRemovedItem(null);
		}
	};
	const handleApplyPromo = (e) => {
		e.preventDefault();
		setPromoError("");
		if (promoInput.toUpperCase().trim() === "TBBGIFT") {
			setAppliedPromo("TBBGIFT");
			setDiscountPercent(15);
			setPromoInput("");
		} else if (promoInput.toUpperCase().trim() === "BELVOMA10") {
			setAppliedPromo("BELVOMA10");
			setDiscountPercent(10);
			setPromoInput("");
		} else setPromoError("Invalid promotional coupon code.");
	};
	const validatePhone = (num) => {
		const cleanNum = num.replace(/\s+/g, "");
		if (!cleanNum.startsWith("+233")) return false;
		const nationalNumber = cleanNum.slice(4);
		if (nationalNumber.length !== 9) return false;
		const prefix2 = nationalNumber.slice(0, 2);
		return [
			"24",
			"54",
			"55",
			"59",
			"53",
			"20",
			"50",
			"26",
			"56",
			"27",
			"57"
		].includes(prefix2);
	};
	const validateGhanaGPS = (gps) => {
		return /^[A-Z]{2}-\d{3,4}-\d{4}$/.test(gps.toUpperCase().trim());
	};
	const handleNextStep = () => {
		setErrorMsg("");
		if (step === 2) {
			if (!firstName || !lastName || !email) {
				setErrorMsg("Please fill out all required customer information.");
				return;
			}
			if (!validatePhone(phone)) {
				setErrorMsg("Please provide a valid Ghana phone number starting with +233.");
				return;
			}
		}
		if (step === 3) {
			if (!city || !area || !gpsAddress || !streetAddress) {
				setErrorMsg("Please fill out all required delivery location details.");
				return;
			}
			if (!validateGhanaGPS(gpsAddress)) {
				setErrorMsg("Invalid Ghana Post GPS format. Must be XX-XXX-XXXX (e.g. GA-182-9902).");
				return;
			}
		}
		setStep(step + 1);
	};
	const handleTriggerMomoOtp = (e) => {
		e.preventDefault();
		setErrorMsg("");
		if (!momoNumber) {
			setErrorMsg("Please enter your Mobile Money account number.");
			return;
		}
		setIsProcessingPayment(true);
		setTimeout(() => {
			setIsProcessingPayment(false);
			setOtpSent(true);
		}, 1200);
	};
	const handleVerifyMomoOtp = (e) => {
		e.preventDefault();
		if (!otpVal) return;
		setIsProcessingPayment(true);
		setTimeout(() => {
			setIsProcessingPayment(false);
			setStep(6);
			setOtpSent(false);
			setOtpVal("");
		}, 1500);
	};
	const handleCardPayment = () => {
		setIsProcessingPayment(true);
		setTimeout(() => {
			setIsProcessingPayment(false);
			setStep(6);
		}, 2e3);
	};
	const handlePlaceOrder = async () => {
		if (!agreeTerms) {
			setErrorMsg("You must accept our Terms of Sale, Refund, and Privacy Policies to finalize purchase.");
			return;
		}
		setIsPlacingOrder(true);
		try {
			const addressPayload = {
				id: "addr_checkout",
				fullName: `${firstName} ${lastName}`,
				phone,
				gpsAddress: gpsAddress.toUpperCase().trim(),
				streetAddress,
				city,
				region,
				area,
				landmark
			};
			const finalOrder = await createOrderFromCart(paymentMethod.toUpperCase().replace("_", " "), addressPayload, shippingCostGhs / getCediMultiplier(), discountGhs / getCediMultiplier(), appliedPromo, getEstimatedDeliveryDate(), additionalNotes);
			setTimeout(() => {
				setIsPlacingOrder(false);
				navigate({
					to: `/order-confirmation/$orderId`,
					params: { orderId: finalOrder.id }
				});
			}, 1500);
		} catch (err) {
			setIsPlacingOrder(false);
			setErrorMsg("An unexpected transaction processing fault occurred. Please check payment and try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background py-32 relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Luxury Boutiques"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-semibold tracking-tight mt-1 text-foreground",
							children: "Secure Checkout"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-2xl mx-auto mb-12 px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex justify-between items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[18px] left-[5%] right-[5%] h-[1.5px] bg-border z-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { width: `${(step - 1) * 20}%` },
									className: "absolute top-[18px] left-[5%] h-[1.5px] bg-gold z-0",
									transition: { duration: .4 }
								}),
								[
									{
										num: 1,
										name: "Cart"
									},
									{
										num: 2,
										name: "Info"
									},
									{
										num: 3,
										name: "Address"
									},
									{
										num: 4,
										name: "Shipping"
									},
									{
										num: 5,
										name: "Payment"
									},
									{
										num: 6,
										name: "Review"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									disabled: s.num > step,
									onClick: () => setStep(s.num),
									className: "relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-9.5 w-9.5 rounded-full border flex items-center justify-center text-xs font-semibold transition-all ${step >= s.num ? "bg-gold text-white border-gold shadow-soft scale-105" : "bg-card text-muted-foreground border-border group-hover:border-gold/30"}`,
										children: step > s.num ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4.5 w-4.5 text-white" }) : s.num
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[10px] uppercase tracking-wider mt-2 transition-colors ${step >= s.num ? "text-foreground font-semibold" : "text-muted-foreground font-light"}`,
										children: s.name
									})]
								}, s.num))
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						className: "max-w-4xl mx-auto mb-6 p-4 bg-destructive/5 border border-destructive/10 rounded-xl flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5 text-destructive shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-light text-destructive/90",
							children: errorMsg
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start max-w-5xl mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
								mode: "wait",
								children: [
									step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: {
											opacity: 0,
											x: 10
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center border-b border-border pb-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-lg font-semibold text-foreground",
													children: "Shopping Bag Review"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-light text-muted-foreground",
													children: [items.length, " unique pieces"]
												})]
											}),
											lastRemovedItem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 bg-gold/5 border border-gold/15 text-xs rounded-xl flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-light text-muted-foreground flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-gold" }), " Item removed from checkout bag."]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: handleUndoRemove,
													className: "text-[10px] text-gold font-semibold uppercase flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), " Undo"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "divide-y divide-border",
												children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "py-5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: item.image,
															alt: item.name,
															className: "h-16 w-16 rounded-xl object-cover border border-border"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-xs font-semibold text-foreground",
															children: item.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-semibold text-gold mt-1",
															children: formatPrice(item.price)
														})] })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-3 sm:mt-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center border border-border rounded-lg bg-accent/20",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	onClick: () => handleQtyChange(item.id, item.qty, -1),
																	className: "p-1.5 text-muted-foreground hover:text-gold transition-colors focus:outline-none",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-semibold px-3 text-foreground w-8 text-center",
																	children: item.qty
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	onClick: () => handleQtyChange(item.id, item.qty, 1),
																	className: "p-1.5 text-muted-foreground hover:text-gold transition-colors focus:outline-none",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
																})
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => toggleWishlist(item.id),
																className: "p-2 border border-border hover:border-gold/30 hover:bg-gold/5 transition-all rounded-lg text-muted-foreground hover:text-gold",
																"aria-label": "Add to wishlist",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${wishlist.includes(item.id) ? "fill-gold text-gold" : ""}` })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => handleRemove(item.id, item.qty),
																className: "p-2 border border-border hover:border-red-200 hover:bg-red-50 transition-all rounded-lg text-muted-foreground hover:text-red-500",
																"aria-label": "Remove item",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
															})]
														})]
													})]
												}, item.id))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4" }), " Apply Promotional Campaign Coupon"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
														onSubmit: handleApplyPromo,
														className: "flex gap-2 max-w-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: promoInput,
															onChange: (e) => setPromoInput(e.target.value),
															placeholder: "e.g. TBBGIFT",
															className: "flex-1 text-xs border border-border bg-card px-4 py-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "submit",
															className: "px-5 py-3 bg-charcoal text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl hover:bg-black transition-all",
															children: "Apply"
														})]
													}),
													promoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-destructive font-light",
														children: promoError
													}),
													appliedPromo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-[10px] text-green-700 font-semibold uppercase tracking-wider flex items-center gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3.5 w-3.5 text-green-600" }),
															" ",
															"Coupon \"",
															appliedPromo,
															"\" verified (",
															discountPercent,
															"% Discount)"
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border flex justify-between items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/shop",
													className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1 font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Return to Boutique"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(2),
													className: "btn-gold",
													children: ["Proceed to Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})]
											})
										]
									}, "step1"),
									step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: {
											opacity: 0,
											x: 10
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold text-foreground border-b border-border pb-4",
												children: "Customer Credentials"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "firstName",
														type: "text",
														required: true,
														value: firstName,
														onChange: (e) => setFirstName(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "firstName",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "First Name"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "lastName",
														type: "text",
														required: true,
														value: lastName,
														onChange: (e) => setLastName(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "lastName",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "Last Name"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "email",
													type: "email",
													required: true,
													value: email,
													onChange: (e) => setEmail(e.target.value),
													placeholder: " ",
													className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "email",
													className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
													children: "Email Address"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "phone",
														type: "tel",
														required: true,
														value: phone,
														onChange: (e) => setPhone(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "phone",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "Ghana Phone Number (+233)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute right-4 top-5 text-[10px] text-muted-foreground/75 tracking-wider font-light pointer-events-none",
														children: "Carrier Check"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 border-t border-border space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-start gap-2.5 cursor-pointer group text-xs font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed",
														children: "Create an account to track deliveries, earn loyalty points, and save addresses."
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-start gap-2.5 cursor-pointer group text-xs font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed",
														children: "Subscribe to promo newsletters and alerts for new gold entries."
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border flex justify-between items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(1),
													className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Cart"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: handleNextStep,
													className: "btn-gold",
													children: ["Billing & Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})]
											})
										]
									}, "step2"),
									step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: {
											opacity: 0,
											x: 10
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold text-foreground border-b border-border pb-4",
												children: "Ghana Delivery Address"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-1",
													children: "Region"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: region,
													onChange: (e) => setRegion(e.target.value),
													className: "w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none",
													children: ghanaRegions.map((reg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: reg,
														children: reg
													}, reg))
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "gpsAddress",
														type: "text",
														required: true,
														value: gpsAddress,
														onChange: (e) => setGpsAddress(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors uppercase placeholder:normal-case"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "gpsAddress",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "GhanaPost GPS (e.g. GA-182-9902)"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "city",
														type: "text",
														required: true,
														value: city,
														onChange: (e) => setCity(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "city",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "City / Town"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "area",
														type: "text",
														required: true,
														value: area,
														onChange: (e) => setArea(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "area",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "Area / Neighborhood"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative sm:col-span-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "streetAddress",
														type: "text",
														required: true,
														value: streetAddress,
														onChange: (e) => setStreetAddress(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "streetAddress",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "Street Address / House Number"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "landmark",
														type: "text",
														value: landmark,
														onChange: (e) => setLandmark(e.target.value),
														placeholder: " ",
														className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "landmark",
														className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
														children: "Landmark (e.g. Near Koala)"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "additionalNotes",
													value: additionalNotes,
													onChange: (e) => setAdditionalNotes(e.target.value),
													placeholder: " ",
													className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl focus:outline-none focus:border-gold peer transition-colors h-20 resize-none"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "additionalNotes",
													className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
													children: "Additional Notes (e.g. Delivery time restrictions)"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pt-2 border-t border-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2.5 cursor-pointer group text-xs font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: saveAddress,
														onChange: (e) => setSaveAddress(e.target.checked),
														className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground group-hover:text-foreground transition-colors",
														children: "Save this address to my profile book for future orders"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border flex justify-between items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(2),
													className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Credentials"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: handleNextStep,
													className: "btn-gold",
													children: ["Select Shipping ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})]
											})
										]
									}, "step3"),
									step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: {
											opacity: 0,
											x: 10
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold text-foreground border-b border-border pb-4",
												children: "Delivery Dispatch Speed"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: `p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${region !== "Greater Accra" ? "opacity-55 cursor-not-allowed border-border" : shippingMethod === "sameday" ? "border-gold bg-gold/5" : "border-border hover:border-gold/30"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "radio",
																name: "shipping",
																checked: shippingMethod === "sameday",
																disabled: region !== "Greater Accra",
																onChange: () => setShippingMethod("sameday"),
																className: "text-gold focus:ring-gold bg-transparent mt-1"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																	className: "text-xs font-semibold text-foreground flex items-center gap-1.5",
																	children: [
																		"Same-Day VIP Delivery",
																		" ",
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[9px] uppercase tracking-wider bg-gold/15 text-gold px-2 py-0.5 rounded font-medium",
																			children: "Accra Only"
																		})
																	]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[11px] text-muted-foreground font-light mt-1",
																	children: "Dispatched via private courier by evening. Order before 1:00 PM."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] text-gold font-medium mt-1",
																	children: "Estimated: Today, before 6:00 PM"
																})
															] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold text-gold",
															children: isFreeShipping ? "FREE" : "GH₵ 60.00"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: `p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${shippingMethod === "nextday" ? "border-gold bg-gold/5" : "border-border hover:border-gold/30"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "radio",
																name: "shipping",
																checked: shippingMethod === "nextday",
																onChange: () => setShippingMethod("nextday"),
																className: "text-gold focus:ring-gold bg-transparent mt-1"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs font-semibold text-foreground",
																	children: "Next-Day Executive Delivery"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[11px] text-muted-foreground font-light mt-1",
																	children: "Available for major cities (Accra, Kumasi, Takoradi, Tamale)."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] text-gold font-medium mt-1",
																	children: "Estimated: Tomorrow, by afternoon"
																})
															] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold text-gold",
															children: isFreeShipping ? "FREE" : "GH₵ 45.00"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: `p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${shippingMethod === "standard" ? "border-gold bg-gold/5" : "border-border hover:border-gold/30"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "radio",
																name: "shipping",
																checked: shippingMethod === "standard",
																onChange: () => setShippingMethod("standard"),
																className: "text-gold focus:ring-gold bg-transparent mt-1"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs font-semibold text-foreground",
																	children: "Standard Nationwide Delivery"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[11px] text-muted-foreground font-light mt-1",
																	children: "Dispatched via Speedaf or DHL Courier. Reaches all 16 regions."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] text-gold font-medium mt-1",
																	children: "Estimated: 3 - 5 business days"
																})
															] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold text-gold",
															children: isFreeShipping ? "FREE" : "GH₵ 30.00"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: `p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${shippingMethod === "pickup" ? "border-gold bg-gold/5" : "border-border hover:border-gold/30"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "radio",
																name: "shipping",
																checked: shippingMethod === "pickup",
																onChange: () => setShippingMethod("pickup"),
																className: "text-gold focus:ring-gold bg-transparent mt-1"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs font-semibold text-foreground",
																	children: "Showroom Pick-Up"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[11px] text-muted-foreground font-light mt-1",
																	children: "Pick up directly at our luxury showroom (Airport Residential Area, Accra)."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] text-gold font-medium mt-1",
																	children: "Estimated: Ready in 2 hours"
																})
															] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold text-green-600",
															children: "FREE"
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border flex justify-between items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(3),
													className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Address"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(5),
													className: "btn-gold",
													children: ["Select Payment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})]
											})
										]
									}, "step4"),
									step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: {
											opacity: 0,
											x: 10
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold text-foreground border-b border-border pb-4",
												children: "Secure Payment Options"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 md:grid-cols-4 gap-2 mb-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															setPaymentMethod("momo_mtn");
															setOtpSent(false);
														},
														className: `py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${paymentMethod === "momo_mtn" ? "border-gold bg-gold/5 text-gold" : "border-border text-muted-foreground hover:bg-accent/10"}`,
														children: "MTN MoMo"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															setPaymentMethod("momo_telecel");
															setOtpSent(false);
														},
														className: `py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${paymentMethod === "momo_telecel" ? "border-gold bg-gold/5 text-gold" : "border-border text-muted-foreground hover:bg-accent/10"}`,
														children: "Telecel Cash"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															setPaymentMethod("card_paystack");
															setOtpSent(false);
														},
														className: `py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${paymentMethod === "card_paystack" ? "border-gold bg-gold/5 text-gold" : "border-border text-muted-foreground hover:bg-accent/10"}`,
														children: "Visa / Mastercard"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															setPaymentMethod("bank_transfer");
															setOtpSent(false);
														},
														className: `py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${paymentMethod === "bank_transfer" ? "border-gold bg-gold/5 text-gold" : "border-border text-muted-foreground hover:bg-accent/10"}`,
														children: "Bank Transfer"
													})
												]
											}),
											(paymentMethod === "momo_mtn" || paymentMethod === "momo_telecel") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4 p-5 border border-gold/15 bg-gold/5 rounded-2xl",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "text-xs uppercase tracking-widest font-semibold text-gold",
														children: [
															paymentMethod === "momo_mtn" ? "MTN Mobile Money" : "Telecel Cash",
															" ",
															"Gateway"
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-muted-foreground font-light leading-relaxed",
														children: "A secure approval prompt (USSD code push) will be transmitted to your mobile number. Enter credentials below:"
													}),
													!otpSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
														onSubmit: handleTriggerMomoOtp,
														className: "space-y-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																id: "momoNumber",
																type: "tel",
																required: true,
																value: momoNumber,
																onChange: (e) => setMomoNumber(e.target.value),
																placeholder: " ",
																className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-card border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																htmlFor: "momoNumber",
																className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
																children: "Mobile Money Wallet Number"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "submit",
															disabled: isProcessingPayment,
															className: "w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.18em] text-white uppercase bg-charcoal hover:bg-black transition-all flex items-center justify-center gap-2",
															children: isProcessingPayment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																	className: "animate-spin h-4 w-4 text-white",
																	fill: "none",
																	viewBox: "0 0 24 24",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																		className: "opacity-25",
																		cx: "12",
																		cy: "12",
																		r: "10",
																		stroke: "currentColor",
																		strokeWidth: "4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																		className: "opacity-75",
																		fill: "currentColor",
																		d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
																	})]
																}),
																" ",
																"Transmitting Prompt..."
															] }) : "Initialize USSD Payment Prompt"
														})]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
														onSubmit: handleVerifyMomoOtp,
														className: "space-y-4",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "p-3 bg-amber-50 border border-amber-100 text-amber-800 text-xs font-light rounded-xl leading-relaxed",
																children: [
																	"A simulated USSD transaction code has been triggered. Please enter the 6-digit confirmation pin sent to ",
																	momoNumber,
																	":"
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	id: "otpVal",
																	type: "text",
																	maxLength: 6,
																	required: true,
																	value: otpVal,
																	onChange: (e) => setOtpVal(e.target.value),
																	placeholder: " ",
																	className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-card border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors tracking-widest font-semibold"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	htmlFor: "otpVal",
																	className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
																	children: "Enter 6-Digit Payment PIN"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "submit",
																disabled: isProcessingPayment,
																className: "w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.18em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all flex items-center justify-center gap-2",
																children: isProcessingPayment ? "Verifying Transaction..." : "Authorize Wallet Payment"
															})
														]
													})
												]
											}),
											paymentMethod === "card_paystack" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4 p-5 border border-gold/15 bg-gold/5 rounded-2xl text-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-xs uppercase tracking-widest font-semibold text-gold",
														children: "Card Checkout Gateway"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-light text-muted-foreground leading-relaxed max-w-sm mx-auto",
														children: "Finalize checkout securely via Paystack/Flutterwave. Click below to launch the checkout popup interface:"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: handleCardPayment,
														disabled: isProcessingPayment,
														className: "py-3 px-6 bg-charcoal hover:bg-black text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all inline-flex items-center gap-2",
														children: isProcessingPayment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																className: "animate-spin h-3.5 w-3.5 text-white",
																fill: "none",
																viewBox: "0 0 24 24",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																	className: "opacity-25",
																	cx: "12",
																	cy: "12",
																	r: "10",
																	stroke: "currentColor",
																	strokeWidth: "4"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																	className: "opacity-75",
																	fill: "currentColor",
																	d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
																})]
															}),
															" ",
															"Loading Gateway..."
														] }) : "Launch Secure Paystack Panel"
													})
												]
											}),
											paymentMethod === "bank_transfer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4 p-5 border border-gold/15 bg-gold/5 rounded-2xl text-xs font-light leading-relaxed",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-xs uppercase tracking-widest font-semibold text-gold",
														children: "Bank Wire Transfer Guidelines"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-muted-foreground",
														children: "Please deposit the grand total to the designated bank account below. Order processing will commence immediately upon confirmation of the deposit."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-card border border-border rounded-xl space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																	className: "font-semibold text-foreground uppercase tracking-wider text-[10px]",
																	children: "Bank:"
																}),
																" ",
																"Stanbic Bank Ghana"
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																	className: "font-semibold text-foreground uppercase tracking-wider text-[10px]",
																	children: "Account Name:"
																}),
																" ",
																"Touch by Bel'voma Ltd"
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																	className: "font-semibold text-foreground uppercase tracking-wider text-[10px]",
																	children: "Account Number:"
																}),
																" ",
																"9040003920192"
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																	className: "font-semibold text-foreground uppercase tracking-wider text-[10px]",
																	children: "Branch:"
																}),
																" ",
																"Airport City Branch"
															] })
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setStep(6),
														className: "w-full py-3 px-6 bg-charcoal hover:bg-black text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all",
														children: "Confirm Bank Payment Details & Proceed"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 opacity-60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-semibold text-muted-foreground tracking-widest uppercase flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-gold" }), " SSL Encrypted"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-semibold text-muted-foreground tracking-widest uppercase flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), " PCI Compliant"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pt-6 border-t border-border flex justify-between items-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(4),
													className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Shipping"]
												})
											})
										]
									}, "step5"),
									step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: {
											opacity: 0,
											x: 10
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold text-foreground border-b border-border pb-4",
												children: "Grand Order Review"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4 text-xs font-light",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-4 border border-border rounded-xl space-y-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold",
																children: "Recipient Details"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																firstName,
																" ",
																lastName
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: email }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: phone })
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-4 border border-border rounded-xl space-y-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold",
																children: "Delivery Address"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																streetAddress,
																", ",
																area,
																", ",
																city
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [region, " Region, Ghana"] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "font-semibold text-foreground uppercase mt-1",
																children: ["GPS Digital: ", gpsAddress]
															}),
															landmark && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-muted-foreground",
																children: ["Landmark: ", landmark]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-4 border border-border rounded-xl space-y-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold",
																children: "Shipping Speed"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "capitalize",
																children: [shippingMethod, " Dispatch"]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-gold font-medium",
																children: ["Estimated: ", getEstimatedDeliveryDate()]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-4 border border-border rounded-xl space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold",
															children: "Selected Payment"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "uppercase",
															children: paymentMethod.replace("_", " ")
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pt-4 border-t border-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-start gap-2.5 cursor-pointer group text-xs font-light leading-relaxed",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: agreeTerms,
														onChange: (e) => setAgreeTerms(e.target.checked),
														className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground group-hover:text-foreground transition-colors",
														children: [
															"I hereby consent to the Touch by Bel'voma",
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
																href: "#terms",
																className: "text-gold underline",
																children: "Terms & Conditions"
															}),
															",",
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
																href: "#refund",
																className: "text-gold underline",
																children: "Refund Policy"
															}),
															", and",
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
																href: "#privacy",
																className: "text-gold underline",
																children: "Privacy Policy"
															}),
															"."
														]
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-6 border-t border-border flex justify-between items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setStep(5),
													className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Payment"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: handlePlaceOrder,
													disabled: isPlacingOrder,
													className: "btn-gold relative flex items-center justify-center gap-2",
													children: isPlacingOrder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
															className: "animate-spin h-4 w-4 text-white",
															fill: "none",
															viewBox: "0 0 24 24",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																className: "opacity-25",
																cx: "12",
																cy: "12",
																r: "10",
																stroke: "currentColor",
																strokeWidth: "4"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																className: "opacity-75",
																fill: "currentColor",
																d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
															})]
														}),
														" ",
														"Authorizing..."
													] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Finalize Order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" })] })
												})]
											})
										]
									}, "step6")
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky top-28 bg-card border border-border p-6 rounded-2xl shadow-soft space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs uppercase tracking-widest font-semibold text-gold border-b border-border pb-3",
									children: "Order Summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3 max-h-48 overflow-y-auto pr-1",
									children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center text-xs font-light",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate max-w-[180px]",
											children: [
												item.name,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
													className: "font-semibold",
													children: ["x", item.qty]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-muted-foreground",
											children: formatPrice(item.price * item.qty)
										})]
									}, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-4 space-y-2.5 text-xs font-light",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Items Subtotal"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: formatPrice(itemsSubtotal)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Shipping Delivery Fee"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: shippingMethod === "pickup" ? "Free" : isFreeShipping ? "FREE (Offer)" : `GH₵ ${shippingCostGhs.toFixed(2)}`
											})]
										}),
										appliedPromo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-green-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Coupon Discount (",
												discountPercent,
												"%)"
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["-GH₵ ", discountGhs.toFixed(2)] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between border-t border-border pt-3 text-sm font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grand Total (GHS)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-gold font-bold",
												children: [
													"GH₵",
													" ",
													grandTotalGhs.toLocaleString("en-US", { minimumFractionDigits: 2 })
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-gold/5 border border-gold/10 rounded-xl text-[10px] font-light text-muted-foreground flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Free shipping applied on orders above GH₵",
										" ",
										getFreeShippingThreshold().toLocaleString("en-US"),
										". Apply coupon ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TBBGIFT" }),
										" to deduct 15% off subtotals."
									] })]
								})
							]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { CheckoutComponent as component };
