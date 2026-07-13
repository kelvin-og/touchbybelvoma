import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { formatPrice, getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Touch by Bel'voma" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Touch by Bel'voma` },
        { name: "description", content: product.description },
        {
          property: "og:title",
          content: `${product.name} — Touch by Bel'voma`,
        },
        { property: "og:description", content: product.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-lux pt-40 pb-24 text-center">
      <h1 className="text-3xl font-semibold">Piece not found</h1>
      <p className="mt-3 text-muted-foreground">
        This item may have sold out or been moved.
      </p>
      <Link to="/shop" className="btn-gold mt-8">
        Back to Shop
      </Link>
    </div>
  ),
  component: ProductPage,
});

const reviews = [
  {
    name: "Danielle O.",
    rating: 5,
    text: "Exceeded my expectations — the finish is beautiful and it hasn't tarnished after months of daily wear.",
  },
  {
    name: "Sophia M.",
    rating: 5,
    text: "Arrived in the prettiest packaging. Feels much more expensive than it is.",
  },
  {
    name: "Ruth B.",
    rating: 4,
    text: "Lovely piece, exactly as pictured. Shipping took a few extra days but worth the wait.",
  },
];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQtyLocal] = useState(1);
  const [color, setColor] = useState(product.colors[0]);
  const wished = isWishlisted(product.id);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const alsoBought = products
    .filter((p) => p.category !== product.category)
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 4);

  return (
    <div className="container-lux pt-28 pb-20 sm:pt-32">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-gold">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          to="/shop"
          search={{ category: product.category }}
          className="capitalize hover:text-gold"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="group overflow-hidden rounded-3xl bg-ivory shadow-soft">
            <img
              key={activeImage}
              src={product.images[activeImage]}
              alt={product.name}
              width={900}
              height={1125}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-115"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`overflow-hidden rounded-xl border-2 transition-all ${
                    i === activeImage
                      ? "border-gold"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    className="h-20 w-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <span
              className="flex gap-0.5 text-gold"
              aria-label={`Rated ${product.rating} out of 5`}
            >
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${s < Math.round(product.rating) ? "fill-current" : "opacity-30"}`}
                />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              {product.rating} · {product.reviewCount} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-semibold text-destructive">
                  Save {formatPrice(product.originalPrice - product.price)}
                </span>
              </>
            )}
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Color */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase">
              Finish:{" "}
              <span className="font-normal text-muted-foreground">{color}</span>
            </p>
            <div className="mt-2 flex gap-2">
              {product.colors.map((c: string) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                    c === color
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-border">
              <button
                onClick={() => setQtyLocal((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid h-11 w-11 place-items-center hover:text-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQtyLocal((q) => q + 1)}
                aria-label="Increase quantity"
                className="grid h-11 w-11 place-items-center hover:text-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => addToCart(product.id, qty)}
              className="btn-gold flex-1 sm:flex-none"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
              className={`grid h-12 w-12 place-items-center rounded-full border transition-all hover:scale-105 ${
                wished ? "border-gold text-gold" : "border-border"
              }`}
            >
              <Heart className={`h-5 w-5 ${wished ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Info accordion-ish */}
          <div className="mt-8 space-y-4 rounded-2xl bg-ivory p-5 text-sm">
            <p>
              <span className="font-semibold">Materials:</span>{" "}
              <span className="text-muted-foreground">{product.material}</span>
            </p>
            <p>
              <span className="font-semibold">Care:</span>{" "}
              <span className="text-muted-foreground">
                Keep dry, avoid perfumes and lotions, store in the provided
                pouch. Polish gently with a soft cloth.
              </span>
            </p>
            <div className="grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Truck className="h-4 w-4 shrink-0 text-gold" /> Free shipping
                over $75
              </p>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <RotateCcw className="h-4 w-4 shrink-0 text-gold" /> 30-day
                returns
              </p>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 shrink-0 text-gold" /> 1-year
                warranty
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reviews */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold sm:text-3xl">Customer Reviews</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span
                className="flex gap-0.5 text-gold"
                aria-label={`${r.rating} stars`}
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-3.5 w-3.5 ${s < r.rating ? "fill-current" : "opacity-30"}`}
                  />
                ))}
              </span>
              <blockquote className="mt-3 text-sm text-muted-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            You May Also Love
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Frequently bought together */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Frequently Bought Together
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {alsoBought.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
