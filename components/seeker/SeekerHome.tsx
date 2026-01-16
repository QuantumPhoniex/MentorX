import React from 'react';
import { Clock, Calendar, ArrowRight, FileText } from 'lucide-react';
import Button from '../Button';

interface SeekerHomeProps {
  onNavigate: (view: string) => void;
}

const SeekerHome: React.FC<SeekerHomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8">
      
      {/* Greeting */}
      <div className="animate-fade-in-up opacity-0">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Alex.</h1>
        <p className="text-slate-600 mt-1">Ready to make progress on your projects today?</p>
      </div>

      {/* Highlight Card: Current Project */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden animate-fade-in-up delay-100 opacity-0 transition-all duration-300 hover:shadow-xl hover:border-indigo-200 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none animate-pulse-slow"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
               <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wide group-hover:bg-blue-100 transition-colors">
                 Active Project
               </span>
               <span className="text-sm text-slate-500 flex items-center">
                 <Clock size={14} className="mr-1" /> Deadline: Oct 25, 2025
               </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-900 transition-colors">Smart Attendance System</h2>
            <p className="text-slate-600 max-w-lg">
               Currently stuck on: integrating the facial recognition API with the backend database safely.
            </p>
          </div>
          <div className="flex-shrink-0">
             <Button onClick={() => onNavigate('book-session')} size="lg" className="shadow-lg shadow-indigo-200 hover:shadow-indigo-300">
               Get Guidance Now
             </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Next Scheduled Session */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm animate-fade-in-up delay-200 opacity-0 hover:shadow-md transition-shadow">
           <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
             <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
             Next Session
           </h3>
           <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
             <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">
               SJ
             </div>
             <div>
               <div className="font-semibold text-slate-900">Sarah Jenkins</div>
               <div className="text-sm text-slate-600 mt-0.5">Tomorrow, 10:00 AM</div>
               <div className="text-xs text-green-600 font-medium mt-2 flex items-center">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                 Confirmed
               </div>
             </div>
           </div>
        </div>

        {/* Progress / Recent Summaries */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm animate-fade-in-up delay-300 opacity-0 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center">
                <FileText className="w-5 h-5 text-indigo-600 mr-2" />
                Recent Summaries
              </h3>
              <button 
                onClick={() => onNavigate('past-sessions')}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
              >
                View all
              </button>
            </div>
            
            <div className="space-y-3">
              {[
                { title: "Database Schema Review", date: "2 days ago", mentor: "David K." },
                { title: "React State Management", date: "Last week", mentor: "Sarah J." },
              ].map((summary, i) => (
                <div 
                  key={i} 
                  onClick={() => onNavigate('session-summary')}
                  className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-100 group"
                >
                  <div>
                    <div className="font-medium text-slate-900 text-sm group-hover:text-indigo-700 transition-colors">{summary.title}</div>
                    <div className="text-xs text-slate-500">with {summary.mentor} • {summary.date}</div>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 transition-all transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerHome;