"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Formulir demo: data hanya diproses di browser dan tidak dikirim ke mana pun
export default function ContactForm() {
  const [terkirim, setTerkirim] = useState(false);
  const [nama, setNama] = useState("");

  function kirim(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setNama(String(data.get("nama") || ""));
    setTerkirim(true);
    e.currentTarget.reset();
  }

  const input =
    "w-full rounded-xl border border-ocean-600/20 bg-white px-4 py-3 outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(47,208,192,0.45)]";

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-ocean-900/10 md:p-8">
      <AnimatePresence mode="wait">
        {terkirim ? (
          <motion.div
            key="selesai"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-aqua-500 text-3xl text-white"
            >
              ✓
            </motion.div>
            <h3 className="mt-5 font-display text-2xl font-bold text-ocean-900">
              Terima kasih, {nama || "sahabat"}!
            </h3>
            <p className="mt-2 text-ink/70">
              Ini formulir demo, pesanmu tidak dikirim ke server mana pun.
            </p>
            <button
              onClick={() => setTerkirim(false)}
              className="mt-6 rounded-full bg-ocean-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-ocean-800"
            >
              Tulis pesan lagi
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={kirim}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold text-ocean-900">Kirim pesan</h3>
            <label className="block text-sm font-semibold">
              Nama
              <input name="nama" required className={`${input} mt-1`} />
            </label>
            <label className="block text-sm font-semibold">
              Email
              <input name="email" type="email" required className={`${input} mt-1`} />
            </label>
            <label className="block text-sm font-semibold">
              Pesan
              <textarea name="pesan" rows={4} required className={`${input} mt-1`} />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-gradient-to-r from-ocean-600 to-aqua-500 px-6 py-3 font-bold text-white"
            >
              Kirim
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
