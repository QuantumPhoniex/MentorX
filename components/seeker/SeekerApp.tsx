import React, { useState } from 'react';
import SeekerLayout from './SeekerLayout';
import SeekerHome from './SeekerHome';
import MyProjects from './MyProjects';
import CreateProject from './CreateProject';
import BookSession from './BookSession';
import ProjectDetail from './ProjectDetail';
import SessionSummary from './SessionSummary';

interface SeekerAppProps {
  onLogout: () => void;
}

const SeekerApp: React.FC<SeekerAppProps> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <SeekerHome onNavigate={setCurrentView} />;
      case 'projects':
        return <MyProjects onNavigate={setCurrentView} />;
      case 'create-project':
        return <CreateProject onNavigate={setCurrentView} />;
      case 'book-session':
        return <BookSession onNavigate={setCurrentView} />;
      case 'project-detail':
        return <ProjectDetail onNavigate={setCurrentView} />;
      case 'session-summary':
        return <SessionSummary onNavigate={setCurrentView} />;
      case 'ongoing-sessions':
        return (
             <div className="text-center py-20">
                <h2 className="text-xl font-semibold text-slate-600">No sessions currently in progress.</h2>
                <button onClick={() => setCurrentView('book-session')} className="mt-4 text-indigo-600 hover:underline">Book a session</button>
             </div>
        );
      case 'past-sessions':
         return (
             <div className="text-center py-20">
                <h2 className="text-xl font-semibold text-slate-600">Past Sessions Archive</h2>
                <p className="text-slate-400 mt-2">Check Project Details for specific summaries.</p>
                <button onClick={() => setCurrentView('projects')} className="mt-4 text-indigo-600 hover:underline">Go to Projects</button>
             </div>
        );
      default:
        return <SeekerHome onNavigate={setCurrentView} />;
    }
  };

  return (
    <SeekerLayout 
      activeView={currentView} 
      onNavigate={setCurrentView} 
      onLogout={onLogout}
    >
      {renderView()}
    </SeekerLayout>
  );
};

export default SeekerApp;