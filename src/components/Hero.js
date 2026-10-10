"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { sekolah } from "@/data/sekolah";

const kataKunci = ["Mulia", "Kompeten", "Peduli Lingkungan"];
const kataJudul = sekolah.nama.split(" ");

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax layers
  const yBlobA = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yBlobB = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ySkyline = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yKonten = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opKonten = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Interactive 3D Card tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-1, 1], [14, -14]), { stiffness: 140, damping: 14 });
  const rotY = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 140, damping: 14 });

  function gerak(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }

  function lepas() {
    mx.set(0);
    my.set(0);
  }

  // Dynamic Keyword Carousel
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % kataKunci.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Hero Section Sekolah"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
    >
      {/* Decorative Layer */}
      <div className="pola-titik absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <motion.div
        aria-hidden="true"
        style={{ y: yBlobA }}
        className="absolute -left-24 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: yBlobB }}
        className="absolute -right-24 bottom-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-600/30 blur-3xl"
      />

      {/* Skyline Banner */}
      <motion.div
        aria-hidden="true"
        style={{ y: ySkyline }}
        className="absolute inset-x-0 bottom-0 -z-10 h-48 md:h-72"
      >
        <Image 
          src="/banner.svg" 
          alt="" 
          fill 
          unoptimized 
          priority 
          className="object-cover object-bottom opacity-50" 
        />
      </motion.div>

      {/* Main Content Layout */}
      <motion.div
        style={{ y: yKonten, opacity: opKonten }}
        className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-32 pt-32 md:grid-cols-5"
      >
        <div className="md:col-span-3">
          {/* Badge Identity */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" aria-hidden="true" />
            Sejak {sekolah.bulanBerdiri} {sekolah.tahunBerdiri} · {sekolah.julukan}
          </motion.p>

          {/* Heading */}
          <h1 className="mt-6 max-w-2xl font-sans text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {kataJudul.map((kata, i) => (
              <span key={i} className="mr-2.5 inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {kata}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Dynamic Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-lg font-medium text-slate-100 sm:text-xl md:text-2xl"
          >
            Generasi yang{" "}
            <span className="relative inline-block min-w-[9ch] align-bottom font-bold text-amber-400">
              <AnimatePresence mode="wait">
                <motion.span
                  key={kataKunci[idx]}
                  className="inline-block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {kataKunci[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-slate-200/90"
          >
            {sekolah.tagline}
          </motion.p>

          {/* Call to Actions (Touch-target min 44px compliant) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-amber-400/30"
              >
                Kenali Sekolah Kami
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/berita"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-white/70 px-7 py-3 text-sm sm:text-base font-bold text-white transition-all hover:bg-white hover:text-slate-900"
              >
                Baca Berita
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Interactive Logo Section */}
        <div className="md:col-span-2" onMouseMove={gerak} onMouseLeave={lepas}>
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-6 rounded-full border border-white/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <div aria-hidden="true" className="absolute inset-12 rounded-full bg-cyan-400/20 blur-2xl" />

            <motion.div
              style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/logo.png"
                  alt={`Logo ${sekolah.nama}`}
                  width={240}
                  height={240}
                  priority
                  className="h-44 w-44 drop-shadow-2xl md:h-60 md:w-60 object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Badges */}
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-8 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-xl border border-slate-100"
            >
              Adiwiyata
            </motion.span>
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-12 rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-xl"
            >
              {sekolah.motto}
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Wave Divider */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          fill="#F8FAFC"
          animate={{
            d: [
              "M0 50 C240 90 480 10 720 50 C960 90 1200 20 1440 50 V90 H0 Z",
              "M0 60 C240 20 480 90 720 55 C960 20 1200 80 1440 55 V90 H0 Z",
              "M0 50 C240 90 480 10 720 50 C960 90 1200 20 1440 50 V90 H0 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </section>
  );
}