import React, { useState } from 'react';
import { Menu, X, Calculator, Download, FlaskConical } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#modul', label: 'Modul Praktikum' },
    { href: '#jadwal', label: 'Jadwal & Shift' },
    { href: '#asisten', label: 'Asisten Lab' },
    { href: '#lampiran', label: 'Lampiran & Format' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-900 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-white shadow-xs">
              <FlaskConical className="w-4 h-4 text-amber-400" />
            </div>
            <span>LAB PKB UPNVYK</span>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-blue-900 font-semibold border-b-2 border-blue-900 pb-0.5'
                      : 'hover:text-slate-950'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-200"
              title="Kalkulator Uji Tarik & Kekerasan Brinell"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-900" />
              <span>Kalkulator Uji</span>
            </button>
            <a
              href="#modul"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Buku Panduan PDF</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCalculator}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Buka Kalkulator"
            >
              <Calculator className="w-5 h-5 text-blue-900" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
            Menu Navigasi
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-950 hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Calculator className="w-4 h-4 text-blue-900" />
              <span>Kalkulator Uji Material</span>
            </button>
            <a
              href="#modul"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-950 rounded-lg hover:bg-blue-900 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Modul Lengkap</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
