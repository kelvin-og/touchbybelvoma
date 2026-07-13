import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ivory">
      <div className="container-lux grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Touch by Bel'voma"
            className="h-16 w-auto"
            width={500}
            height={275}
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Luxury jewelry crafted to elevate your everyday style — timeless
            elegance for every woman, every moment.
          </p>
          <div className="mt-5 flex gap-3">
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

        <nav aria-label="Shop links">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase">
            Shop
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link
                to="/shop"
                search={{ category: "earrings" }}
                className="hover:text-gold"
              >
                Earrings
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                search={{ category: "necklaces" }}
                className="hover:text-gold"
              >
                Necklaces
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                search={{ category: "rings" }}
                className="hover:text-gold"
              >
                Rings
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                search={{ category: "bracelets" }}
                className="hover:text-gold"
              >
                Bracelets
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                search={{ category: "sets" }}
                className="hover:text-gold"
              >
                Sets
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company links">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-gold">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-gold">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gold">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase">
            Customer Care
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>Free shipping over $75</li>
            <li>30-day easy returns</li>
            <li>1-year plating warranty</li>
            <li>hello@naasjewelry.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <p className="container-lux text-center text-xs text-muted-foreground flex justify-center items-center gap-1.5 flex-wrap">
          <span>© 2026 Touch by Bel'voma. All Rights Reserved.</span>
          <span className="text-muted-foreground/30">|</span>
          <Link
            to="/superadmin/login"
            className="hover:text-gold transition-colors font-medium"
          >
            System Core
          </Link>
        </p>
      </div>
    </footer>
  );
}
