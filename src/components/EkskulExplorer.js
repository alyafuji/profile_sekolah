"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function EkskulExplorer({ items, kategori }) {
  const [pilih, setPilih] = useState("Semua");
  const tampil = pilih === "Semua" ? items : items.filter((e) => e.kategori === pilih);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
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
                layoutId="filter-ekskul"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-ocean-600 to-aqua-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{k}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {tampil.map((e) => (
            <motion.li
              key={e.nama}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-xl border border-ocean-600/10 bg-white p-4 shadow-sm"
            >
              <p className="font-display font-bold text-ocean-900">{e.nama}</p>
              <p className="mt-1 text-xs text-ink/55">{e.kategori}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
