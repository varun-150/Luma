import { motion } from 'motion/react';
import { 
  Trophy, Star, Target, Zap, 
  ArrowLeft, Share2, Award, 
  BookOpen, Clock, ChevronLeft
} from 'lucide-react';
import { Button, Card, Logo } from '../components/UI';
import { View } from '../types';

export default function ProfileView({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="min-h-screen bg-background-primary flex flex-col text-left">
       <header className="px-12 py-8 flex items-center justify-between sticky top-0 bg-background-primary/80 backdrop-blur-3xl z-20 border-b border-border-subtle/80">
         <div className="flex items-center gap-6">
            <button onClick={() => setView('dashboard')} className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors group cursor-pointer shadow-xs">
              <ChevronLeft className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
            </button>
            <h1 className="text-xl font-light tracking-tight">Your <span className="font-semibold italic text-accent">Evolution.</span></h1>
         </div>
         <Button variant="secondary" className="px-6 bg-white border-border-subtle shadow-xs">
            <Share2 className="w-4 h-4 mr-2 opacity-80" /> Share Presence
         </Button>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-12 w-full">
         <div className="grid grid-cols-12 gap-16">
            {/* User Info */}
            <div className="col-span-12 lg:col-span-4 space-y-12">
               <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-8">
                     <div className="absolute inset-0 bg-accent blur-[80px] opacity-10 rounded-full" />
                     <div className="relative w-44 h-44 rounded-[48px] border border-border-subtle overflow-hidden p-2 bg-white shadow-sm">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className="w-full h-full object-cover rounded-[38px]" />
                     </div>
                     <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-text-primary text-background-primary flex items-center justify-center font-bold text-lg shadow-md border border-border-subtle/25">
                        12
                     </div>
                  </div>
                  <h2 className="text-4xl font-light tracking-tight text-text-primary mb-2">Alex <span className="font-semibold">Sterling</span></h2>
                  <p className="text-base text-text-secondary font-light italic px-4 lg:px-0">Cognitive Explorer • Spatial Architect</p>
               </div>

               <div className="space-y-4">
                  <StatRow label="Focus Hours" value="142h" icon={Clock} active />
                  <StatRow label="Insights Found" value="84" icon={Zap} />
                  <StatRow label="Courses Mastered" value="6" icon={BookOpen} />
                  <StatRow label="Global Rank" value="Top 2%" icon={Star} />
               </div>

               <div className="premium-card p-8 bg-accent/5 border-accent/15">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-6">Active Evolution</h3>
                  <p className="text-xl font-light tracking-tight mb-6 text-text-primary">Mastering Spatial <br/><span className="font-semibold italic text-accent">Interaction Design</span></p>
                  <div className="h-1.5 bg-accent/15 rounded-full overflow-hidden mb-4">
                     <div className="h-full bg-accent w-[82%] shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                  </div>
                  <p className="text-[9px] text-text-secondary font-bold uppercase tracking-[0.15em] opacity-80">82% to Elite Synchrony</p>
               </div>
            </div>

            {/* Achievements & Activity */}
            <div className="col-span-12 lg:col-span-8 space-y-16">
               <section>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary/80 mb-8 flex items-center gap-3">
                     <Trophy className="w-4 h-4 text-accent" /> Distinguished Merit
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                     {[
                       { title: "Flow Master", desc: "4h Deep Focus", icon: Zap },
                       { title: "Early Architect", desc: "Mastered L1-L3", icon: BookOpen },
                       { title: "Night Owl", desc: "Late night insights", icon: Award },
                       { title: "Social Scholar", desc: "82 peer helps", icon: Trophy }
                     ].map((item, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ y: -4 }}
                          className="flex flex-col items-center text-center p-6 rounded-[24px] bg-white border border-border-subtle/80 hover:border-accent/30 hover:shadow-xs transition-all duration-500 cursor-default group shadow-sm"
                        >
                           <div className="w-12 h-12 rounded-full bg-background-elevated/60 flex items-center justify-center mb-4 group-hover:bg-accent/5 transition-all">
                             <item.icon className="w-5 h-5 text-text-secondary/60 group-hover:text-accent transition-colors" />
                           </div>
                           <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 text-text-primary">{item.title}</h4>
                           <p className="text-[10px] text-text-secondary font-light">{item.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               <section>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary/80 mb-8">Evolution Chronology</h2>
                  <div className="space-y-4">
                     {[
                       { title: "Interface Psychology: The Primal Brain", date: "May 14, 2026", score: "98%" },
                       { title: "Material Design 3 Evolution", date: "May 10, 2026", score: "100%" },
                       { title: "Advanced Typography in Motion", date: "May 2, 2026", score: "92%" }
                     ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-6 rounded-[24px] bg-white border border-border-subtle group hover:border-accent/25 hover:shadow-xs transition-all duration-500">
                           <div className="flex items-center gap-8">
                              <div className="text-3xl font-light text-text-secondary/20 group-hover:text-accent/30 transition-colors font-display">
                                 0{i + 1}
                              </div>
                              <div className="text-left">
                                 <h4 className="text-lg font-normal text-text-primary mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                                 <p className="text-[9px] text-text-secondary uppercase font-bold tracking-[0.15em] opacity-80">{item.date}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-2xl font-semibold text-accent mb-0.5">{item.score}</p>
                              <p className="text-[8px] text-text-secondary uppercase tracking-[0.15em] font-bold opacity-80">Mastery</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>
            </div>
         </div>
      </main>
    </div>
  );
}

function StatRow({ label, value, icon: Icon, active }: any) {
   return (
      <div className={`flex items-center justify-between p-5 rounded-[20px] border transition-all duration-500 ${active ? 'bg-text-primary border-text-primary text-background-primary shadow-md' : 'bg-white border-border-subtle text-text-primary shadow-xs hover:border-accent/25'}`}>
         <div className="flex items-center gap-4">
            <Icon className={`w-4 h-4 ${active ? 'text-accent-secondary' : 'text-accent opacity-80'}`} />
            <span className="text-sm font-light tracking-wide">{label}</span>
         </div>
         <span className="text-lg font-normal">{value}</span>
      </div>
   );
}
