import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Chrome } from 'lucide-react';
import Button from './Button';

interface LoginProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Panel: Brand Context */}
      <div className="w-full md:w-5/12 lg:w-4/12 bg-indigo-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl mix-blend-screen animate-blob delay-2000"></div>
        </div>

        <div className="relative z-10 animate-fade-in-up">
          <button 
            onClick={onBack} 
            className="flex items-center text-indigo-200 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <div className="mb-4">
            <span className="text-3xl font-bold text-white tracking-tight">MentorX</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-indigo-50">
            Clear guidance when you’re stuck.
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed">
            Structured mentorship for academic projects. <br/>
            No code sharing. No shortcuts.
          </p>
        </div>

        <div className="relative z-10 mt-12 md:mt-0 animate-fade-in-up delay-200">
          <ul className="space-y-4">
            {[
              "Idea validation",
              "Execution roadmap",
              "Mistake prevention"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Panel: Login Card */}
      <div className="w-full md:w-7/12 lg:w-8/12 bg-slate-50 p-6 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 animate-scale-in">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Welcome back</h3>
          
          <div className="space-y-6">
            {/* Primary Login */}
            <button 
              onClick={onLoginSuccess}
              className="w-full flex items-center justify-center bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-sm active:scale-95 hover:shadow-indigo-500/20"
            >
              {/* Using Chrome icon as proxy for Google G since it's not in standard Lucide set */}
              <div className="bg-white rounded-full p-0.5 mr-3">
                 <Chrome className="w-4 h-4 text-indigo-600" />
              </div>
              Continue with Google
            </button>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <span className="relative bg-white px-3 text-sm text-slate-500 font-medium">or</span>
            </div>

            {/* Email Login */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="animate-fade-in-up delay-100">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="animate-fade-in-up delay-300">
                <Button 
                    type="submit" 
                    fullWidth 
                    variant="secondary" 
                    className="bg-slate-100 text-slate-900 hover:bg-slate-200 border-slate-200 mt-2"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Log in'}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center space-x-6 text-xs text-slate-400">
             <a href="#" className="hover:text-slate-600">Privacy Policy</a>
             <a href="#" className="hover:text-slate-600">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;