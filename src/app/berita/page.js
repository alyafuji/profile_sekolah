import PageHeader from "@/components/PageHeader";
import BeritaExplorer from "@/components/BeritaExplorer";
import { beritaList, kategoriBerita } from "@/data/berita";
import { sekolah } from "@/data/sekolah";

export const metadata = {
  title: "Berita",
  description: `Berita, pengumuman, dan kegiatan terbaru ${sekolah.nama}.`,
};

export default function BeritaPage() {
  return (
    <>
      <PageHeader
        judul="Berita Sekolah"
        deskripsi="Kabar kegiatan, pengumuman, dan cerita dari SMANCIL."
      />
      
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <BeritaExplorer berita={beritaList} kategori={kategoriBerita} />
        
        {/* Catatan Kaki (Disclaimer) dengan warna solid agar lulus uji kontras */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm italic text-slate-500">
            * Berita berlabel "Contoh" adalah data simulasi. Berita lainnya bersumber dari media
            yang tercantum di halaman detail.
          </p>
        </div>
      </section>
    </>
  );
}