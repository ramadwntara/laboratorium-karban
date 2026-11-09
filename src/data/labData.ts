import { PracticumModule, Assistant, ScheduleItem, AnnexDocument, LabAnnouncement } from '../types';

export const LAB_ANNOUNCEMENTS: LabAnnouncement[] = [
  {
    id: 'ann-1',
    date: '9 November 2026',
    title: 'Pengumpulan Tugas Pendahuluan Modul 01 & 02',
    category: 'Penting',
    content: 'Tugas pendahuluan wajib dikumpulkan kepada asisten modul masing-masing paling lambat H-1 sebelum jadwal praktikum pukul 21.00 WIB dalam format PDF bermeterai kartu kendali.',
    isUrgent: true,
  },
  {
    id: 'ann-2',
    date: '7 November 2026',
    title: 'Pelaksanaan Responsi Awal & K3 Laboratorium',
    category: 'Jadwal',
    content: 'Seluruh praktikan wajib memakai jas laboratorium berbahan katun putih panjang, celana/rok non-jeans rapi, safety shoes, dan membawa kartu kendali asistensi fisik.',
    isUrgent: false,
  },
  {
    id: 'ann-3',
    date: '4 November 2026',
    title: 'Rilis Pembaruan e-Modul Pengujian Bahan Semester Ganjil',
    category: 'Tugas',
    content: 'Buku panduan revisi 2026 telah disesuaikan dengan ASTM E8/E8M-22 (Uji Tarik) dan ASTM E18-22 (Uji Rockwell). Silakan unduh modul resmi melalui portal ini.',
    isUrgent: false,
  },
];

