"use client";

import { motion } from "motion/react";

// template.js dibuat ulang tiap pindah halaman, jadi animasi masuk jalan di setiap navigasi
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
