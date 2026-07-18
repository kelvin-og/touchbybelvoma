import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Plus, Trash2, Save, CheckCircle2, Edit3, X } from "lucide-react";

interface ShippingZone {
  id: string;
  name: string;
  regions: string[];
  fee: number;
  freeThreshold: number;
  estimatedDays: string;
  active: boolean;
}

interface PickupLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  active: boolean;
}

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

const inputCls = "w-full text-xs border border-gray-200 bg-white text-gray-900 px-3.5 py-2.5 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-gray-300";

const ghanaRegions = [
  "Greater Accra", "Ashanti", "Western", "Eastern", "Central",
  "Volta", "Northern", "Upper East", "Upper West", "Brong-Ahafo",
  "Oti", "Bono East", "Ahafo", "Savannah", "North East", "Western North",
];

export function ShippingSection({ addLog }: { addLog: (l: { category: "Config"; action: string; user: string; ip: string }) => void }) {
  const [zones, setZones] = useState<ShippingZone[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_shipping_zones") : null;
    if (stored) return JSON.parse(stored);
    return [
      { id: "z1", name: "Accra Metro", regions: ["Greater Accra"], fee: 15, freeThreshold: 500, estimatedDays: "1-2 days", active: true },
      { id: "z2", name: "Southern Ghana", regions: ["Ashanti", "Western", "Eastern", "Central"], fee: 30, freeThreshold: 700, estimatedDays: "2-4 days", active: true },
      { id: "z3", name: "Northern Ghana", regions: ["Northern", "Upper East", "Upper West", "Savannah", "North East"], fee: 50, freeThreshold: 1000, estimatedDays: "3-5 days", active: true },
    ];
  });

  const [pickups, setPickups] = useState<PickupLocation[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_pickup_locations") : null;
    if (stored) return JSON.parse(stored);
    return [
      { id: "p1", name: "Accra Main Office", address: "Ring Road East, Danquah Circle, Accra", phone: "+233 24 123 4567", hours: "Mon-Sat 9am-6pm", active: true },
      { id: "p2", name: "Kumasi Branch", address: "Adum, Main Street, Kumasi", phone: "+233 50 987 6543", hours: "Mon-Fri 10am-5pm", active: false },
    ];
  });

  const [editingZone, setEditingZone] = useState<ShippingZone | null>(null);
  const [showZoneForm, setShowZoneForm] = useState(false);
  const [editingPickup, setEditingPickup] = useState<PickupLocation | null>(null);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const [zoneForm, setZoneForm] = useState<Partial<ShippingZone>>({ active: true, regions: [], fee: 0, freeThreshold: 500, estimatedDays: "2-4 days" });
  const [pickupForm, setPickupForm] = useState<Partial<PickupLocation>>({ active: true });

  const showT = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const persistZones = (z: ShippingZone[]) => {
    setZones(z);
    localStorage.setItem("tbb_shipping_zones", JSON.stringify(z));
  };

  const persistPickups = (p: PickupLocation[]) => {
    setPickups(p);
    localStorage.setItem("tbb_pickup_locations", JSON.stringify(p));
  };

  const saveZone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zoneForm.name) return;
    if (editingZone) {
      persistZones(zones.map((z) => z.id === editingZone.id ? { ...z, ...zoneForm } as ShippingZone : z));
      showT("Shipping zone updated");
    } else {
      const newZone: ShippingZone = { id: "z" + Date.now(), name: zoneForm.name!, regions: zoneForm.regions || [], fee: zoneForm.fee || 0, freeThreshold: zoneForm.freeThreshold || 500, estimatedDays: zoneForm.estimatedDays || "2-4 days", active: true };
      persistZones([...zones, newZone]);
      showT("Shipping zone added");
    }
    addLog({ category: "Config", action: `Shipping zone ${editingZone ? "updated" : "created"}: ${zoneForm.name}`, user: "superadmin", ip: "127.0.0.1" });
    setZoneForm({ active: true, regions: [], fee: 0, freeThreshold: 500, estimatedDays: "2-4 days" });
    setEditingZone(null);
    setShowZoneForm(false);
  };

  const savePickup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupForm.name) return;
    if (editingPickup) {
      persistPickups(pickups.map((p) => p.id === editingPickup.id ? { ...p, ...pickupForm } as PickupLocation : p));
      showT("Pickup location updated");
    } else {
      const newP: PickupLocation = { id: "p" + Date.now(), name: pickupForm.name!, address: pickupForm.address || "", phone: pickupForm.phone || "", hours: pickupForm.hours || "", active: true };
      persistPickups([...pickups, newP]);
      showT("Pickup location added");
    }
    setPickupForm({ active: true });
    setEditingPickup(null);
    setShowPickupForm(false);
  };

  const toggleZone = (id: string) => persistZones(zones.map((z) => z.id === id ? { ...z, active: !z.active } : z));
  const togglePickup = (id: string) => persistPickups(pickups.map((p) => p.id === id ? { ...p, active: !p.active } : p));

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

      <SectionHeader icon={Truck} title="Shipping Manager" subtitle="Configure delivery zones, rates, and pickup locations for Ghana" />

      {/* Shipping Zones */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Delivery Zones & Rates</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">Set fees and estimated times per region</p>
          </div>
          <button onClick={() => { setEditingZone(null); setZoneForm({ active: true, regions: [], fee: 0, freeThreshold: 500, estimatedDays: "2-4 days" }); setShowZoneForm(true); }}
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-white bg-amber-500 hover:bg-amber-600 px-3 py-2 rounded-xl transition-all">
            <Plus className="h-3.5 w-3.5" /> Add Zone
          </button>
        </div>

        {/* Zone Form */}
        <AnimatePresence>
          {showZoneForm && (
            <motion.form initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              onSubmit={saveZone} className="border-b border-gray-100 p-5 bg-amber-50/30 space-y-4 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Zone Name *</label>
                  <input className={inputCls} required value={zoneForm.name || ""} onChange={(e) => setZoneForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Accra Metro" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Shipping Fee (GH₵)</label>
                  <input type="number" className={inputCls} value={zoneForm.fee ?? ""} onChange={(e) => setZoneForm((f) => ({ ...f, fee: parseFloat(e.target.value) }))} placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Free Shipping Threshold (GH₵)</label>
                  <input type="number" className={inputCls} value={zoneForm.freeThreshold ?? ""} onChange={(e) => setZoneForm((f) => ({ ...f, freeThreshold: parseFloat(e.target.value) }))} placeholder="500" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Estimated Delivery Time</label>
                  <input className={inputCls} value={zoneForm.estimatedDays || ""} onChange={(e) => setZoneForm((f) => ({ ...f, estimatedDays: e.target.value }))} placeholder="e.g. 2-4 days" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-2">Regions Covered</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {ghanaRegions.map((r) => (
                    <label key={r} className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
                      <input type="checkbox" className="w-3.5 h-3.5 accent-amber-500"
                        checked={(zoneForm.regions || []).includes(r)}
                        onChange={(e) => setZoneForm((f) => ({ ...f, regions: e.target.checked ? [...(f.regions || []), r] : (f.regions || []).filter((x) => x !== r) }))} />
                      {r}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
                  <Save className="h-3.5 w-3.5" /> {editingZone ? "Update Zone" : "Add Zone"}
                </button>
                <button type="button" onClick={() => setShowZoneForm(false)} className="text-[10px] font-semibold text-gray-500 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition-all">Cancel</button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="divide-y divide-gray-50">
          {zones.map((zone) => (
            <div key={zone.id} className="flex flex-wrap items-center justify-between gap-3 p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${zone.active ? "bg-emerald-500" : "bg-gray-300"}`} />
                <div>
                  <p className="text-xs font-bold text-gray-900">{zone.name}</p>
                  <p className="text-[10px] text-gray-400">{zone.regions.slice(0, 3).join(", ")}{zone.regions.length > 3 ? ` +${zone.regions.length - 3} more` : ""}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs">
                <div className="text-center">
                  <p className="font-bold text-amber-600">GH₵ {zone.fee}</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Delivery Fee</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-emerald-600">GH₵ {zone.freeThreshold}+</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Free Shipping</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-700">{zone.estimatedDays}</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Est. Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => toggleZone(zone.id)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-semibold transition-all ${zone.active ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-gray-100 text-gray-500 border border-gray-200"}`}>
                  {zone.active ? "Active" : "Inactive"}
                </button>
                <button onClick={() => { setEditingZone(zone); setZoneForm({ ...zone }); setShowZoneForm(true); }}
                  className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                  <Edit3 className="h-3.5 w-3.5" />
                </button>
                <button onClick={() => { persistZones(zones.filter((z) => z.id !== zone.id)); showT("Zone deleted"); }}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pickup Locations */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Pickup Locations</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">Store pickup points for customers</p>
          </div>
          <button onClick={() => { setEditingPickup(null); setPickupForm({ active: true }); setShowPickupForm(true); }}
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-white bg-amber-500 hover:bg-amber-600 px-3 py-2 rounded-xl transition-all">
            <Plus className="h-3.5 w-3.5" /> Add Location
          </button>
        </div>

        <AnimatePresence>
          {showPickupForm && (
            <motion.form initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              onSubmit={savePickup} className="border-b border-gray-100 p-5 bg-amber-50/30 space-y-4 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Location Name *</label>
                  <input className={inputCls} required value={pickupForm.name || ""} onChange={(e) => setPickupForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Accra Main Office" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Phone</label>
                  <input className={inputCls} value={pickupForm.phone || ""} onChange={(e) => setPickupForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+233..." />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Address</label>
                  <input className={inputCls} value={pickupForm.address || ""} onChange={(e) => setPickupForm((f) => ({ ...f, address: e.target.value }))} placeholder="Street address" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5">Business Hours</label>
                  <input className={inputCls} value={pickupForm.hours || ""} onChange={(e) => setPickupForm((f) => ({ ...f, hours: e.target.value }))} placeholder="Mon-Sat 9am-6pm" />
                </div>
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
                  <Save className="h-3.5 w-3.5" /> {editingPickup ? "Update" : "Add"} Location
                </button>
                <button type="button" onClick={() => setShowPickupForm(false)} className="text-[10px] font-semibold text-gray-500 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50">Cancel</button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="divide-y divide-gray-50">
          {pickups.map((p) => (
            <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${p.active ? "bg-emerald-500" : "bg-gray-300"}`} />
                <div>
                  <p className="text-xs font-bold text-gray-900">{p.name}</p>
                  <p className="text-[10px] text-gray-400">{p.address}</p>
                  <p className="text-[10px] text-gray-400">{p.phone} · {p.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => togglePickup(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-semibold transition-all ${p.active ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-gray-100 text-gray-500 border border-gray-200"}`}>
                  {p.active ? "Active" : "Inactive"}
                </button>
                <button onClick={() => { setEditingPickup(p); setPickupForm({ ...p }); setShowPickupForm(true); }}
                  className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                  <Edit3 className="h-3.5 w-3.5" />
                </button>
                <button onClick={() => { persistPickups(pickups.filter((x) => x.id !== p.id)); showT("Location deleted"); }}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
