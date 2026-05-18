import { motion } from 'motion/react';
import { 
  Search, Filter, Star, TrendingUp, ChevronLeft, ArrowRight, User,
  Home, Target, MessageSquare
} from 'lucide-react';
import { Button, Card, Logo } from '../components/UI';
import { View } from '../types';

export default function DiscoveryView({ setView }: { setView: (v: View) => void }) {
  const categories = ["All", "Design", "Development", "Psychology", "Business", "Humanities"];

  return (
    <div className="flex h-screen bg-background-primary text-text-primary overflow-hidden">
      {/* Mini Sidebar Nav */}
      <aside className="w-18 light-sidebar-border flex flex-col items-center py-10 z-10">
        <div className="mb-16 cursor-pointer hover:opacity-85 transition-opacity duration-300" onClick={() => setView('landing')}>
          <Logo className="scale-70" />
        </div>
        
        <nav className="flex-1 flex flex-col gap-12">
          <NavIcon icon={Home} onClick={() => setView('dashboard')} />
          <NavIcon icon={Search} active onClick={() => setView('discovery')} />
          <NavIcon icon={Target} onClick={() => setView('roadmap')} />
          <NavIcon icon={MessageSquare} onClick={() => setView('ai-mentor')} />
        </nav>

        <div className="w-9 h-9 rounded-full border border-border-subtle bg-white overflow-hidden cursor-pointer hover:border-accent/40 transition-colors duration-300" onClick={() => setView('profile')}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <header className="px-16 pt-16 pb-10 text-left max-w-7xl mx-auto">
           <div className="flex items-center gap-4 mb-8">
             <button onClick={() => setView('landing')} className="w-9 h-9 rounded-full bg-white border border-border-subtle flex items-center justify-center hover:bg-background-elevated transition-colors duration-300 group cursor-pointer shadow-xs">
               <ChevronLeft className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" />
             </button>
             <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-text-secondary/80">Experiences Catalog</span>
           </div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="text-[48px] md:text-[56px] font-light tracking-tight mb-8 leading-[1.08] text-text-primary"
           >
             What will you <br /><span className="font-normal italic text-transparent bg-clip-text bg-linear-to-r from-text-primary via-accent to-text-primary">master today?</span>
           </motion.h1>
           
           <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
              <div className="flex-1 relative group h-[56px]">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/40 group-focus-within:text-accent transition-colors duration-300" />
                <input 
                  type="text" 
                  placeholder="Search for wisdom, skills, or mentors..." 
                  className="w-full h-full pl-14 pr-6 rounded-2xl bg-white border border-border-subtle/80 focus:border-accent/40 outline-none transition-all duration-300 placeholder:text-text-secondary/40 font-light text-sm focus:shadow-xs text-text-primary"
                />
              </div>
              <Button variant="secondary" className="px-8 h-[56px] bg-white border border-border-subtle hover:bg-background-elevated text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 flex items-center justify-center shadow-xs">
                <Filter className="w-4 h-4 mr-3 opacity-60 text-text-primary" /> Filter Experience
              </Button>
           </div>

           <div className="flex gap-3 mt-10 overflow-x-auto no-scrollbar pb-2">
              {categories.map((c, i) => (
                <motion.button 
                  key={c} 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.25em] border transition-all duration-500 cursor-pointer ${i === 0 ? 'bg-text-primary text-background-primary border-transparent shadow-[0_4px_12px_rgba(15,23,42,0.08)]' : 'border-border-subtle bg-white text-text-secondary hover:text-text-primary hover:border-accent/30 hover:shadow-xs'}`}
                >
                  {c}
                </motion.button>
              ))}
           </div>
        </header>

        <section className="px-16 space-y-20 max-w-7xl mx-auto">
          {/* Trending */}
          <div className="text-left">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-secondary/80 flex items-center gap-3">
                <TrendingUp className="w-3.5 h-3.5 text-accent" /> Trending Experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Neuroscience of Deep Work", instructor: "Dr. Elena Vance", category: "Psychology", students: "12,480", rating: "4.9", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800" },
                 { title: "Systems Thinking for Designers", instructor: "Marcus Thorne", category: "Design", students: "8,920", rating: "4.8", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
                 { title: "The Art of Stoic Leadership", instructor: "Julian Aris", category: "Business", students: "22,140", rating: "5.0", image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800" }
               ].map((course, i) => (
                 <CourseCard key={i} {...course} onClick={() => setView('course-detail')} />
               ))}
            </div>
          </div>

          {/* Personalized Banner */}
          <div className="premium-card p-1.5 bg-accent/5 overflow-hidden flex flex-col md:flex-row border border-accent/15 text-left rounded-[24px]">
            <div className="md:w-[40%] p-12 flex flex-col justify-center">
               <span className="text-[9px] font-bold text-accent uppercase tracking-[0.3em] mb-4">Neural Pulse Adaptation</span>
               <h3 className="text-3xl font-light tracking-tight mb-5 leading-tight text-text-primary">Your Personal Path <br /> <span className="font-semibold italic text-accent">to Mastery.</span></h3>
               <p className="text-xs text-text-secondary leading-relaxed font-light mb-8 max-w-sm">We've mapped your cognitive patterns to suggest the most efficient route for deep intellectual synthesis.</p>
               <Button onClick={() => setView('roadmap')} className="w-fit px-8 py-3.5 shadow-sm text-xs uppercase tracking-wider font-bold">Initialize Roadmap</Button>
            </div>
            <div className="md:w-[60%] p-8 grid grid-cols-2 gap-6 items-center">
               <motion.div 
                 whileHover={{ y: -4 }}
                 className="aspect-4/3 rounded-[20px] overflow-hidden group cursor-pointer border border-white/10 relative shadow-md transition-transform duration-500 ease-[0.16,1,0.3,1]"
               >
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-[0.92] group-hover:scale-[1.03] transition-all duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-accent-secondary mb-1">Architecture</span>
                    <p className="text-sm font-medium text-white">Pure Systems Design</p>
                  </div>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -4 }}
                 className="aspect-4/3 rounded-[20px] overflow-hidden group cursor-pointer border border-white/10 relative shadow-md transition-transform duration-500 ease-[0.16,1,0.3,1]"
               >
                  <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-[0.92] group-hover:scale-[1.03] transition-all duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-highlight mb-1">Psychology</span>
                    <p className="text-sm font-medium text-white">Cognitive Load Theory</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CourseCard({ title, instructor, category, students, rating, image, onClick }: any) {
  return (
    <Card className="flex flex-col group p-4 bg-white border border-border-subtle hover:border-accent/30 hover:-translate-y-1 hover:shadow-md transition-all duration-500 cursor-pointer rounded-[24px]" onClick={onClick}>
      <div className="aspect-4/3 rounded-[16px] overflow-hidden relative mb-5 border border-border-subtle/50">
         <img src={image} className="w-full h-full object-cover brightness-[0.92] group-hover:scale-[1.03] transition-all duration-700" />
         <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-border-subtle text-[8px] font-bold text-text-primary uppercase tracking-[0.2em] shadow-xs">
           {category}
         </div>
      </div>
      <div className="px-2 flex-1 flex flex-col justify-between text-left">
        <div>
          <h3 className="text-base font-semibold tracking-tight mb-1 group-hover:text-accent transition-colors duration-300 leading-snug text-text-primary">{title}</h3>
          <p className="text-[11px] text-text-secondary font-light italic mb-4">with {instructor}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle/60">
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[9px] text-text-secondary/80 font-bold uppercase tracking-widest leading-none">
                 <User className="w-3.5 h-3.5 text-text-secondary/50" /> {students}
              </div>
              <div className="flex items-center gap-1 text-[9px] text-highlight font-bold uppercase tracking-widest leading-none">
                 <Star className="w-3.5 h-3.5 fill-highlight/20 text-highlight" /> {rating}
              </div>
           </div>
           <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </Card>
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
