"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ProgramTabs({ program }) {
  const [aktif, setAktif] = useState(program[0].id);
  const dipilih = program.find((p) => p.id === aktif);

  return (
    <div className="rounded-3xl bg-white p-4 shadow-xl shadow-ocean-900/10 md:p-8">
      <div role="tablist" className="flex flex-wrap gap-2 rounded-full bg-foam p-1.5">
        {program.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={aktif === p.id}
            onClick={() => setAktif(p.id)}
            className={`relative flex-1 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              aktif === p.id ? "text-white" : "text-ocean-800 hover:text-ocean-600"
            }`}
          >
            {aktif === p.id && (
              <motion.span
                layoutId="tab-program"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-ocean-600 to-aqua-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{p.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={dipilih.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          className="px-2 pb-2 pt-6"
        >
          <h3 className="font-display text-2xl font-bold text-ocean-900">{dipilih.judul}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink/75">{dipilih.deskripsi}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {dipilih.poin.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 * i }}
                className="rounded-full bg-aqua-400/20 px-4 py-1.5 text-sm font-semibold text-ocean-800"
              >
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
