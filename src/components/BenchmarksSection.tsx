import React, { useState } from 'react';
import { BenchmarkModel } from '../types';
import { useLanguage } from '../i18n';

const models: BenchmarkModel[] = [
  {
    id: 'qwen-vl',
    name: 'Qwen2.5-72B',
    parameters: '72B Dense (前沿开源基座)',
    accuracyLoss: '0.3%',
    ttftPlaintext: 320,
    ttftSafeCompute: 345,
    tpotPlaintext: 16.5,
    tpotSafeCompute: 17.8,
    recoveryRisk: '1.6%',
    evalDatasets: ['MMMU (58.4%)', 'DocVQA (95.1%)', 'MathVista (68.2%)'],
  },
  {
    id: 'moe-frontier',
    name: 'DeepSeek-V3.1 (MoE)',
    parameters: 'Ultra-large MoE (超大 MoE 架构)',
    accuracyLoss: '0.4%',
    ttftPlaintext: 380,
    ttftSafeCompute: 412,
    tpotPlaintext: 18.2,
    tpotSafeCompute: 19.8,
    recoveryRisk: '1.8%',
    evalDatasets: ['MMLU (88.5%)', 'HumanEval (82.6%)', 'GSM8K (91.2%)'],
  },
  {
    id: 'llama-3',
    name: 'LLaMA-3.3 70B',
    parameters: '70B Dense (大型稠密模型)',
    accuracyLoss: '0.5%',
    ttftPlaintext: 240,
    ttftSafeCompute: 261,
    tpotPlaintext: 14.5,
    tpotSafeCompute: 15.7,
    recoveryRisk: '2.1%',
    evalDatasets: ['MMLU (82.0%)', 'HumanEval (81.7%)', 'MATH (50.4%)'],
  },
  {
    id: 'qwen-7b',
    name: 'Qwen-2.5 7B',
    parameters: '7B Dense (轻量端侧/边缘架构)',
    accuracyLoss: '0.2%',
    ttftPlaintext: 110,
    ttftSafeCompute: 118,
    tpotPlaintext: 8.5,
    tpotSafeCompute: 9.1,
    recoveryRisk: '1.5%',
    evalDatasets: ['MMLU (74.8%)', 'HumanEval (75.6%)', 'GSM8K (82.4%)'],
  },
];

export const BenchmarksSection: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>('qwen-vl');
  const activeModel = models.find((m) => m.id === selectedModelId) || models[0];
  const { t } = useLanguage();
  const bench = t.benchmarks;

  return (
    <section id="benchmarks" className="py-24 bg-[#0B0E14] relative">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            {bench.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {bench.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {bench.subtitle}
          </p>
        </div>

        {/* 3 Large Circular Gauges / Counter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Gauge 1: Accuracy Preservation */}
          <div className="p-8 rounded-3xl bg-[#121722]/80 border border-emerald-500/30 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="w-40 h-40 rounded-full border-4 border-emerald-500/30 flex items-center justify-center p-3 relative mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-400 border-t-transparent animate-spin" style={{ animationDuration: '8s' }} />
              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
                  {bench.gauge1.range}
                </span>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {bench.gauge1.unit}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{bench.gauge1.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {bench.gauge1.desc}
            </p>
          </div>

          {/* Gauge 2: Latency Overhead */}
          <div className="p-8 rounded-3xl bg-[#121722]/80 border border-cyan-500/30 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="w-40 h-40 rounded-full border-4 border-cyan-500/30 flex items-center justify-center p-3 relative mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" style={{ animationDuration: '6s' }} />
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                  {bench.gauge2.value}
                </span>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {bench.gauge2.unit}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{bench.gauge2.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {bench.gauge2.desc}
            </p>
          </div>

          {/* Gauge 3: Attack Resistance */}
          <div className="p-8 rounded-3xl bg-[#121722]/80 border border-amber-500/30 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="w-40 h-40 rounded-full border-4 border-amber-500/30 flex items-center justify-center p-3 relative mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" style={{ animationDuration: '10s' }} />
              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">
                  {bench.gauge3.value}
                </span>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {bench.gauge3.unit}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{bench.gauge3.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {bench.gauge3.desc}
            </p>
          </div>

        </div>

        {/* Interactive Benchmark Data Explorer */}
        <div className="p-8 rounded-3xl bg-[#121722]/90 border border-[#1E2638] shadow-2xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1E2638]">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{bench.latencyChartTitle}</span>
              <h3 className="text-xl font-bold text-white">{bench.modelSelectorLabel}</h3>
            </div>

            {/* Model Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#0B0E14] rounded-xl border border-[#1E2638]">
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModelId(m.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedModelId === m.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* Model Metrics Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
            
            {/* TTFT Bar Chart */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{bench.ttftLabel}</span>
                <span className="text-slate-500">Lower is better</span>
              </div>

              {/* Bar 1: Plaintext */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>{bench.baselineCloud}</span>
                  <span className="font-mono text-white">{activeModel.ttftPlaintext} ms</span>
                </div>
                <div className="h-3 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-600 rounded-full" 
                    style={{ width: `${(activeModel.ttftPlaintext / 500) * 100}%` }}
                  />
                </div>
              </div>

              {/* Bar 2: SafeCompute */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>SafeCompute (CovarPri + TEE)</span>
                  <span className="font-mono">{activeModel.ttftSafeCompute} ms (+{Math.round(((activeModel.ttftSafeCompute - activeModel.ttftPlaintext) / activeModel.ttftPlaintext) * 100)}%)</span>
                </div>
                <div className="h-3 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" 
                    style={{ width: `${(activeModel.ttftSafeCompute / 500) * 100}%` }}
                  />
                </div>
              </div>

              {/* Bar 3: Traditional FHE */}
              <div className="space-y-1 text-xs opacity-75">
                <div className="flex justify-between text-rose-400">
                  <span>Traditional FHE</span>
                  <span className="font-mono">&gt; 120,000 ms</span>
                </div>
                <div className="h-3 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500/80 rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* Token Generation Speed (TPOT) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{bench.tpotLabel}</span>
                <span className="text-slate-500">ms / token</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#1E2638] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{bench.baselineCloud}:</span>
                  <span className="font-mono text-white font-bold">{activeModel.tpotPlaintext} ms/tok</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400">SafeCompute Throughput:</span>
                  <span className="font-mono text-emerald-400 font-bold">{activeModel.tpotSafeCompute} ms/tok</span>
                </div>
                <div className="pt-2 border-t border-[#1E2638] flex items-center justify-between text-[11px] text-slate-400">
                  <span>Effective Speed:</span>
                  <span className="text-cyan-400 font-mono">~{Math.round(1000 / activeModel.tpotSafeCompute)} tokens/sec</span>
                </div>
              </div>
            </div>

            {/* Attack Inversion Risk */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{bench.recoveryRisk}</span>
                <span className="text-slate-500">ISA / VMA Attack</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#1E2638] space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Recovery Risk:</span>
                  <span className="font-mono text-emerald-400 font-bold">{activeModel.recoveryRisk}</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Adversary with full root hypervisor access cannot reconstruct prompts above random baseline noise.
                </p>
                <div className="pt-2 border-t border-[#1E2638] flex flex-wrap gap-1">
                  {activeModel.evalDatasets.map((ds) => (
                    <span key={ds} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121722] text-slate-300 border border-slate-700">
                      {ds}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
