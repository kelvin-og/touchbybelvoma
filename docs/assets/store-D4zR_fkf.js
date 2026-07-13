const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/products-pUvZdLaj.js", "assets/jsx-runtime-D8nDyRPw.js"]),
) => i.map((i) => d[i]);
import { n as e, s as t, t as n } from "./jsx-runtime-D8nDyRPw.js";
var r = t(e(), 1),
  i = n(),
  a = `modulepreload`,
  o = function (e) {
    return `/` + e;
  },
  s = {},
  c = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        c = i?.nonce || i?.getAttribute(`nonce`);
      function l(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function u(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = l(
        t.map((t) => {
          if (((t = o(t, n)), (t = u(t)), t in s)) return;
          s[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : a),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            c && i.setAttribute(`nonce`, c),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  l = (0, r.createContext)(null),
  u = [
    {
      name: `Akosua Mensah`,
      email: `luxury@belvoma.com`,
      phone: `+233241234567`,
      passwordHash: `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`,
      role: `user`,
      createdAt: `2026-06-15T12:00:00Z`,
    },
    {
      name: `Elorm Bel'voma`,
      email: `admin@belvoma.com`,
      phone: `+233509876543`,
      passwordHash: `8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918`,
      role: `admin`,
      createdAt: `2026-01-01T09:00:00Z`,
    },
  ],
  d = (e) => {
    let t = 0;
    for (let n = 0; n < e.length; n++) ((t = (t << 5) - t + e.charCodeAt(n)), (t |= 0));
    return `hash_` + Math.abs(t).toString(16);
  };
function f({ children: e }) {
  let [t, n] = (0, r.useState)([]),
    [a, o] = (0, r.useState)([]),
    [s, f] = (0, r.useState)(null),
    [p, m] = (0, r.useState)([]),
    [h, g] = (0, r.useState)([]),
    [_, v] = (0, r.useState)([]),
    [y, b] = (0, r.useState)(0),
    [x, S] = (0, r.useState)(!1),
    [C, w] = (0, r.useState)(!1),
    [T, E] = (0, r.useState)(15),
    [D, O] = (0, r.useState)(1e3),
    [k, A] = (0, r.useState)(!1),
    [j, M] = (0, r.useState)(3),
    [N, P] = (0, r.useState)([]);
  ((0, r.useEffect)(() => {
    try {
      let e = localStorage.getItem(`naa-cart`),
        t = localStorage.getItem(`naa-wishlist`),
        r = localStorage.getItem(`naa-user`),
        i = localStorage.getItem(`naa-recently`),
        a = localStorage.getItem(`naa-addresses`),
        s = localStorage.getItem(`naa-orders`),
        c = localStorage.getItem(`tbb_config_cedi_multiplier`);
      c && E(parseFloat(c));
      let l = localStorage.getItem(`tbb_config_free_shipping`);
      l && O(parseInt(l));
      let d = localStorage.getItem(`tbb_config_maintenance`);
      d && A(d === `true`);
      let p = localStorage.getItem(`tbb_config_max_attempts`);
      p && M(parseInt(p));
      let h = localStorage.getItem(`naa-users-db`),
        _ = [];
      if (h)
        try {
          _ = JSON.parse(h);
        } catch {
          _ = [...u];
        }
      else _ = [...u];
      if (
        (_.some((e) => e.email.toLowerCase() === `superadmin@tbbv.com`) ||
          _.push({
            name: `System Super Admin`,
            email: `superadmin@tbbv.com`,
            phone: `+233201112222`,
            passwordHash: `hash_superadmin`,
            role: `superadmin`,
            createdAt: new Date().toISOString(),
            active: !0,
          }),
        P(_),
        localStorage.setItem(`naa-users-db`, JSON.stringify(_)),
        e && n(JSON.parse(e)),
        t && o(JSON.parse(t)),
        r && f(JSON.parse(r)),
        i && m(JSON.parse(i)),
        a)
      )
        g(JSON.parse(a));
      else {
        let e = [
          {
            id: `addr_1`,
            fullName: `Akosua Mensah`,
            phone: `+233 24 123 4567`,
            gpsAddress: `GA-182-9902`,
            streetAddress: `Ring Road East, Danquah Circle`,
            city: `Accra`,
            region: `Greater Accra`,
          },
        ];
        (g(e), localStorage.setItem(`naa-addresses`, JSON.stringify(e)));
      }
      if (s) v(JSON.parse(s));
      else {
        let e = [
          {
            id: `TBB-90812`,
            date: `2026-06-20`,
            status: `Delivered`,
            total: 102,
            paymentMethod: `Mobile Money (MTN)`,
            shippingAddress: {
              id: `addr_1`,
              fullName: `Akosua Mensah`,
              phone: `+233 24 123 4567`,
              gpsAddress: `GA-182-9902`,
              streetAddress: `Ring Road East, Danquah Circle`,
              city: `Accra`,
              region: `Greater Accra`,
              area: `Airport Residential Area`,
              landmark: `Near Koala Supermarket`,
            },
            items: [
              {
                productId: `aurelia-hoops`,
                name: `Aurelia Gold Hoops`,
                price: 42,
                qty: 1,
                image: `/assets/prod-hoops.jpg`,
              },
              {
                productId: `celeste-drops`,
                name: `Celeste Filigree Drops`,
                price: 48,
                qty: 1,
                image: `/assets/cat-earrings.jpg`,
              },
            ],
            shippingFee: 0,
            discount: 0,
            promoCode: ``,
            estDeliveryDate: `2026-06-22`,
            orderNotes: `Leave at reception.`,
          },
        ];
        (v(e), localStorage.setItem(`naa-orders`, JSON.stringify(e)));
      }
    } catch {}
    w(!0);
  }, []),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`naa-cart`, JSON.stringify(t));
    }, [t, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`naa-wishlist`, JSON.stringify(a));
    }, [a, C]),
    (0, r.useEffect)(() => {
      C &&
        (s
          ? localStorage.setItem(`naa-user`, JSON.stringify(s))
          : localStorage.removeItem(`naa-user`));
    }, [s, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`naa-recently`, JSON.stringify(p));
    }, [p, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`naa-addresses`, JSON.stringify(h));
    }, [h, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`naa-orders`, JSON.stringify(_));
    }, [_, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`tbb_config_cedi_multiplier`, T.toString());
    }, [T, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`tbb_config_free_shipping`, D.toString());
    }, [D, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`tbb_config_maintenance`, k.toString());
    }, [k, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`tbb_config_max_attempts`, j.toString());
    }, [j, C]),
    (0, r.useEffect)(() => {
      C && localStorage.setItem(`naa-users-db`, JSON.stringify(N));
    }, [N, C]));
  let F = (0, r.useCallback)((e, t = 1) => {
      n((n) =>
        n.find((t) => t.productId === e)
          ? n.map((n) => (n.productId === e ? { ...n, qty: n.qty + t } : n))
          : [...n, { productId: e, qty: t }],
      );
    }, []),
    I = (0, r.useCallback)((e) => {
      n((t) => t.filter((t) => t.productId !== e));
    }, []),
    L = (0, r.useCallback)(() => {
      n([]);
    }, []),
    R = (0, r.useCallback)((e, t) => {
      n((n) =>
        t <= 0
          ? n.filter((t) => t.productId !== e)
          : n.map((n) => (n.productId === e ? { ...n, qty: t } : n)),
      );
    }, []),
    z = (0, r.useCallback)((e) => {
      o((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    }, []),
    B = (0, r.useCallback)((e) => a.includes(e), [a]),
    V = t.reduce((e, t) => e + t.qty, 0),
    H = (0, r.useCallback)(
      async (e, t, n) => {
        (y >= j && S(!0), await new Promise((e) => setTimeout(e, 800)));
        let r = N.find((t) => t.email.toLowerCase() === e.toLowerCase());
        if (!r)
          return (
            b((e) => e + 1),
            { success: !1, error: `Invalid email or password credentials.` }
          );
        if (r.active === !1)
          return {
            success: !1,
            error: `Access Denied: This account has been deactivated by Super Admin.`,
          };
        let i = d(t),
          a = e.toLowerCase() === `luxury@belvoma.com` && t === `GoldLuxury2026!`,
          o = e.toLowerCase() === `admin@belvoma.com` && t === `BelvomaAdmin2026!`,
          s = e.toLowerCase() === `superadmin@tbbv.com` && t === `tbbv123`,
          c = r.passwordHash === i;
        if (a || o || s || c) {
          if (n && r.role !== n)
            return { success: !1, error: `Access denied. Account is not registered as an ${n}.` };
          let e = {
            name: r.name,
            email: r.email,
            phone: r.phone,
            role: r.role,
            createdAt: r.createdAt || new Date().toISOString(),
          };
          return (f(e), b(0), S(!1), { success: !0, role: r.role });
        }
        return (b((e) => e + 1), { success: !1, error: `Invalid email or password credentials.` });
      },
      [y, N, j],
    ),
    U = (0, r.useCallback)(async (e) => {
      await new Promise((e) => setTimeout(e, 1e3));
      let t = localStorage.getItem(`naa-users-db`) || JSON.stringify(u),
        n = JSON.parse(t);
      if (n.some((t) => t.email.toLowerCase() === e.email.toLowerCase()))
        return { success: !1, error: `An account with this email address already exists.` };
      let r = {
        name: e.name,
        email: e.email,
        phone: e.phone,
        passwordHash: d(e.password || `password`),
        role: `user`,
        createdAt: new Date().toISOString(),
      };
      (n.push(r), localStorage.setItem(`naa-users-db`, JSON.stringify(n)));
      let i = {
        name: r.name,
        email: r.email,
        phone: r.phone,
        role: r.role,
        createdAt: r.createdAt,
      };
      return (f(i), b(0), S(!1), { success: !0 });
    }, []),
    W = (0, r.useCallback)(() => {
      (f(null), localStorage.removeItem(`naa-user`));
    }, []),
    G = (0, r.useCallback)((e) => {
      m((t) => [e, ...t.filter((t) => t !== e)].slice(0, 10));
    }, []),
    K = (0, r.useCallback)((e) => {
      let t = { ...e, id: `addr_` + Math.random().toString(36).slice(2, 9) };
      g((e) => [...e, t]);
    }, []),
    q = (0, r.useCallback)((e) => {
      g((t) => t.filter((t) => t.id !== e));
    }, []),
    J = (0, r.useCallback)(
      async (e, r, i, a, o, s, l) => {
        let { products: u } = await c(
            async () => {
              let { products: e } = await import(`./products-pUvZdLaj.js`).then((e) => e.s);
              return { products: e };
            },
            __vite__mapDeps([0, 1]),
          ),
          d = t.map((e) => {
            let t = u.find((t) => t.id === e.productId);
            return {
              productId: e.productId,
              name: t?.name || `Jewelry Item`,
              price: t?.price || 0,
              qty: e.qty,
              image: t?.images[0] || `/assets/logo.png`,
            };
          }),
          f = d.reduce((e, t) => e + t.price * t.qty, 0) + i - a,
          p = {
            id: `TBB-` + Math.floor(1e4 + Math.random() * 9e4),
            date: new Date().toISOString().split(`T`)[0],
            status: e.includes(`Mobile Money`) ? `Order Received` : `Payment Pending`,
            total: f,
            paymentMethod: e,
            shippingAddress: r,
            items: d,
            shippingFee: i,
            discount: a,
            promoCode: o,
            estDeliveryDate: s,
            orderNotes: l,
          };
        return (
          v((e) => {
            let t = [p, ...e];
            return (localStorage.setItem(`naa-orders`, JSON.stringify(t)), t);
          }),
          n([]),
          p
        );
      },
      [t],
    ),
    Y = (0, r.useCallback)((e, t) => {
      v((n) => n.map((n) => (n.id === e ? { ...n, status: t } : n)));
    }, []),
    X = (0, r.useCallback)(() => {
      (b(0), S(!1));
    }, []),
    Z = (0, r.useCallback)((e) => {
      E(e);
    }, []),
    Q = (0, r.useCallback)((e) => {
      O(e);
    }, []),
    $ = (0, r.useCallback)((e) => {
      A(e);
    }, []),
    ee = (0, r.useCallback)((e) => {
      M(e);
    }, []),
    te = (0, r.useCallback)((e, t) => {
      P((n) => n.map((n) => (n.email.toLowerCase() === e.toLowerCase() ? { ...n, role: t } : n)));
    }, []),
    ne = (0, r.useCallback)((e, t) => {
      P((n) => n.map((n) => (n.email.toLowerCase() === e.toLowerCase() ? { ...n, active: t } : n)));
    }, []),
    re = (0, r.useCallback)(() => {
      b((e) => e + 1);
    }, []);
  return (0, i.jsx)(l.Provider, {
    value: {
      cart: t,
      wishlist: a,
      user: s,
      recentlyViewed: p,
      addresses: h,
      orders: _,
      failedLoginAttempts: y,
      captchaRequired: x,
      cediMultiplier: T,
      freeShippingThreshold: D,
      maintenanceMode: k,
      maxFailedAttempts: j,
      usersList: N,
      addToCart: F,
      removeFromCart: I,
      clearCart: L,
      setQty: R,
      toggleWishlist: z,
      isWishlisted: B,
      cartCount: V,
      login: H,
      signup: U,
      logout: W,
      addRecentlyViewed: G,
      addAddress: K,
      deleteAddress: q,
      createOrderFromCart: J,
      updateOrderStatus: Y,
      updateCediMultiplier: Z,
      updateFreeShippingThreshold: Q,
      updateMaintenanceMode: $,
      updateMaxFailedAttempts: ee,
      updateUserRole: te,
      updateUserStatus: ne,
      resetFailedAttempts: X,
      incrementFailedAttempts: re,
    },
    children: e,
  });
}
function p() {
  let e = (0, r.useContext)(l);
  if (!e) throw Error(`useStore must be used within StoreProvider`);
  return e;
}
export { p as n, c as r, f as t };
