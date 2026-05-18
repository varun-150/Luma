import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Eye, Save, Sparkles, ChevronLeft, Terminal } from 'lucide-react';
import { Button, Logo } from '../components/UI';
import { View } from '../types';

export default function WorkspaceView({ setView }: { setView: (v: View) => void }) {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  return (
    <div className="h-screen flex flex-col bg-[#050B11] overflow-hidden text-white/90 font-sans text-left">
       {/* Header */}
       <header className="px-10 py-6 border-b border-white/8 flex items-center justify-between backdrop-blur-3xl bg-[#07111A]/60 z-10">
          <div className="flex items-center gap-6">
             <button onClick={() => setView('video-learning')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer shadow-xs">
                <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
             </button>
             <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <Code className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-mono tracking-wider text-white/70">evolution_fragment_04.tsx</span>
             </div>
          </div>

          <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/5 backdrop-blur-xl">
             <button 
              onClick={() => setActiveTab('editor')}
              className={`px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${activeTab === 'editor' ? 'bg-white text-black shadow-md' : 'text-white/40 hover:text-white/80'}`}
             >
                Editor
             </button>
             <button 
              onClick={() => setActiveTab('preview')}
              className={`px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${activeTab === 'preview' ? 'bg-white text-black shadow-md' : 'text-white/40 hover:text-white/80'}`}
             >
                Preview
             </button>
          </div>

          <div className="flex items-center gap-3">
             <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shadow-xs cursor-pointer">
                <Save className="w-4 h-4 text-white/60 hover:text-white transition-colors" />
             </button>
             <Button className="px-6 py-2.5 text-[9px] font-bold uppercase tracking-wider bg-accent text-white shadow-sm hover:bg-accent/90 rounded-full">Submit Fragment</Button>
          </div>
       </header>

       <main className="flex-1 flex overflow-hidden">
          {/* Editor Area */}
          <div className={`flex-1 flex flex-col h-full bg-[#050B11] ${activeTab === 'preview' ? 'hidden md:flex' : 'flex'}`}>
             <div className="flex-1 font-mono text-[13px] p-10 overflow-y-auto no-scrollbar relative leading-relaxed">
                <div className="flex gap-10">
                   <div className="text-white/20 select-none text-right font-light pointer-events-none">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="mb-1">{i + 1}</div>
                      ))}
                   </div>
                   <div className="flex-1 text-white/80 space-y-1 text-left">
                      <p><span className="text-accent italic opacity-95">import</span> {"{ motion }"} <span className="text-accent italic opacity-95">from</span> <span className="text-accent-secondary opacity-95">'motion/react'</span>;</p>
                      <p>&nbsp;</p>
                      <p><span className="text-accent italic opacity-95">export default function</span> <span className="text-white font-medium">EvolutionFragment</span>() {"{"}</p>
                      <p>&nbsp;&nbsp;<span className="text-accent italic opacity-95">const</span> [active, setActive] = <span className="text-accent-secondary">useState</span>(<span className="text-accent">false</span>);</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;&nbsp;<span className="text-accent italic opacity-95">return</span> (</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-accent">motion.div</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent italic opacity-95">whileHover</span>={"{{ scale: 1.05 }}"}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent italic opacity-95">className</span>=<span className="text-accent-secondary">"premium-card p-12"</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/30 italic">// Encode spatial logic here</span></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-accent">h1</span>&gt;The Neural Interface&lt;/<span className="text-accent">h1</span>&gt;</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-accent">motion.div</span>&gt;</p>
                      <p>&nbsp;&nbsp;);</p>
                      <p>{"}"}</p>
                      <motion.div 
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-[2px] h-[20px] bg-accent ml-2 inline-block align-middle shadow-[0_0_8px_rgba(79,70,229,1)]" 
                      />
                   </div>
                </div>

                {/* AI Suggestions Floating Panel */}
                <div className="absolute bottom-10 right-10 w-96 p-6 rounded-[20px] backdrop-blur-3xl bg-accent/10 border border-accent/25 shadow-[0_20px_48px_rgba(0,0,0,0.6)] text-left">
                   <div className="flex items-center gap-2.5 text-[9px] font-bold text-accent uppercase tracking-[0.25em] mb-4">
                      <Sparkles className="w-4 h-4" /> Cognitive Assistant
                   </div>
                   <p className="text-xs text-white/80 leading-relaxed mb-6 font-light">
                     "You're implementing a scaling transition. Should I calculate the <span className="text-accent font-medium">spring damping</span> values for a high-end cinematic feel?"
                   </p>
                   <div className="flex gap-4">
                     <Button className="flex-1 py-3 text-[9px] font-bold uppercase tracking-widest bg-accent text-white shadow-sm hover:bg-accent/90 rounded-full">Apply Physics</Button>
                     <Button variant="secondary" className="flex-1 py-3 text-[9px] font-bold uppercase tracking-widest border-white/10 hover:bg-white/10 rounded-full text-white/80">Ignore</Button>
                   </div>
                </div>
             </div>
             
             {/* Bottom Terminal Bar */}
             <div className="h-12 bg-[#07111A]/80 border-t border-white/8 px-10 flex items-center justify-between text-left">
                <div className="flex items-center gap-6 opacity-60">
                   <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/80">
                      <Terminal className="w-3 h-3" /> Console: Ready
                   </div>
                   <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/80">
                      Node v20.x • React 18
                   </div>
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-success flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.5)]" /> Compilation Successful
                </div>
             </div>
          </div>

          {/* Preview / Instruction Area */}
          <div className={`w-[500px] border-l border-white/8 bg-[#07111A]/40 backdrop-blur-md flex flex-col h-full ${activeTab === 'editor' ? 'hidden md:flex' : 'flex'}`}>
             <div className="p-10 border-b border-white/8 text-left">
                <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">Lab Objective • Evolution 04</h3>
                <p className="text-base font-light leading-relaxed mb-8 text-white/90">Master the <span className="font-semibold italic text-accent">biological resonance</span> of movement. Orchestrate a fragment that responds to user intent with weighted mass.</p>
                <div className="space-y-3">
                   <div className="flex items-center gap-3 p-3.5 rounded-xl bg-success/15 border border-success/30 text-success text-[10px] font-bold uppercase tracking-widest leading-none shadow-2xs">
                      <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Syntax Harmonized
                   </div>
                   <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">
                      <div className="w-2 h-2 rounded-full bg-white/20" /> Pending: Dynamic Mass
                   </div>
                </div>
             </div>

             <div className="flex-1 p-10 bg-black/40 flex items-center justify-center relative">
                <div className="absolute top-8 left-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Neural Feed • Live</div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-64 h-80 flex flex-col items-center justify-center text-center p-10 cursor-pointer group bg-[#0B1017] border border-white/10 rounded-[20px] shadow-lg transition-all duration-500 hover:border-accent/30"
                >
                   <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-6 shadow-inner group-hover:scale-105 transition-transform border border-accent/10">
                      <Eye className="w-6.5 h-6.5" />
                   </div>
                   <h4 className="text-lg font-semibold tracking-tight mb-2 text-white/95">Neural Card</h4>
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Prototype Active</p>
                </motion.div>
             </div>
          </div>
       </main>
    </div>
  );
}
