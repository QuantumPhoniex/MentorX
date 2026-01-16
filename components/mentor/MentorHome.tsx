import React from 'react';
import { Inbox, CheckSquare, Star, FolderOpen, Calendar, ArrowRight } from 'lucide-react';
import Button from '../Button';

interface MentorHomeProps {
  onNavigate: (view: string) => void;
}

const MentorHome: React.FC<MentorHomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8">
      
      {/* Greeting */}
      <div className="animate-fade-in-up opacity-0">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Sarah.</h1>
        <p className="text-slate-600 mt-1">You have 2 new requests awaiting review.</p>
      </div>

      {/* Today's Sessions */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm animate-fade-in-up delay-100 opacity-0">
         <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
               <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
               Today's Sessions
            </h3>
            <span className="text-sm text-slate-500">Oct 14, 2025</span>
         </div>
         
         <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center space-x-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-indigo-600 text-lg border border-indigo-100">
                  JD
               </div>
               <div>
                  <h4 className="font-bold text-slate-900">John Doe</h4>
                  <p className="text-sm text-slate-600">Smart Attendance System</p>
               </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
               <div className="text-right flex-1 sm:flex-none">
                  <div className="text-sm font-semibold text-slate-900">10:00 AM</div>
                  <div className="text-xs text-slate-500">45 mins</div>
               </div>
               <Button size="sm" onClick={() => onNavigate('accepted-sessions')}>Prepare Session</Button>
            </div>
         </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
            { label: 'Requests Pending', value: '2', icon: <Inbox className="text-blue-600" size={20} />, bg: 'bg-blue-50' },
            { label: 'Sessions Completed', value: '124', icon: <CheckSquare className="text-green-600" size={20} />, bg: 'bg-green-50' },
            { label: 'Average Rating', value: '4.9', icon: <Star className="text-yellow-600" size={20} />, bg: 'bg-yellow-50' },
            { label: 'Active Projects', value: '5', icon: <FolderOpen className="text-purple-600" size={20} />, bg: 'bg-purple-50' },
         ].map((stat, i) => (
            <div 
               key={i} 
               className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-32 animate-fade-in-up opacity-0 hover:-translate-y-1 transition-transform duration-200"
               style={{ animationDelay: `${200 + (i * 100)}ms` }}
            >
               <div className={`w-10 h-10 ${stat.bg} rounded-full flex items-center justify-center mb-2`}>
                  {stat.icon}
               </div>
               <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">{stat.label}</div>
               </div>
            </div>
         ))}
      </div>

      {/* Primary CTA Area */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up delay-700 opacity-0 shadow-lg shadow-slate-200">
         <div>
            <h3 className="text-xl font-bold mb-2">Review New Requests</h3>
            <p className="text-slate-300 max-w-lg">
               Students are waiting for your guidance. Please review pending requests within 24 hours to maintain your response rate.
            </p>
         </div>
         <Button 
            className="bg-white text-slate-900 hover:bg-slate-100 border-transparent min-w-[160px] transform hover:scale-105 transition-transform"
            onClick={() => onNavigate('incoming-requests')}
         >
            Go to Requests
         </Button>
      </div>

    </div>
  );
};

export default MentorHome;