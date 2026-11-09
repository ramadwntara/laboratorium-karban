# Portal Praktikum Pengujian dan Karakterisasi Bahan (Teknik Metalurgi & Material UPN "Veteran" Yogyakarta)

Portal akademik digital resmi untuk kegiatan Praktikum Pengujian dan Karakterisasi Bahan di lingkungan Jurusan Teknik Metalurgi dan Material, Fakultas Teknologi Mineral, UPN "Veteran" Yogyakarta. Dirancang dengan standar arsitektur web modern yang siap dihosting pada GitHub Pages (`*.github.io`), menyediakan akses terpusat ke modul pengujian, profil asisten laboratorium, jadwal praktikum & shift asistensi, serta lampiran panduan dan format laporan resmi.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Berdasarkan klarifikasi pada Tahap 1, spesifikasi portal telah diselaraskan dengan kebutuhan utama:
> - **Identitas Akademik**: Jurusan Teknik Metalurgi dan Material, UPN "Veteran" Yogyakarta.
> - **Fitur Prioritas**: 
>   1. **Profil Asisten Laboratorium** (struktur kepengurusan, koordinator modul, kontak WhatsApp & email resmi).
>   2. **Link Modul Praktikum** (silabus modul pengujian bahan: Uji Tarik, Uji Keras, Uji Impak Charpy, Metalografi & Karakterisasi Mikrostruktur, serta Uji NDT / Karakterisasi Lanjutan).
>   3. **Lampiran & Dokumen Resmi** (Cover Laporan Standar, Lembar Pengesahan, Kartu Kendali Asistensi, Tata Tertib & K3 Laboratorium).
>   4. **Jadwal Praktikum & Shift Asistensi** (matriks shift kelompok 1–12, hari pelaksanaan, ruangan laboratorium, dan asisten pendamping).
> - **Tema Visual**: Clean Modern Laboratorium Putih Bersih (`#FFFFFF` / `#F8FAFC`) dengan Biru Navy (`#0F172A` / `#1E3A8A`) dan aksen emas akademik yang presisi.

---

## 1. Overview & Core Concept

- **Tujuan Aplikasi**: Menyediakan sarana informasi, persiapan asistensi, dan pengunduhan berkas praktikum yang terstruktur, bebas hambatan, responsif, dan mudah diakses oleh mahasiswa praktikan serta asisten laboratorium.
- **Target Pengguna**: 
  - Mahasiswa praktikan Teknik Metalurgi dan Material (UPN "Veteran" Yogyakarta).
  - Tim Asisten Laboratorium (Aslab) dan Laboran Pengujian Bahan.
  - Dosen Pengampu & Koordinator Praktikum.
- **Nilai Utama**: Menghilangkan kebingungan jadwal, keterlambatan pengumpulan berkas, atau ketidakseragaman format laporan melalui portal interaktif satu pintu bergaya GitHub Pages modern.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Beranda & Pengumuman Penting**: Banner informasi darurat / timeline praktikum (misal: tenggat waktu tugas pendahuluan, jadwal responsi awal, briefing umum).
2. **Eksplorasi Modul Praktikum**:
   - Kartu modul pengujian material:
     - Modul 01: Pengujian Tarik Logam (*Tensile Testing - ASTM E8*)
     - Modul 02: Pengujian Kekerasan Logam (*Brinell, Vickers & Rockwell Hardness Testing*)
     - Modul 03: Pengujian Impak (*Charpy Impact Test - ASTM E23*)
     - Modul 04: Preparasi Metalografi & Mikroskop Optik (*Grinding, Polishing, Etching, & Microstructure Analysis*)
     - Modul 05: Karakterisasi Bahan Lanjutan & Uji Tanpa Rusak (*Non-Destructive Testing / Dye Penetrant & Ultrasonic Testing*)
   - Setiap modul dilengkapi ringkasan tujuan, standar ASTM/SNI, alat & bahan, tautan unduh e-Modul PDF, dan parameter perhitungan data.
3. **Pencarian Jadwal Praktikum & Shift**:
   - Filter interaktif berdasarkan Kelompok Praktikan (Kelompok 1 – 12) atau Hari / Ruang Laboratorium.
   - Penanda waktu, ruangan (Lab Pengujian Bahan & Metalografi Gedung FTM), dan nama asisten pendamping.
4. **Direktori Asisten Laboratorium**:
   - Kartu profil asisten: Koordinator Umum, Koordinator Modul, Asisten Praktikum.
   - Dilengkapi NIM, spesialisasi modul, jadwal asistensi, tautan kontak WhatsApp dan email.
5. **Pusat Unduhan & Lampiran**:
   - Template cover laporan resmi (.docx / .pdf preview).
   - Format Lembar Pengesahan.
   - Kartu Kendali Asistensi Digital (Logbook Asistensi).
   - Standar Operasional Prosedur (SOP) K3 Laboratorium Pengujian Bahan.
   - Panduan Perhitungan & Analisis Data Uji.

### Visual Identity & Theme Tokens
- **Style Direction**: Clean Modern Scientific & Academic Laboratory. Bersih, presisi, berwibawa, dan kontras tinggi.
- **Color Palette (60-30-10)**:
  - **60% Dominant Canvas**: Pure White (`#FFFFFF`) & Ultra-Clean Slate (`#F8FAFC`).
  - **30% Structural Panels & Typography**: Deep Navy Blue (`#0F172A`, `#1E293B`, `#1E3A8A`) dengan border hairline (`#E2E8F0`).
  - **10% Calibrated Accent**: UPN Academic Gold (`#D97706` / `#F59E0B`) dan Cobalt Cyan (`#2563EB` / `#0284C7`) untuk titik aksi utama.
