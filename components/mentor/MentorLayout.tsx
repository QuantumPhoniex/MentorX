import React from 'react';
import { 
  LayoutDashboard, 
  Inbox, 
  CheckSquare, 
  History, 
  User, 
  BarChart3, 
  LogOut 
} from 'lucide-react';

interface MentorLayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
}

const MentorLayout: React.FC<MentorLayoutProps> = ({ 
  children, 
  activeView, 
  onNavigate, 
  onLogout 
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'incoming-requests', label: 'Incoming Requests', icon: <Inbox size={20} /> },
    { id: 'accepted-sessions', label: 'Accepted Sessions', icon: <CheckSquare size={20} /> },
    { id: 'session-history', label: 'Session History', icon: <History size={20} /> },
    { id: 'profile', label: 'Mentor Profile', icon: <User size={20} /> },
    { id: 'earnings', label: 'Earnings & Stats', icon: <BarChart3 size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col fixed md:relative h-16 md:h-screen z-40 bottom-0 md:bottom-auto">
        <div className="hidden md:flex items-center px-6 h-16 border-b border-slate-100">
          <span className="text-xl font-bold text-slate-900 tracking-tight">MentorX</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeView === item.id 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`mr-3 ${activeView === item.id ? 'text-indigo-600' : 'text-slate-400'}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-slate-100 hidden md:block">
            <button
              onClick={onLogout}
              className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <span className="mr-3 text-slate-400">
                <LogOut size={20} />
              </span>
              Log out
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto pt-16 md:pt-0 pb-20 md:pb-0 h-screen">
         {/* Mobile Header */}
         <div className="md:hidden fixed top-0 w-full bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 z-50">
            <span className="text-xl font-bold text-slate-900 tracking-tight">MentorX</span>
            <button onClick={onLogout} className="text-slate-500">
               <LogOut size={20} />
            </button>
         </div>

         {/* Content Area */}
         <div className="max-w-5xl mx-auto p-4 md:p-8">
            {children}
         </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 h-16 flex justify-around items-center z-50 px-2">
         {navItems.slice(0, 4).map((item) => (
             <button
               key={item.id}
               onClick={() => onNavigate(item.id)}
               className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                 activeView === item.id ? 'text-indigo-600' : 'text-slate-400'
               }`}
             >
               {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
               <span className="text-[10px] font-medium truncate w-full text-center px-1">{item.label}</span>
             </button>
         ))}
      </div>
    </div>
  );
};

export default MentorLayout;