import { n as e, s as t, t as n } from "./jsx-runtime-D8nDyRPw.js";
import { t as r } from "./link-MzsLFx_h.js";
import { t as i } from "./useNavigate-OrW1W3oF.js";
import { n as a } from "./store-D4zR_fkf.js";
import { E as o, t as s } from "./proxy-DkmRD95V.js";
import { t as c } from "./arrow-right-BmTjqXc8.js";
import { t as l } from "./circle-check-big-CefZxzci.js";
import { t as u } from "./eye-off-BxEj3xAJ.js";
import { t as d } from "./eye-c82Dcalm.js";
import { t as f } from "./shield-alert-DsogB24J.js";
import { i as p } from "./index-BLNfkPy1.js";
var m = o(`key-round`, [
    [
      `path`,
      {
        d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
        key: `1s6t7t`,
      },
    ],
    [`circle`, { cx: `16.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `w0ekpg` }],
  ]),
  h = t(e()),
  g = n();
function _() {
  let e = i(),
    { login: t } = a(),
    [n, o] = (0, h.useState)(``),
    [_, v] = (0, h.useState)(``),
    [y, b] = (0, h.useState)(!1),
    [x, S] = (0, h.useState)(!1),
    [C, w] = (0, h.useState)(!1),
    [T, E] = (0, h.useState)(``);
  return (0, g.jsxs)(`div`, {
    className: `min-h-screen bg-black flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden`,
    children: [
      (0, g.jsx)(`div`, {
        className: `absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none`,
      }),
      (0, g.jsx)(`div`, {
        className: `absolute bottom-[-30%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none`,
      }),
      (0, g.jsx)(`div`, {
        className: `absolute top-8 left-8`,
        children: (0, g.jsx)(r, {
          to: `/`,
          className: `text-[10px] tracking-[0.3em] font-semibold text-purple-400 uppercase hover:text-white transition-colors`,
          children: `Touch by Bel'voma · System Core`,
        }),
      }),
      (0, g.jsxs)(s.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        className: `max-w-md w-full bg-neutral-950/60 backdrop-blur-md border border-purple-800/30 p-8 sm:p-10 rounded-2xl shadow-lift relative z-10`,
        children: [
          (0, g.jsx)(p, {
            children:
              C &&
              (0, g.jsxs)(s.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: `absolute inset-0 bg-neutral-950 rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center`,
                children: [
                  (0, g.jsx)(s.div, {
                    initial: { scale: 0.4, rotate: -20, opacity: 0 },
                    animate: { scale: 1, rotate: 0, opacity: 1 },
                    transition: { type: `spring`, stiffness: 200, damping: 15 },
                    children: (0, g.jsx)(l, {
                      className: `h-16 w-16 text-purple-400 mb-4`,
                      strokeWidth: 1.5,
                    }),
                  }),
                  (0, g.jsx)(`h3`, {
                    className: `text-xl font-semibold text-purple-300`,
                    children: `Terminal Unlocked`,
                  }),
                  (0, g.jsx)(`p`, {
                    className: `text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed`,
                    children: `Super administrator session initialized. Loading root settings...`,
                  }),
                  (0, g.jsx)(`div`, {
                    className: `w-24 h-[1.5px] bg-purple-900/40 mt-6 overflow-hidden relative`,
                    children: (0, g.jsx)(s.div, {
                      initial: { left: `-100%` },
                      animate: { left: `100%` },
                      transition: { repeat: 1 / 0, duration: 1.2, ease: `easeInOut` },
                      className: `absolute top-0 bottom-0 w-12 bg-gold`,
                    }),
                  }),
                ],
              }),
          }),
          (0, g.jsxs)(`div`, {
            className: `text-center mb-8`,
            children: [
              (0, g.jsx)(`div`, {
                className: `mx-auto w-12 h-12 rounded-full border border-purple-800/40 flex items-center justify-center text-purple-400 mb-4 bg-purple-950/30`,
                children: (0, g.jsx)(m, { className: `h-5 w-5` }),
              }),
              (0, g.jsx)(`h2`, {
                className: `text-lg font-semibold text-purple-300 tracking-widest uppercase`,
                children: `Root Super Admin`,
              }),
              (0, g.jsx)(`p`, {
                className: `mt-2 text-xs font-light text-muted-foreground max-w-xs mx-auto`,
                children: `Secure configuration panel. Input your cryptographic credentials.`,
              }),
            ],
          }),
          T &&
            (0, g.jsxs)(`div`, {
              className: `mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3`,
              children: [
                (0, g.jsx)(f, { className: `h-5 w-5 text-destructive shrink-0 mt-0.5` }),
                (0, g.jsx)(`span`, {
                  className: `text-xs font-light text-red-200/90 leading-relaxed`,
                  children: T,
                }),
              ],
            }),
          (0, g.jsxs)(`form`, {
            onSubmit: async (r) => {
              (r.preventDefault(), E(``), S(!0));
              try {
                let r = await t(n, _, `superadmin`);
                r.success
                  ? (w(!0),
                    setTimeout(() => {
                      e({ to: `/superadmin/dashboard` });
                    }, 1500))
                  : E(r.error || `Access Denied: Invalid super administrator keys.`);
              } catch {
                E(`Security handshake failed. Connection timed out.`);
              } finally {
                S(!1);
              }
            },
            className: `space-y-6`,
            children: [
              (0, g.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, g.jsx)(`input`, {
                    id: `super-email`,
                    type: `email`,
                    required: !0,
                    value: n,
                    onChange: (e) => o(e.target.value),
                    placeholder: ` `,
                    className: `block w-full px-4 pt-6 pb-2 text-sm text-white bg-transparent border border-purple-800/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer transition-colors`,
                  }),
                  (0, g.jsx)(`label`, {
                    htmlFor: `super-email`,
                    className: `absolute text-xs text-purple-400/60 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-purple-400 uppercase tracking-[0.12em]`,
                    children: `Root Username`,
                  }),
                ],
              }),
              (0, g.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, g.jsx)(`input`, {
                    id: `super-password`,
                    type: y ? `text` : `password`,
                    required: !0,
                    value: _,
                    onChange: (e) => v(e.target.value),
                    placeholder: ` `,
                    className: `block w-full px-4 pt-6 pb-2 pr-12 text-sm text-white bg-transparent border border-purple-800/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer transition-colors`,
                  }),
                  (0, g.jsx)(`label`, {
                    htmlFor: `super-password`,
                    className: `absolute text-xs text-purple-400/60 duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 peer-focus:text-purple-400 uppercase tracking-[0.12em]`,
                    children: `Access Password`,
                  }),
                  (0, g.jsx)(`button`, {
                    type: `button`,
                    onClick: () => b(!y),
                    className: `absolute right-4 top-4 text-purple-400/40 hover:text-purple-400 transition-colors focus:outline-none`,
                    children: y
                      ? (0, g.jsx)(u, { className: `h-4 w-4` })
                      : (0, g.jsx)(d, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, g.jsx)(`button`, {
                type: `submit`,
                disabled: x,
                className: `w-full relative py-3.5 px-6 rounded-xl font-button text-xs font-semibold tracking-[0.2em] text-black uppercase bg-gradient-to-r from-purple-500 to-purple-300 hover:brightness-105 transition-all shadow-soft flex items-center justify-center gap-2`,
                children: x
                  ? (0, g.jsxs)(`span`, {
                      className: `flex items-center gap-2 text-black`,
                      children: [
                        (0, g.jsxs)(`svg`, {
                          className: `animate-spin h-4 w-4 text-black`,
                          fill: `none`,
                          viewBox: `0 0 24 24`,
                          children: [
                            (0, g.jsx)(`circle`, {
                              className: `opacity-25`,
                              cx: `12`,
                              cy: `12`,
                              r: `10`,
                              stroke: `currentColor`,
                              strokeWidth: `4`,
                            }),
                            (0, g.jsx)(`path`, {
                              className: `opacity-75`,
                              fill: `currentColor`,
                              d: `M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`,
                            }),
                          ],
                        }),
                        ` `,
                        `Verifying...`,
                      ],
                    })
                  : (0, g.jsxs)(g.Fragment, {
                      children: [`Unlock Terminal `, (0, g.jsx)(c, { className: `h-3.5 w-3.5` })],
                    }),
              }),
            ],
          }),
          (0, g.jsx)(`div`, {
            className: `mt-8 text-center text-[10px] font-light text-muted-foreground/50 border-t border-purple-900/10 pt-4 leading-normal`,
            children: `Authorized console access only. Logins are tied to root certificate hashes.`,
          }),
        ],
      }),
    ],
  });
}
export { _ as component };
