export const profile = {
  fullName: "Muhammad Nafi Nusron",
  shortName: "Nafi Nusron",
  brandName: "Nafi Nusron",
  title: "Electrical Engineering Student",
  jobTitle: "Undergraduate Electrical Engineering Student",
  university: "Universitas Negeri Yogyakarta",
  department: "Teknik Elektro",
  semester: 6,
  focus: "Ketenagaan / arus kuat",
  avatar: "/profile-nafi-2.jpg",
  siteUrl: "https://nafinusroncode.github.io",
  siteLabel: "nafinusroncode.github.io",
  contactEmail: "",
  heroTitleLines: ["Electrical", "Engineering"],
  typingWords: [
    "Electrical Engineering Student",
    "Power Systems Focus",
    "IoT & Electronics Builder",
  ],
  heroTechStack: ["Python", "JavaScript", "C/C++", "Arduino"],
  heroDescription:
    "Mahasiswa Teknik Elektro Universitas Negeri Yogyakarta yang berfokus pada ketenagaan, elektronika, IoT, dan pengembangan aplikasi.",
  aboutIntro:
    "I am an Electrical Engineering student at Yogyakarta State University, currently in my sixth semester with a focus on power systems engineering. I have basic programming skills in Python, JavaScript, C, and C++, and I frequently work on projects involving electrical circuits, electronic circuits, Internet of Things (IoT) systems, and application development. I am highly interested in technology, problem-solving, and developing practical solutions through both hardware and software integration.",
  quote:
    "Mempelajari sistem tenaga, elektronika, dan software lewat simulasi, eksperimen, dan project nyata.",
  programmingLanguages: ["Python", "JavaScript", "C", "C++"],
  software: [
    "MATLAB",
    "Multisim",
    "Code::Blocks",
    "Arduino IDE",
    "VS Code",
    "Octave",
    "Microsoft Word",
    "Microsoft Excel",
  ],
  social: {
    tiktok: "https://www.tiktok.com/@nafinsrn?is_from_webapp=1&sender_device=pc",
    instagram: "https://www.instagram.com/guebisajelasin?igsh=dzZ6bGdwenVhNHBl",
    linkedin: "https://www.linkedin.com/in/muhammad-nafi-nusron-1a1059381",
    github: "https://github.com/nafinusroncode",
    youtube: "https://www.youtube.com/@muhammadnafi3416",
  },
  handles: {
    tiktok: "@nafinsrn",
    instagram: "@guebisajelasin",
    linkedin: "Muhammad Nafi Nusron",
    github: "@nafinusroncode",
    youtube: "@muhammadnafi3416",
  },
};

