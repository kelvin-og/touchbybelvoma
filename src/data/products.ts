import catEarrings from "@/assets/cat-earrings.jpg";
import catNecklaces from "@/assets/cat-necklaces.jpg";
import catRings from "@/assets/cat-rings.jpg";
import catBracelets from "@/assets/cat-bracelets.jpg";
import catAnklets from "@/assets/cat-anklets.jpg";
import catSets from "@/assets/cat-sets.jpg";
import prodHoops from "@/assets/prod-hoops.jpg";
import prodPearlStuds from "@/assets/prod-pearl-studs.jpg";
import prodLayered from "@/assets/prod-layered-necklace.jpg";
import prodChoker from "@/assets/prod-choker.jpg";
import prodSignet from "@/assets/prod-signet-ring.jpg";
import prodBaguette from "@/assets/prod-baguette-ring.jpg";
import prodTennis from "@/assets/prod-tennis-bracelet.jpg";
import prodCuff from "@/assets/prod-cuff.jpg";

export type Category = "earrings" | "necklaces" | "rings" | "bracelets" | "anklets" | "sets";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  colors: string[];
  material: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
}

export const categories: { slug: Category; name: string; image: string }[] = [
  { slug: "earrings", name: "Earrings", image: catEarrings },
  { slug: "necklaces", name: "Necklaces", image: catNecklaces },
  { slug: "rings", name: "Rings", image: catRings },
  { slug: "bracelets", name: "Bracelets", image: catBracelets },
  { slug: "anklets", name: "Anklets", image: catAnklets },
  { slug: "sets", name: "Sets", image: catSets },
];

