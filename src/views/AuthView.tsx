import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Chrome } from 'lucide-react';
import { Button, Input, Logo } from '../components/UI';
import { View } from '../types';

export default function AuthView({ setView }: { setView: (v: View) => void }) {
  const [step, setStep] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-background-primary">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo className="scale-110 tracking-[0.25em]" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">Sanctuary of Learning</p>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-text-primary mb-2 leading-tight">
            {step === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="text-sm text-text-secondary font-light">
            {step === 'login' 
              ? 'Enter your presence to resume your quiet evolution.' 
              : 'Calibrate your study focus in a distraction-free space.'}
          </p>
        </div>

        <div className="premium-card p-10 space-y-6 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01),0_24px_48px_-12px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]">
          <div className="space-y-4">
            <Input label="Email Address" placeholder="alex@luma.com" type="email" />
            <Input label="Password" placeholder="••••••••" type="password" />
          </div>

          <Button 
            className="w-full py-4 text-xs font-semibold uppercase tracking-wider bg-accent text-white" 
            onClick={() => setView('onboarding')}
          >
            {step === 'login' ? 'Sign In' : 'Create Space'}
          </Button>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-x-0 h-px bg-border-subtle/60" />
            <span className="relative px-4 text-[9px] font-bold uppercase tracking-[0.25em] text-text-secondary/70 bg-white">Secure Identity</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" className="py-3 shadow-xs">
              <Github className="w-3.5 h-3.5 mr-2 text-text-secondary" /> GitHub
            </Button>
            <Button variant="secondary" className="py-3 shadow-xs">
              <Chrome className="w-3.5 h-3.5 mr-2 text-text-secondary" /> Google
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setStep(step === 'login' ? 'signup' : 'login')}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary hover:text-accent transition-colors cursor-pointer"
          >
            {step === 'login' ? "New to Luma? Create an account" : "Already registered? Sign in"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
