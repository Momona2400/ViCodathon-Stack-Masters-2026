import React from 'react';
import { Flame, Users, Trophy } from 'lucide-react';

export default function CommunitySection() {
  const leaderboard = [
    { rank: '#12', name: 'You', streak: 12, isUser: true, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
    { rank: '#13', name: 'Rahul', streak: 11, isUser: false, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
    { rank: '#14', name: 'Aditi', streak: 11, isUser: false, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
  ];

  const friends = [
    { name: 'Rohan', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80' },
    { name: 'Priya', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80' },
    { name: 'Vikram', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Neha', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="glass-panel p-5 rounded-2xl border-white/10 bg-slate-900/90 space-y-5 shadow-md">
      
      {/* Live Counter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/30">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-flame" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div>
            <span className="text-xs font-black text-white block">🔥 842 students coding today</span>
            <span className="text-[10px] text-slate-300">Live accountability community</span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active Community
        </span>
      </div>

      {/* Grid: Leaderboard & Friends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Leaderboard Preview */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Leaderboard Preview
            </h4>
            <span className="text-[10px] text-slate-400 font-mono">Global Rank</span>
          </div>

          <div className="space-y-1.5">
            {leaderboard.map((item) => (
              <div
                key={item.rank}
                className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                  item.isUser
                    ? 'bg-orange-500/15 border-orange-500/40 text-white font-bold ring-1 ring-orange-500/50'
                    : 'bg-slate-950/60 border-white/5 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`font-mono text-xs ${item.isUser ? 'text-orange-400 font-extrabold' : 'text-slate-400'}`}>
                    {item.rank}
                  </span>
                  <img src={item.avatar} alt={item.name} className="w-6 h-6 rounded-full object-cover border border-white/10" />
                  <span>{item.name}</span>
                </div>
                <span className="text-[11px] font-semibold text-orange-400">
                  {item.streak}🔥
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Your friends currently active */}
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-blue-400" /> Your friends currently active
          </h4>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 overflow-hidden">
                {friends.map((f, i) => (
                  <div key={i} className="relative">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                      src={f.avatar}
                      alt={f.name}
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-300 pl-1">+18 online</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Rohan, Priya, Vikram, Neha and 18 others are building Day 12 tasks right now. Join them!
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

