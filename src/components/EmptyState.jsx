import React from "react";
import noProjectImg from "../assets/no-projects.png";

export default function EmptyState({ onStartAddProject }) {
  return (
    <div className="w-full max-w-md mx-auto text-center p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 space-y-4 my-auto">
      <div className="p-3 bg-slate-50 rounded-2xl inline-block">
        <img src={noProjectImg} alt="Empty folder" className="h-14 w-14 object-contain opacity-50" />
      </div>
      <h2 className="font-bold text-lg text-slate-800">No Project Selected</h2>
      <p className="text-slate-500 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
        Select an operational dashboard project from the panel layout or create a new build matrix.
      </p>
      <button
        onClick={onStartAddProject}
        className="text-slate-950 bg-amber-400 hover:bg-amber-500 py-2.5 px-5 rounded-xl font-bold text-xs tracking-wide uppercase transition-all shadow-md shadow-amber-400/20"
      >
        Create new project
      </button>
    </div>
  );
}