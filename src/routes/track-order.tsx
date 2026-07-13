import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useStore, Order } from "@/lib/store";
import { formatPrice, getCediMultiplier } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Truck,
  MapPin,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface SearchParams {
  orderId?: string;
}

export const Route = createFileRoute("/track-order")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      orderId: search.orderId as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Track Your Order | Touch by Bel'voma" },
      {
        name: "description",
        content:
          "Track the real-time shipping and packaging status of your premium jewelry orders in Ghana.",
      },
    ],
  }),
  component: TrackOrderComponent,
});

const TIMELINE_STEPS = [
  {
    status: "Order Received",
    label: "Order Received",
    desc: "Your selection has been successfully received.",
  },
  {
    status: "Payment Confirmed",
    label: "Payment Approved",
    desc: "Transaction confirmed via mobile money/cards.",
  },
  {
    status: "Processing",
    label: "Edits Selection",
    desc: "We are selecting and polishing your pieces.",
  },
  {
    status: "Packaging",
    label: "VIP Packaging",
    desc: "Pieces are set in our signature gift wrap box.",
  },
  {
    status: "Shipped",
    label: "Shipped",
    desc: "Dispatched to courier service hubs.",
  },
  {
    status: "Out for Delivery",
    label: "Out for Delivery",
    desc: "Courier dispatcher is heading to your location.",
  },
  {
    status: "Delivered",
    label: "Delivered",
    desc: "Received at your digital address. Enjoy your sparkles! ✨",
  },
];

function TrackOrderComponent() {
  const { orderId: searchId } = Route.useSearch();
  const { orders } = useStore();

  const [inputVal, setInputVal] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (searchId) {
      setInputVal(searchId);
      const found = orders.find((o) => o.id.toLowerCase() === searchId.toLowerCase());
      if (found) {
        setOrder(found);
      } else {
        setOrder(null);
      }
      setSearched(true);
    }
  }, [searchId, orders]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(false);
    if (!inputVal.trim()) return;

    const found = orders.find((o) => o.id.toLowerCase() === inputVal.trim().toLowerCase());
    if (found) {
      setOrder(found);
    } else {
      setOrder(null);
    }
    setSearched(true);
  };

  const [errorState, setErrorState] = useState(false);

  // Map order status to timeline index
  const getStatusIndex = (currentStatus: string) => {
    // Treat "Payment Pending" as step 0 (Order Received but waiting payment)
    if (currentStatus === "Payment Pending") return 0;
    return TIMELINE_STEPS.findIndex((s) => s.status === currentStatus);
  };

  const currentStepIdx = order ? getStatusIndex(order.status) : -1;

  return (
    <div className="min-h-screen bg-background py-32 relative">
      <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container-lux max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="eyebrow">Dispatch Tracking</p>
          <h1 className="text-3xl font-semibold tracking-tight mt-1 text-foreground">
            Track Your Order
          </h1>
          <p className="text-xs font-light text-muted-foreground mt-2 max-w-sm mx-auto">
            Input your Touch by Bel'voma order reference number to review shipping metrics.
          </p>
        </div>

        {/* Search input bar */}
        <form onSubmit={handleSearch} className="mb-12 flex gap-2 max-w-md mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              required
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="e.g. TBB-90812"
              className="w-full text-xs border border-border bg-card pl-10 pr-4 py-3.5 rounded-xl focus:border-gold outline-none uppercase"
            />
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 bg-charcoal hover:bg-black text-white font-semibold text-[10px] tracking-widest uppercase rounded-xl transition-all"
          >
            Track Status
          </button>
        </form>

        {/* Tracking Details display */}
        <AnimatePresence mode="wait">
          {searched && order && (
            <motion.div
              key="track-found"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="space-y-8"
            >
              {/* Header card info */}
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft flex flex-wrap justify-between items-center gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                    Order Reference
                  </p>
                  <h2 className="text-lg font-semibold text-foreground">{order.id}</h2>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                    Expected Delivery Forecast
                  </p>
                  <p className="text-xs font-semibold text-gold flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {order.estDeliveryDate}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                    Carrier Dispatch
                  </p>
                  <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Truck className="h-4 w-4 text-gold" />{" "}
                    {order.shippingFee === 0 && order.paymentMethod.includes("Pickup")
                      ? "Showroom Pick-Up"
                      : "Speedaf Express / DHL"}
                  </p>
                </div>
              </div>

              {/* Graphical Timeline vertical desktop / stacked mobile */}
              <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl shadow-soft">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-gold mb-8">
                  Delivery Timeline
                </h3>

                <div className="relative pl-8 space-y-8 border-l border-border ml-3">
                  {TIMELINE_STEPS.map((s, idx) => {
                    const isActive = currentStepIdx >= idx;
                    const isCurrent = currentStepIdx === idx;

                    return (
                      <div key={idx} className="relative">
                        {/* Bullet node */}
                        <div
                          className={`absolute left-[-41px] top-0.5 h-6 w-6 rounded-full border flex items-center justify-center transition-all ${
                            isCurrent
                              ? "bg-gold text-white border-gold ring-4 ring-gold/15 scale-110"
                              : isActive
                                ? "bg-gold/10 text-gold border-gold"
                                : "bg-card text-muted-foreground border-border"
                          }`}
                        >
                          {isActive ? (
                            <CheckCircle className="h-3.5 w-3.5 text-gold fill-current bg-white rounded-full" />
                          ) : (
                            <span className="text-[9px] font-bold">{idx + 1}</span>
                          )}
                        </div>

                        {/* Text descriptions */}
                        <div className="space-y-1 text-left">
                          <h4
                            className={`text-xs font-semibold uppercase tracking-wider ${
                              isCurrent
                                ? "text-gold"
                                : isActive
                                  ? "text-foreground"
                                  : "text-muted-foreground font-medium"
                            }`}
                          >
                            {s.label}
                          </h4>
                          <p
                            className={`text-xs font-light leading-relaxed ${
                              isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                            }`}
                          >
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order products summary */}
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft space-y-4">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-gold border-b border-border pb-2">
                  Purchased Items
                </h3>

                <div className="divide-y divide-border">
                  {order.items.map((item, idx: number) => (
                    <div
                      key={idx}
                      className="py-3 flex justify-between items-center text-xs font-light"
                    >
                      <span>
                        {item.name} <strong className="font-semibold">x{item.qty}</strong>
                      </span>
                      <span className="font-semibold text-gold">
                        GH₵ {(item.price * getCediMultiplier() * item.qty).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 text-xs space-y-1.5 font-light">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping Digital Address</span>
                    <span className="text-foreground uppercase">
                      {order.shippingAddress.gpsAddress}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Street Landmark Location</span>
                    <span className="text-foreground">
                      {order.shippingAddress.streetAddress}, {order.shippingAddress.area || ""}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3 font-semibold text-sm">
                    <span>Transaction Total Charged</span>
                    <span className="text-gold">
                      GH₵{" "}
                      {(order.total * getCediMultiplier()).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {searched && !order && (
            <motion.div
              key="track-not-found"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-8 border border-dashed border-border bg-card rounded-2xl text-center"
            >
              <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-3" />
              <h3 className="text-sm font-semibold">Order Reference Unresolved</h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                No active Touch by Bel'voma purchases correspond to the reference code{" "}
                <strong className="text-foreground uppercase">{inputVal}</strong>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
