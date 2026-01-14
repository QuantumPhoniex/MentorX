import React from 'react';
import { ChevronLeft, Calendar, Clock, AlertTriangle, FileText } from 'lucide-react';
import Button from '../Button';

interface RequestDetailProps {
  requestId: number;
  onNavigate: (view: string) => void;
  onAccept: () => void;
}

const RequestDetail: React.FC<RequestDetailProps> = ({ requestId, onNavigate, onAccept }) => {
  // Mock data fetching based on ID
  const request = {
      id: 1,
      seekerName: "Alex Thompson",
      projectTitle: "E-commerce Microservices",
      subject: "Distributed Systems",
      deadline: "Oct 25, 2025",
      overview: "I am building a microservices-based e-commerce backend using Python Flask. I'm trying to decouple the order processing service from the inventory service.",
      confusion: "I am confused about whether to use RabbitMQ or Kafka for the messaging queue, and how to handle distributed transactions (Sagas vs 2PC).",
      questions: [
          "Should I use an event-driven architecture for simple inventory updates?",
          "How do I handle data consistency if the inventory service fails after payment?",
          "Is Flask good enough for production or should I switch to FastAPI?"
      ]
  };

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-300">
      <button onClick={() => onNavigate('incoming-requests')} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6">
         <ChevronLeft size={16} className="mr-1" /> Back to requests
      </button>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
         <div className="p-8 border-b border-slate-100">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Request from {request.seekerName}</div>
                  <h1 className="text-2xl font-bold text-slate-900">{request.projectTitle}</h1>
               </div>
               <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  High Urgency
               </div>
            </div>
            
            <div className="flex gap-6 text-sm text-slate-600 mt-4">
               <div className="flex items-center"><Calendar size={16} className="mr-2 text-indigo-500" /> Deadline: {request.deadline}</div>
               <div className="flex items-center"><Clock size={16} className="mr-2 text-indigo-500" /> 45 mins requested</div>
            </div>
         </div>

         <div className="p-8 space-y-8">
            <section>
               <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <FileText size={20} className="mr-2 text-slate-400" /> Project Overview
               </h3>
               <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {request.overview}
               </p>
            </section>

            <section>
               <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-slate-400" /> Where they are stuck
               </h3>
               <p className="text-slate-700 leading-relaxed bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-900">
                  {request.confusion}
               </p>
            </section>

            <section>
               <h3 className="text-lg font-bold text-slate-900 mb-3">Top 3 Questions</h3>
               <ul className="space-y-3">
                  {request.questions.map((q, i) => (
                     <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{i + 1}</span>
                        <span className="text-slate-700">{q}</span>
                     </li>
                  ))}
               </ul>
            </section>
         </div>

         <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-end gap-4">
            <button 
               onClick={() => onNavigate('incoming-requests')}
               className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
            >
               Decline (with reason)
            </button>
            <Button onClick={onAccept} className="px-8">
               Accept Request
            </Button>
         </div>
      </div>
    </div>
  );
};

export default RequestDetail;