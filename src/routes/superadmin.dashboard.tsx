import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { MediaLibrarySection } from "@/components/admin/MediaLibrarySection";
import { ShippingSection } from "@/components/admin/ShippingSection";
import { ReviewsSection } from "@/components/admin/ReviewsSection";
import { SEOSection } from "@/components/admin/SEOSection";
import { PaymentsSection } from "@/components/admin/PaymentsSection";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useStore, Order, User } from "@/lib/store";
import {
  products as initialProducts,
  formatPrice,
  getCediMultiplier,
  type Product,
  type Category,
} from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  BarChart3,
  Tag,
  LogOut,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  XCircle,
  Star,
  Plus,
  Trash2,
  Edit3,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  ToggleLeft,
  ToggleRight,
  Check,
  ChevronDown,
  ChevronUp,
  Bell,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Key,
  Activity,
  Zap,
  Image,
  FileText,
  Palette,
  Megaphone,
  Gift,
  Truck,
  CreditCard,
  BarChart2,
  PieChart,
  Calendar,
  Archive,
  Copy,
  Save,
  X,
  ChevronRight,
  Layers,
  Hash,
  Percent,
  Terminal,
  Lock,
  Unlock,
  AlertCircle,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Package2,
  Boxes,
  Sparkles,
  Crown,
  MessageSquare,
  Send,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/superadmin/dashboard")({
  head: () => ({
    meta: [
      { title: "Super Admin | Touch by Bel'voma Control Center" },
      {
        name: "description",
        content: "World-class Super Administrator control center.",
      },
    ],
  }),
  component: SuperAdminDashboardComponent,
});

// ─── Types ──────────────────────────────────────────────────────────────────

interface AuditLog {
  id: string;
  timestamp: string;
  category: "Auth" | "Config" | "Security" | "Product" | "Order" | "Customer";
  action: string;
  user: string;
  ip: string;
  details?: string;
}

interface AdminProduct {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  discountPrice?: number;
  costPrice?: number;
  stock: number;
  status: "published" | "draft" | "archived";
  isFeatured: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  material: string;
  description: string;
  tags: string[];
  images: string[];
  weight?: string;
  seoTitle?: string;
  seoDesc?: string;
}

interface PromoCode {
  id: string;
  code: string;
  discount: number;
  type: "percentage" | "fixed";
  status: "active" | "expired" | "paused";
  usageCount: number;
  maxUsage?: number;
  expiresAt?: string;
}

interface SiteSettings {
  siteName: string;
  tagline: string;
  currency: string;
  timezone: string;
  primaryColor: string;
  accentColor: string;
  heroHeadline: string;
  heroSubheading: string;
  announcementBar: string;
  announcementEnabled: boolean;
  freeShippingMessage: string;
  instagramHandle: string;
  facebookHandle: string;
  twitterHandle: string;
  supportEmail: string;
  supportPhone: string;
  businessAddress: string;
  googleAnalyticsId: string;
  metaPixelId: string;
}

type NavSection =
  | "overview"
  | "products"
  | "orders"
  | "customers"
  | "marketing"
  | "analytics"
  | "content"
  | "payments"
  | "shipping"
  | "reviews"
  | "media"
  | "seo"
  | "security"
  | "settings"
  | "activity";