export const PRACTICUM_MODULES: PracticumModule[] = [
  {
    id: 'mod-1',
    code: 'MODUL 01',
    title: 'Pengujian Tarik Logam (Tensile Testing)',
    astmStandard: 'ASTM E8 / E8M & SNI 07-0408',
    category: 'mechanical',
    shortDesc: 'Menentukan sifat mekanik statis spesimen logam meliputi batas luluh (yield strength), kekuatan tarik maksimum (UTS), elongasi, dan modulus elastisitas.',
    fullDesc: 'Praktikum ini menggunakan Universal Testing Machine (UTM) untuk menguji sifat mekanik spesimen standar silindris dan pelat. Praktikan akan mengamati proses deformasi elastis, deformasi plastis, fenomena necking hingga patahnya spesimen, serta memplot kurva tegangan-regangan rekayasa dan sejati.',
    objectives: [
      'Memahami mekanisme uji tarik dan prinsip kerja mesin uji Universal Testing Machine (UTM).',
      'Mampu menentukan tegangan luluh (Yield Strength) dengan metode offset 0.2%.',
      'Mampu menghitung Ultimate Tensile Strength (UTS), Modulus Elastisitas (Youngs Modulus), persen perpanjangan (% Elongation), dan reduksi penampang (% Reduction of Area).',
      'Menganalisis jenis patahan spesimen ulet (cup and cone) dan spesimen getas.'
    ],
    equipment: [
      'Universal Testing Machine (UTM) Kapasitas 100 kN dengan Extensometer',
      'Jangka Sorong (Vernier Caliper) Ketelitian 0.02 mm',
      'Mikrometer Sekrup Ketelitian 0.01 mm',
      'Punch Mark & Mal Pengukur Panjang Ukur (Gauge Length)'
    ],
    testSpecimens: [
      'Baja Karbon Rendah (AISI 1018 / ST37)',
      'Baja Karbon Sedang (AISI 1045)',
      'Paduan Aluminium 6061-T6'
    ],
    equations: [
      {
        name: 'Tegangan Rekayasa (Engineering Stress)',
        formula: 'σ = F / A₀',
        explanation: 'F = Beban seketika (N), A₀ = Luas penampang mula-mula (mm²). Satuan: MPa atau N/mm².'
      },
      {
        name: 'Regangan Rekayasa (Engineering Strain)',
        formula: 'ε = (L - L₀) / L₀',
        explanation: 'L = Panjang ukur seketika (mm), L₀ = Panjang ukur awal spesimen (mm).'
      },
      {
        name: 'Modulus Elastisitas (Young\'s Modulus)',
        formula: 'E = σ / ε (pada daerah elastis linier)',
        explanation: 'Kemiringan kurva pada zona proporsional Hooke (satuan: GPa).'
      }
    ],
    downloadFileName: 'MODUL_01_UJI_TARIK_LOGAM_UPNVYK.pdf',
    fileSize: '3.4 MB',
  },
  {
    id: 'mod-2',
    code: 'MODUL 02',
    title: 'Pengujian Kekerasan Material (Hardness Testing)',
    astmStandard: 'ASTM E10 (Brinell), ASTM E18 (Rockwell), ASTM E92 (Vickers)',
    category: 'mechanical',
    shortDesc: 'Mengukur resistensi permukaan logam terhadap deformasi plastis lokal menggunakan metode penetrasi Brinell, Rockwell (HRA, HRB, HRC), dan Micro Vickers.',
    fullDesc: 'Kekerasan merupakan sifat mekanik permukaan yang sangat krusial dalam rekayasa metalurgi perlakuan panas dan pemilihan material struktural. Praktikum ini mencakup tiga metode standar pengukuran kekerasan beserta konversi angka kekerasan standar ASTM E140.',
    objectives: [
      'Memahami mekanisme indentasi pada metode Brinell (bola baja/karbida), Rockwell (kerucut intan / bola baja), dan Vickers (piramida intan).',
      'Mampu menghitung Brinell Hardness Number (BHN) melalui diameter jejak indentasi.',
      'Mampu mengoperasikan Hardness Tester Rockwell pada skala B (HRB) dan skala C (HRC).',
      'Mengevaluasi korelasi antara kekerasan permukaan dan kekuatan tarik aproksimatif bahan logam.'
    ],
    equipment: [
      'Brinell Hardness Tester dengan Indentor Bola Baja 10 mm & Mikroskop Pengukur Jejak',
      'Rockwell Hardness Tester (Indentor Brale Intan 120° & Bola Baja 1/16 inci)',
      'Digital Micro Vickers Hardness Tester',
      'Spesimen Blok Standar Kalibrasi'
    ],
    testSpecimens: [
      'Baja Perkakas SKD 11 (Quenched & Tempered)',
      'Baja Karbon AISI 1045 Normalizing',
      'Kuningan (Cu-30Zn) Annealed'
    ],
    equations: [
      {
        name: 'Brinell Hardness Number (BHN)',
        formula: 'BHN = (2P) / [π·D · (D - √(D² - d²))]',
        explanation: 'P = Beban indentasi (kgf), D = Diameter indentor bola (mm), d = Rerata diameter jejak indentasi (mm).'
      },
      {
        name: 'Vickers Hardness Number (VHN)',
        formula: 'HV = 1.8544 · P / d²',
        explanation: 'P = Beban uji (kgf), d = Rerata panjang diagonal jejak piramida intan (mm).'
      }
    ],
    downloadFileName: 'MODUL_02_UJI_KEKERASAN_MATERIAL_UPNVYK.pdf',
    fileSize: '2.8 MB',
  },
  {
    id: 'mod-3',
    code: 'MODUL 03',
    title: 'Pengujian Impak Charpy (Impact Testing)',
    astmStandard: 'ASTM E23 / ISO 148-1',
    category: 'mechanical',
    shortDesc: 'Menentukan ketangguhan material (impact toughness) terhadap beban kejut berkecepatan tinggi serta temperatur transisi ulet-getas (DBTT).',
    fullDesc: 'Pengujian impak metode Charpy V-Notch mengevaluasi ketahanan logam terhadap perambatan retak dinamis mendadak. Praktikan mengukur energi serap pematahan pendulum pada spesimen bertakik standar serta menganalisis persen patahan ulet (shear fracture).',
    objectives: [
      'Menentukan besarnya energi serap impak (Joule) dan harga impak (Impact Value, J/mm²).',
      'Mengamati pengaruh temperatur terhadap perubahan modus perpatahan (Ductile to Brittle Transition Temperature / DBTT).',
      'Menganalisis makrofraktografi permukaan patahan impak (fibrous vs cleavage).'
    ],
    equipment: [
      'Mesin Uji Impak Charpy Kapasitas 300 Joule',
      'Chamber Pemanas & Media Pendingin (Es Kering / Dry Ice Alkohol)',
      'Termokopel Digital & Tang Penjepit Spesimen Centering Tongs',
      'Kaca Pembesar / Stereo Microscope'
    ],
    testSpecimens: [
      'Baja Struktural ASTM A36 dengan Takik V (V-notch)',
      'Baja Karbon AISI 1020 variasi temperatur (-20°C, 0°C, 25°C, 100°C)'
    ],
    equations: [
      {
        name: 'Energi Serap Impak (Absorbed Energy)',
        formula: 'E = m · g · R · (cos β - cos α)',
        explanation: 'm = Massa pendulum (kg), g = Gravitasi, R = Jarak titik putar ke pusat pendulum, α = Sudut jatuh awal, β = Sudut ayunan setelah mematahkan spesimen.'
      },
      {
        name: 'Nilai Ketangguhan Impak (Impact Value)',
        formula: 'IS = E / A₀',
        explanation: 'E = Energi terserap (Joule), A₀ = Luas penampang di bawah takik spesimen (mm² atau cm²).'
      }
    ],
    downloadFileName: 'MODUL_03_UJI_IMPAK_CHARPY_UPNVYK.pdf',
    fileSize: '3.1 MB',
  },
  {
    id: 'mod-4',
    code: 'MODUL 04',
    title: 'Preparasi Metalografi & Analisis Mikrostruktur',
    astmStandard: 'ASTM E3 (Preparasi) & ASTM E407 (Microetching)',
    category: 'microstructure',
    shortDesc: 'Teknik pemotongan spesimen, mounting resin, grinding bertingkat, polishing cermin, dan etsa kimia untuk observasi fasa dan ukuran butir pada mikroskop optik.',
    fullDesc: 'Metalografi merupakan kompetensi fundamental sarjana teknik metalurgi untuk menyingkap hubungan antara komposisi kimia, riwayat proses termal-mekanik, dan struktur mikro logam. Praktikum mencakup teknik preparasi spesimen bebas deformasi dan penentuan fasa ferit-perlit-martensit.',
    objectives: [
      'Mampu melaksanakan tahapan metalografi: sectioning, cold/hot mounting, grinding grit 240 s/d 2000, dan polishing pasta intan/alumina 1 - 0.05 μm.',
      'Memahami formulasi reagen etsa spesifik (Etsa Nital 2-3%, Kalling 2, dan Picral) serta teknik etsa celup dan usap.',
      'Mengoperasikan Metallurgical Microscope optik berpolarisasi dan kamera mikroskop digital.',
      'Mampu mengukur ukuran butir rata-rata menurut ASTM E112 (metode intercept/perbandingan).'
    ],
    equipment: [
      'Abrasive Metallographic Cutter dengan pendingin sirkulasi',
      'Hot Mounting Press Otomatis & Cold Mounting Mold Silikon',
      'Rotary Grinding & Polishing Wheel Machine',
      'Inverted Metallurgical Optical Microscope dengan Perangkat Lunak Image Analyzer'
    ],
    testSpecimens: [
      'Baja Karbon Hipoeutektoid (AISI 1020, 1045)',
      'Besi Cor Kelabu (Gray Cast Iron) struktur Grafit Lamelar',
      'Kuningan Fasa Ganda (Alpha-Beta Brass)'
    ],
    equations: [
      {
        name: 'Nomor Ukuran Butir ASTM (ASTM Grain Size Number)',
        formula: 'N = 2^(G - 1)  (pada perbesaran 100x)',
        explanation: 'N = Jumlah butir per inci persegi pada 100x, G = Nomor ukuran butir ASTM (semakin tinggi nilai G, butir semakin halus).'
      }
    ],
    downloadFileName: 'MODUL_04_METALOGRAFI_MIKROSTRUKTUR_UPNVYK.pdf',
    fileSize: '4.2 MB',
  },
  {
    id: 'mod-5',
    code: 'MODUL 05',
    title: 'Karakterisasi Bahan & Uji Tanpa Rusak (NDT)',
    astmStandard: 'ASTM E165 (Liquid Penetrant) & ASTM E114 (Ultrasonic)',
    category: 'ndt',
    shortDesc: 'Mendeteksi cacat permukaan dan diskontinuitas internal material tanpa merusak spesimen uji menggunakan Liquid Penetrant Testing dan Ultrasonic Flaw Detector.',
    fullDesc: 'Pengujian Tak Rusak (Non-Destructive Testing) esensial dalam inspeksi integritas komponen manufaktur dan sambungan las. Praktikum ini memberikan pengalaman praktis inspeksi cacat las (crack, porosity, incomplete fusion) secara non-destruktif.',
    objectives: [
      'Melakukan prosedur uji liquid penetrant: surface cleaning, penetrant dwell time, removal, developer application, dan interpretasi indikasi cacat.',
      'Mengoperasikan alat Ultrasonic Flaw Detector (UT) untuk mengukur ketebalan material dan mendeteksi diskontinuitas rongga internal.',
      'Mampu membedakan indikasi diskontinuitas relevan, non-relevan, dan false indications sesuai kriteria penerimaan kode ASME / AWS.'
    ],
    equipment: [
      'Visible Dye Penetrant Kit (Cleaner, Red Dye Penetrant Solvent Removable, Nonaqueous Developer)',
      'Digital Ultrasonic Flaw Detector (UT) dengan probe normal & probe sudut 45°/60°',
      'Couplant Gel & Blok Kalibrasi IIW Tipe 1 / V1',
      'Lampu UV Intensitas Tinggi untuk pengujian fluoresen'
    ],
    testSpecimens: [
      'Plat Sambungan Las Butt Joint Baja A36 dengan cacat fabrikasi',
      'Spesimen Poros Baja Terindikasi Fatigue Crack'
    ],
    equations: [
      {
        name: 'Kecepatan Gelombang Ultrasonik (Acoustic Velocity)',
        formula: 'v = 2 · d / t',
        explanation: 'd = Ketebalan bahan / kedalaman diskontinuitas (mm), t = Waktu rambat pantulan gelombang pulsa (μs).'
      }
    ],
    downloadFileName: 'MODUL_05_NDT_KARAKTERISASI_UPNVYK.pdf',
    fileSize: '3.7 MB',
  },
];

