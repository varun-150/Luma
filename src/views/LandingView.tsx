import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play, Pause, Sparkles, ChevronRight, ArrowRight,
  BookOpen, Clock, Activity, Target, Compass, MessageSquare, Check, Search, BookMarked, Layers, PenTool, Flame, Calendar, FileText
} from 'lucide-react';
import { Button, Card } from '../components/UI';
import { View } from '../types';

export default function LandingView({ onStart, setView }: { onStart: () => void; setView: (v: View) => void }) {
  // Focus Workspace states for the interactive focus timer
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(1500); // 25 minutes
  const [cognitiveLoad, setCognitiveLoad] = useState(18); // soft attunement percentage

  // B1-B2 Warm Goals list
  const [goals, setGoals] = useState([
    { id: 1, title: "Read the layout research article", done: true },
    { id: 2, title: "Practice drawing layout shapes", done: false },
    { id: 3, title: "Organize typography system notes", done: false }
  ]);

  const toggleGoal = (id: number) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, done: !g.done } : g));
  };

  // Simulated timer loop
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimerSeconds(prev => (prev > 0 ? prev - 1 : 1500));
        if (timerSeconds % 30 === 0) {
          setCognitiveLoad(prev => Math.max(12, Math.min(22, prev + (Math.random() > 0.5 ? 1 : -1))));
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timerSeconds]);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary selection:bg-accent/15 selection:text-accent font-sans relative overflow-x-hidden text-left">

      {/* Centered Floating Header Capsule */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl px-8 py-3.5 rounded-full border border-border-subtle bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.04)] flex items-center justify-between transition-all duration-500">

        {/* Typographic Brand Mark */}
        <div className="font-display font-semibold text-base text-text-primary cursor-pointer hover:opacity-80 transition-opacity" style={{ letterSpacing: '0.18em' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          LUMA
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', active: true, view: 'landing' },
            { label: 'Explore', view: 'discovery' },
            { label: 'Courses', view: 'dashboard' },
            { label: 'Progress', view: 'roadmap' },
            { label: 'Library', view: 'workspace' }
          ].map((item) => (
            <button
              key={item.label}
              className={`text-xs font-medium cursor-pointer transition-colors duration-300 ${item.active ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
              onClick={() => {
                if (item.view === 'landing') window.scrollTo({ top: 0, behavior: 'smooth' });
                else setView(item.view as View);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Interactions */}
        <div className="flex items-center gap-4">
          <button className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer" onClick={() => setView('discovery')}>
            <Search className="w-4 h-4" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border-subtle bg-background-elevated cursor-pointer hover:border-accent/30 transition-colors" onClick={() => setView('profile')}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
          </div>
          <Button variant="primary" onClick={onStart} className="bg-accent text-white hover:bg-accent/90 px-5 py-2 text-xs rounded-full font-medium shadow-sm transition-transform hover:-translate-y-0.5">
            Continue learning
          </Button>
        </div>
      </nav>

      {/* Hero / Welcome Space */}
      <header className="pt-36 pb-12 px-8 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.25em] inline-block px-3 py-1 bg-accent/5 rounded-full border border-accent/10">
              Your study space
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-text-primary leading-[1.1]">
              Welcome back, Alex. <br />
              <span className="font-normal italic text-accent">Small steps every day.</span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary font-light max-w-lg leading-relaxed">
              You completed 3 lessons this week. Keep your streak going. Choose your focus and learn at your own pace in a quiet, distraction-free environment.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button variant="primary" onClick={onStart} className="bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:-translate-y-0.5">
                Pick up where you left off <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <button onClick={() => setView('discovery')} className="px-5 py-3 text-xs text-text-secondary hover:text-text-primary font-semibold uppercase tracking-wider transition-colors">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Daily Focus Card (Focal Timer widget) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[32px] border border-border-subtle p-8 shadow-[0_12px_40px_rgba(15,23,42,0.015)] space-y-6">
              <div className="flex justify-between items-center text-left">
                <div>
                  <span className="text-[9px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Today's Focus</span>
                  <h3 className="text-base font-normal text-text-primary mt-0.5">Visual Layout Design</h3>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background-primary border border-border-subtle flex items-center gap-2">
                  <Activity className="w-3 h-3 text-accent animate-pulse" />
                  <span className="text-[9px] font-bold text-text-secondary uppercase tracking-widest">{cognitiveLoad}% Focus Load</span>
                </div>
              </div>

              {/* Minimal Circle Timer */}
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-40 h-40 rounded-full border border-border-subtle flex flex-col items-center justify-center bg-background-primary/30 relative">
                  <span className="text-3xl font-light text-text-primary tracking-tight font-mono">{formatTimer(timerSeconds)}</span>
                  <span className="text-[8px] text-text-secondary/50 uppercase tracking-widest mt-0.5">Minutes remaining</span>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute bottom-[-14px] w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-md hover:scale-105 hover:bg-accent/90 transition-transform active:scale-95 cursor-pointer z-20"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-text-secondary text-center font-light leading-relaxed">
                Take a 5-minute break after your timer ends. Small breaks help your mind rest.
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Grid Content Area */}
      <main className="px-8 pb-24 max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Continue learning list, Streak and Goals */}
        <div className="lg:col-span-8 space-y-8">

          {/* Section: Continue Learning */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Continue Learning</span>
            <div className="bg-white rounded-[32px] border border-border-subtle p-8 shadow-[0_12px_40px_rgba(15,23,42,0.015)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2 max-w-md">
                <span className="px-2.5 py-0.5 rounded bg-accent/5 text-accent text-[9px] uppercase font-bold tracking-widest border border-accent/10">Module 01</span>
                <h3 className="text-lg font-normal text-text-primary">Introduction to Visual Layout</h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  Pick up where you left off. Learn about spacing rhythm, whitespace rules, and hierarchy structures.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <span className="text-xs font-medium text-accent">65% Completed</span>
                <div className="w-32 h-[3px] bg-background-elevated rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '65%' }} />
                </div>
                <Button variant="secondary" onClick={() => setView('video-learning')} className="text-xs border-border-subtle bg-background-elevated hover:bg-background-elevated/80 px-4 py-2 font-medium">
                  Resume Lesson
                </Button>
              </div>
            </div>
          </div>

          {/* Section: Today's Goals Checklist */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Today's Goals</span>
            <div className="bg-white rounded-[32px] border border-border-subtle p-6 shadow-[0_12px_40px_rgba(15,23,42,0.015)] space-y-3">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${goal.done ? 'bg-background-elevated/40 border-border-subtle opacity-60' : 'bg-white border-border-subtle hover:border-accent/20'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${goal.done ? 'bg-accent border-accent text-white' : 'border-border-subtle'}`}>
                      {goal.done && <Check className="w-2.5 h-2.5" />}
                    </div>
                    <span className={`text-xs font-light ${goal.done ? 'line-through text-text-secondary' : 'text-text-primary'}`}>{goal.title}</span>
                  </div>
                  <span className="text-[9px] text-text-secondary/50 font-bold uppercase tracking-wider">{goal.done ? "Done" : "Pending"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Recommended Courses */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Recommended Courses</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Pure Design Synthesis", subtitle: "Learn spacing and balance in layout grids.", level: "Beginner", time: "2h 45m" },
                { title: "Cognitive Load and Balance", subtitle: "How visual systems affect mental focus.", level: "Intermediate", time: "4h 15m" }
              ].map((course, idx) => (
                <div
                  key={idx}
                  onClick={() => setView('course-detail')}
                  className="bg-white p-6 rounded-[28px] border border-border-subtle hover:border-accent/20 transition-all duration-500 cursor-pointer shadow-[0_12px_40px_rgba(15,23,42,0.01)] flex flex-col justify-between h-48 text-left group"
                >
                  <div className="space-y-2">
                    <span className="text-[8px] font-bold text-accent uppercase tracking-widest px-2 py-0.5 bg-accent/5 rounded border border-accent/10">{course.level}</span>
                    <h4 className="text-base font-normal text-text-primary group-hover:text-accent transition-colors">{course.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">{course.subtitle}</p>
                  </div>
                  <div className="flex justify-between items-center border-t border-border-subtle pt-4 text-[10px] text-text-secondary/60 font-semibold uppercase tracking-wider">
                    <span>{course.time}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-text-secondary/40 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Streaks, Progress Tracker, Recent Notes */}
        <div className="lg:col-span-4 space-y-8">

          {/* Section: Study Streak */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Study Streak</span>
            <div className="bg-white rounded-[32px] border border-border-subtle p-6 shadow-[0_12px_40px_rgba(15,23,42,0.015)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-text-primary">5 Day Streak</h4>
                  <p className="text-[10px] text-text-secondary font-light">Small steps every day.</p>
                </div>
              </div>

              <div className="flex gap-1.5">
                {['M', 'T', 'W', 'T', 'F'].map((day, idx) => (
                  <div
                    key={idx}
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold ${idx < 4 ? 'bg-accent text-white' : 'bg-background-elevated text-text-secondary border border-border-subtle'}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Weekly Progress Graph */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Weekly Progress</span>
            <div className="bg-white rounded-[32px] border border-border-subtle p-6 shadow-[0_12px_40px_rgba(15,23,42,0.015)] space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-light text-text-primary">3.2 <span className="text-xs text-text-secondary font-light">hours</span></span>
                <span className="text-[9px] text-success font-semibold uppercase tracking-wider bg-success/5 border border-success/15 px-2 py-0.5 rounded">+15% this week</span>
              </div>

              {/* Simple Visual Graph Bars */}
              <div className="flex justify-between items-end h-20 pt-4">
                {[
                  { label: "Mon", height: "45%" },
                  { label: "Tue", height: "70%" },
                  { label: "Wed", height: "30%" },
                  { label: "Thu", height: "85%" },
                  { label: "Fri", height: "0%" }
                ].map((bar, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 w-full">
                    <div className="w-3 bg-background-elevated rounded-full h-14 relative overflow-hidden flex items-end">
                      <div className="w-full bg-accent rounded-full" style={{ height: bar.height }} />
                    </div>
                    <span className="text-[9px] text-text-secondary/50 font-bold uppercase tracking-wider">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Recently Opened Notes */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-[0.2em]">Recently Opened Notes</span>
            <div className="bg-white rounded-[32px] border border-border-subtle p-6 shadow-[0_12px_40px_rgba(15,23,42,0.015)] space-y-3">
              {[
                { title: "Whitespace Hierarchy Rules", date: "2 hours ago" },
                { title: "Cognitive Load and biological rhythms", date: "Yesterday" }
              ].map((note, idx) => (
                <div
                  key={idx}
                  onClick={() => setView('workspace')}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-background-primary/60 transition-colors cursor-pointer group"
                >
                  <FileText className="w-4 h-4 text-text-secondary/50 group-hover:text-accent transition-colors" />
                  <div className="text-left">
                    <h5 className="text-xs font-normal text-text-primary group-hover:text-accent transition-colors">{note.title}</h5>
                    <p className="text-[9px] text-text-secondary/60 font-light mt-0.5">{note.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>

      {/* Case Study Footer Call-To-Action */}
      <footer className="py-20 bg-background-primary border-t border-border-subtle text-center relative z-10">
        <div className="max-w-4xl mx-auto px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight">Ready to learn at your own pace?</h2>
          <p className="text-xs text-text-secondary font-light max-w-md mx-auto leading-relaxed">
            Experience the Luma learning workspace. Simple distraction-free layouts designed to support your mental focus.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={onStart} className="bg-accent text-white hover:bg-accent/90 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:-translate-y-0.5">
              Continue learning
            </Button>
          </div>
          <div className="text-[10px] text-text-secondary/40 font-bold uppercase tracking-[0.2em] pt-12">
            LUMA UX CASE STUDY © 2026 • HANDCRAFTED DESIGN SYSTEM
          </div>
        </div>
      </footer>

    </div>
  );
}
