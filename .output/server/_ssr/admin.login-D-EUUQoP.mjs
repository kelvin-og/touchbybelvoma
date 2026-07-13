import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowRight, C as ShieldCheck, U as Lock, ct as EyeOff, st as Eye, yt as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.login-D-EUUQoP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLoginComponent() {
	const navigate = useNavigate();
	const { login } = useStore();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const handleAdminLogin = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		setIsLoading(true);
		try {
			const result = await login(email, password, "admin");
			if (result.success) {
				setIsSuccess(true);
				setTimeout(() => {
					navigate({ to: "/admin/dashboard" });
				}, 1500);
			} else setErrorMsg(result.error || "Access Denied: Invalid administrator credentials.");
		} catch (err) {
			setErrorMsg("Security connection timeout. Please check your credentials.");
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-charcoal flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-gold/5 blur-[150px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-gold/5 blur-[150px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-8 left-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-[10px] tracking-[0.3em] font-semibold text-gold-light uppercase hover:text-white transition-colors",
					children: "Touch by Bel'voma"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .8,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "max-w-md w-full bg-black/40 backdrop-blur-md border border-gold/20 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						className: "absolute inset-0 bg-charcoal rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: .4,
									rotate: -20,
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
									damping: 15
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "h-16 w-16 text-gold mb-4",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold text-gold-light",
								children: "Access Granted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-primary-foreground/70 mt-2 max-w-xs",
								children: "Authorizing administrative protocols. Loading secure executive databases..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-24 h-[1.5px] bg-white/10 mt-6 overflow-hidden relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { left: "-100%" },
									animate: { left: "100%" },
									transition: {
										repeat: Infinity,
										duration: 1.2,
										ease: "easeInOut"
									},
									className: "absolute top-0 bottom-0 w-12 bg-gold"
								})
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold text-gold-light tracking-wider uppercase",
								children: "Executive Admin Portal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-light text-primary-foreground/60 max-w-xs mx-auto",
								children: "Authorized personnel only. Secure logging is active on this session."
							})
						]
					}),
					errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-light text-red-200/90 leading-relaxed",
							children: errorMsg
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAdminLogin,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-email",
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: " ",
									className: "block w-full px-4 pt-6 pb-2 text-sm text-white bg-transparent border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "admin-email",
									className: "absolute text-xs text-primary-foreground/50 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
									children: "Admin Email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "admin-password",
										type: showPassword ? "text" : "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: " ",
										className: "block w-full px-4 pt-6 pb-2 pr-12 text-sm text-white bg-transparent border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "admin-password",
										className: "absolute text-xs text-primary-foreground/50 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
										children: "Keyphrase Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword(!showPassword),
										className: "absolute right-4 top-4 text-primary-foreground/40 hover:text-gold transition-colors focus:outline-none",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isLoading,
								className: "w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-charcoal uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2",
								children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 text-charcoal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "animate-spin h-4 w-4 text-charcoal",
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
									}), "Decrypting..."]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Unlock Portal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center text-[10px] font-light text-primary-foreground/45 border-t border-white/5 pt-4",
						children: "Default seed is available. Standard rate limiting policies are enforced. IP address is logged."
					})
				]
			})
		]
	});
}
//#endregion
export { AdminLoginComponent as component };
