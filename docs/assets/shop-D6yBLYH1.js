import { t as e } from "./jsx-runtime-D8nDyRPw.js";
import { t } from "./link-MzsLFx_h.js";
import { E as n, t as r } from "./proxy-DkmRD95V.js";
import { o as i, t as a } from "./products-pUvZdLaj.js";
import { n as o } from "./index-BLNfkPy1.js";
import { t as s } from "./ProductCard-b4-7qdqM.js";
var c = n(`sliders-horizontal`, [
    [`path`, { d: `M10 5H3`, key: `1qgfaw` }],
    [`path`, { d: `M12 19H3`, key: `yhmn1j` }],
    [`path`, { d: `M14 3v4`, key: `1sua03` }],
    [`path`, { d: `M16 17v4`, key: `1q0r14` }],
    [`path`, { d: `M21 12h-9`, key: `1o4lsq` }],
    [`path`, { d: `M21 19h-5`, key: `1rlt1p` }],
    [`path`, { d: `M21 5h-7`, key: `1oszz2` }],
    [`path`, { d: `M8 10v4`, key: `tgpxqk` }],
    [`path`, { d: `M8 12H3`, key: `a7s4jb` }],
  ]),
  l = e(),
  u = [
    { label: `All` },
    ...a.map((e) => ({ label: e.name, value: e.slug })),
    { label: `New Arrivals`, value: `new` },
    { label: `Best Sellers`, value: `bestsellers` },
    { label: `Sale`, value: `sale` },
  ];
function d() {
  let { category: e, sort: n, maxPrice: a } = o.useSearch(),
    d = o.useNavigate(),
    f = i.filter((t) =>
      e === `new`
        ? t.isNew
        : e === `bestsellers`
          ? t.isBestSeller
          : e === `sale`
            ? !!t.originalPrice
            : !e || t.category === e,
    );
  a && (f = f.filter((e) => e.price <= a));
  let p = [...f].sort((e, t) => {
      switch (n) {
        case `price-asc`:
          return e.price - t.price;
        case `price-desc`:
          return t.price - e.price;
        case `newest`:
          return Number(t.isNew ?? !1) - Number(e.isNew ?? !1);
        default:
          return t.reviewCount - e.reviewCount;
      }
    }),
    m = u.find((t) => t.value === e)?.label ?? `All Jewelry`;
  return (0, l.jsxs)(`div`, {
    className: `container-lux pt-28 pb-20 sm:pt-32`,
    children: [
      (0, l.jsxs)(r.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: `text-center`,
        children: [
          (0, l.jsx)(`p`, { className: `eyebrow`, children: `The Collection` }),
          (0, l.jsx)(`h1`, { className: `mt-3 text-4xl font-semibold sm:text-5xl`, children: m }),
          (0, l.jsxs)(`p`, {
            className: `mt-3 text-sm text-muted-foreground`,
            children: [p.length, ` piece`, p.length === 1 ? `` : `s`],
          }),
        ],
      }),
      (0, l.jsx)(`div`, {
        className: `mt-10 flex flex-wrap justify-center gap-2`,
        children: u.map((n) =>
          (0, l.jsx)(
            t,
            {
              to: `/shop`,
              search: (e) => ({ ...e, category: n.value }),
              className: `rounded-full border px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all ${n.value === e || (!n.value && !e) ? `border-gold bg-gold text-gold-foreground shadow-gold` : `border-border bg-card hover:border-gold hover:text-gold`}`,
              children: n.label,
            },
            n.label,
          ),
        ),
      }),
      (0, l.jsxs)(`div`, {
        className: `mt-8 flex flex-wrap items-center justify-between gap-4`,
        children: [
          (0, l.jsxs)(`label`, {
            className: `flex items-center gap-2 text-sm text-muted-foreground`,
            children: [
              (0, l.jsx)(c, { className: `h-4 w-4` }),
              `Max price`,
              (0, l.jsxs)(`select`, {
                value: a ?? ``,
                onChange: (e) =>
                  d({
                    search: (t) => ({
                      ...t,
                      maxPrice: e.target.value ? Number(e.target.value) : void 0,
                    }),
                  }),
                className: `rounded-full border border-input bg-card px-3 py-1.5 text-sm outline-none focus:border-gold`,
                children: [
                  (0, l.jsx)(`option`, { value: ``, children: `Any` }),
                  (0, l.jsx)(`option`, { value: `30`, children: `Under $30` }),
                  (0, l.jsx)(`option`, { value: `50`, children: `Under $50` }),
                  (0, l.jsx)(`option`, { value: `75`, children: `Under $75` }),
                ],
              }),
            ],
          }),
          (0, l.jsxs)(`label`, {
            className: `flex items-center gap-2 text-sm text-muted-foreground`,
            children: [
              `Sort by`,
              (0, l.jsxs)(`select`, {
                value: n ?? `popular`,
                onChange: (e) => d({ search: (t) => ({ ...t, sort: e.target.value }) }),
                className: `rounded-full border border-input bg-card px-3 py-1.5 text-sm outline-none focus:border-gold`,
                children: [
                  (0, l.jsx)(`option`, { value: `popular`, children: `Most Popular` }),
                  (0, l.jsx)(`option`, { value: `newest`, children: `Newest` }),
                  (0, l.jsx)(`option`, { value: `price-asc`, children: `Price: Low to High` }),
                  (0, l.jsx)(`option`, { value: `price-desc`, children: `Price: High to Low` }),
                ],
              }),
            ],
          }),
        ],
      }),
      p.length === 0
        ? (0, l.jsx)(`p`, {
            className: `py-24 text-center text-muted-foreground`,
            children: `No pieces match these filters — try widening your search.`,
          })
        : (0, l.jsx)(`div`, {
            className: `mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`,
            children: p.map((e, t) => (0, l.jsx)(s, { product: e, index: t }, e.id)),
          }),
    ],
  });
}
export { d as component };
