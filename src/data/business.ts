import { IMAGES } from './images';

export const BUSINESS_DATA = {
  name: "Arunika Living",
  category: "Interior Design & Custom Furniture",
  foundedYear: "2021",
  address: "Jl. Senja Utama No. 18, Sukmajaya, Depok",
  serviceArea: "Depok, Jakarta, Bogor, Tangerang, dan sekitarnya",
  phone: "081234567890",
  email: "halo@arunikaliving.example",
  googleMapsUrl: "https://maps.google.com/?q=Arunika+Living+Depok",
  
  // WhatsApp Configuration
  whatsapp: {
    number: "081234567890",
    link: "https://wa.me/6281234567890",
    defaultMessage: "Halo Arunika Living, saya ingin berkonsultasi mengenai layanan interior/custom furniture.",
    get fullUrl() {
      return `https://wa.me/6281234567890?text=${encodeURIComponent(this.defaultMessage)}`;
    }
  },

  // Brand Descriptions & Philosophy
  description: "Arunika Living adalah studio interior yang menyediakan jasa desain interior dan pembuatan furniture custom untuk rumah, apartemen, dan ruang usaha. Kami mengutamakan desain yang fungsional, nyaman, dan sesuai karakter setiap klien.",
  
  philosophy: "Kami percaya ruang yang nyaman bukan hanya soal tampilan, tetapi juga bagaimana setiap sudutnya dapat membuat aktivitas sehari-hari terasa lebih menyenangkan.",

  // Hero Content
  hero: {
    badge: "Interior Design • Custom Furniture • Since 2021",
    headline: "Ruang yang Dirancang untuk Hidup Lebih Nyaman",
    subheadline: "Layanan desain interior dan pembuatan furniture custom yang disesuaikan secara personal dengan kebutuhan, karakter, serta aktivitas harian Anda.",
    primaryCta: "Konsultasi via WhatsApp",
    secondaryCta: "Lihat Portfolio"
  },

  // About Features
  aboutHighlights: [
    { title: "Since 2021", desc: "Berpengalaman menghadirkan solusi ruang hunian dan komersial." },
    { title: "Interior Design", desc: "Perancangan tata ruang estetis, fungsional, dan proporsional." },
    { title: "Custom Furniture", desc: "Pembuatan mebel presisi sesuai dimensi dan karakter ruangan." }
  ],

  // Services
  services: [
    {
      id: "interior-rumah",
      title: "Desain Interior Rumah",
      description: "Jasa desain interior untuk rumah dengan konsep yang disesuaikan dengan kebutuhan, karakter, dan aktivitas penghuni.",
      startingPrice: "Mulai Rp3.500.000",
      image: IMAGES.services.interior,
      badge: "Desain Komprehensif",
      features: [
        "Konsep 3D visualisasi & denah tata ruang",
        "Pemilihan material, pencahayaan, dan palet warna",
        "Penyesuaian kebutuhan & alur gerak penghuni"
      ]
    },
    {
      id: "furniture-custom",
      title: "Furniture Custom",
      description: "Pembuatan furniture custom seperti kitchen set, wardrobe, meja, kabinet, dan furniture lainnya sesuai ukuran ruangan.",
      startingPrice: "Mulai Rp2.500.000",
      image: IMAGES.services.furniture,
      badge: "Fabrikasi Presisi",
      features: [
        "Kitchen set, wardrobe, backdrop TV, & credenza",
        "Pilihan finishing HPL, duco, atau natural veneer",
        "Fitting hardware tahan lama & instalasi rapi"
      ]
    }
  ],

  // Advantages / Keunggulan
  advantages: [
    {
      id: "custom-design",
      number: "01",
      title: "Desain Custom",
      description: "Setiap rancangan dibuat unik dan khusus mengikuti selera, ukuran ruang, dan gaya hidup Anda."
    },
    {
      id: "direct-consultation",
      number: "02",
      title: "Konsultasi Langsung dengan Tim",
      description: "Diskusi terbuka langsung bersama tim desainer dan pengrajin untuk mewujudkan ide terbaik."
    },
    {
      id: "neat-craftsmanship",
      number: "03",
      title: "Pengerjaan Rapi",
      description: "Standar pengerjaan detail yang presisi mulai dari proses fabrikasi hingga finishing dan instalasi akhir."
    },
    {
      id: "quality-materials",
      number: "04",
      title: "Material Berkualitas",
      description: "Seleksi material terbaik yang kokoh, berestetika tinggi, dan awet untuk kenyamanan jangka panjang."
    },
    {
      id: "flexible-budget",
      number: "05",
      title: "Dapat Menyesuaikan Kebutuhan & Budget Klien",
      description: "Solusi desain fleksibel yang dirancang optimal agar tetap selaras dengan anggaran yang Anda alokasikan."
    }
  ],

  // Portfolio
  portfolioCategories: [
    { id: "all", label: "Semua Kategori" },
    { id: "interior-rumah", label: "Interior Rumah" },
    { id: "custom-furniture", label: "Custom Furniture" },
    { id: "kitchen", label: "Kitchen" },
    { id: "living-space", label: "Living Space" },
    { id: "bedroom", label: "Bedroom" }
  ],

  portfolioItems: [
    {
      id: "port-1",
      title: "Warm Minimalist Living Room",
      category: "interior-rumah",
      categoryLabel: "Interior Rumah",
      tags: ["Living Space", "Interior Rumah"],
      image: IMAGES.portfolio.interior1,
      description: "Penataan ruang keluarga bernuansa hangat dengan aksen kayu natural dan pencahayaan lembut."
    },
    {
      id: "port-2",
      title: "Modern Dining & Lounge Area",
      category: "living-space",
      categoryLabel: "Living Space",
      tags: ["Living Space", "Interior Rumah"],
      image: IMAGES.portfolio.interior2,
      description: "Harmoni tata ruang makan terbuka yang memaksimalkan sirkulasi dan interaksi keluarga."
    },
    {
      id: "port-3",
      title: "Japandi Custom Kitchen Set",
      category: "kitchen",
      categoryLabel: "Kitchen",
      tags: ["Kitchen", "Custom Furniture"],
      image: IMAGES.portfolio.kitchen1,
      description: "Kitchen set modular dengan material kayu premium dan sistem penyimpanan tersembunyi."
    },
    {
      id: "port-4",
      title: "Contemporary Island Kitchen",
      category: "kitchen",
      categoryLabel: "Kitchen",
      tags: ["Kitchen", "Custom Furniture"],
      image: IMAGES.portfolio.kitchen2,
      description: "Dapur bersih modern dengan meja kitchen island yang fungsional dan elegan."
    },
    {
      id: "port-5",
      title: "Custom Wooden Console & Paneling",
      category: "custom-furniture",
      categoryLabel: "Custom Furniture",
      tags: ["Custom Furniture"],
      image: IMAGES.portfolio.furniture1,
      description: "Pembuatan kabinet multifungsi dan aksen kisi-kisi kayu presisi untuk sudut ruangan."
    },
    {
      id: "port-6",
      title: "Minimalist Master Wardrobe",
      category: "custom-furniture",
      categoryLabel: "Custom Furniture",
      tags: ["Custom Furniture", "Bedroom"],
      image: IMAGES.portfolio.furniture2,
      description: "Lemari pakaian custom floor-to-ceiling dengan kompartemen terorganisir rapi."
    },
    {
      id: "port-7",
      title: "Serene Warm Bedroom Suite",
      category: "bedroom",
      categoryLabel: "Bedroom",
      tags: ["Bedroom", "Interior Rumah"],
      image: IMAGES.portfolio.bedroom1,
      description: "Desain kamar tidur utama bernuansa earthy yang menenangkan untuk kualitas istirahat maksimal."
    },
    {
      id: "port-8",
      title: "Cozy Contemporary Bedroom",
      category: "bedroom",
      categoryLabel: "Bedroom",
      tags: ["Bedroom", "Interior Rumah"],
      image: IMAGES.portfolio.bedroom2,
      description: "Kamar tidur minimalis dengan headboard custom dan pencahayaan aksen tersembunyi."
    },
    {
      id: "port-9",
      title: "Architectural Living Space",
      category: "living-space",
      categoryLabel: "Living Space",
      tags: ["Living Space", "Interior Rumah"],
      image: IMAGES.portfolio.livingSpace,
      description: "Eksplorasi material kayu dan neutral cream pada ruang tengah bergaya modern luxury."
    }
  ],

  // Promo Section
  promo: {
    badge: "Penawaran Spesial",
    title: "Gratis Konsultasi Desain",
    description: "Untuk pemesanan furniture custom selama periode promo.",
    ctaText: "Konsultasi Sekarang"
  },

  // Testimonials (Authentic data strictly from brief, no fake ratings/avatars)
  testimonials: [
    {
      id: "testi-1",
      name: "Dimas Pratama",
      quote: "Hasil desainnya sesuai dengan yang kami bayangkan. Timnya juga komunikatif dan memberikan banyak solusi untuk ruangan yang cukup kecil."
    },
    {
      id: "testi-2",
      name: "Nadia Putri",
      quote: "Furniture custom-nya rapi dan ukurannya benar-benar pas dengan ruangan. Proses dari konsultasi sampai pemasangan juga cukup nyaman."
    }
  ],

  // Operating Hours
  operatingHours: [
    { day: "Senin", hours: "08:00 – 17:00", isOpen: true },
    { day: "Selasa", hours: "08:00 – 17:00", isOpen: true },
    { day: "Rabu", hours: "08:00 – 17:00", isOpen: true },
    { day: "Kamis", hours: "08:00 – 17:00", isOpen: true },
    { day: "Jumat", hours: "08:00 – 17:00", isOpen: true },
    { day: "Sabtu", hours: "08:00 – 15:00", isOpen: true },
    { day: "Minggu", hours: "Tutup", isOpen: false }
  ],

  // Social Media
  socialMedia: [
    { name: "Instagram", handle: "@arunikaliving", url: "https://instagram.com/arunikaliving" },
    { name: "Facebook", handle: "@arunikaliving", url: "https://facebook.com/arunikaliving" },
    { name: "TikTok", handle: "@arunikaliving", url: "https://tiktok.com/@arunikaliving" },
    { name: "YouTube", handle: "@arunikaliving", url: "https://youtube.com/@arunikaliving" },
    { name: "Marketplace", handle: "@arunikaliving", url: "#" }
  ],

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" }
  ]
};
