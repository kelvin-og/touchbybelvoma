import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Save, CheckCircle2, Plus, Trash2, RefreshCw } from "lucide-react";

interface SEOSettings {
  siteTitle: string;
  siteDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  googleVerification: string;
  robotsTxt: string;
  canonicalBase: string;
  schema: string;
}

interface Redirect {
  id: string;
  from: string;
  to: string;
  type: "301" | "302";
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

export function SEOSection({ addLog }: { addLog: (l: { category: "Config"; action: string; user: string; ip: string }) => void }) {
  const [settings, setSettings] = useState<SEOSettings>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_seo_settings") : null;
    if (stored) return JSON.parse(stored);
    return {
      siteTitle: "Touch by Bel'voma | Luxury Jewelry in Ghana",
      siteDescription: "Discover elegant earrings, necklaces, bracelets, rings, anklets, and luxury accessories at Touch by Bel'voma.",
      ogTitle: "Touch by Bel'voma | Luxury Jewelry in Ghana",
      ogDescription: "Premium handcrafted gold-plated jewelry, shipped across Ghana.",
      ogImage: "",
      twitterCard: "summary_large_image",
      twitterTitle: "Touch by Bel'voma | Luxury Jewelry",
      twitterDescription: "Premium jewelry crafted to elevate your everyday style.",
      googleVerification: "",
      robotsTxt: "User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /superadmin\nSitemap: https://kelvin-og.github.io/touchbybelvoma/sitemap.xml",
      canonicalBase: "https://kelvin-og.github.io/touchbybelvoma",
      schema: "",
    };
  });

  const [redirects, setRedirects] = useState<Redirect[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_seo_redirects") : null;
    return stored ? JSON.parse(stored) : [];
  });

  const [newRedirect, setNewRedirect] = useState<Partial<Redirect>>({ type: "301" });
  const [toast, setToast] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"meta" | "og" | "twitter" | "robots" | "redirects">("meta");

  const showT = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const saveSettings = () => {
    localStorage.setItem("tbb_seo_settings", JSON.stringify(settings));
    addLog({ category: "Config", action: "SEO settings updated", user: "superadmin", ip: "127.0.0.1" });
    showT("SEO settings saved");
  };

  const persistRedirects = (r: Redirect[]) => {
    setRedirects(r);
    localStorage.setItem("tbb_seo_redirects", JSON.stringify(r));
  };

  const addRedirect = () => {
    if (!newRedirect.from || !newRedirect.to) return;
    const redirect: Redirect = { id: Date.now().toString(), from: newRedirect.from!, to: newRedirect.to!, type: newRedirect.type as "301" | "302" };
    persistRedirects([...redirects, redirect]);
    setNewRedirect({ type: "301" });
    showT("Redirect added");
  };

  const titleLen = settings.siteTitle.length;
  const descLen = settings.siteDescription.length;

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed top-6 right-6 z-[200] bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-xl text-sm font-medium flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeader icon={Globe} title="SEO Manager" subtitle="Optimize your store for search engines"
        actions={
          <button onClick={saveSettings} className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
            <Save className="h-3.5 w-3.5" /> Save All
          </button>
        }
      />

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit flex-wrap">
        {(["meta", "og", "twitter", "robots", "redirects"] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all ${activeTab === tab ? "bg-white text-amber-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
            {tab === "og" ? "Open Graph" : tab === "redirects" ? "301 Redirects" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
        {activeTab === "meta" && (
          <>
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Meta Tags</h3>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Site Title</label>
                <span className={`text-[9px] font-medium ${titleLen > 60 ? "text-red-500" : titleLen > 50 ? "text-amber-500" : "text-emerald-600"}`}>{titleLen}/60</span>
              </div>
              <input className={inputCls} value={settings.siteTitle} onChange={(e) => setSettings((s) => ({ ...s, siteTitle: e.target.value }))} placeholder="Page Title..." />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Meta Description</label>
                <span className={`text-[9px] font-medium ${descLen > 160 ? "text-red-500" : descLen > 140 ? "text-amber-500" : "text-emerald-600"}`}>{descLen}/160</span>
              </div>
              <textarea className={inputCls + " h-20 resize-none"} value={settings.siteDescription} onChange={(e) => setSettings((s) => ({ ...s, siteDescription: e.target.value }))} placeholder="Meta description for search engines..." />
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Canonical Base URL</label>
              <input className={inputCls} value={settings.canonicalBase} onChange={(e) => setSettings((s) => ({ ...s, canonicalBase: e.target.value }))} placeholder="https://yourdomain.com" />
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Google Search Console Verification</label>
              <input className={inputCls} value={settings.googleVerification} onChange={(e) => setSettings((s) => ({ ...s, googleVerification: e.target.value }))} placeholder="Google site verification code..." />
            </div>
            {/* Preview */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Search Preview</p>
              <p className="text-blue-600 text-sm font-medium">{settings.siteTitle || "Page Title"}</p>
              <p className="text-emerald-700 text-[10px]">{settings.canonicalBase || "https://yoursite.com"}</p>
              <p className="text-gray-600 text-xs mt-1">{settings.siteDescription || "Description will appear here..."}</p>
            </div>
          </>
        )}

        {activeTab === "og" && (
          <>
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Open Graph (Facebook / WhatsApp)</h3>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">OG Title</label>
              <input className={inputCls} value={settings.ogTitle} onChange={(e) => setSettings((s) => ({ ...s, ogTitle: e.target.value }))} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">OG Description</label>
              <textarea className={inputCls + " h-20 resize-none"} value={settings.ogDescription} onChange={(e) => setSettings((s) => ({ ...s, ogDescription: e.target.value }))} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">OG Image URL</label>
              <input className={inputCls} value={settings.ogImage} onChange={(e) => setSettings((s) => ({ ...s, ogImage: e.target.value }))} placeholder="https://..." />
              <p className="text-[9px] text-gray-400 mt-1">Recommended: 1200×630px. Use an image from your Media Library.</p>
            </div>
          </>
        )}

        {activeTab === "twitter" && (
          <>
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Twitter / X Cards</h3>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Card Type</label>
              <select className={inputCls} value={settings.twitterCard} onChange={(e) => setSettings((s) => ({ ...s, twitterCard: e.target.value }))}>
                <option value="summary">Summary</option>
                <option value="summary_large_image">Summary Large Image</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Twitter Title</label>
              <input className={inputCls} value={settings.twitterTitle} onChange={(e) => setSettings((s) => ({ ...s, twitterTitle: e.target.value }))} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Twitter Description</label>
              <textarea className={inputCls + " h-20 resize-none"} value={settings.twitterDescription} onChange={(e) => setSettings((s) => ({ ...s, twitterDescription: e.target.value }))} />
            </div>
          </>
        )}

        {activeTab === "robots" && (
          <>
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">robots.txt Editor</h3>
            <p className="text-xs text-gray-500">Controls which pages search engines can crawl.</p>
            <textarea className={inputCls + " h-48 resize-none font-mono text-[11px]"} value={settings.robotsTxt} onChange={(e) => setSettings((s) => ({ ...s, robotsTxt: e.target.value }))} />
          </>
        )}

        {activeTab === "redirects" && (
          <>
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">URL Redirects</h3>
            <div className="flex flex-wrap gap-2 items-end">
              <div className="flex-1 min-w-[140px]">
                <label className="block text-[9px] font-semibold uppercase tracking-widest text-gray-400 mb-1">From Path</label>
                <input className={inputCls} value={newRedirect.from || ""} onChange={(e) => setNewRedirect((r) => ({ ...r, from: e.target.value }))} placeholder="/old-page" />
              </div>
              <div className="flex-1 min-w-[140px]">
                <label className="block text-[9px] font-semibold uppercase tracking-widest text-gray-400 mb-1">To Path</label>
                <input className={inputCls} value={newRedirect.to || ""} onChange={(e) => setNewRedirect((r) => ({ ...r, to: e.target.value }))} placeholder="/new-page" />
              </div>
              <div className="w-24">
                <label className="block text-[9px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Type</label>
                <select className={inputCls} value={newRedirect.type} onChange={(e) => setNewRedirect((r) => ({ ...r, type: e.target.value as "301" | "302" }))}>
                  <option value="301">301</option>
                  <option value="302">302</option>
                </select>
              </div>
              <button onClick={addRedirect} className="flex items-center gap-1.5 text-[10px] font-semibold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap">
                <Plus className="h-3.5 w-3.5" /> Add
              </button>
            </div>
            {redirects.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-6">No redirects configured</p>
            ) : (
              <div className="space-y-2 mt-2">
                {redirects.map((r) => (
                  <div key={r.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-3 text-xs">
                    <span className="font-mono text-gray-700">{r.from} → {r.to}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">{r.type}</span>
                      <button onClick={() => persistRedirects(redirects.filter((x) => x.id !== r.id))} className="p-1 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
