import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Bot, User, Maximize2, MoreHorizontal, Zap, ChevronLeft } from 'lucide-react';
import { Button, Logo, Card } from '../components/UI';
import { View } from '../types';

export default function AIMentorView({ setView }: { setView: (v: View) => void }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello Alex. I've been reviewing your progress on the 'Introduction to Visual Layout' module. You are doing great with the spacing exercises.\n\nWould you like a simple explanation of hierarchy structures, or should we look at some layout examples together?" },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: "That is a great question. We can think of hierarchy as a way to guide the student's eyes. By making the most important things larger or bolder, we help them read the page naturally." }]);
    }, 1200);
  };

  return (
    <div className="flex h-screen bg-background-primary overflow-hidden">
       {/* Left Rail */}
       <aside className="w-80 border-r border-border-subtle bg-white flex flex-col text-left">
          <div className="p-8 border-b border-border-subtle flex items-center justify-between">
             <button onClick={() => setView('dashboard')} className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors group cursor-pointer shadow-xs">
                <ChevronLeft className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
             </button>
             <Logo className="scale-75" />
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
             <h3 className="text-[10px] font-bold text-text-secondary/80 uppercase tracking-[0.25em] mb-6">Study History</h3>
             <div className="p-5 rounded-2xl border border-accent/15 bg-accent/5 cursor-pointer shadow-xs">
                <p className="text-sm font-semibold text-text-primary mb-1.5">Visual Layout Design</p>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                   <span className="text-[9px] text-accent uppercase font-bold tracking-widest">Active Study</span>
                </div>
             </div>
             <div className="p-5 rounded-2xl bg-white border border-border-subtle/80 opacity-75 hover:opacity-100 hover:border-accent/20 transition-all cursor-pointer shadow-xs">
                <p className="text-sm font-semibold text-text-primary mb-1.5">Hierarchy Systems</p>
                <p className="text-[9px] text-text-secondary font-bold uppercase tracking-widest">Studied 2d ago</p>
             </div>
          </div>

          <div className="p-6 border-t border-border-subtle">
             <div className="p-5 rounded-2xl bg-accent/5 border border-accent/15">
                <div className="flex items-center gap-2 mb-3 text-accent">
                   <Zap className="w-4 h-4" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Flow State Active</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed font-light">You are learning very well right now. It is a great time to study difficult topics.</p>
             </div>
          </div>
       </aside>

       {/* Chat Area */}
       <main className="flex-1 flex flex-col bg-background-primary relative text-left">
          <header className="px-12 py-6 border-b border-border-subtle flex items-center justify-between bg-white/80 backdrop-blur-3xl z-10">
             <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shadow-xs border border-accent/10">
                   <Bot className="w-6 h-6" />
                </div>
                <div>
                   <h2 className="text-base font-semibold tracking-tight text-text-primary">Luma <span className="font-semibold italic text-accent">Curator</span></h2>
                   <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span className="text-[9px] text-text-secondary font-bold uppercase tracking-widest">Connected</span>
                   </div>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-background-elevated transition-colors cursor-pointer text-text-secondary"><Maximize2 className="w-4.5 h-4.5" /></button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-background-elevated transition-colors cursor-pointer text-text-secondary"><MoreHorizontal className="w-4.5 h-4.5" /></button>
             </div>
          </header>

          <div className="flex-1 overflow-y-auto no-scrollbar px-12 py-12 space-y-8">
             {messages.map((m, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   className={`flex gap-6 max-w-3xl ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                   <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-1 shadow-xs ${m.role === 'assistant' ? 'bg-accent/15 text-accent' : 'bg-white text-text-secondary border border-border-subtle'}`}>
                      {m.role === 'assistant' ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                   </div>
                   <div className={`flex-1 p-6 rounded-[20px] border shadow-xs ${m.role === 'assistant' ? 'bg-white border-border-subtle text-text-primary' : 'bg-text-primary text-background-primary border-transparent'}`}>
                      <p className="text-sm font-normal leading-relaxed whitespace-pre-wrap">{m.content}</p>
                   </div>
                </motion.div>
             ))}
          </div>

          <div className="px-12 pb-10">
             <div className="max-w-4xl mx-auto relative group">
                <div className="relative rounded-2xl border border-border-subtle/80 p-2 flex items-center gap-4 bg-white shadow-xs focus-within:border-accent/30 transition-all">
                   <textarea 
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
                     placeholder="Type a question for Luma..."
                     className="flex-1 bg-transparent border-none outline-none resize-none py-3 px-4 text-sm text-text-primary placeholder:text-text-secondary/40 h-12 font-light no-scrollbar"
                   />
                   <Button 
                    className="h-10 w-10 rounded-xl flex items-center justify-center p-0 shrink-0 bg-accent text-white shadow-sm hover:bg-accent/90"
                    onClick={sendMessage}
                   >
                      <Send className="w-4.5 h-4.5" />
                   </Button>
                </div>
                <div className="mt-3 flex items-center justify-center gap-6 opacity-30">
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary">Shift + Enter for line break</span>
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary">AI Calibration Ready</span>
                </div>
             </div>
          </div>
       </main>
    </div>
  );
}
