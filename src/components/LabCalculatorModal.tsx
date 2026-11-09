import React, { useState } from 'react';
import { X, Calculator, Activity, ArrowRight, RotateCcw } from 'lucide-react';

interface LabCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LabCalculatorModal: React.FC<LabCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tensile' | 'brinell'>('tensile');

  // Tensile State
  const [specimenType, setSpecimenType] = useState<'round' | 'flat'>('round');
  const [diameter, setDiameter] = useState<number>(12.8);
  const [gaugeLength, setGaugeLength] = useState<number>(50.0);
  const [yieldLoad, setYieldLoad] = useState<number>(42.5); // kN
  const [maxLoad, setMaxLoad] = useState<number>(68.2); // kN
  const [finalLength, setFinalLength] = useState<number>(62.4); // mm
  const [finalDiameter, setFinalDiameter] = useState<number>(9.6); // mm

  // Brinell State
  const [brinellLoad, setBrinellLoad] = useState<number>(3000); // kgf
  const [ballDiameter, setBallDiameter] = useState<number>(10); // mm
  const [indentDiameter, setIndentDiameter] = useState<number>(4.2); // mm

  if (!isOpen) return null;

  // Tensile Calculations
  const initialArea = specimenType === 'round'
    ? (Math.PI / 4) * Math.pow(diameter, 2)
    : 100; // default mm2

  const finalArea = specimenType === 'round'
    ? (Math.PI / 4) * Math.pow(finalDiameter, 2)
    : 70;

  const yieldStrength = initialArea > 0 ? (yieldLoad * 1000) / initialArea : 0; // MPa
  const ultimateTensileStrength = initialArea > 0 ? (maxLoad * 1000) / initialArea : 0; // MPa
  const elongationPercent = gaugeLength > 0 ? ((finalLength - gaugeLength) / gaugeLength) * 100 : 0;
  const reductionOfArea = initialArea > 0 ? ((initialArea - finalArea) / initialArea) * 100 : 0;

  // Brinell Calculation
  // BHN = 2P / [pi * D * (D - sqrt(D^2 - d^2))]
  const calcBrinell = () => {
    const P = brinellLoad;
    const D = ballDiameter;
    const d = indentDiameter;
    if (d >= D || d <= 0) return 0;
    const denominator = Math.PI * D * (D - Math.sqrt(Math.pow(D, 2) - Math.pow(d, 2)));
    if (denominator <= 0) return 0;
    return (2 * P) / denominator;
  };

  const bhnResult = calcBrinell();
  // Approx UTS from BHN for carbon steel: UTS ~ 3.45 * BHN (MPa)
  const approxUtsFromBhn = bhnResult * 3.45;

  const loadTensilePreset = (name: 'st37' | '1045' | 'al6061') => {
    if (name === 'st37') {
      setDiameter(12.8);
      setGaugeLength(50.0);
      setYieldLoad(31.5);
      setMaxLoad(52.8);
      setFinalLength(63.5);
      setFinalDiameter(9.2);
    } else if (name === '1045') {
      setDiameter(12.8);
      setGaugeLength(50.0);
      setYieldLoad(53.2);
      setMaxLoad(85.4);
      setFinalLength(58.5);
      setFinalDiameter(10.5);
    } else {
      setDiameter(12.8);
      setGaugeLength(50.0);
      setYieldLoad(35.5);
      setMaxLoad(40.2);
      setFinalLength(56.0);
      setFinalDiameter(11.2);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/65 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between gap-4 bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-950 text-white flex items-center justify-center">
              <Calculator className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Kalkulator Verifikasi Pengujian Bahan
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Alat bantu asistensi pengolahan data uji mekanik standar ASTM
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Tutup Kalkulator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-5 pt-3 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('tensile')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'tensile'
                ? 'border-blue-900 text-blue-950 font-bold bg-white rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Uji Tarik (Tensile Test - ASTM E8)
          </button>
          <button
            onClick={() => setActiveTab('brinell')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'brinell'
                ? 'border-blue-900 text-blue-950 font-bold bg-white rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Uji Kekerasan Brinell (ASTM E10)
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: TENSILE TEST */}
          {activeTab === 'tensile' && (
            <div className="space-y-6">
              
              {/* Presets */}
              <div className="flex items-center justify-between gap-2 p-2.5 bg-slate-100 rounded-lg text-xs">
                <span className="font-semibold text-slate-700">Contoh Data Bahan:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => loadTensilePreset('st37')}
                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-300 text-slate-700 font-medium"
                  >
                    Baja Karbon ST37
                  </button>
                  <button
                    onClick={() => loadTensilePreset('1045')}
                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-300 text-slate-700 font-medium"
                  >
                    Baja AISI 1045
                  </button>
                  <button
                    onClick={() => loadTensilePreset('al6061')}
                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-300 text-slate-700 font-medium"
                  >
                    Aluminium 6061-T6
                  </button>
                </div>
              </div>

              {/* Input Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                    Dimensi Spesimen Standar (ASTM E8)
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      Diameter Awal Spesimen (d₀) [mm]:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={diameter}
                      onChange={(e) => setDiameter(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      Panjang Ukur Awal (Gauge Length, L₀) [mm]:
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={gaugeLength}
                      onChange={(e) => setGaugeLength(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      Diameter Akhir Patah (d_f) [mm]:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={finalDiameter}
                      onChange={(e) => setFinalDiameter(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      Panjang Akhir Setelah Patah (L_f) [mm]:
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={finalLength}
                      onChange={(e) => setFinalLength(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                    Data Beban Uji Mesin UTM
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      Beban Luluh (Yield Load, F_y) [kN]:
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={yieldLoad}
                      onChange={(e) => setYieldLoad(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      Beban Maksimum (Peak Load, F_max) [kN]:
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={maxLoad}
                      onChange={(e) => setMaxLoad(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-600 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-slate-500">
                      Formula Perhitungan:
                    </div>
                    <div className="font-mono text-[11px] text-blue-950 font-semibold">
                      σ_y = F_y / A₀ · σ_uts = F_max / A₀
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Luas Penampang Awal A₀ = {initialArea.toFixed(2)} mm²
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculated Results Banner */}
              <div className="p-4 bg-blue-950 text-white rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-800">
                  <div className="text-[11px] text-blue-200">Kekuatan Luluh (σ_y)</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-amber-300">
                    {yieldStrength.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-blue-300 font-mono">MPa (N/mm²)</div>
                </div>

                <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-800">
                  <div className="text-[11px] text-blue-200">Kekuatan Tarik (UTS)</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {ultimateTensileStrength.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-blue-300 font-mono">MPa (N/mm²)</div>
                </div>

                <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-800">
                  <div className="text-[11px] text-blue-200">% Elongasi (Keuletan)</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-300">
                    {elongationPercent.toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-blue-300 font-mono">Perpanjangan</div>
                </div>

                <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-800">
                  <div className="text-[11px] text-blue-200">% Reduksi Penampang</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">
                    {reductionOfArea.toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-blue-300 font-mono">Area Reduction</div>
                </div>
              </div>

              {/* Dynamic SVG Stress-Strain Curve */}
              <div className="p-4 bg-slate-900 text-white rounded-xl">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-slate-300">Kurva Karakteristik Tegangan vs. Regangan (Engineering Stress-Strain)</span>
                  <span className="font-mono text-amber-300 text-[11px]">ASTM E8 Plot</span>
                </div>
                
                <div className="w-full h-40 bg-slate-950 rounded-lg border border-slate-800 p-2 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 500 140" fill="none">
                    {/* Grid lines */}
                    <line x1="40" y1="120" x2="480" y2="120" stroke="#334155" strokeWidth="1" />
                    <line x1="40" y1="20" x2="40" y2="120" stroke="#334155" strokeWidth="1" />
                    <line x1="40" y1="70" x2="480" y2="70" stroke="#1e293b" strokeDasharray="4 4" />
                    
                    {/* Curve */}
                    <path
                      d="M 40 120 L 100 60 Q 180 30 320 35 Q 400 45 440 75"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      fill="none"
                    />

                    {/* Point Yield */}
                    <circle cx="100" cy="60" r="4" fill="#f59e0b" />
                    <text x="105" y="55" fill="#f59e0b" fontSize="10" fontFamily="monospace">
                      Yield Point ({yieldStrength.toFixed(0)} MPa)
                    </text>

                    {/* Point UTS */}
                    <circle cx="320" cy="35" r="4" fill="#ffffff" />
                    <text x="325" y="30" fill="#ffffff" fontSize="10" fontFamily="monospace">
                      UTS ({ultimateTensileStrength.toFixed(0)} MPa)
                    </text>

                    {/* Point Fracture */}
                    <circle cx="440" cy="75" r="4" fill="#ef4444" />
                    <text x="400" y="95" fill="#ef4444" fontSize="10" fontFamily="monospace">
                      Patah (Fracture)
                    </text>

                    {/* Axis Labels */}
                    <text x="440" y="135" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                      Regangan (ε) →
                    </text>
                    <text x="5" y="25" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                      Tegangan (σ) ↑
                    </text>
                  </svg>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BRINELL HARDNESS */}
          {activeTab === 'brinell' && (
            <div className="space-y-6 text-xs">
              
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-slate-800">
                <span className="font-semibold text-slate-900">Ketentuan Pengujian Brinell (ASTM E10):</span>
                <p className="mt-0.5 text-slate-600">
                  Untuk baja dan besi cor, beban standar P = 3000 kgf dengan diameter bola D = 10 mm (rasio P/D² = 30). Waktu pembebanan (dwell time) standar 10 - 15 detik.
                </p>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    Beban Uji (P) [kgf]:
                  </label>
                  <select
                    value={brinellLoad}
                    onChange={(e) => setBrinellLoad(parseFloat(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900"
                  >
                    <option value={3000}>3000 kgf (Baja & Besi Cor)</option>
                    <option value={1500}>1500 kgf (Paduan Tembaga/Kuningan)</option>
                    <option value={500}>500 kgf (Paduan Aluminium/Alloy)</option>
                  </select>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    Diameter Bola Indentor (D) [mm]:
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={ballDiameter}
                    onChange={(e) => setBallDiameter(parseFloat(e.target.value) || 10)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                  />
                  <div className="text-[10px] text-slate-500">Standar ASTM: 10 mm</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    Rerata Diameter Jejak (d) [mm]:
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={indentDiameter}
                    onChange={(e) => setIndentDiameter(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono text-slate-900"
                  />
                  <div className="text-[10px] text-slate-500">Diukur dengan mikroskop pengukur jejak</div>
                </div>
              </div>

              {/* Result Card */}
              <div className="p-5 bg-blue-950 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-blue-200 uppercase tracking-wider">
                    Angka Kekerasan Brinell (Brinell Hardness Number)
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-amber-300 my-1">
                    {bhnResult > 0 ? bhnResult.toFixed(1) : 'Input Tidak Valid'} <span className="text-lg text-white font-sans">HBW</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Notasi Standar: {bhnResult.toFixed(0)} HBW {ballDiameter}/{brinellLoad}
                  </div>
                </div>

                <div className="p-3 bg-blue-900/60 rounded-lg border border-blue-800 text-right sm:text-right text-xs">
                  <div className="text-slate-300">Perkiraan Kekuatan Tarik (UTS Aproksimatif):</div>
                  <div className="text-lg font-bold font-mono text-emerald-300 mt-0.5">
                    ~ {approxUtsFromBhn.toFixed(0)} MPa
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Korelasi: UTS ≈ 3.45 × BHN
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs shrink-0">
          <div className="text-slate-500 font-mono text-[11px]">
            *Gunakan kalkulator ini untuk memverifikasi data sebelum asistensi dengan asisten modul.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
