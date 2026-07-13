globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-10T03:27:14.374Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/about-BrUudVWp.jpg": {
		"type": "image/jpeg",
		"etag": "\"199e2-vbaxoVXDFd5MNK8D57y41Xf3FHk\"",
		"mtime": "2026-07-11T12:51:38.130Z",
		"size": 104930,
		"path": "../public/assets/about-BrUudVWp.jpg"
	},
	"/assets/about-DJjdRmPZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1613-fkCtcz42Ctmo70rBQfBkLlg8Knc\"",
		"mtime": "2026-07-11T12:51:38.030Z",
		"size": 5651,
		"path": "../public/assets/about-DJjdRmPZ.js"
	},
	"/assets/admin.dashboard-BqGYNriK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ff7-DKIZAIaTkNYCbuqqpjJyh2qot4w\"",
		"mtime": "2026-07-11T12:51:38.032Z",
		"size": 24567,
		"path": "../public/assets/admin.dashboard-BqGYNriK.js"
	},
	"/assets/admin.login-CNHiIt7s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a30-HZtBrj3CiS6ehQFJU+1pyo4xApc\"",
		"mtime": "2026-07-11T12:51:38.032Z",
		"size": 6704,
		"path": "../public/assets/admin.login-CNHiIt7s.js"
	},
	"/assets/arrow-left-AxtEw6TI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-mayS2dOEwoerbCGxsedrYxQNjKg\"",
		"mtime": "2026-07-11T12:51:38.034Z",
		"size": 154,
		"path": "../public/assets/arrow-left-AxtEw6TI.js"
	},
	"/assets/arrow-right-BmTjqXc8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-OGt2aC5hwiLQQYcG7TMzwtSBlUk\"",
		"mtime": "2026-07-11T12:51:38.034Z",
		"size": 154,
		"path": "../public/assets/arrow-right-BmTjqXc8.js"
	},
	"/assets/cart-BGIBEnw8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"155c-MuSinupEc6e0OBaL/tE/pfgJkgY\"",
		"mtime": "2026-07-11T12:51:38.036Z",
		"size": 5468,
		"path": "../public/assets/cart-BGIBEnw8.js"
	},
	"/assets/cat-anklets-BvOqvkqX.jpg": {
		"type": "image/jpeg",
		"etag": "\"121cf-pgaaB4LcSUqEi+R16uipOVVwtgw\"",
		"mtime": "2026-07-11T12:51:38.130Z",
		"size": 74191,
		"path": "../public/assets/cat-anklets-BvOqvkqX.jpg"
	},
	"/assets/cat-bracelets-Ddznn2Mk.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad65-Fs4lHBHpH5ta00BD8Es2rZsHC6U\"",
		"mtime": "2026-07-11T12:51:38.132Z",
		"size": 44389,
		"path": "../public/assets/cat-bracelets-Ddznn2Mk.jpg"
	},
	"/assets/cat-earrings-CS8_5WnP.jpg": {
		"type": "image/jpeg",
		"etag": "\"e61f-93WwbY/OLpHk2JmO8ZFmQh5W+Ng\"",
		"mtime": "2026-07-11T12:51:38.132Z",
		"size": 58911,
		"path": "../public/assets/cat-earrings-CS8_5WnP.jpg"
	},
	"/assets/cat-necklaces-CA35ESkp.jpg": {
		"type": "image/jpeg",
		"etag": "\"81f1-ec5Syy3WPeXWV4qN0yCQboQDmuo\"",
		"mtime": "2026-07-11T12:51:38.132Z",
		"size": 33265,
		"path": "../public/assets/cat-necklaces-CA35ESkp.jpg"
	},
	"/assets/cat-rings-nwp7hGcZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"a783-vFzheV92M6wmmC1KZLaUXzuTkT0\"",
		"mtime": "2026-07-11T12:51:38.132Z",
		"size": 42883,
		"path": "../public/assets/cat-rings-nwp7hGcZ.jpg"
	},
	"/assets/cat-sets-TzrZ12TK.jpg": {
		"type": "image/jpeg",
		"etag": "\"dddd-l39pteTzZspoO6LmJYQDV0ongnQ\"",
		"mtime": "2026-07-11T12:51:38.136Z",
		"size": 56797,
		"path": "../public/assets/cat-sets-TzrZ12TK.jpg"
	},
	"/assets/checkout-qerZZB5W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7ac-2hQKqPPq8KNQaJCIGaYSJ35En6E\"",
		"mtime": "2026-07-11T12:51:38.038Z",
		"size": 42924,
		"path": "../public/assets/checkout-qerZZB5W.js"
	},
	"/assets/circle-alert-3YAmvEKb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-Tqent/y7bi4ACc3mX1GBjmJb7H4\"",
		"mtime": "2026-07-11T12:51:38.038Z",
		"size": 239,
		"path": "../public/assets/circle-alert-3YAmvEKb.js"
	},
	"/assets/chromium-DtSZUd0H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-654Jsrl/GOufhXvaCqNLamL0dU8\"",
		"mtime": "2026-07-11T12:51:38.038Z",
		"size": 567,
		"path": "../public/assets/chromium-DtSZUd0H.js"
	},
	"/assets/circle-check-big-CefZxzci.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-Up0xFgG8JGeYbnbDlEMraNQEsR0\"",
		"mtime": "2026-07-11T12:51:38.041Z",
		"size": 183,
		"path": "../public/assets/circle-check-big-CefZxzci.js"
	},
	"/assets/circle-check-ZudQV6YN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-RZUSzXKkG6fFjn2oKEfZXhb2crA\"",
		"mtime": "2026-07-11T12:51:38.038Z",
		"size": 167,
		"path": "../public/assets/circle-check-ZudQV6YN.js"
	},
	"/assets/contact-Lu7vGjsM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1748-g0VVSUaCDpcuftqT6IZBASAHCcY\"",
		"mtime": "2026-07-11T12:51:38.041Z",
		"size": 5960,
		"path": "../public/assets/contact-Lu7vGjsM.js"
	},
	"/assets/dashboard-CrZ0WSS8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60c1-OfpvtADXNF2szlFjeCooxnriIpE\"",
		"mtime": "2026-07-11T12:51:38.046Z",
		"size": 24769,
		"path": "../public/assets/dashboard-CrZ0WSS8.js"
	},
	"/assets/eye-c82Dcalm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-3kKUsNaouwT7j/2074hw7UCNBa0\"",
		"mtime": "2026-07-11T12:51:38.048Z",
		"size": 245,
		"path": "../public/assets/eye-c82Dcalm.js"
	},
	"/assets/eye-off-BxEj3xAJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a3-dKzbJRa3ecaUNcKgMZppV4cWR7w\"",
		"mtime": "2026-07-11T12:51:38.048Z",
		"size": 419,
		"path": "../public/assets/eye-off-BxEj3xAJ.js"
	},
	"/assets/forgot-password-Cvyk9tUl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29fe-reKkiM3pqVb05MaHrbD0JCbiMBE\"",
		"mtime": "2026-07-11T12:51:38.060Z",
		"size": 10750,
		"path": "../public/assets/forgot-password-Cvyk9tUl.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"8a151-VFrCzVXqzigiDrWMttLPicgwR+o\"",
		"mtime": "2026-07-10T03:27:03.907Z",
		"size": 565585,
		"path": "../public/favicon.png"
	},
	"/assets/gift-BZ9vN9i8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152-g6pSg/NiWxaU7UCyHZhdfNwN0fY\"",
		"mtime": "2026-07-11T12:51:38.064Z",
		"size": 338,
		"path": "../public/assets/gift-BZ9vN9i8.js"
	},
	"/assets/hero-Ck0_OEJR.jpg": {
		"type": "image/jpeg",
		"etag": "\"184d3-eDES+LWrFrF9DwwNTGDRWBpoRdo\"",
		"mtime": "2026-07-11T12:51:38.136Z",
		"size": 99539,
		"path": "../public/assets/hero-Ck0_OEJR.jpg"
	},
	"/assets/hero-E7sQnIos.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31-NjrA/sKRD+T9j9R7KNlDbN6SN3g\"",
		"mtime": "2026-07-11T12:51:38.066Z",
		"size": 49,
		"path": "../public/assets/hero-E7sQnIos.js"
	},
	"/assets/key-llr-Cbit.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-0KAWeTNQ40MKaaBBOT9cK84EBkQ\"",
		"mtime": "2026-07-11T12:51:38.068Z",
		"size": 253,
		"path": "../public/assets/key-llr-Cbit.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-11T12:51:38.066Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/index-DYdqmLLH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"502fe-98YOt/64x7Vb59Z5sxGwfumtqH4\"",
		"mtime": "2026-07-11T12:51:38.010Z",
		"size": 328446,
		"path": "../public/assets/index-DYdqmLLH.js"
	},
	"/assets/lazyRouteComponent-pMpssgPO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13a4-+a8kDbNgOqtJFebYT5LUBVyqHQQ\"",
		"mtime": "2026-07-11T12:51:38.068Z",
		"size": 5028,
		"path": "../public/assets/lazyRouteComponent-pMpssgPO.js"
	},
	"/assets/link-MzsLFx_h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6892-bivL+8x7xhbiKrmVCa9tljTB1ns\"",
		"mtime": "2026-07-11T12:51:38.070Z",
		"size": 26770,
		"path": "../public/assets/link-MzsLFx_h.js"
	},
	"/assets/lock-zNDHqqRP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-kj2TIV+VaH2jPDhwyRWIoNltBcg\"",
		"mtime": "2026-07-11T12:51:38.070Z",
		"size": 195,
		"path": "../public/assets/lock-zNDHqqRP.js"
	},
	"/assets/log-out-CaZYO5lF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-3S3xuqNSYRqdTczRqct0pxH3j3g\"",
		"mtime": "2026-07-11T12:51:38.070Z",
		"size": 290,
		"path": "../public/assets/log-out-CaZYO5lF.js"
	},
	"/assets/login-bA7sw-Vl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b34-X2VeN+HtPM1eE7Nj8PbYvu1mIVY\"",
		"mtime": "2026-07-11T12:51:38.072Z",
		"size": 11060,
		"path": "../public/assets/login-bA7sw-Vl.js"
	},
	"/assets/logo-Den04JhT.png": {
		"type": "image/png",
		"etag": "\"14abb-RyghX6lR509fcxulwSAz+ZZkdOA\"",
		"mtime": "2026-07-11T12:51:38.138Z",
		"size": 84667,
		"path": "../public/assets/logo-Den04JhT.png"
	},
	"/assets/mail-D2A7KeaU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-YFmy955TRw0BiMsFrcLWgv8zpR8\"",
		"mtime": "2026-07-11T12:51:38.074Z",
		"size": 202,
		"path": "../public/assets/mail-D2A7KeaU.js"
	},
	"/assets/message-square-C8rijgVA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-L3MsxuNDX10su99rUy1ZHVDIJ3I\"",
		"mtime": "2026-07-11T12:51:38.076Z",
		"size": 401,
		"path": "../public/assets/message-square-C8rijgVA.js"
	},
	"/assets/map-pin-D_tDeDtV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-hKnLYtxJXhTuGaQ67eARX/vU49c\"",
		"mtime": "2026-07-11T12:51:38.074Z",
		"size": 248,
		"path": "../public/assets/map-pin-D_tDeDtV.js"
	},
	"/assets/minus-BbksUQKY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a-dNoULxYNwaHK/WUZAxUeMSZdPws\"",
		"mtime": "2026-07-11T12:51:38.090Z",
		"size": 106,
		"path": "../public/assets/minus-BbksUQKY.js"
	},
	"/assets/order-confirmation._orderId-Dn1ny6fw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23b3-65vLlHqmHk2aJJqC4R7UiumMEMM\"",
		"mtime": "2026-07-11T12:51:38.092Z",
		"size": 9139,
		"path": "../public/assets/order-confirmation._orderId-Dn1ny6fw.js"
	},
	"/assets/plus-DK9MZKQp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-IZqpAIG7KNonyV++6V5KgnWLwAk\"",
		"mtime": "2026-07-11T12:51:38.096Z",
		"size": 142,
		"path": "../public/assets/plus-DK9MZKQp.js"
	},
	"/assets/prod-baguette-ring-BiPlhGgy.jpg": {
		"type": "image/jpeg",
		"etag": "\"66ed-/5j7KcimebkxWeDjKUJkJ4o41L8\"",
		"mtime": "2026-07-11T12:51:38.138Z",
		"size": 26349,
		"path": "../public/assets/prod-baguette-ring-BiPlhGgy.jpg"
	},
	"/assets/prod-choker-Bno77IGw.jpg": {
		"type": "image/jpeg",
		"etag": "\"8cb3-2TbJC1zm+yR7ULMC3QIsvpttclY\"",
		"mtime": "2026-07-11T12:51:38.140Z",
		"size": 36019,
		"path": "../public/assets/prod-choker-Bno77IGw.jpg"
	},
	"/assets/prod-cuff-CAS_Upcn.jpg": {
		"type": "image/jpeg",
		"etag": "\"c410-VThmgIhwBQ8TpQVP7JuA0LvMPIQ\"",
		"mtime": "2026-07-11T12:51:38.142Z",
		"size": 50192,
		"path": "../public/assets/prod-cuff-CAS_Upcn.jpg"
	},
	"/assets/prod-hoops-C6vI0mpG.jpg": {
		"type": "image/jpeg",
		"etag": "\"6719-tT0YJ1/+XwXwcdNaGy9TvMkiiho\"",
		"mtime": "2026-07-11T12:51:38.146Z",
		"size": 26393,
		"path": "../public/assets/prod-hoops-C6vI0mpG.jpg"
	},
	"/assets/prod-pearl-studs-CgMQZG8m.jpg": {
		"type": "image/jpeg",
		"etag": "\"f640-Gy8EV+OOJg99BcD3u2RC/k/dOIw\"",
		"mtime": "2026-07-11T12:51:38.146Z",
		"size": 63040,
		"path": "../public/assets/prod-pearl-studs-CgMQZG8m.jpg"
	},
	"/assets/prod-layered-necklace-CuIfWTjk.jpg": {
		"type": "image/jpeg",
		"etag": "\"a946-Aca9nleKIYVpAWv4dIFDj6knrak\"",
		"mtime": "2026-07-11T12:51:38.146Z",
		"size": 43334,
		"path": "../public/assets/prod-layered-necklace-CuIfWTjk.jpg"
	},
	"/assets/prod-signet-ring-C1y1igCU.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ada-W1Riu/4UcRV/RB8xMV3Fxd4Umqo\"",
		"mtime": "2026-07-11T12:51:38.148Z",
		"size": 27354,
		"path": "../public/assets/prod-signet-ring-C1y1igCU.jpg"
	},
	"/assets/prod-tennis-bracelet-BcCZOvMg.jpg": {
		"type": "image/jpeg",
		"etag": "\"849b-87tB32eh8/y9uaaF014sxGdoroI\"",
		"mtime": "2026-07-11T12:51:38.148Z",
		"size": 33947,
		"path": "../public/assets/prod-tennis-bracelet-BcCZOvMg.jpg"
	},
	"/assets/product._productId-BELh6Lcm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1da-VM/crpv/aAUdigilYdeQ7TVvTmg\"",
		"mtime": "2026-07-11T12:51:38.096Z",
		"size": 474,
		"path": "../public/assets/product._productId-BELh6Lcm.js"
	},
	"/assets/product._productId-2LVfKhwb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67d-xyGQOKC33zg6eHAF06Ep58AwR3w\"",
		"mtime": "2026-07-11T12:51:38.096Z",
		"size": 1661,
		"path": "../public/assets/product._productId-2LVfKhwb.js"
	},
	"/assets/product._productId-DhfaqNBg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ff2-KRXqX+L3mXJhISZumr/XqkQb+mg\"",
		"mtime": "2026-07-11T12:51:38.098Z",
		"size": 8178,
		"path": "../public/assets/product._productId-DhfaqNBg.js"
	},
	"/assets/ProductCard-BNtFuAjg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15c1-SArjscrdKPeOyKg3KBENeXst4bY\"",
		"mtime": "2026-07-11T12:51:38.010Z",
		"size": 5569,
		"path": "../public/assets/ProductCard-BNtFuAjg.js"
	},
	"/assets/products-pUvZdLaj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16b0-6mMdoIV1PW7AWBSpx9xzPUGHE1I\"",
		"mtime": "2026-07-11T12:51:38.098Z",
		"size": 5808,
		"path": "../public/assets/products-pUvZdLaj.js"
	},
	"/assets/rotate-ccw-CeOpUHCT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-rVhYwo3+Vy3NWHlPbX+b8P+Qm/Y\"",
		"mtime": "2026-07-11T12:51:38.100Z",
		"size": 189,
		"path": "../public/assets/rotate-ccw-CeOpUHCT.js"
	},
	"/assets/proxy-DkmRD95V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dd8f-aAvmOwjasQBbfqXmTm4sjzGnIQw\"",
		"mtime": "2026-07-11T12:51:38.098Z",
		"size": 122255,
		"path": "../public/assets/proxy-DkmRD95V.js"
	},
	"/assets/settings-DpV_mSLA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"250-8OzKYQ1vpLX8x6PycjF0WkZzSjw\"",
		"mtime": "2026-07-11T12:51:38.113Z",
		"size": 592,
		"path": "../public/assets/settings-DpV_mSLA.js"
	},
	"/assets/routes-Y0Gqb_ik.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49d9-aIZPAJ9rgcOnoMp+VaNjUaaLqCE\"",
		"mtime": "2026-07-11T12:51:38.100Z",
		"size": 18905,
		"path": "../public/assets/routes-Y0Gqb_ik.js"
	},
	"/assets/shield-check-D_i7EwFT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-v+lI9JCbeU6ys/RAHXZLOla477w\"",
		"mtime": "2026-07-11T12:51:38.114Z",
		"size": 309,
		"path": "../public/assets/shield-check-D_i7EwFT.js"
	},
	"/assets/shield-alert-DsogB24J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-6pLZZLYObXI2PkgVZ2jptOJ0yf8\"",
		"mtime": "2026-07-11T12:51:38.113Z",
		"size": 342,
		"path": "../public/assets/shield-alert-DsogB24J.js"
	},
	"/assets/shop-b5K-ESSQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eca-5ndB8eEYBu8+sq/qKkvBxTNnkbs\"",
		"mtime": "2026-07-11T12:51:38.114Z",
		"size": 3786,
		"path": "../public/assets/shop-b5K-ESSQ.js"
	},
	"/assets/signup-49ZCvMxh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3779-uq/Z2vwmCETgYmWgTJWv+aZqgLQ\"",
		"mtime": "2026-07-11T12:51:38.115Z",
		"size": 14201,
		"path": "../public/assets/signup-49ZCvMxh.js"
	},
	"/assets/sparkles-C6yX4eVY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-DleGDoxKL2xi794+pfpVnqP4OeQ\"",
		"mtime": "2026-07-11T12:51:38.115Z",
		"size": 483,
		"path": "../public/assets/sparkles-C6yX4eVY.js"
	},
	"/assets/star-vwdllOWM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-d78kLc69viN5Y5r2hkJGfPwW4po\"",
		"mtime": "2026-07-11T12:51:38.115Z",
		"size": 461,
		"path": "../public/assets/star-vwdllOWM.js"
	},
	"/assets/store-D4zR_fkf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2663-iSAcHuVOvSHl7GvFIxHJbAd6QwE\"",
		"mtime": "2026-07-11T12:51:38.117Z",
		"size": 9827,
		"path": "../public/assets/store-D4zR_fkf.js"
	},
	"/assets/styles-D0ljVYSr.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e9eb-AZHfeDgwF2b8YQDNoVFxYSH5xhI\"",
		"mtime": "2026-07-11T12:51:38.148Z",
		"size": 125419,
		"path": "../public/assets/styles-D0ljVYSr.css"
	},
	"/assets/superadmin.login-Dq26WU5W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8d-5l4u8qvBDxh6oXbXHpnFazwQ1wk\"",
		"mtime": "2026-07-11T12:51:38.120Z",
		"size": 7053,
		"path": "../public/assets/superadmin.login-Dq26WU5W.js"
	},
	"/assets/tag-UFC9nek1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b-aAZFRBQfU75PllIZ6U8lRFEUPdI\"",
		"mtime": "2026-07-11T12:51:38.121Z",
		"size": 315,
		"path": "../public/assets/tag-UFC9nek1.js"
	},
	"/assets/track-order-BJm7WXUz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fc7-eyIy8x1TLGYe5ZGm0aHT2eQrPZM\"",
		"mtime": "2026-07-11T12:51:38.122Z",
		"size": 8135,
		"path": "../public/assets/track-order-BJm7WXUz.js"
	},
	"/assets/trash-2-CNqhW4qt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-aJNex969/8Ji0oUZRDMhqFOWrRw\"",
		"mtime": "2026-07-11T12:51:38.122Z",
		"size": 317,
		"path": "../public/assets/trash-2-CNqhW4qt.js"
	},
	"/assets/truck-BLXXFY6c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18b-dyUxw3I27oS1tMBXpuCAd/EyQmg\"",
		"mtime": "2026-07-11T12:51:38.125Z",
		"size": 395,
		"path": "../public/assets/truck-BLXXFY6c.js"
	},
	"/assets/superadmin.dashboard-Y_Vgl8A5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b774-GrdtAeQNBUOQCtualR/oPuQQIPs\"",
		"mtime": "2026-07-11T12:51:38.117Z",
		"size": 112500,
		"path": "../public/assets/superadmin.dashboard-Y_Vgl8A5.js"
	},
	"/assets/useNavigate-OrW1W3oF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4-tylOtl/8OBtncQpDrsl3zUbN1sg\"",
		"mtime": "2026-07-11T12:51:38.125Z",
		"size": 228,
		"path": "../public/assets/useNavigate-OrW1W3oF.js"
	},
	"/assets/useRouter-Crv3SibY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-4/vf51Ux3mZHvHD4WSUUwxKfuRA\"",
		"mtime": "2026-07-11T12:51:38.128Z",
		"size": 151,
		"path": "../public/assets/useRouter-Crv3SibY.js"
	},
	"/assets/wishlist-CvS_aFYd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b4-LxhYSe9gLqmMKIELv9QJr45CXHg\"",
		"mtime": "2026-07-11T12:51:38.130Z",
		"size": 1204,
		"path": "../public/assets/wishlist-CvS_aFYd.js"
	},
	"/assets/users-B-qtsgpQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d6-v/SDQr3/5edioLyAkyABfsXalXo\"",
		"mtime": "2026-07-11T12:51:38.129Z",
		"size": 726,
		"path": "../public/assets/users-B-qtsgpQ.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_LLPfGm = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_LLPfGm
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
