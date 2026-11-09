import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';
import { AnnexDocument } from '../types';

interface DocumentPreviewModalProps {
  document: AnnexDocument | null;
  onClose: () => void;
  onDownloadNotification: (fileName: string) => void;
}

export const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  document,
  onClose,
  onDownloadNotification,
}) => {
  const [copied, setCopied] = useState(false);

  if (!document) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/65 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between gap-4 bg-white z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-950 text-white flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500">
                {document.code} · Format {document.format}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                {document.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              title="Cetak Halaman Pratinjau"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Pratinjau</span>
            </button>

            <button
              onClick={() => onDownloadNotification(`${document.code}_${document.title.replace(/\s+/g, '_')}.${document.format.toLowerCase()}`)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh {document.format}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-2"
              aria-label="Tutup Pratinjau"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Preview Stage */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/70 flex justify-center">
          
          {/* Simulated A4 Paper Document */}
          <div className="bg-white max-w-[720px] w-full p-8 sm:p-12 border border-slate-200 shadow-md text-slate-900 font-sans min-h-[750px]">
            
            {/* 1. COVER LAPORAN PREVIEW */}
            {document.previewType === 'cover' && (
              <div className="flex flex-col justify-between h-full text-center space-y-8 py-4">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-500">
                    LAPORAN RESMI PRAKTIKUM
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
                    PENGUJIAN DAN KARAKTERISASI BAHAN
                  </h1>
                  <div className="text-sm font-semibold text-blue-950">
                    MODUL [NOMOR MODUL]: [JUDUL MODUL PENGUJIAN]
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    Standar Acuan: ASTM E8 / ASTM E10 / ASTM E23 / ASTM E3
                  </div>
                </div>

                {/* UPNVYK Logo Emblem Simulation */}
                <div className="my-6 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-blue-950 bg-slate-50 flex flex-col items-center justify-center text-blue-950 p-2 shadow-xs">
                    <span className="text-[10px] font-bold text-center uppercase tracking-tight">UPN &ldquo;VETERAN&rdquo;</span>
                    <span className="text-xs font-bold text-amber-600">YOGYAKARTA</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 font-mono">
                    (Logo Resmi UPN &ldquo;Veteran&rdquo; Yogyakarta)
                  </span>
                </div>

                {/* Group Details */}
                <div className="space-y-4 max-w-md mx-auto text-xs text-left border border-slate-200 p-4 rounded-lg bg-slate-50/50">
                  <div className="font-bold text-center text-slate-900 border-b border-slate-200 pb-1 mb-2">
                    DISUSUN OLEH KELOMPOK [X]:
                  </div>
                  <div className="space-y-1 font-mono">
                    <div className="flex justify-between">
                      <span>1. Nama Praktikan 1</span>
                      <span className="text-slate-500">NIM. 1252100XX</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2. Nama Praktikan 2</span>
                      <span className="text-slate-500">NIM. 1252100XX</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3. Nama Praktikan 3</span>
                      <span className="text-slate-500">NIM. 1252100XX</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                    <strong>Asisten Pengampu:</strong> [Nama Asisten Modul Terkait]
                  </div>
                </div>

                {/* University Affiliation */}
                <div className="space-y-1 text-center text-xs uppercase font-semibold text-slate-800">
                  <div>LABORATORIUM PENGUJIAN DAN KARAKTERISASI BAHAN</div>
                  <div>JURUSAN TEKNIK METALURGI DAN MATERIAL</div>
                  <div>FAKULTAS TEKNOLOGI MINERAL</div>
                  <div>UNIVERSITAS PEMBANGUNAN NASIONAL &ldquo;VETERAN&rdquo; YOGYAKARTA</div>
                  <div className="font-mono text-slate-600 text-[11px] pt-1">2026</div>
                </div>

                <div className="text-[10px] text-slate-400 font-mono border-t border-slate-200 pt-2">
                  Aturan Margin Kertas A4: Atas 4 cm · Kiri 4 cm · Bawah 3 cm · Kanan 3 cm · Font: Times New Roman 12 pt / 1.5 Spasi
                </div>
              </div>
            )}

            {/* 2. LEMBAR PENGESAHAN PREVIEW */}
            {document.previewType === 'pengesahan' && (
              <div className="space-y-6 text-xs text-slate-800">
                <div className="text-center space-y-1 border-b border-slate-200 pb-4">
                  <h2 className="text-base font-bold uppercase tracking-wide text-slate-900">
                    LEMBAR PENGESAHAN
                  </h2>
                  <div className="font-semibold text-slate-700">
                    PRAKTIKUM PENGUJIAN DAN KARAKTERISASI BAHAN
                  </div>
                  <div className="font-mono text-slate-500 text-[11px]">
                    SEMESTER GANJIL TAHUN AKADEMIK 2026/2027
                  </div>
                </div>

                <p className="leading-relaxed text-justify">
                  Laporan resmi Praktikum Pengujian dan Karakterisasi Bahan ini telah disusun oleh anggota Kelompok [X] sebagai salah satu syarat kelulusan mata kuliah Praktikum Pengujian dan Karakterisasi Bahan pada Jurusan Teknik Metalurgi dan Material, Fakultas Teknologi Mineral, UPN &ldquo;Veteran&rdquo; Yogyakarta, dan telah diperiksa serta disetujui.
                </p>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                  <div className="text-slate-500 font-mono text-[11px]">Disetujui di Yogyakarta pada tanggal:</div>
                  <div className="font-bold text-slate-900 mt-1">..... ........................... 2026</div>
                </div>

                {/* Signature Blocks */}
                <div className="pt-4 grid grid-cols-2 gap-8 text-center">
                  <div className="space-y-14">
                    <div className="text-slate-600 font-medium">Koordinator Asisten,</div>
                    <div>
                      <div className="font-bold text-slate-900 underline">Bintang Arya Pratama</div>
                      <div className="font-mono text-slate-500 text-[11px]">NIM. 125210014</div>
                    </div>
                  </div>

                  <div className="space-y-14">
                    <div className="text-slate-600 font-medium">Asisten Modul,</div>
                    <div>
                      <div className="font-bold text-slate-900 underline">[Nama Asisten Modul]</div>
                      <div className="font-mono text-slate-500 text-[11px]">NIM. 1252100XX</div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 text-center space-y-14">
                  <div className="text-slate-600 font-medium">
                    Mengetahui,<br />
                    Dosen Koordinator Praktikum
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 underline">Ir. M. Ridwan, M.T.</div>
                    <div className="font-mono text-slate-500 text-[11px]">NIP. 197805122003121002</div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. KARTU KENDALI ASISTENSI PREVIEW */}
            {document.previewType === 'kartu_asistensi' && (
              <div className="space-y-5 text-xs text-slate-800">
                <div className="text-center space-y-1 border-b border-slate-200 pb-3">
                  <h2 className="text-base font-bold uppercase tracking-wide text-slate-900">
                    KARTU KENDALI ASISTENSI PRAKTIKUM
                  </h2>
                  <div className="text-slate-600">
                    Laboratorium Pengujian dan Karakterisasi Bahan · Teknik Metalurgi UPNVYK
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[11px]">
                  <div><strong>Kelompok:</strong> [.....]</div>
                  <div><strong>Modul:</strong> [.....................................]</div>
                  <div><strong>Asisten:</strong> [.....................................]</div>
                  <div><strong>Hari/Shift:</strong> [.....................................]</div>
                </div>

                <div className="border border-slate-300 rounded overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-300 font-semibold text-slate-800">
                        <th className="p-2 border-r border-slate-300 text-center w-10">No</th>
                        <th className="p-2 border-r border-slate-300 w-24">Tanggal</th>
                        <th className="p-2 border-r border-slate-300">Catatan Koreksi / Materi Asistensi</th>
                        <th className="p-2 border-r border-slate-300 w-24 text-center">Status</th>
                        <th className="p-2 text-center w-20">Paraf</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
                      <tr>
                        <td className="p-2 border-r border-slate-200 text-center">1</td>
                        <td className="p-2 border-r border-slate-200">10/11/2026</td>
                        <td className="p-2 border-r border-slate-200">Koreksi kurva tegangan-regangan & metode offset 0.2%</td>
                        <td className="p-2 border-r border-slate-200 text-center text-amber-700 font-semibold">Revisi 1</td>
                        <td className="p-2 text-center text-slate-400">[Paraf]</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-r border-slate-200 text-center">2</td>
                        <td className="p-2 border-r border-slate-200">13/11/2026</td>
                        <td className="p-2 border-r border-slate-200">Pembahasan mekanisme deformasi & perbaikan daftar pustaka</td>
                        <td className="p-2 border-r border-slate-200 text-center text-amber-700 font-semibold">Revisi 2</td>
                        <td className="p-2 text-center text-slate-400">[Paraf]</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-r border-slate-200 text-center">3</td>
                        <td className="p-2 border-r border-slate-200">16/11/2026</td>
                        <td className="p-2 border-r border-slate-200">Format lampiran lengkap, disetujui cetak laporan akhir</td>
                        <td className="p-2 border-r border-slate-200 text-center text-emerald-700 font-semibold">ACC CETAK</td>
                        <td className="p-2 text-center text-slate-400">[Paraf]</td>
                      </tr>
                      {[4, 5].map((row) => (
                        <tr key={row} className="h-9">
                          <td className="p-2 border-r border-slate-200 text-center">{row}</td>
                          <td className="p-2 border-r border-slate-200"></td>
                          <td className="p-2 border-r border-slate-200"></td>
                          <td className="p-2 border-r border-slate-200"></td>
                          <td className="p-2"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-[11px] text-slate-500 italic">
                  *Kartu kendali ini wajib dilampirkan pada halaman terakhir laporan resmi praktikum.
                </div>
              </div>
            )}

            {/* 4. SOP K3 PREVIEW */}
            {document.previewType === 'sop_k3' && (
              <div className="space-y-4 text-xs text-slate-800 leading-relaxed">
                <div className="text-center space-y-1 border-b border-slate-200 pb-3">
                  <h2 className="text-base font-bold uppercase tracking-wide text-slate-900">
                    STANDAR OPERASIONAL PROSEDUR (SOP) K3
                  </h2>
                  <div className="text-slate-600 font-semibold">
                    KESELAMATAN & KESEHATAN KERJA LABORATORIUM PENGUJIAN BAHAN
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">1. Alat Pelindung Diri (APD) Wajib:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>Jas laboratorium katun putih lengan panjang terkancing rapi.</li>
                      <li>Sepatu safety tertutup (safety shoes) atau sepatu kulit kuat, dilarang memakai sandal/selop.</li>
                      <li>Kacamata pelindung (safety goggles) saat pengujian impak dan etsa metalografi.</li>
                      <li>Masker respiratori uap asam saat menggunakan larutan etsa kimia (Nital/Picral).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">2. Pengoperasian Mesin Uji Universal (UTM) & Impak:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>Pastikan tombol emergency stop mudah dijangkau sebelum menaikkan beban hidrolik.</li>
                      <li>Pastikan pintu pelindung akrilik mesin uji impak Charpy tertutup rapat sebelum pendulum dilepaskan.</li>
                      <li>Jangan berada dalam radius lintasan ayunan pendulum Charpy yang sedang beroperasi.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">3. Penanganan Bahan Kimia Etsa Metalografi:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>Pencampuran larutan etsa Nital (Asam Nitrat HNO₃ pekat dalam Alkohol 96%) WAJIB dilakukan di dalam Lemari Asam (Fume Hood).</li>
                      <li>Selalu tuangkan asam ke dalam alkohol secara perlahan, JANGAN menuangkan alkohol ke dalam asam.</li>
                      <li>Bilas spesimen yang dietsa dengan alkohol dan keringkan menggunakan pengering udara panas (hair dryer).</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 5. FORMAT TUGAS PREVIEW */}
            {document.previewType === 'format_tugas' && (
              <div className="space-y-4 text-xs text-slate-800 leading-relaxed">
                <div className="text-center space-y-1 border-b border-slate-200 pb-3">
                  <h2 className="text-base font-bold uppercase tracking-wide text-slate-900">
                    SISTEMATIKA PENULISAN LAPORAN RESMI
                  </h2>
                  <div className="text-slate-600">
                    Standar Penulisan Akademik Teknik Metalurgi dan Material UPNVYK
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-[11px]">
                    <strong>Ketentuan Format Umum:</strong><br />
                    • Kertas: A4 (80 gram), Margin: 4-3-3-3 cm (Kiri 4cm, Atas 4cm, Kanan 3cm, Bawah 3cm)<br />
                    • Huruf: Times New Roman 12 pt, Spasi: 1.5, Rata Kanan-Kiri (Justify)<br />
                    • Penjilidan: Soft Cover Mika Bening dengan Lakban Biru Dongker
                  </div>

                  <h3 className="font-bold text-slate-900 pt-2">Susunan Bab Laporan:</h3>
                  <ol className="list-decimal pl-5 space-y-1.5 text-slate-700">
                    <li><strong>HALAMAN JUDUL (COVER)</strong></li>
                    <li><strong>LEMBAR PENGESAHAN</strong></li>
                    <li><strong>KATA PENGANTAR & DAFTAR ISI</strong></li>
                    <li><strong>BAB I PENDAHULUAN</strong> (Latar Belakang, Tujuan, Manfaat Praktikum)</li>
                    <li><strong>BAB II DASAR TEORI</strong> (Teori dasar ASTM, mekanisme pengujian, formula perhitungan)</li>
                    <li><strong>BAB III METODOLOGI PERCOBAAN</strong> (Diagram alir percobaan, alat dan bahan, prosedur uji)</li>
                    <li><strong>BAB IV DATA PENGAMATAN & PENGOLAHAN DATA</strong> (Tabel data mentah, kurva pengujian, contoh perhitungan)</li>
                    <li><strong>BAB V PEMBAHASAN</strong> (Analisis kurva, perbandingan dengan literatur, analisa kesalahan/error)</li>
                    <li><strong>BAB VI KESIMPULAN & SARAN</strong></li>
                    <li><strong>DAFTAR PUSTAKA</strong> (Minimal 3 textbook metalurgi dan 2 jurnal ilmiah terindeks)</li>
                    <li><strong>LAMPIRAN</strong> (Kartu Kendali Asistensi, Data Mentah Bermeterai Asisten)</li>
                  </ol>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-slate-500 font-mono text-[11px]">
            Diperbarui: {document.lastUpdated} · Laboratorium Pengujian Bahan FTM UPNVYK
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopyText(`TEMPLATE DOKUMEN: ${document.title} - UPN Veteran Yogyakarta`)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin Judul'}</span>
            </button>

            <button
              onClick={() => onDownloadNotification(`${document.code}_${document.title.replace(/\s+/g, '_')}.${document.format.toLowerCase()}`)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Template Lengkap ({document.fileSize})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
