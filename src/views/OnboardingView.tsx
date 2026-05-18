import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Target, ArrowRight } from 'lucide-react';
import { View } from '../types';

export default function OnboardingView({ setView }: { setView: (v: View) => void }) {
  const [step, setStep] = useState(0);

  const onboardingSteps = [
    {
      icon: Sparkles,
      title: "Tell us about your learning intent.",
      desc: "Are you here to master a profession, explore a curiosity, or solve a specific problem?",
      options: ["Master a Profession", "Intellectual Curiosity", "Critical Problem Solving"]
    },
    {
      icon: Brain,
      title: "How do you perceive complex information?",
      desc: "Our AI engine adapts the teaching style to your specific mental models.",
      options: ["Visual & Spatial", "First Principles / Logic", "Story-driven / Case studies"]
    },
    {
      icon: Target,
      title: "What is your target intensity?",
      desc: "We calibrate the roadmap based on your available cognitive bandwidth.",
      options: ["Immersive (4h+ / day)", "Consistent (1h / day)", "Adaptive (Whenever I can)"]
    }
  ];

  const current = onboardingSteps[step];

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      setView('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-background-primary">
       <motion.div 
         animate={{ x: step * 100 - 100 }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full -z-10" 
       />

       <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <div className="text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">Discovery • Phase 0{step + 1}</span>
                <h1 className="text-[52px] font-light tracking-tight text-text-primary mb-6 leading-[1.1]">
                  {current.title}
                </h1>
                <p className="text-xl text-text-secondary font-light max-w-xl mx-auto leading-relaxed">
                  {current.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                {current.options.map((option, i) => (
                   <motion.button
                     key={i}
                     whileHover={{ x: 6, scale: 1.01 }}
                     onClick={handleNext}
                     className="p-6 rounded-2xl bg-white border border-border-subtle text-left hover:border-accent/30 hover:shadow-sm transition-all group flex items-center justify-between cursor-pointer"
                   >
                     <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">{option}</span>
                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-accent" />
                   </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-20">
            {onboardingSteps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-700 rounded-full ${i === step ? 'w-12 bg-accent' : 'w-2 bg-border-subtle/80'}`} 
              />
            ))}
          </div>

          <div className="mt-12 text-center text-[9px] font-bold text-text-secondary/70 uppercase tracking-[0.25em]">
             PERSONALIZING YOUR BIOMETRIC EXPERIENCE IN REAL-TIME
          </div>
       </div>
    </div>
  );
}