export const products: Product[] = [
  {
    id: "aurelia-hoops",
    name: "Aurelia Gold Hoops",
    price: 42,
    category: "earrings",
    images: [prodHoops, catEarrings],
    colors: ["Gold", "Rose Gold"],
    material: "18k Gold Plated Brass",
    rating: 4.9,
    reviewCount: 128,
    isBestSeller: true,
    description:
      "Classic polished hoops that catch the light beautifully. Lightweight, hypoallergenic, and effortlessly elegant from morning meetings to evening plans.",
  },
  {
    id: "perla-studs",
    name: "Perla Pearl Studs",
    price: 34,
    category: "earrings",
    images: [prodPearlStuds, catEarrings],
    colors: ["Ivory Pearl"],
    material: "Freshwater Pearl, 14k Gold Vermeil",
    rating: 4.8,
    reviewCount: 96,
    isBestSeller: true,
    description:
      "Timeless freshwater pearls set in delicate gold prongs. The everyday earring that whispers luxury.",
  },
  {
    id: "celeste-drops",
    name: "Celeste Filigree Drops",
    price: 48,
    originalPrice: 62,
    category: "earrings",
    images: [catEarrings, prodPearlStuds],
    colors: ["Gold"],
    material: "18k Gold Plated, Cubic Zirconia",
    rating: 4.7,
    reviewCount: 54,
    description:
      "Intricate teardrop filigree earrings with pavé crystal detail. A statement piece for evenings that matter.",
  },
  {
    id: "luna-layered",
    name: "Luna Layered Necklace",
    price: 58,
    category: "necklaces",
    images: [prodLayered, catNecklaces],
    colors: ["Gold"],
    material: "18k Gold Plated Stainless Steel",
    rating: 4.9,
    reviewCount: 187,
    isBestSeller: true,
    description:
      "Three delicate chains with a vintage coin pendant. Pre-layered so it never tangles — the effortless centerpiece of any neckline.",
  },
  {
    id: "solitaire-pendant",
    name: "Solitaire Crystal Pendant",
    price: 39,
    category: "necklaces",
    images: [prodChoker, catNecklaces],
    colors: ["Gold", "Silver"],
    material: "14k Gold Vermeil, Cubic Zirconia",
    rating: 4.8,
    reviewCount: 142,
    isNew: true,
    description:
      "A single brilliant crystal suspended on a whisper-thin chain. Minimalism at its most radiant.",
  },
  {
    id: "mini-coin",
    name: "Mini Coin Necklace",
    price: 36,
    category: "necklaces",
    images: [catNecklaces, prodLayered],
    colors: ["Gold"],
    material: "18k Gold Plated Brass",
    rating: 4.6,
    reviewCount: 73,
    description:
      "A dainty disc pendant on a fine cable chain. Wear it alone or layer it — it plays well with everything.",
  },
  {
    id: "vera-signet",
    name: "Vera Signet Ring",
    price: 32,
    category: "rings",
    images: [prodSignet, catRings],
    colors: ["Gold"],
    material: "18k Gold Plated Stainless Steel",
    rating: 4.7,
    reviewCount: 88,
    isNew: true,
    description:
      "A modern open-circle signet with a clean sculptural profile. Quietly confident, endlessly wearable.",
  },
  {
    id: "bijou-baguette",
    name: "Bijou Baguette Ring",
    price: 29,
    category: "rings",
    images: [prodBaguette, catRings],
    colors: ["Gold", "Rose Gold"],
    material: "14k Gold Vermeil, Cubic Zirconia",
    rating: 4.8,
    reviewCount: 111,
    isBestSeller: true,
    description:
      "A single baguette-cut crystal on a slim band. Subtle sparkle designed for stacking or solo wear.",
  },
  {
    id: "trio-stack",
    name: "Trio Pavé Stack Set",
    price: 54,
    originalPrice: 68,
    category: "rings",
    images: [catRings, prodBaguette],
    colors: ["Gold"],
    material: "18k Gold Plated, Cubic Zirconia",
    rating: 4.9,
    reviewCount: 67,
    description:
      "Three complementary pavé bands sold as a set. Wear together for full sparkle or split across fingers.",
  },
  {
    id: "eterna-tennis",
    name: "Eterna Tennis Bracelet",
    price: 64,
    category: "bracelets",
    images: [prodTennis, catBracelets],
    colors: ["Gold", "Silver"],
    material: "18k Gold Plated, Cubic Zirconia",
    rating: 4.9,
    reviewCount: 154,
    isBestSeller: true,
    description:
      "A continuous line of bezel-set crystals. The bracelet that turns a plain wrist into an occasion.",
  },
  {
    id: "sculpt-cuff",
    name: "Sculpted Dome Cuff",
    price: 46,
    category: "bracelets",
    images: [prodCuff, catBracelets],
    colors: ["Gold"],
    material: "18k Gold Plated Brass, Hammered Finish",
    rating: 4.7,
    reviewCount: 49,
    isNew: true,
    description:
      "A hand-hammered dome cuff with an organic texture that catches light from every angle.",
  },
  {
    id: "chaine-duo",
    name: "Chaîne Duo Bangles",
    price: 44,
    category: "bracelets",
    images: [catBracelets, prodCuff],
    colors: ["Gold"],
    material: "18k Gold Plated Stainless Steel",
    rating: 4.6,
    reviewCount: 38,
    description:
      "A sleek bangle paired with a curb-chain bracelet. Designed to be worn together, beautiful apart.",
  },
  {
    id: "stella-anklet",
    name: "Stella Star Anklet",
    price: 26,
    category: "anklets",
    images: [catAnklets],
    colors: ["Gold"],
    material: "18k Gold Plated Brass",
    rating: 4.8,
    reviewCount: 62,
    isNew: true,
    description:
      "A fine chain anklet dotted with tiny stars. Summer skin's favorite accessory, waterproof plating included.",
  },
  {
    id: "riviera-set",
    name: "Riviera Jewelry Set",
    price: 89,
    originalPrice: 110,
    category: "sets",
    images: [catSets, prodLayered],
    colors: ["Gold"],
    material: "18k Gold Plated, Crystal",
    rating: 4.9,
    reviewCount: 91,
    isBestSeller: true,
    description:
      "Matching necklace, earrings, and ring presented in our signature gift box. The complete look — or the perfect gift.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getCediMultiplier = (): number => {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("tbb_config_cedi_multiplier");
    if (stored) {
      const parsed = parseFloat(stored);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
  }
  return 15;
};

export const getFreeShippingThreshold = (): number => {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("tbb_config_free_shipping");
    if (stored) {
      const parsed = parseInt(stored);
      if (!isNaN(parsed) && parsed >= 0) return parsed;
    }
  }
  return 1000;
};

export const formatPrice = (n: number) => {
  const cediAmount = n * getCediMultiplier();
  return `GH₵ ${cediAmount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
