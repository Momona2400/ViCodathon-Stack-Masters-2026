import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, LayoutDashboard, Calendar, Menu, X, Rocket, Award } from 'lucide-react';

export default function Navbar({ streak = 12 }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
            <Flame className="w-5 h-5 text-white animate-flame" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
              ABTalks <span className="text-orange-500 text-xs px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/30">60D</span>
            </span>
            <span className="text-[10px] text-slate-400 block -mt-1 font-medium tracking-wide">REDESIGN</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-white/5">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              isActive('/') 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" /> Landing
          </Link>

          <Link
            to="/dashboard"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              isActive('/dashboard') 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
          </Link>

          <Link
            to="/day/12"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              isActive('/day/12') 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Day 12
          </Link>
        </nav>

        {/* Streak Counter Header Badge & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Quick Streak Indicator */}
          <Link 
            to="/dashboard"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold transition-transform hover:scale-105 ${
              streak > 0 
                ? 'bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-sm shadow-orange-500/20'
                : 'bg-slate-800/80 border-slate-700 text-slate-400'
            }`}
            title={streak > 0 ? `${streak} Day Streak Active!` : 'Streak is 0. Start today!'}
          >
            <Flame className={`w-3.5 h-3.5 ${streak > 0 ? 'text-orange-500 fill-orange-500 animate-pulse' : 'text-slate-500'}`} />
            <span>{streak} 🔥</span>
          </Link>

          {/* Hamburger toggle for mobile (<768px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d1322]/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              isActive('/') 
                ? 'bg-orange-500/20 border border-orange-500/40 text-orange-400' 
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Rocket className="w-4 h-4 text-orange-400" />
            <span>Landing Page</span>
          </Link>

          <Link
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              isActive('/dashboard') 
                ? 'bg-orange-500/20 border border-orange-500/40 text-orange-400' 
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-orange-400" />
            <span>Student Dashboard</span>
          </Link>

          <Link
            to="/day/12"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              isActive('/day/12') 
                ? 'bg-orange-500/20 border border-orange-500/40 text-orange-400' 
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Calendar className="w-4 h-4 text-orange-400" />
            <span>Challenge Day 12 Task</span>
          </Link>
        </div>
      )}
    </header>
  );
}
