import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Touch by Bel'voma" },
      {
        name: "description",
        content:
          "Get in touch with Touch by Bel'voma. Questions about orders, sizing or styling? We'd love to help.",
      },
      { property: "og:title", content: "Contact Us — Touch by Bel'voma" },
      {
        property: "og:description",
        content:
          "Questions about orders, sizing or styling? We'd love to help.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-lux pt-28 pb-20 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="eyebrow">We'd love to hear from you</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Questions about an order, sizing, or styling advice? Our team replies
          within one business day.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-card p-7 shadow-soft lg:col-span-3"
        >
          {sent ? (
            <div className="grid h-full min-h-64 place-items-center text-center">
              <div>
                <p className="font-display text-2xl font-semibold text-gold">
                  Message sent ✨
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out — we'll be in touch shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-[0.15em] uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-[0.15em] uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                  placeholder="Tell us more…"
                />
              </div>
              <button type="submit" className="btn-gold justify-self-start">
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="rounded-3xl bg-ivory p-7">
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:hello@naasjewelry.com"
                    className="text-muted-foreground hover:text-gold"
                  >
                    hello@naasjewelry.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-muted-foreground hover:text-gold"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Studio</p>
                  <p className="text-muted-foreground">
                    123 Elegance Avenue, Suite 4<br />
                    New York, NY 10001
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex gap-3 border-t border-border pt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-soft">
            <iframe
              title="Touch by Bel'voma store location map"
              src="https://www.google.com/maps?q=New+York,NY&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
