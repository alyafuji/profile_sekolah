import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { sekolah } from "@/data/sekolah";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata = {
  title: {
    default: `${sekolah.nama} | Website Resmi`,
    template: `%s | ${sekolah.nama}`,
  },
  description: `Website profil ${sekolah.nama}, Cilegon, Banten. ${sekolah.tagline}.`,
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sora.variable} ${figtree.variable} scroll-smooth`}>
      {/* Tambahan UI/UX: bg-slate-50, text-slate-900, dan warna stabilo saat teks diblok (selection) */}
      <body className="flex min-h-screen flex-col font-sans text-slate-900 bg-slate-50 antialiased selection:bg-sun selection:text-ocean-950">
        <Providers>
          <ScrollProgress />
          <Navbar />
          
          <main className="flex-1">{children}</main>
          
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}