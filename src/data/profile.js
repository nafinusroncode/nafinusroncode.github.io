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
  avatar: "/profile-nafi.jpg",
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
    "Saya adalah mahasiswa undergraduate Teknik Elektro di Universitas Negeri Yogyakarta. Saat ini saya menempuh semester 6 dengan fokus pada bidang ketenagaan atau arus kuat. Saya memiliki basic coding menggunakan Python, JavaScript, C, dan C++, serta sering membuat project rangkaian listrik sederhana, rangkaian elektronika, IoT, dan aplikasi.",
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
    id: "iot-monitoring-sederhana",
    Img: "/Animation1.gif",
    Title: "Sistem Monitoring IoT Sederhana",
    Description:
      "Project IoT berbasis mikrokontroler untuk membaca data sensor, mengolah data, dan menampilkan hasil monitoring secara sederhana.",
    Link: "",
    Github: profile.social.github,
    TechStack: ["Arduino IDE", "C/C++", "IoT"],
    Features: [
      "Pembacaan sensor menggunakan mikrokontroler",
      "Pengolahan data dasar untuk monitoring",
      "Rangkaian dan firmware yang mudah dikembangkan",
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

export const certificates = [];

export const techStacks = [
  { icon: null, language: "Python", initials: "PY" },
  { icon: "javascript.svg", language: "JavaScript", initials: "JS" },
  { icon: null, language: "C", initials: "C" },
  { icon: null, language: "C++", initials: "C++" },
  { icon: null, language: "MATLAB", initials: "MAT" },
  { icon: null, language: "Multisim", initials: "MS" },
  { icon: null, language: "Code::Blocks", initials: "CB" },
  { icon: null, language: "Arduino IDE", initials: "ARD" },
  { icon: null, language: "VS Code", initials: "VS" },
  { icon: null, language: "Octave", initials: "OCT" },
  { icon: null, language: "Word", initials: "W" },
  { icon: null, language: "Excel", initials: "XL" },
];
