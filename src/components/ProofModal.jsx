import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Flame, Github, Linkedin, ExternalLink, Sparkles, X, Lock } from 'lucide-react';

export default function ProofModal({ isOpen, onClose, dayNumber = 12, githubUrl, linkedinUrl }) {
  useEffect(() => {
    if (isOpen) {
      // Trigger subtle confetti celebration (do not overdo)
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log('Confetti effect fired');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-md rounded-3xl border-orange-500/40 bg-[#0f172a] p-6 shadow-2xl relative space-y-5 glow-orange">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebration Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 mx-auto flex items-center justify-center shadow-lg shadow-orange-500/40 animate-bounce">
            <CheckCircle2 className="w-9 h-9 text-white" />
          </div>

          <h3 className="text-2xl font-black text-white">🎉 Congratulations!</h3>
          <p className="text-sm font-bold text-orange-400">
            Day {dayNumber} Completed
          </p>
        </div>

        {/* Rewards Pills Row (+25 XP, +1 Streak) */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-center">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Experience</span>
            <span className="text-base font-extrabold text-orange-400 bg-orange-500/20 px-3 py-1 rounded-xl border border-orange-500/30 inline-block">
              +25 XP
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Streak Restored</span>
            <span className="text-base font-extrabold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-xl border border-amber-500/30 inline-flex items-center gap-1">
              <Flame className="w-4 h-4 fill-amber-400" /> +1 Streak
            </span>
          </div>
        </div>

        {/* Next Unlock Banner */}
        <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
          <Lock className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Next challenge unlocks tomorrow</span>
        </div>

        {/* Modal Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/30 transition-all active:scale-95"
        >
          Return to Dashboard →
        </button>
      </div>
    </div>
  );
}
