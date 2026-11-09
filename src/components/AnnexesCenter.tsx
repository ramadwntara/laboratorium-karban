import React, { useState } from 'react';
import { FileText, Download, Eye, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { ANNEX_DOCUMENTS } from '../data/labData';
import { AnnexDocument } from '../types';

interface AnnexesCenterProps {
  onPreviewDocument: (doc: AnnexDocument) => void;
  onDownloadNotification: (fileName: string) => void;
}

export const AnnexesCenter: React.FC<AnnexesCenterProps> = ({
  onPreviewDocument,
  onDownloadNotification,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'template' | 'logbook' | 'sop' | 'rubric'>('all');

  const filteredDocs = ANNEX_DOCUMENTS.filter((doc) => {
    if (selectedFilter === 'all') return true;
    return doc.category === selectedFilter;
  });

  return (
    <section id="lampiran" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-1">
              Berkas Resmi & Administrasi
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Lampiran, Format Laporan & SOP K3
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Unduh template resmi cover laporan, lembar pengesahan, kartu kendali asistensi, dan pedoman keselamatan kerja laboratorium.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg shrink-0 overflow-x-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Berkas ({ANNEX_DOCUMENTS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('template')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'template'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cover & Pengesahan
            </button>
            <button
              onClick={() => setSelectedFilter('logbook')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'logbook'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kartu Kendali
            </button>
            <button
              onClick={() => setSelectedFilter('sop')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'sop'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SOP K3
            </button>
          </div>
        </div>

        {/* Annex Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="font-semibold text-blue-900">{doc.code}</span>
                  <span className="font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {doc.format}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.description}
                </p>

                <div className="text-[11px] font-mono text-slate-400 mb-4">
                  Ukuran: {doc.fileSize} · {doc.lastUpdated}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2">
                <button
                  onClick={() => onPreviewDocument(doc)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-900" />
                  <span>Pratinjau</span>
                </button>

                <button
                  onClick={() => onDownloadNotification(`${doc.code}_${doc.title.replace(/\s+/g, '_')}.${doc.format.toLowerCase()}`)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-xs"
                  title="Unduh Berkas Asli"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Report Submission Guidance Strip */}
        <div className="mt-8 p-5 bg-blue-50/50 border border-blue-200/80 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Standar Margin & Kertas</div>
              <p className="text-slate-600 mt-0.5">
                Kertas HVS A4 80 gram, margin 4 cm (Kiri), 4 cm (Atas), 3 cm (Kanan), 3 cm (Bawah).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Ketentuan Penjilidan</div>
              <p className="text-slate-600 mt-0.5">
                Soft cover mika bening depan, kertas buffalo biru dongker belakang, lakban hitam rapi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Kelengkapan Wajib</div>
              <p className="text-slate-600 mt-0.5">
                Wajib melampirkan lembar pengesahan bertanda tangan basah dan kartu kendali asistensi asli.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
