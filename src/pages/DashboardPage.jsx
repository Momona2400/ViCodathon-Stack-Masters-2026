import React from 'react';
import { Link } from 'react-router-dom';
import StreakBadge from '../components/StreakBadge';
import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';
import AchievementCard from '../components/AchievementCard';
import PersonaSwitcher from '../components/PersonaSwitcher';
import NextBadgeCard from '../components/NextBadgeCard';
import CommunitySection from '../components/CommunitySection';
import DailyMomentumCard from '../components/DailyMomentumCard';
import DailyMotivationCard from '../components/DailyMotivationCard';
import StreakCalendar from '../components/StreakCalendar';
import WeeklyMilestones from '../components/WeeklyMilestones';
import AiProgressInsightCard from '../components/AiProgressInsightCard';
import PortfolioHealthCard from '../components/PortfolioHealthCard';
import { Sparkles, AlertCircle, BookOpen, ArrowRight, Flame } from 'lucide-react';

export default function DashboardPage({ studentData, activePresetKey, onSelectPreset }) {
  const { student, day12Task, achievements } = studentData;

  return (
    <div className="space-y-6">
      
      {/* Persona Switcher Bar for edge case testing */}
      <PersonaSwitcher activePresetKey={activePresetKey} onSelectPreset={onSelectPreset} />

      <div className="max-w-5xl mx-auto px-4 space-y-6">

        {/* 1. Student Welcome Greeting Header Card */}
        <div className="glass-panel p-5 sm:p-6 rounded-3xl border-white/10 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-500/50 shadow-md shadow-orange-500/20"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-white">{student.name}</h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Student
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{student.track}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-medium text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Target: 60 Days Challenge</span>
          </div>
        </div>

        {/* Item 16: Improved Missed Day Experience Banner */}
        {student.missedYesterday && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-orange-500/15 border border-orange-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-200 animate-in fade-in duration-300 shadow-lg shadow-orange-500/10">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-white text-sm">⚠ You missed yesterday.</h4>
                <p className="leading-relaxed text-slate-200 font-medium">
                  Complete today's challenge before 11:59 PM. Restart your streak today!
                </p>
              </div>
            </div>

            <Link
              to={`/day/${student.currentDay}`}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-1.5 shrink-0 active:scale-95 transition-all"
            >
              <span>Resume Challenge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Item 21: Daily Momentum Card (Emotional Center of Product - Brand New Dashboard Card) */}
        <div className="space-y-2">
          <DailyMomentumCard task={day12Task} student={student} />
        </div>

        {/* 📂 Portfolio Health Card */}
        <PortfolioHealthCard />

        {/* Requirement 4: Today's Challenge Priority Card */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-400" /> Priority Challenge
            </h2>
            <span className="text-xs text-slate-400 font-mono">Day {student.currentDay} of 60</span>
          </div>

          <TaskCard
            task={day12Task}
            isCompleted={student.completedDays && student.completedDays.includes(student.currentDay)}
            missedYesterday={student.missedYesterday}
          />
        </div>

        {/* Requirement 6 & 5: Rich Progress Visualization, Next Badge & Streak */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StreakBadge streak={student.streak} missedYesterday={student.missedYesterday} />
          
          <ProgressBar
            currentDay={student.currentDay}
            totalDays={student.totalDays}
            completedDaysCount={student.completedDays ? student.completedDays.length : student.streak}
          />

          <NextBadgeCard
            currentDays={8}
            targetDays={10}
            badgeTitle="Frontend Explorer"
          />
        </div>

        {/* Item 7: Daily Motivation Card (Below Progress) */}
        <DailyMotivationCard student={student} />

        {/* Items 9 & 10: Streak Calendar & Weekly Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StreakCalendar student={student} />
          <WeeklyMilestones currentDay={student.currentDay} />
        </div>

        {/* Item 19: AI Progress Insight Card */}
        <AiProgressInsightCard />

        {/* Requirement 3: Live Community & Peer Activity */}
        <div className="space-y-2">
          <h2 className="text-sm font-extrabold text-white uppercase tracking-wider px-1">
            Community & Peer Network
          </h2>
          <CommunitySection />
        </div>

        {/* Items 18 & 15: Achievements Timeline & Empty State */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Student Achievements
              </h2>
              <p className="text-xs text-slate-400">Unlocked badges and milestone credentials</p>
            </div>

            <span className="text-xs font-semibold text-slate-400">
              {achievements ? achievements.filter(a => a.unlocked).length : 0} / {achievements ? achievements.length : 0} Earned
            </span>
          </div>

          <AchievementCard achievements={achievements} />
        </div>

      </div>
    </div>
  );
}
