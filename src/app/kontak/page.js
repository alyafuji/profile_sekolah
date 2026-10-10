import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import ContactForm from "@/components/ContactForm";
import { sekolah } from "@/data/sekolah";

export const metadata = {
  title: "Kontak",
  description: `Alamat, telepon, email, dan peta ${sekolah.nama}.`,
};

export default function KontakPage() {
  const info = [
    { ikon: "📍", judul: "Alamat", isi: sekolah.alamat },
    { ikon: "📞", judul: "Telepon", isi: sekolah.telepon },
    { ikon: "✉️", judul: "Email", isi: sekolah.email },
  ];

  return (
    <>
      <PageHeader judul="Hubungi Kami" deskripsi="Kunjungi sekolah atau kirim pesan kepada kami." />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {info.map((it, i) => (
            <Reveal key={it.judul} delay={i * 0.1}>
              <TiltCard className="h-full rounded-2xl border border-ocean-600/10 bg-white p-6 shadow-md shadow-ocean-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/30 to-ocean-500/30 text-2xl">
                  {it.ikon}
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-ocean-900">{it.judul}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{it.isi}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <iframe
              title={`Peta ${sekolah.nama}`}
              src="https://www.google.com/maps?q=SMA+Negeri+1+Cilegon&output=embed"
              loading="lazy"
              className="h-96 w-full rounded-3xl border-0 shadow-xl md:h-full"
            />
          </Reveal>
        </div>
      </div>
    </>
  );
}
