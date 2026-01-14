import React from 'react';
import { X, Check } from 'lucide-react';

const Principles: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Trust & Principles</h2>
          <p className="mt-4 text-slate-600">We prioritize learning and integrity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* What MentorX is NOT */}
          <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-lg font-bold text-red-900 mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span>
              What MentorX is NOT
            </h3>
            <ul className="space-y-4">
              {[
                "Not a freelancing site",
                "Not a code-dumping platform",
                "Not a shortcut to grades"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-red-800/80">
                  <X className="w-4 h-4 text-red-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What MentorX IS */}
          <div className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>
              What MentorX IS
            </h3>
            <ul className="space-y-4">
              {[
                "Guidance & Direction",
                "Technical Clarity",
                "Authentic Learning"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-indigo-800/80">
                  <Check className="w-4 h-4 text-indigo-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Principles;