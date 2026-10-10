import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBeritaById } from "@/data/berita";

export default function DetailBerita({ params }) {
  // Mengambil data berita berdasarkan ID dari URL
  const berita = getBeritaById(params.id);

  // Jika ID berita tidak ditemukan di data/berita.js, tampilkan halaman 404
  if (!berita) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:py-32">
      
      {/* Tombol Kembali (Navigasi & Touch Target 44px compliant) */}
      <div className="mb-10">
        <Link
          href="/berita"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
        >
          <span aria-hidden="true">←</span> Kembali ke Daftar Berita
        </Link>
      </div>

      {/* Header Berita */}
      <header className="mb-10 text-center sm:text-left">
        <div className="mb-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <span className="rounded-full bg-sun px-3 py-1.5 text-xs font-bold text-ocean-950">
            {berita.kategori}
          </span>
          <time className="text-sm font-medium text-slate-500">
            {berita.tanggal}
          </time>
        </div>
        <h1 className="font-display text-3xl font-extrabold leading-tight text-ocean-950 sm:text-4xl md:text-5xl md:leading-[1.15]">
          {berita.judul}
        </h1>
      </header>

      {/* Gambar Utama */}
      <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200">
        <Image
          src={berita.gambar}
          alt={`Ilustrasi ${berita.judul}`}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Area Konten Teks */}
      <div className="text-slate-800">
        
        {/* Render setiap paragraf di dalam array 'isi' */}
        {berita.isi.map((paragraf, index) => (
          <p key={index} className="mb-6 text-base leading-relaxed sm:text-lg sm:leading-8">
            {paragraf}
          </p>
        ))}

        {/* Render kotak daftar poin (jika properti 'daftar' ada pada berita ini) */}
        {berita.daftar && (
          <div className="my-10 rounded-2xl border border-ocean-600/10 bg-ocean-50/50 p-6 sm:p-8">
            {berita.daftarJudul && (
              <h3 className="mb-5 font-display text-xl font-bold text-ocean-900">
                {berita.daftarJudul}
              </h3>
            )}
            <ul className="flex flex-col gap-3">
              {berita.daftar.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-500" aria-hidden="true" />
                  <span className="text-base leading-relaxed sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Render sumber referensi (jika properti 'sumber' ada) */}
        {berita.sumber && (
          <div className="mt-12 border-t border-slate-200 pt-6">
            <p className="text-sm italic text-slate-500">
              Disadur dari:{" "}
              <a
                href={berita.sumber.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ocean-600 hover:text-ocean-800 hover:underline"
              >
                {berita.sumber.nama}
              </a>
            </p>
          </div>
        )}

      </div>
    </article>
  );
}