"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// Kartu yang miring mengikuti arah kursor
export default function TiltCard({ children, className = "" }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });

  function gerak(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function lepas() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      onMouseMove={gerak}
      onMouseLeave={lepas}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
