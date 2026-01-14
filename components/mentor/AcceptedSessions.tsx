import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import Button from '../Button';

interface AcceptedSessionsProps {
  onNavigate: (view: string) => void;
}

const AcceptedSessions: React.FC<AcceptedSessionsProps> = ({ onNavigate }) => {
  const sessions = [
    {
      id: 1,
      seekerName: "John Doe",
      projectTitle: "Smart Attendance System",
      date: "Today",
      time: "10:00 AM",
      countdown: "In 1 hour",
      status: "Upcoming"
    },
    {
      id: 3,
      seekerName: "Alex Thompson",
      projectTitle: "E-commerce Microservices",
      date: "Oct 15",
      time: "2:00 PM",
      countdown: "Tomorrow",
      status: "Upcoming"
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Accepted Sessions</h1>
      
      <div className="grid grid-cols-1 gap-6">
         {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-100">
                     <User size={24} />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-slate-900">{session.seekerName}</h3>
                     <div className="text-indigo-600 font-medium text-sm mb-1">{session.projectTitle}</div>
                     <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={14} className="mr-1.5" />
                        {session.date} at {session.time}
                        <span className="mx-2">•</span>
                        <span className="text-green-600 font-semibold">{session.countdown}</span>
                     </div>
                  </div>
               </div>
               
               <div className="w-full md:w-auto">
                  <Button 
                     fullWidth={false} 
                     className="w-full md:w-auto"
                     onClick={() => onNavigate('prepare-session')}
                  >
                     Prepare Session <ArrowRight size={16} className="ml-2" />
                  </Button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default AcceptedSessions;