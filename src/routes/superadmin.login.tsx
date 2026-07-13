import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import {
  KeyRound,
  Eye,
  EyeOff,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/superadmin/login")({
  head: () => ({
    meta: [
      { title: "Super Admin Gateway | Touch by Bel'voma" },
      {
        name: "description",
        content:
          "Super Administrator portal for Touch by Bel'voma security clearance.",
      },
    ],
  }),
  component: SuperAdminLoginComponent,
});

function SuperAdminLoginComponent() {
  const navigate = useNavigate();
  const { login } = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSuperLogin = async (e: React.FormEvent) => {
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
      } else {
        setErrorMsg(
          result.error || "Access Denied: Invalid super administrator keys.",
        );
      }
    } catch (err) {
      setErrorMsg("Security handshake failed. Connection timed out.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      {/* Deep purple system lights */}
      <div className="absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none" />

      <div className="absolute top-8 left-8">
        <Link
          to="/"
          className="text-[10px] tracking-[0.3em] font-semibold text-purple-400 uppercase hover:text-white transition-colors"
        >
          Touch by Bel'voma · System Core
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full bg-neutral-950/60 backdrop-blur-md border border-purple-800/30 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10"
      >
        {/* Success overlay */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral-950 rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle
                  className="h-16 w-16 text-purple-400 mb-4"
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-purple-300">
                Terminal Unlocked
              </h3>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
                Super administrator session initialized. Loading root
                settings...
              </p>
              <div className="w-24 h-[1.5px] bg-purple-900/40 mt-6 overflow-hidden relative">
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

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 rounded-full border border-purple-800/40 flex items-center justify-center text-purple-400 mb-4 bg-purple-950/30">
            <KeyRound className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-purple-300 tracking-widest uppercase">
            Root Super Admin
          </h2>
          <p className="mt-2 text-xs font-light text-muted-foreground max-w-xs mx-auto">
            Secure configuration panel. Input your cryptographic credentials.
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <span className="text-xs font-light text-red-200/90 leading-relaxed">
              {errorMsg}
            </span>
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSuperLogin} className="space-y-6">
          <div className="relative">
            <input
              id="super-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="block w-full px-4 pt-6 pb-2 text-sm text-white bg-transparent border border-purple-800/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer transition-colors"
            />
            <label
              htmlFor="super-email"
              className="absolute text-xs text-purple-400/60 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-purple-400 uppercase tracking-[0.12em]"
            >
              Root Username
            </label>
          </div>

          <div className="relative">
            <input
              id="super-password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="block w-full px-4 pt-6 pb-2 pr-12 text-sm text-white bg-transparent border border-purple-800/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer transition-colors"
            />
            <label
              htmlFor="super-password"
              className="absolute text-xs text-purple-400/60 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-purple-400 uppercase tracking-[0.12em]"
            >
              Access Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-purple-400/40 hover:text-purple-400 transition-colors focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Secure login trigger */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-black uppercase bg-gradient-to-r from-purple-500 to-purple-300 hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2 text-black">
                <svg
                  className="animate-spin h-4 w-4 text-black"
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
                </svg>{" "}
                Verifying...
              </span>
            ) : (
              <>
                Unlock Terminal <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-[10px] font-light text-muted-foreground/50 border-t border-purple-900/10 pt-4 leading-normal">
          Authorized console access only. Logins are tied to root certificate
          hashes.
        </div>
      </motion.div>
    </div>
  );
}