// ─── KPI Card ────────────────────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  sub,
  icon: Icon,
  trend,
  trendValue,
  color = "gold",
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  color?: "gold" | "green" | "blue" | "red" | "purple";
}) {
  const colorMap = {
    gold: "text-amber-600 bg-amber-50 border-amber-100",
    green: "text-emerald-600 bg-emerald-50 border-emerald-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    red: "text-red-600 bg-red-50 border-red-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between">
        <div className={`p-2.5 rounded-xl border ${colorMap[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
        {trend && trendValue && (
          <span
            className={`text-[10px] font-semibold flex items-center gap-0.5 px-2 py-0.5 rounded-full ${
              trend === "up"
                ? "text-emerald-600 bg-emerald-50"
                : trend === "down"
                  ? "text-red-500 bg-red-50"
                  : "text-gray-500 bg-gray-100"
            }`}
          >
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3" />
            ) : trend === "down" ? (
              <TrendingDown className="h-3 w-3" />
            ) : null}
            {trendValue}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs font-medium text-gray-500 mt-0.5 uppercase tracking-wider">{label}</p>
        {sub && <p className="text-[11px] text-gray-400 mt-1">{sub}</p>}
      </div>
    </motion.div>
  );
}

// ─── Sidebar Nav Item ────────────────────────────────────────────────────────

function NavItem({
  icon: Icon,
  label,
  section,
  active,
  badge,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  section: NavSection;
  active: boolean;
  badge?: number;
  onClick: (s: NavSection) => void;
}) {
  return (
    <button
      onClick={() => onClick(section)}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
        active
          ? "bg-amber-50 text-amber-700 border border-amber-200 shadow-sm"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
      }`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${active ? "text-amber-600" : ""}`} />
      <span className="flex-1 text-left tracking-wide">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="bg-red-500 text-white text-[9px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}

// ─── Mini Revenue Chart ───────────────────────────────────────────────────────

function MiniBarChart({ data, color = "#D4AF37" }: { data: number[]; color?: string }) {
  const max = Math.max(...data, 1);
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return (
    <div className="flex items-end gap-1 h-20">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(v / max) * 100}%` }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
            style={{ backgroundColor: color, minHeight: 2 }}
            className="w-full rounded-t-sm"
          />
          <span className="text-[8px] text-gray-400">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  actions,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-amber-50 border border-amber-100 rounded-xl">
          <Icon className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

// ─── Input Field ─────────────────────────────────────────────────────────────

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300";

const selectCls =
  "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none transition-all";

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Order Received": "bg-blue-50 text-blue-700 border-blue-200",
    "Payment Confirmed": "bg-indigo-50 text-indigo-700 border-indigo-200",
    Processing: "bg-amber-50 text-amber-700 border-amber-200",
    Packaging: "bg-orange-50 text-orange-700 border-orange-200",
    Shipped: "bg-purple-50 text-purple-700 border-purple-200",
    "Out for Delivery": "bg-teal-50 text-teal-700 border-teal-200",
    "Payment Pending": "bg-red-50 text-red-600 border-red-200",
    published: "bg-emerald-50 text-emerald-700 border-emerald-200",
    draft: "bg-gray-100 text-gray-600 border-gray-200",
    archived: "bg-orange-50 text-orange-700 border-orange-200",
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    expired: "bg-red-50 text-red-600 border-red-200",
    paused: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Banned: "bg-red-50 text-red-600 border-red-200",
  };
  const cls = map[status] || "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span
      className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cls}`}
    >
      {status}
    </span>
  );
}

// ─── Toast Notification ───────────────────────────────────────────────────────

function Toast({
  msg,
  type = "success",
  onClose,
}: {
  msg: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.96 }}
      className={`fixed top-6 right-6 z-[200] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl text-sm font-medium ${
        type === "success"
          ? "bg-emerald-600 text-white"
          : type === "error"
            ? "bg-red-600 text-white"
            : "bg-gray-900 text-white"
      }`}
    >
      {type === "success" ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : type === "error" ? (
        <XCircle className="h-4 w-4" />
      ) : (
        <Info className="h-4 w-4" />
      )}
      {msg}
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">
        <X className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  );
}

// ─── Overview Section ─────────────────────────────────────────────────────────

function OverviewSection({
  orders,
  products: prods,
  customers,
  cediMultiplier,
  addLog,
}: {
  orders: Order[];
  products: AdminProduct[];
  customers: User[];
  cediMultiplier: number;
  addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void;
}) {
  const safeOrders = Array.isArray(orders) ? orders.filter((o) => o && o.total != null && o.status) : [];
  const totalRevUsd = safeOrders.reduce((s, o) => s + (o.total || 0), 0);
  const totalRevGhs = totalRevUsd * cediMultiplier;
  const completedOrders = safeOrders.filter((o) => o.status === "Delivered").length;
  const pendingOrders = safeOrders.filter(
    (o) => o.status !== "Delivered" && o.status !== "Payment Pending",
  ).length;
  const cancelledOrders = safeOrders.filter((o) => o.status === "Payment Pending").length;
  const inStockProds = prods.filter((p) => p.stock > 10).length;
  const lowStockProds = prods.filter((p) => p.stock > 0 && p.stock <= 10).length;
  const outOfStock = prods.filter((p) => p.stock === 0).length;
  const todaySales = safeOrders
    .filter((o) => o.date === new Date().toISOString().split("T")[0])
    .reduce((s, o) => s + (o.total || 0) * cediMultiplier, 0);
  const avgOrderGhs = safeOrders.length > 0 ? totalRevGhs / safeOrders.length : 0;

  const revenueData = [12, 19, 28, 22, 35, 41, 38, 50, 45, 62, 58, 74];
  const salesData = [3, 5, 7, 4, 9, 11, 8, 13, 10, 15, 12, 18];

  const recentOrders = (Array.isArray(orders) ? [...orders] : [])
    .filter((o) => o && o.id && o.shippingAddress)
    .slice(0, 5);
  const bestSellers = prods.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={LayoutDashboard}
        title="Executive Dashboard"
        subtitle="Real-time overview of Touch by Bel'voma operations"
        actions={
          <button
            onClick={() =>
              addLog({
                category: "Config",
                action: "Dashboard refreshed",
                user: "superadmin",
                ip: "127.0.0.1",
              })
            }
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Refresh
          </button>
        }
      />

      {/* KPI Row 1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          label="Total Revenue"
          value={`GH₵ ${totalRevGhs.toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          sub="All-time accumulated"
          icon={DollarSign}
          color="gold"
          trend="up"
          trendValue="+18.4%"
        />
        <KpiCard
          label="Today's Sales"
          value={`GH₵ ${todaySales.toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          sub="Current day revenue"
          icon={Zap}
          color="green"
          trend="up"
          trendValue="+5.2%"
        />
        <KpiCard
          label="Total Orders"
          value={safeOrders.length}
          sub={`${completedOrders} completed`}
          icon={ShoppingCart}
          color="blue"
          trend="up"
          trendValue="+12%"
        />
        <KpiCard
          label="Avg Order Value"
          value={`GH₵ ${avgOrderGhs.toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          sub="Per transaction"
          icon={TrendingUp}
          color="purple"
          trend="up"
          trendValue="+3.1%"
        />
      </div>

      {/* KPI Row 2 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          label="Pending Orders"
          value={pendingOrders}
          sub="Awaiting processing"
          icon={Clock}
          color="gold"
          trend="neutral"
          trendValue="live"
        />
        <KpiCard
          label="Completed Orders"
          value={completedOrders}
          sub="Successfully delivered"
          icon={CheckCircle2}
          color="green"
        />
        <KpiCard
          label="Cancelled / Pending Pay"
          value={cancelledOrders}
          sub="Needs attention"
          icon={XCircle}
          color="red"
          trend="down"
          trendValue="-2"
        />
        <KpiCard
          label="Total Customers"
          value={customers.length}
          sub={`${customers.filter((c) => c.active !== false).length} active`}
          icon={UserCheck}
          color="blue"
          trend="up"
          trendValue="+8"
        />
      </div>

      {/* KPI Row 3 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          label="Products In Stock"
          value={inStockProds}
          sub="Healthy stock level"
          icon={Package}
          color="green"
        />
        <KpiCard
          label="Low Stock"
          value={lowStockProds}
          sub="≤10 units remaining"
          icon={AlertTriangle}
          color="gold"
          trend={lowStockProds > 0 ? "down" : "neutral"}
          trendValue={lowStockProds > 0 ? "Restock!" : "OK"}
        />
        <KpiCard
          label="Out of Stock"
          value={outOfStock}
          sub="Needs immediate restock"
          icon={AlertCircle}
          color="red"
        />
        <KpiCard
          label="Total Products"
          value={prods.length}
          sub="Across all categories"
          icon={Boxes}
          color="purple"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Revenue Trend</h3>
              <p className="text-[10px] text-gray-400">GH₵ — Monthly 2026</p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              +18.4% YTD
            </span>
          </div>
          <MiniBarChart data={revenueData} color="#D4AF37" />
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Orders Volume</h3>
              <p className="text-[10px] text-gray-400">Orders per month 2026</p>
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              +12% MoM
            </span>
          </div>
          <MiniBarChart data={salesData} color="#6366f1" />
        </div>
      </div>

      {/* Recent Orders + Best Sellers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-amber-500" /> Recent Orders
          </h3>
          {recentOrders.length === 0 ? (
            <p className="text-xs text-gray-400 py-4 text-center">No orders yet</p>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((o) => (
                <div
                  key={o.id}
                  className="flex items-center justify-between text-xs border-b border-gray-50 pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{o.id}</p>
                    <p className="text-gray-400">{o.shippingAddress?.fullName ?? "—"}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-amber-600">
                      GH₵{" "}
                      {((o.total || 0) * cediMultiplier).toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                    <StatusBadge status={o.status} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Crown className="h-4 w-4 text-amber-500" /> Best Selling Products
          </h3>
          {bestSellers.length === 0 ? (
            <p className="text-xs text-gray-400 py-4 text-center">No bestsellers marked</p>
          ) : (
            <div className="space-y-3">
              {bestSellers.map((p, i) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 text-xs border-b border-gray-50 pb-3 last:border-0 last:pb-0"
                >
                  <span className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 truncate">{p.name}</p>
                    <p className="text-gray-400 capitalize">{p.category}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-amber-600">{formatPrice(p.price)}</p>
                    <p className="text-gray-400">{p.stock} units</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="h-4 w-4 text-amber-500" /> Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { icon: Plus, label: "Add Product", color: "amber" },
            { icon: Tag, label: "New Promo", color: "purple" },
            { icon: Mail, label: "Send Email", color: "blue" },
            { icon: Download, label: "Export Orders", color: "green" },
            { icon: Upload, label: "Bulk Import", color: "indigo" },
            { icon: BarChart3, label: "View Reports", color: "rose" },
          ].map(({ icon: Ic, label, color }) => (
            <button
              key={label}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50 text-[10px] font-semibold uppercase tracking-wider text-gray-600 hover:text-amber-700 transition-all`}
            >
              <Ic className="h-5 w-5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Products Section ─────────────────────────────────────────────────────────

function ProductsSection({
  products: prods,
  setProducts,
  cediMultiplier,
  addLog,
}: {
  products: AdminProduct[];
  setProducts: React.Dispatch<React.SetStateAction<AdminProduct[]>>;
  cediMultiplier: number;
  addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void;
}) {
  const [view, setView] = useState<"list" | "form" | "edit">("list");
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const [form, setForm] = useState<Partial<AdminProduct>>({
    status: "published",
    isFeatured: false,
    isBestSeller: false,
    isNew: false,
    tags: [],
    images: [],
    category: "earrings",
  });
  const [tagInput, setTagInput] = useState("");

  const filtered = useMemo(
    () =>
      prods.filter((p) => {
        const matchSearch =
          !search ||
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.sku?.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase());
        const matchCat = catFilter === "all" || p.category === catFilter;
        const matchStatus = statusFilter === "all" || p.status === statusFilter;
        return matchSearch && matchCat && matchStatus;
      }),
    [prods, search, catFilter, statusFilter],
  );

  const showToast = useCallback((msg: string, type: "success" | "error" | "info" = "success") => {
    setToast({ msg, type });
  }, []);

  const saveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    if (editingId) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingId ? { ...p, ...(form as AdminProduct) } : p)),
      );
      addLog({
        category: "Product",
        action: `Edited product: ${form.name}`,
        user: "superadmin",
        ip: "127.0.0.1",
      });
      showToast(`"${form.name}" updated successfully`);
    } else {
      const newProd: AdminProduct = {
        id: (form.name || "product").toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
        name: form.name || "",
        sku: form.sku || `TBB-${Math.floor(Math.random() * 9000 + 1000)}`,
        category: form.category || "earrings",
        price: form.price || 0,
        discountPrice: form.discountPrice,
        costPrice: form.costPrice,
        stock: form.stock || 0,
        status: form.status || "published",
        isFeatured: form.isFeatured || false,
        isBestSeller: form.isBestSeller || false,
        isNew: form.isNew || false,
        material: form.material || "",
        description: form.description || "",
        tags: form.tags || [],
        images: form.images || [],
        weight: form.weight,
        seoTitle: form.seoTitle,
        seoDesc: form.seoDesc,
      };
      setProducts((prev) => {
        const updated = [newProd, ...prev];
        localStorage.setItem("tbb_admin_products_v2", JSON.stringify(updated));
        return updated;
      });
      addLog({
        category: "Product",
        action: `Created product: ${newProd.name}`,
        user: "superadmin",
        ip: "127.0.0.1",
      });
      showToast(`"${newProd.name}" added to catalog`);
    }
    setForm({
      status: "published",
      isFeatured: false,
      isBestSeller: false,
      isNew: false,
      tags: [],
      images: [],
      category: "earrings",
    });
    setEditingId(null);
    setView("list");
  };

  const deleteProduct = (id: string, name: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    addLog({
      category: "Product",
      action: `Deleted product: ${name}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`"${name}" removed from catalog`, "info");
  };

  const duplicateProduct = (prod: AdminProduct) => {
    const dup: AdminProduct = {
      ...prod,
      id: prod.id + "-copy-" + Date.now(),
      name: prod.name + " (Copy)",
      status: "draft",
    };
    setProducts((prev) => [dup, ...prev]);
    showToast(`Duplicated "${prod.name}"`);
  };

  const toggleFeatured = (id: string) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p)));
  };

  const toggleBestSeller = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isBestSeller: !p.isBestSeller } : p)),
    );
  };

  const archiveProduct = (id: string, name: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "archived" as const } : p)),
    );
    addLog({
      category: "Product",
      action: `Archived product: ${name}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`"${name}" archived`);
  };

  const bulkDelete = () => {
    setProducts((prev) => prev.filter((p) => !selected.includes(p.id)));
    addLog({
      category: "Product",
      action: `Bulk deleted ${selected.length} products`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`${selected.length} products deleted`, "info");
    setSelected([]);
  };

  const exportCSV = () => {
    const header = "ID,Name,SKU,Category,Price,Stock,Status\n";
    const rows = prods
      .map(
        (p) => `${p.id},${p.name},${p.sku || ""},${p.category},${p.price},${p.stock},${p.status}`,
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();
    showToast("Products exported as CSV");
  };

  const startEdit = (prod: AdminProduct) => {
    setForm({ ...prod });
    setEditingId(prod.id);
    setView("form");
  };

  const categories = ["earrings", "necklaces", "rings", "bracelets", "anklets", "sets"];

  if (view === "form") {
    return (
      <div className="space-y-6">
        <AnimatePresence>
          {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
        </AnimatePresence>
        <SectionHeader
          icon={editingId ? Edit3 : Plus}
          title={editingId ? "Edit Product" : "Add New Product"}
          subtitle="Complete product information below"
          actions={
            <button
              onClick={() => {
                setView("list");
                setEditingId(null);
                setForm({
                  status: "published",
                  isFeatured: false,
                  isBestSeller: false,
                  isNew: false,
                  tags: [],
                  images: [],
                  category: "earrings",
                });
              }}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-2 rounded-xl"
            >
              <X className="h-3.5 w-3.5" /> Cancel
            </button>
          }
        />
        <form onSubmit={saveProduct} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Product Name" required>
                <input
                  className={inputCls}
                  value={form.name || ""}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Aurelia Gold Hoops"
                  required
                />
              </Field>
              <Field label="SKU">
                <input
                  className={inputCls}
                  value={form.sku || ""}
                  onChange={(e) => setForm((f) => ({ ...f, sku: e.target.value }))}
                  placeholder="Auto-generated if blank"
                />
              </Field>
              <Field label="Category" required>
                <select
                  className={selectCls}
                  value={form.category || "earrings"}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Status">
                <select
                  className={selectCls}
                  value={form.status || "published"}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      status: e.target.value as AdminProduct["status"],
                    }))
                  }
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </Field>
            </div>
            <Field label="Description">
              <textarea
                className={inputCls + " h-24 resize-none"}
                value={form.description || ""}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Product description..."
              />
            </Field>
            <Field label="Material">
              <input
                className={inputCls}
                value={form.material || ""}
                onChange={(e) => setForm((f) => ({ ...f, material: e.target.value }))}
                placeholder="e.g. 18k Gold Plated Brass"
              />
            </Field>
          </div>

          {/* Pricing */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              Pricing & Inventory
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Field label="Base Price (USD)" required>
                <input
                  type="number"
                  step="0.01"
                  className={inputCls}
                  value={form.price || ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      price: parseFloat(e.target.value),
                    }))
                  }
                  placeholder="0.00"
                  required
                />
              </Field>
              <Field label="Sale Price (USD)">
                <input
                  type="number"
                  step="0.01"
                  className={inputCls}
                  value={form.discountPrice || ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      discountPrice: parseFloat(e.target.value),
                    }))
                  }
                  placeholder="0.00"
                />
              </Field>
              <Field label="Cost Price (USD)">
                <input
                  type="number"
                  step="0.01"
                  className={inputCls}
                  value={form.costPrice || ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      costPrice: parseFloat(e.target.value),
                    }))
                  }
                  placeholder="0.00"
                />
              </Field>
              <Field label="Stock Qty" required>
                <input
                  type="number"
                  className={inputCls}
                  value={form.stock ?? ""}
                  onChange={(e) => setForm((f) => ({ ...f, stock: parseInt(e.target.value) }))}
                  placeholder="0"
                  required
                />
              </Field>
            </div>
            {form.price && form.costPrice && (
              <p className="text-xs text-emerald-600 font-medium">
                Profit Margin: {(((form.price - form.costPrice) / form.price) * 100).toFixed(1)}% —
                GH₵ {((form.price - form.costPrice) * cediMultiplier).toFixed(2)} per unit
              </p>
            )}
          </div>

          {/* Product Images */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              Product Images
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {(form.images || []).map((img, idx) => (
                <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                  <button type="button"
                    onClick={() => setForm((f) => ({ ...f, images: (f.images || []).filter((_, i) => i !== idx) }))}
                    className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="h-3 w-3" />
                  </button>
                  {idx === 0 && <span className="absolute bottom-1 left-1 text-[8px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded-full">Main</span>}
                </div>
              ))}
              <label className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-amber-400 bg-gray-50 hover:bg-amber-50 flex flex-col items-center justify-center cursor-pointer transition-all gap-1">
                <Image className="h-6 w-6 text-gray-400" />
                <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Add Image</span>
                <input type="file" accept="image/*" multiple className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (!files) return;
                    Array.from(files).forEach((file) => {
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        const url = ev.target?.result as string;
                        setForm((f) => ({ ...f, images: [...(f.images || []), url] }));
                      };
                      reader.readAsDataURL(file);
                    });
                  }} />
              </label>
            </div>
            <p className="text-[9px] text-gray-400">First image is used as the main product photo. Drag to reorder (coming soon).</p>
          </div>

          {/* Labels */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4">
              Labels & Flags
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { key: "isFeatured", label: "Featured Product" },
                { key: "isBestSeller", label: "Best Seller" },
                { key: "isNew", label: "New Arrival" },
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!(form as Record<string, unknown>)[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.checked }))}
                    className="w-4 h-4 rounded accent-amber-500"
                  />
                  <span className="text-xs font-medium text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4">Tags</h3>
            <div className="flex gap-2 mb-3">
              <input
                className={inputCls + " flex-1"}
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (tagInput.trim()) {
                      setForm((f) => ({
                        ...f,
                        tags: [...(f.tags || []), tagInput.trim()],
                      }));
                      setTagInput("");
                    }
                  }
                }}
                placeholder="Add tag and press Enter..."
              />
              <button
                type="button"
                onClick={() => {
                  if (tagInput.trim()) {
                    setForm((f) => ({
                      ...f,
                      tags: [...(f.tags || []), tagInput.trim()],
                    }));
                    setTagInput("");
                  }
                }}
                className="px-4 py-2 bg-amber-100 text-amber-700 rounded-xl text-xs font-semibold hover:bg-amber-200 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {(form.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        tags: (f.tags || []).filter((t) => t !== tag),
                      }))
                    }
                    className="hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              SEO Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="SEO Title">
                <input
                  className={inputCls}
                  value={form.seoTitle || ""}
                  onChange={(e) => setForm((f) => ({ ...f, seoTitle: e.target.value }))}
                  placeholder="Search engine title..."
                />
              </Field>
              <Field label="Weight">
                <input
                  className={inputCls}
                  value={form.weight || ""}
                  onChange={(e) => setForm((f) => ({ ...f, weight: e.target.value }))}
                  placeholder="e.g. 25g"
                />
              </Field>
            </div>
            <Field label="SEO Description">
              <textarea
                className={inputCls + " h-20 resize-none"}
                value={form.seoDesc || ""}
                onChange={(e) => setForm((f) => ({ ...f, seoDesc: e.target.value }))}
                placeholder="Meta description for search engines..."
              />
            </Field>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn-gold px-8 py-3 text-xs tracking-widest">
              <Save className="h-4 w-4" /> {editingId ? "Update Product" : "Add Product"}
            </button>
            <button
              type="button"
              onClick={() => {
                setView("list");
                setEditingId(null);
              }}
              className="px-6 py-3 border border-gray-200 text-gray-600 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      <SectionHeader
        icon={Package}
        title="Product Management"
        subtitle={`${prods.length} total products in catalog`}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
            >
              <Download className="h-3.5 w-3.5" /> Export CSV
            </button>
            {selected.length > 0 && (
              <button
                onClick={bulkDelete}
                className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-red-500 hover:text-white hover:bg-red-500 border border-red-200 hover:border-red-500 px-3 py-2 rounded-xl transition-all"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete ({selected.length})
              </button>
            )}
            <button
              onClick={() => setView("form")}
              className="btn-gold px-4 py-2 text-[10px] tracking-widest"
            >
              <Plus className="h-3.5 w-3.5" /> Add Product
            </button>
          </div>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            className={inputCls + " pl-9"}
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className={selectCls + " w-auto"}
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          {["earrings", "necklaces", "rings", "bracelets", "anklets", "sets"].map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
        <select
          className={selectCls + " w-auto"}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 w-10">
                  <input
                    type="checkbox"
                    onChange={(e) => setSelected(e.target.checked ? filtered.map((p) => p.id) : [])}
                    checked={selected.length === filtered.length && filtered.length > 0}
                    className="w-3.5 h-3.5 accent-amber-500"
                  />
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Product
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  SKU
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Price (GH₵)
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Stock
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Status
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Flags
                </th>
                <th className="p-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((prod) => (
                <tr key={prod.id} className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selected.includes(prod.id)}
                      onChange={(e) =>
                        setSelected((s) =>
                          e.target.checked ? [...s, prod.id] : s.filter((x) => x !== prod.id),
                        )
                      }
                      className="w-3.5 h-3.5 accent-amber-500"
                    />
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-semibold text-gray-900">{prod.name}</p>
                      <p className="text-[10px] text-gray-400 capitalize">{prod.category}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-500 font-mono text-[10px]">{prod.sku || "—"}</td>
                  <td className="p-4">
                    <p className="font-bold text-amber-600">
                      GH₵{" "}
                      {(prod.price * cediMultiplier).toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                    {prod.discountPrice && (
                      <p className="text-[10px] text-gray-400 line-through">
                        GH₵ {(prod.discountPrice * cediMultiplier).toFixed(0)}
                      </p>
                    )}
                  </td>
                  <td className="p-4">
                    <span
                      className={`font-bold ${prod.stock === 0 ? "text-red-600" : prod.stock <= 10 ? "text-amber-600" : "text-gray-700"}`}
                    >
                      {prod.stock} units
                    </span>
                  </td>
                  <td className="p-4">
                    <StatusBadge status={prod.status} />
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1.5 flex-wrap">
                      {prod.isBestSeller && (
                        <span className="text-[8px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
                          Best Seller
                        </span>
                      )}
                      {prod.isFeatured && (
                        <span className="text-[8px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                      {prod.isNew && (
                        <span className="text-[8px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => startEdit(prod)}
                        title="Edit"
                        className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => duplicateProduct(prod)}
                        title="Duplicate"
                        className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => toggleFeatured(prod.id)}
                        title="Toggle Featured"
                        className={`p-1.5 rounded-lg transition-colors ${prod.isFeatured ? "text-purple-600 bg-purple-50" : "text-gray-400 hover:text-purple-600 hover:bg-purple-50"}`}
                      >
                        <Star className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => toggleBestSeller(prod.id)}
                        title="Toggle Best Seller"
                        className={`p-1.5 rounded-lg transition-colors ${prod.isBestSeller ? "text-amber-600 bg-amber-50" : "text-gray-400 hover:text-amber-600 hover:bg-amber-50"}`}
                      >
                        <Crown className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => archiveProduct(prod.id, prod.name)}
                        title="Archive"
                        className="p-1.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      >
                        <Archive className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProduct(prod.id, prod.name)}
                        title="Delete"
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <Package className="h-10 w-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-400">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Orders Section ───────────────────────────────────────────────────────────

