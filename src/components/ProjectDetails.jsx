import React, { useRef } from "react";

export default function ProjectDetails({ project, onDeleteProject, onAddTask, onToggleTask, onDeleteTask }) {
  const taskRef = useRef();

  function handleTaskSubmit(e) {
    e.preventDefault();
    const enteredTask = taskRef.current.value.trim();
    if (!enteredTask) return;
    onAddTask(enteredTask);
    taskRef.current.value = "";
  }

  const formatDate = (str) => str ? new Date(str).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";
  const completedCount = project.tasks.filter(t => t.completed).length;

  return (
    <div className="w-full max-w-2xl space-y-6">
      
      {/* Header Info Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/30 p-5 sm:p-7 space-y-4">
        <header className="flex flex-col sm:flex-row justify-between items-start border-b border-slate-100 pb-4 gap-3">
          <div className="space-y-1 max-w-full truncate">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight truncate">{project.title}</h1>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Due Matrix: <time className="text-slate-600 font-bold">{formatDate(project.date)}</time>
            </p>
          </div>
          <button
            onClick={() => onDeleteProject(project.id)}
            className="text-slate-400 hover:text-red-600 hover:bg-red-50 text-[11px] font-bold px-3 py-1.5 rounded-lg transition sm:self-start border border-transparent hover:border-red-100"
          >
            Delete Project
          </button>
        </header>
        <p className="text-slate-600 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{project.description}</p>
      </div>

      {/* Tasks checklist Card */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/30 p-5 sm:p-7 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Project Deliverables</h2>
          <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-md font-extrabold">
            {completedCount}/{project.tasks.length} Done
          </span>
        </div>
        
        <form onSubmit={handleTaskSubmit} className="flex gap-2 items-center">
          <input
            ref={taskRef}
            type="text"
            placeholder="Append new sub-task parameters..."
            className="flex-1 bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white px-3 py-2 text-xs text-slate-800 outline-none rounded-xl transition"
          />
          <button type="submit" className="text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-xl transition">
            Add
          </button>
        </form>

        {project.tasks.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-slate-200 rounded-xl bg-slate-50/40">
            <p className="text-slate-400 text-xs">No active pipeline sub-tasks generated.</p>
          </div>
        ) : (
          <ul className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
            {project.tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center border p-2.5 rounded-xl transition-all ${
                  task.completed ? "bg-slate-50 border-slate-200 opacity-50 line-through text-slate-400" : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2.5 max-w-[80%]">
                  <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleTask(task.id)}
                    className="h-3.5 w-3.5 rounded text-blue-600 cursor-pointer accent-blue-600 shrink-0"
                  />
                  <span className="text-slate-700 text-xs font-medium truncate">{task.text}</span>
                </div>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-slate-400 hover:text-red-500 text-[10px] font-bold px-2 py-1 rounded transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

    </div>
  );
}