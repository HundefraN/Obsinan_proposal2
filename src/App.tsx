import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Coffee, QrCode, Smartphone, Zap, TrendingUp, CheckCircle2, ArrowRight, ChevronDown, Store, Globe, EyeOff, Sparkles } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[var(--color-obs-dark)] text-[var(--color-obs-text)] overflow-hidden font-sans selection:bg-[var(--color-obs-gold)] selection:text-black">
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-obs-gold)]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1a1510] blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        {/* Navigation / Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center glass-panel border-b-0 border-x-0 border-t-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--color-obs-gold)] flex items-center justify-center text-black">
              <Coffee size={18} strokeWidth={2.5} />
            </div>
            <span className="font-serif text-xl tracking-widest uppercase text-[var(--color-obs-gold-light)]">Obsinan</span>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-obs-muted)] hidden md:block">
            Confidential Proposal
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-32">
          <motion.div style={{ y: backgroundY, opacity }} className="max-w-5xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-obs-gold)]/30 bg-[var(--color-obs-gold)]/10 text-[var(--color-obs-gold)] text-xs font-medium tracking-wider uppercase mb-8">
              <Sparkles size={14} />
              <span>Digital Transformation Initiative</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
              Establishing Shashemene’s First <br className="hidden md:block" />
              <span className="text-gradient-gold italic pr-4">Fully-Integrated</span> Cafe Empire.
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16 border-t border-[var(--color-obs-surface-light)] pt-12">
              <div>
                <p className="text-[var(--color-obs-muted)] text-sm uppercase tracking-widest mb-2">Prepared For</p>
                <p className="text-xl font-serif text-[var(--color-obs-gold-light)]">Frehiwot</p>
                <p className="text-sm text-[var(--color-obs-muted)]">Owner, Obsinan Cafe</p>
              </div>
              <div>
                <p className="text-[var(--color-obs-muted)] text-sm uppercase tracking-widest mb-2">Prepared By</p>
                <p className="text-xl font-serif text-[var(--color-obs-gold-light)]">Hundefra Nassir</p>
                <p className="text-sm text-[var(--color-obs-muted)]">Founder & CEO, Eben Dev Solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-obs-muted)]"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* The Context & Problem */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-obs-surface)]/50">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl mb-8 text-[var(--color-obs-gold-light)]">The "Growth Gap"</h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--color-obs-text)]/80 mb-12 font-light">
                Dear Frehiwot, <br/><br/>
                As a long-time patron of Obsinan, I have witnessed your growth with great respect. However, as you scale across multiple branches in Shashemene and beyond, you face a critical challenge: the friction of maintaining consistency in a fragmented, manual system.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.3} className="glass-panel p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                  <Store size={24} />
                </div>
                <h3 className="text-lg font-medium mb-3">Physical Friction</h3>
                <p className="text-[var(--color-obs-muted)] text-sm leading-relaxed">
                  Currently, an update to your "Special Pizza" or a price adjustment requires physical labor and printing costs at every single location.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="glass-panel p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
                  <EyeOff size={24} />
                </div>
                <h3 className="text-lg font-medium mb-3">The Profit Leaks</h3>
                <p className="text-[var(--color-obs-muted)] text-sm leading-relaxed">
                  When an item like Shawarma is unavailable, the customer only finds out after the waiter arrives. These diminish the premium experience you’ve built.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-32 px-6 md:px-12 lg:px-24 relative">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-6xl mb-6">One Digital Pulse <br/><span className="text-gradient-gold italic">for Every Branch</span></h2>
                <p className="text-[var(--color-obs-muted)] max-w-2xl mx-auto text-lg">
                  I have engineered a Unified QR Ecosystem designed to provide you with Total Operational Command over your menus.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={28} />,
                  title: "Centralized Synchronization",
                  desc: "Update a price or a seasonal dish once on your smartphone, and witness it go live across every branch instantly. No printing. No delays. No errors."
                },
                {
                  icon: <Zap size={28} />,
                  title: "Intelligent Inventory Toggles",
                  desc: "Each branch manager can 'hide' out-of-stock items with a single tap. This eliminates customer disappointment and streamlines the kitchen workflow."
                },
                {
                  icon: <QrCode size={28} />,
                  title: "The 'Elite Brand' Aesthetic",
                  desc: "By replacing paper with a pixel-perfect, ultra-responsive digital interface, we instill 'Big Brand' authority. Customers experience the same high-end identity everywhere."
                }
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-obs-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative h-full glass-panel p-10 rounded-3xl border border-[var(--color-obs-surface-light)] hover:border-[var(--color-obs-gold)]/30 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-obs-surface-light)] flex items-center justify-center text-[var(--color-obs-gold)] mb-8 shadow-inner">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-serif text-[var(--color-obs-gold-light)] mb-4">{feature.title}</h3>
                    <p className="text-[var(--color-obs-muted)] leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-obs-surface)]/80 border-y border-[var(--color-obs-surface-light)]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn>
                  <h2 className="font-serif text-3xl md:text-5xl mb-8">The Competitive <br/><span className="text-gradient-gold italic">Advantage</span></h2>
                </FadeIn>
                
                <div className="space-y-10">
                  <FadeIn delay={0.2}>
                    <div className="flex gap-6">
                      <div className="mt-1">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-obs-gold)]/20 flex items-center justify-center text-[var(--color-obs-gold)]">
                          <TrendingUp size={16} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2 text-[var(--color-obs-text)]">The "Wait-Less" Effect</h4>
                        <p className="text-[var(--color-obs-muted)] leading-relaxed font-light">
                          In a high-traffic environment, your staff is often overextended. A QR-enabled table ensures the customer is "shopping" your menu the moment they sit down, increasing average order value and reducing perceived wait times.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="flex gap-6">
                      <div className="mt-1">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-obs-gold)]/20 flex items-center justify-center text-[var(--color-obs-gold)]">
                          <Smartphone size={16} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2 text-[var(--color-obs-text)]">Room for Future Expansion</h4>
                        <p className="text-[var(--color-obs-muted)] leading-relaxed font-light">
                          While our immediate focus is perfecting your digital menu ecosystem, this is just the beginning. We can build a comprehensive, multi-branch management system tailored to Obsinan, allowing you to monitor your entire network directly from your phone.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

              <FadeIn delay={0.4} className="relative hidden md:block">
                {/* Abstract UI Representation */}
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-[var(--color-obs-gold)]/20 p-6 flex flex-col shadow-2xl shadow-black/50">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-obs-surface-light)]" />
                    <div className="w-24 h-3 rounded-full bg-[var(--color-obs-surface-light)]" />
                  </div>
                  <div className="w-3/4 h-8 rounded-lg bg-gradient-to-r from-[var(--color-obs-gold)]/40 to-transparent mb-6" />
                  <div className="space-y-4 flex-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex gap-4 items-center p-4 rounded-xl bg-[var(--color-obs-surface-light)]/50">
                        <div className="w-16 h-16 rounded-lg bg-[var(--color-obs-surface)]" />
                        <div className="flex-1 space-y-2">
                          <div className="w-full h-3 rounded-full bg-[var(--color-obs-surface)]" />
                          <div className="w-1/2 h-3 rounded-full bg-[var(--color-obs-surface)]" />
                        </div>
                        <div className="w-8 h-4 rounded-full bg-[var(--color-obs-gold)]/30" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Floating Notification */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] p-4 rounded-2xl bg-[var(--color-obs-gold)] text-black shadow-lg flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-medium">Menu synchronized across 4 branches</span>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Implementation & Closing */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl mb-8">Seamless <span className="text-gradient-gold italic">Implementation</span></h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--color-obs-text)]/80 mb-12 font-light">
                I know your time is highly valuable, especially while you are traveling. While you are away in Addis Ababa, I will personally handle the entire setup process.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--color-obs-text)]/80 mb-16 font-light">
                I will coordinate directly with your branch supervisors for any minor details, ensuring this project requires absolutely zero effort on your end. You can focus entirely on your trip, and the completely finished digital ecosystem will be waiting for you upon your return.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="inline-block text-left glass-panel p-8 md:p-12 rounded-3xl border border-[var(--color-obs-gold)]/20">
              <p className="text-[var(--color-obs-muted)] mb-6 italic">Best regards,</p>
              <h3 className="text-3xl font-serif text-[var(--color-obs-gold-light)] mb-2">Hundefra Nassir</h3>
              <p className="text-sm tracking-widest uppercase text-[var(--color-obs-muted)] mb-8">Senior Full-Stack Developer | CEO</p>
              
              <a 
                href="https://hundefran.github.io/Eben-Dev-solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 pt-8 border-t border-[var(--color-obs-surface-light)] group cursor-pointer inline-flex"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-obs-gold)]/10 flex items-center justify-center text-[var(--color-obs-gold)] group-hover:bg-[var(--color-obs-gold)] group-hover:text-black transition-colors duration-300">
                  <Zap size={20} />
                </div>
                <span className="font-medium tracking-wide group-hover:text-[var(--color-obs-gold-light)] transition-colors duration-300">Eben Dev Solutions</span>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-[var(--color-obs-surface-light)] text-[var(--color-obs-muted)] text-xs uppercase tracking-widest">
          <p>© 2026 <a href="https://hundefran.github.io/Eben-Dev-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-obs-gold-light)] transition-colors duration-300">Eben Dev Solutions</a>. Confidential Proposal for Obsinan Cafe.</p>
        </footer>
      </div>
    </div>
  );
}
