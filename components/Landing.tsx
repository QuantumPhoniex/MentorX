import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ValueProps from './ValueProps';
import HowItWorks from './HowItWorks';
import RoleSplit from './RoleSplit';
import Principles from './Principles';
import Footer from './Footer';

interface LandingProps {
  onNavigate: (view: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onLoginClick={() => onNavigate('login')} />
      <main>
        <Hero onNavigate={onNavigate} />
        <ValueProps />
        <HowItWorks />
        <RoleSplit onNavigate={onNavigate} />
        <Principles />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;