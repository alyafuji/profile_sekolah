// Data berita (statis, tanpa database/API).
// "id" dipakai sebagai URL: /berita/<id>
// Berita bertanda simulasi: true adalah contoh buatan, bukan berita asli.

export const kategoriBerita = ["Semua", "Kegiatan", "Pengumuman", "Lingkungan", "Akademik", "Prestasi"];

export const beritaList = [
  {
    id: "pelindo-bantu-ekskul-jurnalistik",
    judul: "Pelindo Regional 2 Banten Serahkan Peralatan Jurnalistik untuk Siswa SMAN 1 Cilegon",
    tanggal: "7 Oktober 2026",
    kategori: "Kegiatan",
    gambar: "/lomba.jpg",
    ringkasan:
      "Kamera, mikrofon, dan perlengkapan pendukung diserahkan untuk ekstrakurikuler jurnalistik, bersamaan dengan Digital Journalism Bootcamp 2026.",
    isi: [
      "PT Pelabuhan Indonesia (Persero) Regional 2 Banten menyerahkan bantuan sarana untuk kegiatan ekstrakurikuler jurnalistik di SMA Negeri 1 Cilegon pada Selasa, 6 Oktober 2026. Bantuan berupa kamera, mikrofon, dan perlengkapan pendukung lainnya itu merupakan bagian dari program Tanggung Jawab Sosial dan Lingkungan (TJSL) perusahaan.",
      "Penyerahan dilakukan bersamaan dengan Digital Journalism Bootcamp 2026 yang diselenggarakan Banten Raya dan didukung Pelindo Regional 2 Banten. Dalam bootcamp tersebut siswa dibekali pengetahuan dan keterampilan jurnalistik, videografi, serta pemanfaatan kecerdasan buatan (AI) dalam produksi konten digital.",
      "Commercial Manager Pelindo Regional 2 Banten, Endin Oktaviana, berharap bantuan ini benar-benar menjadi sarana belajar, berlatih, dan berkarya bagi siswa. Ia juga mengingatkan bahwa kemampuan memakai teknologi AI harus berjalan bersama pemahaman etika dan tanggung jawab dalam membuat dan menyebarkan informasi.",
      "Bantuan diserahkan secara simbolis kepada Kepala SMA Negeri 1 Cilegon, Agus Pancasusila. Ia menyampaikan apresiasi dan berharap kegiatan ini terus meningkatkan mutu pendidikan di sekolah, khususnya di bidang jurnalistik, karena materinya memberi wawasan tambahan di luar kelas.",
    ],
    sumber: {
      nama: "ISL News TV",
      url: "https://www.islnewstv.com/2026/10/pelindo-regional-2-banten-provides.html",
    },
  },
  {
    id: "gubernur-tinjau-spmb",
    judul: "Gubernur Banten Tinjau SPMB di SMAN 1 Cilegon, Minta Panitia Perkuat Komunikasi dengan Orang Tua",
    tanggal: "12 Juni 2026",
    kategori: "Pengumuman",
    gambar: "/ppdb.jpg",
    ringkasan:
      "Gubernur Andra Soni meninjau pelaksanaan SPMB Tahun Ajaran 2026/2027 dan menegaskan tidak boleh ada praktik di luar mekanisme resmi.",
    isi: [
      "Gubernur Banten Andra Soni meninjau pelaksanaan Sistem Penerimaan Murid Baru (SPMB) Tahun Ajaran 2026/2027 di SMAN 1 Cilegon pada Kamis, 11 Juni 2026. Dalam kunjungan itu ia menekankan pentingnya komunikasi yang baik antara sekolah, panitia, calon peserta didik, dan orang tua selama proses penerimaan berlangsung.",
      "Menurutnya, meski sosialisasi dan tahap pra-SPMB sudah dilakukan, masih ada orang tua yang belum memahami mekanisme dan persyaratan secara menyeluruh. Karena itu calon siswa diberi waktu untuk menyempurnakan dokumen yang belum lengkap. Ia juga menegaskan jalur domisili lingkungan harus memprioritaskan calon siswa yang tinggal di sekitar sekolah.",
      "Kepala SMAN 1 Cilegon, Agus Pancasusila, menyebut kuota jalur domisili lingkungan sebanyak 84 siswa atau 20 persen dari daya tampung. Pada hari pertama pendaftaran tercatat 147 calon siswa mendaftar lewat jalur ini. Sebanyak 63 kursi domisili wilayah dialokasikan untuk tiga kecamatan terdekat, yaitu Cilegon, Jombang, dan Citangkil.",
      "Agus memastikan tidak ada praktik titip-menitip peserta didik dan pelaksanaan SPMB berjalan sesuai aturan Pemerintah Provinsi Banten.",
    ],
    daftar: [
      "Domisili lingkungan",
      "Domisili wilayah",
      "Afirmasi (keluarga kurang mampu dan penyandang disabilitas)",
      "Prestasi akademik",
      "Prestasi non-akademik",
      "Mutasi karena perpindahan tugas orang tua",
    ],
    daftarJudul: "Enam jalur pendaftaran SPMB SMA/SMK/SKh Negeri di Banten 2026",
    sumber: {
      nama: "Berita Banten Satu",
      url: "https://beritabantensatu.com/tinjau-spmb-di-sman-1-cilegon-andra-soni-minta-panitia-perkuat-komunikasi-dengan-orang-tua/",
    },
  },
  {
    id: "verifikasi-spmb-2026",
    judul: "Verifikasi Pra-SPMB 2026 di SMAN 1 Cilegon Capai 1.323 Calon Siswa",
    tanggal: "22 Mei 2026",
    kategori: "Pengumuman",
    gambar: "/verifikasi.jpeg",
    ringkasan:
      "Tahap verifikasi data lewat aplikasi telah diikuti 1.323 calon siswa. Berikut kuota tiap jalur dan jadwal pendaftarannya.",
    isi: [
      "Tahap pra-SPMB 2026 di SMA Negeri 1 Cilegon terus berjalan. Menurut Panitia SPMB, Oding Tatang Surahman, hingga 22 Mei 2026 sebanyak 1.323 calon siswa telah mengajukan verifikasi data lewat aplikasi. Proses verifikasi dibuka sejak 20 April sampai 31 Mei 2026.",
      "Dari jumlah itu, delapan calon siswa belum diverifikasi dan tiga lainnya diminta merevisi data karena dokumen belum lengkap atau terdapat kesalahan. Kendala yang sering muncul antara lain kesalahan saat mengunggah berkas prestasi dan nilai mata pelajaran agama pada rapor yang belum tercantum lengkap.",
      "Daya tampung SMAN 1 Cilegon pada SPMB 2026 berasal dari 12 rombongan belajar. Mekanisme jalur secara umum sama seperti tahun sebelumnya, hanya istilah zonasi kini disebut domisili. Seleksi domisili memakai nilai rapor, dan bila nilai sama maka dipilih yang jaraknya lebih dekat.",
    ],
    daftarJudul: "Jadwal pendaftaran SPMB SMA Tahun 2026",
    daftar: [
      "Domisili lingkungan sekolah: 10-11 Juni 2026",
      "Domisili wilayah: 17-18 Juni 2026",
      "Afirmasi: 22-23 Juni 2026",
      "Prestasi akademik: 27-29 Juni 2026",
      "Prestasi non-akademik: 2-3 Juli 2026",
      "Mutasi atau perpindahan tugas orang tua: 7-8 Juli 2026",
    ],
    sumber: {
      nama: "Faktabanten.co.id",
      url: "https://faktabanten.co.id/cilegon/tahap-verifikasi-spmb-2026-di-sman-1-cilegon-capai-1-323-peserta/",
    },
  },
{
    id: "gubernur-banten-wali-kota-cilegon-pantau-sekolah-gratis",
    judul: "Dampingi Gubernur Banten, Wali Kota Cilegon Pantau Sekolah Gratis, MBG dan SPMB di Kota Cilegon",
    tanggal: "11 Juni 2026",
    kategori: "Kegiatan",
    gambar: "/dampingi.jpg",
    ringkasan: "Wali Kota Cilegon Robinsar mendampingi Gubernur Banten Andra Soni meninjau Program Sekolah Gratis, Makan Bergizi Gratis (MBG), dan SPMB.",
    isi: [
      "Gubernur Banten Andra Soni didampingi Wali Kota Cilegon Robinsar melakukan monitoring pelaksanaan Program Sekolah Gratis, Makan Bergizi Gratis (MBG), serta Sistem Penerimaan Murid Baru (SPMB) di Kota Cilegon, Kamis 11 Juni 2026. Kunjungan dilakukan di SMA Negeri 1 Cilegon dan SMKS YP 17 Cilegon.",
      "Andra Soni menegaskan komitmennya untuk menjaga integritas dalam pelaksanaan SPMB dan mengingatkan agar tidak ada praktik jual beli kursi. 'Jual beli kursi merupakan tindakan koruptif dan pidana. Saya pastikan akan ada tindakan tegas kepada para pelakunya,' tegasnya.",
      "Wali Kota Cilegon Robinsar mengapresiasi kehadiran Gubernur Banten dan Program Sekolah Gratis yang dinilai mampu memperluas kesempatan masyarakat untuk mengenyam pendidikan. Ia juga menekankan bahwa PPDB tahun ini harus transparan tanpa ada jual beli kursi.",
      "Pemerintah Provinsi Banten juga bekerja sama dengan 801 sekolah swasta untuk menampung anak-anak yang tidak lolos ke sekolah negeri melalui Program Sekolah Gratis, sambil terus mengupayakan pembangunan sekolah baru."
    ],
    sumber: {
      nama: "Berita Cilegon",
      url: "https://berita.cilegon.go.id/baca/Dampingi-Gubernur-Banten,-Wali-Kota-Cilegon-Pantau-Sekolah-Gratis,-MBG-dan-SPMB-di-Kota-Cilegon/20261010/MTIxNjg0"
    },
    simulasi: false,
  },
{
    id: "sman-1-cilegon-borong-piala-fls2n",
    judul: "SMAN 1 Cilegon Borong Piala Melalui Ajang FLS2N Tingkat Kota Cilegon",
    tanggal: "13 Mei 2026",
    kategori: "Prestasi",
    gambar: "/fls2n.jpg", 
    ringkasan: "Mengikuti 12 cabang lomba, SMAN 1 Cilegon sukses membawa pulang 4 emas, 2 perak, dan 4 perunggu pada ajang FLS2N tingkat kota.",
    isi: [
      "Dalam kegiatan Festival dan Lomba Seni Siswa Nasional (FLS2N) SMA tingkat Kota Cilegon yang diadakan di SMA Negeri 3 Kota Cilegon, SMAN 1 Cilegon menunjukkan tajinya dengan mengikuti seluruh 12 cabang mata lomba yang dilombakan.",
      "Hasil dari dedikasi dan latihan keras siswa membuahkan hasil luar biasa. SMAN 1 Cilegon berhasil memborong total 10 piala, yang terdiri dari 4 medali emas, 2 perak, dan 4 perunggu.",
      "Keberhasilan ini tentu tidak lepas dari semangat pantang menyerah para peserta didik, dukungan penuh dari Kepala Sekolah, dedikasi para pembina ekstrakurikuler, Wakil Kepala Sekolah, serta doa dari seluruh keluarga besar SMAN 1 Cilegon.",
      "Pembina Ekskul Seni SMAN 1 Cilegon, Ibu Reny Andriyani, S.Pd., menyampaikan rasa terima kasihnya atas dukungan sekolah. Beliau menegaskan bahwa 'Menjadi yang terbaik adalah berproses dan berjuang untuk memaksimalkan segala usaha, dan hasil yang diperoleh adalah sebuah bonus dari segala usaha, doa, serta support yang luar biasa.'",
      "Pada upacara bendera hari Senin, 13 Mei 2026, Kepala Sekolah beserta seluruh warga sekolah memberikan apresiasi langsung kepada para juara. Harapannya, prestasi gemilang ini dapat dilanjutkan pada ajang FLS2N tingkat Provinsi Banten yang dijadwalkan berlangsung pada bulan Juni mendatang."
    ],
    daftarJudul: "Daftar Juara FLS2N SMAN 1 Cilegon:",
    daftar: [
      "Juara 1 Cipta Lagu (M. Refan Andriansyah - Kelas X.11)",
      "Juara 1 Tari Berpasangan (Zahra Shifa Aulia X-4 & Siva Aulia Rhamadani X-12)",
      "Juara 1 Solo Vokal Putri (Keyla Erista X-12)",
      "Juara 1 Cipta Puisi (Andi Aziz - XI Saintek 1)",
      "Juara 2 Komik Digital (Zaikla Aabid Ankira - XI Soshum 3)",
      "Juara 2 Baca Puisi (M. Farhan Malikulmulki - X-5)",
      "Juara 3 Kriya (Rizki Sulton Aulia - X-6)",
      "Juara 3 Monolog (Naila Dwi Kurnia - X-3)",
      "Juara 3 Film Pendek (Savira Nuun X-10, Eka Ajeng Pratiwi X-3, Alif Fathurrahman A. XI Soshum 4)",
      "Juara 3 Poster (Nasywa Nur Hanan - XI-1)"
    ],
    sumber: {
      nama: "SMAN 1 Cilegon",
      url: "https://sman1cilegon.sch.id/berita/sman-1-cilegon-borong-piala-melalui-ajang-fls2n-tingkat-kota-cilegon"
    },
    simulasi: false,
  },
 {
    id: "tasyakuran-kelulusan-2023-2024",
    judul: "Tasyakuran Kelulusan Peserta Didik SMA Negeri 1 Cilegon Tahun Ajaran 2023/2024",
    tanggal: "10 Mei 2024",
    kategori: "Kegiatan",
    gambar: "/kelulusan.jpg", 
    ringkasan: "Acara tasyakuran kelulusan berlangsung khidmat di Aula SMAN 1 Cilegon, diwarnai penghargaan bagi lulusan terbaik dan perayaan 43 siswa yang lolos SNBP.",
    isi: [
      "Pada hari Rabu, 8 Mei 2024, telah berlangsung acara Tasyakuran Kelulusan Peserta Didik SMA Negeri 1 Kota Cilegon yang mengusung tema 'Ciptakan Generasi Pelajar Untuk Indonesia Emas Berpijar' di Aula sekolah.",
      "Acara tasyakuran ini berlangsung sederhana namun penuh hikmat, dihadiri oleh peserta didik, wali kelas XII, Pengurus Komite, perwakilan orang tua peserta didik terbaik, serta dewan guru.",
      "Dalam sambutannya, Kepala Sekolah Drs. Agus Pancasusila, M.Pd., menyampaikan rasa bangganya dan menyerahkan kembali para peserta didik yang telah lulus 100% kepada orang tua masing-masing. Beliau juga mengucapkan selamat kepada 43 peserta didik yang berhasil diterima di berbagai Perguruan Tinggi Negeri (PTN) melalui jalur SNBP seperti ITB, ITS, UGM, UNDIP, UNPAD, UPI, UNES, UNESA, dan UNTIRTA.",
      "Ketua Komite SMA Negeri 1 Cilegon, H. Hamid S.E., turut mengapresiasi prestasi yang dicapai para siswa dan berterima kasih atas dedikasi luar biasa dari bapak/ibu guru.",
      "Momen haru juga tercipta saat Muhammad Fahri Ramadhan (Ketua OSIS 2022-2023) mewakili teman-temannya memberikan sambutan dan memimpin pengucapan Janji Prasetya Alumni SMA Negeri 1 Kota Cilegon.",
      "Acara ditutup dengan prosesi pengalungan medali secara simbolis oleh Kepala Sekolah dan jajaran terkait, yang diiringi tawa bahagia dan tepuk tangan seluruh hadirin. Kegiatan ini juga berlangsung bersamaan dengan aksi Project Penguatan Profil Pelajar Pancasila (P5)."
    ],
    daftarJudul: "Daftar Lulusan Terbaik SMA Negeri 1 Cilegon Tahun 2024:",
    daftar: [
      "Ikhwanul Muslim (XII MIPA 1) - Terbaik Bidang Akademik IPA & KSN",
      "Leoni Cicilia Mariana (XII IPS 2) - Terbaik Bidang Akademik IPS",
      "Khodijah (XII MIPA 3) - Terbaik Bidang Sosial & Kemanusiaan",
      "Muhammad Fahri Ramadhan (XII MIPA 3) - Terbaik Bidang Organisasi",
      "Muhammad Kamal (XII MIPA 2) - Terbaik Bidang Sosial & Remaja",
      "Saraswati Mutiara Nova (XII MIPA 2) - Terbaik Bidang Seni",
      "Muhammad Fakhri Devrianto (XII IPS 5) - Terbaik Bidang Olahraga",
      "Aura Wijaya (XII MIPA 7) - Terbaik Bidang Literasi",
      "Afrian Dzikri Kurnia (XII MIPA 5) - Terbaik Bidang Kerohanian"
    ],
    sumber: {
      nama: "SMAN 1 Cilegon",
      url: "https://sman1cilegon.sch.id/berita/tasyakuran-kelulusan-peserta-didik-sma-negeri-1-cilegon-tahun-ajaran-2023-2024"
    },
    simulasi: false,
  },
];

export function getBeritaById(id) {
  return beritaList.find((b) => b.id === id);
}
