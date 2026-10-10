import Reveal from "@/components/Reveal";

export default function SectionHeading({ judul, deskripsi, tengah = false }) {
  return (
    <Reveal className={`mb-10 ${tengah ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl font-extrabold text-ocean-900 md:text-4xl">
        {judul}
      </h2>
      <div className={`mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-aqua-400 to-sun ${tengah ? "mx-auto" : ""}`} />
      {deskripsi && (
        <p className={`mt-4 max-w-2xl text-ink/70 ${tengah ? "mx-auto" : ""}`}>{deskripsi}</p>
      )}
    </Reveal>
  );
}
