import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Tag, Trash2 } from "lucide-react";
import { formatPrice, getProduct } from "@/data/products";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart — Touch by Bel'voma" },
      {
        name: "description",
        content: "Review your selected jewelry pieces and checkout securely.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cart, setQty, removeFromCart } = useStore();
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const items = cart
    .map((i) => ({ ...i, product: getProduct(i.productId) }))
    .filter((i) => i.product);

  const subtotal = items.reduce((n, i) => n + i.product!.price * i.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal - discount >= 75 || items.length === 0 ? 0 : 6.95;
  const total = subtotal - discount + shipping;

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "NAA10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
    }
  };

  return (
    <div className="container-lux pt-28 pb-20 sm:pt-32">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold sm:text-5xl"
      >
        Your Cart
      </motion.h1>

      {items.length === 0 ? (
        <div className="mt-16 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground/40" />
          <p className="mt-4 text-muted-foreground">
            Your cart is beautifully empty.
          </p>
          <Link to="/shop" className="btn-gold mt-8">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <ul className="space-y-4 lg:col-span-2">
            {items.map(({ product, qty }) => (
              <motion.li
                key={product!.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft sm:gap-6 sm:p-5"
              >
                <Link
                  to="/product/$productId"
                  params={{ productId: product!.id }}
                >
                  <img
                    src={product!.images[0]}
                    alt={product!.name}
                    width={112}
                    height={140}
                    loading="lazy"
                    className="h-28 w-24 rounded-xl object-cover sm:h-32 sm:w-28"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link
                        to="/product/$productId"
                        params={{ productId: product!.id }}
                        className="block truncate font-medium hover:text-gold"
                      >
                        {product!.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-muted-foreground capitalize">
                        {product!.category} · {product!.material}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(product!.id)}
                      aria-label={`Remove ${product!.name}`}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-full border border-border">
                      <button
                        onClick={() => setQty(product!.id, qty - 1)}
                        aria-label="Decrease quantity"
                        className="grid h-9 w-9 place-items-center hover:text-gold"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm">{qty}</span>
                      <button
                        onClick={() => setQty(product!.id, qty + 1)}
                        aria-label="Increase quantity"
                        className="grid h-9 w-9 place-items-center hover:text-gold"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="font-semibold">
                      {formatPrice(product!.price * qty)}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Summary */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="h-fit rounded-3xl bg-ivory p-7"
          >
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium">{formatPrice(subtotal)}</dd>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-gold">
                  <dt>Promo (NAA10 −10%)</dt>
                  <dd>−{formatPrice(discount)}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="font-medium">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                <dt>Total</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>

            {!promoApplied && (
              <div className="mt-5">
                <label
                  htmlFor="promo"
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                >
                  Promo code
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="promo"
                    value={promo}
                    onChange={(e) => {
                      setPromo(e.target.value);
                      setPromoError(false);
                    }}
                    placeholder="e.g. NAA10"
                    className="min-w-0 flex-1 rounded-full border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                  <button
                    onClick={applyPromo}
                    className="flex items-center gap-1.5 rounded-full border border-charcoal px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors hover:bg-charcoal hover:text-primary-foreground"
                  >
                    <Tag className="h-3.5 w-3.5" /> Apply
                  </button>
                </div>
                {promoError && (
                  <p className="mt-2 text-xs text-destructive">
                    That code isn't valid. Try NAA10 for 10% off.
                  </p>
                )}
              </div>
            )}

            <Link
              to="/checkout"
              className="btn-gold mt-6 w-full block text-center"
            >
              Proceed to Checkout
            </Link>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Secure checkout · Free shipping over $75
            </p>
          </motion.aside>
        </div>
      )}
    </div>
  );
}
