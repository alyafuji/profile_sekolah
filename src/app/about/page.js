import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AboutTabs from "@/components/AboutTabs";
import Timeline from "@/components/Timeline";
import ProgramTabs from "@/components/ProgramTabs";
import TiltCard from "@/components/TiltCard";
import EkskulExplorer from "@/components/EkskulExplorer";
import {
  sekolah,
  visi,
  visiId,
  misi,
  sejarah,
  lini,
  program,
  fasilitas,
  ekstrakurikuler,
  kategoriEkskul,
  smancilStudyClub,
  prestasi,
} from "@/data/sekolah";

export const metadata = {
  title: "About",
  description: `Profil, sejarah, visi, misi, fasilitas, ekstrakurikuler, dan alamat ${sekolah.nama}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        judul={`Tentang ${sekolah.singkat}`}
        deskripsi={`${sekolah.tagline}. ${sekolah.taglineId}.`}
      />

      <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6">
        
        {/* Profil */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading judul="Profil Sekolah" />
            <Reveal delay={0.1}>
              <p className="max-w-prose leading-relaxed text-slate-700 text-base sm:text-lg">
                {sekolah.nama} adalah sekolah menengah atas negeri di pusat Kota Cilegon,
                Banten. Peminatan yang tersedia terbagi ke dalam rumpun Ilmu Pengetahuan Alam
                (IPA/Saintek) dan Ilmu Pengetahuan Sosial (IPS/Soshum). Sekolah ini dikenal
                dengan sebutan SMANCIL dan berfokus pada pelestarian lingkungan sebagai
                sekolah Adiwiyata.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="mt-8 grid max-w-md grid-cols-2 gap-4">
                {[
                  ["Berdiri", `${sekolah.bulanBerdiri} ${sekolah.tahunBerdiri}`],
                  ["Motto", sekolah.motto],
                  ["Kepala sekolah", sekolah.kepalaSekolah],
                  ["Julukan", sekolah.julukan],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-foam p-4 shadow-sm border border-cyan-100/50">
                    <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{k}</dt>
                    <dd className="mt-1 font-display font-bold text-ocean-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal x={40} y={0}>
            <TiltCard className="mx-auto flex max-w-sm items-center justify-center rounded-3xl bg-gradient-to-br from-ocean-800 to-aqua-500 p-12 shadow-2xl">
              <Image 
                src="/logo.png" 
                alt={`Logo ${sekolah.nama}`} 
                width={260} 
                height={260} 
                className="drop-shadow-2xl object-contain" 
              />
            </TiltCard>
          </Reveal>
        </section>

        {/* Visi, Misi, Sejarah */}
        <section>
          <SectionHeading judul="Visi, Misi, dan Sejarah" />
          <Reveal>
            <AboutTabs visi={visi} visiId={visiId} misi={misi} sejarah={sejarah} />
          </Reveal>
        </section>

        {/* Lini masa */}
        <section>
          <SectionHeading judul="Jejak Langkah" />
          <Timeline items={lini} />
        </section>

        {/* Program unggulan */}
        <section>
          <SectionHeading
            judul="Program Unggulan"
            deskripsi="Peminatan akademik dan program lingkungan yang menjadi ciri SMANCIL."
          />
          <Reveal>
            <ProgramTabs program={program} />
          </Reveal>
        </section>

        {/* Fasilitas */}
        <section>
          <SectionHeading judul="Fasilitas" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((f, i) => (
              <Reveal key={f.nama} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full rounded-2xl border border-ocean-600/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/20 to-ocean-500/20 text-2xl">
                    {f.ikon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ocean-950">{f.nama}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.deskripsi}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ekstrakurikuler */}
        <section>
          <SectionHeading
            judul="Ekstrakurikuler"
            deskripsi="Wadah pengembangan bakat, kreativitas, kepemimpinan, dan minat siswa di luar jam pelajaran."
          />
          <Reveal>
            <EkskulExplorer items={ekstrakurikuler} kategori={kategoriEkskul} />
            <p className="mt-6 text-sm italic text-slate-500 text-center sm:text-left">
              * Smancil Study Club: {smancilStudyClub}
            </p>
          </Reveal>
        </section>

        {/* Prestasi */}
        <section>
          <SectionHeading judul="Prestasi Sekolah" />
          <div className="grid gap-6 md:grid-cols-2">
            {prestasi.map((p, i) => (
              <Reveal key={p.judul} delay={i * 0.12}>
                <TiltCard className="h-full rounded-2xl bg-gradient-to-br from-ocean-900 to-ocean-800 p-8 text-white shadow-xl">
                  <div className="text-4xl">{p.ikon}</div>
                  <h3 className="mt-5 font-display text-xl font-bold text-sun">{p.judul}</h3>
                  <p className="mt-3 leading-relaxed text-slate-200">{p.deskripsi}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Alamat */}
        <section>
          <SectionHeading judul="Alamat" />
          <div className="grid gap-6 md:grid-cols-5">
            <Reveal className="md:col-span-2">
              <address className="flex h-full flex-col rounded-2xl bg-ocean-900 p-8 not-italic leading-relaxed text-white shadow-lg">
                <p className="font-display text-xl font-bold">{sekolah.nama}</p>
                <p className="mt-4 text-slate-300">{sekolah.alamat}</p>
                
                <div className="mt-4 flex flex-col gap-1 text-slate-300">
                  <p>Telp: <a href={`tel:${sekolah.telepon}`} className="hover:text-aqua-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sun rounded">{sekolah.telepon}</a></p>
                  <p>Email: <a href={`mailto:${sekolah.email}`} className="hover:text-aqua-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sun rounded">{sekolah.email}</a></p>
                </div>

                <Link
                  href="/kontak"
                  className="mt-8 inline-flex min-h-[44px] w-fit items-center justify-center rounded-full bg-sun px-6 py-2.5 text-sm font-bold text-ocean-950 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-900"
                >
                  Halaman Kontak
                </Link>
              </address>
            </Reveal>
            
            <Reveal className="md:col-span-3" delay={0.1}>
              <iframe
                title={`Peta Lokasi ${sekolah.nama}`}
                src="https://www.google.com/maps?q=SMA+Negeri+1+Cilegon&output=embed"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full rounded-2xl border-0 shadow-lg md:h-full bg-slate-200"
              />
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}