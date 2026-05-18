export type View = 
  | 'landing'
  | 'auth'
  | 'onboarding'
  | 'dashboard'
  | 'roadmap'
  | 'discovery'
  | 'course-detail'
  | 'video-learning'
  | 'workspace'
  | 'analytics'
  | 'community'
  | 'ai-mentor'
  | 'profile'
  | 'focus'
  | 'pricing'
  | 'planner';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  lessons: number;
  thumbnail: string;
  description: string;
  progress?: number;
  tags: string[];
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
  points: number;
  level: number;
  achievements: string[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
}
