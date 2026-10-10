import Image from "next/image";
import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="relative bg-ocean-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:gap-16">
        
        {/* Kolom 1: Identitas Sekolah */}
        <div>
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt={`Logo ${sekolah.nama}`} 
              width={52} 
              height={52} 
              className="h-12 w-12 object-contain shrink-0"
            />
            <div>
              <p className="font-display text-lg font-bold leading-tight">{sekolah.nama}</p>
              <p className="mt-0.5 text-xs font-semibold tracking-wide text-aqua-400">{sekolah.motto}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
            {sekolah.tagline}
          </p>
        </div>

        {/* Kolom 2: Alamat & Kontak Cepat */}
        <div>
          <h2 className="font-display text-base font-bold tracking-wide text-sun">Alamat & Kontak</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-slate-300">
            <p>{sekolah.alamat}</p>
            <div className="mt-3 flex flex-col gap-2">
              <a 
                href={`tel:${sekolah.telepon}`} 
                className="w-fit rounded-md transition-colors hover:text-aqua-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              >
                Telp: {sekolah.telepon}
              </a>
              <a 
                href={`mailto:${sekolah.email}`} 
                className="w-fit rounded-md transition-colors hover:text-aqua-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              >
                Email: {sekolah.email}
              </a>
            </div>
          </address>
        </div>

        {/* Kolom 3: Navigasi Internal */}
        <div>
          <h2 className="font-display text-base font-bold tracking-wide text-sun">Jelajahi</h2>
          <ul className="mt-4 flex flex-col gap-1">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/berita", "Berita"],
              ["/kontak", "Kontak"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link 
                  href={href} 
                  className="inline-block rounded-md py-1.5 text-sm text-slate-300 transition-colors hover:text-aqua-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Baris Copyright */}
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} {sekolah.nama}. Alya Fuji Insani.</p>
      </div>
    </footer>
  );
}