import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

interface RoleSplitProps {
  onNavigate: (view: string) => void;
}

const RoleSplit: React.FC<RoleSplitProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Seeker Side */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4">
                For Seekers
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Need direction?</h2>
              <p className="text-slate-600 text-lg">Don't spin your wheels. Get expert advice to move forward with confidence.</p>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Validate your idea before building",
                "Fix your approach early",
                "Avoid common architectural mistakes",
                "Gain confidence and clarity"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="primary" 
              fullWidth 
              className="mt-auto"
              onClick={() => onNavigate('login')}
            >
              Get Guidance
            </Button>
          </div>

          {/* Mentor Side */}
          <div className="bg-slate-900 p-10 rounded-2xl shadow-lg flex flex-col h-full text-white">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-900 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4">
                For Mentors
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">Share your knowledge.</h2>
              <p className="text-slate-300 text-lg">Help the next generation of developers without writing code for them.</p>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Guide without coding execution",
                "Share real-world experience",
                "Earn through structured sessions",
                "Build credibility, not chaos"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="outline" 
              fullWidth 
              className="mt-auto border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white"
              onClick={() => onNavigate('login')}
            >
              Become a Mentor
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoleSplit;