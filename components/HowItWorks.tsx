import React from 'react';
import { PlusCircle, Users, Video, FileText } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <PlusCircle className="w-6 h-6" />,
      title: "Create your project",
      desc: "Share your idea, deadline, and where you’re stuck."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Choose a mentor",
      desc: "Get matched with seniors who’ve done similar work."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Attend a focused session",
      desc: "Discuss feasibility, tech stack, and execution."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Get a clear action plan",
      desc: "Receive a structured summary you can act on immediately."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-600">A simple flow to get you unblocked.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 z-10 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;