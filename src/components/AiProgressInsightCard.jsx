import React, { useState } from 'react';
import { Sparkles, Bot, ArrowRight, RefreshCcw } from 'lucide-react';

export default function AiProgressInsightCard() {
  const aiInsights = [
    "You've completed mostly frontend challenges. UI craftsmanship score: 94%.",
    "Backend projects begin next week. Get ready for Node.js API integration!",
    "You are improving consistency: 100% on-time submission rate over the last 7 days.",
    "You've submitted every challenge before midnight. Excellent daily discipline!"
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handleRefresh = () => {
    setActiveIdx((prev) => (prev + 1) % aiInsights.length);
  };

  return (
    <div className="glass-panel p-5 rounded-2xl border-purple-500/30 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900 shadow-xl glow-purple relative overflow-hidden group">
      
      {/* Background glow element */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
            <Bot className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">
              Smart Coach
            </span>
            <h3 className="text-xs font-black text-white flex items-center gap-1">
              ✨ AI Insight
            </h3>
          </div>
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition-all active:scale-95"
        >
          <RefreshCcw className="w-3 h-3" /> Next Insight
        </button>
      </div>

      <div className="p-3 rounded-xl bg-slate-950/60 border border-purple-500/20">
        <p className="text-xs text-slate-200 leading-relaxed font-medium">
          "{aiInsights[activeIdx]}"
        </p>
      </div>

    </div>
  );
}
