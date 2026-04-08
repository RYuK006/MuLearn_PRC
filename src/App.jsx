import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 glass-nav">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="flex items-center gap-3">
            {/* Removed the logo icon here as requested */}
            {/* Removed 'uppercase' from the span class to prevent µ transmuting into M */}
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-display tracking-widest">
              µLearn PRC
            </span>
          </div>
          
          <ul className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase">
            <li><a className="hover:text-white transition-colors" href="#hero">Home</a></li>
            <li><a className="hover:text-white transition-colors" href="#about">About</a></li>
            <li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
            <li><a className="hover:text-white transition-colors" href="#team">Team</a></li>
            <li><a className="hover:text-white transition-colors" href="#events">Events</a></li>
            <li><a className="btn-solid px-5 py-2 rounded-lg ml-4" href="#join">Join Now</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden dec-grid px-6 pt-24 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black pointer-events-none z-0"></div>
          
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div variants={fadeUp} className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 glass-card mb-6 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-white">Active at Providence College</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] uppercase tracking-tighter">
                Peer-Led<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Evolution</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                An unapologetic open community for learners, makers, and innovators. Join the kinetic network of tech enthusiasts at µLearn PRC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#join" className="btn-solid px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 uppercase tracking-wide">
                  Join Community
                </a>
                <a href="#about" className="btn-glass px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 uppercase tracking-wide">
                  Explore
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex-1 w-full relative">
              <div className="vivid-img-container glass-card p-2 transform rotate-2">
                <img className="vivid-img rounded-lg aspect-square md:aspect-auto md:h-[600px]" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cyberpunk colorful server setup" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 border-t border-white/10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-16">
              <h2 className="font-display text-3xl font-bold text-white mb-2 uppercase tracking-widest">About µLearn PRC</h2>
              <div className="w-16 h-1 bg-white mb-8"></div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p><strong className="text-white">Our Mission:</strong> To bridge the gap between academic learning and industry demands. µLearn PRC provides an environment where students break free from echo chambers.</p>
                <p><strong className="text-white">Why µLearn?</strong> Because traditional walls don't teach modern skills. We embrace mutual learning, mentorship, and unapologetic building.</p>
                <p>At the end of a μLearner's journey, they are equipped with a plethora of opportunities: High-end Jobs, Global Freelance Gigs, Innovative Research, or Launching Startups.</p>
              </div>
              <div className="vivid-img-container glass-card p-2 tilt-img -rotate-1">
                <img className="vivid-img rounded-lg h-80 w-full" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vivid liquid colored abstraction" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Selection */}
        <section id="features" className="py-24 px-6 dec-grid border-t border-white/10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Empowering Journey</h2>
              <p className="text-gray-400">Everything you need to level up.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <motion.div variants={fadeUp} className="md:col-span-8 glass-card p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity vivid-img" alt="Colorful team collaboration" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Peer Learning</h3>
                  <p className="text-gray-300 max-w-lg">Learn complex concepts through collaborative study circles and hands-on workshops led by fellow students who've mastered the craft.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="md:col-span-4 glass-card p-8 flex flex-col justify-between">
                <span className="material-symbols-outlined text-white text-5xl mb-6">school</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Mentorship</h3>
                  <p className="text-gray-400 text-sm">One-on-one guidance from seniors and alumni working in top tech firms.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="md:col-span-4 glass-card p-8 flex flex-col justify-between">
                <span className="material-symbols-outlined text-white text-5xl mb-6">interests</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Interest Groups</h3>
                  <p className="text-gray-400 text-sm">Join niche guilds for AI, Web3, Cybersecurity, or Design.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="md:col-span-8 glass-card p-8 flex flex-col md:flex-row items-center gap-8 bg-black/80">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-white text-4xl mb-4">terminal</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Real-world Projects</h3>
                  <p className="text-gray-400">Build production-ready applications that solve local campus challenges.</p>
                </div>
                <div className="flex-shrink-0 w-32 h-32 vivid-img-container rounded-full border border-white/20">
                  <img className="w-full h-full object-cover vivid-img" src="https://images.unsplash.com/photo-1614729939124-03290b3009ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Neon abstract structure" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-6 border-t border-white/10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
              <div>
                <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Core Team</h2>
                <p className="text-gray-400">The masterminds behind the PRC chapters.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {['Alex Mathew', 'Aaron', 'Sarah L.', 'James K.'].map((name, index) => (
                <div key={index} className="glass-card overflow-hidden group">
                  <div className="h-64 vivid-img-container bg-gray-900 border-b border-white/10 flex items-center justify-center">
                    <img className="w-full h-full object-cover vivid-img" src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&rand=${index}`} alt="Portrait" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-white text-xl">{name}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Lead</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-24 px-6 border-t border-white/10 dec-grid">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-4xl font-bold text-white mb-16 uppercase tracking-tighter text-center">Signature Events</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { date: "OCT 24", title: "PRC Tech Symposium", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { date: "NOV 12", title: "UI/UX Designthon", img: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { date: "DEC 05", title: "Code In The Dark", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
              ].map((event, i) => (
                <motion.div variants={fadeUp} key={i} className="glass-card overflow-hidden group p-2">
                  <div className="h-48 relative vivid-img-container rounded-t-lg">
                    <img className="vivid-img" src={event.img} alt={event.title} />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 border border-white/20">{event.date}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">Flagship conference featuring elite tech speakers in vibrant surroundings.</p>
                    <div className="flex items-center justify-between text-xs font-bold tracking-widest text-white uppercase">
                      <span>Main Hall</span>
                      <span className="material-symbols-outlined text-white">bookmark</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section id="join" className="py-32 px-6 border-t border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-50 dec-grid"></div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h2 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Enter the µVerse</h2>
            <p className="text-gray-400 text-lg mb-10">Step up and start building your future alongside top peers and mentors.</p>
            <button className="btn-solid px-12 py-5 rounded-none font-black text-xl uppercase tracking-widest border border-white">
              Apply Now
            </button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] text-gray-500 font-sans text-xs uppercase tracking-widest w-full py-16 px-8 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto mb-16">
          <div className="col-span-1 md:col-span-1">
            {/* Same here, avoiding uppercase rule to preserve µ structure */}
            <div className="text-2xl font-bold text-white mb-6 font-display">µLearn PRC</div>
            <p className="normal-case tracking-normal text-gray-400 mb-6 leading-relaxed">Empowering the next generation of technological leaders at Providence College exclusively through stark peer-to-peer excellence.</p>
          </div>
          <div className="col-span-1">
            <h5 className="text-white mb-6 font-bold">Community</h5>
            <ul className="space-y-4">
              <li><a className="hover:text-white transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-white transition-colors" href="#events">Events</a></li>
              <li><a className="hover:text-white transition-colors" href="#team">Team</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-white mb-6 font-bold">Resources</h5>
            <ul className="space-y-4">
              <li><a className="hover:text-white transition-colors" href="#">Learning Path</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Open Source</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Mentors</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-white mb-6 font-bold">University</h5>
            <ul className="space-y-4">
              <li><a className="hover:text-white transition-colors" href="#">PRC Home</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Admissions</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <span>© 2024 µLearn PRC - Providence College.</span>
          <span className="tracking-[0.3em] font-black text-white mix-blend-difference">NEO-BRUTALISM</span>
        </div>
      </footer>
    </>
  );
}

export default App;
