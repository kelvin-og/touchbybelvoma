import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Quote, Sparkles, Star } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Touch by Bel'voma | Luxury Jewelry in Ghana" },
      {
        name: "description",
        content:
          "Discover elegant earrings, necklaces, bracelets, rings, anklets, and luxury accessories at Touch by Bel'voma. Premium jewelry crafted to elevate your everyday style.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const testimonials = [
  {
    name: "Amara K.",
    text: "The Luna necklace is my everyday staple now. The quality feels far beyond the price — I get compliments constantly.",
    rating: 5,
  },
  {
    name: "Jessica T.",
    text: "Beautifully packaged, fast shipping, and the hoops are so lightweight I forget I'm wearing them. Obsessed.",
    rating: 5,
  },
  {
    name: "Naomi A.",
    text: "I bought the Riviera set as a gift for my sister and she cried. The presentation box alone feels luxury.",
    rating: 5,
  },
];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const bestSellers = products.filter((p) => p.isBestSeller);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[92svh] min-h-[560px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={hero}
            alt="Woman wearing delicate layered gold necklaces in warm light"
            className="h-[115%] w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/45 via-charcoal/15 to-transparent" />
        </motion.div>

        {/* Floating accents */}
        <motion.div
          aria-hidden
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[22%] right-[12%] hidden text-gold-light md:block"
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>
        <motion.div
          aria-hidden
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[28%] right-[24%] hidden text-gold-light/70 md:block"
        >
          <Sparkles className="h-5 w-5" />
        </motion.div>

        <div className="container-lux relative flex h-full items-center">
          <div className="max-w-xl text-primary-foreground">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-xs font-semibold tracking-[0.35em] text-gold-light uppercase"
            >
              Touch by Bel'voma
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl"
            >
              Touch Every Moment with Elegance.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-5 max-w-md text-base font-light text-primary-foreground/85 sm:text-lg"
            >
              Discover timeless jewelry designed to celebrate your beauty, confidence, and
              individuality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/shop" className="btn-gold">
                Shop Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                className="btn-outline-lux border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-charcoal"
              >
                Explore New Arrivals
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container-lux py-20 sm:py-28">
        <motion.div {...fadeUp} className="text-center">
          <p className="eyebrow">Curated for you</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Featured Collections</h2>
        </motion.div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to="/shop"
                search={{ category: cat.slug }}
                className="group card-lift relative block overflow-hidden rounded-2xl"
              >
                <img
                  src={cat.image}
                  alt={`${cat.name} collection`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-semibold text-primary-foreground sm:text-xl">
                    {cat.name}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs tracking-[0.15em] text-gold-light uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-lux">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Customer favorites</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Best Sellers</h2>
            </div>
            <Link
              to="/shop"
              search={{ sort: "popular" }}
              className="text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-gold"
            >
              View all →
            </Link>
          </motion.div>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {bestSellers.map((p, i) => (
              <div key={p.id} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-lux py-20 sm:py-28">
        <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Just landed</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">New Arrivals</h2>
          </div>
          <Link
            to="/shop"
            search={{ sort: "newest" }}
            className="text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-gold"
          >
            View all →
          </Link>
        </motion.div>
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-lux">
          <motion.div {...fadeUp} className="text-center">
            <p className="eyebrow">Loved by thousands</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What Our Customers Say</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-lift rounded-2xl bg-card p-7 shadow-soft"
              >
                <Quote className="h-6 w-6 text-gold" aria-hidden />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span
                    className="flex gap-0.5 text-gold"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-style gallery */}
      <section className="container-lux py-20 sm:py-28">
        <motion.div {...fadeUp} className="text-center">
          <p className="eyebrow">@naasjewelryoutlet</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Follow the Sparkle</h2>
        </motion.div>
        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
          {[...categories].map((cat, i) => (
            <motion.a
              key={cat.slug}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative block overflow-hidden rounded-xl"
              aria-label={`Instagram post featuring ${cat.name}`}
            >
              <img
                src={cat.image}
                alt=""
                loading="lazy"
                width={400}
                height={400}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/35">
                <Sparkles className="h-5 w-5 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-charcoal py-20 text-primary-foreground sm:py-24">
        <motion.div {...fadeUp} className="container-lux max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-light uppercase">
            Join the inner circle
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Get 10% Off Your First Order</h2>
          <p className="mt-3 text-sm text-primary-foreground/70">
            New arrivals, exclusive offers, and styling inspiration — straight to your inbox.
          </p>
          {subscribed ? (
            <p className="mt-8 text-gold-light">Thank you — welcome to the family! ✨</p>
          ) : (
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-gold"
              />
              <button type="submit" className="btn-gold">
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
