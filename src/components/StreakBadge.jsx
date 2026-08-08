import React from 'react';
import { Flame, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function StreakBadge({ streak = 0, missedYesterday = false }) {
  if (missedYesterday) {
    return (
      <div className="glass-panel p-4 rounded-2xl border-rose-500/30 bg-gradient-to-r from-rose-950/30 via-slate-900 to-amber-950/20 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-rose-400 animate-bounce" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Streak Alert</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Action Required
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mt-0.5">Missed Yesterday's Task!</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Your 11-day streak is frozen. Complete Day 12 before midnight to salvage your momentum!
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (streak === 0) {
    return (
      <div className="glass-panel p-4 rounded-2xl border-amber-500/20 bg-gradient-to-br from-slate-900 via-amber-950/10 to-slate-900 shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 text-slate-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white">0 Days</span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-500/20">
                Fresh Start
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Ignite your flame today! Complete Day 1 to start your 60-day streak.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-4 rounded-2xl border-orange-500/30 bg-gradient-to-br from-orange-950/20 via-slate-900 to-amber-950/20 shadow-lg glow-orange">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 p-0.5 shadow-lg shadow-orange-500/30 shrink-0">
            <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-flame" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tight">{streak} Days</span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 animate-pulse">
                On Fire 🔥
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Perfect active streak maintained
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
