import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto px-4 text-center space-y-6 pt-16 pb-12">
      <div className="w-20 h-20 rounded-3xl bg-orange-500/20 border border-orange-500/40 mx-auto flex items-center justify-center glow-orange">
        <Flame className="w-10 h-10 text-orange-500 animate-flame" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-black text-white">404</h1>
        <h2 className="text-lg font-bold text-slate-300">Challenge Day Not Found</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          The requested challenge route does not exist or has moved. Let's get you back on track to your active dashboard!
        </p>
      </div>

      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-lg shadow-orange-500/30 transition-all active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Dashboard
      </Link>
    </div>
  );
}
