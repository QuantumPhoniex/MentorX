import React from 'react';
import { ChevronLeft, ThumbsUp, AlertTriangle, Lightbulb, List } from 'lucide-react';
import Button from '../Button';

interface SessionSummaryProps {
  onNavigate: (view: string) => void;
}

const SessionSummary: React.FC<SessionSummaryProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-300">
      <button onClick={() => onNavigate('project-detail')} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6">
         <ChevronLeft size={16} className="mr-1" /> Back to project
      </button>

      <div className="flex justify-between items-end mb-8">
        <div>
           <div className="text-sm text-slate-500 mb-1">Session on Oct 12, 2025</div>
           <h1 className="text-3xl font-bold text-slate-900">Database Schema Review</h1>
           <div className="flex items-center mt-2">
              <span className="text-sm text-slate-600 mr-2">Mentor:</span>
              <div className="flex items-center bg-slate-100 rounded-full px-2 py-0.5">
                 <div className="w-5 h-5 bg-indigo-200 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-800 mr-2">DK</div>
                 <span className="text-sm font-medium text-slate-800">David Kim</span>
              </div>
           </div>
        </div>
        <div className="hidden sm:block">
           <Button variant="outline" size="sm">Download PDF</Button>
        </div>
      </div>

      <div className="space-y-8">
         {/* Verdict */}
         <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center">
               <Lightbulb className="w-5 h-5 mr-2" /> Mentor Verdict
            </h3>
            <p className="text-indigo-800 leading-relaxed">
               "Your initial idea to use NoSQL was good for flexibility, but given your requirement for strict relational mapping between Students, Classes, and Attendance records, a SQL database is much safer and will save you headache during query generation."
            </p>
         </div>

         {/* Sections */}
         <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
             <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Recommended Tech Stack</h3>
             <ul className="space-y-3">
                <li className="flex items-start">
                   <span className="font-bold text-slate-700 w-32 flex-shrink-0">Database</span>
                   <span className="text-slate-600">PostgreSQL (via Supabase for easy hosting)</span>
                </li>
                <li className="flex items-start">
                   <span className="font-bold text-slate-700 w-32 flex-shrink-0">Backend</span>
                   <span className="text-slate-600">FastAPI (Python) - great for your ML model integration</span>
                </li>
                <li className="flex items-start">
                   <span className="font-bold text-slate-700 w-32 flex-shrink-0">Frontend</span>
                   <span className="text-slate-600">React + Tailwind CSS</span>
                </li>
             </ul>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2" /> Do's
               </h3>
               <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm">
                  <li>Use foreign keys for student_id</li>
                  <li>Normalize data to 3rd normal form</li>
                  <li>Index the 'attendance_date' column</li>
               </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" /> Don'ts
               </h3>
               <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm">
                  <li>Don't store images directly in DB (use S3)</li>
                  <li>Don't use raw SQL queries (use ORM)</li>
                  <li>Avoid cascading deletes for now</li>
               </ul>
            </div>
         </div>

         <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
             <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center border-b border-slate-100 pb-2">
                <List className="w-5 h-5 mr-2 text-slate-500" /> Execution Roadmap
             </h3>
             <div className="space-y-6">
                {[
                   { step: 1, title: "Setup Database", desc: "Create Supabase project and run the schema migration script provided." },
                   { step: 2, title: "Connect Python", desc: "Install `psycopg2` and `sqlalchemy`. Test connection string." },
                   { step: 3, title: "Test Insert", desc: "Write a script to insert a dummy student record." }
                ].map((item) => (
                   <div key={item.step} className="flex">
                      <div className="flex-shrink-0 flex flex-col items-center mr-4">
                         <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">
                            {item.step}
                         </div>
                         {item.step !== 3 && <div className="h-full w-0.5 bg-slate-100 my-1"></div>}
                      </div>
                      <div className="pb-4">
                         <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                         <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
         </div>

         <div className="bg-slate-100 p-8 rounded-xl text-center">
            <h3 className="font-bold text-slate-900 mb-2">Was this summary helpful?</h3>
            <div className="flex justify-center space-x-4 mt-4">
               <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-green-50 hover:border-green-300 text-sm font-medium transition-colors">Yes, clarify gained</button>
               <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-red-50 hover:border-red-300 text-sm font-medium transition-colors">No, still confused</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SessionSummary;