import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Lock, Trophy, Sparkles, ArrowRight } from 'lucide-react';

export default function AchievementCard({ achievements = [] }) {
  // Requirement 15: Empty Achievement State
  if (!achievements || achievements.length === 0) {
    return (
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 text-center space-y-4 bg-slate-900/80 glow-purple">
        <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/30 mx-auto flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
          <Trophy className="w-8 h-8" />
        </div>

        <div className="max-w-xs mx-auto space-y-1.5">
          <h4 className="text-base font-extrabold text-white">No achievements yet.</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Complete your first challenge to unlock <strong className="text-orange-400">First Commit Badge</strong>.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/day/12"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/30 active:scale-95 transition-all"
          >
            <span>Start Today's Challenge →</span>
          </Link>
        </div>
      </div>
    );
  }

  // Requirement 18: Achievement Timeline View
  // 🏅 First Commit ✅, 🏅 7-Day Streak ✅, 🏅 30-Day Warrior 🔒, 🏅 Halfway Hero 🔒, 🏅 60-Day Legend 🔒
  const timelineMilestones = [
    { title: "First Commit Badge", icon: "🏅", status: "completed", date: "Jul 27" },
    { title: "7-Day Streak", icon: "🏅", status: "completed", date: "Aug 02" },
    { title: "30-Day Warrior", icon: "🏅", status: "locked", date: "Upcoming" },
    { title: "Halfway Hero", icon: "🏅", status: "locked", date: "Upcoming" },
    { title: "60-Day Legend", icon: "🏅", status: "locked", date: "Upcoming" },
  ];

  return (
    <div className="glass-panel p-5 rounded-2xl border-white/10 bg-slate-900/90 space-y-4 shadow-md">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-purple-400" /> Milestone Progression Timeline
        </h4>
        <span className="text-[10px] text-slate-400 font-mono">Future Goals Roadmap</span>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 space-y-3 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-purple-500 before:to-slate-800">
        {timelineMilestones.map((item, idx) => {
          const isCompleted = item.status === 'completed';

          return (
            <div key={idx} className="relative flex items-center justify-between group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] z-10 border transition-transform group-hover:scale-110 ${
                  isCompleted
                    ? 'bg-orange-500 border-amber-300 text-white shadow-sm shadow-orange-500/50'
                    : 'bg-slate-900 border-slate-700 text-slate-500'
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <Lock className="w-2.5 h-2.5" />}
              </div>

              {/* Row Content */}
              <div
                className={`flex-1 ml-2 p-3 rounded-xl border flex items-center justify-between transition-all ${
                  isCompleted
                    ? 'bg-slate-950/80 border-orange-500/30 text-white shadow-sm'
                    : 'bg-slate-950/30 border-white/5 text-slate-400 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{item.icon}</span>
                  <div>
                    <span className="text-xs font-bold block">{item.title}</span>
                    <span className="text-[10px] text-slate-400">{item.date}</span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                    isCompleted
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}
                >
                  {isCompleted ? '✅ Unlocked' : '🔒 Locked'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
