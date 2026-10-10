"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "motion/react";

// Slider yang bisa digeser (drag) atau digerakkan dengan tombol panah
export default function FasilitasSlider({ items }) {
  const wrap = useRef(null);
  const inner = useRef(null);
  const [batas, setBatas] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const hitung = () => {
      if (!wrap.current || !inner.current) return;
      setBatas(Math.max(0, inner.current.scrollWidth - wrap.current.offsetWidth));
    };
    hitung();
    window.addEventListener("resize", hitung);
    return () => window.removeEventListener("resize", hitung);
  }, [items]);

  function geser(arah) {
    const target = Math.min(0, Math.max(-batas, x.get() + arah * 320));
    animate(x, target, { type: "spring", stiffness: 200, damping: 28 });
  }

  return (
    <div>
      <div ref={wrap} className="cursor-grab overflow-hidden active:cursor-grabbing">
        <motion.div
          ref={inner}
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -batas, right: 0 }}
          dragElastic={0.12}
          className="flex gap-5 pb-4"
        >
          {items.map((f) => (
            <motion.article
              key={f.nama}
              whileHover={{ y: -8 }}
              className="w-64 shrink-0 select-none rounded-2xl border border-ocean-600/10 bg-white p-6 shadow-md shadow-ocean-900/5 md:w-72"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-400/30 to-ocean-500/30 text-3xl">
                {f.ikon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ocean-900">{f.nama}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.deskripsi}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-ink/55">Geser atau gunakan tombol panah</p>
        <div className="flex gap-2">
          {[
            ["Sebelumnya", 1, "M15 5l-7 7 7 7"],
            ["Berikutnya", -1, "M9 5l7 7-7 7"],
          ].map(([label, arah, d]) => (
            <motion.button
              key={label}
              type="button"
              aria-label={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => geser(arah)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ocean-600 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d={d} />
              </svg>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
