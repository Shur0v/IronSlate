
import React from 'react';
import { Typography, Card, Button } from '../components/UI';
import { Activity, Trophy, Calendar, Plus, Dumbbell, History, Target, TrendingUp, Clock } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const mockVolumeData = [
  { day: 'M', vol: 4500 },
  { day: 'T', vol: 5200 },
  { day: 'W', vol: 0 },
  { day: 'T', vol: 6100 },
  { day: 'F', vol: 4800 },
  { day: 'S', vol: 0 },
  { day: 'S', vol: 3100 },
];

const movementMaxes = [
  { name: 'Back Squat', weight: 145, unit: 'kg' },
  { name: 'Bench Press', weight: 102.5, unit: 'kg' },
  { name: 'Deadlift', weight: 180, unit: 'kg' },
  { name: 'Overhead Press', weight: 65, unit: 'kg' },
];

const recentWorkouts = [
  { id: 'w1', name: 'Legs A', date: 'Yesterday', volume: '12,450', duration: '55m' },
  { id: 'w2', name: 'Pull Day B', date: '3 days ago', volume: '8,900', duration: '42m' },
  { id: 'w3', name: 'Push Day A', date: 'Last Thursday', volume: '10,120', duration: '61m' },
];

export const Dashboard: React.FC<{ onStartWorkout: () => void }> = ({ onStartWorkout }) => {
  return (
    <div className="flex flex-col gap-6 pb-32">
      {/* Header with Larger Logo Only */}
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://ironslate.co.uk/assets/logo-aHllsNa3.png" 
            alt="IRON SLATE" 
            className="h-12 w-auto brightness-110 drop-shadow-[0_0_10px_rgba(61,182,254,0.1)]"
          />
        </div>
        <div className="w-10 h-10 rounded-full border border-[#242E3D] bg-[#121821] flex items-center justify-center overflow-hidden">
           <div className="w-full h-full bg-gradient-to-tr from-[#3db6fe]/20 to-transparent flex items-center justify-center">
              <Activity size={18} className="text-[#3db6fe]" />
           </div>
        </div>
      </header>

      {/* Hero Action */}
      <Card className="bg-gradient-to-br from-[#121821] to-[#0D1117] relative overflow-hidden group border-[#3db6fe]/20">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Dumbbell size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-2 h-2 rounded-full bg-[#3db6fe] animate-pulse" />
             <Typography.Body className="!text-[11px] font-bold uppercase tracking-widest text-[#3db6fe]">Next Session Ready</Typography.Body>
          </div>
          <Typography.H2 className="mb-1 !text-2xl">Push Day A</Typography.H2>
          <Typography.Body className="mb-6 text-sm">Hypertrophy • Estimated 55 mins</Typography.Body>
          <Button onClick={onStartWorkout} className="w-full">
            <Plus size={20} className="mr-2" /> Start Workout
          </Button>
        </div>
      </Card>

      {/* Consistency Heatmap */}
      <div className="flex flex-col gap-3">
        <Typography.Body className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-60 ml-1">Weekly Consistency</Typography.Body>
        <div className="grid grid-cols-7 gap-2">
           {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => {
             const active = [0, 1, 3, 4, 6].includes(idx);
             return (
               <div key={idx} className="flex flex-col items-center gap-2">
                  <div className={`w-full aspect-square rounded-[8px] flex items-center justify-center transition-all ${
                    active ? 'bg-[#3db6fe] border border-[#3db6fe]/50 shadow-[0_0_15px_rgba(61,182,254,0.1)]' : 'bg-[#1A222E] border border-[#242E3D]'
                  }`}>
                    {active && <div className="w-1 h-1 bg-white rounded-full" />}
                  </div>
                  <span className="text-[9px] font-bold text-[#6B7280]">{day}</span>
               </div>
             )
           })}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col gap-1 hover:border-[#3db6fe]/30 transition-colors">
          <div className="flex justify-between items-start mb-1">
            <Typography.Body className="text-[10px] font-black uppercase tracking-widest opacity-60">Sessions</Typography.Body>
            <Calendar size={14} className="text-[#3db6fe]" />
          </div>
          <div className="flex items-baseline gap-2">
            <Typography.Number className="!text-3xl">12</Typography.Number>
            <span className="text-[10px] text-[#22C55E] font-bold">+15%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 hover:border-[#3db6fe]/30 transition-colors">
          <div className="flex justify-between items-start mb-1">
            <Typography.Body className="text-[10px] font-black uppercase tracking-widest opacity-60">Volume</Typography.Body>
            <TrendingUp size={14} className="text-[#3db6fe]" />
          </div>
          <div className="flex items-baseline gap-2">
            <Typography.Number className="!text-3xl">42k</Typography.Number>
            <span className="text-[10px] text-[#6B7280] font-bold">kg</span>
          </div>
        </Card>
      </div>

      {/* Volume Chart */}
      <Card className="py-6">
        <div className="flex justify-between items-center mb-8 px-1">
          <div>
            <Typography.H2 className="!text-lg">Activity Trend</Typography.H2>
            <Typography.Body className="text-[11px] uppercase tracking-wider">Volume (kg) over time</Typography.Body>
          </div>
          <div className="bg-[#1A222E] px-3 py-1 rounded-full border border-[#242E3D]">
             <span className="text-[10px] font-bold text-[#3db6fe]">7 DAYS</span>
          </div>
        </div>
        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockVolumeData}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 10, fontWeight: 700 }}
                dy={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#121821', 
                  border: '1px solid #242E3D', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
                itemStyle={{ color: '#3db6fe', fontSize: '12px', fontWeight: 700 }}
              />
              <Line 
                type="stepAfter" 
                dataKey="vol" 
                stroke="#3db6fe" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 5, fill: '#3db6fe', strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Movement Maxes */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end px-1">
          <Typography.H2 className="!text-lg">Movement Maxes</Typography.H2>
          <Typography.Body className="text-[10px] font-bold text-[#3db6fe] uppercase tracking-widest cursor-pointer">View All</Typography.Body>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {movementMaxes.map((lift) => (
            <Card key={lift.name} className="!p-4 flex justify-between items-center group hover:bg-[#1A222E] transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1A222E] group-hover:bg-[#121821] flex items-center justify-center border border-[#242E3D] transition-colors">
                   <Target size={18} className="text-[#6B7280]" />
                </div>
                <span className="font-bold text-sm tracking-tight">{lift.name}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-[#E6EDF3] tabular-nums">{lift.weight}</span>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase">{lift.unit}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent History */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end px-1">
          <Typography.H2 className="!text-lg">Recent Sessions</Typography.H2>
          <Typography.Body className="text-[10px] font-bold text-[#3db6fe] uppercase tracking-widest cursor-pointer">History</Typography.Body>
        </div>
        <div className="flex flex-col gap-3">
          {recentWorkouts.map((session) => (
            <div key={session.id} className="bg-[#121821] border border-[#242E3D] rounded-[16px] p-4 flex flex-col gap-3">
               <div className="flex justify-between items-start">
                  <div>
                    <Typography.H3 className="!text-[15px] font-bold mb-0.5">{session.name}</Typography.H3>
                    <Typography.Body className="!text-[11px] opacity-50">{session.date}</Typography.Body>
                  </div>
                  <History size={16} className="text-[#6B7280]" />
               </div>
               <div className="flex gap-4 border-t border-[#242E3D] pt-3">
                  <div className="flex items-center gap-1.5">
                     <TrendingUp size={12} className="text-[#3db6fe]" />
                     <span className="text-[12px] font-bold tabular-nums">{session.volume} <span className="text-[#6B7280] font-normal">kg</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <Clock size={12} className="text-[#3db6fe]" />
                     <span className="text-[12px] font-bold tabular-nums">{session.duration}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Motivation (Minimalist) */}
      <div className="py-8 flex flex-col items-center gap-2 opacity-30 text-center">
        <Typography.Body className="!text-[10px] font-bold uppercase tracking-[0.4em]">Consistency Over Intensity</Typography.Body>
        <div className="w-12 h-[1px] bg-[#242E3D]" />
      </div>
    </div>
  );
};
