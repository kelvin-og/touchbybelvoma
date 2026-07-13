//#region node_modules/.nitro/vite/services/ssr/assets/products-ZEpX92BZ.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var cat_earrings_default = "/assets/cat-earrings-CS8_5WnP.jpg";
var cat_necklaces_default = "/assets/cat-necklaces-CA35ESkp.jpg";
var cat_rings_default = "/assets/cat-rings-nwp7hGcZ.jpg";
var cat_bracelets_default = "/assets/cat-bracelets-Ddznn2Mk.jpg";
var cat_anklets_default = "/assets/cat-anklets-BvOqvkqX.jpg";
var cat_sets_default = "/assets/cat-sets-TzrZ12TK.jpg";
var prod_hoops_default = "/assets/prod-hoops-C6vI0mpG.jpg";
var prod_pearl_studs_default = "/assets/prod-pearl-studs-CgMQZG8m.jpg";
var prod_layered_necklace_default = "/assets/prod-layered-necklace-CuIfWTjk.jpg";
var prod_choker_default = "/assets/prod-choker-Bno77IGw.jpg";
var prod_signet_ring_default = "/assets/prod-signet-ring-C1y1igCU.jpg";
var prod_baguette_ring_default = "/assets/prod-baguette-ring-BiPlhGgy.jpg";
var prod_tennis_bracelet_default = "/assets/prod-tennis-bracelet-BcCZOvMg.jpg";
var prod_cuff_default = "/assets/prod-cuff-CAS_Upcn.jpg";
var products_exports = /* @__PURE__ */ __exportAll({
	categories: () => categories,
	formatPrice: () => formatPrice,
	getCediMultiplier: () => getCediMultiplier,
	getFreeShippingThreshold: () => getFreeShippingThreshold,
	getProduct: () => getProduct,
	products: () => products
});
var categories = [
	{
		slug: "earrings",
		name: "Earrings",
		image: cat_earrings_default
	},
	{
		slug: "necklaces",
		name: "Necklaces",
		image: cat_necklaces_default
	},
	{
		slug: "rings",
		name: "Rings",
		image: cat_rings_default
	},
	{
		slug: "bracelets",
		name: "Bracelets",
		image: cat_bracelets_default
	},
	{
		slug: "anklets",
		name: "Anklets",
		image: cat_anklets_default
	},
	{
		slug: "sets",
		name: "Sets",
		image: cat_sets_default
	}
];
var products = [
	{
		id: "aurelia-hoops",
		name: "Aurelia Gold Hoops",
		price: 42,
		category: "earrings",
		images: [prod_hoops_default, cat_earrings_default],
		colors: ["Gold", "Rose Gold"],
		material: "18k Gold Plated Brass",
		rating: 4.9,
		reviewCount: 128,
		isBestSeller: true,
		description: "Classic polished hoops that catch the light beautifully. Lightweight, hypoallergenic, and effortlessly elegant from morning meetings to evening plans."
	},
	{
		id: "perla-studs",
		name: "Perla Pearl Studs",
		price: 34,
		category: "earrings",
		images: [prod_pearl_studs_default, cat_earrings_default],
		colors: ["Ivory Pearl"],
		material: "Freshwater Pearl, 14k Gold Vermeil",
		rating: 4.8,
		reviewCount: 96,
		isBestSeller: true,
		description: "Timeless freshwater pearls set in delicate gold prongs. The everyday earring that whispers luxury."
	},
	{
		id: "celeste-drops",
		name: "Celeste Filigree Drops",
		price: 48,
		originalPrice: 62,
		category: "earrings",
		images: [cat_earrings_default, prod_pearl_studs_default],
		colors: ["Gold"],
		material: "18k Gold Plated, Cubic Zirconia",
		rating: 4.7,
		reviewCount: 54,
		description: "Intricate teardrop filigree earrings with pavé crystal detail. A statement piece for evenings that matter."
	},
	{
		id: "luna-layered",
		name: "Luna Layered Necklace",
		price: 58,
		category: "necklaces",
		images: [prod_layered_necklace_default, cat_necklaces_default],
		colors: ["Gold"],
		material: "18k Gold Plated Stainless Steel",
		rating: 4.9,
		reviewCount: 187,
		isBestSeller: true,
		description: "Three delicate chains with a vintage coin pendant. Pre-layered so it never tangles — the effortless centerpiece of any neckline."
	},
	{
		id: "solitaire-pendant",
		name: "Solitaire Crystal Pendant",
		price: 39,
		category: "necklaces",
		images: [prod_choker_default, cat_necklaces_default],
		colors: ["Gold", "Silver"],
		material: "14k Gold Vermeil, Cubic Zirconia",
		rating: 4.8,
		reviewCount: 142,
		isNew: true,
		description: "A single brilliant crystal suspended on a whisper-thin chain. Minimalism at its most radiant."
	},
	{
		id: "mini-coin",
		name: "Mini Coin Necklace",
		price: 36,
		category: "necklaces",
		images: [cat_necklaces_default, prod_layered_necklace_default],
		colors: ["Gold"],
		material: "18k Gold Plated Brass",
		rating: 4.6,
		reviewCount: 73,
		description: "A dainty disc pendant on a fine cable chain. Wear it alone or layer it — it plays well with everything."
	},
	{
		id: "vera-signet",
		name: "Vera Signet Ring",
		price: 32,
		category: "rings",
		images: [prod_signet_ring_default, cat_rings_default],
		colors: ["Gold"],
		material: "18k Gold Plated Stainless Steel",
		rating: 4.7,
		reviewCount: 88,
		isNew: true,
		description: "A modern open-circle signet with a clean sculptural profile. Quietly confident, endlessly wearable."
	},
	{
		id: "bijou-baguette",
		name: "Bijou Baguette Ring",
		price: 29,
		category: "rings",
		images: [prod_baguette_ring_default, cat_rings_default],
		colors: ["Gold", "Rose Gold"],
		material: "14k Gold Vermeil, Cubic Zirconia",
		rating: 4.8,
		reviewCount: 111,
		isBestSeller: true,
		description: "A single baguette-cut crystal on a slim band. Subtle sparkle designed for stacking or solo wear."
	},
	{
		id: "trio-stack",
		name: "Trio Pavé Stack Set",
		price: 54,
		originalPrice: 68,
		category: "rings",
		images: [cat_rings_default, prod_baguette_ring_default],
		colors: ["Gold"],
		material: "18k Gold Plated, Cubic Zirconia",
		rating: 4.9,
		reviewCount: 67,
		description: "Three complementary pavé bands sold as a set. Wear together for full sparkle or split across fingers."
	},
	{
		id: "eterna-tennis",
		name: "Eterna Tennis Bracelet",
		price: 64,
		category: "bracelets",
		images: [prod_tennis_bracelet_default, cat_bracelets_default],
		colors: ["Gold", "Silver"],
		material: "18k Gold Plated, Cubic Zirconia",
		rating: 4.9,
		reviewCount: 154,
		isBestSeller: true,
		description: "A continuous line of bezel-set crystals. The bracelet that turns a plain wrist into an occasion."
	},
	{
		id: "sculpt-cuff",
		name: "Sculpted Dome Cuff",
		price: 46,
		category: "bracelets",
		images: [prod_cuff_default, cat_bracelets_default],
		colors: ["Gold"],
		material: "18k Gold Plated Brass, Hammered Finish",
		rating: 4.7,
		reviewCount: 49,
		isNew: true,
		description: "A hand-hammered dome cuff with an organic texture that catches light from every angle."
	},
	{
		id: "chaine-duo",
		name: "Chaîne Duo Bangles",
		price: 44,
		category: "bracelets",
		images: [cat_bracelets_default, prod_cuff_default],
		colors: ["Gold"],
		material: "18k Gold Plated Stainless Steel",
		rating: 4.6,
		reviewCount: 38,
		description: "A sleek bangle paired with a curb-chain bracelet. Designed to be worn together, beautiful apart."
	},
	{
		id: "stella-anklet",
		name: "Stella Star Anklet",
		price: 26,
		category: "anklets",
		images: [cat_anklets_default],
		colors: ["Gold"],
		material: "18k Gold Plated Brass",
		rating: 4.8,
		reviewCount: 62,
		isNew: true,
		description: "A fine chain anklet dotted with tiny stars. Summer skin's favorite accessory, waterproof plating included."
	},
	{
		id: "riviera-set",
		name: "Riviera Jewelry Set",
		price: 89,
		originalPrice: 110,
		category: "sets",
		images: [cat_sets_default, prod_layered_necklace_default],
		colors: ["Gold"],
		material: "18k Gold Plated, Crystal",
		rating: 4.9,
		reviewCount: 91,
		isBestSeller: true,
		description: "Matching necklace, earrings, and ring presented in our signature gift box. The complete look — or the perfect gift."
	}
];
var getProduct = (id) => products.find((p) => p.id === id);
var getCediMultiplier = () => {
	if (typeof window !== "undefined") {
		const stored = window.localStorage.getItem("tbb_config_cedi_multiplier");
		if (stored) {
			const parsed = parseFloat(stored);
			if (!isNaN(parsed) && parsed > 0) return parsed;
		}
	}
	return 15;
};
var getFreeShippingThreshold = () => {
	if (typeof window !== "undefined") {
		const stored = window.localStorage.getItem("tbb_config_free_shipping");
		if (stored) {
			const parsed = parseInt(stored);
			if (!isNaN(parsed) && parsed >= 0) return parsed;
		}
	}
	return 1e3;
};
var formatPrice = (n) => {
	return `GH₵ ${(n * getCediMultiplier()).toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})}`;
};
//#endregion
export { getProduct as a, getFreeShippingThreshold as i, formatPrice as n, products as o, getCediMultiplier as r, products_exports as s, categories as t };
