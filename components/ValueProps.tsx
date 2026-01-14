import React from 'react';
import { Clock, Map, GraduationCap } from 'lucide-react';

const ValueProps: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "Right Guidance, Right Time",
      description: "Get help exactly when you’re confused—not after wasting weeks trying to figure it out alone."
    },
    {
      icon: <Map className="w-6 h-6 text-indigo-600" />,
      title: "Structured Mentorship",
      description: "Clear action plans, mistake warnings, and execution roadmaps—not vague advice that leaves you guessing."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "Built for Academic Projects",
      description: "Designed specifically for semester projects, thesis work, and assignments where learning is the goal."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;