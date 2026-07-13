import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowRight, V as Mail, jt as ArrowLeft, q as Key, vt as CircleCheckBig, w as ShieldAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-Wn_joUuD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ForgotPasswordComponent() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [pwdScore, setPwdScore] = (0, import_react.useState)(0);
	const [pwdLabel, setPwdLabel] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (password) {
			let score = 0;
			if (password.length >= 8) score++;
			if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
			if (/[0-9]/.test(password)) score++;
			if (/[^A-Za-z0-9]/.test(password)) score++;
			setPwdScore(score);
			switch (score) {
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
					setPwdLabel("Strong");
					break;
			}
		} else {
			setPwdScore(0);
			setPwdLabel("");
		}
	}, [password]);
	const handleSendResetLink = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			const dbString = localStorage.getItem("naa-users-db");
			if (!((dbString ? JSON.parse(dbString) : []).some((u) => u.email.toLowerCase() === email.toLowerCase()) || email.toLowerCase() === "luxury@belvoma.com")) {
				setErrorMsg("This email address is not registered in our records.");
				return;
			}
			setStep(2);
		}, 1e3);
	};
	const handleConfirmReset = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		if (password !== confirmPassword) {
			setErrorMsg("Passwords do not match.");
			return;
		}
		if (pwdScore < 2) {
			setErrorMsg("Password is too weak. Please add uppercase letters, numbers, or symbols.");
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			const dbString = localStorage.getItem("naa-users-db");
			if (dbString) {
				const usersDb = JSON.parse(dbString);
				const index = usersDb.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
				if (index !== -1) {
					usersDb[index].passwordHash = "hash_" + Math.abs(password.length).toString(16);
					localStorage.setItem("naa-users-db", JSON.stringify(usersDb));
				}
			}
			setStep(4);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 blur-[145px] pointer-events-none" }),
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
						className: "flex justify-between items-center mb-6 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] uppercase tracking-widest text-muted-foreground font-light",
							children: "Password Recovery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-semibold text-gold tracking-widest",
							children: [
								"STEP ",
								step,
								" OF 4"
							]
						})]
					}),
					errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4.5 w-4.5 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-light text-destructive/90",
							children: errorMsg
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
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
								transition: { duration: .3 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-semibold text-foreground",
										children: "Reset Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-light text-muted-foreground mt-2 mb-6",
										children: "Enter your registered email address below, and we will transmit a secure password recovery token to your inbox."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleSendResetLink,
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											disabled: isLoading,
											className: "w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2 focus:outline-none",
											children: [isLoading ? "Transmitting..." : "Send Reset Token", !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/login",
											className: "text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Sign In"]
										})
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
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold text-foreground",
										children: "Secure Token Sent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-light text-muted-foreground mt-3 max-w-sm mx-auto leading-relaxed",
										children: [
											"An email containing a secure link has been sent to",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: email
											}),
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-6 p-4 rounded-xl border border-gold/10 bg-gold/5 text-left text-xs font-light space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-foreground font-semibold flex items-center gap-1.5 text-[11px] uppercase tracking-wider",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3.5 w-3.5 text-gold" }), " Simulation Mode"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[11px] leading-relaxed",
											children: "In a production environment, this link will direct the user back to the app with a signed JWT cryptotoken. Click below to simulate opening the email token:"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(3),
										className: "w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2",
										children: ["Proceed to Reset Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStep(1),
										className: "mt-4 text-xs text-muted-foreground hover:text-gold transition-colors font-light",
										children: "Didn't receive email? Try again"
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
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-semibold text-foreground",
										children: "Choose New Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-light text-muted-foreground mt-2 mb-6",
										children: "Create a strong password that you do not reuse elsewhere."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleConfirmReset,
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "password",
													type: "password",
													required: true,
													value: password,
													onChange: (e) => setPassword(e.target.value),
													placeholder: " ",
													className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "password",
													className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
													children: "New Password"
												})]
											}),
											password && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5 px-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between items-center text-[9px] uppercase tracking-wider",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground font-light",
														children: "Security Rating:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-gold",
														children: pwdLabel
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-1 w-full bg-border rounded-full overflow-hidden flex gap-0.5",
													children: [
														1,
														2,
														3,
														4
													].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full flex-1 transition-colors duration-300 ${step <= pwdScore ? getStrengthBarColor() : "bg-border/60"}` }, step))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "confirmPassword",
													type: "password",
													required: true,
													value: confirmPassword,
													onChange: (e) => setConfirmPassword(e.target.value),
													placeholder: " ",
													className: "block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "confirmPassword",
													className: "absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]",
													children: "Confirm Password"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												disabled: isLoading,
												className: "w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2",
												children: [isLoading ? "Saving Credentials..." : "Update Password", !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "h-3.5 w-3.5" })]
											})
										]
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
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold text-foreground",
										children: "Password Restored"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-light text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed",
										children: "Your new password has been securely saved in the system databases."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/login",
											className: "w-full inline-flex py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft items-center justify-center gap-2",
											children: ["Sign In ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})
									})
								]
							}, "step4")
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ForgotPasswordComponent as component };
