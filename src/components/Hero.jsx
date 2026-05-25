import React from "react";
import { Link } from "react-router-dom"; // <-- 1. Import Link from React Router

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex flex-col justify-center items-center pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-400/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 w-full">
        
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 sm:px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <p className="text-blue-600 font-bold text-[10px] sm:text-[11px] tracking-widest uppercase">
            Unlock Your Full Potential
          </p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] max-w-3xl mx-auto px-2">
          Discover a New Era of Task Management with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
            ProTask AI
          </span>
        </h1>

        <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium px-4">
          Streamline workflows, automate scheduling, and align your team’s delivery performance with our next-generation task intelligence engine.
        </p>

        {/* 2. Swapped old <a> anchors for clean, optimized <Link> components */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2 max-w-sm sm:max-w-none mx-auto w-full px-4">
          <Link to="/dashboard" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-blue-600/10">
              GET STARTED NOW
            </button>
          </Link>
          <Link to="/dashboard" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm">
              EXPLORE WORKSPACE
            </button>
          </Link>
        </div>

        {/* Data Rows */}
        <div className="pt-8 sm:pt-10 grid grid-cols-3 gap-2 sm:gap-x-8 max-w-lg mx-auto border-t border-slate-100 text-center">
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black text-slate-900">99.4%</span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">On-Time Delivery</span>
          </div>
          <div className="flex flex-col border-x border-slate-100">
            <span className="text-lg sm:text-2xl font-black text-slate-900">10x</span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Faster Scaling</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black text-slate-900">24/7</span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">AI Copilot</span>
          </div>
        </div>

      </div>

      {/* Screen Frame Display Mockup */}
      <div className="w-full max-w-4xl mx-auto mt-12 sm:mt-16 px-2 sm:px-4 relative z-10">
        <div className="bg-slate-900/5 p-1.5 sm:p-2 rounded-2xl border border-slate-200/60 backdrop-blur-sm shadow-xl">
          <div className="bg-slate-950 rounded-xl aspect-[16/10] sm:aspect-[16/9] border border-slate-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            <div className="text-center space-y-2 z-10 px-4">
              <div className="inline-block px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 font-mono text-[10px] sm:text-xs mb-1">
                ⚡ ProTask_Engine_v2.0
              </div>
              <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">
                Dashboard Workspace Preview
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}