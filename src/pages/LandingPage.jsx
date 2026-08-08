import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Trophy, 
  Users, 
  ShieldCheck, 
  Zap, 
  GraduationCap, 
  Briefcase, 
  GitCommit, 
  Star, 
  Compass, 
  Share2, 
  Linkedin, 
  ArrowDown 
} from 'lucide-react';

export default function LandingPage() {
  const trustMetrics = [
    {
      icon: Flame,
      value: "4,500+",
      label: "Students Joined",
      color: "text-orange-500",
      bg: "bg-orange-500/10 border-orange-500/30"
    },
    {
      icon: GraduationCap,
      value: "200+",
      label: "Colleges Represented",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/30"
    },
    {
      icon: GitCommit,
      value: "75,000+",
      label: "GitHub Commits Pushed",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30"
    },
    {
      icon: Briefcase,
      value: "Hired Top",
      label: "Companies & Startups",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30"
    }
  ];

  const testimonials = [
    {
      name: "Rohan Sharma",
      college: "IIT Delhi",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote: "The 60-day streak kept me accountable every single day. I landed my first frontend engineering role thanks to the verified GitHub proof!"
    },
    {
      name: "Ananya Verma",
      college: "BITS Pilani",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote: "Submitting daily commits and sharing my progress on LinkedIn built my portfolio faster than any university course ever did."
    }
  ];

  const timelineSteps = [
    {
      stepNumber: 1,
      title: "Choose a Track",
      explanation: "Select your specialized path in Full-Stack Web Development, Frontend Architecture, or Systems Engineering.",
      icon: Compass,
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/30"
    },
    {
      stepNumber: 2,
      title: "Build Every Day",
      explanation: "Tackle 45-minute daily handcrafted challenges designed with real-world specifications.",
      icon: Code2,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30"
    },
    {
      stepNumber: 3,
      title: "Push Code to GitHub",
      explanation: "Commit your code daily to build a rock-solid green contribution matrix and public proof.",
      icon: GitCommit,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30"
    },
    {
      stepNumber: 4,
      title: "Share on LinkedIn",
      explanation: "Document your journey using #ABTalks60Days to gain visibility from top tech recruiters.",
      icon: Share2,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/30"
    },
    {
      stepNumber: 5,
      title: "Complete 60 Days",
      explanation: "Graduate with an unbeatable project portfolio, verified badges, and job-ready confidence.",
      icon: Trophy,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/30"
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden text-center space-y-6">
        
        {/* Top Glow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold shadow-sm animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABTalks 60-Day Coding Challenge 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto px-4 space-y-1">
          <span className="block">Build 60 Projects.</span>
          <span className="block">60 GitHub Commits.</span>
          <span className="block">60 LinkedIn Posts.</span>
          <span className="gradient-text-orange block mt-1">Become Recruiter Ready.</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed px-4 font-medium">
          Join thousands of Indian students building consistency every day.
        </p>

        {/* CTA Button */}
        <div className="pt-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all group"
          >
            <span>Start Your Journey Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/day/12"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel text-slate-300 hover:text-white font-semibold text-xs border border-white/10 hover:border-orange-500/40 transition-all flex items-center justify-center gap-2"
          >
            <Code2 className="w-4 h-4 text-orange-400" />
            <span>Preview Day 12 Challenge</span>
          </Link>
        </div>

        {/* Hero Mobile Graphic / Floating Badges */}
        <div className="pt-8 max-w-md mx-auto px-4">
          <div className="glass-panel p-4 rounded-3xl border-orange-500/30 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900 shadow-2xl text-left space-y-4 relative overflow-hidden">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-flame" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Active Student Streak</span>
                  <span className="text-[10px] text-slate-400">Day 12 / 60 Completed</span>
                </div>
              </div>
              <span className="text-xs font-extrabold text-orange-400 bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                12 Days 🔥
              </span>
            </div>

            {/* Code Snippet Box */}
            <div className="bg-[#080c16] p-3 rounded-xl border border-white/5 font-mono text-[11px] text-slate-300 space-y-1">
              <div className="text-slate-500">// Day 12 Challenge Verified</div>
              <div><span className="text-purple-400">const</span> <span className="text-amber-300">streak</span> = <span className="text-orange-400">12</span>;</div>
              <div><span className="text-purple-400">const</span> <span className="text-amber-300">status</span> = <span className="text-emerald-400">'BuildInPublic'</span>;</div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Trust & Credibility Section (Immediately below Hero) */}
      <section className="px-4 max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block">
            Verified Community Impact
          </span>
          <h2 className="text-2xl font-extrabold text-white">Backed by Results</h2>
        </div>

        {/* 4 Trust Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div 
                key={idx} 
                className="glass-panel p-4 rounded-2xl text-center space-y-2 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className={`w-9 h-9 rounded-xl ${metric.bg} border flex items-center justify-center mx-auto`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black text-white block tracking-tight">{metric.value}</span>
                  <span className="text-[11px] text-slate-400 leading-tight block mt-0.5">{metric.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 bg-slate-900/80 space-y-3 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-2">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Student info */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border border-orange-500/40"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{t.college}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 2. How It Works Timeline Section */}
      <section className="px-4 max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block">
            5 Simple Steps
          </span>
          <h2 className="text-2xl font-extrabold text-white">How It Works</h2>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            From Day 1 onboarding to Day 60 graduation, here is your roadmap to success.
          </p>
        </div>

        {/* Vertical Mobile Timeline */}
        <div className="relative pl-4 sm:pl-8 space-y-6 before:absolute before:left-3.5 sm:before:left-7 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-purple-500 before:to-emerald-500">
          {timelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === timelineSteps.length - 1;

            return (
              <div key={step.stepNumber} className="relative flex items-start gap-4 group">
                
                {/* Timeline Step Dot / Icon */}
                <div className={`w-8 h-8 rounded-full ${step.bg} border flex items-center justify-center shrink-0 z-10 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-4 h-4 ${step.color}`} />
                </div>

                {/* Step Card Content */}
                <div className="glass-panel p-4 rounded-2xl border border-white/10 bg-slate-900/90 flex-1 space-y-1 hover:border-orange-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
                      Step {step.stepNumber}
                    </span>
                    {!isLast && <ArrowDown className="w-3.5 h-3.5 text-slate-500 opacity-60" />}
                  </div>

                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.explanation}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* Why Join Section */}
      <section className="px-4 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">Why Join the 60-Day Sprint?</h2>
          <p className="text-xs text-slate-400">Designed specifically to turn learning into actionable proof</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="glass-panel p-5 rounded-2xl space-y-2 border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-1">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Daily Micro-Tasks</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Byte-sized 45-minute daily challenges covering frontend architecture, components, API integration, and optimization.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl space-y-2 border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Verifiable Proof</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Submit your GitHub commit URLs and LinkedIn posts every single day. No faking, pure portfolio evidence.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl space-y-2 border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Badges & Streaks</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Earn gamified achievement badges as you hit major milestones (7-day streak, Git Committer, 60-Day Titan).
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-4 max-w-4xl mx-auto">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-slate-900 to-amber-950/30 text-center space-y-4 glow-orange">
          <h2 className="text-xl sm:text-2xl font-black text-white">Ready to Ignite Your Coding Career?</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Don't let procrastination stop your progress. Jump into your student dashboard and start Day 1 now!
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/30 active:scale-95 transition-all"
          >
            <Flame className="w-4 h-4" /> Go to Student Dashboard
          </Link>
        </div>
      </section>

    </div>
  );
}

