import React from 'react';
import { User, GraduationCap, ArrowRight } from 'lucide-react';

interface RoleSelectionProps {
  onSelectRole: (role: 'seeker' | 'mentor') => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-xl font-bold text-slate-900 tracking-tight mb-6">MentorX</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">How will you use MentorX?</h1>
          <p className="mt-4 text-slate-600 text-lg">Select your primary role to get started.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
          {/* Seeker Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col" onClick={() => onSelectRole('seeker')}>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <User className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Seeker</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I need guidance on my academic project to move forward with clarity.
            </p>
            <button 
              className="mt-auto flex items-center justify-center w-full py-3 px-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onSelectRole('seeker');
              }}
            >
              Continue as Seeker
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
            </button>
          </div>

          {/* Mentor Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col" onClick={() => onSelectRole('mentor')}>
            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Mentor</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I want to guide students using my experience and earn by teaching.
            </p>
            <button 
              className="mt-auto flex items-center justify-center w-full py-3 px-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onSelectRole('mentor');
              }}
            >
              Continue as Mentor
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">You can add another role to your profile later.</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;