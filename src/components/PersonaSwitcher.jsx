import React from 'react';
import { Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export default function PersonaSwitcher({ activePresetKey, onSelectPreset }) {
  const presets = [
    { key: 'active', label: '🔥 Active (12 Streak)', color: 'from-orange-500/20 to-amber-500/20 border-orange-500/40 text-orange-400' },
    { key: 'zeroStreak', label: '💥 Streak = 0', color: 'from-slate-800 to-slate-700 border-slate-600 text-slate-300' },
    { key: 'missedDay', label: '⚠️ Missed Yesterday', color: 'from-rose-500/20 to-amber-500/20 border-rose-500/40 text-rose-400' },
    { key: 'emptyAchievements', label: '🏆 Empty Achievements', color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400' },
  ];

  return (
    <div className="w-full bg-[#0d1424] border-b border-orange-500/20 py-2.5 px-4 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Banner Label */}
        <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
          <span className="p-1 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30 animate-pulse">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </span>
          <span className="tracking-wide">EDGE CASE TESTER:</span>
          <span className="text-slate-400 font-normal hidden xs:inline">Toggle student state to verify requirements</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
          {presets.map((preset) => {
            const isSelected = activePresetKey === preset.key;
            return (
              <button
                key={preset.key}
                onClick={() => onSelectPreset(preset.key)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1 border ${
                  isSelected 
                    ? `bg-gradient-to-r ${preset.color} ring-1 ring-orange-400 shadow-sm` 
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-3 h-3 text-orange-400" />}
                <span>{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
