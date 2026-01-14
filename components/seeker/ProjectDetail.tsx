import React from 'react';
import { ChevronLeft, Clock, FileText, CheckSquare, Plus } from 'lucide-react';
import Button from '../Button';

interface ProjectDetailProps {
  onNavigate: (view: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-300">
      <button onClick={() => onNavigate('projects')} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6">
         <ChevronLeft size={16} className="mr-1" /> Back to projects
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
           
           {/* Header */}
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Computer Vision</span>
                    <h1 className="text-3xl font-bold text-slate-900">Smart Attendance System</h1>
                 </div>
                 <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full">Active</span>
              </div>
              <p className="text-slate-600 mb-6">
                 An automated attendance tracking system using facial recognition with Python, OpenCV, and a React dashboard.
              </p>
              <div className="flex gap-4 border-t border-slate-100 pt-4">
                 <div className="text-sm text-slate-500">
                    <span className="block font-medium text-slate-900">Deadline</span> Oct 25, 2025
                 </div>
                 <div className="text-sm text-slate-500">
                    <span className="block font-medium text-slate-900">Year</span> Senior
                 </div>
              </div>
           </div>

           {/* Sessions Accordion */}
           <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Past Sessions</h2>
              <div className="space-y-4">
                 <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:border-indigo-300 transition-colors" onClick={() => onNavigate('session-summary')}>
                    <div className="p-4 flex items-center justify-between bg-slate-50 border-b border-slate-100">
                       <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-xs">DK</div>
                          <div>
                             <div className="font-semibold text-slate-900 text-sm">Database Schema Review</div>
                             <div className="text-xs text-slate-500">Oct 12 • 45 mins</div>
                          </div>
                       </div>
                       <Button variant="outline" size="md" className="py-1 px-3 text-xs h-8">View Summary</Button>
                    </div>
                    <div className="p-4">
                       <p className="text-sm text-slate-600 line-clamp-2">
                          Key takeaways: Switch from MongoDB to PostgreSQL for relational integrity on student records. Use Supabase for quick backend setup.
                       </p>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        {/* Sidebar Actions */}
        <div className="w-full lg:w-80 space-y-6">
           <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">Need more help?</h3>
              <p className="text-sm text-indigo-700 mb-4">Get unblocked on your next milestone.</p>
              <Button fullWidth onClick={() => onNavigate('book-session')}>Book a Session</Button>
           </div>

           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                 <CheckSquare size={18} className="mr-2 text-slate-400" /> Action Items
              </h3>
              <ul className="space-y-3">
                 {[
                    { text: "Install PostgreSQL locally", done: true },
                    { text: "Define User table schema", done: true },
                    { text: "Test OpenCV script with webcam", done: false },
                    { text: "Connect frontend to API", done: false }
                 ].map((item, i) => (
                    <li key={i} className="flex items-start">
                       <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 mt-0.5 ${item.done ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}`}>
                          {item.done && <Plus size={12} className="rotate-45" />}
                       </div>
                       <span className={`text-sm ${item.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{item.text}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-4 text-sm text-indigo-600 font-medium flex items-center hover:underline">
                 <Plus size={14} className="mr-1" /> Add Item
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;