export const portfolioProjects = [
  {
    id: "pengukur-tinggi-badan-digital",
    Img: "/projects/pengukur-tinggi-badan/rangkaian-simulasi.png",
    ImageFit: "contain",
    ImageCaption:
      "Simulasi Tinkercad menggunakan Arduino Uno dan HC-SR04. Alat fisik pada proyek ini menggunakan ESP32 dan HY-SRF05.",
    Title: "Pengukur Tinggi Badan Digital",
    Description:
      "Alat pengukur tinggi badan berbasis ESP32 dan sensor ultrasonik HY-SRF05 dengan tampilan LCD untuk membantu pelayanan Posyandu Gading Kulon, Donokerto, Turi, Sleman.",
    Link: "",
    Github: "",
    TechStack: ["ESP32", "HY-SRF05", "LCD", "Buzzer", "Tombol", "Tinkercad"],
    Features: [
      "Pengukuran tinggi badan menggunakan sensor ultrasonik",
      "Hasil pengukuran ditampilkan secara digital pada LCD",
      "Rangkaian dilengkapi buzzer dan tombol pengoperasian",
      "Perancangan rangkaian melalui simulasi sebelum perakitan fisik",
      "Pengujian dan kalibrasi dengan pembanding meteran manual",
      "Demonstrasi dan penyerahan alat kepada kader Posyandu",
    ],
    Details: [
      {
        title: "Latar belakang",
        paragraphs: [
          "Proyek ini dikembangkan dalam kegiatan KKN untuk membantu kader Posyandu Gading Kulon, Kalurahan Donokerto, Kecamatan Turi, Kabupaten Sleman. Pengukuran tinggi badan sebelumnya dilakukan secara manual sehingga membutuhkan ketelitian dalam membaca skala, terutama saat kunjungan Posyandu ramai.",
          "Alat digital dirancang agar hasil pengukuran lebih mudah dibaca dan proses pengukuran dapat dilakukan secara praktis oleh kader.",
        ],
      },
      {
        title: "Cara kerja dan komponen",
        paragraphs: [
          "Sensor ultrasonik mengukur jarak antara posisi sensor dan bagian atas kepala. Mikrokontroler mengolah jarak tersebut berdasarkan tinggi pemasangan sensor untuk mendapatkan tinggi badan, lalu menampilkan hasilnya pada LCD.",
          "Perangkat fisik menggunakan mikrokontroler ESP32, sensor ultrasonik HY-SRF05, LCD, buzzer, dan tombol. Gambar rangkaian pada halaman ini menunjukkan tahap simulasi di Tinkercad menggunakan Arduino Uno dan HC-SR04; komponen simulasi tersebut berbeda dari komponen alat fisik yang dijelaskan dalam artikel.",
        ],
      },
      {
        title: "Proses perancangan",
        paragraphs: [
          "Pengerjaan dimulai dengan observasi dan koordinasi bersama kader untuk menentukan kebutuhan serta spesifikasi alat. Rangkaian kemudian disimulasikan di Tinkercad, dilanjutkan dengan penyusunan dan pengujian program mikrokontroler.",
          "Tahap perakitan meliputi penyolderan pin header, pemasangan komponen pada PCB, dan pembuatan rangka atau dudukan alat. Setelah dirakit, alat dikalibrasi dengan membandingkan hasil bacanya terhadap meteran manual yang digunakan kader.",
        ],
      },
      {
        title: "Pengujian dan penerapan",
        paragraphs: [
          "Pada pengujian yang dilaporkan dalam artikel proyek, hasil pengukuran alat digital memiliki selisih 0,1 cm dibandingkan meteran manual. Angka tersebut merupakan hasil pengujian yang dicatat dalam artikel.",
          "Alat didemonstrasikan dan diserahkan kepada 6 kader Posyandu Gading Kulon pada 12 September 2026, disertai panduan serta sosialisasi cara pengoperasiannya.",
        ],
      },
    ],
    Gallery: [
      {
        src: "/projects/pengukur-tinggi-badan/perangkat-elektronik.jpeg",
        caption: "Perakitan perangkat elektronik dan pemasangan komponen pada kotak alat.",
      },
      {
        src: "/projects/pengukur-tinggi-badan/pengujian-kalibrasi.jpeg",
        caption: "Pengujian dan kalibrasi alat menggunakan pembanding meteran manual.",
      },
      {
        src: "/projects/pengukur-tinggi-badan/alat-posyandu.jpeg",
        caption: "Alat pengukur tinggi badan digital dengan rangka dan layar LCD.",
      },
    ],
  },
  {
    id: "iot-monitoring-sederhana",
    Aliases: ["sistem-monitoring-iot-sederhana"],
    Img: "/Sistem IOT.png",
    ImageFit: "contain",
    ImageCaption: "Simulasi rangkaian tong sampah otomatis dengan Arduino Uno, sensor ultrasonik, motor servo, dan LCD.",
    Title: "Sistem Tong Sampah Otomatis",
    Description:
      "Simulasi tong sampah otomatis berbasis Arduino Uno yang mendeteksi objek menggunakan sensor ultrasonik, menggerakkan tutup melalui motor servo, serta menampilkan jarak dan status tutup pada LCD.",
    Link: "",
    Github: "",
    TechStack: ["Arduino Uno", "C/C++", "HC-SR04", "Motor Servo", "LCD 16x2", "Tinkercad"],
    Features: [
      "Deteksi objek di depan sensor ultrasonik HC-SR04",
      "Pembukaan tutup melalui motor servo tanpa menyentuhnya secara langsung",
      "Penutupan kembali tutup berdasarkan pembacaan jarak",
      "Tampilan jarak objek dan status Open / Close pada LCD 16x2",
      "Pengaturan batas jarak melalui program Arduino",
    ],
    Details: [
      {
        title: "Gambaran proyek",
        paragraphs: [
          "Sistem ini dirancang untuk membuka dan menutup tutup tong sampah secara otomatis saat ada objek, seperti tangan, yang mendekati sensor. Pengguna dapat membuang sampah tanpa perlu menyentuh tutup secara langsung.",
          "Dokumentasi yang ditampilkan merupakan simulasi rangkaian di Tinkercad. Arduino Uno berfungsi sebagai pengendali, HC-SR04 membaca jarak objek, motor servo menggerakkan tutup, dan LCD 16x2 menampilkan informasi sistem.",
        ],
      },
      {
        title: "Alur kerja sistem",
        paragraphs: [
          "Arduino membaca jarak dari sensor ultrasonik dan membandingkannya dengan batas jarak yang ditentukan pada program. Ketika objek berada cukup dekat, servo diarahkan ke posisi buka. Saat objek tidak lagi berada di area deteksi, servo kembali ke posisi tutup.",
          "LCD menampilkan jarak dalam satuan sentimeter dan status tutup, seperti Bin: Open atau Bin: Close. Informasi ini membantu mengamati hubungan antara pembacaan sensor dan gerakan servo selama simulasi.",
        ],
      },
      {
        title: "Fokus perancangan",
        paragraphs: [
          "Proyek menggabungkan pembacaan sensor, pengambilan keputusan pada mikrokontroler, pengendalian aktuator, dan tampilan informasi. Batas jarak serta posisi servo dapat disesuaikan pada program dengan kebutuhan mekanisme tutup.",
        ],
      },
    ],
  },
  {
    id: "rangkaian-elektronika-dasar",
    Img: "/Coding.gif",
    Title: "Rangkaian Elektronika Dasar",
    Description:
      "Perancangan dan simulasi rangkaian elektronika sederhana untuk memahami karakteristik komponen, pengukuran, dan analisis keluaran.",
    Link: "",
    Github: profile.social.github,
    TechStack: ["Multisim", "MATLAB", "Electronics"],
    Features: [
      "Simulasi rangkaian sebelum implementasi",
      "Analisis tegangan, arus, dan respon komponen",
      "Dokumentasi hasil pengujian rangkaian",
    ],
  },
  {
    id: "aplikasi-perhitungan-teknik",
    Img: "/Coding.gif",
    Title: "Aplikasi Perhitungan Teknik",
    Description:
      "Aplikasi bantu untuk menghitung kebutuhan dasar pada project teknik elektro dan menyusun hasil perhitungan secara lebih rapi.",
    Link: "",
    Github: profile.social.github,
    TechStack: ["Python", "JavaScript", "VS Code"],
    Features: [
      "Input perhitungan yang sederhana",
      "Output hasil yang mudah dibaca",
      "Struktur kode yang dapat dikembangkan lagi",
    ],
  },
  {
    id: "simulasi-sistem-ketenagaan",
    Img: "/Animation1.gif",
    Title: "Simulasi Sistem Ketenagaan",
    Description:
      "Eksplorasi konsep arus kuat dan sistem tenaga melalui simulasi, analisis rangkaian, dan visualisasi hasil perhitungan.",
    Link: "",
    Github: profile.social.github,
    TechStack: ["MATLAB", "Octave", "Power Systems"],
    Features: [
      "Analisis konsep ketenagaan",
      "Simulasi skenario sederhana",
      "Interpretasi hasil untuk pembelajaran",
    ],
  },
];

