import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useStore, Order } from "@/lib/store";
import { products, formatPrice, getCediMultiplier } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Download,
  Eye,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/order-confirmation/$orderId")({
  head: () => ({
    meta: [
      { title: `Order Placed | Touch by Bel'voma` },
      {
        name: "description",
        content: `Thank you for choosing Touch by Bel'voma. Your order is confirmed.`,
      },
    ],
  }),
  component: ConfirmationComponent,
});

function ConfirmationComponent() {
  const { orderId } = Route.useParams();
  const { orders } = useStore();
  const [order, setOrder] = useState<Order | null>(null);

  // Notifications simulation states
  const [showSmsAlert, setShowSmsAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  useEffect(() => {
    const found = orders.find((o) => o.id === orderId);
    if (found) {
      setOrder(found);

      // Trigger notifications simulation toast
      const smsTimer = setTimeout(() => setShowSmsAlert(true), 1000);
      const emailTimer = setTimeout(() => setShowEmailAlert(true), 2500);

      return () => {
        clearTimeout(smsTimer);
        clearTimeout(emailTimer);
      };
    }
  }, [orderId, orders]);

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4">
        <div className="max-w-md text-center space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Order Not Found
          </h2>
          <p className="text-xs text-muted-foreground font-light">
            We are unable to locate an active transaction associated with the
            reference <strong className="text-foreground">{orderId}</strong>.
          </p>
          <Link to="/shop" className="btn-gold">
            Return to Boutique
          </Link>
        </div>
      </div>
    );
  }

  // Calculate order metrics
  const grandTotalGhs = order.total * getCediMultiplier();
  const shippingCostGhs = order.shippingFee * getCediMultiplier();
  const discountGhs = order.discount * getCediMultiplier();
  const itemsSubtotalGhs = grandTotalGhs - shippingCostGhs + discountGhs;

  // Invoice generator trigger
  const handleDownloadInvoice = () => {
    // Generate text/plain invoice mockup
    const dateStr = new Date(order.date).toLocaleDateString();
    const invoiceContent = `
=============================================
         TOUCH BY BEL'VOMA JEWELRY
          Airport Residential Area
               Accra, Ghana
=============================================
INVOICE RECEIPT: ${order.id}
Date: ${dateStr}
Recipient: ${order.shippingAddress.fullName}
Digital Address: ${order.shippingAddress.gpsAddress}
Street: ${order.shippingAddress.streetAddress}, ${order.shippingAddress.area || ""}
City/Region: ${order.shippingAddress.city}, ${order.shippingAddress.region}
Contact Phone: ${order.shippingAddress.phone}
---------------------------------------------
ITEMS PURCHASED:
${order.items.map((i) => `- ${i.name} (x${i.qty}): GH₵ ${(i.price * getCediMultiplier() * i.qty).toFixed(2)}`).join("\n")}
---------------------------------------------
Subtotal:    GH₵ ${itemsSubtotalGhs.toFixed(2)}
Shipping:    GH₵ ${shippingCostGhs.toFixed(2)}
Discount:   -GH₵ ${discountGhs.toFixed(2)}
---------------------------------------------
GRAND TOTAL: GH₵ ${grandTotalGhs.toFixed(2)}
Payment:     ${order.paymentMethod}
Status:      ${order.status}
=============================================
      Thank you for choosing Bel'voma!
     Touch Every Moment with Elegance.
=============================================
`;

    const blob = new Blob([invoiceContent], {
      type: "text/plain;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Invoice_${order.id}.txt`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background py-32 relative">
      <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Notifications Simulation Overlay */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none max-w-sm w-full px-4">
        <AnimatePresence>
          {showSmsAlert && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-charcoal text-white border border-gold/20 p-4 rounded-xl shadow-lift flex items-start gap-3 pointer-events-auto"
            >
              <MessageSquare className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div className="text-xs font-light">
                <p className="font-semibold text-gold-light uppercase tracking-wider text-[9px]">
                  SMS Dispatch Confirmation
                </p>
                <p className="mt-1 leading-normal text-white/90">
                  Receipt sent to {order.shippingAddress.phone}: "Order{" "}
                  {order.id} confirmed! Track progress on touchbybelvoma.com."
                </p>
              </div>
            </motion.div>
          )}

          {showEmailAlert && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-charcoal text-white border border-gold/20 p-4 rounded-xl shadow-lift flex items-start gap-3 pointer-events-auto"
            >
              <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div className="text-xs font-light">
                <p className="font-semibold text-gold-light uppercase tracking-wider text-[9px]">
                  Email Invoice Sent
                </p>
                <p className="mt-1 leading-normal text-white/90">
                  Premium receipt invoice copy successfully delivered to{" "}
                  {order.shippingAddress.fullName} at your registered account
                  mail.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container-lux max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-gold/15 p-8 sm:p-10 rounded-2xl shadow-lift text-center"
        >
          {/* Checkmark animation */}
          <motion.div
            initial={{ scale: 0.3, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6"
          >
            <CheckCircle2 className="h-10 w-10" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Thank You For Your Purchase
          </h1>
          <p className="text-xs font-light text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed">
            Your selection has been successfully logged. Touch by Bel'voma is
            preparing your premium packaging.
          </p>

          {/* Core receipt data block */}
          <div className="my-8 border-t border-b border-border py-6 grid grid-cols-2 gap-y-4 gap-x-2 text-left text-xs font-light">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Order Number
              </p>
              <p className="font-semibold text-foreground mt-0.5">{order.id}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Estimated Delivery
              </p>
              <p className="font-semibold text-gold mt-0.5">
                {order.estDeliveryDate}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Payment Status
              </p>
              <p className="font-semibold text-foreground mt-0.5">
                {order.status === "Payment Pending"
                  ? "MOMO pending authorization"
                  : "Transaction Approved"}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Total Transaction
              </p>
              <p className="font-semibold text-gold mt-0.5">
                {formatPrice(order.total)}
              </p>
            </div>
          </div>

          {/* Receipt details */}
          <div className="bg-accent/25 border border-border p-5 rounded-xl text-left text-xs font-light mb-8 space-y-4">
            <h3 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold border-b border-border pb-2 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" /> Order Summary
            </h3>

            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {order.items.map((i, idx: number) => (
                <div key={idx} className="flex justify-between">
                  <span>
                    {i.name} <strong className="font-semibold">x{i.qty}</strong>
                  </span>
                  <span className="font-semibold text-muted-foreground">
                    {formatPrice(i.price * i.qty)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-3 space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Shipping Delivery</span>
                <span>
                  {shippingCostGhs === 0
                    ? "Free"
                    : `GH₵ ${shippingCostGhs.toFixed(2)}`}
                </span>
              </div>
              {discountGhs > 0 && (
                <div className="flex justify-between text-[11px] text-green-700">
                  <span>Coupon Discount</span>
                  <span>-GH₵ {discountGhs.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold pt-1.5 border-t border-border/60 text-sm">
                <span>Grand Total</span>
                <span className="text-gold">
                  GH₵{" "}
                  {grandTotalGhs.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Executive buttons actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleDownloadInvoice}
              className="flex items-center justify-center gap-2 py-3 px-6 border border-border rounded-xl text-xs font-semibold text-charcoal bg-card hover:border-gold transition-colors focus:outline-none"
            >
              <Download className="h-4 w-4" /> Download PDF Invoice
            </button>

            <Link
              to="/track-order"
              search={{ orderId: order.id }}
              className="btn-gold flex items-center justify-center gap-2"
            >
              Track Order Progress <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/shop"
              className="text-xs text-muted-foreground hover:text-gold transition-colors font-light"
            >
              ← Return to Jewelry boutique
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
