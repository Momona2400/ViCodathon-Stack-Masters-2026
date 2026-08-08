import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Clock, Code2, ArrowRight, CheckCircle2, Lock, Sparkles, Calendar } from 'lucide-react';

export default function DailyMomentumCard({ task, student }) {
  const currentStreak = student?.streak || 12;
  const missedYesterday = student?.missedYesterday || false;
  const isCompleted = student?.completedDays && student?.completedDays.includes(student.currentDay);

  return (
    <div className="glass-panel p-6 rounded-3xl border-2 border-orange-500/50 bg-gradient-to-br from-slate-900 via-orange-950/30 to-slate-900 shadow-2xl glow-orange relative overflow-hidden group transition-all duration-300 hover:border-orange-500/70">
      
      {/* Background glowing aura */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl group-hover:bg-orange-500/25 transition-all pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-0.5 shadow-md shadow-orange-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-flame" />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 block">
              Core Engine
            </span>
            <h2 className="text-base font-black text-white tracking-tight flex items-center gap-1.5">
              🔥 Daily Momentum
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-xl text-xs font-mono font-black bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
            Current Streak: {currentStreak} Days
          </span>
        </div>
      </div>

      {/* 3-Step Timeline Tracker: Yesterday, Today, Tomorrow */}
      <div className="grid grid-cols-3 gap-2.5 my-4 relative z-10">
        {/* Yesterday */}
        <div className={`p-3 rounded-2xl border text-center transition-all ${
          missedYesterday 
            ? 'bg-rose-500/10 border-rose-500/30 text-rose-300' 
            : 'bg-slate-950/70 border-emerald-500/30 text-emerald-400'
        }`}>
          <span className="text-[10px] font-extrabold uppercase tracking-wider block text-slate-400 mb-1">
            Yesterday
          </span>
          <div className="flex items-center justify-center gap-1 text-xs font-bold">
            {missedYesterday ? (
              <>
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-rose-300">Missed</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Completed</span>
              </>
            )}
          </div>
        </div>

        {/* Today */}
        <div className={`p-3 rounded-2xl border text-center relative overflow-hidden transition-all ${
          isCompleted 
            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/50'
            : 'bg-orange-500/15 border-orange-500/50 text-orange-300 ring-2 ring-orange-500/40 shadow-lg shadow-orange-500/20'
        }`}>
          <span className="text-[10px] font-extrabold uppercase tracking-wider block text-orange-300/90 mb-1">
            Today (Day {task?.dayNumber || 12})
          </span>
          <div className="flex items-center justify-center gap-1 text-xs font-extrabold">
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Completed</span>
              </>
            ) : (
              <>
                <Clock className="w-4 h-4 text-orange-400 animate-spin-slow" />
                <span className="text-white">In Progress</span>
              </>
            )}
          </div>
        </div>

        {/* Tomorrow */}
        <div className="p-3 rounded-2xl border border-white/5 bg-slate-950/40 text-center opacity-60">
          <span className="text-[10px] font-extrabold uppercase tracking-wider block text-slate-400 mb-1">
            Tomorrow
          </span>
          <div className="flex items-center justify-center gap-1 text-xs font-semibold text-slate-400">
            <Lock className="w-3.5 h-3.5" />
            <span>Locked</span>
          </div>
        </div>
      </div>

      {/* Task Meta Details Row */}
      <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/10 space-y-3 relative z-10 my-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-sm">
              {task?.title || "Responsive Navbar"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300 pt-1 border-t border-white/5">
          <span className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-white/5">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>Estimated Time: <strong className="text-white">{task?.estimatedMinutes || 45} mins</strong></span>
          </span>

          <span className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-white/5">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Challenge Difficulty: <strong className="text-white">{task?.difficulty || 'Intermediate'}</strong></span>
          </span>
        </div>
      </div>

      {/* Motivational Text & CTA Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 relative z-10">
        <p className="text-xs text-amber-300/90 font-medium italic flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>"Don't break your streak today."</span>
        </p>

        <Link
          to={`/day/${task?.dayNumber || 12}`}
          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xl shadow-orange-500/40 active:scale-95 transition-all group/btn"
        >
          <span>{isCompleted ? 'View Today\'s Submission' : 'Continue Today\'s Challenge →'}</span>
        </Link>
      </div>

    </div>
  );
}
