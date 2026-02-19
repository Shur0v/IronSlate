
export interface SetRecord {
  id: string;
  weight: number;
  reps: number;
  completed: boolean;
  rpe?: number;
}

export interface Exercise {
  id: string;
  name: string;
  sets: SetRecord[];
}

export interface Workout {
  id: string;
  name: string;
  date: string;
  exercises: Exercise[];
  status: 'active' | 'completed' | 'planned';
}

export interface UserStats {
  personalRecords: { exercise: string; weight: number; date: string }[];
  weeklyVolume: { day: string; volume: number }[];
}

export enum AppTab {
  DASHBOARD = 'dashboard',
  WORKOUT = 'workout',
  PROGRESS = 'progress',
  PROFILE = 'profile'
}
