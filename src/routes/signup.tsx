import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useStore, User } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Chrome,
  Apple,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Join Touch by Bel'voma | Luxury Jewelry Registration" },
      {
        name: "description",
        content:
          "Create an account at Touch by Bel'voma and unlock exclusive offers, orders, and premium jewelry collections in Ghana.",
      },
    ],
  }),
  component: SignupComponent,
});

function SignupComponent() {
  const navigate = useNavigate();
  const { signup } = useStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+233");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [subscribePromo, setSubscribePromo] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Password strength checker states
  const [pwdScore, setPwdScore] = useState(0);
  const [pwdLabel, setPwdLabel] = useState("");

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const checkPasswordStrength = (pwd: string) => {
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

  const validateGhanaPhone = (num: string): boolean => {
    // Standard format is +233 followed by 9 digits
    // Network operator prefix rules after +233:
    // MTN: 24, 54, 55, 59, 53
    // Vodafone/Telecel: 20, 50
    // AirtelTigo: 26, 56, 27, 57
    const cleanNum = num.replace(/\s+/g, "");
    if (!cleanNum.startsWith("+233")) return false;
    const nationalNumber = cleanNum.slice(4);
    if (nationalNumber.length !== 9) return false;

    const prefix2 = nationalNumber.slice(0, 2);
    const validPrefixes = [
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
      "57",
    ];
    return validPrefixes.includes(prefix2);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validate phone
    if (!validateGhanaPhone(phone)) {
      setErrorMsg(
        "Please enter a valid Ghana phone number starting with +233 (e.g. +233 24 123 4567). Supported carriers: MTN, Telecel, AirtelTigo.",
      );
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please verify.");
      return;
    }

    // Enforce weak password warning
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
        password,
      });

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate({ to: "/dashboard" });
        }, 1500);
      } else {
        setErrorMsg(result.error || "Failed to create your account.");
      }
    } catch (err) {
      setErrorMsg("A server error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (platform: "Google" | "Apple") => {
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
        createdAt: new Date().toISOString(),
      };

      if (!usersDb.some((u: User) => u.email === newUser.email)) {
        usersDb.push(newUser);
        localStorage.setItem("naa-users-db", JSON.stringify(usersDb));
      }

      localStorage.setItem("naa-user", JSON.stringify(newUser));

      window.location.href = "/dashboard";
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
      {/* Background design */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full bg-card border border-gold/15 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10"
      >
        {/* Brand header */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ letterSpacing: "0.15em", opacity: 0 }}
            animate={{ letterSpacing: "0.28em", opacity: 1 }}
            transition={{ duration: 1 }}
            className="eyebrow inline-block mb-2"
          >
            Touch by Bel'voma
          </motion.p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Create Account
          </h2>
          <p className="mt-2 text-xs font-light text-muted-foreground max-w-xs mx-auto">
            Join our community and enjoy exclusive access to new arrivals,
            special offers, and personalized shopping in Ghana.
          </p>
        </div>

        {/* Success Overlay */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-card rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle2
                  className="h-16 w-16 text-gold mb-4"
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Welcome to the Inner Circle
              </h3>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                Your luxury credentials have been established. Creating your
                workspace...
              </p>
              <div className="w-24 h-[1.5px] bg-border mt-6 overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bottom-0 w-12 bg-gold"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 rounded-xl bg-destructive/5 border border-destructive/10 flex items-start gap-3"
            >
              <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <span className="text-xs font-light text-destructive/95 leading-relaxed">
                {errorMsg}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sign Up Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
              className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
            />
            <label
              htmlFor="name"
              className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
            >
              Full Name
            </label>
          </div>

          {/* Email Address */}
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

          {/* Phone Number (Ghana format) */}
          <div className="relative">
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder=" "
              className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
            />
            <label
              htmlFor="phone"
              className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
            >
              Ghana Phone (+233)
            </label>
            <span className="absolute right-4 top-5 text-[10px] text-muted-foreground/75 tracking-wider font-light pointer-events-none">
              MTN / Telecel / AirtelTigo
            </span>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="block w-full px-4 pt-6 pb-2 pr-12 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
            />
            <label
              htmlFor="password"
              className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-gold transition-colors focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {password && (
            <div className="space-y-1.5 px-1">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-wider">
                <span className="text-muted-foreground font-light flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-gold" /> Security
                  Strength:
                </span>
                <span
                  className={`font-semibold ${
                    pwdScore >= 3 ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {pwdLabel}
                </span>
              </div>
              <div className="h-1 w-full bg-border rounded-full overflow-hidden flex gap-0.5">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-full flex-1 transition-colors duration-300 ${
                      step <= pwdScore ? getStrengthBarColor() : "bg-border/60"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[9px] text-muted-foreground font-light leading-normal">
                Requires at least 8 characters, numbers, uppercase/lowercase
                letters, and special symbols.
              </p>
            </div>
          )}

          {/* Confirm Password */}
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder=" "
              className="block w-full px-4 pt-6 pb-2 pr-12 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
            >
              Confirm Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-gold transition-colors focus:outline-none"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-2 text-xs font-light">
            <label className="flex items-start gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={acceptTerms}
                required
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
              />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                I accept the{" "}
                <a
                  href="#terms"
                  className="text-gold underline hover:text-gold-light"
                >
                  Terms & Conditions
                </a>{" "}
                and Privacy Policy.
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={subscribePromo}
                onChange={(e) => setSubscribePromo(e.target.checked)}
                className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
              />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                Subscribe to exclusive promotions, new arrivals, and
                members-only pricing alerts.
              </span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all shadow-soft overflow-hidden group focus:outline-none flex items-center justify-center gap-2 mt-4"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Creating Account...
              </span>
            ) : (
              <>
                Register Account{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        {/* Separator */}
        <div className="relative my-6">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-3 text-[10px] tracking-widest text-muted-foreground font-light">
              Or Sign Up With
            </span>
          </div>
        </div>

        {/* Social Authentication Mocks */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleSocialSignup("Google")}
            className="flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:border-gold/30 hover:bg-accent/10 transition-all font-sans text-xs text-foreground bg-transparent"
          >
            <Chrome className="h-4 w-4 text-muted-foreground" /> Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialSignup("Apple")}
            className="flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:border-gold/30 hover:bg-accent/10 transition-all font-sans text-xs text-foreground bg-transparent"
          >
            <Apple className="h-4 w-4 text-muted-foreground" /> Apple
          </button>
        </div>

        {/* Login Footer */}
        <div className="mt-8 text-center text-xs font-light text-muted-foreground">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-gold hover:text-gold-light transition-colors font-medium tracking-[0.05em]"
          >
            Welcome Back
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