export const LAB_ASSISTANTS: Assistant[] = [
  {
    id: 'aslab-0',
    name: 'Ir. M. Ridwan, M.T.',
    nim: 'NIP. 197805122003121002',
    role: 'Koordinator Praktikum',
    assignedModule: 'Pengarah Seluruh Modul Pengujian & K3',
    phone: '+62 812-2800-4321',
    email: 'm.ridwan@upnyk.ac.id',
    officeHours: 'Senin & Rabu, 13.00 - 15.00 WIB (Ruang Dosen Metalurgi Gedung FTM Lt. 2)',
    initials: 'MR',
  },
  {
    id: 'aslab-koor',
    name: 'Bintang Arya Pratama',
    nim: '125210014',
    role: 'Koordinator Asisten',
    assignedModule: 'Supervisi Operasional & Pelaporan Praktikum',
    phone: '+62 813-9123-4567',
    email: 'bintang.arya14@student.upnyk.ac.id',
    officeHours: 'Senin - Jumat, 09.00 - 16.00 WIB (Lab Pengujian Bahan FTM)',
    initials: 'BA',
  },
  {
    id: 'aslab-1',
    name: 'Fadhil Ihsan Ramadhan',
    nim: '125210028',
    role: 'Asisten Modul',
    assignedModule: 'Modul 01: Pengujian Tarik Logam (ASTM E8)',
    phone: '+62 821-3456-7890',
    email: 'fadhil.ihsan28@student.upnyk.ac.id',
    officeHours: 'Selasa & Kamis, 13.00 - 16.00 WIB',
    initials: 'FI',
  },
  {
    id: 'aslab-2',
    name: 'Annisa Nurul Hidayah',
    nim: '125210042',
    role: 'Asisten Modul',
    assignedModule: 'Modul 02: Pengujian Kekerasan (Brinell, Vickers, Rockwell)',
    phone: '+62 857-1234-9876',
    email: 'annisa.nurul42@student.upnyk.ac.id',
    officeHours: 'Senin & Rabu, 10.00 - 13.00 WIB',
    initials: 'AN',
  },
  {
    id: 'aslab-3',
    name: 'Dimas Satria Wibowo',
    nim: '125210055',
    role: 'Asisten Modul',
    assignedModule: 'Modul 03: Pengujian Impak Charpy (ASTM E23)',
    phone: '+62 878-5555-1234',
    email: 'dimas.satria55@student.upnyk.ac.id',
    officeHours: 'Rabu & Jumat, 13.30 - 16.30 WIB',
    initials: 'DS',
  },
  {
    id: 'aslab-4',
    name: 'Clarissa Maharani',
    nim: '125210069',
    role: 'Asisten Modul',
    assignedModule: 'Modul 04: Preparasi Metalografi & Mikrostruktur',
    phone: '+62 896-7890-4321',
    email: 'clarissa.m69@student.upnyk.ac.id',
    officeHours: 'Selasa & Kamis, 09.00 - 12.00 WIB',
    initials: 'CM',
  },
  {
    id: 'aslab-5',
    name: 'Rian Bagus Prakoso',
    nim: '125210081',
    role: 'Asisten Modul',
    assignedModule: 'Modul 05: Uji Tanpa Rusak (NDT Dye Penetrant & UT)',
    phone: '+62 822-4466-8800',
    email: 'rian.bagus81@student.upnyk.ac.id',
    officeHours: 'Senin & Kamis, 14.00 - 17.00 WIB',
    initials: 'RB',
  },
  {
    id: 'aslab-laboran',
    name: 'Suharsono, A.Md.',
    nim: 'NIP. 198203152008011004',
    role: 'Laboran',
    assignedModule: 'Pemeliharaan Alat Uji, Kalibrasi & Bahan Kimia Etsa',
    phone: '+62 815-6890-1234',
    email: 'suharsono.lab@upnyk.ac.id',
    officeHours: 'Senin - Jumat, 08.00 - 16.00 WIB (Ruang Laboran FTM)',
    initials: 'SH',
  },
];

