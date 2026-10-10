"use client";

import { MotionConfig } from "motion/react";

// Menghormati pengaturan "kurangi gerakan" di perangkat pengguna
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
