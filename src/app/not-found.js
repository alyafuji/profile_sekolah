import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        judul="Halaman tidak ditemukan"
        deskripsi="Alamat yang kamu buka tidak ada atau sudah dipindahkan."
      />
      <section className="mx-auto max-w-xl px-4 py-20 text-center">
        <Link
          href="/"
          className="inline-block rounded-full bg-ocean-600 px-7 py-3 font-bold text-white transition-colors hover:bg-ocean-800"
        >
          Kembali ke Home
        </Link>
      </section>
    </>
  );
}
