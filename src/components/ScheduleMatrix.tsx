import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Search, Filter, AlertCircle } from 'lucide-react';
import { PRACTICUM_SCHEDULE } from '../data/labData';

export const ScheduleMatrix: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  const groups = Array.from({ length: 12 }, (_, i) => i + 1);

  const filteredSchedule = PRACTICUM_SCHEDULE.filter((item) => {
    // Day filter
    if (selectedDay !== 'all' && item.day !== selectedDay) return false;
    // Group filter
    if (selectedGroup !== 'all' && item.groupNumber !== parseInt(selectedGroup)) return false;
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchGroup = `kelompok ${item.groupNumber}`.includes(q) || item.groupNumber.toString() === q;
      const matchModule = item.moduleTitle.toLowerCase().includes(q) || item.moduleCode.toLowerCase().includes(q);
      const matchAslab = item.leadAssistant.toLowerCase().includes(q);
      const matchRoom = item.room.toLowerCase().includes(q);
      const matchDay = item.day.toLowerCase().includes(q);
      if (!matchGroup && !matchModule && !matchAslab && !matchRoom && !matchDay) return false;
    }
    return true;
  });

  return (
    <section id="jadwal" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-1">
              Manajemen Shift & Waktu
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Jadwal Praktikum & Shift Asistensi
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Daftar alokasi waktu pengujian per kelompok di Laboratorium Pengujian Bahan & Metalografi Gedung FTM UPNVYK.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-blue-900" />
            <span>Zona Waktu: WIB (GMT+7)</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari kelompok, modul, atau asisten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-900 focus:border-blue-900"
              />
            </div>

            {/* Day Selector */}
            <div className="sm:col-span-4 flex items-center gap-1.5 overflow-x-auto">
              <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">Hari:</span>
              <button
                onClick={() => setSelectedDay('all')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedDay === 'all'
                    ? 'bg-blue-950 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Semua
              </button>
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    selectedDay === day
                      ? 'bg-blue-950 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Group Selector Dropdown */}
            <div className="sm:col-span-3 flex items-center gap-2">
              <label htmlFor="group-select" className="text-xs text-slate-500 whitespace-nowrap shrink-0">
                Kelompok:
              </label>
              <select
                id="group-select"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-900"
              >
                <option value="all">Semua Kelompok (1 - 12)</option>
                {groups.map((grp) => (
                  <option key={grp} value={grp}>
                    Kelompok {grp}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Schedule Cards / Table */}
        {filteredSchedule.length === 0 ? (
          <div className="p-10 text-center bg-slate-50 border border-dashed border-slate-300 rounded-xl">
            <p className="text-sm font-semibold text-slate-700">Tidak ada jadwal praktikum yang cocok</p>
            <p className="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau filter kelompok.</p>
            <button
              onClick={() => {
                setSelectedDay('all');
                setSelectedGroup('all');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-medium text-blue-900 bg-white border border-slate-300 rounded-md hover:bg-slate-100"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="divide-y divide-slate-200 bg-white">
              {filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  {/* Left: Group & Module */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">KLMPK</span>
                      <span className="text-base font-bold font-mono leading-none">{item.groupNumber}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                        <span className="font-semibold text-blue-900">{item.day}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.shift}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {item.moduleCode}: {item.moduleTitle}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{item.room}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Lead Assistant & Week indicator */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-2 border-t md:border-t-0 pt-2 md:pt-0 border-slate-100 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      <User className="w-3.5 h-3.5 text-blue-900" />
                      <span className="font-medium">Aslab: {item.leadAssistant}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      Sesi Minggu ke-{item.weekSession}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practicum Advisory Box */}
        <div className="mt-6 p-4 bg-amber-50/60 border border-amber-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 space-y-1">
            <span className="font-semibold text-slate-900">Ketentuan Kehadiran Shift Praktikum:</span>
            <p>
              1. Praktikan wajib hadir di laboratorium selambat-lambatnya <strong>15 menit sebelum shift dimulai</strong> untuk mengikuti pre-test dan briefing safety.
            </p>
            <p>
              2. Keterlambatan lebih dari 10 menit tanpa konfirmasi akan dikenakan sanksi tidak diperkenankan mengikuti modul praktikum dan wajib mengajukan inhal atas persetujuan Koordinator Asisten.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
