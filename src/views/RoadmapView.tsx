import { motion } from 'motion/react';
import { 
  Target, ChevronLeft, Zap, Brain, Sparkles, Lock, Clock,
  Home, Search, MessageSquare
} from 'lucide-react';
import { Button, Logo } from '../components/UI';
import { View } from '../types';

export default function RoadmapView({ setView }: { setView: (v: View) => void }) {
  const steps = [
    { id: 1, title: "Foundations of Visual Hierarchy", description: "Master the biological triggers of attention and eye flow in digital architecture.", status: "completed" },
    { id: 2, title: "Emotional Interaction Physics", description: "Design interfaces that feel natural, predictable, and deeply satisfying to the human touch.", status: "completed" },
    { id: 3, title: "Immersive Layout Systems", description: "Building spatial environments that respect cognitive limits and focus cycles.", status: "current" },
    { id: 4, title: "Cognitive Resonance Theory", description: "The psychology of user retention and the science of mental model synchronization.", status: "upcoming" },
    { id: 5, title: "Final Mastery Project", description: "Synthesizing your knowledge into a cinematic product experience.", status: "locked" },
  ];

  return (
    <div className="flex h-screen bg-background-primary text-text-primary overflow-hidden">
      {/* Mini Sidebar Nav */}
      <aside className="w-18 light-sidebar-border flex flex-col items-center py-10 z-10">
        <div className="mb-16 cursor-pointer hover:opacity-85 transition-opacity duration-300" onClick={() => setView('landing')}>
          <Logo className="scale-70" />
        </div>
        
        <nav className="flex-1 flex flex-col gap-12">
          <NavIcon icon={Home} onClick={() => setView('dashboard')} />
          <NavIcon icon={Search} onClick={() => setView('discovery')} />
          <NavIcon icon={Target} active onClick={() => setView('roadmap')} />
          <NavIcon icon={MessageSquare} onClick={() => setView('ai-mentor')} />
        </nav>

        <div className="w-9 h-9 rounded-full border border-border-subtle bg-white overflow-hidden cursor-pointer hover:border-accent/40 transition-colors duration-300" onClick={() => setView('profile')}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-12 relative z-10">
        <header className="flex justify-between items-end mb-16 max-w-6xl mx-auto text-left">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <button onClick={() => setView('landing')} className="w-9 h-9 rounded-full bg-white border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors duration-300 group cursor-pointer shadow-xs">
                <ChevronLeft className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" />
              </button>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-text-secondary/80">Mastery Roadmap</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[42px] font-light tracking-tight text-text-primary leading-tight"
            >
              The Path of <span className="font-semibold italic text-transparent bg-clip-text bg-linear-to-r from-text-primary via-accent to-text-primary">Pure Design.</span>
            </motion.h1>
          </div>
          <div className="text-right">
            <span className="text-4xl font-light text-accent">14%</span>
            <p className="text-[9px] font-bold uppercase tracking-widest text-text-secondary/80 mt-1">Global Mastery</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto py-6 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent/15 -translate-x-1/2" />
          
          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Step Connector Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-white border border-border-subtle z-20 flex items-center justify-center shadow-xs">
                  <div className={`w-2 h-2 rounded-full ${step.status === 'completed' ? 'bg-success shadow-[0_0_8px_rgba(16,185,129,0.4)]' : step.status === 'current' ? 'bg-accent animate-pulse shadow-[0_0_8px_rgba(79,70,229,0.5)]' : 'bg-background-elevated'}`} />
                </div>

                {/* Content Card */}
                <div className="w-1/2 text-left">
                   <motion.div 
                     whileHover={{ y: -4 }}
                     className={`premium-card p-6.5 group transition-all duration-500 rounded-[24px] ${step.status === 'current' ? 'border-accent/30 bg-accent/2 shadow-[0_4px_24px_-10px_rgba(79,70,229,0.1)]' : 'opacity-70 hover:opacity-100 hover:border-accent/20 bg-white border-border-subtle/80 shadow-xs'}`}
                   >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">Phase 0{i + 1}</span>
                        {step.status === 'locked' && <Lock className="w-3.5 h-3.5 text-text-secondary/40" />}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-accent transition-colors duration-300 leading-snug text-text-primary">{step.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed mb-5 font-light">{step.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border-subtle/60">
                          <div className="flex items-center gap-1.5 text-text-secondary/80 font-bold uppercase tracking-wider text-[9px]">
                            <Clock className="w-3.5 h-3.5 text-text-secondary/50" />
                            <span>4h 20m</span>
                          </div>
                          {step.status === 'current' && (
                            <Button variant="primary" className="py-2 px-5 text-[9px] h-auto uppercase tracking-wider font-bold" onClick={() => setView('video-learning')}>
                               Resume Evolution
                            </Button>
                          )}
                      </div>
                   </motion.div>
                </div>

                {/* Aesthetic Filler Area */}
                <div className="w-1/2 flex justify-center select-none">
                  <div className={`text-8xl font-display font-bold tracking-tighter transition-colors duration-500 ${step.status === 'current' ? 'text-accent/25' : 'text-text-secondary/15'}`}>0{i + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Insight Footer */}
        <div className="mt-20 max-w-2xl mx-auto premium-card p-8 bg-accent/5 border-accent/15 text-left rounded-[24px]">
          <div className="flex items-start gap-6">
             <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5 text-accent" />
             </div>
             <div>
                <h4 className="text-base font-semibold text-text-primary mb-2">Architectural Focus Advised</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-6 font-light">
                   Based on your performance in Phase 04, I've adjusted your Phase 05 to emphasize "Composition Over Inheritance". This matches your analytical peaks.
                </p>
                <div className="flex gap-4">
                  <Button variant="primary" className="py-2.5 px-5 text-[9px] h-auto font-bold uppercase tracking-wider bg-accent text-white shadow-xs">Accept Adaptation</Button>
                  <Button variant="secondary" className="py-2.5 px-5 text-[9px] h-auto font-bold uppercase tracking-wider text-text-secondary border-border-subtle bg-white shadow-xs">View Reasoning</Button>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavIcon({ icon: Icon, active, onClick }: { icon: any, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer group py-2 flex items-center justify-center w-12 h-12"
    >
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 blur-xs" />
      
      {/* Active Indicator Line */}
      {active && (
        <motion.div 
          layoutId="activeSideIndicator"
          className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[2.5px] h-6 bg-accent rounded-r-full shadow-[0_0_8px_rgba(79,70,229,0.4)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      
      <Icon className={`w-4.5 h-4.5 relative z-10 transition-all duration-500 ${active ? 'text-accent scale-105' : 'text-text-secondary opacity-50 group-hover:opacity-100 group-hover:text-text-primary'}`} />
    </div>
  );
}