- **Typography**:
  - Display / Headings: `Plus Jakarta Sans` (SemiBold / Bold, 600–700) dengan `text-wrap: balance`.
  - Body Text: `Plus Jakarta Sans` (Regular 400 & Medium 500) dengan rasio kontras WCAG AA.
  - Data & Kodifikasi Modul: `font-mono tabular-nums` untuk kode ASTM, nomor shift, dan parameter teknis.
- **Layout Restraint**:
  - Top Bar Contract: Brand mark tunggal (Teknik Metalurgi UPNVYK) — 5 nav links single-line (`whitespace-nowrap`) — 1 Primary Action (Unduh Panduan Umum).
  - Bebas dari pill badge clutter atau status dot buatan; metadata disajikan bersih dengan separator tipografis (`·`).

---

## 3. Key Product Decisions & Trade-Offs

- **Arsitektur Statis-Kompatibel (GitHub Pages Ready)**:
  - *Keputusan*: Seluruh state, data modul, direktori asisten, dokumen lampiran, dan jadwal disimpan dalam data layer TypeScript terstruktur di client-side.
  - *Alasan*: Kompatibel penuh jika dideploy langsung ke GitHub Pages (`https://<username>.github.io/<repo>`) tanpa dependensi database server berbayar, waktu muat instan, dan uptime 100%.
- **Interactive Search & Filter**:
  - *Keputusan*: Pencarian instan untuk jadwal kelompok, modul, dan dokumen lampiran dengan filter reaktif instan.
  - *Alasan*: Praktikan tidak perlu menggulir lembar PDF panjang hanya untuk mencari jadwal kelompoknya atau mencari format lampiran yang tepat.
- **Kalkulator Parameter Cepat Uji Bahan (Bonus Nilai Tambah)**:
  - *Keputusan*: Menyertakan kalkulator teknis interaktif ringan untuk verifikasi data asistensi (Kalkulator Uji Tarik: Tegangan/Regangan & Kalkulator Kekerasan Brinell BHN).
  - *Alasan*: Membantu mahasiswa memastikan data mentah praktikum valid sebelum asistensi laporan dengan asisten lab.

---

## 4. Technical Architecture & Data Strategy

### System Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                   Top Navigation Bar (Top Bar Contract)                │
│ [Brand: Lab PKB UPNVYK] ── [Beranda · Modul · Jadwal · Asisten · Lampiran] ── [Buku Panduan] │
└────────────────────────────────────────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┴──────────────────────────────┐
    ▼                                                              ▼
┌──────────────────────────────────────────────┐ ┌──────────────────────────────┐
│  Hero & Information Notice Banner            │ │  Quick Filter Bar & Search   │
│  - Identitas Jurusan Teknik Metalurgi UPNVYK │ │  - Filter: Modul, Shift,     │
│  - Pengumuman Berjalan & Jadwal Penting      │ │    Kelompok, Format Lampiran │
└──────────────────────────────────────────────┘ └──────────────────────────────┘
                                    │
    ┌───────────────────────────────┼──────────────────────────────┐
    ▼                               ▼                              ▼
┌─────────────────────────┐ ┌─────────────────────────┐ ┌──────────────────────┐
│   Katalog 5 Modul Lab   │ │   Matriks Jadwal & Shift│ │ Direktori Tim Aslab  │
│ - Deskripsi, Tujuan     │ │ - Filter Kelompok (1-12)│ │ - Profil, Kontak WA  │
│ - Prosedur, ASTM, SNI   │ │ - Hari, Jam, Ruang Lab  │ │ - Spesialisasi Modul │
│ - Link Unduh PDF Modul  │ │ - Asisten Pendamping    │ │ - Jam Asistensi      │
└─────────────────────────┘ └─────────────────────────┘ └──────────────────────┘
                                    │
    ┌───────────────────────────────┴──────────────────────────────┐
    ▼                                                              ▼
┌──────────────────────────────────────────────┐ ┌──────────────────────────────┐
│       Pusat Lampiran & Format Laporan        │ │ Interactive Tool: Lab Calc   │
│ - Cover Laporan, Lembar Pengesahan, Kartu As.│ │ - Brinell & Tensile Quick    │
│ - Template Word/PDF & SOP K3 Laboratorium    │ │   Parameter Verification     │
└──────────────────────────────────────────────┘ └──────────────────────────────┘
```

### Data Structure (`/src/data/labData.ts`)
1. **Modules**: `id`, `code`, `title`, `astmStandard`, `description`, `objectives`, `equipment`, `downloadUrl`, `category`.
2. **Assistants**: `id`, `name`, `nim`, `role`, `moduleResponsibility`, `contactWa`, `email`, `avatar`, `officeHours`.
3. **Schedule**: `id`, `groupNumber`, `day`, `time`, `room`, `currentModule`, `assistantName`.
4. **Annexes / Lampiran**: `id`, `title`, `type` (Cover, Pengesahan, Logbook, SOP), `description`, `fileFormat`, `fileSize`, `downloadUrl`, `previewContent`.

---

## Verification & Deployment Plan
1. Verifikasi kelengkapan data sesuai kurikulum pengujian bahan Teknik Metalurgi UPN Veteran Yogyakarta.
2. Pengujian responsivitas mobile & desktop pada breakpoint 1440px dan layar ponsel.
3. Jalankan `compile_applet` dan `lint_applet` secara serentak untuk memastikan kode bebas dari eror TypeScript dan ESLint.
