import React from "react";
import { Routes, Route } from "react-router-dom";
import { usePageLoader } from "./hooks/usePageLoader"; // Adjust directory path as needed
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";

export default function App() {
  const isLoading = usePageLoader();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      {/* GLOBAL LINEAR TOP LOADER BAR ACCENT */}
      <div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 z-[9999] transition-transform duration-500 origin-left ${
          isLoading
            ? "scale-x-100 opacity-100 backdrop-blur-lg"
            : "scale-x-0 opacity-0"
        }`}
      />

      {/* FULL PAGE GLASSBLUR SCREEN OVERLAY BLOCKS INPUT DURING ROUTE BOUNCE */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-50/60 backdrop-blur-md z-[9998] flex items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-slate-400 font-mono text-[11px] tracking-widest uppercase animate-pulse">
              Initializing Module Matrix...
            </p>
          </div>
        </div>
      )}

      {/* PERSISTENT STRUCTURAL NAV BAR */}
      <Header />

      {/* Content wrapper with built-in padding spacer offsets the absolute header */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
    </div>
  );
}
