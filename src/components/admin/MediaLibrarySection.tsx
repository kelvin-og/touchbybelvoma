import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image, Upload, Trash2, Search, CheckCircle2, X,
  FolderOpen, Download, Eye, Copy,
} from "lucide-react";

interface MediaFile {
  id: string;
  name: string;
  url: string;
  type: "image" | "pdf";
  size: string;
  uploadedAt: string;
  folder: string;
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

export function MediaLibrarySection() {
  const [files, setFiles] = useState<MediaFile[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("tbb_media_library") : null;
    return stored ? JSON.parse(stored) : [];
  });
  const [search, setSearch] = useState("");
  const [activeFolder, setActiveFolder] = useState("all");
  const [selected, setSelected] = useState<string[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const persist = (updated: MediaFile[]) => {
    setFiles(updated);
    localStorage.setItem("tbb_media_library", JSON.stringify(updated));
  };

  const handleFiles = useCallback((incoming: FileList | null) => {
    if (!incoming) return;
    const newFiles: MediaFile[] = [];
    Array.from(incoming).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        const mf: MediaFile = {
          id: Date.now().toString() + Math.random().toString(36).slice(2),
          name: file.name,
          url,
          type: file.type.startsWith("image") ? "image" : "pdf",
          size: file.size > 1024 * 1024
            ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
            : `${(file.size / 1024).toFixed(0)} KB`,
          uploadedAt: new Date().toISOString().split("T")[0],
          folder: activeFolder === "all" ? "general" : activeFolder,
        };
        setFiles((prev) => {
          const updated = [mf, ...prev];
          localStorage.setItem("tbb_media_library", JSON.stringify(updated));
          return updated;
        });
        newFiles.push(mf);
      };
      reader.readAsDataURL(file);
    });
    showToast(`${incoming.length} file(s) uploaded`);
  }, [activeFolder]);

  const deleteSelected = () => {
    const updated = files.filter((f) => !selected.includes(f.id));
    persist(updated);
    setSelected([]);
    showToast(`${selected.length} file(s) deleted`);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => showToast("URL copied to clipboard"));
  };

  const folders = ["all", "general", "products", "hero", "banners", "docs"];
  const filtered = files.filter((f) => {
    const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase());
    const matchFolder = activeFolder === "all" || f.folder === activeFolder;
    return matchSearch && matchFolder;
  });

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed top-6 right-6 z-[200] bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-xl text-sm font-medium flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4" /> {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image preview modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setPreviewUrl(null)}
          >
            <img src={previewUrl} alt="Preview" className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl" />
            <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeader
        icon={Image}
        title="Media Library"
        subtitle={`${files.length} files · ${filtered.length} shown`}
        actions={
          <div className="flex gap-2">
            {selected.length > 0 && (
              <button onClick={deleteSelected}
                className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-red-500 border border-red-200 px-3 py-2 rounded-xl hover:bg-red-50 transition-all">
                <Trash2 className="h-3.5 w-3.5" /> Delete ({selected.length})
              </button>
            )}
            <button onClick={() => fileRef.current?.click()}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-xl transition-all">
              <Upload className="h-3.5 w-3.5" /> Upload
            </button>
            <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden"
              onChange={(e) => handleFiles(e.target.files)} />
          </div>
        }
      />

      {/* Folders */}
      <div className="flex gap-2 flex-wrap">
        {folders.map((f) => (
          <button key={f} onClick={() => setActiveFolder(f)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all ${
              activeFolder === f ? "bg-amber-100 text-amber-700 border border-amber-200" : "bg-white text-gray-500 border border-gray-200 hover:border-amber-200"
            }`}>
            <FolderOpen className="h-3 w-3" /> {f}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input className="w-full text-xs border border-gray-200 bg-white pl-9 pr-4 py-2.5 rounded-xl focus:border-amber-400 outline-none"
          placeholder="Search files..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
          dragging ? "border-amber-400 bg-amber-50" : "border-gray-200 hover:border-amber-300 hover:bg-amber-50/30"
        }`}
      >
        <Upload className="h-8 w-8 text-amber-400 mx-auto mb-2" />
        <p className="text-xs font-semibold text-gray-600">Drag & drop files here or click to upload</p>
        <p className="text-[10px] text-gray-400 mt-1">JPG, PNG, GIF, WebP, PDF supported</p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 text-center">
          <Image className="h-12 w-12 text-gray-200 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-400">No files yet — upload your first image</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((file) => (
            <motion.div key={file.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className={`relative group bg-white border rounded-2xl overflow-hidden shadow-sm transition-all ${
                selected.includes(file.id) ? "border-amber-400 ring-2 ring-amber-200" : "border-gray-100 hover:border-amber-200"
              }`}
            >
              {/* Select checkbox */}
              <input type="checkbox" checked={selected.includes(file.id)}
                onChange={(e) => setSelected((s) => e.target.checked ? [...s, file.id] : s.filter((x) => x !== file.id))}
                className="absolute top-2 left-2 z-10 w-4 h-4 accent-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Thumbnail */}
              <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                {file.type === "image" ? (
                  <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <FolderOpen className="h-8 w-8" />
                    <span className="text-[9px] font-bold uppercase">PDF</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-2">
                <p className="text-[10px] font-semibold text-gray-700 truncate">{file.name}</p>
                <p className="text-[9px] text-gray-400">{file.size} · {file.uploadedAt}</p>
              </div>

              {/* Hover actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                {file.type === "image" && (
                  <button onClick={() => setPreviewUrl(file.url)}
                    className="p-2 bg-white/90 rounded-xl text-gray-700 hover:bg-white transition-colors" title="Preview">
                    <Eye className="h-3.5 w-3.5" />
                  </button>
                )}
                <button onClick={() => copyUrl(file.url)}
                  className="p-2 bg-white/90 rounded-xl text-gray-700 hover:bg-white transition-colors" title="Copy URL">
                  <Copy className="h-3.5 w-3.5" />
                </button>
                <button onClick={() => persist(files.filter((f) => f.id !== file.id))}
                  className="p-2 bg-white/90 rounded-xl text-red-500 hover:bg-white transition-colors" title="Delete">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
