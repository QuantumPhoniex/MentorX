import React from 'react';
import Button from './Button';

interface HeroProps {
  onNavigate: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
          Stuck on your project? <br className="hidden sm:block" />
          <span className="text-indigo-600">Get clarity before it’s too late.</span>
        </h1>
        
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          MentorX connects you with experienced mentors who guide your ideas, tech stack, and execution—without doing the work for you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            className="min-w-[160px]"
            onClick={() => onNavigate('login')}
          >
            Get Guidance
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[160px] text-indigo-700 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50"
            onClick={() => onNavigate('login')}
          >
            Become a Mentor
          </Button>
        </div>

      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-30">
         <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-indigo-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
         <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-blue-50 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>
    </section>
  );
};

export default Hero;