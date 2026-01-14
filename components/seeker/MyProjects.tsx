import React from 'react';
import { PlusCircle, Clock, ChevronRight } from 'lucide-react';

interface MyProjectsProps {
  onNavigate: (view: string) => void;
}

const MyProjects: React.FC<MyProjectsProps> = ({ onNavigate }) => {
  const projects = [
    {
      id: 1,
      title: "Smart Attendance System",
      subject: "Computer Vision",
      deadline: "Oct 25, 2025",
      status: "Active",
      progress: 65
    },
    {
      id: 2,
      title: "E-commerce Microservices",
      subject: "Distributed Systems",
      deadline: "Nov 12, 2025",
      status: "Active",
      progress: 30
    },
    {
      id: 3,
      title: "Portfolio Website",
      subject: "Web Development",
      deadline: "Sep 15, 2025",
      status: "Completed",
      progress: 100
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">My Projects</h1>
        <button 
          onClick={() => onNavigate('create-project')}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm"
        >
          <PlusCircle size={18} className="mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col cursor-pointer group"
            onClick={() => onNavigate('project-detail')}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{project.subject}</span>
              <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${
                project.status === 'Active' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <Clock size={16} className="mr-1.5" />
              Due {project.deadline}
            </div>

            <div className="mt-auto">
              <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${project.status === 'Completed' ? 'bg-green-500' : 'bg-indigo-600'}`} 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <span className="text-sm font-medium text-indigo-600 flex items-center group-hover:underline">
                  View Details <ChevronRight size={16} className="ml-1" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;