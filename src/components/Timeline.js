"use client";

import { motion } from "motion/react";

export default function Timeline({ items }) {
  return (
    <ol className="relative ml-4 border-l-2 border-aqua-400/50 pl-8">
      {items.map((it, i) => (
        <motion.li
          key={it.tahun}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative pb-10 last:pb-0"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: i * 0.1 + 0.2 }}
            className="absolute -left-[2.65rem] top-1 h-5 w-5 rounded-full border-4 border-white bg-sun shadow"
          />
          <p className="font-display text-sm font-bold text-aqua-500">{it.tahun}</p>
          <h3 className="mt-1 font-display text-xl font-bold text-ocean-900">{it.judul}</h3>
          <p className="mt-1 max-w-md text-ink/70">{it.deskripsi}</p>
        </motion.li>
      ))}
    </ol>
  );
}
