import { motion } from 'motion/react';
import { 
  ArrowLeft, Clock, Star, Play, 
  ChevronRight, BookOpen, Share2, Shield, Zap, Target
} from 'lucide-react';
import { Button, Logo } from '../components/UI';
import { View } from '../types';

export default function CourseDetailView({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="min-h-screen bg-background-primary overflow-x-hidden flex flex-col text-left">
       {/* Hero Layout */}
       <header className="relative h-[70vh] min-h-[600px] flex items-end">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover grayscale-[0.4] scale-105"
               alt="Course Cover"
             />
             <div className="absolute inset-0 bg-linear-to-t from-background-primary via-background-primary/20 to-transparent" />
          </div>

          <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-12">
             <button onClick={() => setView('discovery')} className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors group cursor-pointer shadow-sm">
                <ArrowLeft className="w-6 h-6 text-text-primary group-hover:-translate-x-1 transition-transform" />
             </button>
             <div className="flex gap-6">
                <button className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors cursor-pointer shadow-sm">
                  <Share2 className="w-5 h-5 text-text-primary" />
                </button>
                <Button onClick={() => setView('video-learning')} className="px-10 py-3 block h-auto bg-accent text-white hover:bg-accent/90 rounded-full font-medium shadow-sm transition-transform hover:-translate-y-0.5 text-xs uppercase tracking-wider">Start Experience</Button>
             </div>
          </nav>

          <div className="relative z-10 px-16 pb-24 max-w-6xl w-full">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center gap-6 mb-10"
             >
                <span className="px-5 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-xl">
                   Cognitive Architecture
                </span>
                <div className="flex items-center gap-2 text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em] opacity-60">
                   <Clock className="w-4 h-4" /> 12.5 Hours total
                </div>
             </motion.div>

             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1, duration: 1 }}
               className="text-[92px] leading-[0.95] font-light tracking-tighter text-text-primary mb-12 max-w-4xl"
             >
                The Architecture of <br /><span className="font-medium italic text-accent">Human Choice.</span>
             </motion.h1>

             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex items-center gap-16"
             >
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-full border border-border-subtle overflow-hidden grayscale bg-white">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher" alt="Instructor" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">Curator</p>
                      <p className="text-lg font-light text-text-primary">Dr. Julian Aris</p>
                   </div>
                </div>
                <div className="hidden md:flex items-center gap-16 border-l border-border-subtle pl-16">
                   <div>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">Rating</p>
                      <p className="text-lg font-light text-text-primary flex items-center gap-2"><Star className="w-4 h-4 text-[#FED766] fill-[#FED766]" /> 5.0 (2k)</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">Difficulty</p>
                      <p className="text-lg font-light text-text-primary">Advanced</p>
                   </div>
                </div>
             </motion.div>
          </div>
       </header>

       <main className="px-16 py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-8 space-y-24">
             <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Manifesto • The Intent</h2>
                <p className="text-3xl font-light text-text-primary leading-[1.3] tracking-tight">
                   Beyond analytics lies the <span className="font-medium italic text-accent">emotional architecture</span> of choice. This journey deconstructs the cognitive biases that drive human behavior in digital space.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed font-light mt-8">
                   We explore the intersection of neurobiology and interface design to understand how perception shapes action. You will learn to build systems that don't just solve problems, but resonate with the fundamental rhythms of human biological focus.
                </p>
             </section>

             <section>
                 <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-10">Experience Curriculum</h2>
                 <div className="space-y-4">
                    {[
                       { title: "Introduction to Perceptual Gravity", duration: "1h 12m", modules: 3 },
                       { title: "The Neuro-Aesthetics of UI Lighting", duration: "2h 45m", modules: 6 },
                       { title: "Building for Infinite Attention", duration: "3h 10m", modules: 8 },
                       { title: "Final Thesis: The Emotional Interface", duration: "4h 20m", modules: 12 }
                    ].map((module, i) => (
                       <div key={i} className="group p-6 rounded-[20px] bg-white border border-border-subtle hover:border-accent/25 hover:shadow-xs shadow-xs transition-all duration-300 cursor-pointer flex items-center justify-between">
                          <div className="flex items-center gap-8">
                             <div className="text-3xl font-light text-text-secondary/20 group-hover:text-accent/30 transition-colors font-display">0{i+1}</div>
                             <div className="text-left">
                                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">{module.title}</h3>
                                <p className="text-[9px] text-text-secondary uppercase font-bold tracking-[0.15em] mt-1.5 opacity-80">{module.modules} Lessons • {module.duration}</p>
                             </div>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all shadow-xs shrink-0">
                             <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
          </div>

          <aside className="lg:col-span-4 space-y-12">
              <div className="bg-white rounded-[24px] border border-border-subtle p-8 sticky top-32 shadow-[0_1px_3px_rgba(0,0,0,0.01),0_16px_36px_-12px_rgba(15,23,42,0.04)] text-left">
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Mastery Outcomes</h3>
                 <ul className="space-y-6">
                    <OutcomeItem icon={Zap} title="Predictive Prototyping" />
                    <OutcomeItem icon={Target} title="Behavioral Logic Design" />
                    <OutcomeItem icon={Shield} title="Philosophical Ethics" />
                    <OutcomeItem icon={BookOpen} title="Luma Master Certification" />
                 </ul>
                 <div className="mt-12 pt-8 border-t border-border-subtle space-y-8">
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/80">Investment</span>
                       <span className="text-3xl font-light text-text-primary tracking-tight font-display">$420</span>
                    </div>
                    <Button onClick={() => setView('video-learning')} className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.15em] bg-accent text-white hover:bg-accent/90 rounded-full shadow-sm">
                       Enroll in Experience
                    </Button>
                 </div>
              </div>
          </aside>
       </main>
    </div>
  );
}

function OutcomeItem({ icon: Icon, title }: any) {
  return (
    <li className="flex items-center gap-4 text-sm font-medium text-text-primary group cursor-default">
       <div className="w-10 h-10 rounded-xl bg-background-elevated/60 border border-border-subtle flex items-center justify-center text-accent group-hover:scale-105 group-hover:bg-accent/5 transition-all shadow-xs shrink-0">
          <Icon className="w-4.5 h-4.5" />
       </div>
       {title}
    </li>
  );
}
