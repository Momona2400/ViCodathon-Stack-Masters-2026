import React from 'react';
import { CheckCircle2, Lock, Sparkles, Trophy } from 'lucide-react';

export default function WeeklyMilestones({ currentDay = 12 }) {
  const currentWeekNum = Math.ceil(currentDay / 7);

  const weeks = [
    { week: 1, title: 'Week 1', status: 'completed' },
    { week: 2, title: 'Week 2', status: 'current' },
    { week: 3, title: 'Week 3', status: 'locked' },
    { week: 4, title: 'Week 4', status: 'locked' },
    { week: 5, title: 'Week 5', status: 'locked' },
    { week: 6, title: 'Week 6', status: 'locked' },
    { week: 7, title: 'Week 7', status: 'locked' },
    { week: 8, title: 'Week 8', status: 'locked' },
  ];

  return (
    <div className="glass-panel p-5 rounded-2xl border-white/10 bg-slate-900/90 space-y-3.5 shadow-md">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-purple-400" />
          <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
            Weekly Milestones
          </h3>
        </div>
        <span className="text-[10px] text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
          8-Week Sprint Roadmap
        </span>
      </div>

      {/* Grid of 8 Weekly Milestone Cards */}
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
        {weeks.map((item) => {
          const isCompleted = item.week < currentWeekNum;
          const isCurrent = item.week === currentWeekNum;

          return (
            <div
              key={item.week}
              className={`p-2.5 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                isCompleted
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 animate-in fade-in'
                  : isCurrent
                  ? 'bg-orange-500/15 border-orange-500/40 text-orange-300 ring-1 ring-orange-500/40 shadow-sm'
                  : 'bg-slate-950/50 border-white/5 text-slate-500 opacity-60'
              }`}
            >
              <div className="space-y-0.5">
                <span className="text-xs font-black block">
                  {item.title}
                </span>
                <span className="text-[9px] font-semibold block uppercase">
                  {isCompleted ? 'Completed' : isCurrent ? '(Current)' : 'Locked'}
                </span>
              </div>

              <div>
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-bounce" />
                ) : isCurrent ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping inline-block" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
