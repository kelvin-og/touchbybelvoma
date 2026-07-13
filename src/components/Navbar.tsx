import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { products, formatPrice } from "@/data/products";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop", search: {} as Record<string, string> },
  { to: "/shop", label: "Earrings", search: { category: "earrings" } },
  { to: "/shop", label: "Necklaces", search: { category: "necklaces" } },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount, wishlist, user } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const results =
    query.trim().length > 1
      ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
      : [];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen || searchOpen
          ? "bg-background/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-lux grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <button
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 4).map((l) => (
            <Link
              key={l.label}
              to={l.to}
              search={l.search}
              className="text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/" className="min-w-0 justify-self-center" aria-label="Touch by Bel'voma — Home">
          <img
            src={logo}
            alt="Touch by Bel'voma"
            className="mx-auto h-11 w-auto sm:h-14"
            width={500}
            height={275}
            fetchPriority="high"
          />
        </Link>

        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <button
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent"
            aria-label="Search"
            onClick={() => setSearchOpen((o) => !o)}
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <Link
            to="/wishlist"
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent"
            aria-label="Wishlist"
          >
            <Heart className="h-[18px] w-[18px]" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.6rem] font-semibold text-gold-foreground">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent"
            aria-label="Cart"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.6rem] font-semibold text-gold-foreground">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to={user ? (user.role === "admin" ? "/admin/dashboard" : "/dashboard") : "/login"}
            className="hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent sm:grid"
            aria-label="Account"
          >
            {user ? (
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gold bg-gold/10 text-xs font-semibold text-gold uppercase">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            ) : (
              <User className="h-[18px] w-[18px]" />
            )}
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border"
          >
            <div className="container-lux py-4">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewelry…"
                className="w-full rounded-full border border-input bg-card px-5 py-3 text-sm outline-none focus:border-gold"
                aria-label="Search products"
              />
              {results.length > 0 && (
                <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        to="/product/$productId"
                        params={{ productId: p.id }}
                        onClick={() => {
                          setSearchOpen(false);
                          setQuery("");
                        }}
                        className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-accent"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="h-12 w-12 rounded-lg object-cover"
                          loading="lazy"
                          width={48}
                          height={48}
                        />
                        <span className="min-w-0 flex-1 truncate text-sm font-medium">
                          {p.name}
                        </span>
                        <span className="text-sm text-gold">{formatPrice(p.price)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <ul className="container-lux flex flex-col py-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    search={l.search}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium tracking-[0.15em] uppercase"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-border mt-2 pt-2">
                <Link
                  to={user ? (user.role === "admin" ? "/admin/dashboard" : "/dashboard") : "/login"}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-semibold tracking-[0.15em] text-gold uppercase"
                >
                  {user ? `Dashboard (${user.name})` : "Sign In / Join"}
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
