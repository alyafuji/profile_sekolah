"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function BeritaCard({ berita }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ocean-600/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ocean-900/10"
    >
      {/* Thumbnail Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <Image
          src={berita.gambar}
          alt={`Thumbnail ${berita.judul}`}
          width={800}
          height={450}
          unoptimized
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges Container */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-sun px-3 py-1.5 text-xs font-bold text-ocean-950 shadow-sm">
            {berita.kategori}
          </span>
          {berita.simulasi && (
            <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-ocean-800 shadow-sm">
              Contoh
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time className="text-sm font-medium text-slate-500">{berita.tanggal}</time>
        
        {/* line-clamp-2 membatasi judul maksimal 2 baris */}
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ocean-950 line-clamp-2">
          {berita.judul}
        </h3>
        
        {/* line-clamp-3 membatasi deskripsi maksimal 3 baris */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {berita.ringkasan}
        </p>

        {/* Call to Action Button */}
        <Link
          href={`/berita/${berita.id}`}
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 self-start rounded-full bg-ocean-600 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-ocean-800 hover:pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2"
        >
          Baca Selengkapnya
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  );
}