import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export interface CartItem {
  productId: string;
  qty: number;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  role: "user" | "admin" | "superadmin";
  createdAt: string;
  active?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status:
    | "Order Received"
    | "Payment Confirmed"
    | "Processing"
    | "Packaging"
    | "Shipped"
    | "Out for Delivery"
    | "Delivered"
    | "Payment Pending";
  total: number;
  paymentMethod: string;
  shippingAddress: GhanaAddress;
  items: {
    productId: string;
    name: string;
    price: number;
    qty: number;
    image: string;
  }[];
  shippingFee: number;
  discount: number;
  promoCode?: string;
  estDeliveryDate?: string;
  orderNotes?: string;
}

export interface GhanaAddress {
  id: string;
  fullName: string;
  phone: string;
  gpsAddress: string; // e.g. GA-182-9902
  streetAddress: string;
  city: string;
  region: string;
  area?: string;
  landmark?: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  user: User | null;
  recentlyViewed: string[];
  addresses: GhanaAddress[];
  orders: Order[];
  failedLoginAttempts: number;
  captchaRequired: boolean;

  cediMultiplier: number;
  freeShippingThreshold: number;
  maintenanceMode: boolean;
  maxFailedAttempts: number;
  usersList: User[];

  addToCart: (productId: string, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setQty: (productId: string, qty: number) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  cartCount: number;

  login: (
    email: string,
    password: string,
    role?: "user" | "admin" | "superadmin",
  ) => Promise<{
    success: boolean;
    error?: string;
    role?: "user" | "admin" | "superadmin";
  }>;
  signup: (data: {
    name: string;
    email: string;
    phone: string;
    password?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  addRecentlyViewed: (productId: string) => void;
  addAddress: (address: Omit<GhanaAddress, "id">) => void;
  deleteAddress: (id: string) => void;
  createOrderFromCart: (
    paymentMethod: string,
    address: GhanaAddress,
    shippingFee: number,
    discount: number,
    promoCode?: string,
    estDeliveryDate?: string,
    orderNotes?: string,
  ) => Promise<Order>;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  resetFailedAttempts: () => void;
  incrementFailedAttempts: () => void;

  updateCediMultiplier: (val: number) => void;
  updateFreeShippingThreshold: (val: number) => void;
  updateMaintenanceMode: (val: boolean) => void;
  updateMaxFailedAttempts: (val: number) => void;
  updateUserRole: (email: string, role: "user" | "admin" | "superadmin") => void;
  updateUserStatus: (email: string, active: boolean) => void;
}

const StoreContext = createContext<StoreState | null>(null);

// Pre-seeded users in memory/localstorage if not already set
const SEEDED_USERS = [
  {
    name: "Akosua Mensah",
    email: "luxury@belvoma.com",
    phone: "+233241234567",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // "password" in SHA-256 (mock) or plain for simplicity
    role: "user",
    createdAt: "2026-06-15T12:00:00Z",
  },
  {
    name: "Elorm Bel'voma",
    email: "admin@belvoma.com",
    phone: "+233509876543",
    passwordHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", // "admin123" (mock)
    role: "admin",
    createdAt: "2026-01-01T09:00:00Z",
  },
];

// Simple hashing function for simulation
const mockHash = (str: string): string => {
  // Simple deterministic string hash function representing SHA-256 in client mock
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return "hash_" + Math.abs(hash).toString(16);
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<GhanaAddress[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [failedLoginAttempts, setFailedLoginAttempts] = useState(0);
  const [captchaRequired, setCaptchaRequired] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Super Admin Configurable System State
  const [cediMultiplier, setCediMultiplier] = useState(15.0);
  const [freeShippingThreshold, setFreeShippingThreshold] = useState(1000);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maxFailedAttempts, setMaxFailedAttempts] = useState(3);
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    try {
      const c = localStorage.getItem("naa-cart");
      const w = localStorage.getItem("naa-wishlist");
      const u = localStorage.getItem("naa-user");
      const rv = localStorage.getItem("naa-recently");
      const addr = localStorage.getItem("naa-addresses");
      const ords = localStorage.getItem("naa-orders");

      // Hydrate custom configurations
      const storedMult = localStorage.getItem("tbb_config_cedi_multiplier");
      if (storedMult) setCediMultiplier(parseFloat(storedMult));

      const storedThreshold = localStorage.getItem("tbb_config_free_shipping");
      if (storedThreshold) setFreeShippingThreshold(parseInt(storedThreshold));

      const storedMaint = localStorage.getItem("tbb_config_maintenance");
      if (storedMaint) setMaintenanceMode(storedMaint === "true");

      const storedMaxAtt = localStorage.getItem("tbb_config_max_attempts");
      if (storedMaxAtt) setMaxFailedAttempts(parseInt(storedMaxAtt));

      // Seed/hydrate users db
      const storedUsers = localStorage.getItem("naa-users-db");
      let parsedUsers = [];
      if (storedUsers) {
        try {
          parsedUsers = JSON.parse(storedUsers);
        } catch (e) {
          parsedUsers = [...SEEDED_USERS];
        }
      } else {
        parsedUsers = [...SEEDED_USERS];
      }

      const hasSuper = parsedUsers.some(
        (u: User) => u.email.toLowerCase() === "superadmin@tbbv.com",
      );
      if (!hasSuper) {
        parsedUsers.push({
          name: "System Super Admin",
          email: "superadmin@tbbv.com",
          phone: "+233201112222",
          passwordHash: "hash_superadmin",
          role: "superadmin",
          createdAt: new Date().toISOString(),
          active: true,
        });
      }
      setUsersList(parsedUsers);
      localStorage.setItem("naa-users-db", JSON.stringify(parsedUsers));

      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
      if (u) setUser(JSON.parse(u));
      if (rv) setRecentlyViewed(JSON.parse(rv));

      if (addr) {
        setAddresses(JSON.parse(addr));
      } else {
        const initialAddr: GhanaAddress[] = [
          {
            id: "addr_1",
            fullName: "Akosua Mensah",
            phone: "+233 24 123 4567",
            gpsAddress: "GA-182-9902",
            streetAddress: "Ring Road East, Danquah Circle",
            city: "Accra",
            region: "Greater Accra",
          },
        ];
        setAddresses(initialAddr);
        localStorage.setItem("naa-addresses", JSON.stringify(initialAddr));
      }

      if (ords) {
        setOrders(JSON.parse(ords));
      } else {
        const initialOrders: Order[] = [
          {
            id: "TBB-90812",
            date: "2026-06-20",
            status: "Delivered",
            total: 102, // 102 USD * 15 = 1530 GHS
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
              landmark: "Near Koala Supermarket",
            },
            items: [
              {
                productId: "aurelia-hoops",
                name: "Aurelia Gold Hoops",
                price: 42,
                qty: 1,
                image: "/assets/prod-hoops.jpg",
              },
              {
                productId: "celeste-drops",
                name: "Celeste Filigree Drops",
                price: 48,
                qty: 1,
                image: "/assets/cat-earrings.jpg",
              },
            ],
            shippingFee: 0,
            discount: 0,
            promoCode: "",
            estDeliveryDate: "2026-06-22",
            orderNotes: "Leave at reception.",
          },
        ];
        setOrders(initialOrders);
        localStorage.setItem("naa-orders", JSON.stringify(initialOrders));
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("naa-cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("naa-wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (hydrated) {
      if (user) localStorage.setItem("naa-user", JSON.stringify(user));
      else localStorage.removeItem("naa-user");
    }
  }, [user, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("naa-recently", JSON.stringify(recentlyViewed));
  }, [recentlyViewed, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("naa-addresses", JSON.stringify(addresses));
  }, [addresses, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("naa-orders", JSON.stringify(orders));
  }, [orders, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("tbb_config_cedi_multiplier", cediMultiplier.toString());
    }
  }, [cediMultiplier, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("tbb_config_free_shipping", freeShippingThreshold.toString());
    }
  }, [freeShippingThreshold, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("tbb_config_maintenance", maintenanceMode.toString());
    }
  }, [maintenanceMode, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("tbb_config_max_attempts", maxFailedAttempts.toString());
    }
  }, [maxFailedAttempts, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("naa-users-db", JSON.stringify(usersList));
    }
  }, [usersList, hydrated]);

  const addToCart = useCallback((productId: string, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing)
        return prev.map((i) => (i.productId === productId ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { productId, qty }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((i) => i.productId !== productId)
        : prev.map((i) => (i.productId === productId ? { ...i, qty } : i)),
    );
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    );
  }, []);

  const isWishlisted = useCallback((productId: string) => wishlist.includes(productId), [wishlist]);

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);

  // Authentication Logics
  const login = useCallback(
    async (
      email: string,
      password: string,
      role?: "user" | "admin" | "superadmin",
    ): Promise<{ success: boolean; error?: string }> => {
      if (failedLoginAttempts >= maxFailedAttempts) {
        setCaptchaRequired(true);
      }

      // Rate Limiting simulation
      await new Promise((resolve) => setTimeout(resolve, 800));

      // read from local usersList state
      const found = usersList.find((u: User) => u.email.toLowerCase() === email.toLowerCase());

      if (!found) {
        setFailedLoginAttempts((prev) => prev + 1);
        return {
          success: false,
          error: "Invalid email or password credentials.",
        };
      }

      if (found.active === false) {
        return {
          success: false,
          error: "Access Denied: This account has been deactivated by Super Admin.",
        };
      }

      // Password verification logic
      // Seeds use standard SHA-256 values or simple strings
      const inputHash = mockHash(password);
      const matchSeeded1 =
        email.toLowerCase() === "luxury@belvoma.com" && password === "GoldLuxury2026!";
      const matchSeeded2 =
        email.toLowerCase() === "admin@belvoma.com" && password === "BelvomaAdmin2026!";
      const matchSuperSeeded =
        email.toLowerCase() === "superadmin@tbbv.com" && password === "tbbv123";
      const matchesMockHash = found.passwordHash === inputHash;

      if (matchSeeded1 || matchSeeded2 || matchSuperSeeded || matchesMockHash) {
        if (role && found.role !== role) {
          return {
            success: false,
            error: `Access denied. Account is not registered as an ${role}.`,
          };
        }

        const sessionUser: User = {
          name: found.name,
          email: found.email,
          phone: found.phone,
          role: found.role,
          createdAt: found.createdAt || new Date().toISOString(),
        };

        setUser(sessionUser);
        setFailedLoginAttempts(0);
        setCaptchaRequired(false);
        return { success: true, role: found.role };
      }

      setFailedLoginAttempts((prev) => prev + 1);
      return {
        success: false,
        error: "Invalid email or password credentials.",
      };
    },
    [failedLoginAttempts, usersList, maxFailedAttempts],
  );

  const signup = useCallback(
    async (data: {
      name: string;
      email: string;
      phone: string;
      password?: string;
    }): Promise<{ success: boolean; error?: string }> => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const dbString = localStorage.getItem("naa-users-db") || JSON.stringify(SEEDED_USERS);
      const usersDb = JSON.parse(dbString);

      const emailExists = usersDb.some(
        (u: User) => u.email.toLowerCase() === data.email.toLowerCase(),
      );
      if (emailExists) {
        return {
          success: false,
          error: "An account with this email address already exists.",
        };
      }

      const newUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        passwordHash: mockHash(data.password || "password"),
        role: "user" as const,
        createdAt: new Date().toISOString(),
      };

      usersDb.push(newUser);
      localStorage.setItem("naa-users-db", JSON.stringify(usersDb));

      // Log the user in instantly
      const sessionUser: User = {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        createdAt: newUser.createdAt,
      };
      setUser(sessionUser);
      setFailedLoginAttempts(0);
      setCaptchaRequired(false);

      return { success: true };
    },
    [],
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("naa-user");
  }, []);

  const addRecentlyViewed = useCallback((productId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 10);
    });
  }, []);

  const addAddress = useCallback((addressData: Omit<GhanaAddress, "id">) => {
    const newAddr: GhanaAddress = {
      ...addressData,
      id: "addr_" + Math.random().toString(36).slice(2, 9),
    };
    setAddresses((prev) => [...prev, newAddr]);
  }, []);

  const deleteAddress = useCallback((id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const createOrderFromCart = useCallback(
    async (
      paymentMethod: string,
      address: GhanaAddress,
      shippingFee: number,
      discount: number,
      promoCode?: string,
      estDeliveryDate?: string,
      orderNotes?: string,
    ): Promise<Order> => {
      // Look up details of items
      const { products } = await import("@/data/products");

      const orderItems = cart.map((item) => {
        const p = products.find((prod) => prod.id === item.productId);
        return {
          productId: item.productId,
          name: p?.name || "Jewelry Item",
          price: p?.price || 0,
          qty: item.qty,
          image: p?.images[0] || "/assets/logo.png",
        };
      });

      const itemsTotal = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);
      const total = itemsTotal + shippingFee - discount;

      const newOrder: Order = {
        id: "TBB-" + Math.floor(10000 + Math.random() * 90000),
        date: new Date().toISOString().split("T")[0],
        status: paymentMethod.includes("Mobile Money") ? "Order Received" : "Payment Pending",
        total,
        paymentMethod,
        shippingAddress: address,
        items: orderItems,
        shippingFee,
        discount,
        promoCode,
        estDeliveryDate,
        orderNotes,
      };

      setOrders((prev) => {
        const updated = [newOrder, ...prev];
        localStorage.setItem("naa-orders", JSON.stringify(updated));
        return updated;
      });
      setCart([]); // Clear cart after order placed
      return newOrder;
    },
    [cart],
  );

  const updateOrderStatus = useCallback((orderId: string, status: Order["status"]) => {
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status } : o)));
  }, []);

  const resetFailedAttempts = useCallback(() => {
    setFailedLoginAttempts(0);
    setCaptchaRequired(false);
  }, []);

  const updateCediMultiplier = useCallback((val: number) => {
    setCediMultiplier(val);
  }, []);

  const updateFreeShippingThreshold = useCallback((val: number) => {
    setFreeShippingThreshold(val);
  }, []);

  const updateMaintenanceMode = useCallback((val: boolean) => {
    setMaintenanceMode(val);
  }, []);

  const updateMaxFailedAttempts = useCallback((val: number) => {
    setMaxFailedAttempts(val);
  }, []);

  const updateUserRole = useCallback((email: string, role: "user" | "admin" | "superadmin") => {
    setUsersList((prev) =>
      prev.map((u) => (u.email.toLowerCase() === email.toLowerCase() ? { ...u, role } : u)),
    );
  }, []);

  const updateUserStatus = useCallback((email: string, active: boolean) => {
    setUsersList((prev) =>
      prev.map((u) => (u.email.toLowerCase() === email.toLowerCase() ? { ...u, active } : u)),
    );
  }, []);

  const incrementFailedAttempts = useCallback(() => {
    setFailedLoginAttempts((prev) => prev + 1);
  }, []);

  return (
    <StoreContext.Provider
      value={{
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
        incrementFailedAttempts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
