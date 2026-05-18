import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, Settings, MessageSquare, 
  ChevronRight, Play, SkipForward, SkipBack, 
  Volume2, PenLine, Bookmark, Sparkles, X, ChevronLeft, Activity, Info
} from 'lucide-react';
import { Button } from '../components/UI';
import { View } from '../types';

export default function VideoLearningView({ setView }: { setView: (v: View) => void }) {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isFocusMode ? 'bg-black' : 'bg-[#080B11]'} text-white overflow-hidden flex flex-col font-sans text-left`}>
      
      {/* Cinematic Top Header */}
      <AnimatePresence>
        {!isFocusMode && (
          <motion.header 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex items-center justify-between px-10 py-6 border-b border-white/8 bg-[#080B11]/60 backdrop-blur-2xl z-40"
          >
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setView('dashboard')} 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </button>
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.25em] mb-1 block">Module 04 • Evolution</span>
                <h1 className="text-base font-light tracking-tight text-white">Lesson 12: <span className="font-semibold italic text-accent">Context vs Redesigned Composition</span></h1>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080B11] bg-white/5 overflow-hidden shadow-xs">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=StudyGroup${i}`} alt="Peer" />
                   </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#080B11] bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent shadow-xs">
                  +12
                </div>
              </div>
              <button 
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                onClick={() => setIsFocusMode(true)}
              >
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" /> Enter Sanctuary
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <main className={`grow flex h-[calc(100vh-88px)] ${isFocusMode ? 'h-screen' : ''}`}>
        
        {/* Video Player Section */}
        <div className={`relative bg-black/40 flex-1 flex flex-col justify-center overflow-hidden transition-all duration-1000 ${isFocusMode ? 'p-0' : 'p-10'}`}>
          <div className="w-full h-full relative group overflow-hidden rounded-[24px] shadow-[0_24px_72px_rgba(0,0,0,0.8)] border border-white/12 bg-black flex items-center justify-center">
             {/* Virtual Video Canvas Background Image */}
             <div className="absolute inset-0 bg-linear-to-t from-black/95 via-transparent to-transparent opacity-50 group-hover:opacity-85 transition-opacity z-10 duration-500" />
             <img 
               src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-[1.01] transition-transform duration-[10s] ease-out"
               alt="Video Content"
             />

             {/* Focus Mode Exit overlay */}
             {isFocusMode && (
               <motion.button 
                 initial={{ opacity: 0 }}
                 whileHover={{ opacity: 1 }}
                 onClick={() => setIsFocusMode(false)}
                 className="absolute top-12 left-12 z-50 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white cursor-pointer"
               >
                 <X className="w-6 h-6" />
               </motion.button>
             )}

             {/* Video Controls Overlay */}
             <div className="absolute inset-x-0 bottom-0 p-10 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                <div className="space-y-6">
                   {/* Timeline progress line */}
                   <div className="relative h-1.5 w-full bg-white/15 rounded-full cursor-pointer group/timeline">
                     <div className="absolute top-0 left-0 h-full w-[45%] bg-accent transition-all group-hover/timeline:h-full shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
                     <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full opacity-0 group-hover/timeline:opacity-100 transition-opacity shadow-xl" />
                   </div>
                   
                   <div className="flex items-center justify-between text-white">
                     <div className="flex items-center gap-8">
                        <SkipBack className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-all active:scale-90" />
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-pointer hover:scale-108 active:scale-92 transition-all shadow-md">
                           <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                        <SkipForward className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-all active:scale-90" />
                        <div className="flex items-center gap-4">
                          <Volume2 className="w-5 h-5" />
                          <span className="text-xs font-light font-mono tracking-wider opacity-60">14:24 / 32:00</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold cursor-pointer hover:bg-white/10 transition-all uppercase tracking-widest">
                           Speed: 1.25x
                        </div>
                        <Settings className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                        <Maximize2 className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                     </div>
                   </div>
                </div>
             </div>

             {/* AI Insight Popup Card */}
             <AnimatePresence>
               {!isFocusMode && (
                 <motion.div 
                   initial={{ x: 40, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   className="absolute right-8 top-8 w-80 p-6 bg-[#121620]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_48px_rgba(0,0,0,0.5)] rounded-[24px] z-30 overflow-hidden text-left"
                  >
                     {/* Corner Ambient Glow element */}
                     <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-2 text-[9px] font-bold text-accent uppercase tracking-widest">
                          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" /> AI Assistant Insight
                       </div>
                       <span className="text-[8px] bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-accent font-semibold tracking-wider uppercase">Active</span>
                     </div>

                     <p className="text-xs text-white/80 leading-relaxed mb-6 font-light">
                       Dr. Julian mentions <span className="font-semibold text-white border-b border-accent/30 pb-0.5">Prop Coupling</span>. This directly intersects with your active sandbox notebook on visual architecture models.
                     </p>

                     <Button variant="primary" className="w-full py-3 text-[9px] font-bold uppercase tracking-wider bg-accent text-white hover:bg-accent/90 rounded-full transition-transform hover:-translate-y-0.5 shadow-sm">
                       Connect Contextual Node
                     </Button>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>

        {/* Sidebar Outline / Notes */}
        {!isFocusMode && (
          <aside className="w-[380px] border-l border-white/8 bg-[#0B0E17]/60 backdrop-blur-xl flex flex-col justify-between shrink-0">
            
            {/* Outline / Personal Ledger Header */}
            <div className="p-6 border-b border-white/8 bg-[#0B0E17]/80">
              <div className="bg-white/5 p-1 rounded-xl border border-white/5 flex gap-1 shadow-inner">
                 <button 
                  onClick={() => setShowNotes(false)}
                  className={`grow py-2.5 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${!showNotes ? 'bg-white/5 text-white shadow-sm' : 'border-transparent text-white/40 hover:text-white'}`}
                 >
                   Timeline Outline
                 </button>
                 <button 
                  onClick={() => setShowNotes(true)}
                  className={`grow py-2.5 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${showNotes ? 'bg-white/5 text-white shadow-sm' : 'border-transparent text-white/40 hover:text-white'}`}
                 >
                   Study Ledger
                 </button>
              </div>
            </div>

            {/* Scrollable Timeline List */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6 text-left">
               <AnimatePresence mode="wait">
                 {!showNotes ? (
                   <motion.div 
                     key="outline"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4 }}
                     className="space-y-4 relative pl-3"
                   >
                     {/* Timeline Continuous Stroke */}
                     <div className="absolute left-4 top-2 bottom-6 w-px bg-white/10 z-0" />

                     {[
                       { id: 1, time: "00:00", title: "Introduction to Composition", duration: "2:45", status: "completed" },
                       { id: 2, time: "02:45", title: "The Problem with Prop Drilling", duration: "8:10", status: "active" },
                       { id: 3, time: "10:55", title: "Designing Flexible API Components", duration: "12:30", status: "upcoming" },
                       { id: 4, time: "23:25", title: "Performance Benchmarking", duration: "5:20", status: "upcoming" },
                       { id: 5, time: "28:45", title: "Summary & Lab Assignment", duration: "3:15", status: "upcoming" }
                     ].map((item) => {
                       const isActive = item.status === 'active';
                       return (
                         <div 
                           key={item.id} 
                           className={`relative group cursor-pointer flex gap-4 transition-all duration-300 ${isActive ? 'scale-102' : 'hover:translate-x-1'}`}
                         >
                            {/* Marker Node indicator */}
                            <div className="relative z-10 w-2.5 flex items-center justify-center">
                              {isActive ? (
                                <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 animate-pulse shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                              ) : item.status === 'completed' ? (
                                <div className="w-2.5 h-2.5 rounded-full bg-success ring-2 ring-success/20 shadow-[0_0_6px_rgba(16,185,129,0.3)]" />
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                              )}
                            </div>

                            <div className={`flex-1 p-4 rounded-xl border transition-all shadow-2xs ${isActive ? 'bg-accent/10 border-accent/30 text-accent shadow-sm' : 'bg-white/1 border-white/5 text-white/60 hover:text-white hover:border-white/10'}`}>
                               <div className="flex justify-between items-center mb-1">
                                 <span className="text-[9px] font-mono opacity-50">{item.time}</span>
                                 <span className="text-[9px] font-light italic opacity-50">{item.duration}m</span>
                               </div>
                               <p className={`text-sm font-normal leading-snug tracking-tight ${isActive ? 'text-white font-semibold' : ''}`}>{item.title}</p>
                            </div>
                         </div>
                       );
                     })}
                   </motion.div>
                 ) : (
                   <motion.div 
                     key="notes"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4 }}
                     className="space-y-4"
                   >
                       <div className="p-5 rounded-xl bg-white/2 border border-accent/20 relative overflow-hidden shadow-sm">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                          <div className="flex items-center justify-between mb-3">
                             <span className="text-[8px] font-mono text-accent uppercase tracking-widest font-bold">TIMESTAMP: 12:44</span>
                             <Bookmark className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <p className="text-xs font-light leading-relaxed text-white/90">Composition vs Context: Always prefer composition when children don't need to know about the parent's data structure.</p>
                       </div>
                       <div className="p-5 rounded-xl bg-white/2 border border-white/10 hover:border-white/15 transition-all cursor-text min-h-[160px] flex flex-col justify-between shadow-inner">
                          <p className="text-xs text-white/40 italic font-light">Type your deep learning notes here...</p>
                          <div className="flex justify-end">
                            <Activity className="w-3.5 h-3.5 text-white/20" />
                          </div>
                       </div>
                       <div className="flex gap-3 pt-2">
                         <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                           <PenLine className="w-3.5 h-3.5 text-accent" /> Scribble
                         </button>
                         <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm">
                           Export Notes
                         </button>
                       </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Launch Lab Workspace Box */}
            <div className="p-6 border-t border-white/8 bg-[#0B0E17]/80">
               <button 
                 onClick={() => setView('workspace')} 
                 className="w-full py-4 text-[9px] font-bold uppercase tracking-[0.15em] bg-accent text-white hover:bg-accent/90 rounded-full transition-transform hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 cursor-pointer"
               >
                 <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Initialize Workspace Sandbox
               </button>
            </div>

          </aside>
        )}
      </main>
    </div>
  );
}
