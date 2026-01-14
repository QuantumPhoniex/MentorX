import React from 'react';
import { Clock, AlertCircle, Calendar, Inbox } from 'lucide-react';
import Button from '../Button';

interface IncomingRequestsProps {
  onNavigate: (view: string) => void;
  onRequestSelect: (id: number) => void;
}

const IncomingRequests: React.FC<IncomingRequestsProps> = ({ onNavigate, onRequestSelect }) => {
  const requests = [
    {
      id: 1,
      seekerName: "Alex Thompson",
      projectTitle: "E-commerce Microservices",
      subject: "Distributed Systems",
      urgency: "High",
      stage: "Architecture Design",
      duration: "45 mins",
      requestedFor: "Oct 15, 2:00 PM"
    },
    {
      id: 2,
      seekerName: "Maria Garcia",
      projectTitle: "Portfolio Website Optimization",
      subject: "Web Development",
      urgency: "Medium",
      stage: "Performance Tuning",
      duration: "30 mins",
      requestedFor: "Oct 16, 11:00 AM"
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Incoming Requests</h1>
      
      <div className="space-y-4">
        {requests.map((req) => (
          <div key={req.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                   <span className="font-bold text-slate-900">{req.seekerName}</span>
                   <span className="text-slate-300">•</span>
                   <span className="text-sm text-slate-500">{req.subject}</span>
                   {req.urgency === 'High' && (
                      <span className="px-2 py-0.5 bg-red-50 text-red-700 text-[10px] uppercase font-bold rounded-full">High Urgency</span>
                   )}
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{req.projectTitle}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mt-3">
                   <div className="flex items-center bg-slate-50 px-3 py-1 rounded-md">
                      <AlertCircle size={14} className="mr-2 text-indigo-500" />
                      Stage: {req.stage}
                   </div>
                   <div className="flex items-center bg-slate-50 px-3 py-1 rounded-md">
                      <Clock size={14} className="mr-2 text-indigo-500" />
                      {req.duration}
                   </div>
                   <div className="flex items-center bg-slate-50 px-3 py-1 rounded-md">
                      <Calendar size={14} className="mr-2 text-indigo-500" />
                      Requested: {req.requestedFor}
                   </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:flex-col md:items-end md:justify-center min-w-[140px]">
                 <Button fullWidth size="sm" onClick={() => onRequestSelect(req.id)}>View Details</Button>
                 <div className="flex gap-2 w-full">
                    <button className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 font-medium">Decline</button>
                    <button className="flex-1 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 font-medium">Accept</button>
                 </div>
              </div>
            </div>
          </div>
        ))}

        {requests.length === 0 && (
           <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
              <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-400">
                 <Inbox size={32} />
              </div>
              <h3 className="text-lg font-medium text-slate-900">No new requests</h3>
              <p className="text-slate-500">You're all caught up! Check back later.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default IncomingRequests;