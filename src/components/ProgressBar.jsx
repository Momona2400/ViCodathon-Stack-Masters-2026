import React from 'react';
import { Target, Flag, Award, Calendar, Sparkles } from 'lucide-react';

export default function ProgressBar({ currentDay = 12, totalDays = 60, completedDaysCount = 11 }) {
  const percentage = Math.min(100, Math.round((completedDaysCount / totalDays) * 100));
  const remainingDays = totalDays - currentDay; // e.g. 60 - 12 = 48 Days Remaining

  // Calculate current week out of total 8 weeks (60 days = 8.5 weeks -> 8 main milestone weeks)
  const currentWeek = Math.ceil(currentDay / 7);
  const totalWeeks = 8;

  // SVG Circular Progress Calculations
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="glass-panel p-5 rounded-2xl border-white/10 bg-slate-900/90 space-y-4 shadow-md">
      
      {/* Top Info Row with SVG Circular Progress Indicator */}
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
              Current Week
            </span>
            <span className="text-xs font-extrabold text-slate-200 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> Week {currentWeek} of {totalWeeks}
            </span>
          </div>

          <h3 className="text-lg font-black text-white tracking-tight">
            Day {currentDay} <span className="text-slate-400 font-medium text-sm">/ {totalDays}</span>
          </h3>

          <p className="text-xs text-slate-300 font-semibold flex items-center gap-1">
            <Flag className="w-3.5 h-3.5 text-amber-400" /> {remainingDays} Days Remaining
          </p>
        </div>

        {/* Circular Completion Indicator */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg className="w-16 h-16 transform -rotate-90">
            {/* Background circle track */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="6"
              fill="transparent"
            />
            {/* Animated progress circle */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="url(#progress-gradient)"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Percentage Label */}
          <span className="absolute text-xs font-black text-white">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Modern Gradient Animated Progress Bar */}
      <div className="space-y-1.5">
        <div className="relative w-full h-3.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 rounded-full transition-all duration-700 ease-out shadow-lg shadow-orange-500/50 relative"
            style={{ width: `${percentage}%` }}
          >
            {/* Shimmer highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>{completedDaysCount} Days Completed</span>
          <span className="text-amber-400 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> 80% to Week 2 Milestone
          </span>
        </div>
      </div>

    </div>
  );
}

