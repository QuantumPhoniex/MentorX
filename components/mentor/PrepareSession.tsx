import React, { useState } from 'react';
import { ChevronLeft, Save, AlertCircle } from 'lucide-react';
import Button from '../Button';

interface PrepareSessionProps {
  onNavigate: (view: string) => void;
}

const PrepareSession: React.FC<PrepareSessionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'rules' | 'form'>('rules');

  const handleRulesAcknowledge = () => {
     setActiveTab('form');
     window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
     // Simulate submission
     onNavigate('dashboard');
  };

  if (activeTab === 'rules') {
     return (
        <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
           <button onClick={() => onNavigate('accepted-sessions')} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6">
              <ChevronLeft size={16} className="mr-1" /> Back to sessions
           </button>
           
           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6 mx-auto">
                 <AlertCircle size={24} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">Mentor Rules & Guidelines</h1>
              <p className="text-slate-500 text-center mb-8">Please review the rules before starting the session.</p>
              
              <div className="space-y-6">
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">Mentor Must:</h3>
                    <ul className="space-y-2 list-disc list-inside text-slate-700 text-sm">
                       <li>Ask clarifying questions before giving opinions</li>
                       <li>Speak in steps, not stories</li>
                       <li>Focus on decision-making, not implementation</li>
                       <li>Keep explanations concise and structured</li>
                    </ul>
                 </div>
                 
                 <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                    <h3 className="font-bold text-red-900 mb-3">Mentor Must NOT:</h3>
                    <ul className="space-y-2 list-disc list-inside text-red-800 text-sm">
                       <li>Write code or provide full solutions</li>
                       <li>Share personal contact details</li>
                       <li>Boast about achievements</li>
                       <li>Extend scope beyond academic needs</li>
                    </ul>
                 </div>
              </div>

              <div className="mt-8">
                 <Button fullWidth onClick={handleRulesAcknowledge}>
                    I Understand, Start Preparation
                 </Button>
              </div>
           </div>
        </div>
     );
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
       <div className="flex justify-between items-center mb-6">
         <button onClick={() => setActiveTab('rules')} className="flex items-center text-sm text-slate-500 hover:text-slate-900">
            <ChevronLeft size={16} className="mr-1" /> Review Rules
         </button>
         <div className="flex gap-3">
             <Button variant="outline" size="sm" className="flex items-center">
                <Save size={16} className="mr-2" /> Save Draft
             </Button>
             <Button size="sm" onClick={handleSubmit}>Submit Summary</Button>
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Session Summary Template</h2>
                
                <div className="space-y-6">
                   {/* Verdict */}
                   <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Idea Verdict</label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white mb-3">
                         <option>Feasible as-is</option>
                         <option>Needs refinement</option>
                         <option>Not suitable</option>
                      </select>
                      <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-24 text-sm" placeholder="Reasoning (Bullet points only)..."></textarea>
                   </div>

                   {/* Tech Stack */}
                   <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Recommended Tech Stack</label>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                         <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" placeholder="Languages (e.g. Python)" />
                         <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" placeholder="Frameworks (e.g. Flask)" />
                      </div>
                      <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-20 text-sm" placeholder="Why this stack fits..."></textarea>
                   </div>

                   {/* Roadmap */}
                   <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Execution Roadmap (Step-by-step)</label>
                      <div className="space-y-3">
                         {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex gap-2">
                               <span className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center font-bold text-sm">{step}</span>
                               <input type="text" className="w-full px-4 py-1.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" placeholder={`Step ${step} action...`} />
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Do's and Don'ts */}
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-bold text-green-700 mb-2">Do's (3 points)</label>
                         <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-32 text-sm" placeholder="- Use ORM..."></textarea>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-red-700 mb-2">Don'ts (3 points)</label>
                         <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-32 text-sm" placeholder="- Don't raw SQL..."></textarea>
                      </div>
                   </div>

                   {/* Question Answers */}
                   <div>
                      <label className="block text-sm font-bold text-slate-900 mb-4">Answers to Seeker's Questions</label>
                      <div className="space-y-4">
                         {[1, 2, 3].map((q) => (
                            <div key={q} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                               <p className="text-sm font-medium text-slate-700 mb-2">Q{q}: [Placeholder Question from Seeker]</p>
                               <textarea className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-20 text-sm bg-white" placeholder="Answer..."></textarea>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Reference Sidebar */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 sticky top-6">
                <h3 className="font-bold text-indigo-900 mb-4">Project Context</h3>
                <div className="space-y-4 text-sm">
                   <div>
                      <span className="block text-indigo-400 font-medium text-xs uppercase mb-1">Project</span>
                      <p className="text-indigo-900 font-medium">Smart Attendance System</p>
                   </div>
                   <div>
                      <span className="block text-indigo-400 font-medium text-xs uppercase mb-1">Subject</span>
                      <p className="text-indigo-800">Computer Vision</p>
                   </div>
                   <div>
                      <span className="block text-indigo-400 font-medium text-xs uppercase mb-1">Seeker's Confusion</span>
                      <p className="text-indigo-800 leading-relaxed">
                         "Stuck on integrating facial recognition API with backend. Don't know how to handle async processing."
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default PrepareSession;