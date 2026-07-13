import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowRight, C as ShieldCheck, Nt as Apple, _t as CircleCheck, bt as Chromium, ct as EyeOff, st as Eye, yt as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as useStore } from "./store-N7ANSPqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-AOx8k7RS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupComponent() {
	const navigate = useNavigate();
	const { signup } = useStore();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("+233");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [showConfirmPassword, setShowConfirmPassword] = (0, import_react.useState)(false);
	const [acceptTerms, setAcceptTerms] = (0, import_react.useState)(false);
	const [subscribePromo, setSubscribePromo] = (0, import_react.useState)(true);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [pwdScore, setPwdScore] = (0, import_react.useState)(0);
	const [pwdLabel, setPwdLabel] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		checkPasswordStrength(password);
	}, [password]);
	const checkPasswordStrength = (pwd) => {
		if (!pwd) {
			setPwdScore(0);
			setPwdLabel("");
			return;
		}
		let score = 0;
		if (pwd.length >= 8) score++;
		if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
		if (/[0-9]/.test(pwd)) score++;
		if (/[^A-Za-z0-9]/.test(pwd)) score++;
		setPwdScore(score);
		switch (score) {
			case 0:
			case 1:
				setPwdLabel("Weak");
				break;
			case 2:
				setPwdLabel("Fair");
				break;
			case 3:
				setPwdLabel("Good");
				break;
			case 4:
				setPwdLabel("Luxurious");
				break;
		}
	};
	const validateGhanaPhone = (num) => {
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
	const handleSignup = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		if (!validateGhanaPhone(phone)) {
			setErrorMsg("Please enter a valid Ghana phone number starting with +233 (e.g. +233 24 123 4567). Supported carriers: MTN, Telecel, AirtelTigo.");
			return;
		}
		if (password !== confirmPassword) {
			setErrorMsg("Passwords do not match. Please verify.");
			return;
		}
		if (pwdScore < 2) {
			setErrorMsg("Please choose a stronger password for security.");
			return;
		}
		if (!acceptTerms) {
			setErrorMsg("You must accept the Terms and Conditions to proceed.");
			return;
		}
		setIsLoading(true);
		try {
			const result = await signup({
				name,
				email,
				phone: phone.replace(/\s+/g, ""),
				password
			});
			if (result.success) {
				setIsSuccess(true);
				setTimeout(() => {
					navigate({ to: "/dashboard" });
				}, 1500);
			} else setErrorMsg(result.error || "Failed to create your account.");
		} catch (err) {
			setErrorMsg("A server error occurred. Please try again later.");
		} finally {
			setIsLoading(false);
		}
	};
	const handleSocialSignup = (platform) => {
		setIsLoading(true);
		setErrorMsg("");
		setTimeout(() => {
			setIsLoading(false);
			setIsSuccess(true);
			const dbString = localStorage.getItem("naa-users-db");
			const usersDb = dbString ? JSON.parse(dbString) : [];
			const newUser = {
				name: `Guest ${platform} User`,
				email: `${platform.toLowerCase()}_client@belvoma.com`,
				phone: "+233240000000",
				role: "user",
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			if (!usersDb.some((u) => u.email === newUser.email)) {
				usersDb.push(newUser);
				localStorage.setItem("naa-users-db", JSON.stringify(usersDb));
			}
			localStorage.setItem("naa-user", JSON.stringify(newUser));
			window.location.href = "/dashboard";
		}, 1200);
	};
	const getStrengthBarColor = () => {
		switch (pwdScore) {
			case 1: return "bg-rose-500/60";
			case 2: return "bg-amber-500/60";
			case 3: return "bg-yellow-600/70";
			case 4: return "bg-gold";
			default: return "bg-border";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 blur-[140px] pointer-events-none" }),
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
								className: "text-2xl font-semibold tracking-tight text-foreground",
								children: "Create Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-light text-muted-foreground max-w-xs mx-auto",
								children: "Join our community and enjoy exclusive access to new arrivals, special offers, and personalized shopping in Ghana."
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
								children: "Welcome to the Inner Circle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 max-w-xs",
								children: "Your luxury credentials have been established. Creating your workspace..."
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
						onSubmit: handleSignup,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									type: "text",
									required: true,
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: " ",
									className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "name",
									className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
									children: "Full Name"
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
										children: "Ghana Phone (+233)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-4 top-5 text-[10px] text-muted-foreground/75 tracking-wider font-light pointer-events-none",
										children: "MTN / Telecel / AirtelTigo"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
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
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							}),
							password && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 px-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center text-[10px] uppercase tracking-wider",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground font-light flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3 text-gold" }), " Security Strength:"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-semibold ${pwdScore >= 3 ? "text-gold" : "text-muted-foreground"}`,
											children: pwdLabel
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1 w-full bg-border rounded-full overflow-hidden flex gap-0.5",
										children: [
											1,
											2,
											3,
											4
										].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full flex-1 transition-colors duration-300 ${step <= pwdScore ? getStrengthBarColor() : "bg-border/60"}` }, step))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] text-muted-foreground font-light leading-normal",
										children: "Requires at least 8 characters, numbers, uppercase/lowercase letters, and special symbols."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "confirmPassword",
										type: showConfirmPassword ? "text" : "password",
										required: true,
										value: confirmPassword,
										onChange: (e) => setConfirmPassword(e.target.value),
										placeholder: " ",
										className: "block w-full px-4 pt-6 pb-2 pr-12 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "confirmPassword",
										className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
										children: "Confirm Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowConfirmPassword(!showConfirmPassword),
										className: "absolute right-4 top-4 text-muted-foreground hover:text-gold transition-colors focus:outline-none",
										children: showConfirmPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-2 text-xs font-light",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-2.5 cursor-pointer group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: acceptTerms,
										required: true,
										onChange: (e) => setAcceptTerms(e.target.checked),
										className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed",
										children: [
											"I accept the",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#terms",
												className: "text-gold underline hover:text-gold-light",
												children: "Terms & Conditions"
											}),
											" ",
											"and Privacy Policy."
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-2.5 cursor-pointer group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: subscribePromo,
										onChange: (e) => setSubscribePromo(e.target.checked),
										className: "w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed",
										children: "Subscribe to exclusive promotions, new arrivals, and members-only pricing alerts."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isLoading,
								className: "w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft overflow-hidden group focus:outline-none flex items-center justify-center gap-2 mt-4",
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
									}), "Creating Account..."]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"Register Account",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
								] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative my-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full border-t border-border" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex justify-center text-xs uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-card px-3 text-[10px] tracking-widest text-muted-foreground font-light",
								children: "Or Sign Up With"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleSocialSignup("Google"),
							className: "flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:border-gold/30 hover:bg-accent/10 transition-all font-sans text-xs text-foreground bg-transparent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "h-4 w-4 text-muted-foreground" }), " Google"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleSocialSignup("Apple"),
							className: "flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:border-gold/30 hover:bg-accent/10 transition-all font-sans text-xs text-foreground bg-transparent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "h-4 w-4 text-muted-foreground" }), " Apple"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 text-center text-xs font-light text-muted-foreground",
						children: [
							"Already a member?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-gold hover:text-gold-light transition-colors font-medium tracking-[0.05em]",
								children: "Welcome Back"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { SignupComponent as component };
