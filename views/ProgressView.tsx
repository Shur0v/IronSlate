
import React from 'react';
import { Typography, Card } from '../components/UI';
import { TrendingUp, Target, Award, Zap, BarChart3, ChevronRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const squatData = [
  { month: 'Jan', weight: 120 },
  { month: 'Feb', weight: 125 },
  { month: 'Mar', weight: 132.5 },
  { month: 'Apr', weight: 140 },
  { month: 'May', weight: 145 },
];

const benchData = [
  { month: 'Jan', weight: 85 },
  { month: 'Feb', weight: 87.5 },
  { month: 'Mar', weight: 92.5 },
  { month: 'Apr', weight: 97.5 },
  { month: 'May', weight: 102.5 },
];

const milestones = [
  { name: '100kg Bench Press', date: 'May 12, 2024', icon: <Award className="text-[#3db6fe]" /> },
  { name: '300kg Total Club', date: 'Apr 28, 2024', icon: <Zap className="text-yellow-500" /> },
  { name: '20 Session Streak', date: 'Apr 05, 2024', icon: <TrendingUp className="text-emerald-500" /> },
];

export const ProgressView: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 pb-32">
      <header className="flex flex-col gap-1 mb-2">
        <Typography.Body className="!text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Analytics</Typography.Body>
        <Typography.H1>Progress</Typography.H1>
      </header>

      {/* Primary Metric Hero */}
      <Card className="bg-gradient-to-br from-[#121821] to-[#0D1117] border-[#3db6fe]/20">
        <div className="flex justify-between items-start mb-6">
          <div>
            <Typography.Body className="text-[11px] font-bold uppercase tracking-wider opacity-60">Est. 1RM Squat</Typography.Body>
            <div className="flex items-baseline gap-2">
              <Typography.Number className="!text-5xl">145</Typography.Number>
              <span className="text-lg font-bold text-[#6B7280]">kg</span>
            </div>
          </div>
          <div className="bg-[#3db6fe]/10 p-3 rounded-2xl border border-[#3db6fe]/20">
            <BarChart3 className="text-[#3db6fe]" size={24} />
          </div>
        </div>
        
        <div className="h-32 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={squatData}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3db6fe" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3db6fe" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="weight" 
                stroke="#3db6fe" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorWeight)" 
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#121821', border: '1px solid #242E3D', borderRadius: '12px' }}
                itemStyle={{ color: '#3db6fe' }}
                labelStyle={{ color: '#6B7280', fontWeight: 'bold' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Mini Lift Progress List */}
      <div className="flex flex-col gap-4">
        <Typography.H3 className="!text-[15px] font-bold uppercase tracking-widest opacity-80 flex items-center gap-2">
          <Target size={16} className="text-[#3db6fe]" /> Major Lifts
        </Typography.H3>
        
        <div className="grid grid-cols-1 gap-3">
          <Card className="!p-4 flex items-center justify-between group hover:border-[#3db6fe]/30 cursor-pointer transition-all">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-tighter mb-0.5">Bench Press</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black tabular-nums">102.5</span>
                <span className="text-[10px] font-bold text-emerald-500 uppercase">+2.5kg</span>
              </div>
            </div>
            <div className="h-10 w-24">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={benchData}>
                  <Area type="monotone" dataKey="weight" stroke="#3db6fe" strokeWidth={2} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="!p-4 flex items-center justify-between group hover:border-[#3db6fe]/30 cursor-pointer transition-all">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-tighter mb-0.5">Deadlift</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black tabular-nums">180</span>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase">STABLE</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#6B7280]">
              <span className="text-[10px] font-bold">Details</span>
              <ChevronRight size={14} />
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Milestones */}
      <div className="flex flex-col gap-4">
        <Typography.H3 className="!text-[15px] font-bold uppercase tracking-widest opacity-80 flex items-center gap-2">
          <Award size={16} className="text-yellow-500" /> Milestones
        </Typography.H3>
        
        <div className="flex flex-col gap-2">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-[#121821] border border-[#242E3D] rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#1A222E] flex items-center justify-center">
                {m.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight">{m.name}</span>
                <span className="text-[11px] text-[#6B7280]">{m.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body Stats Section */}
      <Card className="flex flex-col gap-4">
         <div className="flex justify-between items-center">
            <Typography.H3 className="!text-sm">Body Weight</Typography.H3>
            <span className="text-xs font-bold text-[#3db6fe]">82.4 kg</span>
         </div>
         <div className="w-full h-1 bg-[#1A222E] rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-[#3db6fe]" />
         </div>
         <div className="flex justify-between items-center">
            <Typography.Body className="!text-[10px] uppercase">Goal: 80.0 kg</Typography.Body>
            <Typography.Body className="!text-[10px] uppercase">2.4 kg to go</Typography.Body>
         </div>
      </Card>
    </div>
  );
};
