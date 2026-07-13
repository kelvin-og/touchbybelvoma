import { n as e, s as t, t as n } from "./jsx-runtime-D8nDyRPw.js";
import { t as r } from "./link-MzsLFx_h.js";
import { t as i } from "./useNavigate-OrW1W3oF.js";
import { n as a } from "./store-D4zR_fkf.js";
import { E as o, t as s } from "./proxy-DkmRD95V.js";
import { t as c } from "./arrow-right-BmTjqXc8.js";
import { n as l, t as u } from "./log-out-CaZYO5lF.js";
import { n as d, t as f } from "./settings-DpV_mSLA.js";
import { t as p } from "./map-pin-D_tDeDtV.js";
import { t as m } from "./shield-alert-DsogB24J.js";
import { t as h } from "./sparkles-C6yX4eVY.js";
import { t as g } from "./trash-2-CNqhW4qt.js";
import { n as _, o as v } from "./products-pUvZdLaj.js";
import { c as y, d as b, i as x, o as S } from "./index-C7L7o5NO.js";
var C = o(`award`, [
    [
      `path`,
      {
        d: `m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,
        key: `1yiouv`,
      },
    ],
    [`circle`, { cx: `12`, cy: `8`, r: `6`, key: `1vp47v` }],
  ]),
  ee = o(`history`, [
    [`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` }],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
    [`path`, { d: `M12 7v5l4 2`, key: `1fdv2h` }],
  ]),
  w = t(e()),
  T = n();
function E() {
  let e = i(),
    {
      user: t,
      logout: n,
      wishlist: o,
      recentlyViewed: E,
      addresses: D,
      orders: O,
      addAddress: k,
      deleteAddress: A,
      toggleWishlist: j,
      addToCart: M,
    } = a(),
    [N, P] = (0, w.useState)(`welcome`),
    [F, I] = (0, w.useState)(``),
    [L, R] = (0, w.useState)(``),
    [z, B] = (0, w.useState)(``),
    [V, H] = (0, w.useState)(``),
    [U, W] = (0, w.useState)(``),
    [G, K] = (0, w.useState)(`Greater Accra`),
    [q, J] = (0, w.useState)(``),
    [Y, X] = (0, w.useState)(!1);
  if (
    ((0, w.useEffect)(() => {
      if (!t) {
        let t = setTimeout(() => {
          e({ to: `/login` });
        }, 1e3);
        return () => clearTimeout(t);
      }
    }, [t, e]),
    !t)
  )
    return (0, T.jsxs)(`div`, {
      className: `min-h-screen bg-background flex flex-col justify-center items-center py-20`,
      children: [
        (0, T.jsx)(s.div, {
          animate: { rotate: 360 },
          transition: { duration: 1.2, repeat: 1 / 0, ease: `linear` },
          className: `h-10 w-10 border-t-2 border-gold rounded-full`,
        }),
        (0, T.jsx)(`p`, {
          className: `text-xs font-light text-muted-foreground mt-4 tracking-widest uppercase`,
          children: `Verifying secure luxury session...`,
        }),
      ],
    });
  let Z = () => {
      let e = new Date().getHours();
      return e < 12 ? `Good morning` : e < 17 ? `Good afternoon` : `Good evening`;
    },
    Q = (e) => {
      if (
        (e.preventDefault(), J(``), X(!1), !/^[A-Z]{2}-\d{3,4}-\d{4}$/.test(z.toUpperCase().trim()))
      ) {
        J(
          `Invalid Ghana Post GPS Address. Format must be XX-XXX-XXXX (e.g. GA-182-9902 or AK-0329-8120).`,
        );
        return;
      }
      if (L.trim().length < 9) {
        J(`Please enter a valid phone number.`);
        return;
      }
      (k({
        fullName: F,
        phone: L,
        gpsAddress: z.toUpperCase().trim(),
        streetAddress: V,
        city: U,
        region: G,
      }),
        X(!0),
        I(``),
        R(``),
        B(``),
        H(``),
        W(``),
        setTimeout(() => X(!1), 3e3));
    },
    $ = {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    };
  return (0, T.jsx)(`div`, {
    className: `min-h-screen bg-background py-32`,
    children: (0, T.jsxs)(`div`, {
      className: `container-lux`,
      children: [
        (0, T.jsxs)(`div`, {
          className: `border-b border-border pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6`,
          children: [
            (0, T.jsxs)(`div`, {
              children: [
                (0, T.jsxs)(`p`, { className: `eyebrow`, children: [Z(), `,`] }),
                (0, T.jsx)(`h1`, {
                  className: `text-4xl font-semibold text-foreground tracking-tight mt-1`,
                  children: t.name,
                }),
                (0, T.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-4 mt-2`,
                  children: [
                    (0, T.jsxs)(`span`, {
                      className: `text-[10px] tracking-widest bg-gold/10 text-gold font-medium px-3 py-1 rounded-full uppercase flex items-center gap-1`,
                      children: [(0, T.jsx)(h, { className: `h-3 w-3` }), ` Gold Tier Member`],
                    }),
                    (0, T.jsxs)(`span`, {
                      className: `text-[10px] tracking-widest text-muted-foreground font-light uppercase flex items-center gap-1`,
                      children: [
                        (0, T.jsx)(C, { className: `h-3.5 w-3.5` }),
                        ` 350 Bel'voma Points`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, T.jsxs)(`button`, {
              onClick: () => {
                (n(), e({ to: `/` }));
              },
              className: `flex items-center gap-2 text-xs font-light text-muted-foreground hover:text-gold transition-colors py-2 px-4 rounded-full border border-border hover:border-gold/30 bg-card`,
              children: [(0, T.jsx)(u, { className: `h-4 w-4` }), ` Sign Out`],
            }),
          ],
        }),
        (0, T.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start`,
          children: [
            (0, T.jsxs)(`nav`, {
              className: `flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border min-w-0 shrink-0`,
              children: [
                (0, T.jsxs)(`button`, {
                  onClick: () => P(`welcome`),
                  className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${N === `welcome` ? `bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1` : `text-muted-foreground hover:text-foreground`}`,
                  children: [(0, T.jsx)(S, { className: `h-4 w-4` }), ` Account Overview`],
                }),
                (0, T.jsxs)(`button`, {
                  onClick: () => P(`orders`),
                  className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${N === `orders` ? `bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1` : `text-muted-foreground hover:text-foreground`}`,
                  children: [(0, T.jsx)(y, { className: `h-4 w-4` }), ` Order History`],
                }),
                (0, T.jsxs)(`button`, {
                  onClick: () => P(`wishlist`),
                  className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${N === `wishlist` ? `bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1` : `text-muted-foreground hover:text-foreground`}`,
                  children: [(0, T.jsx)(b, { className: `h-4 w-4` }), ` Wishlist (`, o.length, `)`],
                }),
                (0, T.jsxs)(`button`, {
                  onClick: () => P(`addresses`),
                  className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${N === `addresses` ? `bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1` : `text-muted-foreground hover:text-foreground`}`,
                  children: [
                    (0, T.jsx)(p, { className: `h-4 w-4` }),
                    ` Addresses (`,
                    D.length,
                    `)`,
                  ],
                }),
                (0, T.jsxs)(`button`, {
                  onClick: () => P(`recent`),
                  className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${N === `recent` ? `bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1` : `text-muted-foreground hover:text-foreground`}`,
                  children: [(0, T.jsx)(ee, { className: `h-4 w-4` }), ` Recently Viewed`],
                }),
                (0, T.jsxs)(`button`, {
                  onClick: () => P(`settings`),
                  className: `flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${N === `settings` ? `bg-gold/10 text-gold border-l-2 border-gold lg:translate-x-1` : `text-muted-foreground hover:text-foreground`}`,
                  children: [(0, T.jsx)(f, { className: `h-4 w-4` }), ` Settings`],
                }),
              ],
            }),
            (0, T.jsx)(`div`, {
              className: `min-w-0`,
              children: (0, T.jsxs)(x, {
                mode: `wait`,
                children: [
                  N === `welcome` &&
                    (0, T.jsxs)(
                      s.div,
                      {
                        initial: `hidden`,
                        animate: `visible`,
                        exit: `hidden`,
                        variants: $,
                        className: `space-y-8`,
                        children: [
                          (0, T.jsxs)(`div`, {
                            className: `p-6 rounded-2xl bg-card border border-gold/15 shadow-soft flex flex-col md:flex-row justify-between items-start md:items-center gap-6`,
                            children: [
                              (0, T.jsxs)(`div`, {
                                children: [
                                  (0, T.jsx)(`h2`, {
                                    className: `text-xl font-semibold text-foreground`,
                                    children: `Welcome to your private lounge`,
                                  }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-xs font-light text-muted-foreground mt-1 max-w-md`,
                                    children: `As a valued member, enjoy complimentary shipping within Accra and Kumasi, early access to new seasonal edits, and 10% points accumulation.`,
                                  }),
                                ],
                              }),
                              (0, T.jsxs)(r, {
                                to: `/shop`,
                                className: `btn-gold shrink-0`,
                                children: [
                                  `Explore Edits `,
                                  (0, T.jsx)(c, { className: `h-4 w-4` }),
                                ],
                              }),
                            ],
                          }),
                          (0, T.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
                            children: [
                              (0, T.jsxs)(`div`, {
                                className: `p-6 bg-card border border-border rounded-xl`,
                                children: [
                                  (0, T.jsx)(d, { className: `h-5 w-5 text-gold mb-3` }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                    children: `Recent Purchases`,
                                  }),
                                  (0, T.jsxs)(`h3`, {
                                    className: `text-2xl font-semibold mt-1`,
                                    children: [O.length, ` Orders`],
                                  }),
                                  (0, T.jsx)(`button`, {
                                    onClick: () => P(`orders`),
                                    className: `text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block`,
                                    children: `View orders →`,
                                  }),
                                ],
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `p-6 bg-card border border-border rounded-xl`,
                                children: [
                                  (0, T.jsx)(b, { className: `h-5 w-5 text-gold mb-3` }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                    children: `Saved Pieces`,
                                  }),
                                  (0, T.jsxs)(`h3`, {
                                    className: `text-2xl font-semibold mt-1`,
                                    children: [o.length, ` Items`],
                                  }),
                                  (0, T.jsx)(`button`, {
                                    onClick: () => P(`wishlist`),
                                    className: `text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block`,
                                    children: `Manage list →`,
                                  }),
                                ],
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `p-6 bg-card border border-border rounded-xl`,
                                children: [
                                  (0, T.jsx)(p, { className: `h-5 w-5 text-gold mb-3` }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                    children: `Delivery Address`,
                                  }),
                                  (0, T.jsx)(`h3`, {
                                    className: `text-xl font-semibold mt-1 truncate`,
                                    children: D[0]?.gpsAddress || `No address saved`,
                                  }),
                                  (0, T.jsx)(`button`, {
                                    onClick: () => P(`addresses`),
                                    className: `text-[10px] text-gold font-medium uppercase tracking-wider mt-3 inline-block`,
                                    children: `Manage book →`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, T.jsxs)(`div`, {
                            className: `p-6 bg-charcoal text-primary-foreground rounded-2xl relative overflow-hidden`,
                            children: [
                              (0, T.jsx)(`div`, {
                                className: `absolute right-[-5%] top-[-20%] text-gold-light/10 pointer-events-none`,
                                children: (0, T.jsx)(h, { className: `h-48 w-48` }),
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `relative z-10`,
                                children: [
                                  (0, T.jsx)(`p`, {
                                    className: `text-[10px] text-gold-light tracking-[0.25em] uppercase font-semibold`,
                                    children: `Special Offer`,
                                  }),
                                  (0, T.jsx)(`h3`, {
                                    className: `text-2xl font-semibold mt-2`,
                                    children: `Unlock Your Welcome Gift`,
                                  }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-xs text-primary-foreground/75 mt-2 max-w-lg leading-relaxed`,
                                    children: `Spend your earned points on checkout or redeem them for a free Touch by Bel'voma Velvet Jewelry Roll on orders above GH₵ 1,000.`,
                                  }),
                                  (0, T.jsx)(`div`, {
                                    className: `mt-5 flex gap-2`,
                                    children: (0, T.jsx)(`span`, {
                                      className: `text-[10px] border border-gold-light/30 px-3 py-1 rounded-full text-gold-light font-medium uppercase`,
                                      children: `Code: TBBGIFT`,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      `welcome`,
                    ),
                  N === `orders` &&
                    (0, T.jsxs)(
                      s.div,
                      {
                        initial: `hidden`,
                        animate: `visible`,
                        exit: `hidden`,
                        variants: $,
                        className: `space-y-6`,
                        children: [
                          (0, T.jsx)(`h2`, {
                            className: `text-xl font-semibold text-foreground border-b border-border pb-4`,
                            children: `Purchase History`,
                          }),
                          O.length === 0
                            ? (0, T.jsxs)(`div`, {
                                className: `text-center py-12 border border-dashed border-border rounded-2xl`,
                                children: [
                                  (0, T.jsx)(y, {
                                    className: `h-10 w-10 text-muted-foreground/60 mx-auto mb-3`,
                                  }),
                                  (0, T.jsx)(`h3`, {
                                    className: `text-sm font-semibold`,
                                    children: `No orders yet`,
                                  }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground mt-1 max-w-xs mx-auto`,
                                    children: `Your jewelry box is empty. Begin shopping to build your timeless custom collection.`,
                                  }),
                                  (0, T.jsx)(r, {
                                    to: `/shop`,
                                    className: `btn-gold mt-6 inline-flex`,
                                    children: `Shop Jewelry`,
                                  }),
                                ],
                              })
                            : (0, T.jsx)(`div`, {
                                className: `space-y-6`,
                                children: O.map((e) =>
                                  (0, T.jsxs)(
                                    `div`,
                                    {
                                      className: `border border-border bg-card rounded-xl p-6 shadow-soft`,
                                      children: [
                                        (0, T.jsxs)(`div`, {
                                          className: `flex flex-wrap justify-between items-start border-b border-border pb-4 mb-4 gap-4`,
                                          children: [
                                            (0, T.jsxs)(`div`, {
                                              children: [
                                                (0, T.jsx)(`p`, {
                                                  className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                                  children: `Order Reference`,
                                                }),
                                                (0, T.jsxs)(`div`, {
                                                  className: `flex items-center gap-2 mt-0.5`,
                                                  children: [
                                                    (0, T.jsx)(`p`, {
                                                      className: `text-sm font-semibold`,
                                                      children: e.id,
                                                    }),
                                                    (0, T.jsx)(r, {
                                                      to: `/track-order`,
                                                      search: { orderId: e.id },
                                                      className: `text-[9px] text-gold border border-gold/20 hover:border-gold px-2 py-0.5 rounded-md uppercase font-semibold transition-colors`,
                                                      children: `Track`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, T.jsxs)(`div`, {
                                              children: [
                                                (0, T.jsx)(`p`, {
                                                  className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                                  children: `Transaction Date`,
                                                }),
                                                (0, T.jsx)(`p`, {
                                                  className: `text-xs font-light mt-0.5`,
                                                  children: e.date,
                                                }),
                                              ],
                                            }),
                                            (0, T.jsxs)(`div`, {
                                              children: [
                                                (0, T.jsx)(`p`, {
                                                  className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                                  children: `Payment Method`,
                                                }),
                                                (0, T.jsx)(`p`, {
                                                  className: `text-xs font-light mt-0.5`,
                                                  children: e.paymentMethod,
                                                }),
                                              ],
                                            }),
                                            (0, T.jsxs)(`div`, {
                                              children: [
                                                (0, T.jsx)(`p`, {
                                                  className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                                                  children: `Status`,
                                                }),
                                                (0, T.jsx)(`span`, {
                                                  className: `inline-block text-[10px] font-semibold uppercase tracking-widest mt-1 px-3 py-0.5 rounded-full ${e.status === `Delivered` ? `bg-green-100 text-green-700` : `bg-gold/10 text-gold`}`,
                                                  children: e.status,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, T.jsx)(`div`, {
                                          className: `space-y-4`,
                                          children: e.items.map((e, t) =>
                                            (0, T.jsxs)(
                                              `div`,
                                              {
                                                className: `flex gap-4 items-center justify-between`,
                                                children: [
                                                  (0, T.jsxs)(`div`, {
                                                    className: `flex items-center gap-3`,
                                                    children: [
                                                      (0, T.jsx)(`div`, {
                                                        className: `h-12 w-12 rounded-lg bg-accent overflow-hidden border border-border flex items-center justify-center shrink-0`,
                                                        children: (0, T.jsx)(`span`, {
                                                          className: `text-[10px] text-muted-foreground uppercase`,
                                                          children: `TBB`,
                                                        }),
                                                      }),
                                                      (0, T.jsxs)(`div`, {
                                                        children: [
                                                          (0, T.jsx)(`h4`, {
                                                            className: `text-xs font-medium text-foreground`,
                                                            children: e.name,
                                                          }),
                                                          (0, T.jsxs)(`p`, {
                                                            className: `text-[10px] text-muted-foreground mt-0.5`,
                                                            children: [`Quantity: `, e.qty],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, T.jsx)(`span`, {
                                                    className: `text-xs font-semibold text-gold`,
                                                    children: _(e.price * e.qty),
                                                  }),
                                                ],
                                              },
                                              t,
                                            ),
                                          ),
                                        }),
                                        (0, T.jsxs)(`div`, {
                                          className: `border-t border-border mt-4 pt-4 flex justify-between items-center text-xs`,
                                          children: [
                                            (0, T.jsx)(`span`, {
                                              className: `text-muted-foreground font-light`,
                                              children: `Delivery Digital Address`,
                                            }),
                                            (0, T.jsx)(`span`, {
                                              className: `font-semibold text-foreground uppercase`,
                                              children: e.shippingAddress.gpsAddress,
                                            }),
                                          ],
                                        }),
                                        (0, T.jsxs)(`div`, {
                                          className: `flex justify-between items-center border-t border-border mt-2 pt-2 text-sm`,
                                          children: [
                                            (0, T.jsx)(`span`, {
                                              className: `font-semibold text-foreground`,
                                              children: `Total Charged`,
                                            }),
                                            (0, T.jsx)(`span`, {
                                              className: `font-semibold text-gold`,
                                              children: _(e.total),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                        ],
                      },
                      `orders`,
                    ),
                  N === `wishlist` &&
                    (0, T.jsxs)(
                      s.div,
                      {
                        initial: `hidden`,
                        animate: `visible`,
                        exit: `hidden`,
                        variants: $,
                        className: `space-y-6`,
                        children: [
                          (0, T.jsx)(`h2`, {
                            className: `text-xl font-semibold text-foreground border-b border-border pb-4`,
                            children: `Saved Jewelry Pieces`,
                          }),
                          o.length === 0
                            ? (0, T.jsxs)(`div`, {
                                className: `text-center py-12 border border-dashed border-border rounded-2xl`,
                                children: [
                                  (0, T.jsx)(b, {
                                    className: `h-10 w-10 text-muted-foreground/60 mx-auto mb-3`,
                                  }),
                                  (0, T.jsx)(`h3`, {
                                    className: `text-sm font-semibold`,
                                    children: `Wishlist is empty`,
                                  }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground mt-1 max-w-xs mx-auto`,
                                    children: `Add items you desire to your wishlist while shopping to track availability.`,
                                  }),
                                  (0, T.jsx)(r, {
                                    to: `/shop`,
                                    className: `btn-gold mt-6 inline-flex`,
                                    children: `Shop Pieces`,
                                  }),
                                ],
                              })
                            : (0, T.jsx)(`div`, {
                                className: `grid grid-cols-1 md:grid-cols-2 gap-6`,
                                children: o.map((e) => {
                                  let t = v.find((t) => t.id === e);
                                  return t
                                    ? (0, T.jsxs)(
                                        `div`,
                                        {
                                          className: `p-4 bg-card border border-border rounded-xl flex gap-4 items-center justify-between shadow-soft`,
                                          children: [
                                            (0, T.jsxs)(`div`, {
                                              className: `flex items-center gap-3`,
                                              children: [
                                                (0, T.jsx)(`img`, {
                                                  src: t.images[0],
                                                  alt: t.name,
                                                  className: `h-16 w-16 rounded-lg object-cover shrink-0`,
                                                }),
                                                (0, T.jsxs)(`div`, {
                                                  children: [
                                                    (0, T.jsx)(`h3`, {
                                                      className: `text-xs font-semibold text-foreground`,
                                                      children: t.name,
                                                    }),
                                                    (0, T.jsx)(`p`, {
                                                      className: `text-xs font-semibold text-gold mt-1`,
                                                      children: _(t.price),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, T.jsxs)(`div`, {
                                              className: `flex items-center gap-2 shrink-0`,
                                              children: [
                                                (0, T.jsx)(`button`, {
                                                  onClick: () => M(t.id, 1),
                                                  className: `p-2 bg-gold/10 hover:bg-gold/25 text-gold text-[10px] rounded-lg font-medium uppercase transition-colors`,
                                                  children: `Add Cart`,
                                                }),
                                                (0, T.jsx)(`button`, {
                                                  onClick: () => j(t.id),
                                                  className: `p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors rounded-lg`,
                                                  "aria-label": `Delete item`,
                                                  children: (0, T.jsx)(g, { className: `h-4 w-4` }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        t.id,
                                      )
                                    : null;
                                }),
                              }),
                        ],
                      },
                      `wishlist`,
                    ),
                  N === `addresses` &&
                    (0, T.jsxs)(
                      s.div,
                      {
                        initial: `hidden`,
                        animate: `visible`,
                        exit: `hidden`,
                        variants: $,
                        className: `space-y-6`,
                        children: [
                          (0, T.jsx)(`h2`, {
                            className: `text-xl font-semibold text-foreground border-b border-border pb-4`,
                            children: `Saved Ghana Delivery Addresses`,
                          }),
                          (0, T.jsxs)(x, {
                            children: [
                              Y &&
                                (0, T.jsxs)(s.div, {
                                  initial: { opacity: 0, y: -5 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0 },
                                  className: `p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2`,
                                  children: [
                                    (0, T.jsx)(l, { className: `h-4 w-4` }),
                                    ` New delivery address saved successfully.`,
                                  ],
                                }),
                              q &&
                                (0, T.jsxs)(s.div, {
                                  initial: { opacity: 0, y: -5 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0 },
                                  className: `p-3 bg-destructive/5 border border-destructive/10 text-destructive text-xs font-light rounded-xl flex items-center gap-2`,
                                  children: [(0, T.jsx)(m, { className: `h-4 w-4` }), ` `, q],
                                }),
                            ],
                          }),
                          (0, T.jsxs)(`form`, {
                            onSubmit: Q,
                            className: `p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4`,
                            children: [
                              (0, T.jsx)(`h3`, {
                                className: `text-xs uppercase tracking-widest font-semibold text-gold`,
                                children: `Register New Address`,
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                                children: [
                                  (0, T.jsxs)(`div`, {
                                    children: [
                                      (0, T.jsx)(`label`, {
                                        className: `text-[10px] uppercase tracking-wider text-muted-foreground block mb-1`,
                                        children: `Recipient Name`,
                                      }),
                                      (0, T.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: F,
                                        onChange: (e) => I(e.target.value),
                                        placeholder: `e.g. Akosua Mensah`,
                                        className: `w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none`,
                                      }),
                                    ],
                                  }),
                                  (0, T.jsxs)(`div`, {
                                    children: [
                                      (0, T.jsx)(`label`, {
                                        className: `text-[10px] uppercase tracking-wider text-muted-foreground block mb-1`,
                                        children: `Contact Phone`,
                                      }),
                                      (0, T.jsx)(`input`, {
                                        type: `tel`,
                                        required: !0,
                                        value: L,
                                        onChange: (e) => R(e.target.value),
                                        placeholder: `e.g. +233 24 123 4567`,
                                        className: `w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `grid grid-cols-1 md:grid-cols-3 gap-4`,
                                children: [
                                  (0, T.jsxs)(`div`, {
                                    children: [
                                      (0, T.jsx)(`label`, {
                                        className: `text-[10px] uppercase tracking-wider text-muted-foreground block mb-1`,
                                        children: `Ghana Post Digital GPS Address`,
                                      }),
                                      (0, T.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: z,
                                        onChange: (e) => B(e.target.value),
                                        placeholder: `Format: GA-182-9902`,
                                        className: `w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case`,
                                      }),
                                    ],
                                  }),
                                  (0, T.jsxs)(`div`, {
                                    className: `md:col-span-2`,
                                    children: [
                                      (0, T.jsx)(`label`, {
                                        className: `text-[10px] uppercase tracking-wider text-muted-foreground block mb-1`,
                                        children: `Street Address`,
                                      }),
                                      (0, T.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: V,
                                        onChange: (e) => H(e.target.value),
                                        placeholder: `e.g. Ring Road East, Danquah Circle`,
                                        className: `w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                                children: [
                                  (0, T.jsxs)(`div`, {
                                    children: [
                                      (0, T.jsx)(`label`, {
                                        className: `text-[10px] uppercase tracking-wider text-muted-foreground block mb-1`,
                                        children: `City / Town`,
                                      }),
                                      (0, T.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: U,
                                        onChange: (e) => W(e.target.value),
                                        placeholder: `e.g. Osu, Accra`,
                                        className: `w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none`,
                                      }),
                                    ],
                                  }),
                                  (0, T.jsxs)(`div`, {
                                    children: [
                                      (0, T.jsx)(`label`, {
                                        className: `text-[10px] uppercase tracking-wider text-muted-foreground block mb-1`,
                                        children: `Region`,
                                      }),
                                      (0, T.jsx)(`select`, {
                                        value: G,
                                        onChange: (e) => K(e.target.value),
                                        className: `w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none`,
                                        children: [
                                          `Greater Accra`,
                                          `Ashanti`,
                                          `Eastern`,
                                          `Western`,
                                          `Central`,
                                          `Volta`,
                                          `Northern`,
                                          `Upper East`,
                                          `Upper West`,
                                          `Bono`,
                                          `Bono East`,
                                          `Ahafo`,
                                          `Oti`,
                                          `Savannah`,
                                          `North East`,
                                          `Western North`,
                                        ].map((e) =>
                                          (0, T.jsx)(`option`, { value: e, children: e }, e),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, T.jsx)(`button`, {
                                type: `submit`,
                                className: `btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase`,
                                children: `Add to Address Book`,
                              }),
                            ],
                          }),
                          (0, T.jsx)(`div`, {
                            className: `space-y-4 mt-6`,
                            children: D.map((e) =>
                              (0, T.jsxs)(
                                `div`,
                                {
                                  className: `p-5 border border-border rounded-xl bg-card flex justify-between items-start gap-4`,
                                  children: [
                                    (0, T.jsxs)(`div`, {
                                      className: `text-xs space-y-1`,
                                      children: [
                                        (0, T.jsx)(`p`, {
                                          className: `font-semibold text-foreground`,
                                          children: e.fullName,
                                        }),
                                        (0, T.jsxs)(`p`, {
                                          className: `text-muted-foreground font-light`,
                                          children: [e.streetAddress, `, `, e.city],
                                        }),
                                        (0, T.jsxs)(`p`, {
                                          className: `text-muted-foreground font-light`,
                                          children: [e.region, ` Region, Ghana`],
                                        }),
                                        (0, T.jsxs)(`p`, {
                                          className: `text-gold font-medium uppercase tracking-widest text-[10px] pt-1`,
                                          children: [`GPS Address: `, e.gpsAddress],
                                        }),
                                        (0, T.jsxs)(`p`, {
                                          className: `text-muted-foreground font-light text-[10px]`,
                                          children: [`Contact: `, e.phone],
                                        }),
                                      ],
                                    }),
                                    (0, T.jsx)(`button`, {
                                      onClick: () => A(e.id),
                                      className: `p-2 text-muted-foreground hover:text-red-500 transition-colors`,
                                      "aria-label": `Remove Address`,
                                      children: (0, T.jsx)(g, { className: `h-4 w-4` }),
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      },
                      `addresses`,
                    ),
                  N === `recent` &&
                    (0, T.jsxs)(
                      s.div,
                      {
                        initial: `hidden`,
                        animate: `visible`,
                        exit: `hidden`,
                        variants: $,
                        className: `space-y-6`,
                        children: [
                          (0, T.jsx)(`h2`, {
                            className: `text-xl font-semibold text-foreground border-b border-border pb-4`,
                            children: `Recently Viewed Pieces`,
                          }),
                          E.length === 0
                            ? (0, T.jsxs)(`div`, {
                                className: `text-center py-12 border border-dashed border-border rounded-2xl`,
                                children: [
                                  (0, T.jsx)(d, {
                                    className: `h-10 w-10 text-muted-foreground/60 mx-auto mb-3`,
                                  }),
                                  (0, T.jsx)(`h3`, {
                                    className: `text-sm font-semibold`,
                                    children: `No recent browsing`,
                                  }),
                                  (0, T.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground mt-1 max-w-xs mx-auto`,
                                    children: `Explore our timeless collections to build your browsing history.`,
                                  }),
                                  (0, T.jsx)(r, {
                                    to: `/shop`,
                                    className: `btn-gold mt-6 inline-flex`,
                                    children: `Browse Shop`,
                                  }),
                                ],
                              })
                            : (0, T.jsx)(`div`, {
                                className: `grid grid-cols-2 md:grid-cols-3 gap-6`,
                                children: E.map((e) => {
                                  let t = v.find((t) => t.id === e);
                                  return t
                                    ? (0, T.jsxs)(
                                        `div`,
                                        {
                                          className: `group card-lift relative border border-border bg-card rounded-xl overflow-hidden p-3 flex flex-col justify-between`,
                                          children: [
                                            (0, T.jsx)(`img`, {
                                              src: t.images[0],
                                              alt: t.name,
                                              className: `aspect-square w-full object-cover rounded-lg`,
                                            }),
                                            (0, T.jsxs)(`div`, {
                                              className: `mt-3`,
                                              children: [
                                                (0, T.jsx)(`h3`, {
                                                  className: `text-xs font-semibold text-foreground line-clamp-1`,
                                                  children: t.name,
                                                }),
                                                (0, T.jsx)(`p`, {
                                                  className: `text-xs font-semibold text-gold mt-0.5`,
                                                  children: _(t.price),
                                                }),
                                              ],
                                            }),
                                            (0, T.jsx)(r, {
                                              to: `/product/$productId`,
                                              params: { productId: t.id },
                                              className: `mt-3 text-[10px] text-center font-medium uppercase tracking-widest py-2 rounded-lg bg-accent/40 group-hover:bg-gold group-hover:text-white transition-colors`,
                                              children: `View Piece`,
                                            }),
                                          ],
                                        },
                                        t.id,
                                      )
                                    : null;
                                }),
                              }),
                        ],
                      },
                      `recent`,
                    ),
                  N === `settings` &&
                    (0, T.jsxs)(
                      s.div,
                      {
                        initial: `hidden`,
                        animate: `visible`,
                        exit: `hidden`,
                        variants: $,
                        className: `space-y-6`,
                        children: [
                          (0, T.jsx)(`h2`, {
                            className: `text-xl font-semibold text-foreground border-b border-border pb-4`,
                            children: `Account Settings`,
                          }),
                          (0, T.jsxs)(`div`, {
                            className: `p-5 border border-border bg-card rounded-xl space-y-4`,
                            children: [
                              (0, T.jsx)(`h3`, {
                                className: `text-xs font-semibold uppercase tracking-wider text-gold`,
                                children: `Membership Profile`,
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `text-xs font-light space-y-2`,
                                children: [
                                  (0, T.jsxs)(`p`, {
                                    children: [
                                      (0, T.jsx)(`span`, {
                                        className: `font-semibold`,
                                        children: `Registered Email:`,
                                      }),
                                      ` `,
                                      t.email,
                                    ],
                                  }),
                                  (0, T.jsxs)(`p`, {
                                    children: [
                                      (0, T.jsx)(`span`, {
                                        className: `font-semibold`,
                                        children: `Account Level:`,
                                      }),
                                      ` Premium Customer`,
                                    ],
                                  }),
                                  (0, T.jsxs)(`p`, {
                                    children: [
                                      (0, T.jsx)(`span`, {
                                        className: `font-semibold`,
                                        children: `Join Date:`,
                                      }),
                                      ` `,
                                      new Date(t.createdAt).toLocaleDateString(),
                                    ],
                                  }),
                                ],
                              }),
                              (0, T.jsxs)(`div`, {
                                className: `pt-4 border-t border-border space-y-3`,
                                children: [
                                  (0, T.jsxs)(`label`, {
                                    className: `flex items-center gap-3 cursor-pointer group text-xs`,
                                    children: [
                                      (0, T.jsx)(`input`, {
                                        type: `checkbox`,
                                        defaultChecked: !0,
                                        className: `w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold`,
                                      }),
                                      (0, T.jsx)(`span`, {
                                        className: `text-muted-foreground group-hover:text-foreground transition-colors font-light`,
                                        children: `Enable two-factor authentication (recommended)`,
                                      }),
                                    ],
                                  }),
                                  (0, T.jsxs)(`label`, {
                                    className: `flex items-center gap-3 cursor-pointer group text-xs`,
                                    children: [
                                      (0, T.jsx)(`input`, {
                                        type: `checkbox`,
                                        defaultChecked: !0,
                                        className: `w-3.5 h-3.5 border-border rounded text-gold focus:ring-gold`,
                                      }),
                                      (0, T.jsx)(`span`, {
                                        className: `text-muted-foreground group-hover:text-foreground transition-colors font-light`,
                                        children: `Subscribe to Ghana collection alerts and flash discounts`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, T.jsxs)(`div`, {
                            className: `p-5 border border-red-100 bg-red-50/10 rounded-xl space-y-3`,
                            children: [
                              (0, T.jsx)(`h3`, {
                                className: `text-xs font-semibold uppercase tracking-wider text-red-700`,
                                children: `Account Safety`,
                              }),
                              (0, T.jsx)(`p`, {
                                className: `text-xs font-light text-muted-foreground`,
                                children: `Deactivating your account will permanently delete saved delivery settings, accrued points, and previous order transactions.`,
                              }),
                              (0, T.jsx)(`button`, {
                                className: `py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-wider text-[10px] uppercase rounded-xl transition-all`,
                                children: `Deactivate Account`,
                              }),
                            ],
                          }),
                        ],
                      },
                      `settings`,
                    ),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { E as component };
