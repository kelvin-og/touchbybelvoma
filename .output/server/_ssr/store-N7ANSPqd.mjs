import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-N7ANSPqd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StoreContext = (0, import_react.createContext)(null);
var SEEDED_USERS = [{
	name: "Akosua Mensah",
	email: "luxury@belvoma.com",
	phone: "+233241234567",
	passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
	role: "user",
	createdAt: "2026-06-15T12:00:00Z"
}, {
	name: "Elorm Bel'voma",
	email: "admin@belvoma.com",
	phone: "+233509876543",
	passwordHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
	role: "admin",
	createdAt: "2026-01-01T09:00:00Z"
}];
var mockHash = (str) => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) - hash + str.charCodeAt(i);
		hash |= 0;
	}
	return "hash_" + Math.abs(hash).toString(16);
};
function StoreProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [user, setUser] = (0, import_react.useState)(null);
	const [recentlyViewed, setRecentlyViewed] = (0, import_react.useState)([]);
	const [addresses, setAddresses] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [failedLoginAttempts, setFailedLoginAttempts] = (0, import_react.useState)(0);
	const [captchaRequired, setCaptchaRequired] = (0, import_react.useState)(false);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [cediMultiplier, setCediMultiplier] = (0, import_react.useState)(15);
	const [freeShippingThreshold, setFreeShippingThreshold] = (0, import_react.useState)(1e3);
	const [maintenanceMode, setMaintenanceMode] = (0, import_react.useState)(false);
	const [maxFailedAttempts, setMaxFailedAttempts] = (0, import_react.useState)(3);
	const [usersList, setUsersList] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const c = localStorage.getItem("naa-cart");
			const w = localStorage.getItem("naa-wishlist");
			const u = localStorage.getItem("naa-user");
			const rv = localStorage.getItem("naa-recently");
			const addr = localStorage.getItem("naa-addresses");
			const ords = localStorage.getItem("naa-orders");
			const storedMult = localStorage.getItem("tbb_config_cedi_multiplier");
			if (storedMult) setCediMultiplier(parseFloat(storedMult));
			const storedThreshold = localStorage.getItem("tbb_config_free_shipping");
			if (storedThreshold) setFreeShippingThreshold(parseInt(storedThreshold));
			const storedMaint = localStorage.getItem("tbb_config_maintenance");
			if (storedMaint) setMaintenanceMode(storedMaint === "true");
			const storedMaxAtt = localStorage.getItem("tbb_config_max_attempts");
			if (storedMaxAtt) setMaxFailedAttempts(parseInt(storedMaxAtt));
			const storedUsers = localStorage.getItem("naa-users-db");
			let parsedUsers = [];
			if (storedUsers) try {
				parsedUsers = JSON.parse(storedUsers);
			} catch (e) {
				parsedUsers = [...SEEDED_USERS];
			}
			else parsedUsers = [...SEEDED_USERS];
			if (!parsedUsers.some((u) => u.email.toLowerCase() === "superadmin@tbbv.com")) parsedUsers.push({
				name: "System Super Admin",
				email: "superadmin@tbbv.com",
				phone: "+233201112222",
				passwordHash: "hash_superadmin",
				role: "superadmin",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				active: true
			});
			setUsersList(parsedUsers);
			localStorage.setItem("naa-users-db", JSON.stringify(parsedUsers));
			if (c) setCart(JSON.parse(c));
			if (w) setWishlist(JSON.parse(w));
			if (u) setUser(JSON.parse(u));
			if (rv) setRecentlyViewed(JSON.parse(rv));
			if (addr) setAddresses(JSON.parse(addr));
			else {
				const initialAddr = [{
					id: "addr_1",
					fullName: "Akosua Mensah",
					phone: "+233 24 123 4567",
					gpsAddress: "GA-182-9902",
					streetAddress: "Ring Road East, Danquah Circle",
					city: "Accra",
					region: "Greater Accra"
				}];
				setAddresses(initialAddr);
				localStorage.setItem("naa-addresses", JSON.stringify(initialAddr));
			}
			if (ords) setOrders(JSON.parse(ords));
			else {
				const initialOrders = [{
					id: "TBB-90812",
					date: "2026-06-20",
					status: "Delivered",
					total: 102,
					paymentMethod: "Mobile Money (MTN)",
					shippingAddress: {
						id: "addr_1",
						fullName: "Akosua Mensah",
						phone: "+233 24 123 4567",
						gpsAddress: "GA-182-9902",
						streetAddress: "Ring Road East, Danquah Circle",
						city: "Accra",
						region: "Greater Accra",
						area: "Airport Residential Area",
						landmark: "Near Koala Supermarket"
					},
					items: [{
						productId: "aurelia-hoops",
						name: "Aurelia Gold Hoops",
						price: 42,
						qty: 1,
						image: "/assets/prod-hoops.jpg"
					}, {
						productId: "celeste-drops",
						name: "Celeste Filigree Drops",
						price: 48,
						qty: 1,
						image: "/assets/cat-earrings.jpg"
					}],
					shippingFee: 0,
					discount: 0,
					promoCode: "",
					estDeliveryDate: "2026-06-22",
					orderNotes: "Leave at reception."
				}];
				setOrders(initialOrders);
				localStorage.setItem("naa-orders", JSON.stringify(initialOrders));
			}
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("naa-cart", JSON.stringify(cart));
	}, [cart, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("naa-wishlist", JSON.stringify(wishlist));
	}, [wishlist, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) if (user) localStorage.setItem("naa-user", JSON.stringify(user));
		else localStorage.removeItem("naa-user");
	}, [user, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("naa-recently", JSON.stringify(recentlyViewed));
	}, [recentlyViewed, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("naa-addresses", JSON.stringify(addresses));
	}, [addresses, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("naa-orders", JSON.stringify(orders));
	}, [orders, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("tbb_config_cedi_multiplier", cediMultiplier.toString());
	}, [cediMultiplier, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("tbb_config_free_shipping", freeShippingThreshold.toString());
	}, [freeShippingThreshold, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("tbb_config_maintenance", maintenanceMode.toString());
	}, [maintenanceMode, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("tbb_config_max_attempts", maxFailedAttempts.toString());
	}, [maxFailedAttempts, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("naa-users-db", JSON.stringify(usersList));
	}, [usersList, hydrated]);
	const addToCart = (0, import_react.useCallback)((productId, qty = 1) => {
		setCart((prev) => {
			if (prev.find((i) => i.productId === productId)) return prev.map((i) => i.productId === productId ? {
				...i,
				qty: i.qty + qty
			} : i);
			return [...prev, {
				productId,
				qty
			}];
		});
	}, []);
	const removeFromCart = (0, import_react.useCallback)((productId) => {
		setCart((prev) => prev.filter((i) => i.productId !== productId));
	}, []);
	const clearCart = (0, import_react.useCallback)(() => {
		setCart([]);
	}, []);
	const setQty = (0, import_react.useCallback)((productId, qty) => {
		setCart((prev) => qty <= 0 ? prev.filter((i) => i.productId !== productId) : prev.map((i) => i.productId === productId ? {
			...i,
			qty
		} : i));
	}, []);
	const toggleWishlist = (0, import_react.useCallback)((productId) => {
		setWishlist((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]);
	}, []);
	const isWishlisted = (0, import_react.useCallback)((productId) => wishlist.includes(productId), [wishlist]);
	const cartCount = cart.reduce((n, i) => n + i.qty, 0);
	const login = (0, import_react.useCallback)(async (email, password, role) => {
		if (failedLoginAttempts >= maxFailedAttempts) setCaptchaRequired(true);
		await new Promise((resolve) => setTimeout(resolve, 800));
		const found = usersList.find((u) => u.email.toLowerCase() === email.toLowerCase());
		if (!found) {
			setFailedLoginAttempts((prev) => prev + 1);
			return {
				success: false,
				error: "Invalid email or password credentials."
			};
		}
		if (found.active === false) return {
			success: false,
			error: "Access Denied: This account has been deactivated by Super Admin."
		};
		const inputHash = mockHash(password);
		const matchSeeded1 = email.toLowerCase() === "luxury@belvoma.com" && password === "GoldLuxury2026!";
		const matchSeeded2 = email.toLowerCase() === "admin@belvoma.com" && password === "BelvomaAdmin2026!";
		const matchSuperSeeded = email.toLowerCase() === "superadmin@tbbv.com" && password === "tbbv123";
		const matchesMockHash = found.passwordHash === inputHash;
		if (matchSeeded1 || matchSeeded2 || matchSuperSeeded || matchesMockHash) {
			if (role && found.role !== role) return {
				success: false,
				error: `Access denied. Account is not registered as an ${role}.`
			};
			const sessionUser = {
				name: found.name,
				email: found.email,
				phone: found.phone,
				role: found.role,
				createdAt: found.createdAt || (/* @__PURE__ */ new Date()).toISOString()
			};
			setUser(sessionUser);
			setFailedLoginAttempts(0);
			setCaptchaRequired(false);
			return {
				success: true,
				role: found.role
			};
		}
		setFailedLoginAttempts((prev) => prev + 1);
		return {
			success: false,
			error: "Invalid email or password credentials."
		};
	}, [
		failedLoginAttempts,
		usersList,
		maxFailedAttempts
	]);
	const signup = (0, import_react.useCallback)(async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1e3));
		const dbString = localStorage.getItem("naa-users-db") || JSON.stringify(SEEDED_USERS);
		const usersDb = JSON.parse(dbString);
		if (usersDb.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) return {
			success: false,
			error: "An account with this email address already exists."
		};
		const newUser = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			passwordHash: mockHash(data.password || "password"),
			role: "user",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		usersDb.push(newUser);
		localStorage.setItem("naa-users-db", JSON.stringify(usersDb));
		const sessionUser = {
			name: newUser.name,
			email: newUser.email,
			phone: newUser.phone,
			role: newUser.role,
			createdAt: newUser.createdAt
		};
		setUser(sessionUser);
		setFailedLoginAttempts(0);
		setCaptchaRequired(false);
		return { success: true };
	}, []);
	const logout = (0, import_react.useCallback)(() => {
		setUser(null);
		localStorage.removeItem("naa-user");
	}, []);
	const addRecentlyViewed = (0, import_react.useCallback)((productId) => {
		setRecentlyViewed((prev) => {
			return [productId, ...prev.filter((id) => id !== productId)].slice(0, 10);
		});
	}, []);
	const addAddress = (0, import_react.useCallback)((addressData) => {
		const newAddr = {
			...addressData,
			id: "addr_" + Math.random().toString(36).slice(2, 9)
		};
		setAddresses((prev) => [...prev, newAddr]);
	}, []);
	const deleteAddress = (0, import_react.useCallback)((id) => {
		setAddresses((prev) => prev.filter((a) => a.id !== id));
	}, []);
	const createOrderFromCart = (0, import_react.useCallback)(async (paymentMethod, address, shippingFee, discount, promoCode, estDeliveryDate, orderNotes) => {
		const { products } = await import("./products-ZEpX92BZ.mjs").then((n) => n.s);
		const orderItems = cart.map((item) => {
			const p = products.find((prod) => prod.id === item.productId);
			return {
				productId: item.productId,
				name: p?.name || "Jewelry Item",
				price: p?.price || 0,
				qty: item.qty,
				image: p?.images[0] || "/assets/logo.png"
			};
		});
		const total = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0) + shippingFee - discount;
		const newOrder = {
			id: "TBB-" + Math.floor(1e4 + Math.random() * 9e4),
			date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			status: paymentMethod.includes("Mobile Money") ? "Order Received" : "Payment Pending",
			total,
			paymentMethod,
			shippingAddress: address,
			items: orderItems,
			shippingFee,
			discount,
			promoCode,
			estDeliveryDate,
			orderNotes
		};
		setOrders((prev) => {
			const updated = [newOrder, ...prev];
			localStorage.setItem("naa-orders", JSON.stringify(updated));
			return updated;
		});
		setCart([]);
		return newOrder;
	}, [cart]);
	const updateOrderStatus = (0, import_react.useCallback)((orderId, status) => {
		setOrders((prev) => prev.map((o) => o.id === orderId ? {
			...o,
			status
		} : o));
	}, []);
	const resetFailedAttempts = (0, import_react.useCallback)(() => {
		setFailedLoginAttempts(0);
		setCaptchaRequired(false);
	}, []);
	const updateCediMultiplier = (0, import_react.useCallback)((val) => {
		setCediMultiplier(val);
	}, []);
	const updateFreeShippingThreshold = (0, import_react.useCallback)((val) => {
		setFreeShippingThreshold(val);
	}, []);
	const updateMaintenanceMode = (0, import_react.useCallback)((val) => {
		setMaintenanceMode(val);
	}, []);
	const updateMaxFailedAttempts = (0, import_react.useCallback)((val) => {
		setMaxFailedAttempts(val);
	}, []);
	const updateUserRole = (0, import_react.useCallback)((email, role) => {
		setUsersList((prev) => prev.map((u) => u.email.toLowerCase() === email.toLowerCase() ? {
			...u,
			role
		} : u));
	}, []);
	const updateUserStatus = (0, import_react.useCallback)((email, active) => {
		setUsersList((prev) => prev.map((u) => u.email.toLowerCase() === email.toLowerCase() ? {
			...u,
			active
		} : u));
	}, []);
	const incrementFailedAttempts = (0, import_react.useCallback)(() => {
		setFailedLoginAttempts((prev) => prev + 1);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value: {
			cart,
			wishlist,
			user,
			recentlyViewed,
			addresses,
			orders,
			failedLoginAttempts,
			captchaRequired,
			cediMultiplier,
			freeShippingThreshold,
			maintenanceMode,
			maxFailedAttempts,
			usersList,
			addToCart,
			removeFromCart,
			clearCart,
			setQty,
			toggleWishlist,
			isWishlisted,
			cartCount,
			login,
			signup,
			logout,
			addRecentlyViewed,
			addAddress,
			deleteAddress,
			createOrderFromCart,
			updateOrderStatus,
			updateCediMultiplier,
			updateFreeShippingThreshold,
			updateMaintenanceMode,
			updateMaxFailedAttempts,
			updateUserRole,
			updateUserStatus,
			resetFailedAttempts,
			incrementFailedAttempts
		},
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used within StoreProvider");
	return ctx;
}
//#endregion
export { useStore as n, StoreProvider as t };
