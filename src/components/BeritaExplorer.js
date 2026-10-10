"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaExplorer({ berita, kategori }) {
  const [pilih, setPilih] = useState("Semua");
  const [cari, setCari] = useState("");

  const tampil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return berita.filter(
      (b) =>
        (pilih === "Semua" || b.kategori === pilih) &&
        (q === "" || b.judul.toLowerCase().includes(q) || b.ringkasan.toLowerCase().includes(q))
    );
  }, [berita, pilih, cari]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {kategori.map((k) => (
            <button
              key={k}
              onClick={() => setPilih(k)}
              className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                pilih === k ? "text-white" : "bg-foam text-ocean-800 hover:bg-aqua-400/25"
              }`}
            >
              {pilih === k && (
                <motion.span
                  layoutId="filter-berita"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-ocean-600 to-aqua-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{k}</span>
            </button>
          ))}
        </div>

        <input
          type="search"
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Cari berita..."
          aria-label="Cari berita"
          className="w-full rounded-full border border-ocean-600/20 bg-white px-5 py-2.5 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(47,208,192,0.45)] md:w-64"
        />
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {tampil.map((b) => (
            <motion.div
              key={b.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <BeritaCard berita={b} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {tampil.length === 0 && (
        <p className="py-16 text-center text-ink/60">
          Tidak ada berita yang cocok. Coba kata kunci atau kategori lain.
        </p>
      )}
    </div>
  );
}
