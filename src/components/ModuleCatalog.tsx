import React, { useState } from 'react';
import { BookOpen, Download, FileText, CheckCircle2, ChevronRight, X, Layers, Activity, Eye } from 'lucide-react';
import { PRACTICUM_MODULES } from '../data/labData';
import { PracticumModule } from '../types';

interface ModuleCatalogProps {
  onDownloadNotification: (fileName: string) => void;
}

export const ModuleCatalog: React.FC<ModuleCatalogProps> = ({ onDownloadNotification }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mechanical' | 'microstructure' | 'ndt'>('all');
  const [activeModalModule, setActiveModalModule] = useState<PracticumModule | null>(null);

  const filteredModules = PRACTICUM_MODULES.filter((mod) => {
    if (selectedCategory === 'all') return true;
    return mod.category === selectedCategory;
  });

  return (
    <section id="modul" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-1">
              Kurikulum Laboratorium
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Modul Praktikum Pengujian & Karakterisasi
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Panduan resmi pengujian material teknik mengacu pada standar ASTM International dan Standar Nasional Indonesia (SNI).
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Control) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shrink-0 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Modul (5)
            </button>
            <button
              onClick={() => setSelectedCategory('mechanical')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'mechanical'
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Uji Mekanik (3)
            </button>
            <button
              onClick={() => setSelectedCategory('microstructure')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'microstructure'
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Metalografi (1)
            </button>
            <button
              onClick={() => setSelectedCategory('ndt')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'ndt'
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              NDT / Karakterisasi (1)
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div>
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                  <span className="font-semibold text-blue-900">{module.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{module.astmStandard}</span>
                  <span aria-hidden="true">·</span>
                  <span>{module.fileSize}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {module.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {module.shortDesc}
                </p>

                {/* Key Objectives Preview */}
                <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide">
                    Fokus Pembelajaran:
                  </div>
                  {module.objectives.slice(0, 2).map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalModule(module)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Detail & Rumus</span>
                </button>

                <button
                  onClick={() => onDownloadNotification(module.downloadFileName)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors"
                  title="Unduh e-Modul PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Download Box */}
        <div className="mt-8 p-5 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-950 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Bundel Buku Panduan Praktikum Pengujian Bahan Lengkap (Revisi 2026)
              </div>
              <div className="text-xs text-slate-500">
                Format PDF interaktif mencakup Modul 01 - 05 beserta lembar kerja data pengamatan (Total: 17.2 MB)
              </div>
            </div>
          </div>

          <button
            onClick={() => onDownloadNotification('BUKU_PANDUAN_LENGKAP_PRAKTIKUM_PKB_UPNVYK_2026.pdf')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Bundel Lengkap</span>
          </button>
        </div>

      </div>

      {/* Module Detail Modal */}
      {activeModalModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                  <span className="font-semibold text-blue-900">{activeModalModule.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalModule.astmStandard}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeModalModule.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalModule(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6">
              
              {/* Special Image for Modul 4 (Microstructure) */}
              {activeModalModule.id === 'mod-4' && (
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/src/assets/images/lab_microstructure_sample_1794240578439.jpg"
                    alt="Struktur mikro metalografi baja karbon etsa nital"
                    className="w-full h-52 sm:h-64 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-white text-xs flex items-center justify-between">
                    <span>Hasil Observasi Mikroskop Metalurgi: Fasa Perlit (Gelap Lamelar) & Ferit (Terang)</span>
                    <span className="font-mono text-slate-400">ASTM E112 · 100X</span>
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Deskripsi & Latar Belakang Ilmiah
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalModule.fullDesc}
                </p>
              </div>

              {/* Objectives */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Tujuan Praktikum
                </h4>
                <ul className="space-y-2">
                  {activeModalModule.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment & Specimens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-900" />
                    <span>Peralatan Pengujian</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeModalModule.equipment.map((eq, i) => (
                      <li key={i}>• {eq}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-900" />
                    <span>Spesimen Uji</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeModalModule.testSpecimens.map((sp, i) => (
                      <li key={i}>• {sp}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Formulas & Calculations */}
              {activeModalModule.equations && activeModalModule.equations.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Persamaan & Rumus Perhitungan
                  </h4>
                  <div className="space-y-3">
                    {activeModalModule.equations.map((eq, i) => (
                      <div key={i} className="p-3.5 bg-slate-900 text-white rounded-xl font-mono text-xs">
                        <div className="text-slate-400 font-sans text-xs mb-1 font-medium">{eq.name}</div>
                        <div className="text-base text-amber-300 font-semibold my-1">{eq.formula}</div>
                        <div className="text-slate-300 font-sans text-[11px]">{eq.explanation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4 rounded-b-2xl">
              <div className="text-xs text-slate-500 font-mono">
                Ukuran Berkas: {activeModalModule.fileSize}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalModule(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    onDownloadNotification(activeModalModule.downloadFileName);
                    setActiveModalModule(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh e-Modul PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
