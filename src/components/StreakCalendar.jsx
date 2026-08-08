import React from 'react';
import { Calendar as CalendarIcon, Flame, CheckCircle2, AlertCircle } from 'lucide-react';

export default function StreakCalendar({ student }) {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  // Weekly grid data for active sprint week
  // Completed days use orange, missed days gray/rose, current day highlighted
  const calendarDays = [
    { dayNum: 6, label: 'Mon', status: 'completed', date: 'Aug 3' },
    { dayNum: 7, label: 'Tue', status: 'completed', date: 'Aug 4' },
    { dayNum: 8, label: 'Wed', status: 'completed', date: 'Aug 5' },
    { dayNum: 9, label: 'Thu', status: student?.missedYesterday ? 'missed' : 'completed', date: 'Aug 6' },
    { dayNum: 10, label: 'Fri', status: 'completed', date: 'Aug 7' },
    { dayNum: 11, label: 'Sat', status: 'completed', date: 'Aug 8' },
    { dayNum: 12, label: 'Sun', status: 'current', date: 'Today' },
  ];

  return (
    <div className="glass-panel p-5 rounded-2xl border-white/10 bg-slate-900/90 space-y-3.5 shadow-md">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
            Streak Calendar
          </h3>
        </div>
        <span className="text-[11px] font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-md border border-orange-500/20">
          Week 2 Log
        </span>
      </div>

      {/* Days Header Row */}
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-slate-400">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="py-0.5">{day}</div>
        ))}
      </div>

      {/* Calendar Squares Grid */}
      <div className="grid grid-cols-7 gap-1.5">
        {calendarDays.map((item, idx) => {
          let bgClass = "";
          let titleText = `Day ${item.dayNum}`;

          if (item.status === 'completed') {
            bgClass = "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-sm shadow-orange-500/30 border border-orange-400/40";
            titleText += " - Completed";
          } else if (item.status === 'missed') {
            bgClass = "bg-slate-800 text-slate-500 border border-slate-700/60";
            titleText += " - Missed";
          } else if (item.status === 'current') {
            bgClass = "bg-orange-500/20 border-2 border-orange-400 text-orange-300 shadow-md shadow-orange-500/30 animate-pulse";
            titleText += " - Today (In Progress)";
          }

          return (
            <div
              key={idx}
              title={titleText}
              className={`h-9 rounded-xl flex flex-col items-center justify-center relative font-mono text-xs font-black transition-all ${bgClass}`}
            >
              <span>{item.dayNum}</span>
              {item.status === 'current' && (
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border border-slate-900" />
              )}
            </div>
          );
        })}
      </div>

      {/* Legend Footer */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-orange-500 inline-block" /> Completed (Orange)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-slate-800 border border-slate-700 inline-block" /> Missed (Gray)
        </span>
        <span className="flex items-center gap-1.5 text-orange-400 font-bold">
          <Flame className="w-3 h-3" /> Today
        </span>
      </div>

    </div>
  );
}
