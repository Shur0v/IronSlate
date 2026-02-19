
import React from 'react';
import { LayoutDashboard, Dumbbell, TrendingUp, User } from 'lucide-react';
import { AppTab } from '../types';

interface BottomNavProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: AppTab.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: AppTab.WORKOUT, label: 'Workout', icon: Dumbbell },
    { id: AppTab.PROGRESS, label: 'Progress', icon: TrendingUp },
    { id: AppTab.PROFILE, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#121821]/95 backdrop-blur-lg border-t border-[#242E3D] px-4 pt-2 ios-bottom-padding z-50">
      <div className="max-w-md mx-auto flex justify-between items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 gap-1 transition-all duration-200 active:scale-90 ${
                isActive ? 'text-[#3db6fe]' : 'text-[#6B7280]'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                {tab.id}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
