import React, { useState } from 'react';
import { ChevronRight, Bell, Calendar, BookOpen, FileText, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { LAB_ANNOUNCEMENTS } from '../data/labData';

interface HeroProps {
  onSelectAnnouncement?: (id: string) => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  const [activeAnnounceIndex, setActiveAnnounceIndex] = useState(0);
  const currentAnnouncement = LAB_ANNOUNCEMENTS[activeAnnounceIndex];

  return (
    <section id="beranda" className="pt-6 pb-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Announcement Bar */}
        <div className="mb-6 p-3 sm:p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-900 bg-blue-100/70 px-2.5 py-1 rounded-md shrink-0">
              <Bell className="w-3.5 h-3.5 text-blue-800" />
              <span>Pengumuman</span>
            </span>
            <div className="text-xs sm:text-sm text-slate-800 font-medium">
              <span className="font-semibold text-slate-900">{currentAnnouncement.title}</span>
              <span className="hidden md:inline text-slate-500 ml-2">· {currentAnnouncement.content}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 self-end sm:self-auto shrink-0">
            <span>{activeAnnounceIndex + 1} / {LAB_ANNOUNCEMENTS.length}</span>
            <button
              onClick={() => setActiveAnnounceIndex((prev) => (prev + 1) % LAB_ANNOUNCEMENTS.length)}
              className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-slate-700 font-medium text-xs transition-colors"
            >
              Berikutnya →
            </button>
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Academic Brief & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Institution kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">
                <span className="text-blue-900">Teknik Metalurgi & Material</span>
                <span aria-hidden="true">·</span>
                <span>FTM UPN &ldquo;Veteran&rdquo; Yogyakarta</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-5">
                Portal Praktikum Pengujian & Karakterisasi Bahan
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Pusat informasi terpadu kegiatan praktikum laboratorium untuk mahasiswa Teknik Metalurgi dan Material. Akses buku modul ASTM, jadwal shift kelompok, format laporan resmi, kartu kendali asistensi, dan direktori asisten laboratorium.
              </p>

              {/* Fast Feature Links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <a
                  href="#modul"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-lg transition-colors group"
                >
                  <BookOpen className="w-5 h-5 text-blue-900 mb-2 group-hover:scale-105 transition-transform" />
                  <div className="text-xs font-semibold text-slate-900">Modul Uji</div>
                  <div className="text-[11px] text-slate-500">5 Panduan ASTM</div>
                </a>

                <a
                  href="#jadwal"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-lg transition-colors group"
                >
                  <Calendar className="w-5 h-5 text-blue-900 mb-2 group-hover:scale-105 transition-transform" />
                  <div className="text-xs font-semibold text-slate-900">Jadwal Shift</div>
                  <div className="text-[11px] text-slate-500">Kelompok 1 - 12</div>
                </a>

                <a
                  href="#asisten"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-lg transition-colors group"
                >
                  <Users className="w-5 h-5 text-blue-900 mb-2 group-hover:scale-105 transition-transform" />
                  <div className="text-xs font-semibold text-slate-900">Tim Aslab</div>
                  <div className="text-[11px] text-slate-500">Kontak Asistensi</div>
                </a>

                <a
                  href="#lampiran"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-lg transition-colors group"
                >
                  <FileText className="w-5 h-5 text-blue-900 mb-2 group-hover:scale-105 transition-transform" />
                  <div className="text-xs font-semibold text-slate-900">Format Cover</div>
                  <div className="text-[11px] text-slate-500">Lampiran Resmi</div>
                </a>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#jadwal"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-xs"
              >
                <span>Lihat Jadwal Kelompok</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
              >
                <span>Kalkulator Uji Mekanik</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex-1 min-h-[300px]">
              <img
                src="/src/assets/images/lab_hero_banner_1794240579352.jpg"
                alt="Laboratorium Pengujian dan Karakterisasi Bahan UPN Veteran Yogyakarta"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>K3 & Standar Pengujian Terakreditasi</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  Lab Pengujian Bahan & Metalografi FTM
                </h3>
                <p className="text-xs text-slate-200">
                  Gedung Fakultas Teknologi Mineral Lt. 1 & 2 · Kampus Terpadu UPN &ldquo;Veteran&rdquo; Yogyakarta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quantitative Strip */}
        <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-900">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-2xl font-bold font-mono text-blue-950">05</div>
            <div className="text-xs font-semibold text-slate-700">Modul Standar ASTM</div>
            <div className="text-[11px] text-slate-500">Tarik, Keras, Impak, Metalografi, NDT</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-2xl font-bold font-mono text-blue-950">12</div>
            <div className="text-xs font-semibold text-slate-700">Kelompok Praktikan</div>
            <div className="text-[11px] text-slate-500">Semester Ganjil 2026/2027</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-2xl font-bold font-mono text-blue-950">08</div>
            <div className="text-xs font-semibold text-slate-700">Tim Dosen & Asisten Lab</div>
            <div className="text-[11px] text-slate-500">Asistensi & Supervisi Uji</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-2xl font-bold font-mono text-blue-950">100%</div>
            <div className="text-xs font-semibold text-slate-700">Akses Digital Mandiri</div>
            <div className="text-[11px] text-slate-500">GitHub Pages Static Portal</div>
          </div>
        </div>

      </div>
    </section>
  );
};
