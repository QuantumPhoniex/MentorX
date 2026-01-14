import React, { useState } from 'react';
import MentorLayout from './MentorLayout';
import MentorHome from './MentorHome';
import IncomingRequests from './IncomingRequests';
import RequestDetail from './RequestDetail';
import AcceptedSessions from './AcceptedSessions';
import PrepareSession from './PrepareSession';
import SessionHistory from './SessionHistory';
import MentorProfile from './MentorProfile';
import EarningsStats from './EarningsStats';

interface MentorAppProps {
  onLogout: () => void;
}

const MentorApp: React.FC<MentorAppProps> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

  const handleRequestSelect = (id: number) => {
     setSelectedRequestId(id);
     setCurrentView('request-detail');
  };

  const handleAcceptRequest = () => {
     setCurrentView('accepted-sessions');
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <MentorHome onNavigate={setCurrentView} />;
      case 'incoming-requests':
        return <IncomingRequests onNavigate={setCurrentView} onRequestSelect={handleRequestSelect} />;
      case 'request-detail':
        return selectedRequestId ? (
             <RequestDetail 
                requestId={selectedRequestId} 
                onNavigate={setCurrentView} 
                onAccept={handleAcceptRequest}
             />
        ) : <IncomingRequests onNavigate={setCurrentView} onRequestSelect={handleRequestSelect} />;
      case 'accepted-sessions':
        return <AcceptedSessions onNavigate={setCurrentView} />;
      case 'prepare-session':
        return <PrepareSession onNavigate={setCurrentView} />;
      case 'session-history':
        return <SessionHistory />;
      case 'profile':
        return <MentorProfile />;
      case 'earnings':
        return <EarningsStats />;
      default:
        return <MentorHome onNavigate={setCurrentView} />;
    }
  };

  return (
    <MentorLayout 
      activeView={currentView} 
      onNavigate={setCurrentView} 
      onLogout={onLogout}
    >
      {renderView()}
    </MentorLayout>
  );
};

export default MentorApp;