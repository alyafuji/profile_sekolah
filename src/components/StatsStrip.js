"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";

function Hitung({ ke }) {
  const ref = useRef(null);
  const terlihat = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!terlihat) return;
    const kontrol = animate(0, ke, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => kontrol.stop();
  }, [terlihat, ke]);

  return <span ref={ref}>{n}</span>;
}

export default function StatsStrip({ items }) {
  return (
    <section className="bg-foam">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 pb-4 pt-6 md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-white p-6 text-center shadow-md shadow-ocean-900/5"
          >
            <p className="font-display text-4xl font-extrabold text-ocean-600 md:text-5xl">
              <Hitung ke={it.nilai} />
              {it.akhiran}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink/70">{it.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
