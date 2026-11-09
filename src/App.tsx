import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModuleCatalog } from './components/ModuleCatalog';
import { ScheduleMatrix } from './components/ScheduleMatrix';
import { AssistantDirectory } from './components/AssistantDirectory';
import { AnnexesCenter } from './components/AnnexesCenter';
import { DocumentPreviewModal } from './components/DocumentPreviewModal';
import { LabCalculatorModal } from './components/LabCalculatorModal';
import { Footer } from './components/Footer';
import { AnnexDocument } from './types';
import { CheckCircle2, Download } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedPreviewDoc, setSelectedPreviewDoc] = useState<AnnexDocument | null>(null);
  const [downloadToast, setDownloadToast] = useState<{ visible: boolean; fileName: string }>({
    visible: false,
    fileName: '',
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'modul', 'jadwal', 'asisten', 'lampiran'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real client-side file downloader
  const handleDownloadFile = (fileName: string) => {
    setDownloadToast({ visible: true, fileName });

    // Generate real client-side downloadable dummy text/pdf file for genuine user experience
    const dummyContent = `========================================================================
LABORATORIUM PENGUJIAN DAN KARAKTERISASI BAHAN
JURUSAN TEKNIK METALURGI DAN MATERIAL - FAKULTAS TEKNOLOGI MINERAL
UNIVERSITAS PEMBANGUNAN NASIONAL "VETERAN" YOGYAKARTA
========================================================================

Nama Berkas: ${fileName}
Diterbitkan: Semester Ganjil 2026/2027
Standar Uji: ASTM International / SNI

Catatan Resmi:
Dokumen ini merupakan panduan praktikum dan instrumen resmi laboratorium.
Wajib dibawa dalam bentuk fisik saat pelaksanaan praktikum dan asistensi.
Dilarang mengubah atau menyalin tanpa izin tertulis dari Koordinator Laboratorium.

UPN "Veteran" Yogyakarta - Kampus Bela Negara
========================================================================`;

    const blob = new Blob([dummyContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName.endsWith('.pdf') || fileName.endsWith('.docx') ? fileName : `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadToast({ visible: false, fileName: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-900 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
        <ModuleCatalog
          onDownloadNotification={handleDownloadFile}
        />
        <ScheduleMatrix />
        <AssistantDirectory />
        <AnnexesCenter
          onPreviewDocument={(doc) => setSelectedPreviewDoc(doc)}
          onDownloadNotification={handleDownloadFile}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <LabCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <DocumentPreviewModal
        document={selectedPreviewDoc}
        onClose={() => setSelectedPreviewDoc(null)}
        onDownloadNotification={handleDownloadFile}
      />

      {/* Download Toast Notification */}
      {downloadToast.visible && (
        <div className="fixed bottom-5 right-5 z-50 p-4 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-fade-in max-w-md">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-white">
              Mengunduh Berkas Praktikum:
            </div>
            <div className="text-xs font-mono text-emerald-300 truncate">
              {downloadToast.fileName}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