export const PRACTICUM_SCHEDULE: ScheduleItem[] = [
  // Senin
  {
    id: 'sch-1',
    groupNumber: 1,
    day: 'Senin',
    shift: 'Shift 1 (08.00 - 10.30 WIB)',
    room: 'Lab Pengujian Mekanik Gedung FTM Lt. 1',
    moduleCode: 'MODUL 01',
    moduleTitle: 'Pengujian Tarik Logam',
    leadAssistant: 'Fadhil Ihsan Ramadhan',
    weekSession: 1,
  },
  {
    id: 'sch-2',
    groupNumber: 2,
    day: 'Senin',
    shift: 'Shift 2 (10.45 - 13.15 WIB)',
    room: 'Lab Pengujian Mekanik Gedung FTM Lt. 1',
    moduleCode: 'MODUL 01',
    moduleTitle: 'Pengujian Tarik Logam',
    leadAssistant: 'Fadhil Ihsan Ramadhan',
    weekSession: 1,
  },
  {
    id: 'sch-3',
    groupNumber: 3,
    day: 'Senin',
    shift: 'Shift 3 (13.45 - 16.15 WIB)',
    room: 'Lab Metalurgi Fisik Gedung FTM Lt. 1',
    moduleCode: 'MODUL 02',
    moduleTitle: 'Pengujian Kekerasan Material',
    leadAssistant: 'Annisa Nurul Hidayah',
    weekSession: 1,
  },
  // Selasa
  {
    id: 'sch-4',
    groupNumber: 4,
    day: 'Selasa',
    shift: 'Shift 1 (08.00 - 10.30 WIB)',
    room: 'Lab Metalurgi Fisik Gedung FTM Lt. 1',
    moduleCode: 'MODUL 02',
    moduleTitle: 'Pengujian Kekerasan Material',
    leadAssistant: 'Annisa Nurul Hidayah',
    weekSession: 1,
  },
  {
    id: 'sch-5',
    groupNumber: 5,
    day: 'Selasa',
    shift: 'Shift 2 (10.45 - 13.15 WIB)',
    room: 'Lab Pengujian Bahan FTM Lt. 1',
    moduleCode: 'MODUL 03',
    moduleTitle: 'Pengujian Impak Charpy',
    leadAssistant: 'Dimas Satria Wibowo',
    weekSession: 1,
  },
  {
    id: 'sch-6',
    groupNumber: 6,
    day: 'Selasa',
    shift: 'Shift 3 (13.45 - 16.15 WIB)',
    room: 'Lab Pengujian Bahan FTM Lt. 1',
    moduleCode: 'MODUL 03',
    moduleTitle: 'Pengujian Impak Charpy',
    leadAssistant: 'Dimas Satria Wibowo',
    weekSession: 1,
  },
  // Rabu
  {
    id: 'sch-7',
    groupNumber: 7,
    day: 'Rabu',
    shift: 'Shift 1 (08.00 - 10.30 WIB)',
    room: 'Lab Metalografi & Optik FTM Lt. 2',
    moduleCode: 'MODUL 04',
    moduleTitle: 'Preparasi Metalografi & Mikrostruktur',
    leadAssistant: 'Clarissa Maharani',
    weekSession: 1,
  },
  {
    id: 'sch-8',
    groupNumber: 8,
    day: 'Rabu',
    shift: 'Shift 2 (10.45 - 13.15 WIB)',
    room: 'Lab Metalografi & Optik FTM Lt. 2',
    moduleCode: 'MODUL 04',
    moduleTitle: 'Preparasi Metalografi & Mikrostruktur',
    leadAssistant: 'Clarissa Maharani',
    weekSession: 1,
  },
  {
    id: 'sch-9',
    groupNumber: 9,
    day: 'Rabu',
    shift: 'Shift 3 (13.45 - 16.15 WIB)',
    room: 'Lab NDT & Inspeksi FTM Lt. 1',
    moduleCode: 'MODUL 05',
    moduleTitle: 'Karakterisasi Bahan & NDT',
    leadAssistant: 'Rian Bagus Prakoso',
    weekSession: 1,
  },
  // Kamis
  {
    id: 'sch-10',
    groupNumber: 10,
    day: 'Kamis',
    shift: 'Shift 1 (08.00 - 10.30 WIB)',
    room: 'Lab NDT & Inspeksi FTM Lt. 1',
    moduleCode: 'MODUL 05',
    moduleTitle: 'Karakterisasi Bahan & NDT',
    leadAssistant: 'Rian Bagus Prakoso',
    weekSession: 1,
  },
  {
    id: 'sch-11',
    groupNumber: 11,
    day: 'Kamis',
    shift: 'Shift 2 (10.45 - 13.15 WIB)',
    room: 'Lab Pengujian Mekanik Gedung FTM Lt. 1',
    moduleCode: 'MODUL 01',
    moduleTitle: 'Pengujian Tarik Logam',
    leadAssistant: 'Fadhil Ihsan Ramadhan',
    weekSession: 1,
  },
  {
    id: 'sch-12',
    groupNumber: 12,
    day: 'Kamis',
    shift: 'Shift 3 (13.45 - 16.15 WIB)',
    room: 'Lab Metalurgi Fisik Gedung FTM Lt. 1',
    moduleCode: 'MODUL 02',
    moduleTitle: 'Pengujian Kekerasan Material',
    leadAssistant: 'Annisa Nurul Hidayah',
    weekSession: 1,
  },
  // Jumat (Rotasi Evaluasi & Asistensi Terjadwal)
  {
    id: 'sch-13',
    groupNumber: 1,
    day: 'Jumat',
    shift: 'Shift 1 (08.00 - 10.30 WIB)',
    room: 'Ruang Asistensi Bersama FTM Lt. 2',
    moduleCode: 'ASISTENSI',
    moduleTitle: 'Asistensi Mingguan & Review Data Hasil Uji',
    leadAssistant: 'Bintang Arya Pratama (Koorlab)',
    weekSession: 1,
  },
  {
    id: 'sch-14',
    groupNumber: 2,
    day: 'Jumat',
    shift: 'Shift 3 (13.45 - 16.15 WIB)',
    room: 'Ruang Asistensi Bersama FTM Lt. 2',
    moduleCode: 'ASISTENSI',
    moduleTitle: 'Asistensi Mingguan & Review Data Hasil Uji',
    leadAssistant: 'Bintang Arya Pratama (Koorlab)',
    weekSession: 1,
  },
];

