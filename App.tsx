
import React, { useState } from 'react';
import { Login } from './views/Login';
import { Dashboard } from './views/Dashboard';
import { WorkoutView } from './views/WorkoutView';
import { ProgressView } from './views/ProgressView';
import { BottomNav } from './components/Navigation';
import { AppTab } from './types';
import { Typography } from './components/UI';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.DASHBOARD:
        return <Dashboard onStartWorkout={() => setActiveTab(AppTab.WORKOUT)} />;
      case AppTab.WORKOUT:
        return <WorkoutView />;
      case AppTab.PROGRESS:
        return <ProgressView />;
      case AppTab.PROFILE:
        return (
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-1 mb-2">
              <Typography.Body className="!text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Athlete Identity</Typography.Body>
              <Typography.H1>Profile</Typography.H1>
            </header>
            
            <div className="flex items-center gap-4 p-5 bg-[#121821] rounded-2xl border border-[#242E3D]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#3db6fe] to-[#1F6FDB] border-2 border-[#0D1117] shadow-xl" />
                <div className="flex flex-col">
                   <Typography.H2 className="!text-lg">Alex Mercer</Typography.H2>
                   <Typography.Body className="text-xs font-bold uppercase tracking-wider text-[#3db6fe]">Advanced Lifter • 4 Years</Typography.Body>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button className="flex justify-between items-center p-4 bg-[#121821] rounded-xl border border-[#242E3D] hover:bg-[#1A222E] transition-all">
                <span className="text-sm font-bold">Preferences</span>
                <div className="w-2 h-2 rounded-full bg-[#3db6fe]/40" />
              </button>
              <button className="flex justify-between items-center p-4 bg-[#121821] rounded-xl border border-[#242E3D] hover:bg-[#1A222E] transition-all">
                <span className="text-sm font-bold">Measurement Units</span>
                <span className="text-xs text-[#6B7280]">Metric (kg)</span>
              </button>
            </div>

            <button 
                onClick={() => setIsAuthenticated(false)}
                className="w-full py-4 text-[#EF4444] font-bold uppercase tracking-widest text-xs bg-[#EF4444]/5 border border-[#EF4444]/20 rounded-xl mt-4 active:scale-95 transition-all"
            >
                Log Out System
            </button>
          </div>
        );
      default:
        return <Dashboard onStartWorkout={() => setActiveTab(AppTab.WORKOUT)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] pb-10">
      <main className="max-w-md mx-auto p-4 pt-8">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
