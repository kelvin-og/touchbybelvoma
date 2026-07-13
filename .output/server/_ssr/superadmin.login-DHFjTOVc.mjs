import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowRight, J as KeyRound, ct as EyeOff, st as Eye, vt as CircleCheckBig, w as ShieldAlert } from "../_libs/lucide-react.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/superadmin.login-DHFjTOVc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SuperAdminLoginComponent() {
	const navigate = useNavigate();
	const { login } = useStore();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const handleSuperLogin = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		setIsLoading(true);
		try {
			const result = await login(email, password, "superadmin");
			if (result.success) {
				setIsSuccess(true);
				setTimeout(() => {
					navigate({ to: "/superadmin/dashboard" });
				}, 1500);
			} else setErrorMsg(result.error || "Access Denied: Invalid super administrator keys.");
		} catch (err) {
			setErrorMsg("Security handshake failed. Connection timed out.");
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-black flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-30%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-8 left-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-[10px] tracking-[0.3em] font-semibold text-purple-400 uppercase hover:text-white transition-colors",
					children: "Touch by Bel'voma · System Core"
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
				className: "max-w-md w-full bg-neutral-950/60 backdrop-blur-md border border-purple-800/30 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						className: "absolute inset-0 bg-neutral-950 rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center",
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
									className: "h-16 w-16 text-purple-400 mb-4",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold text-purple-300",
								children: "Terminal Unlocked"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed",
								children: "Super administrator session initialized. Loading root settings..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-24 h-[1.5px] bg-purple-900/40 mt-6 overflow-hidden relative",
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
								className: "mx-auto w-12 h-12 rounded-full border border-purple-800/40 flex items-center justify-center text-purple-400 mb-4 bg-purple-950/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold text-purple-300 tracking-widest uppercase",
								children: "Root Super Admin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-light text-muted-foreground max-w-xs mx-auto",
								children: "Secure configuration panel. Input your cryptographic credentials."
							})
						]
					}),
					errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-light text-red-200/90 leading-relaxed",
							children: errorMsg
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSuperLogin,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "super-email",
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: " ",
									className: "block w-full px-4 pt-6 pb-2 text-sm text-white bg-transparent border border-purple-800/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer transition-colors"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "super-email",
									className: "absolute text-xs text-purple-400/60 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-purple-400 uppercase tracking-[0.12em]",
									children: "Root Username"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "super-password",
										type: showPassword ? "text" : "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: " ",
										className: "block w-full px-4 pt-6 pb-2 pr-12 text-sm text-white bg-transparent border border-purple-800/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer transition-colors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "super-password",
										className: "absolute text-xs text-purple-400/60 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-purple-400 uppercase tracking-[0.12em]",
										children: "Access Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword(!showPassword),
										className: "absolute right-4 top-4 text-purple-400/40 hover:text-purple-400 transition-colors focus:outline-none",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isLoading,
								className: "w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-black uppercase bg-gradient-to-r from-purple-500 to-purple-300 hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2",
								children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 text-black",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "animate-spin h-4 w-4 text-black",
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
										"Verifying..."
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Unlock Terminal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center text-[10px] font-light text-muted-foreground/50 border-t border-purple-900/10 pt-4 leading-normal",
						children: "Authorized console access only. Logins are tied to root certificate hashes."
					})
				]
			})
		]
	});
}
//#endregion
export { SuperAdminLoginComponent as component };
