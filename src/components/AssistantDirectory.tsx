import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, ShieldCheck, Check, Copy } from 'lucide-react';
import { LAB_ASSISTANTS } from '../data/labData';
import { Assistant } from '../types';

export const AssistantDirectory: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedAslabForContact, setSelectedAslabForContact] = useState<Assistant | null>(null);
  const [studentName, setStudentName] = useState('');
  const [studentGroup, setStudentGroup] = useState('1');
  const [consultTopic, setConsultTopic] = useState('Asistensi Laporan Sementara');

  const handleCopyEmail = (id: string, email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generateWhatsAppLink = (aslab: Assistant) => {
    const rawNumber = aslab.phone.replace(/[^0-9]/g, '');
    const message = `Halo Kak ${aslab.name}, perkenalkan saya ${studentName || '[Nama Praktikan]'} dari Kelompok ${studentGroup} Praktikum Pengujian dan Karakterisasi Bahan. Saya ingin berkonsultasi mengenai ${consultTopic} pada jadwal office hours Kakak. Terima kasih.`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="asisten" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-1">
              Struktur Kepengurusan Laboratorium
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Direktori Asisten & Pembina Praktikum
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Tim dosen pengampu, koordinator praktikum, asisten modul, dan laboran pengujian bahan Semester Ganjil 2026/2027.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            Total Personel: {LAB_ASSISTANTS.length} Staf & Aslab
          </div>
        </div>

        {/* Aslab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LAB_ASSISTANTS.map((assistant) => {
            const isFaculty = assistant.role === 'Koordinator Praktikum' || assistant.role === 'Laboran';
            const isKoor = assistant.role === 'Koordinator Asisten';

            return (
              <div
                key={assistant.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div>
                  {/* Avatar & Role Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm font-mono shrink-0 ${
                        isFaculty
                          ? 'bg-blue-950 text-amber-300'
                          : isKoor
                          ? 'bg-blue-900 text-white'
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      {assistant.initials}
                    </div>

                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-900 truncate">
                        {assistant.role}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 truncate" title={assistant.name}>
                        {assistant.name}
                      </h3>
                      <div className="text-[11px] font-mono text-slate-500 truncate">
                        {assistant.nim}
                      </div>
                    </div>
                  </div>

                  {/* Module Assignment */}
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 mb-3 text-xs">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                      Tanggung Jawab:
                    </div>
                    <div className="font-medium text-slate-800 line-clamp-2">
                      {assistant.assignedModule}
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-4">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{assistant.officeHours}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedAslabForContact(assistant)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => handleCopyEmail(assistant.id, assistant.email)}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                    title={copiedId === assistant.id ? 'Email Disalin!' : `Salin Email: ${assistant.email}`}
                  >
                    {copiedId === assistant.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Etiquette Note */}
        <div className="mt-8 p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 space-y-1">
            <span className="font-semibold text-slate-900">Etika Menghubungi Asisten Laboratorium:</span>
            <p>
              Harap menghubungi asisten pada hari kerja (Senin - Jumat) antara pukul 08.00 - 18.00 WIB. Gunakan bahasa Indonesia baku dan sebutkan salam, identitas nama lengkap, NIM, serta kelompok praktikan.
            </p>
          </div>
        </div>

      </div>

      {/* WhatsApp Message Composer Modal */}
      {selectedAslabForContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-xl p-5 sm:p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Konsultasi Asistensi: {selectedAslabForContact.name}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  {selectedAslabForContact.assignedModule}
                </p>
              </div>
              <button
                onClick={() => setSelectedAslabForContact(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nama Praktikan:</label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap Anda..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Kelompok:</label>
                  <select
                    value={studentGroup}
                    onChange={(e) => setStudentGroup(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        Kelompok {num}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Topik Asistensi:</label>
                  <select
                    value={consultTopic}
                    onChange={(e) => setConsultTopic(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900"
                  >
                    <option value="Asistensi Laporan Sementara">Asistensi Lap. Sementara</option>
                    <option value="Asistensi Revisi Laporan Resmi">Revisi Laporan Resmi</option>
                    <option value="Konfirmasi Data Mentah Pengujian">Konfirmasi Data Uji</option>
                    <option value="Izin Jadwal Inhal Praktikum">Izin Inhal Praktikum</option>
                  </select>
                </div>
              </div>

              {/* Preview Bubble */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-slate-800">
                <div className="text-[10px] uppercase font-bold text-emerald-800 mb-1">
                  Format Pesan Otomatis:
                </div>
                <p className="italic text-slate-700 text-[11px] leading-relaxed">
                  &ldquo;Halo Kak {selectedAslabForContact.name}, perkenalkan saya {studentName || '[Nama Anda]'} dari Kelompok {studentGroup} Praktikum Pengujian dan Karakterisasi Bahan. Saya ingin berkonsultasi mengenai {consultTopic} pada jadwal office hours Kakak. Terima kasih.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedAslabForContact(null)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Batal
              </button>
              <a
                href={generateWhatsAppLink(selectedAslabForContact)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedAslabForContact(null)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Buka WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
