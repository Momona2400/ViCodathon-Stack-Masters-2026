import React from 'react';
import { Flame, Github, Linkedin, Code2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080b13] border-t border-white/10 pt-10 pb-8 mt-16 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-white text-base">ABTalks 60-Day Challenge</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              A high-impact 60-day coding bootcamp designed for motivated students to build real-world projects and establish daily engineering habits.
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm mb-3 tracking-wide">Route Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Landing Page (/)
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Student Dashboard (/dashboard)
                </Link>
              </li>
              <li>
                <Link to="/day/12" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Challenge Day 12 (/day/12)
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Proof & Hashtags */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-3 tracking-wide">Community & Proof</h4>
            <p className="text-slate-400">
              Share your daily progress on LinkedIn & GitHub with <span className="text-orange-400 font-mono">#ABTalks60Days</span>
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} ABTalks Redesign. Optimized for 390px Mobile Viewports.</p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-orange-400" /> Built with React, Vite & TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
}
