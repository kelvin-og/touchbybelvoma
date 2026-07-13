import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { type User } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ShieldAlert,
  Key,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset Password | Touch by Bel'voma" },
      {
        name: "description",
        content: "Recover your Touch by Bel'voma account password securely.",
      },
    ],
  }),
  component: ForgotPasswordComponent,
});

function ForgotPasswordComponent() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [pwdScore, setPwdScore] = useState(0);
  const [pwdLabel, setPwdLabel] = useState("");

  useEffect(() => {
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

  const handleSendResetLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    // Simulate checking email database
    setTimeout(() => {
      setIsLoading(false);
      const dbString = localStorage.getItem("naa-users-db");
      const usersDb = dbString ? JSON.parse(dbString) : [];
      const userExists =
        usersDb.some(
          (u: User) => u.email.toLowerCase() === email.toLowerCase(),
        ) || email.toLowerCase() === "luxury@belvoma.com";

      if (!userExists) {
        setErrorMsg("This email address is not registered in our records.");
        return;
      }

      setStep(2);
    }, 1000);
  };

  const handleConfirmReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    if (pwdScore < 2) {
      setErrorMsg(
        "Password is too weak. Please add uppercase letters, numbers, or symbols.",
      );
      return;
    }

    setIsLoading(true);

    // Simulate password update in db
    setTimeout(() => {
      setIsLoading(false);
      const dbString = localStorage.getItem("naa-users-db");
      if (dbString) {
        const usersDb = JSON.parse(dbString);
        const index = usersDb.findIndex(
          (u: User) => u.email.toLowerCase() === email.toLowerCase(),
        );
        if (index !== -1) {
          // simple simulation update
          usersDb[index].passwordHash =
            "hash_" + Math.abs(password.length).toString(16); // mock update
          localStorage.setItem("naa-users-db", JSON.stringify(usersDb));
        }
      }
      setStep(4);
    }, 1200);
  };

  const getStrengthBarColor = () => {
    switch (pwdScore) {
      case 1:
        return "bg-rose-500/60";
      case 2:
        return "bg-amber-500/60";
      case 3:
        return "bg-yellow-600/70";
      case 4:
        return "bg-gold";
      default:
        return "bg-border";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 blur-[145px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full bg-card border border-gold/15 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10"
      >
        {/* Step tracker header */}
        <div className="flex justify-between items-center mb-6 px-1">
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-light">
            Password Recovery
          </span>
          <span className="text-[10px] font-semibold text-gold tracking-widest">
            STEP {step} OF 4
          </span>
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-5 p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 flex items-start gap-2.5">
            <ShieldAlert className="h-4.5 w-4.5 text-destructive shrink-0 mt-0.5" />
            <span className="text-xs font-light text-destructive/90">
              {errorMsg}
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Enter email */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Reset Password
              </h2>
              <p className="text-xs font-light text-muted-foreground mt-2 mb-6">
                Enter your registered email address below, and we will transmit
                a secure password recovery token to your inbox.
              </p>

              <form onSubmit={handleSendResetLink} className="space-y-6">
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                  >
                    Email Address
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2 focus:outline-none"
                >
                  {isLoading ? "Transmitting..." : "Send Reset Token"}
                  {!isLoading && <ArrowRight className="h-3.5 w-3.5" />}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
                </Link>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Link Sent simulation */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Secure Token Sent
              </h2>
              <p className="text-xs font-light text-muted-foreground mt-3 max-w-sm mx-auto leading-relaxed">
                An email containing a secure link has been sent to{" "}
                <span className="font-medium text-foreground">{email}</span>.
              </p>

              <div className="my-6 p-4 rounded-xl border border-gold/10 bg-gold/5 text-left text-xs font-light space-y-2">
                <p className="text-foreground font-semibold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <CheckCircle className="h-3.5 w-3.5 text-gold" /> Simulation
                  Mode
                </p>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  In a production environment, this link will direct the user
                  back to the app with a signed JWT cryptotoken. Click below to
                  simulate opening the email token:
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2"
              >
                Proceed to Reset Password <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-4 text-xs text-muted-foreground hover:text-gold transition-colors font-light"
              >
                Didn't receive email? Try again
              </button>
            </motion.div>
          )}

          {/* STEP 3: Enter new password */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Choose New Password
              </h2>
              <p className="text-xs font-light text-muted-foreground mt-2 mb-6">
                Create a strong password that you do not reuse elsewhere.
              </p>

              <form onSubmit={handleConfirmReset} className="space-y-5">
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                    className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                  >
                    New Password
                  </label>
                </div>

                {password && (
                  <div className="space-y-1.5 px-1">
                    <div className="flex justify-between items-center text-[9px] uppercase tracking-wider">
                      <span className="text-muted-foreground font-light">
                        Security Rating:
                      </span>
                      <span className="font-semibold text-gold">
                        {pwdLabel}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-border rounded-full overflow-hidden flex gap-0.5">
                      {[1, 2, 3, 4].map((step) => (
                        <div
                          key={step}
                          className={`h-full flex-1 transition-colors duration-300 ${
                            step <= pwdScore
                              ? getStrengthBarColor()
                              : "bg-border/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder=" "
                    className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                  >
                    Confirm Password
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2"
                >
                  {isLoading ? "Saving Credentials..." : "Update Password"}
                  {!isLoading && <Key className="h-3.5 w-3.5" />}
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 4: Success confirmation */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Password Restored
              </h2>
              <p className="text-xs font-light text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">
                Your new password has been securely saved in the system
                databases.
              </p>

              <div className="mt-8">
                <Link
                  to="/login"
                  className="w-full inline-flex py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft items-center justify-center gap-2"
                >
                  Sign In <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
