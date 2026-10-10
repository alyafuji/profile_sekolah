"use client";

import { motion } from "motion/react";

// Banner judul untuk halaman dalam (About, Berita, Kontak, dst.)
export default function PageHeader({ judul, deskripsi }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 pb-16 pt-32 text-white">
      <div className="pola-titik absolute inset-0 -z-10 opacity-60" />
      <motion.div
        aria-hidden
        className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-aqua-400/30 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 left-10 -z-10 h-64 w-64 rounded-full bg-ocean-500/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-extrabold leading-tight md:text-6xl"
        >
          {judul}
        </motion.h1>
        {deskripsi && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg text-white/80"
          >
            {deskripsi}
          </motion.p>
        )}
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0 30 C240 70 480 0 720 30 C960 60 1200 10 1440 30 V60 H0 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
