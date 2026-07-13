import { n as e, s as t, t as n } from "./jsx-runtime-D8nDyRPw.js";
import { t as r } from "./link-MzsLFx_h.js";
import { n as i } from "./store-D4zR_fkf.js";
import { t as a } from "./proxy-DkmRD95V.js";
import { t as o } from "./arrow-right-BmTjqXc8.js";
import { t as s } from "./circle-check-ZudQV6YN.js";
import { n as c, t as l } from "./message-square-C8rijgVA.js";
import { t as u } from "./mail-D2A7KeaU.js";
import { t as d } from "./sparkles-C6yX4eVY.js";
import { n as f, r as p } from "./products-pUvZdLaj.js";
import { i as m, t as h } from "./index-C7L7o5NO.js";
var g = t(e()),
  _ = n();
function v() {
  let { orderId: e } = h.useParams(),
    { orders: t } = i(),
    [n, v] = (0, g.useState)(null),
    [y, b] = (0, g.useState)(!1),
    [x, S] = (0, g.useState)(!1);
  if (
    ((0, g.useEffect)(() => {
      let n = t.find((t) => t.id === e);
      if (n) {
        v(n);
        let e = setTimeout(() => b(!0), 1e3),
          t = setTimeout(() => S(!0), 2500);
        return () => {
          (clearTimeout(e), clearTimeout(t));
        };
      }
    }, [e, t]),
    !n)
  )
    return (0, _.jsx)(`div`, {
      className: `min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4`,
      children: (0, _.jsxs)(`div`, {
        className: `max-w-md text-center space-y-4`,
        children: [
          (0, _.jsx)(`h2`, {
            className: `text-xl font-semibold text-foreground`,
            children: `Order Not Found`,
          }),
          (0, _.jsxs)(`p`, {
            className: `text-xs text-muted-foreground font-light`,
            children: [
              `We are unable to locate an active transaction associated with the reference`,
              ` `,
              (0, _.jsx)(`strong`, { className: `text-foreground`, children: e }),
              `.`,
            ],
          }),
          (0, _.jsx)(r, { to: `/shop`, className: `btn-gold`, children: `Return to Boutique` }),
        ],
      }),
    });
  let C = n.total * p(),
    w = n.shippingFee * p(),
    T = n.discount * p(),
    E = C - w + T;
  return (0, _.jsxs)(`div`, {
    className: `min-h-screen bg-background py-32 relative`,
    children: [
      (0, _.jsx)(`div`, {
        className: `absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none`,
      }),
      (0, _.jsx)(`div`, {
        className: `absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none`,
      }),
      (0, _.jsx)(`div`, {
        className: `fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none max-w-sm w-full px-4`,
        children: (0, _.jsxs)(m, {
          children: [
            y &&
              (0, _.jsxs)(a.div, {
                initial: { opacity: 0, y: 30, scale: 0.9 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
                className: `bg-charcoal text-white border border-gold/20 p-4 rounded-xl shadow-lift flex items-start gap-3 pointer-events-auto`,
                children: [
                  (0, _.jsx)(l, { className: `h-5 w-5 text-gold shrink-0 mt-0.5` }),
                  (0, _.jsxs)(`div`, {
                    className: `text-xs font-light`,
                    children: [
                      (0, _.jsx)(`p`, {
                        className: `font-semibold text-gold-light uppercase tracking-wider text-[9px]`,
                        children: `SMS Dispatch Confirmation`,
                      }),
                      (0, _.jsxs)(`p`, {
                        className: `mt-1 leading-normal text-white/90`,
                        children: [
                          `Receipt sent to `,
                          n.shippingAddress.phone,
                          `: "Order `,
                          n.id,
                          ` confirmed! Track progress on touchbybelvoma.com."`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            x &&
              (0, _.jsxs)(a.div, {
                initial: { opacity: 0, y: 30, scale: 0.9 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
                className: `bg-charcoal text-white border border-gold/20 p-4 rounded-xl shadow-lift flex items-start gap-3 pointer-events-auto`,
                children: [
                  (0, _.jsx)(u, { className: `h-5 w-5 text-gold shrink-0 mt-0.5` }),
                  (0, _.jsxs)(`div`, {
                    className: `text-xs font-light`,
                    children: [
                      (0, _.jsx)(`p`, {
                        className: `font-semibold text-gold-light uppercase tracking-wider text-[9px]`,
                        children: `Email Invoice Sent`,
                      }),
                      (0, _.jsxs)(`p`, {
                        className: `mt-1 leading-normal text-white/90`,
                        children: [
                          `Premium receipt invoice copy successfully delivered to`,
                          ` `,
                          n.shippingAddress.fullName,
                          ` at your registered account mail.`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        className: `container-lux max-w-2xl relative z-10`,
        children: (0, _.jsxs)(a.div, {
          initial: { opacity: 0, y: 25 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          className: `bg-card border border-gold/15 p-8 sm:p-10 rounded-2xl shadow-lift text-center`,
          children: [
            (0, _.jsx)(a.div, {
              initial: { scale: 0.3, rotate: -15, opacity: 0 },
              animate: { scale: 1, rotate: 0, opacity: 1 },
              transition: { type: `spring`, stiffness: 200, damping: 15, delay: 0.1 },
              className: `mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6`,
              children: (0, _.jsx)(s, { className: `h-10 w-10`, strokeWidth: 1.5 }),
            }),
            (0, _.jsx)(`h1`, {
              className: `text-2xl font-semibold tracking-tight text-foreground`,
              children: `Thank You For Your Purchase`,
            }),
            (0, _.jsx)(`p`, {
              className: `text-xs font-light text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed`,
              children: `Your selection has been successfully logged. Touch by Bel'voma is preparing your premium packaging.`,
            }),
            (0, _.jsxs)(`div`, {
              className: `my-8 border-t border-b border-border py-6 grid grid-cols-2 gap-y-4 gap-x-2 text-left text-xs font-light`,
              children: [
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                      children: `Order Number`,
                    }),
                    (0, _.jsx)(`p`, {
                      className: `font-semibold text-foreground mt-0.5`,
                      children: n.id,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                      children: `Estimated Delivery`,
                    }),
                    (0, _.jsx)(`p`, {
                      className: `font-semibold text-gold mt-0.5`,
                      children: n.estDeliveryDate,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                      children: `Payment Status`,
                    }),
                    (0, _.jsx)(`p`, {
                      className: `font-semibold text-foreground mt-0.5`,
                      children:
                        n.status === `Payment Pending`
                          ? `MOMO pending authorization`
                          : `Transaction Approved`,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground uppercase tracking-widest`,
                      children: `Total Transaction`,
                    }),
                    (0, _.jsx)(`p`, {
                      className: `font-semibold text-gold mt-0.5`,
                      children: f(n.total),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: `bg-accent/25 border border-border p-5 rounded-xl text-left text-xs font-light mb-8 space-y-4`,
              children: [
                (0, _.jsxs)(`h3`, {
                  className: `font-semibold text-foreground uppercase tracking-wider text-[10px] text-gold border-b border-border pb-2 flex items-center gap-1`,
                  children: [(0, _.jsx)(d, { className: `h-3.5 w-3.5` }), ` Order Summary`],
                }),
                (0, _.jsx)(`div`, {
                  className: `space-y-2 max-h-40 overflow-y-auto pr-1`,
                  children: n.items.map((e, t) =>
                    (0, _.jsxs)(
                      `div`,
                      {
                        className: `flex justify-between`,
                        children: [
                          (0, _.jsxs)(`span`, {
                            children: [
                              e.name,
                              ` `,
                              (0, _.jsxs)(`strong`, {
                                className: `font-semibold`,
                                children: [`x`, e.qty],
                              }),
                            ],
                          }),
                          (0, _.jsx)(`span`, {
                            className: `font-semibold text-muted-foreground`,
                            children: f(e.price * e.qty),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, _.jsxs)(`div`, {
                  className: `border-t border-border pt-3 space-y-1`,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `flex justify-between text-[11px]`,
                      children: [
                        (0, _.jsx)(`span`, {
                          className: `text-muted-foreground`,
                          children: `Shipping Delivery`,
                        }),
                        (0, _.jsx)(`span`, { children: w === 0 ? `Free` : `GH₵ ${w.toFixed(2)}` }),
                      ],
                    }),
                    T > 0 &&
                      (0, _.jsxs)(`div`, {
                        className: `flex justify-between text-[11px] text-green-700`,
                        children: [
                          (0, _.jsx)(`span`, { children: `Coupon Discount` }),
                          (0, _.jsxs)(`span`, { children: [`-GH₵ `, T.toFixed(2)] }),
                        ],
                      }),
                    (0, _.jsxs)(`div`, {
                      className: `flex justify-between font-semibold pt-1.5 border-t border-border/60 text-sm`,
                      children: [
                        (0, _.jsx)(`span`, { children: `Grand Total` }),
                        (0, _.jsxs)(`span`, {
                          className: `text-gold`,
                          children: [
                            `GH₵`,
                            ` `,
                            C.toLocaleString(`en-US`, { minimumFractionDigits: 2 }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row gap-3 justify-center`,
              children: [
                (0, _.jsxs)(`button`, {
                  onClick: () => {
                    let e = new Date(n.date).toLocaleDateString(),
                      t = `
=============================================
         TOUCH BY BEL'VOMA JEWELRY
          Airport Residential Area
               Accra, Ghana
=============================================
INVOICE RECEIPT: ${n.id}
Date: ${e}
Recipient: ${n.shippingAddress.fullName}
Digital Address: ${n.shippingAddress.gpsAddress}
Street: ${n.shippingAddress.streetAddress}, ${n.shippingAddress.area || ``}
City/Region: ${n.shippingAddress.city}, ${n.shippingAddress.region}
Contact Phone: ${n.shippingAddress.phone}
---------------------------------------------
ITEMS PURCHASED:
${n.items.map((e) => `- ${e.name} (x${e.qty}): GH₵ ${(e.price * p() * e.qty).toFixed(2)}`).join(`
`)}
---------------------------------------------
Subtotal:    GH₵ ${E.toFixed(2)}
Shipping:    GH₵ ${w.toFixed(2)}
Discount:   -GH₵ ${T.toFixed(2)}
---------------------------------------------
GRAND TOTAL: GH₵ ${C.toFixed(2)}
Payment:     ${n.paymentMethod}
Status:      ${n.status}
=============================================
      Thank you for choosing Bel'voma!
     Touch Every Moment with Elegance.
=============================================
`,
                      r = new Blob([t], { type: `text/plain;charset=utf-8` }),
                      i = document.createElement(`a`);
                    ((i.href = URL.createObjectURL(r)),
                      (i.download = `Invoice_${n.id}.txt`),
                      i.click());
                  },
                  className: `flex items-center justify-center gap-2 py-3 px-6 border border-border rounded-xl text-xs font-semibold text-charcoal bg-card hover:border-gold transition-colors focus:outline-none`,
                  children: [(0, _.jsx)(c, { className: `h-4 w-4` }), ` Download PDF Invoice`],
                }),
                (0, _.jsxs)(r, {
                  to: `/track-order`,
                  search: { orderId: n.id },
                  className: `btn-gold flex items-center justify-center gap-2`,
                  children: [`Track Order Progress `, (0, _.jsx)(o, { className: `h-4 w-4` })],
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: `mt-8 text-center`,
              children: (0, _.jsx)(r, {
                to: `/shop`,
                className: `text-xs text-muted-foreground hover:text-gold transition-colors font-light`,
                children: `← Return to Jewelry boutique`,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { v as component };
