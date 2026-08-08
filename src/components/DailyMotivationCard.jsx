import React, { useState } from 'react';
import { Sparkles, RefreshCw, TrendingUp, Award, Zap } from 'lucide-react';

export default function DailyMotivationCard({ student }) {
  const currentDay = student?.currentDay || 12;
  const remainingDays = (student?.totalDays || 60) - currentDay;

  const messages = [
    {
      highlight: "You are ahead of 68% of students.",
      subtext: "Consistency is your superpower. Keep building daily to join the top 10% graduates.",
      icon: TrendingUp,
      badge: "Top 32% Leaderboard"
    },
    {
      highlight: `You've already completed ${student?.completedDays?.length || 11} days.`,
      subtext: "Your GitHub matrix is turning bright green. Recruiter interest increases after Day 15!",
      icon: Award,
      badge: "Commit Proof Active"
    },
    {
      highlight: `Only ${remainingDays} days left.`,
      subtext: "Stay continuous! In less than 7 weeks you'll have 60 verified projects in your portfolio.",
      icon: Zap,
      badge: "60-Day Sprint"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const currentMsg = messages[currentIndex];
  const IconComponent = currentMsg.icon;

  return (
    <div className="glass-panel p-5 rounded-2xl border-amber-500/30 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 shadow-lg relative overflow-hidden group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
            <IconComponent className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                Daily Motivation
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                {currentMsg.badge}
              </span>
            </div>

            <h4 className="text-sm font-extrabold text-white tracking-tight">
              "{currentMsg.highlight}"
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
              {currentMsg.subtext}
            </p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-amber-400 border border-white/5 transition-all shrink-0 active:scale-90"
          title="Rotate motivational insight"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
