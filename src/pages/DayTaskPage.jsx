import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Clock, 
  Code2, 
  AlertCircle, 
  ExternalLink, 
  Send, 
  Sparkles, 
  BookOpen, 
  Star, 
  Video, 
  FileText, 
  FolderGit2, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';
import ProofModal from '../components/ProofModal';

export default function DayTaskPage({ day12Task, studentData, onSubmitProof }) {
  const { dayId } = useParams();
  const currentDayNum = parseInt(dayId || '12', 10);

  // Form input state & locked submission state
  const existingSubmission = studentData?.student?.submittedProofs?.[currentDayNum] || null;
  const [githubUrl, setGithubUrl] = useState(existingSubmission?.github || '');
  const [linkedinUrl, setLinkedinUrl] = useState(existingSubmission?.linkedin || '');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(Boolean(existingSubmission));

  const validate = () => {
    const errs = {};
    if (!githubUrl.trim()) {
      errs.github = 'GitHub commit URL is required';
    } else if (!githubUrl.includes('github.com')) {
      errs.github = 'URL must be a valid github.com link';
    }

    if (!linkedinUrl.trim()) {
      errs.linkedin = 'LinkedIn post URL is required';
    } else if (!linkedinUrl.includes('linkedin.com')) {
      errs.linkedin = 'URL must be a valid linkedin.com link';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSubmitProof(currentDayNum, { github: githubUrl, linkedin: linkedinUrl });
      setShowModal(true);
    }, 600);
  };

  // Learning outcomes (Requirement 11)
  const learningOutcomes = [
    "Responsive Layout",
    "Flexbox",
    "Grid",
    "State Management",
    "API Integration"
  ];

  // Required skills chips (Requirement 12)
  const requiredSkills = ["React", "JavaScript", "CSS", "Tailwind"];

  // Resources cards (Requirement 13)
  const resourcesData = [
    {
      icon: Video,
      title: "Tailwind Mobile Drawer Tutorial",
      description: "Master backdrop filter glassmorphism and touch-friendly drawers for 390px viewports.",
      estTime: "15 mins watch",
      buttonText: "Watch Tutorial",
      url: "https://youtube.com",
      type: "video"
    },
    {
      icon: FileText,
      title: "Tailwind Layout & Flexbox Guide",
      description: "Comprehensive reference docs for flex-wrap, grid layouts, and active states.",
      estTime: "8 mins read",
      buttonText: "Read Docs",
      url: "https://tailwindcss.com/docs",
      type: "docs"
    },
    {
      icon: FolderGit2,
      title: "Starter Repository Template",
      description: "Pre-configured Vite + React template with mock data structures ready to fork.",
      estTime: "Starter Code",
      buttonText: "Starter Repository",
      url: "https://github.com",
      type: "repo"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6 pb-12">
      
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between pt-2">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-semibold hover:border-orange-500/40 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
          Day {currentDayNum} of 60 Challenge
        </span>
      </div>

      {/* Task Specification Card */}
      <div className="glass-panel p-5 sm:p-7 rounded-3xl border-white/10 bg-slate-900/90 space-y-6">
        
        {/* Title & Category */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30">
              {day12Task.category}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
            Day {day12Task.dayNumber}: {day12Task.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {day12Task.description}
          </p>
        </div>

        {/* Requirement 11: Learning Outcomes Section */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" /> Today you'll learn:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {learningOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-white/5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Requirement 12: Improved Difficulty, Estimated Time & Required Skills */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Star Rating Difficulty */}
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Difficulty</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 3 ? 'text-amber-400 fill-amber-400' : 'text-slate-700'
                    }`}
                  />
                ))}
                <span className="text-xs font-bold text-white ml-1">Intermediate</span>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Estimated Time</span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>45 mins</span>
              </div>
            </div>

            {/* Required Skills Chips */}
            <div className="space-y-1 sm:col-span-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Required Skills</span>
              <div className="flex flex-wrap gap-1.5">
                {requiredSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg bg-orange-500/15 text-orange-300 border border-orange-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Requirement 13: Improved Resources Cards Section */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-400" /> Curated Resources & Guides
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {resourcesData.map((res, idx) => {
              const IconComp = res.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl glass-panel bg-slate-950/70 border border-white/10 flex flex-col justify-between space-y-3 hover:border-orange-500/30 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-white/5">
                        {res.estTime}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white leading-snug">{res.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{res.description}</p>
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-orange-500/20 text-slate-200 hover:text-orange-400 border border-slate-700 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{res.buttonText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Requirement 14: Improved Submission Section with Link Verification & Locked State */}
      <div className="glass-panel p-5 sm:p-7 rounded-3xl border-orange-500/30 bg-gradient-to-br from-slate-900 via-orange-950/10 to-slate-900 space-y-5 glow-orange">
        
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
              <Send className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white">Submit Proof of Work</h2>
              <p className="text-xs text-slate-400">Attach your GitHub commit & LinkedIn post link</p>
            </div>
          </div>

          {isSubmitted && (
            <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Submission Successful
            </span>
          )}
        </div>

        {/* Form Inputs with Verification Badges */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* GitHub Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Github className="w-4 h-4 text-orange-400" />
                GitHub Commit / Repository URL <span className="text-orange-400">*</span>
              </label>

              {githubUrl.includes('github.com') && (
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                  ✔ Link Added
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="url"
                disabled={isSubmitted}
                value={githubUrl}
                onChange={(e) => {
                  setGithubUrl(e.target.value);
                  if (errors.github) setErrors({ ...errors, github: null });
                }}
                placeholder="https://github.com/username/repository/commit/..."
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  isSubmitted ? 'opacity-60 cursor-not-allowed border-slate-800' : errors.github ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {isSubmitted && <Lock className="w-4 h-4 text-slate-500 absolute right-3 top-3.5" />}
            </div>
            {errors.github && (
              <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" /> {errors.github}
              </p>
            )}
          </div>

          {/* LinkedIn Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn Post Link <span className="text-orange-400">*</span>
              </label>

              {linkedinUrl.includes('linkedin.com') && (
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                  ✔ Link Added
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="url"
                disabled={isSubmitted}
                value={linkedinUrl}
                onChange={(e) => {
                  setLinkedinUrl(e.target.value);
                  if (errors.linkedin) setErrors({ ...errors, linkedin: null });
                }}
                placeholder="https://linkedin.com/posts/username-day12-challenge..."
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  isSubmitted ? 'opacity-60 cursor-not-allowed border-slate-800' : errors.linkedin ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {isSubmitted && <Lock className="w-4 h-4 text-slate-500 absolute right-3 top-3.5" />}
            </div>
            {errors.linkedin && (
              <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" /> {errors.linkedin}
              </p>
            )}
          </div>

          {/* Preset Fill Buttons for Quick Testing */}
          {!isSubmitted && (
            <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400">
              <span>Quick Fill Test URLs:</span>
              <button
                type="button"
                onClick={() => {
                  setGithubUrl('https://github.com/alexrivera/abtalks-60days/commit/a8f912c');
                  setLinkedinUrl('https://linkedin.com/posts/alexrivera-day12-challenge');
                  setErrors({});
                }}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 transition-colors"
              >
                Fill Sample Proof
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-3.5 rounded-2xl text-white font-extrabold text-xs shadow-xl flex items-center justify-center gap-2 transition-all ${
                isSubmitted
                  ? 'bg-emerald-600/80 border border-emerald-500/50 cursor-default'
                  : 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/30 active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Proof...</span>
                </>
              ) : isSubmitted ? (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submission Successful</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Proof</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>

      {/* Confetti Success Modal */}
      <ProofModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        dayNumber={currentDayNum}
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
      />

    </div>
  );
}
