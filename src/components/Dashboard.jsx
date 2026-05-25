import { useState } from "react";
import Sidebar from "./Sidebar";
import EmptyState from "./EmptyState";
import ProjectForm from "./ProjectForm";
import ProjectDetails from "./ProjectDetails";

export default function Dashboard() {
  const [viewState, setViewState] = useState("none");
  const [projects, setProjects] = useState({});
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedProject = projects[selectedProjectId];

  function handleStartAddProject() {
    setViewState("adding");
    setIsSidebarOpen(false);
  }

  function handleSelectProject(id) {
    setSelectedProjectId(id);
    setViewState("viewing");
    setIsSidebarOpen(false);
  }

  function handleSaveProject({ title, description, date }) {
    const id = Math.random().toString(36).substring(2, 9);
    const newProject = { id, title, description, date, tasks: [] };

    setProjects((prev) => ({ ...prev, [id]: newProject }));
    setSelectedProjectId(id);
    setViewState("viewing");
  }

  function handleDeleteProject(id) {
    setProjects((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
    setSelectedProjectId(null);
    setViewState("none");
  }

  function handleAddTask(text) {
    const taskId = Math.random().toString(36).substring(2, 9);
    setProjects((prev) => {
      const target = { ...prev[selectedProjectId] };
      target.tasks = [...target.tasks, { id: taskId, text, completed: false }];
      return { ...prev, [selectedProjectId]: target };
    });
  }

  function handleToggleTask(taskId) {
    setProjects((prev) => {
      const target = { ...prev[selectedProjectId] };
      target.tasks = target.tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t,
      );
      return { ...prev, [selectedProjectId]: target };
    });
  }

  function handleDeleteTask(taskId) {
    setProjects((prev) => {
      const target = { ...prev[selectedProjectId] };
      target.tasks = target.tasks.filter((t) => t.id !== taskId);
      return { ...prev, [selectedProjectId]: target };
    });
  }

  return (
    <section
      id="dashboard"
      className="flex h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Mobile Top Controls Bar */}
      <div className="lg:hidden fixed top-24 left-4 right-4 z-40 bg-slate-900 text-white rounded-xl flex items-center justify-between p-3.5 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Project Workspace
          </span>
          <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-md font-bold">
            {Object.keys(projects).length}
          </span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-all"
        >
          View Navigation Panel
        </button>
      </div>

      <Sidebar
        projects={projects}
        selectedProjectId={selectedProjectId}
        viewState={viewState}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        onCloseSidebar={() => setIsSidebarOpen(false)}
        isOpen={isSidebarOpen}
      />

      {/* Main Responsive Dynamic Content Area Switcher */}
      <main className="flex-1 overflow-y-auto pt-44 lg:pt-14 pb-12 px-4 sm:px-8 md:px-12 xl:px-16 flex justify-center items-start">
        {viewState === "none" && (
          <EmptyState onStartAddProject={handleStartAddProject} />
        )}

        {viewState === "adding" && (
          <ProjectForm
            onSave={handleSaveProject}
            onCancel={() =>
              setViewState(selectedProjectId ? "viewing" : "none")
            }
          />
        )}

        {viewState === "viewing" && selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onDeleteProject={handleDeleteProject}
            onAddTask={handleAddTask}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </main>
    </section>
  );
}
