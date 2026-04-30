import React from 'react';
import { motion } from 'framer-motion';
import Scribble from '../components/Scribble';
import { Link } from 'react-router-dom';

const ManifestoPage = () => {
  const principles = [
    {
      title: "Satirical Tone, Savage Results",
      desc: "We might joke about corporate culture, but we don't joke about your ROI. Our methods are fundamental, our execution is ruthless."
    },
    {
      title: "Strip to the Core",
      desc: "Branding isn't about adding layers; it's about removing them. We find the savage truth of your brand and scream it from the rooftops."
    },
    {
      title: "Founder First",
      desc: "We work with founders who have skin in the game. If you're a corporate mid-manager looking to check a box, we aren't for you."
    },
    {
      title: "Speed is the Only Moat",
      desc: "In the modern market, the big don't eat the small—the fast eat the slow. We operate at a velocity that makes traditional agencies look like statues."
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-6xl md:text-9xl mb-8 font-bold leading-none">
              THE <span className="text-red relative inline-block">
                MANIFESTO
                <Scribble type="underline" className="absolute -bottom-4 left-0 w-full" />
              </span>
            </h1>
          </motion.div>
          <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium italic mt-12">
            "Safe is the enemy of remarkable. Remarkable is the enemy of forgettable."
          </p>
        </div>

        <div className="prose prose-xl dark:prose-invert max-w-none space-y-16">
          <section className="glass-card p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red"></div>
            <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">I. THE REBELLION AGAINST SAFE</h2>
            <p className="text-xl leading-relaxed text-[var(--text-muted)]">
              Traditional agencies are built to play it safe. They protect their billable hours by avoiding risk. We do the opposite. We believe that if you aren't polarizing some people, you aren't attracting anyone. The Bad Company exists to strip away the corporate fluff and rebuild your brand with savage precision.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10"
              >
                <h3 className="text-2xl font-bold mb-4 text-red">{p.title}</h3>
                <p className="text-lg text-[var(--text-muted)]">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <section className="text-center py-20 relative">
             <Scribble type="circle" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ width: 400, height: 400 }} />
             <h2 className="text-5xl md:text-7xl mb-12 relative z-10 font-bold">WE SET <span className="text-red">FIRES.</span></h2>
             <p className="text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-16 relative z-10">
                We burn down the safe, the boring, and the predictable. We build things that can't be ignored. If you're ready for the heat, let's talk.
             </p>
             <Link to="/audit" className="btn btn-primary text-2xl px-16 py-6 relative z-10">
                JOIN THE REBELLION
             </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;
