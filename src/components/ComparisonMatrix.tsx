import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../i18n';

export const ComparisonMatrix: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number>(3); // SafeCompute selected by default
  const { t } = useLanguage();
  const mat = t.comparisonMatrix;

  const selectedData = mat.rows[selectedRow] || mat.rows[3];

  return (
    <section id="comparison-matrix" className="py-24 bg-[#0B0E14] relative border-t border-[#1E2638]">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            {mat.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {mat.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {mat.subtitle}
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-[#1E2638] bg-[#121722]/80 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-[#1E2638] bg-[#0E131E]/90 text-xs font-mono text-slate-300 uppercase tracking-wider">
                <th className="py-5 px-6 font-semibold">{mat.columns.architecture}</th>
                <th className="py-5 px-6 font-semibold">{mat.columns.privacy}</th>
                <th className="py-5 px-6 font-semibold">{mat.columns.latency}</th>
                <th className="py-5 px-6 font-semibold">{mat.columns.accuracy}</th>
                <th className="py-5 px-6 font-semibold">{mat.columns.firewall}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2638]/70 text-sm">
              {mat.rows.map((row, idx) => {
                const isSafeCompute = idx === 3;
                const isSelected = selectedRow === idx;

                return (
                  <tr
                    key={row.architecture}
                    onClick={() => setSelectedRow(idx)}
                    className={`cursor-pointer transition-colors ${
                      isSafeCompute 
                        ? 'bg-gradient-to-r from-emerald-950/30 via-[#121E2A] to-emerald-950/20 hover:from-emerald-950/40 hover:to-emerald-950/30 font-medium' 
                        : isSelected 
                        ? 'bg-[#151C2C]' 
                        : 'hover:bg-[#151C2C]/50'
                    }`}
                  >
                    {/* Architecture Name */}
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        {isSafeCompute && (
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                        )}
                        <span className={`font-semibold ${isSafeCompute ? 'text-emerald-300 text-base' : 'text-slate-200'}`}>
                          {row.architecture}
                        </span>
                      </div>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded mt-1 inline-block ${
                        isSafeCompute 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {row.badge}
                      </span>
                    </td>

                    {/* Encrypted Compute */}
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-slate-200">
                        {row.privacyText}
                      </span>
                    </td>

                    {/* Latency */}
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-slate-200">
                        {row.latencyText}
                      </span>
                    </td>

                    {/* Accuracy */}
                    <td className="py-5 px-6">
                      <span className="text-emerald-400 font-semibold">
                        {row.accuracyText}
                      </span>
                    </td>

                    {/* Action Firewall */}
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-slate-200">
                        {row.firewallText}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Row Deep-Dive Card */}
        <div className="mt-8 p-6 rounded-2xl bg-[#121722]/90 border border-emerald-500/30 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Info className="w-4 h-4 text-cyan-400" />
            <span>{mat.callout.title}: {selectedData.architecture}</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 text-xs">
            <div className="p-3 bg-[#0B0E14] rounded-xl border border-[#1E2638]">
              <span className="text-slate-400 font-mono block mb-1">{mat.columns.privacy}</span>
              <p className="text-slate-200">{selectedData.privacyDetails}</p>
            </div>
            <div className="p-3 bg-[#0B0E14] rounded-xl border border-[#1E2638]">
              <span className="text-slate-400 font-mono block mb-1">{mat.columns.latency}</span>
              <p className="text-slate-200">{selectedData.latencyDetails}</p>
            </div>
            <div className="p-3 bg-[#0B0E14] rounded-xl border border-[#1E2638]">
              <span className="text-slate-400 font-mono block mb-1">{mat.columns.accuracy}</span>
              <p className="text-slate-200">{selectedData.accuracyDetails}</p>
            </div>
            <div className="p-3 bg-[#0B0E14] rounded-xl border border-[#1E2638]">
              <span className="text-slate-400 font-mono block mb-1">{mat.columns.firewall}</span>
              <p className="text-slate-200">{selectedData.firewallDetails}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
