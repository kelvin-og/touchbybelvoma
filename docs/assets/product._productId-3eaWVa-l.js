import { n as e, s as t, t as n } from "./jsx-runtime-D8nDyRPw.js";
import { t as r } from "./link-MzsLFx_h.js";
import { t as i } from "./product._productId-DJmQc4Bp.js";
import { n as a } from "./store-D4zR_fkf.js";
import { t as o } from "./proxy-DkmRD95V.js";
import { t as s } from "./minus-BbksUQKY.js";
import { t as c } from "./plus-DK9MZKQp.js";
import { t as l } from "./rotate-ccw-CeOpUHCT.js";
import { t as u } from "./shield-check-D_i7EwFT.js";
import { t as d } from "./star-vwdllOWM.js";
import { t as f } from "./truck-BLXXFY6c.js";
import { n as p, o as m } from "./products-pUvZdLaj.js";
import { c as h, d as g } from "./index-C7L7o5NO.js";
import { t as _ } from "./ProductCard-BLNj-_uL.js";
var v = t(e()),
  y = n(),
  b = [
    {
      name: `Danielle O.`,
      rating: 5,
      text: `Exceeded my expectations — the finish is beautiful and it hasn't tarnished after months of daily wear.`,
    },
    {
      name: `Sophia M.`,
      rating: 5,
      text: `Arrived in the prettiest packaging. Feels much more expensive than it is.`,
    },
    {
      name: `Ruth B.`,
      rating: 4,
      text: `Lovely piece, exactly as pictured. Shipping took a few extra days but worth the wait.`,
    },
  ];