export const certificates = [
  {
    id: "teknisi-pemeliharaan-elektrikal-listrik-industri-kompleks",
    Title: "Teknisi Pemeliharaan Elektrikal - Listrik Industri Kompleks",
    Description:
      "Sertifikasi kompetensi bidang pemeliharaan elektrikal industri, mencakup keselamatan kerja, pembacaan gambar teknik, pengukuran listrik, serta perbaikan rangkaian listrik dasar dan kompleks.",
    Holder: profile.fullName,
    Issuer: "Lembaga Sertifikasi Profesi Logam dan Mesin Indonesia",
    Authority: "Badan Nasional Sertifikasi Profesi (BNSP)",
    IssuedAt: "22 September 2026",
    Validity: "3 tahun",
    Number: "33141 7412 4 0093507 2026",
    Registration: "LOG 004 04155 2026",
    Img: "/certificates/teknisi-pemeliharaan-elektrikal-1.jpg",
    Document: "/certificates/teknisi-pemeliharaan-elektrikal.pdf",
    Pages: [
      "/certificates/teknisi-pemeliharaan-elektrikal-1.jpg",
      "/certificates/teknisi-pemeliharaan-elektrikal-2.jpg",
    ],
    Competencies: [
      "Menerapkan prinsip-prinsip K3 di tempat kerja",
      "Menerapkan prosedur mutu",
      "Membaca gambar teknik",
      "Menyambung jaringan kabel listrik",
      "Mengukur listrik / elektronik presisi",
      "Menggunakan perkakas tangan",
      "Memperbaiki kesalahan pada rangkaian listrik dasar",
      "Memperbaiki kesalahan pada rangkaian listrik yang kompleks",
    ],
  },
];

export const techStacks = [
  { icon: "/tech/python.svg", language: "Python", initials: "PY" },
  { icon: "/tech/javascript.svg", language: "JavaScript", initials: "JS" },
  { icon: "/tech/c.svg", language: "C", initials: "C" },
  { icon: "/tech/cplusplus.svg", language: "C++", initials: "C++" },
  { icon: "/tech/matlab.svg", language: "MATLAB", initials: "MAT" },
  { icon: "/tech/multisim.svg", language: "Multisim", initials: "MS" },
  { icon: "/tech/codeblocks.svg", language: "Code::Blocks", initials: "CB" },
  { icon: "/tech/arduino.svg", language: "Arduino IDE", initials: "ARD" },
  { icon: "/tech/vscode.svg", language: "VS Code", initials: "VS" },
  { icon: "/tech/octave.svg", language: "Octave", initials: "OCT" },
  { icon: "/tech/word.svg", language: "Word", initials: "W" },
  { icon: "/tech/excel.svg", language: "Excel", initials: "XL" },
];
