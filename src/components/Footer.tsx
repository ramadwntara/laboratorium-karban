import React from 'react';
import { FlaskConical, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Institution Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center text-white">
                <FlaskConical className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Laboratorium Pengujian & Karakterisasi Bahan
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Laboratorium pendidikan dan riset di bawah Jurusan Teknik Metalurgi dan Material, Fakultas Teknologi Mineral, UPN &ldquo;Veteran&rdquo; Yogyakarta.
            </p>

            <div className="space-y-2 text-slate-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Gedung FTM Lt. 1 & 2, Kampus Terpadu Babarsari / Condongcatur, Jl. SWK 104 (Lingkar Utara), Depok, Sleman, D.I. Yogyakarta 55283
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>lab.pkb@upnyk.ac.id</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>(0274) 486733 ext. 302</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold uppercase tracking-wider text-slate-300 text-[11px]">
              Tautan Praktikum
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#modul" className="hover:text-white transition-colors">
                  Modul 01: Uji Tarik (ASTM E8)
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-white transition-colors">
                  Modul 02: Uji Kekerasan (Brinell/Vickers/Rockwell)
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-white transition-colors">
                  Modul 03: Uji Impak Charpy (ASTM E23)
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-white transition-colors">
                  Modul 04: Metalografi & Mikrostruktur
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-white transition-colors">
                  Modul 05: Non-Destructive Testing (NDT)
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Portal & GitHub Pages Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold uppercase tracking-wider text-slate-300 text-[11px]">
              Platform & Tautan Terkait
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://hmtmg-upnvyk.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Himpunan Mahasiswa Teknik Metalurgi UPNVYK</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://labpm2026.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Portal Laboratorium Pengolahan Mineral (Referensi)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://upnyk.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Situs Resmi UPN &ldquo;Veteran&rdquo; Yogyakarta</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>

            <div className="p-3 bg-slate-800/70 rounded-lg border border-slate-700/60 text-slate-400 text-[11px] leading-relaxed">
              Website ini dioptimalkan untuk hosting statis di <strong className="text-slate-200">GitHub Pages (*.github.io)</strong>, bebas dependensi server, dan dapat diakses dengan cepat oleh seluruh sivitas akademika.
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 Laboratorium Pengujian & Karakterisasi Bahan · Teknik Metalurgi dan Material UPN &ldquo;Veteran&rdquo; Yogyakarta.
          </div>
          <div className="font-mono text-slate-400">
            Versi Portal 2.4-GH · Semester Ganjil 2026/2027
          </div>
        </div>

      </div>
    </footer>
  );
};
