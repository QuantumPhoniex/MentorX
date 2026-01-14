import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import RoleSelection from './components/RoleSelection';
import SeekerApp from './components/seeker/SeekerApp';
import MentorApp from './components/mentor/MentorApp';

type ViewState = 'landing' | 'login' | 'role-selection' | 'dashboard';
type UserRole = 'seeker' | 'mentor' | null;

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [role, setRole] = useState<UserRole>(null);

  const handleNavigate = (targetView: string) => {
    setView(targetView as ViewState);
  };

  const handleLoginSuccess = () => {
    setView('role-selection');
  };

  const handleRoleSelect = (selectedRole: 'seeker' | 'mentor') => {
    setRole(selectedRole);
    setView('dashboard');
  };

  const handleLogout = () => {
    setRole(null);
    setView('landing');
  }

  // Router Logic
  if (view === 'login') {
    return <Login onBack={() => setView('landing')} onLoginSuccess={handleLoginSuccess} />;
  }

  if (view === 'role-selection') {
    return <RoleSelection onSelectRole={handleRoleSelect} />;
  }

  if (view === 'dashboard') {
    if (role === 'seeker') {
      return <SeekerApp onLogout={handleLogout} />;
    }
    
    if (role === 'mentor') {
      return <MentorApp onLogout={handleLogout} />;
    }
  }

  // Default to Landing
  return <Landing onNavigate={handleNavigate} />;
};

export default App;