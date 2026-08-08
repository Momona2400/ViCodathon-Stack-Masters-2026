import React, { useEffect, useState } from 'react';
import { 
  FolderGit2, 
  Laptop, 
  Github, 
  Linkedin, 
  Brain, 
  TrendingUp, 
  CheckCircle2, 
  Lock, 
  Sprout, 
  Rocket, 
  Trophy, 
  Sparkles,
  ChevronRight,
  Lightbulb,
  Quote
} from 'lucide-react';

export default function PortfolioHealthCard() {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showBars, setShowBars] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [motiveIndex, setMotiveIndex] = useState(0);
  const [motiveFade, setMotiveFade] = useState(true);

  const [insightIndex, setInsightIndex] = useState(0);
  const [insightFade, setInsightFade] = useState(true);

  const [activeStageIndex, setActiveStageIndex] = useState(1); // Default: Builder (Current)

  const motivationalMessages = [
    "Every project tells your story.",
    "Consistency builds strong portfolios.",
    "Your GitHub profile becomes stronger every day.",
    "Small daily efforts create big opportunities."
  ];

  const weeklyInsights = [
    "You completed every challenge this week.",
    "GitHub consistency is excellent.",
    "Publishing today's project will unlock your next milestone.",
    "Your portfolio has grown significantly this month."
  ];

  useEffect(() => {
    // Fade cards upward slightly on load
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    // 0 to 78 counter-up animation on load
    const duration = 1000;
    const targetScore = 78;
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Ease-out quad for smooth counting
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easedProgress * targetScore);
      setAnimatedScore(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setAnimatedScore(targetScore);
      }
    };

    const animFrame = requestAnimationFrame(animateNumber);

    // Trigger bar width animation
    const timer = setTimeout(() => {
      setShowBars(true);
    }, 200);

    // Motivational sentence rotation interval (every 4.5 seconds)
    const motiveInterval = setInterval(() => {
      setMotiveFade(false);
      setTimeout(() => {
        setMotiveIndex((prev) => (prev + 1) % motivationalMessages.length);
        setMotiveFade(true);
      }, 300);
    }, 4500);

    // Weekly insight rotation interval (every 5.5 seconds)
    const insightInterval = setInterval(() => {
      setInsightFade(false);
      setTimeout(() => {
        setInsightIndex((prev) => (prev + 1) % weeklyInsights.length);
        setInsightFade(true);
      }, 300);
    }, 5500);

    return () => {
      clearTimeout(loadTimer);
      cancelAnimationFrame(animFrame);
      clearTimeout(timer);
      clearInterval(motiveInterval);
      clearInterval(insightInterval);
    };
  }, []);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  const metrics = [
    {
      icon: Laptop,
      title: "Projects Completed",
      percentage: 72,
      explanation: "Projects added to your portfolio.",
      color: "from-orange-500 to-amber-500",
      textColor: "text-orange-400",
      bgIcon: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      icon: Github,
      title: "GitHub Activity",
      percentage: 91,
      explanation: "Daily coding consistency.",
      color: "from-emerald-500 to-teal-400",
      textColor: "text-emerald-400",
      bgIcon: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Visibility",
      percentage: 64,
      explanation: "Professional visibility through posting.",
      color: "from-blue-500 to-cyan-400",
      textColor: "text-blue-400",
      bgIcon: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      icon: Brain,
      title: "Skills Learned",
      percentage: 76,
      explanation: "Technologies mastered through challenges.",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
      bgIcon: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  const milestones = {
    completed: [
      "First Project",
      "10 GitHub Commits",
      "First LinkedIn Post"
    ],
    locked: [
      "Halfway Portfolio",
      "Interview Ready",
      "Portfolio Complete"
    ]
  };

  const journeyStages = [
    { label: "Beginner", icon: Sprout, status: "completed" },
    { label: "Builder (Current)", icon: Laptop, status: "current" },
    { label: "Portfolio Ready", icon: Rocket, status: "locked" },
    { label: "Interview Ready", icon: Trophy, status: "locked" }
  ];

  return (
    <div className={`bg-slate-900 border-2 border-orange-500/30 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden space-y-6 transition-all duration-700 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      
      {/* 1. Header */}
      <div 
        className={`relative z-10 border-b border-slate-800 pb-4 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '50ms' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-950 p-0.5 border border-orange-500/40 shadow-sm shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <FolderGit2 className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 block">
              Portfolio Audit
            </span>
            <h2 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-1.5">
              📂 Portfolio Health
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mt-2.5">
          Your daily work is building a portfolio recruiters can actually see.
        </p>

        {/* Rotating Motivational Sentence */}
        <div className="mt-3 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-semibold text-orange-300 shadow-sm">
          <Quote className="w-3.5 h-3.5 text-orange-400 shrink-0 opacity-80" />
          <span className={`transition-opacity duration-300 italic ${
            motiveFade ? 'opacity-100' : 'opacity-0'
          }`}>
            "{motivationalMessages[motiveIndex]}"
          </span>
        </div>
      </div>

      {/* 2. Overall Portfolio Health Indicator */}
      <div 
        className={`bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-center justify-center space-y-2 relative z-10 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '120ms' }}
      >
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
          Overall Portfolio Health
        </span>

        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-slate-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Animated Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-orange-500 transition-all duration-1000 ease-out"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="url(#portfolioHealthGradient)"
              fill="transparent"
            />
            <defs>
              <linearGradient id="portfolioHealthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner score display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-black text-white tracking-tight">
              {animatedScore}%
            </span>
            <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-wider">
              Portfolio Health
            </span>
          </div>
        </div>
      </div>

      {/* 3. Portfolio Metrics (Four Stacked Cards) */}
      <div 
        className={`space-y-3 relative z-10 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '180ms' }}
      >
        <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-orange-400" /> Portfolio Metrics
        </h3>

        <div className="flex flex-col gap-3">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            const targetPercent = metric.percentage;
            const currentWidth = showBars ? targetPercent : 0;

            return (
              <div 
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 hover:border-slate-700 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center border shrink-0 ${metric.bgIcon}`}>
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white truncate">{metric.title}</span>
                  </div>
                  <span className={`text-xs sm:text-sm font-mono font-extrabold shrink-0 ${metric.textColor}`}>
                    {targetPercent}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${currentWidth}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400 font-medium leading-normal">
                  {metric.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Recommendation Card (Slight Elevation on Tap) */}
      <div 
        className={`relative z-10 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '240ms' }}
      >
        <div className="p-4 rounded-2xl bg-slate-950 border border-orange-500/30 space-y-2.5 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5 active:-translate-y-0.5 active:scale-[0.995] transition-all duration-200 cursor-pointer select-none">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-lg border border-orange-500/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Next Improvement
            </span>
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              <span>Estimated Improvement</span>
              <span className="font-mono text-emerald-300 font-black">+3%</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed pt-0.5">
            Complete today's challenge and publish your LinkedIn post to improve your Portfolio Health.
          </p>
        </div>
      </div>

      {/* Rotating Weekly Insight Card */}
      <div 
        className={`relative z-10 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-purple-500/20 flex items-start gap-3 transition-all duration-200 hover:border-purple-500/30">
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-purple-400" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 block">
              Weekly Insight
            </span>
            <p className={`text-xs sm:text-sm text-slate-300 font-medium leading-relaxed transition-opacity duration-300 ${
              insightFade ? 'opacity-100' : 'opacity-0'
            }`}>
              {weeklyInsights[insightIndex]}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Portfolio Milestones (Gentle Scale Animation on Tap) */}
      <div 
        className={`space-y-3 pt-2 relative z-10 border-t border-slate-800 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '360ms' }}
      >
        <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
          Portfolio Milestones
        </h3>

        <div className="flex flex-wrap gap-2">
          {/* Completed Chips */}
          {milestones.completed.map((item, idx) => (
            <span 
              key={`comp-${idx}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 text-xs font-bold shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-150 ease-out cursor-pointer select-none"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>✓ {item}</span>
            </span>
          ))}

          {/* Locked Chips */}
          {milestones.locked.map((item, idx) => (
            <span 
              key={`lock-${idx}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 text-slate-400 border border-slate-800 text-xs font-medium opacity-60 hover:opacity-85 hover:scale-[1.02] active:scale-95 transition-all duration-150 ease-out cursor-pointer select-none"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>🔒 {item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 6. Portfolio Journey Roadmap (Animated Stage Transitions) */}
      <div 
        className={`space-y-3 pt-2 relative z-10 border-t border-slate-800 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '420ms' }}
      >
        <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
          Portfolio Journey
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative">
          {journeyStages.map((stage, idx) => {
            const IconComponent = stage.icon;
            const isSelected = activeStageIndex === idx;
            const isCompleted = idx < activeStageIndex;

            return (
              <button 
                key={idx}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 text-center transition-all duration-300 ease-out relative hover:scale-[1.02] active:scale-95 cursor-pointer select-none text-left w-full ${
                  isSelected
                    ? 'bg-orange-500/10 border-orange-500/60 text-orange-300 ring-2 ring-orange-500/30 shadow-md font-black'
                    : isCompleted
                    ? 'bg-slate-950 border-emerald-500/25 text-emerald-400 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-500 opacity-60'
                }`}
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isSelected ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 scale-105' :
                  isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-900 text-slate-600 border border-slate-800'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold leading-tight">
                  {stage.label}
                </span>

                {/* Connecting arrow indicator between stages */}
                {idx < journeyStages.length - 1 && (
                  <div className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
