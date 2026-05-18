import { motion } from 'motion/react';
import { Button, Card, Logo } from '../components/UI';
import { 
  Home, Search, Compass, BookOpen, Clock, 
  Settings, User, Bell, ChevronRight, Play,
  Zap, Trophy, Target, MessageSquare
} from 'lucide-react';
import { View } from '../types';

export default function DashboardView({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="flex h-screen bg-background-primary text-text-primary overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-18 light-sidebar-border flex flex-col items-center py-10 z-10">
        <div className="mb-16 cursor-pointer hover:opacity-85 transition-opacity duration-300" onClick={() => setView('landing')}>
          <Logo className="scale-70" />
        </div>
        
        <nav className="flex-1 flex flex-col gap-12">
          <NavIcon icon={Home} active onClick={() => setView('dashboard')} />
          <NavIcon icon={Search} onClick={() => setView('discovery')} />
          <NavIcon icon={Target} onClick={() => setView('roadmap')} />
          <NavIcon icon={MessageSquare} onClick={() => setView('ai-mentor')} />
        </nav>

        <div className="w-9 h-9 rounded-full border border-border-subtle bg-white overflow-hidden cursor-pointer hover:border-accent/40 transition-colors duration-300" onClick={() => setView('profile')}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-12">
        <header className="flex justify-between items-center mb-16">
          <div className="text-left">
            <h1 className="text-[40px] font-light tracking-tight text-text-primary leading-tight">
              Welcome back, <span className="font-semibold text-accent">Alex.</span>
            </h1>
            <p className="text-text-secondary text-base font-light">Ready for your afternoon <span className="italic">focus session</span>?</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-5 py-2.5 rounded-full bg-white border border-border-subtle flex items-center gap-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                <span className="text-xs font-semibold tracking-wider text-text-secondary uppercase">Focus active • 42m remaining</span>
             </div>
             <button className="relative w-11 h-11 flex items-center justify-center rounded-full bg-white border border-border-subtle hover:bg-background-elevated transition-colors shadow-xs cursor-pointer">
                <Bell className="w-4.5 h-4.5 text-text-secondary" />
                <span className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full border border-white" />
             </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Course Progress */}
          <div className="col-span-8 flex flex-col group cursor-pointer" onClick={() => setView('video-learning')}>
            <div className="relative flex-1 rounded-[24px] overflow-hidden border border-border-subtle/80 bg-white p-10 flex flex-col justify-end transition-all duration-500 hover:border-accent/30 hover:shadow-md shadow-[0_1px_3px_rgba(0,0,0,0.01),0_24px_48px_-12px_rgba(15,23,42,0.04)] min-h-[400px]">
              {/* Cinematic Visual Background */}
              <div className="absolute inset-0 opacity-[0.35] overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    alt="React Advanced"
                  />
                 <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent z-10"></div>
              </div>
              
              <div className="relative z-20 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded bg-accent/15 text-accent text-[9px] uppercase font-bold tracking-widest">Module 04</span>
                  <span className="text-text-secondary text-xs font-medium opacity-80">Advanced State Patterns</span>
                </div>
                <h2 className="text-5xl font-light leading-[1.1] mb-8 tracking-tight text-text-primary">The Schrodinger <br/>of React Context</h2>
                <div className="flex items-center gap-8">
                  <Button variant="primary" className="px-8 py-3.5 font-semibold text-xs uppercase tracking-wider bg-accent text-white rounded-full shadow-sm">Resume Learning</Button>
                  <div className="flex flex-col gap-1.5">
                    <div className="w-32 h-[3.5px] bg-border-subtle rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        className="h-full bg-accent rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]"
                      />
                    </div>
                    <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">65% of concept mastered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Column */}
          <div className="col-span-4 flex flex-col gap-8">
             {/* Progress Widget */}
            <div className="flex-1 rounded-[24px] bg-white border border-border-subtle p-8 flex flex-col shadow-xs text-left">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary/80">Cognitive Load</h3>
                <div className="w-2.5 h-2.5 rounded-full bg-highlight shadow-sm"></div>
              </div>
              <div className="flex-1 flex items-center justify-center relative">
                <svg className="w-36 h-36 transform -rotate-90">
                  <circle cx="72" cy="72" r="64" stroke="currentColor" strokeWidth="2.5" fill="transparent" className="text-border-subtle/80" />
                  <motion.circle 
                    cx="72" cy="72" r="64" stroke="currentColor" strokeWidth="4.5" fill="transparent" strokeDasharray="402" 
                    initial={{ strokeDashoffset: 402 }}
                    animate={{ strokeDashoffset: 402 * (1-0.74) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-accent" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-light text-text-primary">74%</span>
                  <span className="text-[9px] text-text-secondary font-bold uppercase tracking-widest mt-1">Peak Zone</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs text-text-secondary leading-relaxed font-light">Your retention rate is <span className="font-semibold text-accent">14% higher</span> than yesterday. You are in optimal flow.</p>
              </div>
            </div>

            {/* AI Quick Access */}
            <div 
              onClick={() => setView('ai-mentor')}
              className="h-48 rounded-[24px] bg-white border border-border-subtle p-8 flex flex-col justify-between group hover:border-accent/30 hover:shadow-xs transition-all duration-300 cursor-pointer shadow-xs text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-accent" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-accent">Aria Assistant</span>
              </div>
              <div>
                <p className="text-text-primary text-sm font-semibold group-hover:text-accent transition-colors leading-snug">"How does closure affect the state hook performance?"</p>
                <span className="text-[10px] text-text-secondary/70 mt-2 block font-semibold uppercase tracking-wider">Press ⌘K to ask anything</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Context Bar */}
        <footer className="mt-12 flex justify-between items-center">
          <div className="flex gap-10 text-left">
            <div className="flex flex-col">
              <span className="text-[9px] text-text-secondary/80 uppercase font-bold tracking-widest mb-1">Current Streak</span>
              <span className="text-base font-semibold text-text-primary">12 Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-text-secondary/80 uppercase font-bold tracking-widest mb-1">Next Milestone</span>
              <span className="text-base font-semibold text-text-primary">Master Architect</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-white overflow-hidden shadow-xs">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=dashboard${i}`} alt="Peer" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-[10px] font-bold text-text-secondary shadow-xs">+8</div>
            </div>
            <span className="text-xs text-text-secondary font-light">Others studying with you</span>
          </div>
        </footer>
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
