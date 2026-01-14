import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-slate-900">MentorX</span>
          <span className="text-slate-400 text-sm">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">About</a>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;