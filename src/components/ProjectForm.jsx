import React, { useRef } from "react";

export default function ProjectForm({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enteredTitle = titleRef.current.value.trim();
    const enteredDescription = descriptionRef.current.value.trim();
    const enteredDate = dateRef.current.value;

    if (!enteredTitle || !enteredDescription || !enteredDate) {
      alert("Please fill out all fields.");
      return;
    }

    onSave({ title: enteredTitle, description: enteredDescription, date: enteredDate });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 p-5 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Create Project</h2>
          <p className="text-[11px] text-slate-400">Initialize a workspace module environment</p>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="text-slate-500 hover:text-slate-800 font-bold text-xs px-3 py-2 transition"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl px-4 py-2 shadow-md transition"
          >
            Save Project
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-wider text-slate-400 uppercase" htmlFor="title">Title</label>
          <input ref={titleRef} id="title" type="text" placeholder="Project name tag" className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white p-3 text-slate-800 text-xs outline-none rounded-xl transition" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-wider text-slate-400 uppercase" htmlFor="date">Due Date</label>
          <input ref={dateRef} id="date" type="date" className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white p-3 text-slate-800 text-xs outline-none rounded-xl transition" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-wider text-slate-400 uppercase" htmlFor="description">Description</label>
          <textarea ref={descriptionRef} id="description" rows="4" placeholder="Summarize targets and parameters..." className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white p-3 text-slate-800 text-xs outline-none rounded-xl resize-none transition" />
        </div>
      </div>
    </form>
  );
}