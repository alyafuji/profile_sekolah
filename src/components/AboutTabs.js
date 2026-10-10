"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tabs = ["Visi", "Misi", "Sejarah"];

export default function AboutTabs({ visi, visiId, misi, sejarah }) {
  const [aktif, setAktif] = useState("Visi");

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-900 to-ocean-800 text-white shadow-xl">
      <div role="tablist" className="flex border-b border-white/15">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={aktif === t}
            onClick={() => setAktif(t)}
            className={`relative flex-1 px-4 py-4 font-display text-base font-bold transition-colors ${
              aktif === t ? "text-sun" : "text-white/65 hover:text-white"
            }`}
          >
            {t}
            {aktif === t && (
              <motion.span
                layoutId="garis-about"
                className="absolute inset-x-0 bottom-0 h-1 bg-sun"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[18rem] p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={aktif}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            {aktif === "Visi" && (
              <div>
                <p className="font-display text-3xl font-extrabold leading-tight md:text-4xl">{visi}</p>
                <p className="mt-4 text-lg text-white/75">{visiId}</p>
              </div>
            )}

            {aktif === "Misi" && (
              <ol className="space-y-4">
                {misi.map((m, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sun font-display text-sm font-extrabold text-ocean-950">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed text-white/90">{m}</span>
                  </motion.li>
                ))}
              </ol>
            )}

            {aktif === "Sejarah" && (
              <div className="max-w-prose space-y-4 leading-relaxed text-white/90">
                {sejarah.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
