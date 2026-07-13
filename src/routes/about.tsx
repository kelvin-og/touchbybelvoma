import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Gem, HandHeart, Leaf, Sparkles } from "lucide-react";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Touch by Bel'voma" },
      {
        name: "description",
        content:
          "Touch by Bel'voma was born from a belief that elegance shouldn't be exclusive. Discover our story of craftsmanship, quality and affordable luxury.",
      },
      { property: "og:title", content: "Our Story — Touch by Bel'voma" },
      {
        property: "og:description",
        content: "Elegance shouldn't be exclusive. Discover our story.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Gem,
    title: "Quality Craftsmanship",
    text: "Every piece is inspected by hand and finished with premium plating that's made to last, not tarnish.",
  },
  {
    icon: HandHeart,
    title: "Affordable Luxury",
    text: "Luxury-level design without the luxury markup. Beautiful jewelry should be within everyone's reach.",
  },
  {
    icon: Sparkles,
    title: "Timeless Design",
    text: "We design pieces that outlive trends — jewelry you'll reach for year after year, occasion after occasion.",
  },
  {
    icon: Leaf,
    title: "Thoughtful Sourcing",
    text: "Hypoallergenic materials, recycled packaging, and partners who share our standards.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="relative flex h-[52svh] min-h-[380px] items-center overflow-hidden">
        <img
          src={hero}
          alt="Elegant gold jewelry worn in warm natural light"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="container-lux relative text-center text-primary-foreground">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.35em] text-gold-light uppercase"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl"
          >
            Where Elegance Meets Everyday Style
          </motion.h1>
        </div>
      </section>

      <section className="container-lux grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={about}
            alt="Artisan hands crafting a gold pendant necklace at a workbench"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-3xl shadow-lift"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="eyebrow">The beginning</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Born from a simple belief
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Touch by Bel'voma is a luxury jewelry brand devoted to timeless
              elegance and refined craftsmanship. Every piece is designed to
              feel personal — a quiet celebration of the woman who wears it.
            </p>
            <p>
              We work with skilled artisans who share our obsession with detail:
              considered proportions, hand-finished settings, and materials
              chosen to last. The result is jewelry that carries the weight of a
              luxury house with the warmth of something made just for you.
            </p>
            <p>
              From everyday essentials to statement heirlooms, our collections
              are here to help you express your unique style — and touch every
              moment with a little more elegance.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-lux">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Our Values
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="card-lift rounded-2xl bg-card p-7 text-center shadow-soft"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-20 text-center sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto max-w-xl text-3xl font-semibold sm:text-4xl">
            Ready to find the piece that feels like you?
          </h2>
          <Link to="/shop" className="btn-gold mt-8">
            Explore the Collection
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
