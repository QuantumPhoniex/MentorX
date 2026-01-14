import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../Button';

interface CreateProjectProps {
  onNavigate: (view: string) => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  
  const handleSubmit = () => {
    // Simulate API call
    onNavigate('project-detail');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('projects')} className="text-slate-500 hover:text-slate-900 flex items-center text-sm">
            <ChevronLeft size={16} className="mr-1" /> Cancel
          </button>
          <span className="text-sm font-medium text-slate-600">Step {step} of {totalSteps}</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Basics</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Academic Subject / Course</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Distributed Systems" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Academic Year</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                  <option>Select Year</option>
                  <option>Freshman</option>
                  <option>Sophomore</option>
                  <option>Junior</option>
                  <option>Senior</option>
                  <option>Masters / PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deadline Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What are you building?</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Title</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Smart Attendance System" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-32" placeholder="Briefly describe what the project is supposed to do..."></textarea>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Where are you stuck?</h2>
            <div className="space-y-6">
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Select your current stage</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Idea Validation', 'Tech Stack Selection', 'Architecture Design', 'Coding / Execution', 'Debugging / Fixes', 'Final Polish'].map((stage) => (
                    <label key={stage} className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                      <input type="radio" name="stage" className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                      <span className="ml-3 text-sm font-medium text-slate-700">{stage}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
           <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Questions</h2>
            <p className="text-slate-500 mb-6 text-sm">Listing your top questions helps mentors prepare before the session.</p>
            <div className="space-y-4">
              {[1, 2, 3].map((num) => (
                <div key={num}>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Question {num}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder={`Enter question ${num}...`} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>Back</Button>
          ) : (
             <div></div> 
          )}
          
          {step < totalSteps ? (
            <Button onClick={nextStep} className="flex items-center">
              Next Step <ChevronRight size={16} className="ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700">
              Create Project
            </Button>
          )}
        </div>

      </div>
    </div>
  );
};

export default CreateProject;