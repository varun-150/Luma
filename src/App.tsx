/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { View } from './types';
import LandingView from './views/LandingView';
import DashboardView from './views/DashboardView';
import AuthView from './views/AuthView';
import OnboardingView from './views/OnboardingView';
import VideoLearningView from './views/VideoLearningView';
import DiscoveryView from './views/DiscoveryView';
import RoadmapView from './views/RoadmapView';
import AIMentorView from './views/AIMentorView';
import ProfileView from './views/ProfileView';
import WorkspaceView from './views/WorkspaceView';
import CourseDetailView from './views/CourseDetailView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingView onStart={() => setCurrentView('auth')} setView={setCurrentView} />;
      case 'auth':
        return <AuthView setView={setCurrentView} />;
      case 'onboarding':
        return <OnboardingView setView={setCurrentView} />;
      case 'dashboard':
        return <DashboardView setView={setCurrentView} />;
      case 'video-learning':
        return <VideoLearningView setView={setCurrentView} />;
      case 'discovery':
        return <DiscoveryView setView={setCurrentView} />;
      case 'roadmap':
        return <RoadmapView setView={setCurrentView} />;
      case 'ai-mentor':
        return <AIMentorView setView={setCurrentView} />;
      case 'profile':
        return <ProfileView setView={setCurrentView} />;
      case 'workspace':
        return <WorkspaceView setView={setCurrentView} />;
      case 'course-detail':
        return <CourseDetailView setView={setCurrentView} />;
      default:
        return (
          <div className="h-screen flex flex-col items-center justify-center p-10 text-center bg-background-primary">
            <h2 className="text-3xl font-display font-medium mb-4 italic">Experience coming soon.</h2>
            <p className="text-text-secondary max-w-sm mb-8">We are crafting this part of the sanctuary with obsessive care. It will be ready shortly.</p>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2 bg-background-elevated border border-border-subtle rounded-full text-sm hover:bg-white/5 transition-colors"
            >
              Return to dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary selection:bg-accent/30 selection:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-bottom" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>

      {/* Interaction Indicator */}
      <AnimatePresence>
        {currentView !== 'landing' && currentView !== 'auth' && currentView !== 'onboarding' && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-2xl flex items-center gap-6 z-50 transition-all duration-500 shadow-lg ${
              currentView === 'video-learning'
                ? 'bg-black/50 border border-white/10 text-white/80 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)]' 
                : 'bg-white/80 backdrop-blur-xl border border-border-subtle text-text-secondary shadow-md'
            }`}
          >
            <div className={`flex items-center gap-2 px-2 border-r ${currentView === 'video-learning' ? 'border-white/10' : 'border-border-subtle'}`}>
              <kbd className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                currentView === 'video-learning'
                  ? 'bg-white/5 border-white/10 text-white/50' 
                  : 'bg-background-primary border-border-subtle text-text-secondary'
              }`}>⌘</kbd>
              <span className={`text-xs ${currentView === 'video-learning' ? 'text-white/60' : 'text-text-secondary'}`}>Search</span>
            </div>
            <div className={`flex items-center gap-2 px-2 border-r ${currentView === 'video-learning' ? 'border-white/10' : 'border-border-subtle'}`}>
              <kbd className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                currentView === 'video-learning'
                  ? 'bg-white/5 border-white/10 text-white/50' 
                  : 'bg-background-primary border-border-subtle text-text-secondary'
              }`}>L</kbd>
              <span className={`text-xs ${currentView === 'video-learning' ? 'text-white/60' : 'text-text-secondary'}`}>Library</span>
            </div>
            <div className="flex items-center gap-2 px-2">
              <kbd className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                currentView === 'video-learning'
                  ? 'bg-white/5 border-white/10 text-white/50' 
                  : 'bg-background-primary border-border-subtle text-text-secondary'
              }`}>F</kbd>
              <span className={`text-xs ${currentView === 'video-learning' ? 'text-white/60' : 'text-text-secondary'}`}>Focus</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
