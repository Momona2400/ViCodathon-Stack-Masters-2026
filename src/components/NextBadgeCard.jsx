import React from 'react';
import { Award, Sparkles } from 'lucide-react';

export default function NextBadgeCard({ currentDays = 8, targetDays = 10, badgeTitle = "Frontend Explorer" }) {
  const percentage = Math.min(100, Math.round((currentDays / targetDays) * 100));

  return (
    <div className="glass-panel p-5 rounded-2xl border-purple-500/30 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900 shadow-lg glow-purple relative overflow-hidden group">
      {/* Background glow accent */}
      <div className="absolute -right-8 -top-8 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 block">Next Badge Milestone</span>
            <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5">
              🏅 {badgeTitle}
            </h3>
          </div>
        </div>

        <span className="text-xs font-mono font-black text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-lg border border-purple-500/30 shrink-0">
          {currentDays} / {targetDays} Days
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-full transition-all duration-700 ease-out shadow-sm shadow-purple-500/50"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-300">
          <span className="flex items-center gap-1 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Reward: <strong className="text-white font-extrabold">Exclusive Badge</strong>
          </span>
          <span className="font-bold text-purple-400 font-mono">{targetDays - currentDays} days left</span>
        </div>
      </div>
    </div>
  );
}

