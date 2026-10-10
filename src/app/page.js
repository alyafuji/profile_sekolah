import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import ProgramTabs from "@/components/ProgramTabs";
import FasilitasSlider from "@/components/FasilitasSlider";
import BeritaCard from "@/components/BeritaCard";
import Reveal from "@/components/Reveal";
import { beritaList } from "@/data/berita";
import { sekolah, sambutan, program, fasilitas, ekstrakurikuler } from "@/data/sekolah";

export default function HomePage() {
  const beritaTerbaru = beritaList.slice(0, 3);
  const tahunMengabdi = sekolah.tahunSekarang - sekolah.tahunBerdiri;

  const statistik = [
    { nilai: tahunMengabdi, akhiran: "", label: "Tahun mengabdi sejak 1982" },
    { nilai: 12, akhiran: "", label: "Rombel kelas X pada SPMB 2026" },
    { nilai: 6, akhiran: "", label: "Laboratorium untuk praktik" },
    { nilai: ekstrakurikuler.length, akhiran: "", label: "Pilihan ekstrakurikuler" },
  ];

  return (
    <>
      <Hero />
      <StatsStrip items={statistik} />

      {/* Sambutan Kepala Sekolah */}
      <section className="bg-foam">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-5">
          <Reveal x={-40} y={0} className="md:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-br from-aqua-400 to-ocean-500 opacity-40" />
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-800 to-ocean-600 shadow-lg">
                <Image 
                  src="/kepsek.jpg" 
                  alt={`Foto ${sekolah.kepalaSekolah}`} 
                  fill 
                  className="object-cover object-top opacity-90" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-950/95 via-ocean-950/70 to-transparent p-5 pt-20">
                  <p className="font-display font-bold text-white text-lg">{sekolah.kepalaSekolah}</p>
                  <p className="text-sm font-medium text-slate-300">Kepala {sekolah.nama}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-3">
            <SectionHeading judul="Sambutan Kepala Sekolah" />
            {sambutan.map((p, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <p className="mb-4 max-w-prose text-base leading-relaxed text-slate-700 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.35} className="mt-8 hidden md:block">
              <p className="font-display text-lg font-bold text-ocean-950">{sekolah.kepalaSekolah}</p>
              <p className="text-sm font-medium text-slate-500">Kepala {sekolah.nama}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tentang singkat + Program */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <SectionHeading judul={`Tentang ${sekolah.singkat}`} />
            <Reveal delay={0.1}>
              <p className="max-w-prose leading-relaxed text-slate-700 text-base sm:text-lg">
                {sekolah.nama} berdiri pada {sekolah.bulanBerdiri} {sekolah.tahunBerdiri} dan
                menjadi salah satu SMA negeri tertua di pusat Kota Cilegon, Banten. Kami
                memadukan pembelajaran berbasis sains, pembiasaan karakter, dan kepedulian
                terhadap lingkungan.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-ocean-600 px-7 py-2.5 font-bold text-white transition-all hover:bg-ocean-800 hover:pr-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2"
              >
                Selengkapnya tentang sekolah
                <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ProgramTabs program={program} />
          </Reveal>
        </div>
      </section>

      {/* Marquee Ekstrakurikuler */}
      <Marquee items={ekstrakurikuler.map((e) => e.nama)} />

      {/* Fasilitas */}
      <section className="bg-foam">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            judul="Fasilitas Belajar"
            deskripsi="Ruang dan sarana yang menunjang kegiatan belajar mengajar di SMANCIL."
          />
          <Reveal>
            <FasilitasSlider items={fasilitas} />
          </Reveal>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          judul="Berita Terbaru"
          deskripsi="Kabar terkini dari kegiatan dan pengumuman sekolah."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beritaTerbaru.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.12}>
              <BeritaCard berita={b} />
            </Reveal>
          ))}
        </div>
        
        <Reveal className="mt-14 text-center">
          <Link
            href="/berita"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-ocean-600 px-8 py-2.5 font-bold text-ocean-600 transition-colors hover:bg-ocean-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-600 focus-visible:ring-offset-2"
          >
            Lihat semua berita
          </Link>
        </Reveal>
      </section>

      {/* Ajakan / Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-r from-ocean-800 to-aqua-500">
        <div className="pola-titik absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-white sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Ada pertanyaan tentang SMANCIL?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-100 sm:text-lg">
              Hubungi kami atau kunjungi sekolah di pusat Kota Cilegon.
            </p>
            <Link
              href="/kontak"
              className="mt-10 inline-flex min-h-[44px] items-center justify-center rounded-full bg-sun px-8 py-3 font-bold text-ocean-950 shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-800"
            >
              Hubungi Kami
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}