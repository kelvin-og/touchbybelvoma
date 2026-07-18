import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard, Save, CheckCircle2, Eye, EyeOff,
  Smartphone, Building2, DollarSign, RefreshCw,
} from "lucide-react";

interface PaymentGateway {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  publicKey: string;
  secretKey: string;
  testMode: boolean;
  icon: string;
}

interface TaxSetting {
  name: string;
  rate: number;
  enabled: boolean;
  appliesTo: string;
}

const inputCls = "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300";

function SectionHeader({ icon: Icon, title, subtitle, actions }: {
  icon: React.ElementType; title: string; subtitle?: string; actions?: React.ReactNode;
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

export function PaymentsSection({
  addLog,
}: {
  addLog: (l: { category: "Config"; action: string; user: string; ip: string }) => void;
}) {
  const [gateways, setGateways] = useState<PaymentGateway[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_payment_gateways") : null;
    if (stored) return JSON.parse(stored);
    return [
      { id: "paystack", name: "Paystack", description: "Accept cards, mobile money & bank transfers via Paystack", enabled: true, publicKey: "", secretKey: "", testMode: true, icon: "💳" },
      { id: "flutterwave", name: "Flutterwave", description: "Pan-Africa payment gateway supporting 30+ currencies", enabled: false, publicKey: "", secretKey: "", testMode: true, icon: "🌍" },
      { id: "mtn-momo", name: "MTN Mobile Money", description: "Direct MTN MoMo integration for Ghana customers", enabled: true, publicKey: "", secretKey: "", testMode: false, icon: "📱" },
      { id: "telecel", name: "Telecel Cash", description: "Telecel Cash (formerly Vodafone Cash) payments", enabled: false, publicKey: "", secretKey: "", testMode: false, icon: "📱" },
      { id: "airtel", name: "AirtelTigo Money", description: "AirtelTigo mobile money payments", enabled: false, publicKey: "", secretKey: "", testMode: false, icon: "📱" },
      { id: "bank-transfer", name: "Bank Transfer", description: "Manual bank transfer with payment proof upload", enabled: true, publicKey: "", secretKey: "", testMode: false, icon: "🏦" },
    ];
  });

  const [tax, setTax] = useState<TaxSetting>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_tax_settings") : null;
    if (stored) return JSON.parse(stored);
    return { name: "Ghana VAT", rate: 12.5, enabled: false, appliesTo: "all" };
  });

  const [bankDetails, setBankDetails] = useState(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_bank_details") : null;
    if (stored) return JSON.parse(stored);
    return { bankName: "", accountName: "", accountNumber: "", branch: "", instructions: "Please transfer the exact order amount and send your payment receipt to our WhatsApp number." };
  });

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<string | null>(null);

  const showT = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const persist = (g: PaymentGateway[]) => {
    setGateways(g);
    localStorage.setItem("tbb_payment_gateways", JSON.stringify(g));
  };

  const toggleGateway = (id: string) => {
    const updated = gateways.map((g) => g.id === id ? { ...g, enabled: !g.enabled } : g);
    persist(updated);
    const gw = updated.find((g) => g.id === id);
    addLog({ category: "Config", action: `Payment gateway ${gw?.name} ${gw?.enabled ? "enabled" : "disabled"}`, user: "superadmin", ip: "127.0.0.1" });
    showT(`${gw?.name} ${gw?.enabled ? "enabled" : "disabled"}`);
  };

  const updateGateway = (id: string, field: keyof PaymentGateway, value: string | boolean) => {
    persist(gateways.map((g) => g.id === id ? { ...g, [field]: value } : g));
  };

  const saveGateway = (id: string) => {
    localStorage.setItem("tbb_payment_gateways", JSON.stringify(gateways));
    addLog({ category: "Config", action: `Payment gateway config saved: ${id}`, user: "superadmin", ip: "127.0.0.1" });
    showT("Gateway configuration saved");
    setExpandedId(null);
  };

  const saveTax = () => {
    localStorage.setItem("tbb_tax_settings", JSON.stringify(tax));
    addLog({ category: "Config", action: `Tax settings updated: ${tax.name} ${tax.rate}%`, user: "superadmin", ip: "127.0.0.1" });
    showT("Tax settings saved");
  };

  const saveBankDetails = () => {
    localStorage.setItem("tbb_bank_details", JSON.stringify(bankDetails));
    addLog({ category: "Config", action: "Bank transfer details updated", user: "superadmin", ip: "127.0.0.1" });
    showT("Bank details saved");
  };

  return (
    <div className="space-y-8">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed top-6 right-6 z-[200] bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-xl text-sm font-medium flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeader icon={CreditCard} title="Payment Settings" subtitle="Configure payment gateways and transaction processing" />

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Gateways", val: gateways.filter((g) => g.enabled).length, color: "bg-emerald-50 text-emerald-700" },
          { label: "Total Gateways", val: gateways.length, color: "bg-blue-50 text-blue-700" },
          { label: "Tax Rate", val: tax.enabled ? `${tax.rate}%` : "Off", color: "bg-amber-50 text-amber-700" },
          { label: "Test Mode", val: gateways.filter((g) => g.testMode && g.enabled).length > 0 ? "Active" : "Off", color: "bg-purple-50 text-purple-700" },
        ].map(({ label, val, color }) => (
          <div key={label} className={`${color} rounded-2xl p-4 border border-white/60`}>
            <p className="text-xl font-bold">{val}</p>
            <p className="text-[10px] uppercase tracking-widest font-semibold mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Payment Gateways */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Payment Gateways</h3>
          <p className="text-[10px] text-gray-400 mt-0.5">Enable and configure your payment methods</p>
        </div>
        <div className="divide-y divide-gray-50">
          {gateways.map((gw) => (
            <div key={gw.id} className="overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{gw.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-gray-900">{gw.name}</p>
                      {gw.testMode && gw.enabled && (
                        <span className="text-[8px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded-full uppercase">Test Mode</span>
                      )}
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">{gw.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setExpandedId(expandedId === gw.id ? null : gw.id)}
                    className="text-[10px] font-semibold text-gray-500 border border-gray-200 px-3 py-1.5 rounded-xl hover:border-amber-300 hover:text-amber-600 transition-all">
                    Configure
                  </button>
                  <button onClick={() => toggleGateway(gw.id)}
                    className={`px-4 py-1.5 rounded-xl text-[10px] font-bold transition-all border ${gw.enabled ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-gray-100 text-gray-500 border-gray-200 hover:border-amber-200"}`}>
                    {gw.enabled ? "Enabled" : "Disabled"}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === gw.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-100 bg-gray-50">
                    <div className="p-5 space-y-4">
                      {(gw.id === "paystack" || gw.id === "flutterwave") && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Public Key</label>
                              <div className="relative">
                                <input type={showKeys[gw.id + "_pub"] ? "text" : "password"} className={inputCls + " pr-10"} value={gw.publicKey}
                                  onChange={(e) => updateGateway(gw.id, "publicKey", e.target.value)} placeholder="pk_live_..." />
                                <button type="button" onClick={() => setShowKeys((s) => ({ ...s, [gw.id + "_pub"]: !s[gw.id + "_pub"] }))}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                  {showKeys[gw.id + "_pub"] ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Secret Key</label>
                              <div className="relative">
                                <input type={showKeys[gw.id + "_sec"] ? "text" : "password"} className={inputCls + " pr-10"} value={gw.secretKey}
                                  onChange={(e) => updateGateway(gw.id, "secretKey", e.target.value)} placeholder="sk_live_..." />
                                <button type="button" onClick={() => setShowKeys((s) => ({ ...s, [gw.id + "_sec"]: !s[gw.id + "_sec"] }))}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                  {showKeys[gw.id + "_sec"] ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                </button>
                              </div>
                            </div>
                          </div>
                          <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
                            <input type="checkbox" className="w-4 h-4 accent-amber-500" checked={gw.testMode}
                              onChange={(e) => updateGateway(gw.id, "testMode", e.target.checked)} />
                            Test Mode (sandbox) — no real charges
                          </label>
                        </>
                      )}
                      {(gw.id === "mtn-momo" || gw.id === "telecel" || gw.id === "airtel") && (
                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Merchant Number / API Key</label>
                          <input className={inputCls} value={gw.publicKey} onChange={(e) => updateGateway(gw.id, "publicKey", e.target.value)} placeholder="Merchant number or API key..." />
                          <p className="text-[9px] text-gray-400 mt-1">Contact your mobile money provider to get your merchant credentials.</p>
                        </div>
                      )}
                      {gw.id === "bank-transfer" && (
                        <p className="text-xs text-gray-500">Bank transfer details are configured in the <strong>Bank Transfer Details</strong> section below.</p>
                      )}
                      <button onClick={() => saveGateway(gw.id)}
                        className="flex items-center gap-1.5 text-[10px] font-semibold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
                        <Save className="h-3.5 w-3.5" /> Save Configuration
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Bank Transfer Details */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-amber-600" />
            <h3 className="text-sm font-bold text-gray-900">Bank Transfer Details</h3>
          </div>
          <button onClick={saveBankDetails} className="flex items-center gap-1.5 text-[10px] font-semibold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
            <Save className="h-3.5 w-3.5" /> Save
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Bank Name", key: "bankName", placeholder: "e.g. GCB Bank" },
            { label: "Account Name", key: "accountName", placeholder: "Account holder name" },
            { label: "Account Number", key: "accountNumber", placeholder: "0123456789" },
            { label: "Branch", key: "branch", placeholder: "Branch name" },
          ].map(({ label, key, placeholder }) => (
            <div key={key}>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">{label}</label>
              <input className={inputCls} value={(bankDetails as Record<string, string>)[key] || ""} onChange={(e) => setBankDetails((b: typeof bankDetails) => ({ ...b, [key]: e.target.value }))} placeholder={placeholder} />
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Payment Instructions (shown to customer)</label>
            <textarea className={inputCls + " h-20 resize-none"} value={bankDetails.instructions} onChange={(e) => setBankDetails((b: typeof bankDetails) => ({ ...b, instructions: e.target.value }))} />
          </div>
        </div>
      </div>

      {/* Tax Settings */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-amber-600" />
            <h3 className="text-sm font-bold text-gray-900">Tax Settings</h3>
          </div>
          <button onClick={saveTax} className="flex items-center gap-1.5 text-[10px] font-semibold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
            <Save className="h-3.5 w-3.5" /> Save Tax
          </button>
        </div>
        <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
          <input type="checkbox" className="w-4 h-4 accent-amber-500" checked={tax.enabled} onChange={(e) => setTax((t) => ({ ...t, enabled: e.target.checked }))} />
          Enable tax on orders
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Tax Name</label>
            <input className={inputCls} value={tax.name} onChange={(e) => setTax((t) => ({ ...t, name: e.target.value }))} placeholder="e.g. Ghana VAT" />
          </div>
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Rate (%)</label>
            <input type="number" step="0.1" className={inputCls} value={tax.rate} onChange={(e) => setTax((t) => ({ ...t, rate: parseFloat(e.target.value) }))} />
          </div>
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Applies To</label>
            <select className={inputCls} value={tax.appliesTo} onChange={(e) => setTax((t) => ({ ...t, appliesTo: e.target.value }))}>
              <option value="all">All Products</option>
              <option value="physical">Physical Only</option>
              <option value="none">None (disabled)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
