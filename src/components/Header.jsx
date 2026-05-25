import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavLink({ to = "/", content, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="list-none w-full md:w-auto">
      <Link
        to={to}
        onClick={onClick}
        className={`relative block py-3 md:py-2 text-base md:text-sm font-semibold transition-colors duration-200 group ${
          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
        }`}
      >
        {content}
        <span className={`hidden md:block absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transition-transform duration-200 origin-left ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`} />
      </Link>
    </li>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6 mt-4 md:mt-6">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl md:rounded-full py-3 px-5 md:px-6 flex flex-wrap justify-between items-center shadow-lg shadow-slate-100/80">
        
        {/* Brand Logo Link node container */}
        <Link to="/" className="flex items-center gap-2 z-50 focus:outline-none" onClick={() => setIsOpen(false)}>
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs">
            P
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-base">
            ProTasker
          </span>
        </Link>

        {/* Mobile Hamburger Layout Action */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-600 hover:text-slate-900 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>

        {/* Responsive Drawer Canvas Menu List */}
        <nav className={`${isOpen ? "flex opacity-100 translate-y-0" : "hidden md:flex opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0"} w-full md:w-auto transition-all duration-300 flex-col md:flex-row items-center order-3 md:order-2 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-100 md:border-none`}>
          <ul className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-8 w-full md:w-auto text-center md:text-left">
            <NavLink to="/" content="Home" onClick={() => setIsOpen(false)} />
            <NavLink to="/dashboard" content="Workspace Dashboard" onClick={() => setIsOpen(false)} />
          </ul>
          
          <div className="w-full mt-4 pb-2 md:hidden">
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-slate-950 text-white font-bold text-xs py-3 rounded-xl tracking-wide uppercase">
                Launch Workspace &rarr;
              </button>
            </Link>
          </div>
        </nav>

        {/* Desktop Call to Action Element */}
        <div className="hidden md:block order-2 md:order-3">
          <Link to="/dashboard">
            <button className="group bg-slate-950 text-white font-bold text-xs tracking-wide uppercase rounded-full py-2.5 px-5 hover:bg-slate-800 transition-all duration-150 flex items-center gap-1.5 active:scale-[0.98]">
              Launch Workspace
              <span className="text-slate-400 transition-transform group-hover:translate-x-0.5 duration-150">&rarr;</span>
            </button>
          </Link>
        </div>
        
      </div>
    </header>
  );
}