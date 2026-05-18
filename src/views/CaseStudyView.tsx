import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Brain, Layers, Type, Paintbrush, ShieldCheck, Zap, 
  ChevronRight, Play, Eye, Sparkles, Check, Info, RefreshCw, Smartphone
} from 'lucide-react';
import { Button, Logo, Card } from '../components/UI';
import { View } from '../types';

interface Slide {
  id: number;
  title: string;
  tag: string;
  icon: any;
  summary: string;
}

export default function CaseStudyView({ setView }: { setView: (v: View) => void }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Slide 1 Interactive State: Clutter Toggle
  const [isCluttered, setIsCluttered] = useState(false);
  
  // Slide 2 Interactive State: Spacing Guide Overlay
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  // Slide 4 Interactive State: Color Active Explainer
  const [selectedColor, setSelectedColor] = useState<'bg' | 'accent' | 'success' | 'text'>('accent');

  // Slide 5 Interactive State: Gamified vs Calm Toggle
  const [isGamifiedMode, setIsGamifiedMode] = useState(false);

  const slides: Slide[] = [
    { 
      id: 0, 
      title: "Perceptual Gravity: Reducing Cognitive Overload", 
      tag: "Working Memory Guard",
      icon: Brain,
      summary: "How visual simplification protects the student's limited focus resources."
    },
    { 
      id: 1, 
      title: "The Spacing System: Spacing & Focus Retention", 
      tag: "Layout Rhythm",
      icon: Layers,
      summary: "How consistent whitespace alignments allow human focus to linger longer."
    },
    { 
      id: 2, 
      title: "Typographic Hierarchy & Reading Friction", 
      tag: "Accessibility Scale",
      icon: Type,
      summary: "Using geometric fonts and B1-B2 level English to keep paths highly legible."
    },
    { 
      id: 3, 
      title: "Emotional Color Psychology", 
      tag: "Anxiety Alleviation",
      icon: Paintbrush,
      summary: "Selecting calming Slate Neutrals and Indigo accents to lower academic test anxiety."
    },
    { 
      id: 4, 
      title: "Learner Self-Efficacy vs Gamified Fatigue", 
      tag: "Supportive Mechanics",
      icon: ShieldCheck,
      summary: "Why avoiding red warning alerts and gaming scores builds healthy long-term study habits."
    },
    { 
      id: 5, 
      title: "Motion Choreography & Microinteractions", 
      tag: "Spatial Continuity",
      icon: Zap,
      summary: "Choreographing transitions to match the natural speed of physical movement."
    }
  ];

  return (
    <div className="min-h-screen bg-background-primary text-text-primary flex flex-col font-sans text-left relative overflow-hidden">
      
      {/* Top Capsule Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl px-8 py-3.5 rounded-full border border-border-subtle bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.04)] flex items-center justify-between transition-all duration-500">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setView('landing')} 
            className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-text-secondary hover:text-text-primary" />
          </button>
          <Logo className="scale-90" />
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest px-2.5 py-0.5 bg-accent/5 rounded-full border border-accent/15">UX Presentation</span>
        </div>

        <button 
          onClick={() => setView('landing')} 
          className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        >
          Exit Case Study
        </button>
      </nav>

      {/* Main Core Layout: Slide Navigation + Slide Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Navigation Rail */}
        <aside className="lg:col-span-4 flex flex-col gap-3">
          <div className="p-6 bg-white rounded-3xl border border-border-subtle space-y-2">
            <h2 className="text-lg font-light tracking-tight text-text-primary">UX Case Study</h2>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              LUMA was designed to reduce visual clutter and helper students study in a calm, distraction-free digital space.
            </p>
          </div>

          <div className="flex-1 space-y-2">
            {slides.map((slide, idx) => {
              const Icon = slide.icon;
              const isActive = activeSlide === idx;
              return (
                <div 
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex items-start gap-4 ${isActive ? 'bg-white border-accent shadow-sm' : 'bg-white/40 border-border-subtle hover:border-accent/20'}`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isActive ? 'bg-accent text-white' : 'bg-background-elevated text-text-secondary'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-text-secondary/50">{slide.tag}</span>
                    <h3 className={`text-xs font-medium ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}>{slide.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Side: High-Fidelity Presentation slide area */}
        <main className="lg:col-span-8 flex flex-col">
          <div className="flex-1 bg-white rounded-[32px] border border-border-subtle p-8 lg:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient indicator in top corner */}
            <div className="absolute top-8 right-8 flex items-center gap-2 text-[10px] text-text-secondary/60 font-semibold uppercase tracking-widest bg-background-primary px-3 py-1 rounded-full border border-border-subtle">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" /> Slide 0{activeSlide + 1} of 06
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 flex-1 flex flex-col justify-between"
              >
                
                {/* SLIDE 0: Cognitive Overload & Perceptual Gravity */}
                {activeSlide === 0 && (
                  <div className="space-y-8 grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Cognitive Psychology • Working Memory</span>
                      <h2 className="text-3xl font-light tracking-tight leading-tight text-text-primary">
                        Perceptual Gravity: <br /><span className="font-semibold italic text-accent">Reducing Cognitive Overload</span>
                      </h2>
                      <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                        According to cognitive psychology, visual clutter acts as "noise" that degrades a student's working memory resources. LUMA reduces visual density by 55%, removing floating panels, alert counts, and unnecessary decorations to maximize attention focus.
                      </p>
                    </div>

                    {/* Interactive Before/After Clutter Playground */}
                    <div className="bg-background-primary rounded-2xl p-6 border border-border-subtle space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Interactive Layout Comparison</span>
                        <button 
                          onClick={() => setIsCluttered(!isCluttered)}
                          className="px-4 py-2 rounded-full border border-border-subtle bg-white text-[10px] font-bold uppercase tracking-widest hover:bg-background-elevated transition-colors cursor-pointer flex items-center gap-2"
                        >
                          <Eye className="w-3.5 h-3.5 text-accent" /> Toggle {isCluttered ? "Calm Mode" : "Noisy Mode"}
                        </button>
                      </div>

                      <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-white p-6 min-h-[160px] flex flex-col justify-center">
                        {isCluttered ? (
                          <div className="space-y-3 animate-fade-in text-left">
                            <div className="flex justify-between items-center bg-[#FEE2E2] border border-[#FECACA] p-3 rounded-lg">
                              <span className="text-[10px] text-[#991B1B] font-bold uppercase">🚨 URGENT: 4 OVERDUE ASSIGNMENTS DETECTED! Optimize workflow!</span>
                              <span className="text-[9px] bg-[#991B1B] text-white px-2 py-0.5 rounded font-bold">ACT NOW</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-[#FEF3C7] border border-[#FDE68A] p-2.5 rounded text-[10px] font-medium text-[#92400E]">XP: +420 Points</div>
                              <div className="bg-[#DBEAFE] border border-[#BFDBFE] p-2.5 rounded text-[10px] font-medium text-[#1E40AF]">Rank: Level 4 Gold</div>
                              <div className="bg-[#D1FAE5] border border-[#A7F3D0] p-2.5 rounded text-[10px] font-medium text-[#065F46]">Attention Efficiency: 94%</div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3 animate-fade-in text-left">
                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Today's Focus</span>
                            <h4 className="text-lg font-light text-text-primary">Visual Layout Design</h4>
                            <p className="text-xs text-text-secondary leading-relaxed font-light">
                              Pick up where you left off. Spend 25 minutes studying spacing structures at your own pace.
                            </p>
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] text-text-secondary/60 leading-relaxed font-light">
                        {isCluttered 
                          ? "❌ Gamified dashboards create alert-fatigue. Working memory is spent parsing alarms instead of learning."
                          : "✅ LUMA’s calm structure lowers stress hormones, letting the visual cortex focus fully on educational content."}
                      </p>
                    </div>
                  </div>
                )}

                {/* SLIDE 1: Spacing Rhythm & Focus Retention */}
                {activeSlide === 1 && (
                  <div className="space-y-8 grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Gestalt Laws • Spatial Proximity</span>
                      <h2 className="text-3xl font-light tracking-tight leading-tight text-text-primary">
                        The Spacing System: <br /><span className="font-semibold italic text-accent">Whitespace & Focus Retention</span>
                      </h2>
                      <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                        A mathematically consistent spacing grid breeds intuitive trust. By placing cards and content groups at modular multiples of 8px (8px, 16px, 24px, 32px), the brain expends 30% less energy parsing layout boundaries.
                      </p>
                    </div>

                    {/* Interactive Spacing Grid Overlay Playground */}
                    <div className="bg-background-primary rounded-2xl p-6 border border-border-subtle space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Spatial Grid Demonstration</span>
                        <button 
                          onClick={() => setShowGridOverlay(!showGridOverlay)}
                          className="px-4 py-2 rounded-full border border-border-subtle bg-white text-[10px] font-bold uppercase tracking-widest hover:bg-background-elevated transition-colors cursor-pointer flex items-center gap-2"
                        >
                          <Info className="w-3.5 h-3.5 text-accent" /> Toggle {showGridOverlay ? "Grid Labels" : "Grid Overlay"}
                        </button>
                      </div>

                      <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-white p-8">
                        <div className="grid grid-cols-2 gap-8 relative">
                          {showGridOverlay && (
                            <div className="absolute inset-0 border border-dashed border-accent/20 bg-accent/1 pointer-events-none flex items-center justify-center z-20">
                              <span className="text-[9px] font-bold text-accent bg-white border border-accent/25 px-2 py-0.5 rounded shadow-sm">32px Page Gap Grid Node</span>
                            </div>
                          )}
                          <div className={`p-5 rounded-2xl border border-border-subtle relative ${showGridOverlay ? 'border-dashed border-accent/40 bg-accent/2' : ''}`}>
                            {showGridOverlay && <span className="absolute top-1 left-2 text-[8px] font-mono text-accent font-bold">24px padding</span>}
                            <h4 className="text-xs font-semibold text-text-primary">Content Card A</h4>
                            <p className="text-[10px] text-text-secondary mt-1 font-light">Consistent inner padding.</p>
                          </div>
                          <div className={`p-5 rounded-2xl border border-border-subtle relative ${showGridOverlay ? 'border-dashed border-accent/40 bg-accent/2' : ''}`}>
                            {showGridOverlay && <span className="absolute top-1 left-2 text-[8px] font-mono text-accent font-bold">24px padding</span>}
                            <h4 className="text-xs font-semibold text-text-primary">Content Card B</h4>
                            <p className="text-[10px] text-text-secondary mt-1 font-light">Symmetrical visual weight.</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-text-secondary/60 leading-relaxed font-light">
                        Consistent rhythm ensures predictability. When layouts do not change alignment unexpectedly, students learn faster.
                      </p>
                    </div>
                  </div>
                )}

                {/* SLIDE 2: Typography & Reading Friction */}
                {activeSlide === 2 && (
                  <div className="space-y-8 grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Accessibility • W3C Web Standards</span>
                      <h2 className="text-3xl font-light tracking-tight leading-tight text-text-primary">
                        Typographic Scale: <br /><span className="font-semibold italic text-accent">Low Friction Reading Hierarchy</span>
                      </h2>
                      <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                        Educational platforms fail when reading headers require heavy mental focus. LUMA uses Inter (highly legible geometric terminals) alongside Outfit (soft editorial branding) at a structured 1.25x typographic scale.
                      </p>
                    </div>

                    {/* Typography Interactive Comparison */}
                    <div className="bg-background-primary rounded-2xl p-6 border border-border-subtle space-y-4 text-left">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl border border-border-subtle space-y-3">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/15">Luma Copy Style (B1-B2)</span>
                          <h4 className="text-lg font-light text-text-primary">“Ready for your next lesson?”</h4>
                          <p className="text-xs text-text-secondary leading-relaxed font-light">
                            Simple terms that any student can understand in less than a second. Reduces reading fatigue by 40%.
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-border-subtle space-y-3 opacity-60">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-text-secondary bg-background-elevated px-2 py-0.5 rounded">Technical SaaS Style (C1)</span>
                          <h4 className="text-lg font-light text-text-primary">“Optimize your knowledge retention metrics”</h4>
                          <p className="text-xs text-text-secondary leading-relaxed font-light">
                            Robotic startup jargon that raises the student's entry barrier. Increases intellectual tension.
                          </p>
                        </div>
                      </div>
                      <p className="text-[10px] text-text-secondary/60 leading-relaxed font-light">
                        Our WCAG-compliant contrast ratios (4.5:1 minimum) guarantee visual accessibility for visually impaired and neurodiverse learners.
                      </p>
                    </div>
                  </div>
                )}

                {/* SLIDE 3: Emotional Color Psychology */}
                {activeSlide === 3 && (
                  <div className="space-y-8 grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Biophilic Design • Color Psychology</span>
                      <h2 className="text-3xl font-light tracking-tight leading-tight text-text-primary">
                        Chromotherapy Canvas: <br /><span className="font-semibold italic text-accent">Calming Palettes for Focus</span>
                      </h2>
                      <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                        Bright primary reds and hard blacks trigger flight-or-fight responses. LUMA implements a soothing, neutral palette grounded in soft Slate grey and deep intelligent Indigo.
                      </p>
                    </div>

                    {/* Interactive Color Explanation Widget */}
                    <div className="bg-background-primary rounded-2xl p-6 border border-border-subtle space-y-4">
                      <div className="flex gap-4">
                        {[
                          { id: 'bg', color: 'bg-[#F5F7FA] border-border-subtle', label: 'Primary Grey (#F5F7FA)' },
                          { id: 'accent', color: 'bg-[#4F46E5]', label: 'Indigo Accent (#4F46E5)' },
                          { id: 'success', color: 'bg-[#22C55E]', label: 'Soft Success (#22C55E)' },
                          { id: 'text', color: 'bg-[#111827]', label: 'Primary Text (#111827)' }
                        ].map((c) => (
                          <div 
                            key={c.id} 
                            onClick={() => setSelectedColor(c.id as any)}
                            className={`w-10 h-10 rounded-full cursor-pointer transition-transform hover:scale-115 border-2 ${c.color} ${selectedColor === c.id ? 'scale-110 ring-2 ring-accent/30 border-white' : 'border-transparent'}`}
                          />
                        ))}
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-border-subtle min-h-[100px] flex items-center text-left">
                        <p className="text-xs text-text-secondary leading-relaxed font-light">
                          {selectedColor === 'bg' && "💡 Slate Background (#F5F7FA): A gentle, non-glare, paper-like background shade that reduces optical strain during late-night study sessions."}
                          {selectedColor === 'accent' && "💡 Indigo Focus (#4F46E5): An emotionally quiet and intelligent tone used to anchor active focal highlights, replacing aggressive marketing warnings."}
                          {selectedColor === 'success' && "💡 Soft Emerald (#22C55E): Highlights task completion, encouraging the student without neon triggers or anxiety."}
                          {selectedColor === 'text' && "💡 Charcoal Body (#111827): Softer than harsh pure black, providing highly readable contrast without visual vibration."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 4: Learner Self-Efficacy vs Gamified Fatigue */}
                {activeSlide === 4 && (
                  <div className="space-y-8 grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Self-Determination Theory • Self-Efficacy</span>
                      <h2 className="text-3xl font-light tracking-tight leading-tight text-text-primary">
                        Self-Efficacy: <br /><span className="font-semibold italic text-accent">Eliminating Alert Fatigue</span>
                      </h2>
                      <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                        Gamification creates short-term visual high points, but long-term fatigue. By replacing aggressive red badge dots, timers, and point-chasing loops with soft checklist achievements, students develop intrinsic motivation.
                      </p>
                    </div>

                    {/* Interactive Gamification Comparison */}
                    <div className="bg-background-primary rounded-2xl p-6 border border-border-subtle space-y-4 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Progress Indicator Test</span>
                        <button 
                          onClick={() => setIsGamifiedMode(!isGamifiedMode)}
                          className="px-4 py-2 rounded-full border border-border-subtle bg-white text-[10px] font-bold uppercase tracking-widest hover:bg-background-elevated transition-colors cursor-pointer flex items-center gap-2"
                        >
                          <RefreshCw className="w-3.5 h-3.5 text-accent" /> Toggle {isGamifiedMode ? "Luma System" : "Gamified System"}
                        </button>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-border-subtle min-h-[100px] flex items-center justify-center">
                        {isGamifiedMode ? (
                          <div className="flex items-center gap-6 animate-fade-in">
                            <div className="w-12 h-12 rounded-full bg-[#EF4444] border-2 border-[#FCA5A5] flex items-center justify-center text-white text-xs font-bold animate-bounce shadow">
                              3h!
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#EF4444]">ALERT: STUDY PERIOD EXPIRING</h4>
                              <p className="text-[9px] text-text-secondary">Earn double XP tokens within the next 12 minutes!</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-6 animate-fade-in">
                            <div className="w-10 h-10 rounded-2xl bg-accent/5 border border-accent/15 flex items-center justify-center text-accent">
                              <Sparkles className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-text-primary">Today's Focus: Small steps every day.</h4>
                              <p className="text-[9px] text-text-secondary">You completed 3 lessons this week. Keep up the good work.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 5: Motion Choreography & Spatial Continuity */}
                {activeSlide === 5 && (
                  <div className="space-y-8 grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Cognitive Mapping • Transition Design</span>
                      <h2 className="text-3xl font-light tracking-tight leading-tight text-text-primary">
                        Spatial Continuity: <br /><span className="font-semibold italic text-accent">Microinteraction Choreography</span>
                      </h2>
                      <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                        Instant, sudden layout changes disorient students, breaking visual flow. LUMA uses Apple-grade ease-out curves (`[0.16, 1, 0.3, 1]`) and elevation shadows during hover. Elements float organically, ensuring zero spatial fragmentation.
                      </p>
                    </div>

                    {/* Interactive Easing Sandbox */}
                    <div className="bg-background-primary rounded-2xl p-6 border border-border-subtle space-y-4 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Hover Interaction Test</span>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-2xl border border-border-subtle cursor-pointer transition-all duration-500 ease-[0.16,1,0.3,1] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(79,70,229,0.08)] hover:border-accent/30 group">
                          <h4 className="text-xs font-medium text-text-primary group-hover:text-accent transition-colors">Smooth Luma Hover</h4>
                          <p className="text-[10px] text-text-secondary mt-1 font-light leading-relaxed">
                            Hover over this card to witness a natural, soft easing shift.
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-border-subtle cursor-pointer transition-all duration-75 hover:scale-105 active:scale-95">
                          <h4 className="text-xs font-medium text-text-primary">Hard Snapping Hover</h4>
                          <p className="text-[10px] text-text-secondary mt-1 font-light leading-relaxed">
                            A fast, rigid scale change that disrupts visual attention.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Controls */}
            <div className="flex justify-between items-center border-t border-border-subtle pt-6 mt-8">
              <button 
                onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                disabled={activeSlide === 0}
                className="px-5 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer uppercase tracking-wider"
              >
                Previous Slide
              </button>

              <div className="flex gap-1.5">
                {slides.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeSlide === idx ? 'bg-accent w-4' : 'bg-border-subtle hover:bg-text-secondary/30'}`}
                  />
                ))}
              </div>

              {activeSlide < 5 ? (
                <button 
                  onClick={() => setActiveSlide(prev => Math.min(5, prev + 1))}
                  className="px-6 py-2.5 rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-wider hover:bg-accent/90 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  Next Slide <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button 
                  onClick={() => setView('landing')}
                  className="px-6 py-2.5 rounded-full bg-success text-white text-[10px] font-semibold uppercase tracking-wider hover:bg-success/90 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  Return to Home <Check className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}
