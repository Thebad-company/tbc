import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import Scribble from '../components/Scribble';

const ContactPage = () => {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl mb-8 font-bold leading-[0.9]"
          >
            LET'S <span className="text-red relative inline-block">
              DOMINATE.
              <Scribble type="underline" className="absolute -bottom-4 left-0 w-full" />
            </span>
          </motion.h1>
          <p className="text-2xl text-[var(--text-muted)] mb-12 max-w-lg">
            We only take on 3 new partners a month. We don't pitch. We audit. If we can't double your growth, we won't take your money.
          </p>

          <div className="space-y-8">
            <h3 className="text-xl font-bold uppercase tracking-widest text-red">What happens next?</h3>
            {[
              "Deep-dive audit of your current funnels.",
              "Identification of high-leverage growth leaks.",
              "Custom 90-day domination roadmap.",
              "Direct access to our founding team."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 md:p-16 border-red/30"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Full Name</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-red outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Company Email</label>
                <input type="email" className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-red outline-none transition-all" placeholder="john@company.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-50">Website URL</label>
              <input type="url" className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-red outline-none transition-all" placeholder="https://yourbrand.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-50">Monthly Revenue (Range)</label>
              <select className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-red outline-none transition-all appearance-none cursor-pointer">
                <option>₹5L - ₹10L</option>
                <option>₹10L - ₹50L</option>
                <option>₹50L - ₹1Cr</option>
                <option>₹1Cr+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-50">What's your biggest bottleneck?</label>
              <textarea className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 h-32 focus:ring-2 focus:ring-red outline-none transition-all resize-none" placeholder="Be honest. We won't judge."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full py-5 text-xl font-bold uppercase tracking-widest group">
              SUBMIT AUDIT REQUEST <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-center text-xs text-[var(--text-muted)] mt-6">
              By submitting, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
