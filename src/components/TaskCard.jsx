import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, CheckCircle, Code2, Sparkles, BookOpen, Flame } from 'lucide-react';

export default function TaskCard({ task, isCompleted = false, missedYesterday = false }) {
  if (!task) return null;

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-3xl border-orange-500/40 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900 shadow-xl glow-orange relative overflow-hidden group">
      
      {/* Top Banner Accent */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm shadow-orange-500/30 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-white animate-flame" /> Today's Challenge
          </span>
          <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
            Day {task.dayNumber} of 60
          </span>
        </div>

        {/* Status Badge */}
        {isCompleted ? (
          <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5" /> Completed
          </span>
        ) : missedYesterday ? (
          <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full animate-pulse">
            Recovery Challenge
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" /> In Progress
          </span>
        )}
      </div>

      {/* Task Title */}
      <h2 className="text-lg sm:text-xl font-black text-white group-hover:text-orange-400 transition-colors leading-tight mb-2">
        {task.title}
      </h2>

      {/* Description */}
      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
        {task.description}
      </p>

      {/* Details Row: Difficulty, Estimated Time & Prominent CTA Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/10">
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-300">
          <span className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1.5 rounded-xl border border-white/5">
            <Clock className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Estimated Time: <strong className="text-white">{task.estimatedMinutes} mins</strong></span>
          </span>

          <span className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1.5 rounded-xl border border-white/5">
            <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Difficulty: <strong className="text-white">{task.difficulty}</strong></span>
          </span>
        </div>

        <Link
          to={`/day/${task.dayNumber}`}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 active:scale-95 transition-all group-hover:shadow-orange-500/50"
        >
          <span>{isCompleted ? 'View Submission' : 'Continue Challenge →'}</span>
        </Link>
      </div>

    </div>
  );
}
