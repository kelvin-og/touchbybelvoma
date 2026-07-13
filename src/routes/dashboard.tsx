import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useStore } from "@/lib/store";
import { products, formatPrice } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  History,
  Settings,
  LogOut,
  Sparkles,
  Check,
  Trash2,
  ArrowRight,
  ShieldAlert,
  Award,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Account | Touch by Bel'voma" },
      {
        name: "description",
        content:
          "Manage your luxury profile, track order history, and edit delivery details at Touch by Bel'voma.",
      },
    ],
  }),
  component: DashboardComponent,
});

function DashboardComponent() {
  const navigate = useNavigate();
  const {
    user,
    logout,
    wishlist,
    recentlyViewed,
    addresses,
    orders,
    addAddress,
    deleteAddress,
    toggleWishlist,
    addToCart,
  } = useStore();

  const [activeTab, setActiveTab] = useState<
    "welcome" | "orders" | "wishlist" | "addresses" | "recent" | "settings"
  >("welcome");

  // Ghana address states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gpsAddress, setGpsAddress] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("Greater Accra");
  const [addrError, setAddrError] = useState("");
  const [addrSuccess, setAddrSuccess] = useState(false);

  // Redirect if logged out
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        navigate({ to: "/login" });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="h-10 w-10 border-t-2 border-gold rounded-full"
        />
        <p className="text-xs font-light text-muted-foreground mt-4 tracking-widest uppercase">
          Verifying secure luxury session...
        </p>
      </div>
    );
  }

  // Greeting based on time of day
  const getGreeting = () => {
    const hr = new Date().getHours();
    if (hr < 12) return "Good morning";
    if (hr < 17) return "Good afternoon";
    return "Good evening";
  };

  // Validate Ghana Post GPS (e.g. GA-107-9092)
  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setAddrError("");
    setAddrSuccess(false);

    // Ghana digital address regex (Format: two letters - 3 or 4 digits - 4 digits)
    const gpsRegex = /^[A-Z]{2}-\d{3,4}-\d{4}$/;
    if (!gpsRegex.test(gpsAddress.toUpperCase().trim())) {
      setAddrError(
        "Invalid Ghana Post GPS Address. Format must be XX-XXX-XXXX (e.g. GA-182-9902 or AK-0329-8120).",
      );
      return;
    }

    if (phone.trim().length < 9) {
      setAddrError("Please enter a valid phone number.");
      return;
    }

    addAddress({
      fullName,
      phone,
      gpsAddress: gpsAddress.toUpperCase().trim(),
      streetAddress,
      city,
      region,
    });

    setAddrSuccess(true);
    setFullName("");
    setPhone("");
    setGpsAddress("");
    setStreetAddress("");
    setCity("");

    setTimeout(() => setAddrSuccess(false), 3000);
  };

  // Stagger items transition helper
  const tabContentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const ghanaRegions = [
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
    "Western North",
  ];

  return (
    <div className="min-h-screen bg-background py-32">
      <div className="container-lux">
        {/* Header section */}
        <div className="border-b border-border pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="eyebrow">{getGreeting()},</p>
            <h1 className="text-4xl font-semibold text-foreground tracking-tight mt-1">
              {user.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="text-[10px] tracking-widest bg-gold/10 text-gold font-medium px-3 py-1 rounded-full uppercase flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Gold Tier Member
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground font-light uppercase flex items-center gap-1">
                <Award className="h-3.5 w-3.5" /> 350 Bel'voma Points
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate({ to: "/" });
            }}
            className="flex items-center gap-2 text-xs font-light text-muted-foreground hover:text-gold transition-colors py-2 px-4 rounded-full border border-border hover:border-gold/30 bg-card"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>

        {/* Dashboard Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
          {/* Sidebar Menu */}
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border min-w-0 shrink-0">
            <button
              onClick={() => setActiveTab("welcome")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "welcome"
                  ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="h-4 w-4" /> Account Overview
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "orders"
                  ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShoppingBag className="h-4 w-4" /> Order History
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "wishlist"
                  ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Heart className="h-4 w-4" /> Wishlist ({wishlist.length})
            </button>

            <button
              onClick={() => setActiveTab("addresses")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "addresses"
                  ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapPin className="h-4 w-4" /> Addresses ({addresses.length})
            </button>

            <button
              onClick={() => setActiveTab("recent")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "recent"
                  ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <History className="h-4 w-4" /> Recently Viewed
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "settings"
                  ? "bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Settings className="h-4 w-4" /> Settings
            </button>
          </nav>

          {/* Tab Content Display */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {/* Tab: Welcome */}
              {activeTab === "welcome" && (
                <motion.div
                  key="welcome"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-8"
                >
                  <div className="p-6 rounded-2xl bg-card border border-gold/15 shadow-soft flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        Welcome to your private lounge
                      </h2>
                      <p className="text-xs font-light text-muted-foreground mt-1 max-w-md">
                        As a valued member, enjoy complimentary shipping within
                        Accra and Kumasi, early access to new seasonal edits,
                        and 10% points accumulation.
                      </p>
                    </div>
                    <Link to="/shop" className="btn-gold shrink-0">
                      Explore Edits <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card border border-border rounded-xl">
                      <Clock className="h-5 w-5 text-gold mb-3" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        Recent Purchases
                      </p>
                      <h3 className="text-2xl font-semibold mt-1">
                        {orders.length} Orders
                      </h3>
                      <button
                        onClick={() => setActiveTab("orders")}
                        className="text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block"
                      >
                        View orders →
                      </button>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl">
                      <Heart className="h-5 w-5 text-gold mb-3" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        Saved Pieces
                      </p>
                      <h3 className="text-2xl font-semibold mt-1">
                        {wishlist.length} Items
                      </h3>
                      <button
                        onClick={() => setActiveTab("wishlist")}
                        className="text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block"
                      >
                        Manage list →
                      </button>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl">
                      <MapPin className="h-5 w-5 text-gold mb-3" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        Delivery Address
                      </p>
                      <h3 className="text-xl font-semibold mt-1 truncate">
                        {addresses[0]?.gpsAddress || "No address saved"}
                      </h3>
                      <button
                        onClick={() => setActiveTab("addresses")}
                        className="text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block"
                      >
                        Manage book →
                      </button>
                    </div>
                  </div>

                  {/* Loyalty banner */}
                  <div className="p-6 bg-charcoal text-primary-foreground rounded-2xl relative overflow-hidden">
                    <div className="absolute right-[-5%] top-[-20%] text-gold-light/10 pointer-events-none">
                      <Sparkles className="h-48 w-48" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[10px] text-gold-light tracking-[0.25em] uppercase font-semibold">
                        Special Offer
                      </p>
                      <h3 className="text-2xl font-semibold mt-2">
                        Unlock Your Welcome Gift
                      </h3>
                      <p className="text-xs text-primary-foreground/75 mt-2 max-w-lg leading-relaxed">
                        Spend your earned points on checkout or redeem them for
                        a free Touch by Bel'voma Velvet Jewelry Roll on orders
                        above GH₵ 1,000.
                      </p>
                      <div className="mt-5 flex gap-2">
                        <span className="text-[10px] border border-gold-light/30 px-3 py-1 rounded-full text-gold-light font-medium uppercase">
                          Code: TBBGIFT
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab: Orders */}
              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Purchase History
                  </h2>

                  {orders.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-border rounded-2xl">
                      <ShoppingBag className="h-10 w-10 text-muted-foreground/60 mx-auto mb-3" />
                      <h3 className="text-sm font-semibold">No orders yet</h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                        Your jewelry box is empty. Begin shopping to build your
                        timeless custom collection.
                      </p>
                      <Link to="/shop" className="btn-gold mt-6 inline-flex">
                        Shop Jewelry
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="border border-border bg-card rounded-xl p-6 shadow-soft"
                        >
                          <div className="flex flex-wrap justify-between items-start border-b border-border pb-4 mb-4 gap-4">
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                Order Reference
                              </p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <p className="text-sm font-semibold">
                                  {order.id}
                                </p>
                                <Link
                                  to="/track-order"
                                  search={{ orderId: order.id }}
                                  className="text-[9px] text-gold border border-gold/20 hover:border-gold px-2 py-0.5 rounded-md uppercase font-semibold transition-colors"
                                >
                                  Track
                                </Link>
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                Transaction Date
                              </p>
                              <p className="text-xs font-light mt-0.5">
                                {order.date}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                Payment Method
                              </p>
                              <p className="text-xs font-light mt-0.5">
                                {order.paymentMethod}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                Status
                              </p>
                              <span
                                className={`inline-block text-[10px] font-semibold uppercase tracking-widest mt-1 px-3 py-0.5 rounded-full ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gold/10 text-gold"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>

                          {/* Order items */}
                          <div className="space-y-4">
                            {order.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex gap-4 items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  {/* Just a mock container if images aren't fully resolved paths */}
                                  <div className="h-12 w-12 rounded-lg bg-accent overflow-hidden border border-border flex items-center justify-center shrink-0">
                                    <span className="text-[10px] text-muted-foreground uppercase">
                                      TBB
                                    </span>
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-medium text-foreground">
                                      {item.name}
                                    </h4>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">
                                      Quantity: {item.qty}
                                    </p>
                                  </div>
                                </div>
                                <span className="text-xs font-semibold text-gold">
                                  {formatPrice(item.price * item.qty)}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-border mt-4 pt-4 flex justify-between items-center text-xs">
                            <span className="text-muted-foreground font-light">
                              Delivery Digital Address
                            </span>
                            <span className="font-semibold text-foreground uppercase">
                              {order.shippingAddress.gpsAddress}
                            </span>
                          </div>

                          <div className="flex justify-between items-center border-t border-border mt-2 pt-2 text-sm">
                            <span className="font-semibold text-foreground">
                              Total Charged
                            </span>
                            <span className="font-semibold text-gold">
                              {formatPrice(order.total)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab: Wishlist */}
              {activeTab === "wishlist" && (
                <motion.div
                  key="wishlist"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Saved Jewelry Pieces
                  </h2>

                  {wishlist.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-border rounded-2xl">
                      <Heart className="h-10 w-10 text-muted-foreground/60 mx-auto mb-3" />
                      <h3 className="text-sm font-semibold">
                        Wishlist is empty
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                        Add items you desire to your wishlist while shopping to
                        track availability.
                      </p>
                      <Link to="/shop" className="btn-gold mt-6 inline-flex">
                        Shop Pieces
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {wishlist.map((id) => {
                        const item = products.find((p) => p.id === id);
                        if (!item) return null;
                        return (
                          <div
                            key={item.id}
                            className="p-4 bg-card border border-border rounded-xl flex gap-4 items-center justify-between shadow-soft"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={item.images[0]}
                                alt={item.name}
                                className="h-16 w-16 rounded-lg object-cover shrink-0"
                              />
                              <div>
                                <h3 className="text-xs font-semibold text-foreground">
                                  {item.name}
                                </h3>
                                <p className="text-xs font-semibold text-gold mt-1">
                                  {formatPrice(item.price)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => addToCart(item.id, 1)}
                                className="p-2 bg-gold/10 hover:bg-gold/25 text-gold text-[10px] rounded-lg font-medium uppercase transition-colors"
                              >
                                Add Cart
                              </button>
                              <button
                                onClick={() => toggleWishlist(item.id)}
                                className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors rounded-lg"
                                aria-label="Delete item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab: Addresses */}
              {activeTab === "addresses" && (
                <motion.div
                  key="addresses"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Saved Ghana Delivery Addresses
                  </h2>

                  {/* Notification */}
                  <AnimatePresence>
                    {addrSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2"
                      >
                        <Check className="h-4 w-4" /> New delivery address saved
                        successfully.
                      </motion.div>
                    )}
                    {addrError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-destructive/5 border border-destructive/10 text-destructive text-xs font-light rounded-xl flex items-center gap-2"
                      >
                        <ShieldAlert className="h-4 w-4" /> {addrError}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Add New Address Form */}
                  <form
                    onSubmit={handleAddAddress}
                    className="p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4"
                  >
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                      Register New Address
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                          Recipient Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Akosua Mensah"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +233 24 123 4567"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                          Ghana Post Digital GPS Address
                        </label>
                        <input
                          type="text"
                          required
                          value={gpsAddress}
                          onChange={(e) => setGpsAddress(e.target.value)}
                          placeholder="Format: GA-182-9902"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          required
                          value={streetAddress}
                          onChange={(e) => setStreetAddress(e.target.value)}
                          placeholder="e.g. Ring Road East, Danquah Circle"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                          City / Town
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Osu, Accra"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                          Region
                        </label>
                        <select
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        >
                          {ghanaRegions.map((reg) => (
                            <option key={reg} value={reg}>
                              {reg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase"
                    >
                      Add to Address Book
                    </button>
                  </form>

                  {/* Saved Addresses list */}
                  <div className="space-y-4 mt-6">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className="p-5 border border-border rounded-xl bg-card flex justify-between items-start gap-4"
                      >
                        <div className="text-xs space-y-1">
                          <p className="font-semibold text-foreground">
                            {addr.fullName}
                          </p>
                          <p className="text-muted-foreground font-light">
                            {addr.streetAddress}, {addr.city}
                          </p>
                          <p className="text-muted-foreground font-light">
                            {addr.region} Region, Ghana
                          </p>
                          <p className="text-gold font-medium uppercase tracking-widest text-[10px] pt-1">
                            GPS Address: {addr.gpsAddress}
                          </p>
                          <p className="text-muted-foreground font-light text-[10px]">
                            Contact: {addr.phone}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteAddress(addr.id)}
                          className="p-2 text-muted-foreground hover:text-red-500 transition-colors"
                          aria-label="Remove Address"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab: Recent */}
              {activeTab === "recent" && (
                <motion.div
                  key="recent"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Recently Viewed Pieces
                  </h2>

                  {recentlyViewed.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-border rounded-2xl">
                      <Clock className="h-10 w-10 text-muted-foreground/60 mx-auto mb-3" />
                      <h3 className="text-sm font-semibold">
                        No recent browsing
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                        Explore our timeless collections to build your browsing
                        history.
                      </p>
                      <Link to="/shop" className="btn-gold mt-6 inline-flex">
                        Browse Shop
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {recentlyViewed.map((id) => {
                        const item = products.find((p) => p.id === id);
                        if (!item) return null;
                        return (
                          <div
                            key={item.id}
                            className="group card-lift relative border border-border bg-card rounded-xl overflow-hidden p-3 flex flex-col justify-between"
                          >
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="aspect-square w-full object-cover rounded-lg"
                            />
                            <div className="mt-3">
                              <h3 className="text-xs font-semibold text-foreground line-clamp-1">
                                {item.name}
                              </h3>
                              <p className="text-xs font-semibold text-gold mt-0.5">
                                {formatPrice(item.price)}
                              </p>
                            </div>
                            <Link
                              to="/product/$productId"
                              params={{ productId: item.id }}
                              className="mt-3 text-[10px] text-center font-medium uppercase tracking-widest py-2 rounded-lg bg-accent/40 group-hover:bg-gold group-hover:text-white transition-colors"
                            >
                              View Piece
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab: Settings */}
              {activeTab === "settings" && (
                <motion.div
                  key="settings"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Account Settings
                  </h2>

                  <div className="p-5 border border-border bg-card rounded-xl space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Membership Profile
                    </h3>

                    <div className="text-xs font-light space-y-2">
                      <p>
                        <span className="font-semibold">Registered Email:</span>{" "}
                        {user.email}
                      </p>
                      <p>
                        <span className="font-semibold">Account Level:</span>{" "}
                        Premium Customer
                      </p>
                      <p>
                        <span className="font-semibold">Join Date:</span>{" "}
                        {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group text-xs">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold"
                        />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors font-light">
                          Enable two-factor authentication (recommended)
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer group text-xs">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold"
                        />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors font-light">
                          Subscribe to Ghana collection alerts and flash
                          discounts
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="p-5 border border-red-100 bg-red-50/10 rounded-xl space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-red-700">
                      Account Safety
                    </h3>
                    <p className="text-xs font-light text-muted-foreground">
                      Deactivating your account will permanently delete saved
                      delivery settings, accrued points, and previous order
                      transactions.
                    </p>
                    <button className="py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-wider text-[10px] uppercase rounded-xl transition-all">
                      Deactivate Account
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
