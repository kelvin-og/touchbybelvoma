import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowRight, C as ShieldCheck, Nt as Apple, _t as CircleCheck, bt as Chromium, ct as EyeOff, st as Eye, yt as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DpbIC3DI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginComponent() {
	const navigate = useNavigate();
	const { login, failedLoginAttempts, captchaRequired, resetFailedAttempts } = useStore();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [rememberMe, setRememberMe] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [sliderVal, setSliderVal] = (0, import_react.useState)(0);
	const [isCaptchaVerified, setIsCaptchaVerified] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedEmail = localStorage.getItem("tbb_remembered_email");
		if (savedEmail) {
			setEmail(savedEmail);
			setRememberMe(true);
		}
	}, []);
	const handleSliderChange = (e) => {
		const val = parseInt(e.target.value);
		setSliderVal(val);
		if (val >= 95) {
			setIsCaptchaVerified(true);
			setSliderVal(100);
		}
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		if (captchaRequired && !isCaptchaVerified) {
			setErrorMsg("Please slide the golden lock to verify your identity.");
			return;
		}
		setIsLoading(true);
		try {
			const result = await login(email, password);
			if (result.success) {
				setIsSuccess(true);
				if (rememberMe) localStorage.setItem("tbb_remembered_email", email);
				else localStorage.removeItem("tbb_remembered_email");
				setTimeout(() => {
					if (result.role === "superadmin") navigate({ to: "/superadmin/dashboard" });
					else if (result.role === "admin") navigate({ to: "/admin/dashboard" });
					else navigate({ to: "/dashboard" });
				}, 1500);
			} else {
				setErrorMsg(result.error || "Invalid credentials.");
				setSliderVal(0);
				setIsCaptchaVerified(false);
			}
		} catch (err) {
			setErrorMsg("An unexpected connection error occurred. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};
	const handleSocialLogin = (platform) => {
		setIsLoading(true);
		setErrorMsg("");
		setTimeout(() => {
			setIsLoading(false);
			setIsSuccess(true);
			const dbString = localStorage.getItem("naa-users-db");
			const usersDb = dbString ? JSON.parse(dbString) : [];
			let mockSocialUser = usersDb.find((u) => u.email === `social_${platform.toLowerCase()}@belvoma.com`);
			if (!mockSocialUser) {
				mockSocialUser = {
					name: `Guest ${platform} User`,
					email: `${platform.toLowerCase()}_client@belvoma.com`,
					phone: "+233240000000",
					role: "user",
					createdAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				usersDb.push(mockSocialUser);
				localStorage.setItem("naa-users-db", JSON.stringify(usersDb));
			}
			localStorage.setItem("naa-user", JSON.stringify({
				name: mockSocialUser.name,
				email: mockSocialUser.email,
				phone: mockSocialUser.phone,
				role: "user",
				createdAt: mockSocialUser.createdAt
			}));
			window.location.href = "/dashboard";
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[140px] pointer-events-none" }),
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
				className: "max-w-md w-full bg-card border border-gold/15 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									letterSpacing: "0.15em",
									opacity: 0
								},
								animate: {
									letterSpacing: "0.28em",
									opacity: 1
								},
								transition: { duration: 1 },
								className: "eyebrow inline-block mb-2",
								children: "Touch by Bel'voma"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-semibold tracking-tight text-foreground",
								children: "Welcome Back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-light text-muted-foreground max-w-xs mx-auto",
								children: "Sign in to continue exploring timeless jewelry collections crafted for elegance and confidence."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						className: "absolute inset-0 bg-card rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center",
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "h-16 w-16 text-gold mb-4",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold text-foreground",
								children: "Welcome Back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 max-w-xs",
								children: "Your luxury gallery is unlocked. Let us guide you back to elegance..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-24 h-[1.5px] bg-border mt-6 overflow-hidden relative",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -10
						},
						className: "mb-6 p-4 rounded-xl bg-destructive/5 border border-destructive/10 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-light text-destructive/95 leading-relaxed",
							children: errorMsg
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleLogin,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative group",
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
								className: "relative group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "password",
										type: showPassword ? "text" : "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: " ",
										className: "block w-full px-4 pt-6 pb-2 pr-12 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "password",
										className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword(!showPassword),
										className: "absolute right-4 top-4 text-muted-foreground hover:text-gold transition-colors focus:outline-none",
										"aria-label": showPassword ? "Hide password" : "Show password",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: rememberMe,
										onChange: (e) => setRememberMe(e.target.checked),
										className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground group-hover:text-foreground transition-colors font-light",
										children: "Remember Me"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/forgot-password",
									className: "text-gold hover:text-gold-light transition-colors font-medium tracking-[0.05em]",
									children: "Forgot Password?"
								})]
							}),
							captchaRequired && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									height: 0
								},
								animate: {
									opacity: 1,
									height: "auto"
								},
								className: "p-4 rounded-xl border border-gold/20 bg-gold/5 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), " Golden Verification"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground uppercase tracking-widest",
										children: isCaptchaVerified ? "Verified" : "Slide to Unlock"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-10 bg-card border border-border rounded-lg flex items-center px-1 overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: "0",
											max: "100",
											value: sliderVal,
											disabled: isCaptchaVerified,
											onChange: handleSliderChange,
											className: `w-full h-full opacity-0 absolute inset-0 cursor-pointer z-10 ${isCaptchaVerified ? "pointer-events-none" : ""}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											animate: { x: `${sliderVal * 3.2}%` },
											className: `h-8 w-8 rounded-md flex items-center justify-center transition-colors shadow-soft ${isCaptchaVerified ? "bg-gold text-white" : "bg-gradient-to-br from-gold to-gold-light text-white"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 transition-transform ${isCaptchaVerified ? "rotate-90" : ""}` })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] font-light mx-auto select-none pointer-events-none transition-opacity ${sliderVal > 15 ? "opacity-20" : "opacity-70"}`,
											children: isCaptchaVerified ? "Identity Verified ✨" : "Slide Gold Bar to Right"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isLoading,
								className: "w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft overflow-hidden group focus:outline-none flex items-center justify-center gap-2",
								children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
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
									}), "Verifying Credentials..."]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"Sign In",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
								] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative my-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full border-t border-border" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex justify-center text-xs uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-card px-3 text-[10px] tracking-widest text-muted-foreground font-light",
								children: "Or Continue With"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleSocialLogin("Google"),
							className: "flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:border-gold/30 hover:bg-accent/10 transition-all font-sans text-xs text-foreground bg-transparent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "h-4 w-4 text-muted-foreground" }), " Google"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleSocialLogin("Apple"),
							className: "flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:border-gold/30 hover:bg-accent/10 transition-all font-sans text-xs text-foreground bg-transparent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "h-4 w-4 text-muted-foreground" }), " Apple"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 text-center text-xs font-light text-muted-foreground",
						children: [
							"Don't have an account?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								className: "text-gold hover:text-gold-light transition-colors font-medium tracking-[0.05em]",
								children: "Join the inner circle"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { LoginComponent as component };