function OrdersSection({
  orders: rawOrders,
  updateOrderStatus,
  cediMultiplier,
  addLog,
}: {
  orders: Order[];
  updateOrderStatus: (id: string, status: Order["status"]) => void;
  cediMultiplier: number;
  addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void;
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);

  // Sanitize orders so null/undefined fields never crash the render
  const orders = useMemo<Order[]>(() => {
    if (!Array.isArray(rawOrders)) return [];
    return rawOrders.map((o) => ({
      ...o,
      id: o?.id ?? "—",
      date: o?.date ?? "—",
      status: o?.status ?? "Order Received",
      total: typeof o?.total === "number" ? o.total : 0,
      paymentMethod: o?.paymentMethod ?? "—",
      shippingFee: typeof o?.shippingFee === "number" ? o.shippingFee : 0,
      discount: typeof o?.discount === "number" ? o.discount : 0,
      items: Array.isArray(o?.items) ? o.items.map((item) => ({
        productId: item?.productId ?? "",
        name: item?.name ?? "Item",
        price: typeof item?.price === "number" ? item.price : 0,
        qty: typeof item?.qty === "number" ? item.qty : 1,
        image: item?.image ?? "",
      })) : [],
      shippingAddress: {
        id: o?.shippingAddress?.id ?? "",
        fullName: o?.shippingAddress?.fullName ?? "Unknown",
        phone: o?.shippingAddress?.phone ?? "—",
        gpsAddress: o?.shippingAddress?.gpsAddress ?? "—",
        streetAddress: o?.shippingAddress?.streetAddress ?? "—",
        city: o?.shippingAddress?.city ?? "—",
        region: o?.shippingAddress?.region ?? "—",
        area: o?.shippingAddress?.area,
        landmark: o?.shippingAddress?.landmark,
      },
    }));
  }, [rawOrders]);

  const showToast = useCallback(
    (msg: string, type: "success" | "error" | "info" = "success") => setToast({ msg, type }),
    [],
  );

  const filtered = useMemo(
    () =>
      orders.filter((o) => {
        const matchSearch =
          !search ||
          o.id.toLowerCase().includes(search.toLowerCase()) ||
          o.shippingAddress.fullName.toLowerCase().includes(search.toLowerCase()) ||
          o.paymentMethod.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "all" || o.status === statusFilter;
        return matchSearch && matchStatus;
      }),
    [orders, search, statusFilter],
  );

  const handleStatus = (id: string, status: Order["status"]) => {
    updateOrderStatus(id, status);
    addLog({
      category: "Order",
      action: `Updated order ${id} status to ${status}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`Order ${id} → ${status}`);
  };

  const exportOrders = () => {
    try {
      const header = "ID,Date,Customer,Total (GHS),Payment,Status\n";
      const rows = orders
        .map(
          (o) =>
            `${o.id},${o.date},${o.shippingAddress.fullName},${(o.total * cediMultiplier).toFixed(2)},${o.paymentMethod},${o.status}`,
        )
        .join("\n");
      const blob = new Blob([header + rows], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "orders.csv";
      a.click();
      URL.revokeObjectURL(url);
      showToast("Orders exported");
    } catch {
      showToast("Export failed", "error");
    }
  };

  const generateInvoice = (o: Order) => {
    try {
      const ghs = (o.total * cediMultiplier).toFixed(2);
      const itemLines = o.items
        .map((i) => `  ${i.name} x${i.qty} — GH₵ ${(i.price * cediMultiplier * i.qty).toFixed(2)}`)
        .join("\n");
      const content = [
        "TOUCH BY BEL'VOMA",
        `INVOICE: ${o.id}`,
        `Date: ${o.date}`,
        `Customer: ${o.shippingAddress.fullName}`,
        `Address: ${o.shippingAddress.streetAddress}, ${o.shippingAddress.city}`,
        `GPS: ${o.shippingAddress.gpsAddress}`,
        "",
        "Items:",
        itemLines,
        "",
        `Shipping Fee: GH₵ ${(o.shippingFee * cediMultiplier).toFixed(2)}`,
        `Discount: GH₵ ${(o.discount * cediMultiplier).toFixed(2)}`,
        `Total: GH₵ ${ghs}`,
        `Payment: ${o.paymentMethod}`,
        `Status: ${o.status}`,
      ].join("\n");
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${o.id}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(`Invoice downloaded for ${o.id}`);
    } catch {
      showToast("Invoice generation failed", "error");
    }
  };

  const orderStatuses: Order["status"][] = [
    "Order Received",
    "Payment Confirmed",
    "Processing",
    "Packaging",
    "Shipped",
    "Out for Delivery",
    "Delivered",
    "Payment Pending",
  ];

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      <SectionHeader
        icon={ShoppingBag}
        title="Order Management"
        subtitle={`${orders.length} total orders`}
        actions={
          <button
            onClick={exportOrders}
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
          >
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "All Orders",
            val: orders.length,
            color: "bg-gray-50 text-gray-700",
          },
          {
            label: "Delivered",
            val: orders.filter((o) => o.status === "Delivered").length,
            color: "bg-emerald-50 text-emerald-700",
          },
          {
            label: "In Progress",
            val: orders.filter((o) => !["Delivered", "Payment Pending"].includes(o.status)).length,
            color: "bg-amber-50 text-amber-700",
          },
          {
            label: "Pending Pay",
            val: orders.filter((o) => o.status === "Payment Pending").length,
            color: "bg-red-50 text-red-700",
          },
        ].map(({ label, val, color }) => (
          <div key={label} className={`${color} rounded-2xl p-4 border border-white/60`}>
            <p className="text-2xl font-bold">{val}</p>
            <p className="text-[10px] uppercase tracking-widest font-semibold mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            className={inputCls + " pl-9"}
            placeholder="Search orders, customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className={selectCls + " w-auto"}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          {orderStatuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl py-16 text-center">
            <ShoppingBag className="h-10 w-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-400">No orders found</p>
          </div>
        ) : (
          filtered.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Order Header */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-xl">
                    <ShoppingBag className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{order.id}</p>
                    <p className="text-[10px] text-gray-400">
                      {order.date} · {order.shippingAddress.fullName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-amber-600">
                    GH₵{" "}
                    {(order.total * cediMultiplier).toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <StatusBadge status={order.status} />
                  <span className="text-gray-300">
                    {expandedId === order.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedId === order.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="p-5 space-y-4">
                      {/* Info Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Payment
                          </p>
                          <p className="font-semibold text-gray-800">{order.paymentMethod}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            GPS Address
                          </p>
                          <p className="font-semibold text-gray-800">
                            {order.shippingAddress.gpsAddress}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            City
                          </p>
                          <p className="font-semibold text-gray-800">
                            {order.shippingAddress.city}, {order.shippingAddress.region}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Est. Delivery
                          </p>
                          <p className="font-semibold text-gray-800">
                            {order.estDeliveryDate || "—"}
                          </p>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex justify-between text-xs">
                            <span className="text-gray-700 font-medium">
                              {item.name} <span className="text-gray-400">×{item.qty}</span>
                            </span>
                            <span className="font-semibold text-amber-600">
                              GH₵ {(item.price * cediMultiplier * item.qty).toFixed(2)}
                            </span>
                          </div>
                        ))}
                        <div className="border-t border-gray-200 pt-2 flex justify-between text-xs font-bold">
                          <span>Total</span>
                          <span className="text-amber-600">
                            GH₵ {(order.total * cediMultiplier).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3 items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            Update Status:
                          </span>
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatus(order.id, e.target.value as Order["status"])
                            }
                            className="text-xs border border-gray-200 bg-white px-3 py-2 rounded-xl focus:border-amber-400 outline-none font-semibold text-amber-700"
                          >
                            {orderStatuses.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => generateInvoice(order)}
                            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
                          >
                            <Download className="h-3.5 w-3.5" /> Invoice
                          </button>
                          <button className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-blue-600 border border-gray-200 hover:border-blue-300 px-3 py-2 rounded-xl transition-all">
                            <MessageSquare className="h-3.5 w-3.5" /> Note
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

// ─── Customers Section ────────────────────────────────────────────────────────

function CustomersSection({
  customers,
  orders,
  updateUserRole,
  updateUserStatus,
  addLog,
}: {
  customers: User[];
  orders: Order[];
  updateUserRole: (email: string, role: "user" | "admin" | "superadmin") => void;
  updateUserStatus: (email: string, active: boolean) => void;
  addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void;
}) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [expandedEmail, setExpandedEmail] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const showToast = useCallback(
    (msg: string, type: "success" | "error" | "info" = "success") => setToast({ msg, type }),
    [],
  );

  const filtered = useMemo(
    () =>
      customers.filter((c) => {
        const matchSearch =
          !search ||
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.email.toLowerCase().includes(search.toLowerCase()) ||
          c.phone.includes(search);
        const matchRole = roleFilter === "all" || c.role === roleFilter;
        return matchSearch && matchRole;
      }),
    [customers, search, roleFilter],
  );

  const exportCustomers = () => {
    const header = "Name,Email,Phone,Role,Status,Joined\n";
    const rows = customers
      .map(
        (c) =>
          `${c.name},${c.email},${c.phone},${c.role},${c.active !== false ? "Active" : "Banned"},${c.createdAt}`,
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "customers.csv";
    a.click();
    showToast("Customers exported");
  };

  const getCustomerOrders = (email: string) =>
    orders.filter((o) =>
      o.shippingAddress.fullName.toLowerCase().includes(
        email
          .split("@")[0]
          .replace(/[^a-z]/g, "")
          .toLowerCase()
          .slice(0, 5),
      ),
    ).length;

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      <SectionHeader
        icon={Users}
        title="Customer Management"
        subtitle={`${customers.length} registered customers`}
        actions={
          <button
            onClick={exportCustomers}
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
          >
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total",
            val: customers.length,
            color: "bg-blue-50 text-blue-700",
          },
          {
            label: "Active",
            val: customers.filter((c) => c.active !== false).length,
            color: "bg-emerald-50 text-emerald-700",
          },
          {
            label: "Admins",
            val: customers.filter((c) => c.role === "admin").length,
            color: "bg-purple-50 text-purple-700",
          },
          {
            label: "Banned",
            val: customers.filter((c) => c.active === false).length,
            color: "bg-red-50 text-red-700",
          },
        ].map(({ label, val, color }) => (
          <div key={label} className={`${color} rounded-2xl p-4`}>
            <p className="text-2xl font-bold">{val}</p>
            <p className="text-[10px] uppercase tracking-widest font-semibold mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            className={inputCls + " pl-9"}
            placeholder="Search by name, email, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className={selectCls + " w-auto"}
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="user">Customers</option>
          <option value="admin">Admins</option>
          <option value="superadmin">Super Admins</option>
        </select>
      </div>

      {/* Customer Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Customer
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Contact
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Role
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Status
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Joined
                </th>
                <th className="p-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((cust) => (
                <>
                  <tr
                    key={cust.email}
                    className="hover:bg-amber-50/20 cursor-pointer transition-colors"
                    onClick={() =>
                      setExpandedEmail(expandedEmail === cust.email ? null : cust.email)
                    }
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xs uppercase shrink-0">
                          {cust.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{cust.name}</p>
                          <p className="text-gray-400 text-[10px]">{cust.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{cust.phone}</td>
                    <td className="p-4">
                      <select
                        value={cust.role}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          updateUserRole(
                            cust.email,
                            e.target.value as "user" | "admin" | "superadmin",
                          );
                          addLog({
                            category: "Customer",
                            action: `Role changed for ${cust.email} → ${e.target.value}`,
                            user: "superadmin",
                            ip: "127.0.0.1",
                          });
                          showToast(`${cust.name}'s role updated to ${e.target.value}`);
                        }}
                        className="text-[10px] border border-gray-200 bg-white px-2 py-1 rounded-lg focus:border-amber-400 outline-none font-semibold text-gray-700"
                      >
                        <option value="user">Customer</option>
                        <option value="admin">Admin</option>
                        <option value="superadmin">Super Admin</option>
                      </select>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={cust.active !== false ? "Active" : "Banned"} />
                    </td>
                    <td className="p-4 text-gray-500">
                      {new Date(cust.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const next = !(cust.active !== false);
                          updateUserStatus(cust.email, next);
                          addLog({
                            category: "Customer",
                            action: `Account ${next ? "activated" : "banned"}: ${cust.email}`,
                            user: "superadmin",
                            ip: "127.0.0.1",
                          });
                          showToast(
                            `${cust.name} ${next ? "activated" : "banned"}`,
                            next ? "success" : "info",
                          );
                        }}
                        className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl border transition-all ${
                          cust.active !== false
                            ? "text-red-500 border-red-200 hover:bg-red-500 hover:text-white"
                            : "text-emerald-600 border-emerald-200 hover:bg-emerald-500 hover:text-white"
                        }`}
                      >
                        {cust.active !== false ? "Ban" : "Activate"}
                      </button>
                    </td>
                  </tr>
                  {expandedEmail === cust.email && (
                    <tr key={cust.email + "-exp"} className="bg-amber-50/30">
                      <td colSpan={6} className="px-6 py-4">
                        <div className="flex flex-wrap gap-6 text-xs">
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                              Email
                            </p>
                            <p className="text-gray-700">{cust.email}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                              Phone
                            </p>
                            <p className="text-gray-700">{cust.phone}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                              Account ID
                            </p>
                            <p className="font-mono text-gray-700 text-[10px]">
                              {cust.email.split("@")[0]}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1.5 text-[10px] font-semibold text-blue-600 border border-blue-200 px-3 py-1.5 rounded-xl hover:bg-blue-50 transition-colors">
                              <Mail className="h-3 w-3" /> Send Email
                            </button>
                            <button className="flex items-center gap-1.5 text-[10px] font-semibold text-purple-600 border border-purple-200 px-3 py-1.5 rounded-xl hover:bg-purple-50 transition-colors">
                              <Gift className="h-3 w-3" /> Issue Coupon
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <Users className="h-10 w-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-400">No customers found</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Marketing Section ────────────────────────────────────────────────────────

function MarketingSection({ addLog }: { addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void }) {
  const [promos, setPromos] = useState<PromoCode[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_admin_promos_v2") : null;
    if (stored) return JSON.parse(stored);
    return [
      {
        id: "1",
        code: "TBBGIFT",
        discount: 15,
        type: "percentage",
        status: "active",
        usageCount: 24,
        maxUsage: 100,
      },
      {
        id: "2",
        code: "BELVOMA10",
        discount: 10,
        type: "percentage",
        status: "active",
        usageCount: 67,
        maxUsage: 200,
      },
      {
        id: "3",
        code: "KUMASI5",
        discount: 5,
        type: "percentage",
        status: "active",
        usageCount: 12,
      },
      {
        id: "4",
        code: "FLAT50",
        discount: 50,
        type: "fixed",
        status: "paused",
        usageCount: 3,
      },
    ];
  });
  const [form, setForm] = useState({
    code: "",
    discount: "",
    type: "percentage",
    maxUsage: "",
  });
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const showToast = useCallback(
    (msg: string, type: "success" | "error" | "info" = "success") => setToast({ msg, type }),
    [],
  );

  const savePromos = (updated: PromoCode[]) => {
    setPromos(updated);
    localStorage.setItem("tbb_admin_promos_v2", JSON.stringify(updated));
  };

  const addPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.code || !form.discount) return;
    const newPromo: PromoCode = {
      id: Date.now().toString(),
      code: form.code.toUpperCase().trim(),
      discount: parseFloat(form.discount),
      type: form.type as PromoCode["type"],
      status: "active",
      usageCount: 0,
      maxUsage: form.maxUsage ? parseInt(form.maxUsage) : undefined,
    };
    savePromos([newPromo, ...promos]);
    addLog({
      category: "Config",
      action: `Created promo code: ${newPromo.code}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`Promo "${newPromo.code}" created`);
    setForm({ code: "", discount: "", type: "percentage", maxUsage: "" });
  };

  const togglePromoStatus = (id: string) => {
    const updated = promos.map((p) =>
      p.id === id
        ? {
            ...p,
            status: p.status === "active" ? ("paused" as const) : ("active" as const),
          }
        : p,
    );
    savePromos(updated);
    showToast("Promo status updated");
  };

  const deletePromo = (id: string, code: string) => {
    savePromos(promos.filter((p) => p.id !== id));
    addLog({
      category: "Config",
      action: `Deleted promo code: ${code}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`Promo "${code}" deleted`, "info");
  };

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      <SectionHeader
        icon={Megaphone}
        title="Marketing Center"
        subtitle="Promo codes, discounts & campaigns"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Active Promos",
            val: promos.filter((p) => p.status === "active").length,
            color: "bg-emerald-50 text-emerald-700",
          },
          {
            label: "Total Uses",
            val: promos.reduce((s, p) => s + p.usageCount, 0),
            color: "bg-blue-50 text-blue-700",
          },
          {
            label: "Paused",
            val: promos.filter((p) => p.status === "paused").length,
            color: "bg-amber-50 text-amber-700",
          },
          {
            label: "Total Codes",
            val: promos.length,
            color: "bg-purple-50 text-purple-700",
          },
        ].map(({ label, val, color }) => (
          <div key={label} className={`${color} rounded-2xl p-4`}>
            <p className="text-2xl font-bold">{val}</p>
            <p className="text-[10px] uppercase tracking-widest font-semibold mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Create Promo */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Tag className="h-4 w-4 text-amber-500" /> Create Promo Code
        </h3>
        <form onSubmit={addPromo} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Field label="Coupon Code">
            <input
              className={inputCls + " uppercase"}
              value={form.code}
              onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
              placeholder="e.g. LUXURY20"
              required
            />
          </Field>
          <Field label="Discount Value">
            <input
              type="number"
              className={inputCls}
              value={form.discount}
              onChange={(e) => setForm((f) => ({ ...f, discount: e.target.value }))}
              placeholder="e.g. 15"
              required
            />
          </Field>
          <Field label="Type">
            <select
              className={selectCls}
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
            >
              <option value="percentage">Percentage (%)</option>
              <option value="fixed">Fixed (GH₵)</option>
            </select>
          </Field>
          <Field label="Max Uses">
            <input
              type="number"
              className={inputCls}
              value={form.maxUsage}
              onChange={(e) => setForm((f) => ({ ...f, maxUsage: e.target.value }))}
              placeholder="Unlimited"
            />
          </Field>
          <div className="flex items-end">
            <button type="submit" className="btn-gold w-full py-2.5 text-[10px] tracking-widest">
              <Plus className="h-4 w-4" /> Create
            </button>
          </div>
        </form>
      </div>

      {/* Promos Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Code
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Discount
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Type
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Usage
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Status
                </th>
                <th className="p-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {promos.map((promo) => (
                <tr key={promo.id} className="hover:bg-amber-50/20">
                  <td className="p-4 font-bold text-gray-900 tracking-widest uppercase">
                    {promo.code}
                  </td>
                  <td className="p-4 font-bold text-amber-600">
                    {promo.discount}
                    {promo.type === "percentage" ? "%" : " GH₵"} Off
                  </td>
                  <td className="p-4 text-gray-600 capitalize">{promo.type}</td>
                  <td className="p-4 text-gray-600">
                    {promo.usageCount}
                    {promo.maxUsage ? ` / ${promo.maxUsage}` : ""}
                  </td>
                  <td className="p-4">
                    <StatusBadge status={promo.status} />
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => togglePromoStatus(promo.id)}
                        className={`text-[9px] font-bold uppercase px-3 py-1.5 rounded-xl border transition-all ${promo.status === "active" ? "text-amber-600 border-amber-200 hover:bg-amber-50" : "text-emerald-600 border-emerald-200 hover:bg-emerald-50"}`}
                      >
                        {promo.status === "active" ? "Pause" : "Activate"}
                      </button>
                      <button
                        onClick={() => deletePromo(promo.id, promo.code)}
                        className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Coming Soon Campaigns */}
      <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-5">
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-500" /> Campaign Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Email Campaigns",
            "SMS Blasts",
            "Push Notifications",
            "Loyalty Program",
            "Gift Cards",
            "Referral Program",
            "Flash Sales",
            "Abandoned Cart",
          ].map((tool) => (
            <div
              key={tool}
              className="flex items-center gap-2 p-3 bg-white border border-amber-100 rounded-xl text-[10px] font-semibold text-gray-600"
            >
              <span className="h-2 w-2 rounded-full bg-amber-300 shrink-0" />
              {tool}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-amber-600 mt-3 font-medium">
          ✦ Campaign integrations available via API or Mailchimp / Klaviyo connection
        </p>
      </div>
    </div>
  );
}

// ─── Analytics Section ────────────────────────────────────────────────────────

function AnalyticsSection({
  orders: rawOrders,
  customers,
  products: prods,
  cediMultiplier,
}: {
  orders: Order[];
  customers: User[];
  products: AdminProduct[];
  cediMultiplier: number;
}) {
  const orders = Array.isArray(rawOrders)
    ? rawOrders.filter((o) => o && o.total != null && Array.isArray(o.items))
    : [];
  const totalRev = orders.reduce((s, o) => s + (o.total || 0) * cediMultiplier, 0);
  const avgOrder = orders.length > 0 ? totalRev / orders.length : 0;
  const convRate =
    customers.length > 0 ? ((orders.length / customers.length) * 100).toFixed(1) : "0";

  const statusBreakdown = [
    "Order Received",
    "Payment Confirmed",
    "Processing",
    "Packaging",
    "Shipped",
    "Out for Delivery",
    "Delivered",
    "Payment Pending",
  ]
    .map((s) => ({
      status: s,
      count: orders.filter((o) => o.status === s).length,
    }))
    .filter((x) => x.count > 0);

  const catBreakdown = ["earrings", "necklaces", "rings", "bracelets", "anklets", "sets"].map(
    (cat) => ({
      cat,
      count: prods.filter((p) => p.category === cat).length,
      rev: orders
        .flatMap((o) => o.items || [])
        .filter((i) => i && prods.find((p) => p.id === i.productId)?.category === cat)
        .reduce((s, i) => s + (i.price || 0) * (i.qty || 0) * cediMultiplier, 0),
    }),
  );

  const topProducts = [...prods].sort((a, b) => b.stock - a.stock).slice(0, 5);
  const lowStock = prods.filter((p) => p.stock > 0 && p.stock <= 10);
  const revenueData = [
    12000, 18500, 24000, 19500, 31000, 38000, 35000, 47000, 43000, 56000, 52000, 68000,
  ].map((v) => Math.round((v * cediMultiplier) / 15));

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={BarChart3}
        title="Analytics & Reports"
        subtitle="Business intelligence at a glance"
      />

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard
          label="Total Revenue"
          value={`GH₵ ${totalRev.toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          icon={DollarSign}
          color="gold"
          trend="up"
          trendValue="+18%"
        />
        <KpiCard
          label="Avg Order Value"
          value={`GH₵ ${avgOrder.toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          icon={TrendingUp}
          color="green"
          trend="up"
          trendValue="+5%"
        />
        <KpiCard
          label="Conversion Rate"
          value={`${convRate}%`}
          sub="Orders / Customers"
          icon={BarChart2}
          color="blue"
        />
        <KpiCard
          label="Customer LTV"
          value={`GH₵ ${(avgOrder * 2.4).toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          sub="Est. lifetime value"
          icon={UserCheck}
          color="purple"
        />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Annual Revenue (GH₵)</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">Monthly revenue projection for 2026</p>
          </div>
          <div className="flex gap-2">
            {["1M", "3M", "6M", "1Y"].map((t) => (
              <button
                key={t}
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-all ${t === "1Y" ? "bg-amber-100 text-amber-700" : "text-gray-400 hover:text-gray-700"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <MiniBarChart data={revenueData} color="#D4AF37" />
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xs font-bold text-gray-900">
              GH₵ {revenueData.reduce((a, b) => a + b, 0).toLocaleString()}
            </p>
            <p className="text-[10px] text-gray-400">Total YTD</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-emerald-600">+18.4%</p>
            <p className="text-[10px] text-gray-400">vs Last Year</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-900">
              GH₵ {Math.round(revenueData.reduce((a, b) => a + b, 0) / 12).toLocaleString()}
            </p>
            <p className="text-[10px] text-gray-400">Monthly Avg</p>
          </div>
        </div>
      </div>

      {/* Order Status Breakdown + Category Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Order Status Breakdown</h3>
          {statusBreakdown.length === 0 ? (
            <p className="text-xs text-gray-400 py-4 text-center">No orders yet</p>
          ) : (
            <div className="space-y-3">
              {statusBreakdown.map(({ status, count }) => {
                const pct = orders.length > 0 ? (count / orders.length) * 100 : 0;
                return (
                  <div key={status}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">{status}</span>
                      <span className="text-gray-500">
                        {count} ({pct.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Revenue by Category</h3>
          <div className="space-y-3">
            {catBreakdown
              .filter((c) => c.count > 0)
              .map(({ cat, count, rev }) => {
                const maxRev = Math.max(...catBreakdown.map((c) => c.rev), 1);
                return (
                  <div key={cat}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700 capitalize">
                        {cat} ({count} products)
                      </span>
                      <span className="text-amber-600 font-semibold">
                        GH₵{" "}
                        {rev.toLocaleString("en-US", {
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(rev / maxRev) * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Top Products + Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-amber-500" /> Top Products by Stock
          </h3>
          <div className="space-y-3">
            {topProducts.map((p, i) => (
              <div key={p.id} className="flex items-center gap-3 text-xs">
                <span className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 truncate">{p.name}</p>
                  <p className="text-gray-400 capitalize">{p.category}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-amber-600">
                    GH₵ {(p.price * cediMultiplier).toFixed(0)}
                  </p>
                  <p className="text-gray-400">{p.stock} units</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" /> Low Stock Alerts
          </h3>
          {lowStock.length === 0 ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-emerald-300 mx-auto mb-2" />
              <p className="text-xs text-gray-400">All products well-stocked</p>
            </div>
          ) : (
            <div className="space-y-3">
              {lowStock.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between text-xs p-3 bg-amber-50 border border-amber-100 rounded-xl"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{p.name}</p>
                    <p className="text-gray-500 capitalize">{p.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">{p.stock} left</p>
                    <p className="text-[10px] text-amber-600">Restock needed</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Export Reports */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Download className="h-4 w-4 text-amber-500" /> Export Reports
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Revenue Report (CSV)",
            "Order Summary (CSV)",
            "Customer Report (CSV)",
            "Inventory Report (CSV)",
            "Marketing Report (CSV)",
            "Full Analytics (JSON)",
          ].map((r) => (
            <button
              key={r}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-xl transition-all"
            >
              <FileText className="h-3.5 w-3.5" /> {r}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Content / Homepage Builder Section ──────────────────────────────────────

function ContentSection({ addLog }: { addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void }) {
  const defaultSettings: SiteSettings = {
    siteName: "Touch by Bel'voma",
    tagline: "Touch Every Moment with Elegance",
    currency: "GHS",
    timezone: "Africa/Accra",
    primaryColor: "#D4AF37",
    accentColor: "#2D2D2D",
    heroHeadline: "Luxury Jewelry Crafted for Every Moment",
    heroSubheading:
      "Explore handcrafted gold-plated pieces designed to elevate your everyday elegance.",
    announcementBar:
      "✦ Free shipping on orders over GH₵1000 ✦ New arrivals just dropped — Shop Now",
    announcementEnabled: true,
    freeShippingMessage: "Free Shipping on orders over GH₵1,000",
    instagramHandle: "@touchbybelvoma",
    facebookHandle: "touchbybelvoma",
    twitterHandle: "@belvoma",
    supportEmail: "hello@touchbybelvoma.com",
    supportPhone: "+233 20 000 0000",
    businessAddress: "Airport Residential Area, Accra, Ghana",
    googleAnalyticsId: "",
    metaPixelId: "",
  };

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_site_settings") : null;
    return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
  });
  const [activeTab, setActiveTab] = useState<"homepage" | "pages" | "general" | "integrations">(
    "homepage",
  );
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const showToast = useCallback(
    (msg: string, type: "success" | "error" | "info" = "success") => setToast({ msg, type }),
    [],
  );

  const saveSettings = () => {
    localStorage.setItem("tbb_site_settings", JSON.stringify(settings));
    addLog({
      category: "Config",
      action: "Site settings updated",
      user: "superadmin",
      ip: "127.0.0.1",
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    showToast("Settings saved successfully");
  };

  const contentTabs = ["homepage", "pages", "general", "integrations"] as const;

  const pages = [
    { name: "Homepage", path: "/", editable: true },
    { name: "Shop", path: "/shop", editable: false },
    { name: "About", path: "/about", editable: true },
    { name: "Contact", path: "/contact", editable: true },
    { name: "FAQs", path: "/faqs", editable: true },
    { name: "Shipping Policy", path: "/shipping", editable: true },
    { name: "Privacy Policy", path: "/privacy", editable: true },
    { name: "Terms & Conditions", path: "/terms", editable: true },
    { name: "Returns Policy", path: "/returns", editable: true },
    { name: "404 Page", path: "/404", editable: true },
    { name: "Maintenance Page", path: "/maintenance", editable: true },
  ];

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      <SectionHeader
        icon={FileText}
        title="Website Content Manager"
        subtitle="Edit homepage, pages, and site-wide settings"
        actions={
          <button
            onClick={saveSettings}
            className={`btn-gold px-5 py-2.5 text-[10px] tracking-widest flex items-center gap-1.5 ${saved ? "opacity-80" : ""}`}
          >
            <Save className="h-3.5 w-3.5" /> {saved ? "Saved ✓" : "Save All"}
          </button>
        }
      />

      {/* Sub-tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-2xl w-fit flex-wrap">
        {contentTabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all capitalize ${activeTab === t ? "bg-white text-amber-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Homepage Builder */}
      {activeTab === "homepage" && (
        <div className="space-y-4">
          {/* Announcement Bar */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-amber-500" /> Announcement Bar
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-[10px] font-semibold text-gray-500">
                  {settings.announcementEnabled ? "Enabled" : "Disabled"}
                </span>
                <button
                  onClick={() =>
                    setSettings((s) => ({
                      ...s,
                      announcementEnabled: !s.announcementEnabled,
                    }))
                  }
                  className="text-amber-500"
                >
                  {settings.announcementEnabled ? (
                    <ToggleRight className="h-8 w-8 text-amber-500" strokeWidth={1.5} />
                  ) : (
                    <ToggleLeft className="h-8 w-8 text-gray-300" strokeWidth={1.5} />
                  )}
                </button>
              </label>
            </div>
            <input
              className={inputCls}
              value={settings.announcementBar}
              onChange={(e) => setSettings((s) => ({ ...s, announcementBar: e.target.value }))}
              placeholder="Announcement bar text..."
            />
          </div>

          {/* Hero Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2">
              <Image className="h-4 w-4 text-amber-500" /> Hero Section
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Hero Headline">
                <input
                  className={inputCls}
                  value={settings.heroHeadline}
                  onChange={(e) => setSettings((s) => ({ ...s, heroHeadline: e.target.value }))}
                />
              </Field>
              <Field label="Hero Subheading">
                <input
                  className={inputCls}
                  value={settings.heroSubheading}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      heroSubheading: e.target.value,
                    }))
                  }
                />
              </Field>
            </div>
            <Field label="Free Shipping Message">
              <input
                className={inputCls}
                value={settings.freeShippingMessage}
                onChange={(e) =>
                  setSettings((s) => ({
                    ...s,
                    freeShippingMessage: e.target.value,
                  }))
                }
              />
            </Field>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                Live Preview
              </p>
              <div className="bg-gray-900 text-white rounded-xl p-4">
                {settings.announcementEnabled && (
                  <div className="text-center text-[10px] text-amber-400 bg-black/30 py-1.5 mb-3 rounded-lg">
                    {settings.announcementBar}
                  </div>
                )}
                <h2 className="text-lg font-bold">{settings.heroHeadline}</h2>
                <p className="text-xs text-gray-400 mt-1">{settings.heroSubheading}</p>
                <p className="text-[10px] text-amber-400 mt-2">✦ {settings.freeShippingMessage}</p>
              </div>
            </div>
          </div>

          {/* Section Visibility */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4">
              Homepage Sections Visibility
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Hero Section",
                "Featured Collections",
                "Best Sellers",
                "New Arrivals",
                "Testimonials",
                "Instagram Feed",
                "Newsletter",
                "Announcement Banner",
                "Flash Sale Banner",
                "Countdown Timer",
              ].map((section) => (
                <label
                  key={section}
                  className="flex items-center gap-2 cursor-pointer p-3 bg-gray-50 hover:bg-amber-50 rounded-xl border border-gray-100 hover:border-amber-200 transition-all"
                >
                  <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-amber-500" />
                  <span className="text-[10px] font-semibold text-gray-700">{section}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Pages Manager */}
      {activeTab === "pages" && (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-700 uppercase tracking-widest">
              Website Pages
            </h3>
            <button className="btn-gold px-4 py-2 text-[10px] tracking-widest">
              <Plus className="h-3.5 w-3.5" /> New Page
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {pages.map(({ name, path, editable }) => (
              <div
                key={path}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-amber-50/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-gray-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{name}</p>
                    <p className="text-[10px] text-gray-400 font-mono">{path}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={path as "/" | "/about" | "/contact" | "/shop"}
                    target="_blank"
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                  {editable ? (
                    <button className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-600 border border-amber-200 px-3 py-1.5 rounded-xl hover:bg-amber-50 transition-colors">
                      <Edit3 className="h-3 w-3" /> Edit Content
                    </button>
                  ) : (
                    <span className="text-[10px] text-gray-400 px-3 py-1.5">Auto-generated</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* General Settings */}
      {activeTab === "general" && (
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2">
              <Globe className="h-4 w-4 text-amber-500" /> Business Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Site Name">
                <input
                  className={inputCls}
                  value={settings.siteName}
                  onChange={(e) => setSettings((s) => ({ ...s, siteName: e.target.value }))}
                />
              </Field>
              <Field label="Tagline">
                <input
                  className={inputCls}
                  value={settings.tagline}
                  onChange={(e) => setSettings((s) => ({ ...s, tagline: e.target.value }))}
                />
              </Field>
              <Field label="Support Email">
                <input
                  className={inputCls}
                  value={settings.supportEmail}
                  onChange={(e) => setSettings((s) => ({ ...s, supportEmail: e.target.value }))}
                />
              </Field>
              <Field label="Support Phone">
                <input
                  className={inputCls}
                  value={settings.supportPhone}
                  onChange={(e) => setSettings((s) => ({ ...s, supportPhone: e.target.value }))}
                />
              </Field>
              <Field label="Business Address">
                <input
                  className={inputCls}
                  value={settings.businessAddress}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      businessAddress: e.target.value,
                    }))
                  }
                />
              </Field>
              <Field label="Currency">
                <select
                  className={selectCls}
                  value={settings.currency}
                  onChange={(e) => setSettings((s) => ({ ...s, currency: e.target.value }))}
                >
                  <option value="GHS">Ghana Cedi (GH₵)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </Field>
              <Field label="Timezone">
                <select
                  className={selectCls}
                  value={settings.timezone}
                  onChange={(e) => setSettings((s) => ({ ...s, timezone: e.target.value }))}
                >
                  <option value="Africa/Accra">Africa/Accra (GMT+0)</option>
                  <option value="Europe/London">Europe/London</option>
                  <option value="America/New_York">America/New_York</option>
                </select>
              </Field>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2">
              <Activity className="h-4 w-4 text-amber-500" /> Social Media Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="Instagram Handle">
                <input
                  className={inputCls}
                  value={settings.instagramHandle}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      instagramHandle: e.target.value,
                    }))
                  }
                  placeholder="@handle"
                />
              </Field>
              <Field label="Facebook Page">
                <input
                  className={inputCls}
                  value={settings.facebookHandle}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      facebookHandle: e.target.value,
                    }))
                  }
                  placeholder="page name"
                />
              </Field>
              <Field label="Twitter/X Handle">
                <input
                  className={inputCls}
                  value={settings.twitterHandle}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      twitterHandle: e.target.value,
                    }))
                  }
                  placeholder="@handle"
                />
              </Field>
            </div>
          </div>
        </div>
      )}

      {/* Integrations */}
      {activeTab === "integrations" && (
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" /> Analytics & Tracking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Google Analytics ID">
                <input
                  className={inputCls}
                  value={settings.googleAnalyticsId}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      googleAnalyticsId: e.target.value,
                    }))
                  }
                  placeholder="G-XXXXXXXXXX"
                />
              </Field>
              <Field label="Meta Pixel ID">
                <input
                  className={inputCls}
                  value={settings.metaPixelId}
                  onChange={(e) => setSettings((s) => ({ ...s, metaPixelId: e.target.value }))}
                  placeholder="000000000000000"
                />
              </Field>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Paystack",
              "Flutterwave",
              "Mailchimp",
              "Klaviyo",
              "Google Tag Manager",
              "Hotjar",
              "WhatsApp Business",
              "Twilio SMS",
              "Firebase Push",
              "Google Search Console",
            ].map((int) => (
              <div
                key={int}
                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-between"
              >
                <span className="text-xs font-semibold text-gray-700">{int}</span>
                <span className="text-[9px] font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
                  Connect
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Settings Section ─────────────────────────────────────────────────────────

function SettingsSection({
  cediMultiplier,
  freeShippingThreshold,
  maintenanceMode,
  maxFailedAttempts,
  updateCediMultiplier,
  updateFreeShippingThreshold,
  updateMaintenanceMode,
  updateMaxFailedAttempts,
  addLog,
}: {
  cediMultiplier: number;
  freeShippingThreshold: number;
  maintenanceMode: boolean;
  maxFailedAttempts: number;
  updateCediMultiplier: (v: number) => void;
  updateFreeShippingThreshold: (v: number) => void;
  updateMaintenanceMode: (v: boolean) => void;
  updateMaxFailedAttempts: (v: number) => void;
  addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void;
}) {
  const [multInput, setMultInput] = useState(cediMultiplier.toString());
  const [threshInput, setThreshInput] = useState(freeShippingThreshold.toString());
  const [maxAttInput, setMaxAttInput] = useState(maxFailedAttempts.toString());
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const showToast = useCallback(
    (msg: string, type: "success" | "error" | "info" = "success") => setToast({ msg, type }),
    [],
  );

  useEffect(() => {
    setMultInput(cediMultiplier.toString());
  }, [cediMultiplier]);
  useEffect(() => {
    setThreshInput(freeShippingThreshold.toString());
  }, [freeShippingThreshold]);
  useEffect(() => {
    setMaxAttInput(maxFailedAttempts.toString());
  }, [maxFailedAttempts]);

  const applyMult = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(multInput);
    if (isNaN(val) || val <= 0) return;
    updateCediMultiplier(val);
    addLog({
      category: "Config",
      action: `Cedi multiplier set to ${val}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`Exchange rate updated: 1 USD = GH₵ ${val}`);
  };
  const applyThresh = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(threshInput);
    if (isNaN(val) || val < 0) return;
    updateFreeShippingThreshold(val);
    addLog({
      category: "Config",
      action: `Free shipping threshold set to GH₵ ${val}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`Free shipping threshold: GH₵ ${val}`);
  };
  const applyMaxAtt = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(maxAttInput);
    if (isNaN(val) || val <= 0) return;
    updateMaxFailedAttempts(val);
    addLog({
      category: "Security",
      action: `Max login attempts set to ${val}`,
      user: "superadmin",
      ip: "127.0.0.1",
    });
    showToast(`Max login attempts: ${val}`);
  };

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      <SectionHeader
        icon={Settings}
        title="System Settings"
        subtitle="Core platform configuration"
      />

      {/* Maintenance Mode */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Maintenance Mode</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-lg">
              Suspends the storefront and shows a luxury splash screen to all visitors.
              Admin/superadmin access is unaffected.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span
                className={`w-2.5 h-2.5 rounded-full ${maintenanceMode ? "bg-red-500 animate-pulse" : "bg-emerald-500"}`}
              />
              <span
                className={`text-xs font-bold ${maintenanceMode ? "text-red-600" : "text-emerald-600"}`}
              >
                {maintenanceMode ? "MAINTENANCE MODE ACTIVE" : "Store Online"}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              updateMaintenanceMode(!maintenanceMode);
              addLog({
                category: "Config",
                action: `Maintenance mode ${!maintenanceMode ? "enabled" : "disabled"}`,
                user: "superadmin",
                ip: "127.0.0.1",
              });
              showToast(
                `Maintenance mode ${!maintenanceMode ? "enabled" : "disabled"}`,
                !maintenanceMode ? "info" : "success",
              );
            }}
            className="shrink-0"
          >
            {maintenanceMode ? (
              <ToggleRight className="h-12 w-12 text-amber-500" strokeWidth={1.5} />
            ) : (
              <ToggleLeft className="h-12 w-12 text-gray-300" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Currency Settings */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-amber-500" /> Currency Exchange Rate
        </h3>
        <p className="text-xs text-gray-500">
          All product prices are stored in USD and converted to Ghana Cedis using this multiplier.
          Currently: <strong className="text-amber-600">1 USD = GH₵ {cediMultiplier}</strong>
        </p>
        <form onSubmit={applyMult} className="flex gap-3 max-w-sm">
          <input
            type="number"
            step="0.01"
            min="1"
            className={inputCls + " flex-1"}
            value={multInput}
            onChange={(e) => setMultInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn-gold px-5 py-2.5 text-[10px] tracking-widest shrink-0"
          >
            Apply
          </button>
        </form>
      </div>

      {/* Shipping Threshold */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Truck className="h-4 w-4 text-amber-500" /> Free Shipping Threshold
        </h3>
        <p className="text-xs text-gray-500">
          Orders meeting or exceeding this value (in GH₵) qualify for free shipping. Currently:{" "}
          <strong className="text-amber-600">GH₵ {freeShippingThreshold}</strong>
        </p>
        <form onSubmit={applyThresh} className="flex gap-3 max-w-sm">
          <input
            type="number"
            min="0"
            className={inputCls + " flex-1"}
            value={threshInput}
            onChange={(e) => setThreshInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn-gold px-5 py-2.5 text-[10px] tracking-widest shrink-0"
          >
            Apply
          </button>
        </form>
      </div>

      {/* Security */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Shield className="h-4 w-4 text-amber-500" /> Security — Login Rate Limiter
        </h3>
        <p className="text-xs text-gray-500">
          Maximum failed login attempts before forcing CAPTCHA verification. Currently:{" "}
          <strong className="text-amber-600">{maxFailedAttempts} attempts</strong>
        </p>
        <form onSubmit={applyMaxAtt} className="flex gap-3 max-w-sm">
          <input
            type="number"
            min="1"
            max="20"
            className={inputCls + " flex-1"}
            value={maxAttInput}
            onChange={(e) => setMaxAttInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn-gold px-5 py-2.5 text-[10px] tracking-widest shrink-0"
          >
            Apply
          </button>
        </form>
      </div>

      {/* Payment Settings */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
          <CreditCard className="h-4 w-4 text-amber-500" /> Payment Methods
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: "MTN Mobile Money", enabled: true },
            { name: "Telecel Cash", enabled: true },
            { name: "AirtelTigo Money", enabled: false },
            { name: "Paystack (Card)", enabled: true },
            { name: "Flutterwave", enabled: false },
            { name: "Bank Transfer", enabled: true },
          ].map(({ name, enabled }) => (
            <div
              key={name}
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${enabled ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50"}`}
            >
              <span className="text-xs font-semibold text-gray-700">{name}</span>
              <span
                className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${enabled ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-500"}`}
              >
                {enabled ? "ON" : "OFF"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Zones */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-amber-500" /> Shipping Zones
        </h3>
        <div className="space-y-3">
          {[
            {
              zone: "Greater Accra",
              rate: "GH₵ 25",
              time: "Same Day / Next Day",
            },
            {
              zone: "Kumasi & Ashanti",
              rate: "GH₵ 45",
              time: "2–3 Business Days",
            },
            {
              zone: "Other Regions",
              rate: "GH₵ 65",
              time: "3–5 Business Days",
            },
            { zone: "Showroom Pickup", rate: "Free", time: "Ready in 2 Hours" },
          ].map(({ zone, rate, time }) => (
            <div
              key={zone}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-gray-800">{zone}</p>
                <p className="text-[10px] text-gray-500">{time}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-amber-600">{rate}</span>
                <button className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                  <Edit3 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Security Section ─────────────────────────────────────────────────────────

function SecuritySection({
  customers,
  addLog,
}: {
  customers: User[];
  addLog: (l: Omit<AuditLog, "id" | "timestamp">) => void;
}) {
  return (
    <div className="space-y-6">
      <SectionHeader
        icon={Shield}
        title="Security Center"
        subtitle="Access control, sessions & permissions"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard
          label="Active Admins"
          value={customers.filter((c) => c.role === "admin").length}
          icon={Shield}
          color="purple"
        />
        <KpiCard
          label="Active Users"
          value={customers.filter((c) => c.active !== false).length}
          icon={UserCheck}
          color="green"
        />
        <KpiCard
          label="Banned Accounts"
          value={customers.filter((c) => c.active === false).length}
          icon={Lock}
          color="red"
        />
      </div>

      {/* User Roles */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Key className="h-4 w-4 text-amber-500" /> Role Definitions
        </h3>
        <div className="space-y-3">
          {[
            {
              role: "superadmin",
              label: "Super Admin",
              desc: "Full ROOT access to all systems, configurations, and data. Can manage all users, orders, products, and system settings.",
              color: "bg-purple-50 border-purple-200 text-purple-700",
            },
            {
              role: "admin",
              label: "Store Admin",
              desc: "Access to orders, products, inventory, customers, and marketing. Cannot modify system configurations or manage Super Admins.",
              color: "bg-amber-50 border-amber-200 text-amber-700",
            },
            {
              role: "user",
              label: "Customer",
              desc: "Standard storefront access. Can browse, purchase, manage their account, orders, addresses, and wishlist.",
              color: "bg-blue-50 border-blue-200 text-blue-700",
            },
          ].map(({ role, label, desc, color }) => (
            <div key={role} className={`flex items-start gap-4 p-4 rounded-xl border ${color}`}>
              <div className="p-2 rounded-lg bg-white/60">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
                  <span className="text-[9px] font-mono bg-black/10 px-1.5 py-0.5 rounded">
                    {role}
                  </span>
                  <span className="text-[10px]">
                    {customers.filter((c) => c.role === role).length} accounts
                  </span>
                </div>
                <p className="text-[11px] opacity-80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Lock className="h-4 w-4 text-amber-500" /> Security Protocols
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              label: "Rate Limiting (Login)",
              status: true,
              desc: "Active — blocks brute force attempts",
            },
            {
              label: "CAPTCHA on Failed Attempts",
              status: true,
              desc: "Triggers after threshold exceeded",
            },
            {
              label: "Session Expiry",
              status: true,
              desc: "Auto-logout on inactivity",
            },
            {
              label: "Account Lockout",
              status: true,
              desc: "Ban hammer for repeated violations",
            },
            {
              label: "Two-Factor Authentication",
              status: false,
              desc: "Coming soon — TOTP / SMS",
            },
            {
              label: "IP Restriction",
              status: false,
              desc: "Allowlist specific IPs for admin panel",
            },
          ].map(({ label, status, desc }) => (
            <div
              key={label}
              className={`flex items-center justify-between p-4 rounded-xl border ${status ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50"}`}
            >
              <div>
                <p className="text-xs font-semibold text-gray-800">{label}</p>
                <p className="text-[10px] text-gray-500">{desc}</p>
              </div>
              <span
                className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ${status ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-500"}`}
              >
                {status ? "Active" : "Inactive"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* API Keys */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Hash className="h-4 w-4 text-amber-500" /> API Keys
        </h3>
        <div className="space-y-3">
          {[
            "Paystack Secret Key",
            "Paystack Public Key",
            "Flutterwave Secret",
            "Google Analytics",
            "Meta Pixel",
          ].map((key) => (
            <div
              key={key}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200"
            >
              <span className="text-xs font-semibold text-gray-700">{key}</span>
              <div className="flex items-center gap-2">
                <code className="text-[10px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded font-mono">
                  sk_••••••••••••
                </code>
                <button className="text-[10px] text-amber-600 hover:text-amber-700 font-semibold">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Activity / Audit Log Section ────────────────────────────────────────────

function ActivitySection({ logs, clearLogs }: { logs: AuditLog[]; clearLogs: () => void }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      logs.filter((l) => {
        const matchCat = filter === "all" || l.category.toLowerCase() === filter;
        const matchSearch =
          !search ||
          l.action.toLowerCase().includes(search.toLowerCase()) ||
          l.user.includes(search) ||
          l.ip.includes(search);
        return matchCat && matchSearch;
      }),
    [logs, filter, search],
  );

  const exportLogs = () => {
    const header = "Timestamp,Category,Action,User,IP\n";
    const rows = logs
      .map((l) => `${l.timestamp},${l.category},"${l.action}",${l.user},${l.ip}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audit-log.csv";
    a.click();
  };

  const catColor: Record<string, string> = {
    Auth: "bg-blue-100 text-blue-700",
    Config: "bg-amber-100 text-amber-700",
    Security: "bg-red-100 text-red-700",
    Product: "bg-purple-100 text-purple-700",
    Order: "bg-green-100 text-green-700",
    Customer: "bg-teal-100 text-teal-700",
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={Activity}
        title="Activity Log"
        subtitle={`${logs.length} events recorded`}
        actions={
          <div className="flex gap-2">
            <button
              onClick={exportLogs}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
            >
              <Download className="h-3.5 w-3.5" /> Export
            </button>
            <button
              onClick={clearLogs}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-red-500 hover:text-white hover:bg-red-500 border border-red-200 hover:border-red-500 px-3 py-2 rounded-xl transition-all"
            >
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </button>
          </div>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            className={inputCls + " pl-9"}
            placeholder="Search logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className={selectCls + " w-auto"}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="auth">Auth</option>
          <option value="config">Config</option>
          <option value="security">Security</option>
          <option value="product">Product</option>
          <option value="order">Order</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {["Auth", "Config", "Security", "Product", "Order", "Customer"].map((cat) => (
          <div
            key={cat}
            className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm"
          >
            <p className="text-lg font-bold text-gray-900">
              {logs.filter((l) => l.category === cat).length}
            </p>
            <span
              className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${catColor[cat]}`}
            >
              {cat}
            </span>
          </div>
        ))}
      </div>

      {/* Log Feed */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="max-h-[520px] overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <Terminal className="h-8 w-8 text-gray-200 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-400">No log entries</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {filtered.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span
                    className={`shrink-0 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full mt-0.5 ${catColor[log.category] || "bg-gray-100 text-gray-600"}`}
                  >
                    {log.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800">{log.action}</p>
                    {log.details && (
                      <p className="text-[10px] text-gray-400 mt-0.5">{log.details}</p>
                    )}
                    <p className="text-[10px] text-gray-400 mt-1">
                      by <span className="font-semibold text-gray-600">{log.user}</span> ·{" "}
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 shrink-0">{log.ip}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function SuperAdminDashboardComponent() {
  const navigate = useNavigate();
  const {
    user,
    logout,
    orders,
    cediMultiplier,
    freeShippingThreshold,
    maintenanceMode,
    maxFailedAttempts,
    usersList,
    updateCediMultiplier,
    updateFreeShippingThreshold,
    updateMaintenanceMode,
    updateMaxFailedAttempts,
    updateUserRole,
    updateUserStatus,
  } = useStore();

  const [activeSection, setActiveSection] = useState<NavSection>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [logs, setLogs] = useState<AuditLog[]>([]);

  // Product state (seeded from products.ts + local storage)
  const [adminProducts, setAdminProducts] = useState<AdminProduct[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_admin_products_v2") : null;
    if (stored) return JSON.parse(stored);
    return initialProducts.map((p) => ({
      id: p.id,
      name: p.name,
      sku: `TBB-${p.id.slice(0, 6).toUpperCase()}`,
      category: p.category,
      price: p.price,
      discountPrice: p.originalPrice,
      costPrice: Math.round(p.price * 0.45),
      stock: p.id.includes("hoops") || p.id.includes("studs") || p.id.includes("sculpt") ? 7 : 45,
      status: "published" as const,
      isFeatured: false,
      isBestSeller: p.isBestSeller || false,
      isNew: p.isNew || false,
      material: p.material,
      description: p.description,
      tags: [p.category, p.material.split(",")[0].trim().toLowerCase()],
      images: p.images,
      weight: "25g",
      seoTitle: `${p.name} | Touch by Bel'voma`,
      seoDesc: p.description.slice(0, 120),
    }));
  });

  // Persist products
  useEffect(() => {
    localStorage.setItem("tbb_admin_products_v2", JSON.stringify(adminProducts));
  }, [adminProducts]);

  // Route guard
  useEffect(() => {
    if (!user || user.role !== "superadmin") {
      const t = setTimeout(() => navigate({ to: "/superadmin/login" }), 800);
      return () => clearTimeout(t);
    }
  }, [user, navigate]);

  // Seed initial logs
  useEffect(() => {
    setLogs([
      {
        id: "1",
        timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
        category: "Security",
        action: "Superadmin authenticated successfully",
        user: "superadmin@tbbv.com",
        ip: "127.0.0.1",
      },
      {
        id: "2",
        timestamp: new Date(Date.now() - 3600000 * 2.5).toISOString(),
        category: "Config",
        action: `Free shipping threshold seeded at GH₵ ${freeShippingThreshold}`,
        user: "system",
        ip: "0.0.0.0",
      },
      {
        id: "3",
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
        category: "Auth",
        action: "Admin session approved: admin@belvoma.com",
        user: "system",
        ip: "192.168.1.12",
      },
      {
        id: "4",
        timestamp: new Date(Date.now() - 3600000 * 1).toISOString(),
        category: "Config",
        action: "Dashboard initialized — Super Admin Control Center v2.0",
        user: "system",
        ip: "0.0.0.0",
      },
    ]);
  }, [freeShippingThreshold]);

  const addLog = useCallback((log: Omit<AuditLog, "id" | "timestamp">) => {
    setLogs((prev) =>
      [
        {
          ...log,
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 200),
    );
  }, []);

  const clearLogs = useCallback(() => setLogs([]), []);

  const pendingOrderCount = orders.filter(
    (o) => !["Delivered", "Payment Pending"].includes(o.status),
  ).length;
  const lowStockCount = adminProducts.filter((p) => p.stock > 0 && p.stock <= 10).length;
  const outOfStockCount = adminProducts.filter((p) => p.stock === 0).length;

  if (!user || user.role !== "superadmin") {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col justify-center items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-10 w-10 border-t-2 border-amber-400 rounded-full"
        />
        <p className="text-xs text-amber-400 mt-4 tracking-widest uppercase animate-pulse">
          Authorizing access...
        </p>
      </div>
    );
  }

  const navItems: {
    icon: React.ElementType;
    label: string;
    section: NavSection;
    badge?: number;
  }[] = [
    { icon: LayoutDashboard, label: "Overview", section: "overview" },
    { icon: Package, label: "Products", section: "products" },
    {
      icon: ShoppingBag,
      label: "Orders",
      section: "orders",
      badge: pendingOrderCount,
    },
    { icon: Users, label: "Customers", section: "customers" },
    { icon: Megaphone, label: "Marketing", section: "marketing" },
    { icon: BarChart3, label: "Analytics", section: "analytics" },
    { icon: FileText, label: "Content & Pages", section: "content" },
    { icon: Image, label: "Media Library", section: "media" },
    { icon: Star, label: "Reviews", section: "reviews" },
    { icon: Globe, label: "SEO Manager", section: "seo" },
    { icon: CreditCard, label: "Payments", section: "payments" },
    { icon: Truck, label: "Shipping", section: "shipping" },
    { icon: Shield, label: "Security", section: "security" },
    { icon: Settings, label: "Settings", section: "settings" },
    {
      icon: Activity,
      label: "Activity Log",
      section: "activity",
      badge: logs.length > 0 ? undefined : undefined,
    },
  ];

  const fadeVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const sectionTitles: Record<NavSection, string> = {
    overview: "Dashboard Overview",
    products: "Product Management",
    orders: "Order Management",
    customers: "Customer Management",
    marketing: "Marketing Center",
    analytics: "Analytics & Reports",
    content: "Content Manager",
    media: "Media Library",
    reviews: "Reviews Manager",
    seo: "SEO Manager",
    payments: "Payment Settings",
    shipping: "Shipping Manager",
    security: "Security Center",
    settings: "System Settings",
    activity: "Activity Log",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm h-14 flex items-center px-4 gap-4">
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all"
          aria-label="Toggle sidebar"
        >
          <Layers className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <Crown className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold text-gray-900 hidden sm:block">
            Touch by Bel'voma
            <span className="ml-1.5 text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Super Admin
            </span>
          </span>
        </div>

        <div className="flex-1" />

        {/* Status indicators */}
        <div className="hidden md:flex items-center gap-3">
          {maintenanceMode && (
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full animate-pulse">
              <AlertTriangle className="h-3 w-3" /> Maintenance Mode ON
            </span>
          )}
          {lowStockCount + outOfStockCount > 0 && (
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
              <AlertTriangle className="h-3 w-3" /> {lowStockCount + outOfStockCount} Stock Alerts
            </span>
          )}
        </div>

        {/* User + Logout */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden sm:flex items-center gap-1.5 text-[10px] font-semibold text-gray-500 hover:text-amber-600 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-xl transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" /> View Store
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center font-bold text-amber-700 text-xs uppercase">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-gray-800 leading-tight">{user.name}</p>
              <p className="text-[9px] text-amber-600 font-bold uppercase tracking-wider">
                Root Access
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate({ to: "/superadmin/login" });
            }}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed left-0 top-14 bottom-0 z-40 bg-white border-r border-gray-200 overflow-hidden shadow-sm flex flex-col"
              style={{ width: 220 }}
            >
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {navItems.map(({ icon, label, section, badge }) => (
                  <NavItem
                    key={section}
                    icon={icon}
                    label={label}
                    section={section}
                    active={activeSection === section}
                    badge={badge}
                    onClick={(s) => {
                      setActiveSection(s);
                    }}
                  />
                ))}
              </div>
              <div className="p-3 border-t border-gray-100">
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                    Root Access Level
                  </p>
                  <p className="text-[9px] text-amber-600 mt-0.5">Full system privileges active</p>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          className="flex-1 min-w-0 transition-all duration-250"
          style={{ marginLeft: sidebarOpen ? 220 : 0 }}
        >
          <div className="p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
              <Crown className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-amber-600 font-semibold">Super Admin</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-medium text-gray-600">{sectionTitles[activeSection]}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeVariants}
              >
                {activeSection === "overview" && (
                  <OverviewSection
                    orders={orders}
                    products={adminProducts}
                    customers={usersList}
                    cediMultiplier={cediMultiplier}
                    addLog={addLog}
                  />
                )}
                {activeSection === "products" && (
                  <ProductsSection
                    products={adminProducts}
                    setProducts={setAdminProducts}
                    cediMultiplier={cediMultiplier}
                    addLog={addLog}
                  />
                )}
                {activeSection === "orders" && (
                  <OrdersSection
                    orders={orders}
                    updateOrderStatus={updateOrderStatus}
                    cediMultiplier={cediMultiplier}
                    addLog={addLog}
                  />
                )}
                {activeSection === "customers" && (
                  <CustomersSection
                    customers={usersList}
                    orders={orders}
                    updateUserRole={updateUserRole}
                    updateUserStatus={updateUserStatus}
                    addLog={addLog}
                  />
                )}
                {activeSection === "marketing" && <MarketingSection addLog={addLog} />}
                {activeSection === "analytics" && (
                  <AnalyticsSection
                    orders={orders}
                    customers={usersList}
                    products={adminProducts}
                    cediMultiplier={cediMultiplier}
                  />
                )}
                {activeSection === "content" && <ContentSection addLog={addLog} />}
                {activeSection === "settings" && (
                  <SettingsSection
                    cediMultiplier={cediMultiplier}
                    freeShippingThreshold={freeShippingThreshold}
                    maintenanceMode={maintenanceMode}
                    maxFailedAttempts={maxFailedAttempts}
                    updateCediMultiplier={updateCediMultiplier}
                    updateFreeShippingThreshold={updateFreeShippingThreshold}
                    updateMaintenanceMode={updateMaintenanceMode}
                    updateMaxFailedAttempts={updateMaxFailedAttempts}
                    addLog={addLog}
                  />
                )}
                {activeSection === "security" && (
                  <SecuritySection customers={usersList} addLog={addLog} />
                )}
                {activeSection === "activity" && (
                  <ActivitySection logs={logs} clearLogs={clearLogs} />
                )}
                {activeSection === "media" && <MediaLibrarySection />}
                {activeSection === "reviews" && <ReviewsSection />}
                {activeSection === "seo" && <SEOSection addLog={addLog} />}
                {activeSection === "payments" && <PaymentsSection addLog={addLog} />}
                {activeSection === "shipping" && <ShippingSection addLog={addLog} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
