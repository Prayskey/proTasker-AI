import React, { useState } from "react";

function NavLink({ href = "#", content, onClick }) {
  return (
    <li className="list-none w-full md:w-auto">
      <a
        href={href}
        onClick={onClick}
        className="relative block py-3 md:py-2 text-base md:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200 group"
      >
        {content}
        <span className="hidden md:block absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      </a>
    </li>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6 mt-4 md:mt-6">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl md:rounded-full py-3 px-5 md:px-6 flex flex-wrap justify-between items-center shadow-lg shadow-slate-100/80">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs">
            P
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-base">
            ProTasker
          </span>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-600 hover:text-slate-900 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>

        {/* Navigation Dropdown Canvas Wrapper */}
        <nav className={`${isOpen ? "flex opacity-100 translate-y-0" : "hidden md:flex opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0"} w-full md:w-auto transition-all duration-300 flex-col md:flex-row items-center order-3 md:order-2 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-100 md:border-none`}>
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto text-center md:text-left">
            <NavLink content="Home" onClick={() => setIsOpen(false)} />
            <NavLink content="About Us" onClick={() => setIsOpen(false)} />
            <NavLink content="Features" onClick={() => setIsOpen(false)} />
            <NavLink content="How it Works" onClick={() => setIsOpen(false)} />
            <NavLink content="Contacts" onClick={() => setIsOpen(false)} />
          </ul>
          
          {/* Mobile-only CTA placement inside dropdown stack */}
          <div className="w-full mt-4 pb-2 md:hidden">
            <button className="w-full bg-slate-950 text-white font-bold text-xs py-3 rounded-xl tracking-wide uppercase">
              Sign Up &rarr;
            </button>
          </div>
        </nav>

        {/* Desktop-only Active CTA */}
        <div className="hidden md:block order-2 md:order-3">
          <button className="group bg-slate-950 text-white font-bold text-xs tracking-wide uppercase rounded-full py-2.5 px-5 hover:bg-slate-800 transition-all duration-150 flex items-center gap-1.5 active:scale-[0.98]">
            Sign Up
            <span className="text-slate-400 transition-transform group-hover:translate-x-0.5 duration-150">&rarr;</span>
          </button>
        </div>
        
      </div>
    </header>
  );
}