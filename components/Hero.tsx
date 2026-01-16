import React from 'react';
import Button from './Button';

interface HeroProps {
  onNavigate: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up opacity-0">
          Stuck on your project? <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Get clarity before it’s too late.</span>
        </h1>
        
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200 opacity-0">
          MentorX connects you with experienced mentors who guide your ideas, tech stack, and execution—without doing the work for you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300 opacity-0">
          <Button 
            variant="primary" 
            size="lg" 
            className="min-w-[160px] transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => onNavigate('login')}
          >
            Get Guidance
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[160px] text-indigo-700 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => onNavigate('login')}
          >
            Become a Mentor
          </Button>
        </div>

      </div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
         <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob delay-2000"></div>
         <div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-blue-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;