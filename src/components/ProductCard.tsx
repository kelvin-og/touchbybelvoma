import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, Heart, ShoppingBag, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, type Product } from "@/data/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [quickView, setQuickView] = useState(false);
  const wished = isWishlisted(product.id);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.55,
          delay: (index % 4) * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group card-lift relative overflow-hidden rounded-2xl bg-card shadow-soft"
      >
        <Link
          to="/product/$productId"
          params={{ productId: product.id }}
          className="block"
          aria-label={product.name}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              width={900}
              height={1125}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            {(product.isNew || product.isBestSeller || product.originalPrice) && (
              <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.15em] uppercase backdrop-blur-sm">
                {product.originalPrice ? (
                  <span className="text-destructive">Sale</span>
                ) : product.isNew ? (
                  <span className="text-gold">New</span>
                ) : (
                  "Best Seller"
                )}
              </span>
            )}
          </div>
        </Link>

        <button
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-card/90 shadow-soft backdrop-blur-sm transition-all hover:scale-110 ${
            wished ? "text-gold" : "text-foreground"
          }`}
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-current" : ""}`} />
        </button>

        <div className="pointer-events-none absolute inset-x-3 top-[calc(80%-3.5rem)] flex justify-center gap-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
          <button
            onClick={() => setQuickView(true)}
            className="flex items-center gap-1.5 rounded-full bg-card/95 px-4 py-2 text-xs font-medium shadow-soft backdrop-blur-sm transition-transform hover:scale-105"
          >
            <Eye className="h-3.5 w-3.5" /> Quick View
          </button>
          <button
            onClick={() => addToCart(product.id)}
            className="flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-1 text-gold">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="mt-1.5 block truncate text-sm font-medium transition-colors hover:text-gold"
          >
            {product.name}
          </Link>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/50 p-4 backdrop-blur-sm"
            onClick={() => setQuickView(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view: ${product.name}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="grid w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-lift sm:grid-cols-2"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-56 w-full object-cover sm:h-full"
                width={900}
                height={900}
              />
              <div className="relative flex flex-col p-6">
                <button
                  aria-label="Close quick view"
                  onClick={() => setQuickView(false)}
                  className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full hover:bg-accent"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="eyebrow">{product.category}</p>
                <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-gold">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Material:</span> {product.material}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    addToCart(product.id);
                    setQuickView(false);
                  }}
                  className="btn-gold mt-5 w-full"
                >
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
