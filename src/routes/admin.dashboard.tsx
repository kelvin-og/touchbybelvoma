import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useStore, Order, User } from "@/lib/store";
import { products as initialProducts, formatPrice, getCediMultiplier } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  Percent,
  Plus,
  Trash2,
  Check,
  ArrowRight,
  ShieldAlert,
  DollarSign,
  Package,
  LogOut,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Control Panel | Touch by Bel'voma Admin" },
      {
        name: "description",
        content: "Administrative management portal for Touch by Bel'voma luxury brand.",
      },
    ],
  }),
  component: AdminDashboardComponent,
});

interface PromoCode {
  code: string;
  discount: number;
  status: "Active" | "Expired";
}

interface LocalProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

function AdminDashboardComponent() {
  const navigate = useNavigate();
  const { user, logout, orders: globalOrders, updateOrderStatus } = useStore();

  const [activeTab, setActiveTab] = useState<
    "analytics" | "products" | "inventory" | "orders" | "customers" | "promos"
  >("analytics");

  // Local state databases
  const [productsList, setProductsList] = useState<LocalProduct[]>([]);
  const ordersList = globalOrders;
  const [promosList, setPromosList] = useState<PromoCode[]>([]);
  const [customersList, setCustomersList] = useState<User[]>([]);

  // Add Product form states
  const [newProdName, setNewProdName] = useState("");
  const [newProdPrice, setNewProdPrice] = useState("");
  const [newProdCategory, setNewProdCategory] = useState("earrings");
  const [newProdStock, setNewProdStock] = useState("35");
  const [prodSuccess, setProdSuccess] = useState(false);

  // Add Promo form states
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);

  // Initialize DB lists from local storage or defaults
  useEffect(() => {
    // Check local storage for products list
    const storedProds = localStorage.getItem("tbb_admin_products");
    if (storedProds) {
      setProductsList(JSON.parse(storedProds));
    } else {
      const seededProds: LocalProduct[] = initialProducts.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        category: p.category,
        stock: p.id.includes("hoops") || p.id.includes("studs") ? 8 : 45,
      }));
      setProductsList(seededProds);
      localStorage.setItem("tbb_admin_products", JSON.stringify(seededProds));
    }

    // Promos
    const storedPromos = localStorage.getItem("tbb_admin_promos");
    if (storedPromos) {
      setPromosList(JSON.parse(storedPromos));
    } else {
      const initialPromos: PromoCode[] = [
        { code: "TBBGIFT", discount: 15, status: "Active" },
        { code: "BELVOMA10", discount: 10, status: "Active" },
        { code: "KUMASI5", discount: 5, status: "Active" },
      ];
      setPromosList(initialPromos);
      localStorage.setItem("tbb_admin_promos", JSON.stringify(initialPromos));
    }

    // Customers list
    const dbString = localStorage.getItem("naa-users-db");
    if (dbString) {
      setCustomersList(JSON.parse(dbString));
    } else {
      setCustomersList([]);
    }
  }, []);

  // Synchronized with global orders state reactive pipeline

  // Protect path check
  useEffect(() => {
    if (!user || user.role !== "admin") {
      const timer = setTimeout(() => {
        navigate({ to: "/admin/login" });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col justify-center items-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="h-10 w-10 border-t-2 border-gold rounded-full"
        />
        <p className="text-xs font-light text-gold-light mt-4 tracking-widest uppercase">
          Verifying secure admin protocols...
        </p>
      </div>
    );
  }

  // Action: Add new product
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice || !newProdStock) return;

    const newProd: LocalProduct = {
      id: newProdName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: newProdName,
      price: parseFloat(newProdPrice),
      category: newProdCategory,
      stock: parseInt(newProdStock),
    };

    const updated = [newProd, ...productsList];
    setProductsList(updated);
    localStorage.setItem("tbb_admin_products", JSON.stringify(updated));

    setNewProdName("");
    setNewProdPrice("");
    setNewProdStock("25");
    setProdSuccess(true);
    setTimeout(() => setProdSuccess(false), 3000);
  };

  // Action: Update stock quantity
  const handleUpdateStock = (id: string, newStockVal: number) => {
    const updated = productsList.map((p) =>
      p.id === id ? { ...p, stock: Math.max(0, newStockVal) } : p,
    );
    setProductsList(updated);
    localStorage.setItem("tbb_admin_products", JSON.stringify(updated));
  };

  // Action: Add promo code
  const handleAddPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode || !promoDiscount) return;

    const newPromo: PromoCode = {
      code: promoCode.toUpperCase().trim(),
      discount: parseInt(promoDiscount),
      status: "Active",
    };

    const updated = [newPromo, ...promosList];
    setPromosList(updated);
    localStorage.setItem("tbb_admin_promos", JSON.stringify(updated));

    setPromoCode("");
    setPromoDiscount("");
    setPromoSuccess(true);
    setTimeout(() => setPromoSuccess(false), 3000);
  };

  // Action: Delete promo code
  const handleDeletePromo = (code: string) => {
    const updated = promosList.filter((p) => p.code !== code);
    setPromosList(updated);
    localStorage.setItem("tbb_admin_promos", JSON.stringify(updated));
  };

  // Action: Process Order status changes
  const handleProcessOrder = (orderId: string, newStatus: Order["status"]) => {
    updateOrderStatus(orderId, newStatus);
  };

  // Calculate sales metrics
  const totalSalesUsd = ordersList.reduce((sum, o) => sum + o.total, 0);
  const totalSalesGhs = totalSalesUsd * getCediMultiplier(); // Localized currency value
  const totalOrders = ordersList.length;
  const averageOrderGhs = totalOrders > 0 ? totalSalesGhs / totalOrders : 0;

  const tabContentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background py-32">
      <div className="container-lux">
        {/* Header */}
        <div className="border-b border-border pb-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="eyebrow">Executive Panel</p>
            <h1 className="text-3xl font-semibold tracking-tight mt-1 text-foreground">
              Touch by Bel'voma Control Panel
            </h1>
            <p className="text-xs font-light text-muted-foreground mt-1">
              Logged in as <span className="font-semibold">{user.name}</span> (Security Level:
              Principal Administrator)
            </p>
          </div>
          <button
            onClick={() => {
              logout();
              navigate({ to: "/admin/login" });
            }}
            className="flex items-center gap-2 text-xs font-semibold text-charcoal border border-charcoal/20 hover:border-gold py-2 px-5 bg-card rounded-xl transition-all"
          >
            <LogOut className="h-4 w-4" /> End Admin Session
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 items-start">
          {/* Navigation Sidebar (Dark styled for control room) */}
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border shrink-0 min-w-0">
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "analytics"
                  ? "bg-charcoal text-white font-semibold shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <TrendingUp className="h-4 w-4 text-gold" /> Sales Analytics
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "products"
                  ? "bg-charcoal text-white font-semibold shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Package className="h-4 w-4 text-gold" /> Product Catalog
            </button>

            <button
              onClick={() => setActiveTab("inventory")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "inventory"
                  ? "bg-charcoal text-white font-semibold shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShieldAlert className="h-4 w-4 text-gold" /> Stock & Inventory
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "orders"
                  ? "bg-charcoal text-white font-semibold shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShoppingBag className="h-4 w-4 text-gold" /> Processing Orders
            </button>

            <button
              onClick={() => setActiveTab("customers")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "customers"
                  ? "bg-charcoal text-white font-semibold shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="h-4 w-4 text-gold" /> Customer Registry
            </button>

            <button
              onClick={() => setActiveTab("promos")}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === "promos"
                  ? "bg-charcoal text-white font-semibold shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Percent className="h-4 w-4 text-gold" /> Discounts & Promos
            </button>
          </nav>

          {/* Main Workspace Panels */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {/* Tab: Analytics */}
              {activeTab === "analytics" && (
                <motion.div
                  key="analytics"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card border border-border rounded-xl">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                        Total Revenue (Localized)
                      </p>
                      <h3 className="text-3xl font-semibold mt-1 text-gold">
                        GH₵ {totalSalesGhs.toLocaleString()}
                      </h3>
                      <p className="text-[10px] text-muted-foreground mt-2 font-light">
                        Accumulated value from processed cart checks.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                        Processed Sales
                      </p>
                      <h3 className="text-3xl font-semibold mt-1">{totalOrders} Purchases</h3>
                      <p className="text-[10px] text-muted-foreground mt-2 font-light">
                        Total verified transactions dispatched.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                        Average Ticket Value
                      </p>
                      <h3 className="text-3xl font-semibold mt-1">
                        GH₵{" "}
                        {averageOrderGhs.toLocaleString("en-US", {
                          maximumFractionDigits: 0,
                        })}
                      </h3>
                      <p className="text-[10px] text-muted-foreground mt-2 font-light">
                        Cedi shopping ticket mean conversion rate.
                      </p>
                    </div>
                  </div>

                  {/* Revenue Chart mock */}
                  <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                      Cedi Revenue Projection (2026)
                    </h3>
                    <div className="h-48 w-full flex items-end gap-3 pt-6">
                      {[15, 30, 45, 25, 60, 80, 95].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            className="w-full bg-gradient-to-t from-gold to-gold-light rounded-t-md relative group"
                          >
                            <span className="opacity-0 group-hover:opacity-100 absolute top-[-25px] left-1/2 -translate-x-1/2 text-[9px] font-semibold bg-charcoal text-white px-1.5 py-0.5 rounded transition-all whitespace-nowrap">
                              GH₵ {(h * 100 * getCediMultiplier()).toLocaleString()}
                            </span>
                          </motion.div>
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab: Products catalog */}
              {activeTab === "products" && (
                <motion.div
                  key="products"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Product Catalog
                  </h2>

                  {/* Success banner */}
                  <AnimatePresence>
                    {prodSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3.5 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2"
                      >
                        <CheckCircle className="h-4.5 w-4.5 text-green-600" /> New jewelry catalog
                        entry logged successfully.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Add Product Form */}
                  <form
                    onSubmit={handleAddProduct}
                    className="p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4"
                  >
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                      Log New Catalog Entry
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-2">
                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                          Product Name
                        </label>
                        <input
                          type="text"
                          required
                          value={newProdName}
                          onChange={(e) => setNewProdName(e.target.value)}
                          placeholder="e.g. Aurelia Gold Hoops"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                          Base Price ($)
                        </label>
                        <input
                          type="number"
                          required
                          value={newProdPrice}
                          onChange={(e) => setNewProdPrice(e.target.value)}
                          placeholder="e.g. 42"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                          Category
                        </label>
                        <select
                          value={newProdCategory}
                          onChange={(e) => setNewProdCategory(e.target.value)}
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        >
                          <option value="earrings">Earrings</option>
                          <option value="necklaces">Necklaces</option>
                          <option value="rings">Rings</option>
                          <option value="bracelets">Bracelets</option>
                          <option value="anklets">Anklets</option>
                          <option value="sets">Sets</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                          Stock Pieces
                        </label>
                        <input
                          type="number"
                          required
                          value={newProdStock}
                          onChange={(e) => setNewProdStock(e.target.value)}
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                      <div className="md:col-span-3 flex items-end">
                        <button
                          type="submit"
                          className="btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase flex items-center gap-1.5"
                        >
                          <Plus className="h-4 w-4" /> Add catalog piece
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Catalog table */}
                  <div className="overflow-x-auto border border-border rounded-xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-muted/40 border-b border-border uppercase tracking-widest text-[9px] text-muted-foreground font-semibold">
                          <th className="p-4">Name</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Base Price</th>
                          <th className="p-4">Cedi Price</th>
                          <th className="p-4">Stock</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {productsList.map((prod) => (
                          <tr key={prod.id} className="hover:bg-accent/10">
                            <td className="p-4 font-semibold text-foreground">{prod.name}</td>
                            <td className="p-4 text-muted-foreground uppercase tracking-widest text-[10px]">
                              {prod.category}
                            </td>
                            <td className="p-4 text-muted-foreground">${prod.price}</td>
                            <td className="p-4 font-semibold text-gold">
                              {formatPrice(prod.price)}
                            </td>
                            <td
                              className={`p-4 font-semibold ${prod.stock < 10 ? "text-red-500 font-bold" : "text-foreground"}`}
                            >
                              {prod.stock} Units
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Tab: Inventory Stock */}
              {activeTab === "inventory" && (
                <motion.div
                  key="inventory"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Stock Level Indicators
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productsList.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-4 border border-border bg-card rounded-xl flex items-center justify-between shadow-soft"
                      >
                        <div className="text-xs space-y-1">
                          <p className="font-semibold text-foreground">{prod.name}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                            {prod.category}
                          </p>
                          <div className="flex items-center gap-1.5 pt-1">
                            {prod.stock < 10 ? (
                              <span className="text-[9px] uppercase tracking-wider font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <ShieldAlert className="h-3 w-3" /> Critical Stock Level
                              </span>
                            ) : (
                              <span className="text-[9px] uppercase tracking-wider font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Check className="h-3 w-3" /> Stock Level Good
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Inventory adjustments */}
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleUpdateStock(prod.id, prod.stock - 5)}
                            className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-xs font-semibold bg-accent/30 hover:bg-accent transition-colors"
                          >
                            -5
                          </button>
                          <span className="text-xs font-bold text-foreground w-12 text-center">
                            {prod.stock}
                          </span>
                          <button
                            onClick={() => handleUpdateStock(prod.id, prod.stock + 5)}
                            className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-xs font-semibold bg-accent/30 hover:bg-accent transition-colors"
                          >
                            +5
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab: Orders */}
              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Processing Orders
                  </h2>

                  {ordersList.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-border rounded-xl">
                      <ShoppingBag className="h-10 w-10 text-muted-foreground/50 mx-auto mb-3" />
                      <h3 className="text-sm font-semibold">No transactions logged</h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                        No orders have been generated in system session database.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {ordersList.map((order) => (
                        <div
                          key={order.id}
                          className="p-5 border border-border bg-card rounded-xl space-y-4 shadow-soft"
                        >
                          <div className="flex flex-wrap justify-between items-start border-b border-border pb-3 gap-2">
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                                Order Ref
                              </p>
                              <p className="text-xs font-semibold">{order.id}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                                Recipient Name
                              </p>
                              <p className="text-xs font-semibold">
                                {order.shippingAddress.fullName}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                                Payment Channel
                              </p>
                              <p className="text-xs font-semibold text-gold">
                                {order.paymentMethod}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                                Current Status
                              </p>
                              <span
                                className={`inline-block text-[9px] font-semibold uppercase tracking-widest mt-0.5 px-2.5 py-0.5 rounded-full ${
                                  order.status === "Delivered"
                                    ? "bg-green-50 text-green-700 border border-green-100"
                                    : "bg-gold/10 text-gold border border-gold/20"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>

                          {/* Order items lists */}
                          <div className="text-xs space-y-1 bg-accent/20 p-3 rounded-lg">
                            {order.items.map((i, idx) => (
                              <p key={idx} className="font-light">
                                <span className="font-medium text-foreground">{i.name}</span> x{" "}
                                {i.qty} —{" "}
                                <span className="text-gold font-medium">
                                  {formatPrice(i.price)} each
                                </span>
                              </p>
                            ))}
                          </div>

                          <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span>
                              Ship To Digital Address:{" "}
                              <strong className="text-foreground uppercase">
                                {order.shippingAddress.gpsAddress}
                              </strong>{" "}
                              ({order.shippingAddress.streetAddress}, {order.shippingAddress.city})
                            </span>
                            <span className="font-semibold text-gold text-sm">
                              {formatPrice(order.total)}
                            </span>
                          </div>

                          {/* Action controls */}
                          <div className="flex flex-wrap gap-4 justify-between items-center border-t border-border pt-3">
                            <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
                              Adjust Dispatch Stage:
                            </span>
                            <select
                              value={order.status}
                              onChange={(e) =>
                                handleProcessOrder(order.id, e.target.value as Order["status"])
                              }
                              className="text-xs border border-border bg-card p-2 rounded-xl focus:border-gold outline-none font-semibold text-gold"
                            >
                              <option value="Payment Pending">Payment Pending</option>
                              <option value="Order Received">Order Received</option>
                              <option value="Payment Confirmed">Payment Confirmed</option>
                              <option value="Processing">Processing</option>
                              <option value="Packaging">Packaging</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab: Customers */}
              {activeTab === "customers" && (
                <motion.div
                  key="customers"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Customer Directory
                  </h2>

                  <div className="overflow-x-auto border border-border rounded-xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-muted/40 border-b border-border uppercase tracking-widest text-[9px] text-muted-foreground font-semibold">
                          <th className="p-4">Customer Name</th>
                          <th className="p-4">Email</th>
                          <th className="p-4">Ghana Phone</th>
                          <th className="p-4">Role</th>
                          <th className="p-4">Registration Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {customersList.map((cust, idx) => (
                          <tr key={idx} className="hover:bg-accent/10">
                            <td className="p-4 font-semibold text-foreground">{cust.name}</td>
                            <td className="p-4 text-muted-foreground">{cust.email}</td>
                            <td className="p-4 text-muted-foreground">{cust.phone}</td>
                            <td className="p-4">
                              <span
                                className={`inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                  cust.role === "admin"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-gold/10 text-gold"
                                }`}
                              >
                                {cust.role}
                              </span>
                            </td>
                            <td className="p-4 text-muted-foreground">
                              {new Date(cust.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Tab: Promos */}
              {activeTab === "promos" && (
                <motion.div
                  key="promos"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tabContentVariants}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground border-b border-border pb-4">
                    Discount Code Campaigns
                  </h2>

                  {promoSuccess && (
                    <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-light rounded-xl flex items-center gap-2">
                      <Check className="h-4 w-4" /> Promotional discount code generated
                      successfully.
                    </div>
                  )}

                  {/* Create Promo Code form */}
                  <form
                    onSubmit={handleAddPromo}
                    className="p-5 border border-gold/15 bg-gold/5 rounded-2xl space-y-4"
                  >
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-gold">
                      Create Campaign Code
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                          Coupon Code
                        </label>
                        <input
                          type="text"
                          required
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="e.g. LUXURY20"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none uppercase placeholder:normal-case"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                          Percentage Off (%)
                        </label>
                        <input
                          type="number"
                          required
                          value={promoDiscount}
                          onChange={(e) => setPromoDiscount(e.target.value)}
                          placeholder="e.g. 20"
                          className="w-full text-xs border border-border bg-card p-3 rounded-xl focus:border-gold outline-none"
                        />
                      </div>
                      <div className="flex items-end">
                        <button
                          type="submit"
                          className="btn-gold py-2.5 px-6 text-[10px] tracking-widest font-semibold uppercase w-full"
                        >
                          Register Coupon
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Promos Table */}
                  <div className="overflow-x-auto border border-border rounded-xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-muted/40 border-b border-border uppercase tracking-widest text-[9px] text-muted-foreground font-semibold">
                          <th className="p-4">Promo Code</th>
                          <th className="p-4">Discount Rate</th>
                          <th className="p-4">Active Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {promosList.map((promo) => (
                          <tr key={promo.code} className="hover:bg-accent/10">
                            <td className="p-4 font-semibold text-foreground uppercase tracking-widest">
                              {promo.code}
                            </td>
                            <td className="p-4 text-muted-foreground">{promo.discount}% Off</td>
                            <td className="p-4">
                              <span className="inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-50 text-green-700">
                                {promo.status}
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => handleDeletePromo(promo.code)}
                                className="text-muted-foreground hover:text-red-500 transition-colors p-2"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