function x() {
  let { product: e } = i.useLoaderData(),
    { addToCart: t, toggleWishlist: n, isWishlisted: x } = a(),
    [S, C] = (0, v.useState)(0),
    [w, T] = (0, v.useState)(1),
    [E, D] = (0, v.useState)(e.colors[0]),
    O = x(e.id),
    k = m.filter((t) => t.category === e.category && t.id !== e.id).slice(0, 4),
    A = m
      .filter((t) => t.category !== e.category)
      .sort((e, t) => t.reviewCount - e.reviewCount)
      .slice(0, 4);
  return (0, y.jsxs)(`div`, {
    className: `container-lux pt-28 pb-20 sm:pt-32`,
    children: [
      (0, y.jsxs)(`nav`, {
        "aria-label": `Breadcrumb`,
        className: `text-xs text-muted-foreground`,
        children: [
          (0, y.jsx)(r, { to: `/`, className: `hover:text-gold`, children: `Home` }),
          (0, y.jsx)(`span`, { className: `mx-2`, children: `/` }),
          (0, y.jsx)(r, {
            to: `/shop`,
            search: { category: e.category },
            className: `capitalize hover:text-gold`,
            children: e.category,
          }),
          (0, y.jsx)(`span`, { className: `mx-2`, children: `/` }),
          (0, y.jsx)(`span`, { className: `text-foreground`, children: e.name }),
        ],
      }),
      (0, y.jsxs)(`div`, {
        className: `mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16`,
        children: [
          (0, y.jsxs)(o.div, {
            initial: { opacity: 0, x: -24 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            children: [
              (0, y.jsx)(`div`, {
                className: `group overflow-hidden rounded-3xl bg-ivory shadow-soft`,
                children: (0, y.jsx)(
                  `img`,
                  {
                    src: e.images[S],
                    alt: e.name,
                    width: 900,
                    height: 1125,
                    className: `aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-115`,
                  },
                  S,
                ),
              }),
              e.images.length > 1 &&
                (0, y.jsx)(`div`, {
                  className: `mt-4 flex gap-3`,
                  children: e.images.map((e, t) =>
                    (0, y.jsx)(
                      `button`,
                      {
                        onClick: () => C(t),
                        "aria-label": `View image ${t + 1}`,
                        className: `overflow-hidden rounded-xl border-2 transition-all ${t === S ? `border-gold` : `border-transparent opacity-70 hover:opacity-100`}`,
                        children: (0, y.jsx)(`img`, {
                          src: e,
                          alt: ``,
                          loading: `lazy`,
                          width: 80,
                          height: 80,
                          className: `h-20 w-20 object-cover`,
                        }),
                      },
                      t,
                    ),
                  ),
                }),
            ],
          }),
          (0, y.jsxs)(o.div, {
            initial: { opacity: 0, x: 24 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            children: [
              (0, y.jsx)(`p`, { className: `eyebrow`, children: e.category }),
              (0, y.jsx)(`h1`, {
                className: `mt-2 text-3xl font-semibold sm:text-4xl`,
                children: e.name,
              }),
              (0, y.jsxs)(`div`, {
                className: `mt-3 flex items-center gap-2`,
                children: [
                  (0, y.jsx)(`span`, {
                    className: `flex gap-0.5 text-gold`,
                    "aria-label": `Rated ${e.rating} out of 5`,
                    children: Array.from({ length: 5 }).map((t, n) =>
                      (0, y.jsx)(
                        d,
                        {
                          className: `h-4 w-4 ${n < Math.round(e.rating) ? `fill-current` : `opacity-30`}`,
                        },
                        n,
                      ),
                    ),
                  }),
                  (0, y.jsxs)(`span`, {
                    className: `text-sm text-muted-foreground`,
                    children: [e.rating, ` · `, e.reviewCount, ` reviews`],
                  }),
                ],
              }),
              (0, y.jsxs)(`div`, {
                className: `mt-5 flex items-baseline gap-3`,
                children: [
                  (0, y.jsx)(`span`, { className: `text-3xl font-semibold`, children: p(e.price) }),
                  e.originalPrice &&
                    (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)(`span`, {
                          className: `text-lg text-muted-foreground line-through`,
                          children: p(e.originalPrice),
                        }),
                        (0, y.jsxs)(`span`, {
                          className: `rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-semibold text-destructive`,
                          children: [`Save `, p(e.originalPrice - e.price)],
                        }),
                      ],
                    }),
                ],
              }),
              (0, y.jsx)(`p`, {
                className: `mt-5 leading-relaxed text-muted-foreground`,
                children: e.description,
              }),
              (0, y.jsxs)(`div`, {
                className: `mt-6`,
                children: [
                  (0, y.jsxs)(`p`, {
                    className: `text-xs font-semibold tracking-[0.15em] uppercase`,
                    children: [
                      `Finish: `,
                      (0, y.jsx)(`span`, {
                        className: `font-normal text-muted-foreground`,
                        children: E,
                      }),
                    ],
                  }),
                  (0, y.jsx)(`div`, {
                    className: `mt-2 flex gap-2`,
                    children: e.colors.map((e) =>
                      (0, y.jsx)(
                        `button`,
                        {
                          onClick: () => D(e),
                          className: `rounded-full border px-4 py-1.5 text-xs transition-all ${e === E ? `border-gold bg-gold/10 text-foreground` : `border-border text-muted-foreground hover:border-gold`}`,
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, y.jsxs)(`div`, {
                className: `mt-7 flex flex-wrap items-center gap-3`,
                children: [
                  (0, y.jsxs)(`div`, {
                    className: `flex items-center rounded-full border border-border`,
                    children: [
                      (0, y.jsx)(`button`, {
                        onClick: () => T((e) => Math.max(1, e - 1)),
                        "aria-label": `Decrease quantity`,
                        className: `grid h-11 w-11 place-items-center hover:text-gold`,
                        children: (0, y.jsx)(s, { className: `h-4 w-4` }),
                      }),
                      (0, y.jsx)(`span`, {
                        className: `w-8 text-center text-sm font-medium`,
                        children: w,
                      }),
                      (0, y.jsx)(`button`, {
                        onClick: () => T((e) => e + 1),
                        "aria-label": `Increase quantity`,
                        className: `grid h-11 w-11 place-items-center hover:text-gold`,
                        children: (0, y.jsx)(c, { className: `h-4 w-4` }),
                      }),
                    ],
                  }),
                  (0, y.jsxs)(`button`, {
                    onClick: () => t(e.id, w),
                    className: `btn-gold flex-1 sm:flex-none`,
                    children: [(0, y.jsx)(h, { className: `h-4 w-4` }), ` Add to Cart`],
                  }),
                  (0, y.jsx)(`button`, {
                    onClick: () => n(e.id),
                    "aria-label": O ? `Remove from wishlist` : `Add to wishlist`,
                    className: `grid h-12 w-12 place-items-center rounded-full border transition-all hover:scale-105 ${O ? `border-gold text-gold` : `border-border`}`,
                    children: (0, y.jsx)(g, { className: `h-5 w-5 ${O ? `fill-current` : ``}` }),
                  }),
                ],
              }),
              (0, y.jsxs)(`div`, {
                className: `mt-8 space-y-4 rounded-2xl bg-ivory p-5 text-sm`,
                children: [
                  (0, y.jsxs)(`p`, {
                    children: [
                      (0, y.jsx)(`span`, { className: `font-semibold`, children: `Materials:` }),
                      ` `,
                      (0, y.jsx)(`span`, {
                        className: `text-muted-foreground`,
                        children: e.material,
                      }),
                    ],
                  }),
                  (0, y.jsxs)(`p`, {
                    children: [
                      (0, y.jsx)(`span`, { className: `font-semibold`, children: `Care:` }),
                      ` `,
                      (0, y.jsx)(`span`, {
                        className: `text-muted-foreground`,
                        children: `Keep dry, avoid perfumes and lotions, store in the provided pouch. Polish gently with a soft cloth.`,
                      }),
                    ],
                  }),
                  (0, y.jsxs)(`div`, {
                    className: `grid gap-3 border-t border-border pt-4 sm:grid-cols-3`,
                    children: [
                      (0, y.jsxs)(`p`, {
                        className: `flex items-center gap-2 text-xs text-muted-foreground`,
                        children: [
                          (0, y.jsx)(f, { className: `h-4 w-4 shrink-0 text-gold` }),
                          ` Free shipping over $75`,
                        ],
                      }),
                      (0, y.jsxs)(`p`, {
                        className: `flex items-center gap-2 text-xs text-muted-foreground`,
                        children: [
                          (0, y.jsx)(l, { className: `h-4 w-4 shrink-0 text-gold` }),
                          ` 30-day returns`,
                        ],
                      }),
                      (0, y.jsxs)(`p`, {
                        className: `flex items-center gap-2 text-xs text-muted-foreground`,
                        children: [
                          (0, y.jsx)(u, { className: `h-4 w-4 shrink-0 text-gold` }),
                          ` 1-year warranty`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, y.jsxs)(`section`, {
        className: `mt-20`,
        children: [
          (0, y.jsx)(`h2`, {
            className: `text-2xl font-semibold sm:text-3xl`,
            children: `Customer Reviews`,
          }),
          (0, y.jsx)(`div`, {
            className: `mt-8 grid gap-5 md:grid-cols-3`,
            children: b.map((e, t) =>
              (0, y.jsxs)(
                o.figure,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: t * 0.08 },
                  className: `rounded-2xl border border-border bg-card p-6`,
                  children: [
                    (0, y.jsx)(`span`, {
                      className: `flex gap-0.5 text-gold`,
                      "aria-label": `${e.rating} stars`,
                      children: Array.from({ length: 5 }).map((t, n) =>
                        (0, y.jsx)(
                          d,
                          {
                            className: `h-3.5 w-3.5 ${n < e.rating ? `fill-current` : `opacity-30`}`,
                          },
                          n,
                        ),
                      ),
                    }),
                    (0, y.jsx)(`blockquote`, {
                      className: `mt-3 text-sm text-muted-foreground`,
                      children: e.text,
                    }),
                    (0, y.jsx)(`figcaption`, {
                      className: `mt-4 text-sm font-semibold`,
                      children: e.name,
                    }),
                  ],
                },
                e.name,
              ),
            ),
          }),
        ],
      }),
      k.length > 0 &&
        (0, y.jsxs)(`section`, {
          className: `mt-20`,
          children: [
            (0, y.jsx)(`h2`, {
              className: `text-2xl font-semibold sm:text-3xl`,
              children: `You May Also Love`,
            }),
            (0, y.jsx)(`div`, {
              className: `mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4`,
              children: k.map((e, t) => (0, y.jsx)(_, { product: e, index: t }, e.id)),
            }),
          ],
        }),
      (0, y.jsxs)(`section`, {
        className: `mt-20`,
        children: [
          (0, y.jsx)(`h2`, {
            className: `text-2xl font-semibold sm:text-3xl`,
            children: `Frequently Bought Together`,
          }),
          (0, y.jsx)(`div`, {
            className: `mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4`,
            children: A.map((e, t) => (0, y.jsx)(_, { product: e, index: t }, e.id)),
          }),
        ],
      }),
    ],
  });
}
export { x as component };
