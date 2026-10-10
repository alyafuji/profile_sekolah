"use client";

import { motion } from "motion/react";

// Barisan label berjalan terus-menerus. Berhenti saat kursor di atasnya.
export default function Marquee({ items }) {
  const daftar = [...items, ...items];
  return (
    <div className="group overflow-hidden bg-ocean-900 py-5">
      <motion.ul
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        whileHover={{ transition: { duration: 120, repeat: Infinity, ease: "linear" } }}
      >
        {daftar.map((nama, i) => (
          <li
            key={i}
            className="whitespace-nowrap rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/85"
          >
            {nama}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
