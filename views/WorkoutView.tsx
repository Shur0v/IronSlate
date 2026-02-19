
import React, { useState } from 'react';
import { Typography, Card, Button, Input } from '../components/UI';
import { Check, Plus, MoreHorizontal, ChevronDown, Trash2 } from 'lucide-react';
import { Exercise, SetRecord } from '../types';

const INITIAL_EXERCISE: Exercise = {
  id: '1',
  name: 'Barbell Bench Press',
  sets: [
    { id: 's1', weight: 80, reps: 10, completed: false },
    { id: 's2', weight: 80, reps: 10, completed: false },
  ]
};

export const WorkoutView: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([INITIAL_EXERCISE]);

  const addSet = (exerciseId: string) => {
    setExercises(prev => prev.map(ex => {
      if (ex.id === exerciseId) {
        const lastSet = ex.sets[ex.sets.length - 1];
        return {
          ...ex,
          sets: [...ex.sets, { 
            id: Math.random().toString(), 
            weight: lastSet?.weight || 0, 
            reps: lastSet?.reps || 0, 
            completed: false 
          }]
        };
      }
      return ex;
    }));
  };

  const toggleSet = (exerciseId: string, setId: string) => {
    setExercises(prev => prev.map(ex => {
      if (ex.id === exerciseId) {
        return {
          ...ex,
          sets: ex.sets.map(s => s.id === setId ? { ...s, completed: !s.completed } : s)
        };
      }
      return ex;
    }));
  };

  return (
    <div className="flex flex-col gap-8 pb-32">
      <header className="flex justify-between items-center sticky top-0 bg-[#0D1117]/80 backdrop-blur-md z-40 py-4 border-b border-[#242E3D]/50 -mx-4 px-4">
        <Typography.H2>Push Day A</Typography.H2>
        <div className="flex gap-3">
          <Button variant="ghost" className="!h-10 !px-3 !w-auto">
            <MoreHorizontal size={20} />
          </Button>
          <Button variant="primary" className="!h-10 !px-4 !w-auto !bg-emerald-500 hover:bg-emerald-600">
            FINISH
          </Button>
        </div>
      </header>

      <div className="flex flex-col gap-10">
        {exercises.map((exercise, exIndex) => (
          <div key={exercise.id} className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#3db6fe] uppercase tracking-[0.2em] mb-1">Exercise {exIndex + 1}</span>
                <Typography.H2 className="!text-lg">{exercise.name}</Typography.H2>
              </div>
              <Button variant="ghost" className="!w-auto !h-8 !px-2">
                <ChevronDown size={18} />
              </Button>
            </div>

            <div className="flex flex-col gap-2">
                {/* Header row */}
                <div className="grid grid-cols-[32px_1fr_1fr_48px] gap-3 px-2">
                   <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-tighter">Set</div>
                   <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-tighter text-center">Weight</div>
                   <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-tighter text-center">Reps</div>
                   <div></div>
                </div>

                {exercise.sets.map((set, setIndex) => (
                  <div 
                    key={set.id} 
                    className={`grid grid-cols-[32px_1fr_1fr_48px] items-center gap-3 p-2 rounded-[12px] transition-all ${
                        set.completed ? 'bg-emerald-500/5 ring-1 ring-emerald-500/20' : 'bg-[#121821]'
                    }`}
                  >
                    <div className="text-sm font-black text-[#9AA4B2] tabular-nums">{setIndex + 1}</div>
                    
                    <input 
                      type="number"
                      defaultValue={set.weight}
                      className="bg-transparent text-center font-bold text-[#E6EDF3] focus:outline-none focus:text-[#3db6fe] text-lg tabular-nums"
                    />
                    
                    <input 
                      type="number"
                      defaultValue={set.reps}
                      className="bg-transparent text-center font-bold text-[#E6EDF3] focus:outline-none focus:text-[#3db6fe] text-lg tabular-nums"
                    />

                    <button
                      onClick={() => toggleSet(exercise.id, set.id)}
                      className={`h-10 w-10 flex items-center justify-center rounded-[10px] transition-all active:scale-90 ${
                        set.completed 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-[#1A222E] border border-[#242E3D] text-[#6B7280]'
                      }`}
                    >
                      <Check size={20} strokeWidth={3} />
                    </button>
                  </div>
                ))}

                <button 
                  onClick={() => addSet(exercise.id)}
                  className="flex items-center justify-center gap-2 py-3 border border-dashed border-[#242E3D] rounded-[12px] text-[#6B7280] hover:text-[#3db6fe] hover:border-[#3db6fe] transition-all group active:scale-95 mt-1"
                >
                  <Plus size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Add Set</span>
                </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="secondary" className="border-dashed !border-[#242E3D] !text-[#6B7280] flex gap-2">
            <Plus size={20} /> Add Exercise
        </Button>
      </div>
    </div>
  );
};
