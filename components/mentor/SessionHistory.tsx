import React from 'react';
import { Star, FileText } from 'lucide-react';

const SessionHistory: React.FC = () => {
  const history = [
    {
       id: 1,
       seeker: "Michael Chen",
       project: "Algorithmic Trading Bot",
       date: "Oct 10, 2025",
       rating: 5,
       topic: "Strategy Optimization"
    },
    {
       id: 2,
       seeker: "Sarah Williams",
       project: "Health Tracker App",
       date: "Oct 08, 2025",
       rating: 4,
       topic: "React Native Setup"
    },
    {
       id: 3,
       seeker: "David Miller",
       project: "IoT Home Automation",
       date: "Sep 25, 2025",
       rating: 5,
       topic: "MQTT Protocol"
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Session History</h1>
      
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase font-semibold text-slate-500 tracking-wider">
                  <th className="px-6 py-4">Seeker</th>
                  <th className="px-6 py-4">Project / Topic</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Summary</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {history.map((session) => (
                  <tr key={session.id} className="hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4 font-medium text-slate-900">{session.seeker}</td>
                     <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{session.project}</div>
                        <div className="text-xs text-slate-500">{session.topic}</div>
                     </td>
                     <td className="px-6 py-4 text-slate-600 text-sm">{session.date}</td>
                     <td className="px-6 py-4">
                        <div className="flex items-center text-sm font-medium text-slate-700">
                           <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1.5" />
                           {session.rating}.0
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                           <FileText size={16} className="mr-1.5" /> View
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default SessionHistory;