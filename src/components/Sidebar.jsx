import React from "react";

export default function Sidebar({ 
  projects, 
  selectedProjectId, 
  viewState, 
  onStartAddProject, 
  onSelectProject, 
  onCloseSidebar, 
  isOpen 
}) {
  return (
    <>
      {/* Backdrop overlay when mobile sidebar opens */}
      {isOpen && (
        <div 
          onClick={onCloseSidebar}
          className="lg:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 lg:z-auto lg:static
        w-72 sm:w-80 bg-slate-900 pt-10 px-6 flex flex-col justify-between shadow-2xl border-r border-slate-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="space-y-6 flex flex-col h-full overflow-hidden">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-extrabold text-white tracking-widest text-xs uppercase opacity-80">Projects Pipeline</h2>
            <button onClick={onCloseSidebar} className="lg:hidden text-slate-400 hover:text-white font-bold text-sm">✕</button>
          </div>
          
          <button
            className="w-full flex items-center justify-center gap-2 text-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 py-3 px-4 rounded-xl font-bold text-xs tracking-wide uppercase transition-all shadow-sm border border-amber-500/10"
            onClick={onStartAddProject}
          >
            + New Project
          </button>

          <nav className="flex flex-col gap-1.5 overflow-y-auto flex-1 pb-6 pr-1">
            {Object.keys(projects).length === 0 ? (
              <div className="text-center py-6 border border-dashed border-slate-800 rounded-xl">
                <p className="text-slate-500 text-xs italic">No active projects</p>
              </div>
            ) : (
              Object.values(projects).map((project) => {
                const isSelected = project.id === selectedProjectId && viewState === "viewing";
                const activeTasks = project.tasks.filter(t => !t.completed).length;
                return (
                  <button
                    key={project.id}
                    className={`flex items-center justify-between text-left py-2.5 px-3.5 rounded-xl transition-all text-xs font-semibold ${
                      isSelected
                        ? "bg-slate-800 text-white border-l-4 border-amber-500 pl-2.5"
                        : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                    }`}
                    onClick={() => onSelectProject(project.id)}
                  >
                    <span className="truncate pr-2">{project.title}</span>
                    {project.tasks.length > 0 && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 tracking-wide font-bold shrink-0">
                        {activeTasks}
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </nav>
        </div>

        <div className="py-5 border-t border-slate-800 flex items-center gap-3 mt-auto">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-bold text-slate-950 text-xs shrink-0">JD</div>
          <div className="flex flex-col truncate"><span className="text-xs font-semibold text-slate-200">John Doe</span></div>
        </div>
      </aside>
    </>
  );
}