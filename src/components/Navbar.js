"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { sekolah } from "@/data/sekolah";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false);
  const [bergulir, setBergulir] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setBergulir(v > 24));

  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Mencegah halaman latar belakang ikut ter-scroll saat menu mobile terbuka
  useEffect(() => {
    if (terbuka) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [terbuka]);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        bergulir || terbuka
          ? "bg-ocean-950/95 py-2.5 shadow-lg backdrop-blur-md border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo & Brand Identity */}
        <Link 
          href="/" 
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun" 
          onClick={() => setTerbuka(false)}
        >
          <motion.span whileHover={{ rotate: -6, scale: 1.05 }} className="block shrink-0">
            <Image 
              src="/logo.png" 
              alt={`Logo ${sekolah.nama}`} 
              width={40} 
              height={40} 
              priority 
              className="h-10 w-10 object-contain drop-shadow-sm"
            />
          </motion.span>
          <span className="font-display text-base sm:text-lg font-bold leading-tight tracking-tight">
            {sekolah.nama}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={aktif(item.href) ? "page" : undefined}
                className="relative block rounded-full px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              >
                {aktif(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/20"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={terbuka ? "Tutup menu" : "Buka menu"}
          aria-expanded={terbuka}
          aria-controls="mobile-menu"
          onClick={() => setTerbuka(!terbuka)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 active:bg-white/10 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
        >
          <motion.span 
            animate={terbuka ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} 
            className="block h-0.5 w-5 rounded-full bg-white" 
          />
          <motion.span 
            animate={{ opacity: terbuka ? 0 : 1 }} 
            className="block h-0.5 w-5 rounded-full bg-white" 
          />
          <motion.span 
            animate={terbuka ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} 
            className="block h-0.5 w-5 rounded-full bg-white" 
          />
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {terbuka && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 px-4 py-2 bg-ocean-950/95 backdrop-blur-md md:hidden shadow-xl"
          >
            <ul className="flex flex-col gap-1 py-4">
              {menu.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setTerbuka(false)}
                    aria-current={aktif(item.href) ? "page" : undefined}
                    className={`block min-h-[44px] rounded-lg px-4 py-3 font-semibold transition-colors active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun ${
                      aktif(item.href) 
                        ? "bg-white/15 text-sun font-bold" 
                        : "text-slate-100 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}