export const ANNEX_DOCUMENTS: AnnexDocument[] = [
  {
    id: 'annex-1',
    code: 'LAMPIRAN 01',
    title: 'Format Standar Cover Laporan Resmi Praktikum',
    category: 'template',
    description: 'Template cover resmi dengan logo UPN "Veteran" Yogyakarta, penulisan judul modul, identitas kelompok, nama asisten pengampu, serta ketentuan margin kertas A4 (4-3-3-3 cm).',
    format: 'DOCX',
    fileSize: '412 KB',
    lastUpdated: 'Semester Ganjil 2026/2027',
    previewType: 'cover',
  },
  {
    id: 'annex-2',
    code: 'LAMPIRAN 02',
    title: 'Format Lembar Pengesahan Laporan Resmi',
    category: 'template',
    description: 'Format lembar tanda tangan pengesahan yang wajib ditandatangani oleh Dosen Koordinator Praktikum, Koordinator Asisten, dan Asisten Modul terkait.',
    format: 'DOCX',
    fileSize: '325 KB',
    lastUpdated: 'Semester Ganjil 2026/2027',
    previewType: 'pengesahan',
  },
  {
    id: 'annex-3',
    code: 'LAMPIRAN 03',
    title: 'Kartu Kendali Asistensi Praktikum (Logbook Fisik/Digital)',
    category: 'logbook',
    description: 'Lembar catatan asistensi per modul yang mencatat tanggal asistensi, revisi materi, catatan aslab, dan paraf persetujuan cetak laporan akhir.',
    format: 'PDF',
    fileSize: '240 KB',
    lastUpdated: 'Tahun Akademik 2026/2027',
    previewType: 'kartu_asistensi',
  },
  {
    id: 'annex-4',
    code: 'LAMPIRAN 04',
    title: 'Tata Tertib, K3 & Prosedur Keselamatan Kerja Laboratorium',
    category: 'sop',
    description: 'Aturan wajib APD (jas lab, safety shoes, masker respiratori saat etsa nital, kacamata pelindung), sanksi keterlambatan, penanganan tumpahan kimia asam, dan etika laboratorium.',
    format: 'PDF',
    fileSize: '680 KB',
    lastUpdated: 'Edisi Revisi K3 2026',
    previewType: 'sop_k3',
  },
  {
    id: 'annex-5',
    code: 'LAMPIRAN 05',
    title: 'Sistematika Penyusunan Tugas Pendahuluan & Laporan',
    category: 'rubric',
    description: 'Panduan bab per bab: Bab I Pendahuluan, Bab II Dasar Teori, Bab III Metodologi Percobaan, Bab IV Data Pengamatan & Pengolahan Data, Bab V Pembahasan, Bab VI Kesimpulan & Saran, serta Format Daftar Pustaka IEEE/APA.',
    format: 'DOCX',
    fileSize: '515 KB',
    lastUpdated: 'Semester Ganjil 2026/2027',
    previewType: 'format_tugas',
  },
];
