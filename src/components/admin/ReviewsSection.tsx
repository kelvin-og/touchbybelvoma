import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Trash2, CheckCircle2, Search, MessageSquare, ThumbsUp, Flag, Eye } from "lucide-react";

interface Review {
  id: string;
  productId: string;
  productName: string;
  author: string;
  email: string;
  rating: number;
  text: string;
  date: string;
  status: "pending" | "approved" | "rejected" | "featured";
  verified: boolean;
  helpful: number;
  reply?: string;
}

const seedReviews: Review[] = [
  { id: "r1", productId: "aurelia-hoops", productName: "Aurelia Gold Hoops", author: "Amara K.", email: "amara@example.com", rating: 5, text: "The Luna necklace is my everyday staple now. The quality feels far beyond the price — I get compliments constantly.", date: "2026-06-20", status: "approved", verified: true, helpful: 14 },
  { id: "r2", productId: "luna-layered", productName: "Luna Layered Necklace", author: "Jessica T.", email: "jessica@example.com", rating: 5, text: "Beautifully packaged, fast shipping, and the hoops are so lightweight I forget I'm wearing them. Obsessed.", date: "2026-06-18", status: "featured", verified: true, helpful: 22 },
  { id: "r3", productId: "riviera-set", productName: "Riviera Jewelry Set", author: "Naomi A.", email: "naomi@example.com", rating: 5, text: "I bought the Riviera set as a gift for my sister and she cried. The presentation box alone feels luxury.", date: "2026-06-15", status: "approved", verified: true, helpful: 31 },
  { id: "r4", productId: "perla-studs", productName: "Perla Pearl Studs", author: "Ama B.", email: "ama@example.com", rating: 4, text: "Lovely earrings, arrived quickly. Slightly smaller than expected but very elegant.", date: "2026-07-01", status: "pending", verified: false, helpful: 0 },
  { id: "r5", productId: "eterna-tennis", productName: "Eterna Tennis Bracelet", author: "Gifty M.", email: "gifty@example.com", rating: 3, text: "Nice bracelet but the clasp feels a bit loose. Still looks beautiful though.", date: "2026-07-03", status: "pending", verified: false, helpful: 0 },
];

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

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const stored = localStorage.getItem("tbb_reviews");
    return stored ? JSON.parse(stored) : seedReviews;
  });
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const persist = (updated: Review[]) => {
    setReviews(updated);
    localStorage.setItem("tbb_reviews", JSON.stringify(updated));
  };

  const showT = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const updateStatus = (id: string, status: Review["status"]) => {
    persist(reviews.map((r) => r.id === id ? { ...r, status } : r));
    showT(`Review ${status}`);
  };

  const deleteReview = (id: string) => {
    persist(reviews.filter((r) => r.id !== id));
    showT("Review deleted");
  };

  const submitReply = (id: string) => {
    if (!replyText.trim()) return;
    persist(reviews.map((r) => r.id === id ? { ...r, reply: replyText.trim() } : r));
    setReplyingTo(null);
    setReplyText("");
    showT("Reply saved");
  };

  const filtered = useMemo(() => reviews.filter((r) => {
    const matchSearch = !search || r.author.toLowerCase().includes(search.toLowerCase()) || r.productName.toLowerCase().includes(search.toLowerCase()) || r.text.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || r.status === statusFilter;
    return matchSearch && matchStatus;
  }), [reviews, search, statusFilter]);

  const avgRating = reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : "0";

  const statusColors: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
    featured: "bg-purple-50 text-purple-700 border-purple-200",
  };

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

      <SectionHeader icon={Star} title="Reviews Manager" subtitle={`${reviews.length} total reviews · ${reviews.filter((r) => r.status === "pending").length} pending`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Total", val: reviews.length, color: "bg-gray-50 text-gray-700" },
          { label: "Pending", val: reviews.filter((r) => r.status === "pending").length, color: "bg-amber-50 text-amber-700" },
          { label: "Approved", val: reviews.filter((r) => r.status === "approved").length, color: "bg-emerald-50 text-emerald-700" },
          { label: "Featured", val: reviews.filter((r) => r.status === "featured").length, color: "bg-purple-50 text-purple-700" },
          { label: "Avg Rating", val: avgRating + " ★", color: "bg-amber-50 text-amber-700" },
        ].map(({ label, val, color }) => (
          <div key={label} className={`${color} rounded-2xl p-4 border border-white/60`}>
            <p className="text-xl font-bold">{val}</p>
            <p className="text-[10px] uppercase tracking-widest font-semibold mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input className="w-full text-xs border border-gray-200 bg-white pl-9 pr-4 py-2.5 rounded-xl focus:border-amber-400 outline-none"
            placeholder="Search reviews..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <select className="text-xs border border-gray-200 bg-white px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none w-auto"
          value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="featured">Featured</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl py-16 text-center">
            <Star className="h-10 w-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-400">No reviews found</p>
          </div>
        ) : (
          filtered.map((review) => (
            <motion.div key={review.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 p-5 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xs shrink-0">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-gray-900">{review.author}</p>
                      {review.verified && (
                        <span className="text-[8px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded-full uppercase tracking-wider">✓ Verified</span>
                      )}
                      <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${statusColors[review.status]}`}>{review.status}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">{review.productName} · {review.date}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 max-w-xs flex-1">{review.text.slice(0, 80)}{review.text.length > 80 ? "…" : ""}</p>
              </div>

              {/* Expanded */}
              <AnimatePresence>
                {expandedId === review.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-100">
                    <div className="p-5 space-y-4">
                      <p className="text-xs text-gray-700 leading-relaxed">{review.text}</p>

                      {review.reply && (
                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                          <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1">Store Reply</p>
                          <p className="text-xs text-gray-700">{review.reply}</p>
                        </div>
                      )}

                      {replyingTo === review.id && (
                        <div className="space-y-2">
                          <textarea className="w-full text-xs border border-gray-200 bg-white px-3.5 py-2.5 rounded-xl focus:border-amber-400 outline-none resize-none h-20"
                            placeholder="Write a reply to this review..." value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                          <div className="flex gap-2">
                            <button onClick={() => submitReply(review.id)}
                              className="text-[10px] font-semibold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
                              Post Reply
                            </button>
                            <button onClick={() => { setReplyingTo(null); setReplyText(""); }}
                              className="text-[10px] font-semibold text-gray-500 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50">Cancel</button>
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        {review.status !== "approved" && (
                          <button onClick={() => updateStatus(review.id, "approved")}
                            className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl hover:bg-emerald-100 transition-all">
                            <CheckCircle2 className="h-3 w-3" /> Approve
                          </button>
                        )}
                        {review.status !== "featured" && (
                          <button onClick={() => updateStatus(review.id, "featured")}
                            className="flex items-center gap-1 text-[10px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl hover:bg-purple-100 transition-all">
                            <Star className="h-3 w-3" /> Feature
                          </button>
                        )}
                        {review.status !== "rejected" && (
                          <button onClick={() => updateStatus(review.id, "rejected")}
                            className="flex items-center gap-1 text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl hover:bg-red-100 transition-all">
                            <Flag className="h-3 w-3" /> Reject
                          </button>
                        )}
                        <button onClick={() => { setReplyingTo(review.id); setReplyText(review.reply || ""); }}
                          className="flex items-center gap-1 text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl hover:bg-blue-100 transition-all">
                          <MessageSquare className="h-3 w-3" /> {review.reply ? "Edit Reply" : "Reply"}
                        </button>
                        <button onClick={() => deleteReview(review.id)}
                          className="flex items-center gap-1 text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl hover:bg-red-100 transition-all">
                          <Trash2 className="h-3 w-3" /> Delete
                        </button>
                        <div className="ml-auto flex items-center gap-1 text-[10px] text-gray-400">
                          <ThumbsUp className="h-3 w-3" /> {review.helpful} helpful
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
