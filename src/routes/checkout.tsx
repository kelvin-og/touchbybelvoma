import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useStore, GhanaAddress } from "@/lib/store";
import {
  products,
  formatPrice,
  getCediMultiplier,
  getFreeShippingThreshold,
} from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  User,
  MapPin,
  Truck,
  CreditCard,
  CheckCircle,
  Trash2,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  Heart,
  Lock,
  Plus,
  Minus,
  RotateCcw,
  HelpCircle,
  Gift,
} from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Secured Checkout | Touch by Bel'voma" },
      {
        name: "description",
        content: "Finalize your luxury jewelry purchase securely at Touch by Bel'voma.",
      },
    ],
  }),
  component: CheckoutComponent,
});

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

interface CheckoutItemDetails {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
}

function CheckoutComponent() {
  const navigate = useNavigate();
  const {
    cart,
    user,
    setQty,
    removeFromCart,
    addToCart,
    wishlist,
    toggleWishlist,
    addresses,
    createOrderFromCart,
  } = useStore();

  const [step, setStep] = useState(1);
  const [items, setItems] = useState<CheckoutItemDetails[]>([]);
  const [lastRemovedItem, setLastRemovedItem] = useState<{
    id: string;
    qty: number;
  } | null>(null);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+233");

  // Delivery address states
  const [region, setRegion] = useState("Greater Accra");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [gpsAddress, setGpsAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [saveAddress, setSaveAddress] = useState(true);

  // Shipping & Promo states
  const [shippingMethod, setShippingMethod] = useState<
    "standard" | "sameday" | "nextday" | "pickup"
  >("standard");
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState("");

  // Payment states
  const [paymentMethod, setPaymentMethod] = useState<
    "momo_mtn" | "momo_telecel" | "card_paystack" | "bank_transfer"
  >("momo_mtn");
  const [momoNumber, setMomoNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Review states
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Load items from cart
  useEffect(() => {
    const list = cart.map((item) => {
      const p = products.find((prod) => prod.id === item.productId);
      return {
        id: item.productId,
        name: p?.name || "Jewelry Piece",
        price: p?.price || 0,
        qty: item.qty,
        image: p?.images[0] || "/assets/logo.png",
      };
    });
    setItems(list);

    // Auto-fill user information if logged in
    if (user) {
      const nameParts = user.name.split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
      setEmail(user.email || "");
      setPhone(user.phone || "+233");

      // Auto-fill first saved address if available
      if (addresses.length > 0) {
        const primary = addresses[0];
        setRegion(primary.region);
        setCity(primary.city);
        setArea(primary.area || "");
        setGpsAddress(primary.gpsAddress);
        setLandmark(primary.landmark || "");
        setStreetAddress(primary.streetAddress);
      }
    }
  }, [cart, user, addresses]);

  if (cart.length === 0 && step < 7) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4">
        <ShoppingBag className="h-12 w-12 text-gold mb-4" strokeWidth={1.5} />
        <h2 className="text-xl font-semibold text-foreground">Your shopping cart is empty</h2>
        <p className="text-xs text-muted-foreground mt-2 max-w-xs text-center font-light">
          There are no items currently queued for checkout. Return to our boutique to select your
          jewelry.
        </p>
        <Link to="/shop" className="btn-gold mt-6">
          Explore Boutique
        </Link>
      </div>
    );
  }

  // Calculate pricing subtotals
  const itemsSubtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const itemsSubtotalGhs = itemsSubtotal * getCediMultiplier();

  // Coupon calculations (TBBGIFT triggers 15% off)
  const discountGhs = Math.round(itemsSubtotalGhs * (discountPercent / 100));

  // Shipping calculation (free above GH₵ threshold)
  const isFreeShipping = itemsSubtotalGhs >= getFreeShippingThreshold();

  const getShippingCostGhs = () => {
    if (isFreeShipping || shippingMethod === "pickup") return 0;

    switch (shippingMethod) {
      case "sameday":
        return 60; // Accra same day
      case "nextday":
        return 45; // Kumasi/Tamale next day
      case "standard":
      default:
        return 30; // Nationwide
    }
  };
  const shippingCostGhs = getShippingCostGhs();

  const grandTotalGhs = itemsSubtotalGhs + shippingCostGhs - discountGhs;

  // Dynamic delivery date predictions
  const getEstimatedDeliveryDate = () => {
    const today = new Date();
    switch (shippingMethod) {
      case "sameday":
        return "Today, before 6:00 PM";
      case "nextday":
        today.setDate(today.getDate() + 1);
        return today.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        });
      case "pickup":
        return "Ready in 2 hours at Accra Gallery";
      case "standard":
      default: {
        today.setDate(today.getDate() + 3);
        const max = new Date();
        max.setDate(max.getDate() + 5);
        return `${today.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${max.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
      }
    }
  };

  // Cart logic updates
  const handleQtyChange = (id: string, currentQty: number, delta: number) => {
    const target = currentQty + delta;
    setQty(id, target);
  };

  const handleRemove = (id: string, currentQty: number) => {
    setLastRemovedItem({ id, qty: currentQty });
    removeFromCart(id);
  };

  const handleUndoRemove = () => {
    if (lastRemovedItem) {
      addToCart(lastRemovedItem.id, lastRemovedItem.qty);
      setLastRemovedItem(null);
    }
  };

  // Coupons
  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");

    if (promoInput.toUpperCase().trim() === "TBBGIFT") {
      setAppliedPromo("TBBGIFT");
      setDiscountPercent(15);
      setPromoInput("");
    } else if (promoInput.toUpperCase().trim() === "BELVOMA10") {
      setAppliedPromo("BELVOMA10");
      setDiscountPercent(10);
      setPromoInput("");
    } else {
      setPromoError("Invalid promotional coupon code.");
    }
  };

  // Ghana validation constraints
  const validatePhone = (num: string): boolean => {
    const cleanNum = num.replace(/\s+/g, "");
    if (!cleanNum.startsWith("+233")) return false;
    const nationalNumber = cleanNum.slice(4);
    if (nationalNumber.length !== 9) return false;

    const prefix2 = nationalNumber.slice(0, 2);
    const validPrefixes = ["24", "54", "55", "59", "53", "20", "50", "26", "56", "27", "57"];
    return validPrefixes.includes(prefix2);
  };

  const validateGhanaGPS = (gps: string): boolean => {
    const gpsRegex = /^[A-Z]{2}-\d{3,4}-\d{4}$/;
    return gpsRegex.test(gps.toUpperCase().trim());
  };

  // Navigation validation steps
  const handleNextStep = () => {
    setErrorMsg("");

    if (step === 2) {
      if (!firstName || !lastName || !email) {
        setErrorMsg("Please fill out all required customer information.");
        return;
      }
      if (!validatePhone(phone)) {
        setErrorMsg("Please provide a valid Ghana phone number starting with +233.");
        return;
      }
    }

    if (step === 3) {
      if (!city || !area || !gpsAddress || !streetAddress) {
        setErrorMsg("Please fill out all required delivery location details.");
        return;
      }
      if (!validateGhanaGPS(gpsAddress)) {
        setErrorMsg("Invalid Ghana Post GPS format. Must be XX-XXX-XXXX (e.g. GA-182-9902).");
        return;
      }
    }

    setStep(step + 1);
  };

  // Mobile Money transaction mock
  const handleTriggerMomoOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!momoNumber) {
      setErrorMsg("Please enter your Mobile Money account number.");
      return;
    }

    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setOtpSent(true);
    }, 1200);
  };

  const handleVerifyMomoOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpVal) return;

    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setStep(6); // Proceed to Review step
      setOtpSent(false);
      setOtpVal("");
    }, 1500);
  };

  // Card payment Paystack simulation
  const handleCardPayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setStep(6); // Skip to review step
    }, 2000);
  };

  // Confirm order execution
  const handlePlaceOrder = async () => {
    if (!agreeTerms) {
      setErrorMsg(
        "You must accept our Terms of Sale, Refund, and Privacy Policies to finalize purchase.",
      );
      return;
    }

    setIsPlacingOrder(true);

    try {
      const addressPayload: GhanaAddress = {
        id: "addr_checkout",
        fullName: `${firstName} ${lastName}`,
        phone,
        gpsAddress: gpsAddress.toUpperCase().trim(),
        streetAddress,
        city,
        region,
        area,
        landmark,
      };

      const finalOrder = await createOrderFromCart(
        paymentMethod.toUpperCase().replace("_", " "),
        addressPayload,
        shippingCostGhs / getCediMultiplier(), // store keeps base total in USD internally
        discountGhs / getCediMultiplier(),
        appliedPromo,
        getEstimatedDeliveryDate(),
        additionalNotes,
      );

      // Successfully redirected to order confirmation
      setTimeout(() => {
        setIsPlacingOrder(false);
        navigate({
          to: `/order-confirmation/$orderId`,
          params: { orderId: finalOrder.id },
        });
      }, 1500);
    } catch (err) {
      setIsPlacingOrder(false);
      setErrorMsg(
        "An unexpected transaction processing fault occurred. Please check payment and try again.",
      );
    }
  };

  const stepsList = [
    { num: 1, name: "Cart" },
    { num: 2, name: "Info" },
    { num: 3, name: "Address" },
    { num: 4, name: "Shipping" },
    { num: 5, name: "Payment" },
    { num: 6, name: "Review" },
  ];

  return (
    <div className="min-h-screen bg-background py-32 relative">
      {/* Decorative vectors */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container-lux relative z-10">
        {/* Checkout Header */}
        <div className="text-center mb-10">
          <p className="eyebrow">Luxury Boutiques</p>
          <h1 className="text-3xl font-semibold tracking-tight mt-1 text-foreground">
            Secure Checkout
          </h1>
        </div>

        {/* Progress Progress indicator */}
        <div className="max-w-2xl mx-auto mb-12 px-4">
          <div className="relative flex justify-between items-center">
            {/* Background line */}
            <div className="absolute top-[18px] left-[5%] right-[5%] h-[1.5px] bg-border z-0" />
            {/* Active highlight line */}
            <motion.div
              animate={{ width: `${(step - 1) * 20}%` }}
              className="absolute top-[18px] left-[5%] h-[1.5px] bg-gold z-0"
              transition={{ duration: 0.4 }}
            />

            {stepsList.map((s) => (
              <button
                key={s.num}
                disabled={s.num > step}
                onClick={() => setStep(s.num)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div
                  className={`h-9.5 w-9.5 rounded-full border flex items-center justify-center text-xs font-semibold transition-all ${
                    step >= s.num
                      ? "bg-gold text-white border-gold shadow-soft scale-105"
                      : "bg-card text-muted-foreground border-border group-hover:border-gold/30"
                  }`}
                >
                  {step > s.num ? <CheckCircle className="h-4.5 w-4.5 text-white" /> : s.num}
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider mt-2 transition-colors ${
                    step >= s.num
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground font-light"
                  }`}
                >
                  {s.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Error notification */}
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto mb-6 p-4 bg-destructive/5 border border-destructive/10 rounded-xl flex items-center gap-3"
            >
              <ShieldAlert className="h-5 w-5 text-destructive shrink-0" />
              <span className="text-xs font-light text-destructive/90">{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Grid Layout (Interactive form + sticky total summary column) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start max-w-5xl mx-auto">
          {/* LEFT SIDE: STEP WORKSPACE */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-soft">
            <AnimatePresence mode="wait">
              {/* STEP 1: Shopping Cart Review */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <h2 className="text-lg font-semibold text-foreground">Shopping Bag Review</h2>
                    <span className="text-xs font-light text-muted-foreground">
                      {items.length} unique pieces
                    </span>
                  </div>

                  {/* Undo remove banner */}
                  {lastRemovedItem && (
                    <div className="p-3 bg-gold/5 border border-gold/15 text-xs rounded-xl flex items-center justify-between">
                      <span className="font-light text-muted-foreground flex items-center gap-1.5">
                        <Trash2 className="h-4 w-4 text-gold" /> Item removed from checkout bag.
                      </span>
                      <button
                        onClick={handleUndoRemove}
                        className="text-[10px] text-gold font-semibold uppercase flex items-center gap-1"
                      >
                        <RotateCcw className="h-3.5 w-3.5" /> Undo
                      </button>
                    </div>
                  )}

                  {/* Cart pieces list */}
                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="py-5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 rounded-xl object-cover border border-border"
                          />
                          <div>
                            <h3 className="text-xs font-semibold text-foreground">{item.name}</h3>
                            <p className="text-xs font-semibold text-gold mt-1">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-3 sm:mt-0">
                          <div className="flex items-center border border-border rounded-lg bg-accent/20">
                            <button
                              onClick={() => handleQtyChange(item.id, item.qty, -1)}
                              className="p-1.5 text-muted-foreground hover:text-gold transition-colors focus:outline-none"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-xs font-semibold px-3 text-foreground w-8 text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => handleQtyChange(item.id, item.qty, 1)}
                              className="p-1.5 text-muted-foreground hover:text-gold transition-colors focus:outline-none"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => toggleWishlist(item.id)}
                              className="p-2 border border-border hover:border-gold/30 hover:bg-gold/5 transition-all rounded-lg text-muted-foreground hover:text-gold"
                              aria-label="Add to wishlist"
                            >
                              <Heart
                                className={`h-4 w-4 ${wishlist.includes(item.id) ? "fill-gold text-gold" : ""}`}
                              />
                            </button>
                            <button
                              onClick={() => handleRemove(item.id, item.qty)}
                              className="p-2 border border-border hover:border-red-200 hover:bg-red-50 transition-all rounded-lg text-muted-foreground hover:text-red-500"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Coupon promotion code block */}
                  <div className="pt-6 border-t border-border space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1.5">
                      <Gift className="h-4 w-4" /> Apply Promotional Campaign Coupon
                    </h3>

                    <form onSubmit={handleApplyPromo} className="flex gap-2 max-w-sm">
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="e.g. TBBGIFT"
                        className="flex-1 text-xs border border-border bg-card px-4 py-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3 bg-charcoal text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl hover:bg-black transition-all"
                      >
                        Apply
                      </button>
                    </form>

                    {promoError && (
                      <p className="text-[10px] text-destructive font-light">{promoError}</p>
                    )}
                    {appliedPromo && (
                      <p className="text-[10px] text-green-700 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5 text-green-600" /> Coupon "
                        {appliedPromo}" verified ({discountPercent}% Discount)
                      </p>
                    )}
                  </div>

                  {/* Proceed Actions */}
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <Link
                      to="/shop"
                      className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1 font-light"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Return to Boutique
                    </Link>
                    <button onClick={() => setStep(2)} className="btn-gold">
                      Proceed to Details <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Customer Information */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-semibold text-foreground border-b border-border pb-4">
                    Customer Credentials
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                      />
                      <label
                        htmlFor="firstName"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        First Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>

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
                      Ghana Phone Number (+233)
                    </label>
                    <span className="absolute right-4 top-5 text-[10px] text-muted-foreground/75 tracking-wider font-light pointer-events-none">
                      Carrier Check
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border space-y-3">
                    <label className="flex items-start gap-2.5 cursor-pointer group text-xs font-light">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        Create an account to track deliveries, earn loyalty points, and save
                        addresses.
                      </span>
                    </label>
                    <label className="flex items-start gap-2.5 cursor-pointer group text-xs font-light">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        Subscribe to promo newsletters and alerts for new gold entries.
                      </span>
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back to Cart
                    </button>
                    <button onClick={handleNextStep} className="btn-gold">
                      Billing & Address <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Delivery Address */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-semibold text-foreground border-b border-border pb-4">
                    Ghana Delivery Address
                  </h2>

                  {/* Region & GPS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                    <div className="relative">
                      <input
                        id="gpsAddress"
                        type="text"
                        required
                        value={gpsAddress}
                        onChange={(e) => setGpsAddress(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors uppercase placeholder:normal-case"
                      />
                      <label
                        htmlFor="gpsAddress"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        GhanaPost GPS (e.g. GA-182-9902)
                      </label>
                    </div>
                  </div>

                  {/* City & Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        id="city"
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                      />
                      <label
                        htmlFor="city"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        City / Town
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="area"
                        type="text"
                        required
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                      />
                      <label
                        htmlFor="area"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        Area / Neighborhood
                      </label>
                    </div>
                  </div>

                  {/* Landmark & Street */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="relative sm:col-span-2">
                      <input
                        id="streetAddress"
                        type="text"
                        required
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                      />
                      <label
                        htmlFor="streetAddress"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        Street Address / House Number
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="landmark"
                        type="text"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        placeholder=" "
                        className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                      />
                      <label
                        htmlFor="landmark"
                        className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                      >
                        Landmark (e.g. Near Koala)
                      </label>
                    </div>
                  </div>

                  {/* Additional notes */}
                  <div className="relative">
                    <textarea
                      id="additionalNotes"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder=" "
                      className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-transparent border border-border rounded-xl focus:outline-none focus:border-gold peer transition-colors h-20 resize-none"
                    />
                    <label
                      htmlFor="additionalNotes"
                      className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                    >
                      Additional Notes (e.g. Delivery time restrictions)
                    </label>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <label className="flex items-center gap-2.5 cursor-pointer group text-xs font-light">
                      <input
                        type="checkbox"
                        checked={saveAddress}
                        onChange={(e) => setSaveAddress(e.target.checked)}
                        className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Save this address to my profile book for future orders
                      </span>
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <button
                      onClick={() => setStep(2)}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back to Credentials
                    </button>
                    <button onClick={handleNextStep} className="btn-gold">
                      Select Shipping <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Shipping Method Selection */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-semibold text-foreground border-b border-border pb-4">
                    Delivery Dispatch Speed
                  </h2>

                  <div className="space-y-4">
                    {/* Sameday Accra (conditional Greater Accra region) */}
                    <label
                      className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                        region !== "Greater Accra"
                          ? "opacity-55 cursor-not-allowed border-border"
                          : shippingMethod === "sameday"
                            ? "border-gold bg-gold/5"
                            : "border-border hover:border-gold/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === "sameday"}
                          disabled={region !== "Greater Accra"}
                          onChange={() => setShippingMethod("sameday")}
                          className="text-gold focus:ring-gold bg-transparent mt-1"
                        />
                        <div>
                          <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            Same-Day VIP Delivery{" "}
                            <span className="text-[9px] uppercase tracking-wider bg-gold/15 text-gold px-2 py-0.5 rounded font-medium">
                              Accra Only
                            </span>
                          </p>
                          <p className="text-[11px] text-muted-foreground font-light mt-1">
                            Dispatched via private courier by evening. Order before 1:00 PM.
                          </p>
                          <p className="text-[10px] text-gold font-medium mt-1">
                            Estimated: Today, before 6:00 PM
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-gold">
                        {isFreeShipping ? "FREE" : "GH₵ 60.00"}
                      </span>
                    </label>

                    {/* Nextday Major Cities */}
                    <label
                      className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === "nextday"
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === "nextday"}
                          onChange={() => setShippingMethod("nextday")}
                          className="text-gold focus:ring-gold bg-transparent mt-1"
                        />
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            Next-Day Executive Delivery
                          </p>
                          <p className="text-[11px] text-muted-foreground font-light mt-1">
                            Available for major cities (Accra, Kumasi, Takoradi, Tamale).
                          </p>
                          <p className="text-[10px] text-gold font-medium mt-1">
                            Estimated: Tomorrow, by afternoon
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-gold">
                        {isFreeShipping ? "FREE" : "GH₵ 45.00"}
                      </span>
                    </label>

                    {/* Standard Nationwide */}
                    <label
                      className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === "standard"
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === "standard"}
                          onChange={() => setShippingMethod("standard")}
                          className="text-gold focus:ring-gold bg-transparent mt-1"
                        />
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            Standard Nationwide Delivery
                          </p>
                          <p className="text-[11px] text-muted-foreground font-light mt-1">
                            Dispatched via Speedaf or DHL Courier. Reaches all 16 regions.
                          </p>
                          <p className="text-[10px] text-gold font-medium mt-1">
                            Estimated: 3 - 5 business days
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-gold">
                        {isFreeShipping ? "FREE" : "GH₵ 30.00"}
                      </span>
                    </label>

                    {/* Local Pickup */}
                    <label
                      className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === "pickup"
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === "pickup"}
                          onChange={() => setShippingMethod("pickup")}
                          className="text-gold focus:ring-gold bg-transparent mt-1"
                        />
                        <div>
                          <p className="text-xs font-semibold text-foreground">Showroom Pick-Up</p>
                          <p className="text-[11px] text-muted-foreground font-light mt-1">
                            Pick up directly at our luxury showroom (Airport Residential Area,
                            Accra).
                          </p>
                          <p className="text-[10px] text-gold font-medium mt-1">
                            Estimated: Ready in 2 hours
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-green-600">FREE</span>
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <button
                      onClick={() => setStep(3)}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back to Address
                    </button>
                    <button onClick={() => setStep(5)} className="btn-gold">
                      Select Payment <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Payment Gateway Selection */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-semibold text-foreground border-b border-border pb-4">
                    Secure Payment Options
                  </h2>

                  {/* Tabs of Payment options */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                    <button
                      onClick={() => {
                        setPaymentMethod("momo_mtn");
                        setOtpSent(false);
                      }}
                      className={`py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${
                        paymentMethod === "momo_mtn"
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-border text-muted-foreground hover:bg-accent/10"
                      }`}
                    >
                      MTN MoMo
                    </button>
                    <button
                      onClick={() => {
                        setPaymentMethod("momo_telecel");
                        setOtpSent(false);
                      }}
                      className={`py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${
                        paymentMethod === "momo_telecel"
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-border text-muted-foreground hover:bg-accent/10"
                      }`}
                    >
                      Telecel Cash
                    </button>
                    <button
                      onClick={() => {
                        setPaymentMethod("card_paystack");
                        setOtpSent(false);
                      }}
                      className={`py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${
                        paymentMethod === "card_paystack"
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-border text-muted-foreground hover:bg-accent/10"
                      }`}
                    >
                      Visa / Mastercard
                    </button>
                    <button
                      onClick={() => {
                        setPaymentMethod("bank_transfer");
                        setOtpSent(false);
                      }}
                      className={`py-3 text-[10px] font-semibold uppercase tracking-wider rounded-xl border transition-all ${
                        paymentMethod === "bank_transfer"
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-border text-muted-foreground hover:bg-accent/10"
                      }`}
                    >
                      Bank Transfer
                    </button>
                  </div>

                  {/* MTN or Telecel Mobile Money Form */}
                  {(paymentMethod === "momo_mtn" || paymentMethod === "momo_telecel") && (
                    <div className="space-y-4 p-5 border border-gold/15 bg-gold/5 rounded-2xl">
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                        {paymentMethod === "momo_mtn" ? "MTN Mobile Money" : "Telecel Cash"} Gateway
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                        A secure approval prompt (USSD code push) will be transmitted to your mobile
                        number. Enter credentials below:
                      </p>

                      {!otpSent ? (
                        <form onSubmit={handleTriggerMomoOtp} className="space-y-4">
                          <div className="relative">
                            <input
                              id="momoNumber"
                              type="tel"
                              required
                              value={momoNumber}
                              onChange={(e) => setMomoNumber(e.target.value)}
                              placeholder=" "
                              className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-card border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors"
                            />
                            <label
                              htmlFor="momoNumber"
                              className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                            >
                              Mobile Money Wallet Number
                            </label>
                          </div>

                          <button
                            type="submit"
                            disabled={isProcessingPayment}
                            className="w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.18em] text-white uppercase bg-charcoal hover:bg-black transition-all flex items-center justify-center gap-2"
                          >
                            {isProcessingPayment ? (
                              <>
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
                                </svg>{" "}
                                Transmitting Prompt...
                              </>
                            ) : (
                              "Initialize USSD Payment Prompt"
                            )}
                          </button>
                        </form>
                      ) : (
                        <form onSubmit={handleVerifyMomoOtp} className="space-y-4">
                          <div className="p-3 bg-amber-50 border border-amber-100 text-amber-800 text-xs font-light rounded-xl leading-relaxed">
                            A simulated USSD transaction code has been triggered. Please enter the
                            6-digit confirmation pin sent to {momoNumber}:
                          </div>

                          <div className="relative">
                            <input
                              id="otpVal"
                              type="text"
                              maxLength={6}
                              required
                              value={otpVal}
                              onChange={(e) => setOtpVal(e.target.value)}
                              placeholder=" "
                              className="block w-full px-4 pt-6 pb-2 text-sm text-foreground bg-card border border-border rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors tracking-widest font-semibold"
                            />
                            <label
                              htmlFor="otpVal"
                              className="absolute text-xs text-muted-foreground duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-gold uppercase tracking-[0.12em]"
                            >
                              Enter 6-Digit Payment PIN
                            </label>
                          </div>

                          <button
                            type="submit"
                            disabled={isProcessingPayment}
                            className="w-full py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.18em] text-white uppercase bg-gradient-to-r from-gold to-gold-light hover:brightness-105 transition-all flex items-center justify-center gap-2"
                          >
                            {isProcessingPayment
                              ? "Verifying Transaction..."
                              : "Authorize Wallet Payment"}
                          </button>
                        </form>
                      )}
                    </div>
                  )}

                  {/* Card Payments via Paystack Simulation */}
                  {paymentMethod === "card_paystack" && (
                    <div className="space-y-4 p-5 border border-gold/15 bg-gold/5 rounded-2xl text-center">
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                        Card Checkout Gateway
                      </h3>
                      <p className="text-xs font-light text-muted-foreground leading-relaxed max-w-sm mx-auto">
                        Finalize checkout securely via Paystack/Flutterwave. Click below to launch
                        the checkout popup interface:
                      </p>

                      <button
                        type="button"
                        onClick={handleCardPayment}
                        disabled={isProcessingPayment}
                        className="py-3 px-6 bg-charcoal hover:bg-black text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all inline-flex items-center gap-2"
                      >
                        {isProcessingPayment ? (
                          <>
                            <svg
                              className="animate-spin h-3.5 w-3.5 text-white"
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
                            Loading Gateway...
                          </>
                        ) : (
                          "Launch Secure Paystack Panel"
                        )}
                      </button>
                    </div>
                  )}

                  {/* Bank Transfer Instructions */}
                  {paymentMethod === "bank_transfer" && (
                    <div className="space-y-4 p-5 border border-gold/15 bg-gold/5 rounded-2xl text-xs font-light leading-relaxed">
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                        Bank Wire Transfer Guidelines
                      </h3>
                      <p className="text-muted-foreground">
                        Please deposit the grand total to the designated bank account below. Order
                        processing will commence immediately upon confirmation of the deposit.
                      </p>

                      <div className="p-3 bg-card border border-border rounded-xl space-y-1.5">
                        <p>
                          <strong className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                            Bank:
                          </strong>{" "}
                          Stanbic Bank Ghana
                        </p>
                        <p>
                          <strong className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                            Account Name:
                          </strong>{" "}
                          Touch by Bel'voma Ltd
                        </p>
                        <p>
                          <strong className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                            Account Number:
                          </strong>{" "}
                          9040003920192
                        </p>
                        <p>
                          <strong className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                            Branch:
                          </strong>{" "}
                          Airport City Branch
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(6)}
                        className="w-full py-3 px-6 bg-charcoal hover:bg-black text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all"
                      >
                        Confirm Bank Payment Details & Proceed
                      </button>
                    </div>
                  )}

                  {/* Security trust indicators */}
                  <div className="pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 opacity-60">
                    <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase flex items-center gap-1">
                      <Lock className="h-3.5 w-3.5 text-gold" /> SSL Encrypted
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4 text-gold" /> PCI Compliant
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <button
                      onClick={() => setStep(4)}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back to Shipping
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 6: Order Review */}
              {step === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-semibold text-foreground border-b border-border pb-4">
                    Grand Order Review
                  </h2>

                  {/* Info breakdowns */}
                  <div className="space-y-4 text-xs font-light">
                    <div className="p-4 border border-border rounded-xl space-y-1">
                      <h3 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold">
                        Recipient Details
                      </h3>
                      <p>
                        {firstName} {lastName}
                      </p>
                      <p>{email}</p>
                      <p>{phone}</p>
                    </div>

                    <div className="p-4 border border-border rounded-xl space-y-1">
                      <h3 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold">
                        Delivery Address
                      </h3>
                      <p>
                        {streetAddress}, {area}, {city}
                      </p>
                      <p>{region} Region, Ghana</p>
                      <p className="font-semibold text-foreground uppercase mt-1">
                        GPS Digital: {gpsAddress}
                      </p>
                      {landmark && <p className="text-muted-foreground">Landmark: {landmark}</p>}
                    </div>

                    <div className="p-4 border border-border rounded-xl space-y-1">
                      <h3 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold">
                        Shipping Speed
                      </h3>
                      <p className="capitalize">{shippingMethod} Dispatch</p>
                      <p className="text-gold font-medium">
                        Estimated: {getEstimatedDeliveryDate()}
                      </p>
                    </div>

                    <div className="p-4 border border-border rounded-xl space-y-1">
                      <h3 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold">
                        Selected Payment
                      </h3>
                      <p className="uppercase">{paymentMethod.replace("_", " ")}</p>
                    </div>
                  </div>

                  {/* Consents */}
                  <div className="pt-4 border-t border-border">
                    <label className="flex items-start gap-2.5 cursor-pointer group text-xs font-light leading-relaxed">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold bg-transparent cursor-pointer mt-0.5"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        I hereby consent to the Touch by Bel'voma{" "}
                        <a href="#terms" className="text-gold underline">
                          Terms & Conditions
                        </a>
                        ,{" "}
                        <a href="#refund" className="text-gold underline">
                          Refund Policy
                        </a>
                        , and{" "}
                        <a href="#privacy" className="text-gold underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Final execute trigger */}
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <button
                      onClick={() => setStep(5)}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5 font-light"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back to Payment
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isPlacingOrder}
                      className="btn-gold relative flex items-center justify-center gap-2"
                    >
                      {isPlacingOrder ? (
                        <>
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
                          </svg>{" "}
                          Authorizing...
                        </>
                      ) : (
                        <>
                          Finalize Order <Lock className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: CHECKOUT SUMMARY COLUMN (Sticky) */}
          <div className="sticky top-28 bg-card border border-border p-6 rounded-2xl shadow-soft space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gold border-b border-border pb-3">
              Order Summary
            </h3>

            {/* Micro items review */}
            <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs font-light">
                  <span className="truncate max-w-[180px]">
                    {item.name} <strong className="font-semibold">x{item.qty}</strong>
                  </span>
                  <span className="font-semibold text-muted-foreground">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations breakdown */}
            <div className="border-t border-border pt-4 space-y-2.5 text-xs font-light">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Items Subtotal</span>
                <span className="font-semibold text-foreground">{formatPrice(itemsSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping Delivery Fee</span>
                <span className="font-semibold text-foreground">
                  {shippingMethod === "pickup"
                    ? "Free"
                    : isFreeShipping
                      ? "FREE (Offer)"
                      : `GH₵ ${shippingCostGhs.toFixed(2)}`}
                </span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-green-700">
                  <span>Coupon Discount ({discountPercent}%)</span>
                  <span>-GH₵ {discountGhs.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-border pt-3 text-sm font-semibold">
                <span>Grand Total (GHS)</span>
                <span className="text-gold font-bold">
                  GH₵{" "}
                  {grandTotalGhs.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            {/* Promo banner info */}
            <div className="p-3 bg-gold/5 border border-gold/10 rounded-xl text-[10px] font-light text-muted-foreground flex gap-2">
              <Gift className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>
                Free shipping applied on orders above GH₵{" "}
                {getFreeShippingThreshold().toLocaleString("en-US")}. Apply coupon{" "}
                <strong>TBBGIFT</strong> to deduct 15% off subtotals.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
