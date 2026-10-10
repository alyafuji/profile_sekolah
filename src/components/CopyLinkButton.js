"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function CopyLinkButton() {
  const [tersalin, setTersalin] = useState(false);

  async function salin() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setTersalin(true);
      setTimeout(() => setTersalin(false), 2000);
    } catch {
      // abaikan jika browser menolak akses clipboard
    }
  }

  return (
    <motion.button
      type="button"
      onClick={salin}
      whileTap={{ scale: 0.94 }}
      className="inline-flex items-center gap-2 rounded-full border-2 border-ocean-600 px-5 py-2.5 text-sm font-bold text-ocean-600 transition-colors hover:bg-ocean-600 hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={tersalin ? "ok" : "salin"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {tersalin ? "Tautan tersalin" : "Salin tautan berita"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
