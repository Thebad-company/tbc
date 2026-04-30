import React from 'react';
import { motion } from 'framer-motion';
import { Link, useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  X,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Target,
  BarChart3
} from 'lucide-react';
import Scribble from '../components/Scribble';
import ParticleSwarm from '../components/ParticleSwarm';

const Hero = () => {
  const { darkMode } = useOutletContext();
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center text-center">
      {/* 3D Particle Swarm Background */}
      <ParticleSwarm darkMode={darkMode} />
      
      <div className="radial-glow relative z-10"></div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full mb-8 transition-colors"
    >
      <span className="status-dot"></span>
      <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">We set fires 🔥</span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-8xl max-w-5xl mb-8 leading-[0.9] relative z-10"
    >
      We Make Brands <br />
      <span className="text-red relative inline-block">
        Impossible
        <Scribble type="underline" className="absolute -bottom-4 left-0 w-full" />
      </span> to Ignore
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative z-10 text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 transition-colors"
    >
      The <span className="strikethrough">agency</span> growth partner for founders who hate corporate fluff. We don't follow trends. We burn them down and build empires.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative z-10 flex flex-col md:flex-row gap-4"
    >
      <Link to="/audit" className="btn btn-primary text-lg px-8 py-4 glitch-hover flex items-center gap-2">
        BOOK FREE GROWTH AUDIT <ArrowRight size={20} />
      </Link>
      <Link to="/manifesto" className="btn btn-outline text-lg px-8 py-4">
        VIEW OUR MANIFESTO
      </Link>
    </motion.div>

    </section>
  );
};

const SocialProof = () => {
  const brands = ["COCA COLA", "NIKE", "TESLA", "APPLE", "REDBULL", "NETFLIX", "SPOTIFY", "AIRBNB"];
  return (
    <section className="py-20 bg-[var(--bg-color)] relative transition-colors">
      <div className="marquee-container border-y border-[var(--glass-border)]">
        <div className="marquee-content">
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="mx-12 text-3xl font-bold opacity-20 hover:opacity-100 transition-opacity cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "VIEWS GENERATED", value: "10M+" },
          { label: "REVENUE SCALE", value: "₹50Cr+" },
          { label: "CAMPAIGNS", value: "100+" },
          { label: "AVG ROAS", value: "5.2x" },
        ].map((stat, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="glass-card p-8 text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-red mb-2">{stat.value}</div>
            <div className="text-xs font-bold text-slate-400 tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl mb-6">
        WHAT WE DO <br />
        <span className="text-red relative inline-block">
          PROPERLY
          <Scribble type="underline" className="absolute -bottom-2 left-0 w-full" style={{ width: '100%' }} />
        </span>
      </h2>
      <p className="text-[var(--text-muted)] transition-colors">Six ways we help you dominate your market.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "Direct Response Ads", desc: "Ads that actually sell, not just look pretty. We focus on conversion, not ego.", icon: <Zap size={32} /> },
        { title: "Virality Engines", desc: "Organic growth strategy that makes your brand the talk of the town.", icon: <Users size={32} /> },
        { title: "Retention Loops", desc: "Turn one-time buyers into lifelong cult followers of your brand.", icon: <Target size={32} /> },
        { title: "Funnel Engineering", desc: "High-converting landing pages that print money while you sleep.", icon: <TrendingUp size={32} /> },
        { title: "Content Warfare", desc: "Aggressive content production that saturates your market presence.", icon: <Shield size={32} /> },
        { title: "Growth Analytics", desc: "Deep dive data that reveals where your money is actually being made.", icon: <BarChart3 size={32} /> },
      ].map((service, i) => (
        <div key={i} className="glass-card p-10 group relative overflow-hidden hover-lift">
          <div className="absolute top-0 left-0 w-1 h-full bg-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-[var(--text-muted)] font-bold mb-4 opacity-50">0{i + 1}/06</div>
          <div className="text-red mb-6 group-hover:scale-110 transition-transform inline-block">
            {service.icon}
          </div>
          <h3 className="text-2xl mb-4">{service.title}</h3>
          <p className="text-slate-600">{service.desc}</p>
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap size={120} />
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-16">
      <Link to="/services" className="btn btn-outline">EXPLORE ALL SERVICES <ArrowRight size={20} className="ml-2" /></Link>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="work" className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl mb-4">
            WE HAVE <br />
            <span className="text-red relative inline-block">
              RECEIPTS.
              <Scribble type="underline" className="absolute -bottom-2 left-0 w-full" />
            </span>
          </h2>
          <p className="text-slate-400">Real numbers for real founders.</p>
        </div>
        <Link to="/work" className="btn btn-primary">SEE ALL CASE STUDIES</Link>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { brand: "Aetheris", tag: "E-COMMERCE", metric: "5x ROAS", desc: "Scaled a minimalist watch brand from zero to ₹2Cr monthly revenue in 90 days." },
          { brand: "Lumina", tag: "SAAS", metric: "₹50L→₹2.4Cr", desc: "Optimized user onboarding and referral loops to achieve hyper-growth." },
          { brand: "Zenith", tag: "TECH", metric: "CAC -62%", desc: "Slashed customer acquisition costs through aggressive content warfare strategy." },
        ].map((study, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-red/50 transition-colors">
            <span className="text-xs font-bold tracking-widest text-red mb-4 block">{study.tag}</span>
            <h3 className="text-3xl mb-4">{study.brand}</h3>
            <div className="text-5xl font-bold text-red mb-6">{study.metric}</div>
            <p className="text-slate-400 mb-8">{study.desc}</p>
            <Link to="/work" className="flex items-center gap-2 text-white font-bold group-hover:text-red transition-colors">
              VIEW CASE STUDY <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-32 px-6 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12">
      <div className="glass-card p-12 border-[var(--glass-border)]">
        <h3 className="text-2xl mb-8 flex items-center gap-2">
          <span className="strikethrough text-[var(--text-muted)]">What we don't do</span>
        </h3>
        <ul className="space-y-6">
          {["Boring weekly status calls", "Corporate jargon & fluff", "Charging for 'brand awareness'", "Junior account managers", "Following the safe path"].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-[var(--text-muted)] line-through transition-colors">
              <X className="text-red" size={20} /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="glass-card p-12 border-red/30 bg-red/[0.02]">
        <h3 className="text-2xl mb-8 font-bold">What we live for</h3>
        <ul className="space-y-6">
          {["Aggressive scaling", "Unfair competitive advantage", "Direct-to-bank results", "Founder-to-founder contact", "Disrupting the status quo"].map((item, i) => (
            <li key={i} className="flex items-center gap-4 font-bold">
              <Check className="text-green-500" size={20} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-32 px-6 bg-[var(--bg-color)] overflow-hidden transition-colors">
    <div className="max-w-7xl mx-auto text-center mb-24">
      <h2 className="text-4xl md:text-6xl mb-6">OUR <span className="text-red">BATTLE PLAN</span></h2>
    </div>

    <div className="max-w-5xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--glass-border)] -translate-y-1/2 hidden md:block transition-colors">
        <div className="h-full bg-gradient-to-r from-red to-navy-900 w-full opacity-30"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-12 relative z-10">
        {[
          { title: "Audit", desc: "We tear your current strategy apart to find the leaks." },
          { title: "Strategy", desc: "We build a custom war plan to dominate your niche." },
          { title: "Execute", desc: "We deploy and iterate at lightning speed." },
          { title: "Scale", desc: "We pour gasoline on what's working." },
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[var(--card-bg)] border-4 border-[var(--glass-border)] flex items-center justify-center text-2xl font-bold mb-6 shadow-xl relative transition-colors">
              <span className="text-red">0{i + 1}</span>
            </div>
            <h3 className="text-xl mb-2">{step.title}</h3>
            <p className="text-[var(--text-muted)] text-sm transition-colors">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-[var(--bg-color)] transition-colors">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl mb-20">HEAR FROM THE <span className="text-red">REBELS</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Siddharth J.", role: "Founder, Aetheris", text: "Most agencies are afraid to take risks. Bad Company is the opposite. They pushed us further than we thought possible." },
          { name: "Ananya M.", role: "CEO, Lumina", text: "They don't just run ads. They understand the psychology of growth. 5x ROI in 3 months speaks for itself." },
          { name: "Vikram R.", role: "Founder, Zenith", text: "If you want a safe, corporate agency, go elsewhere. If you want to dominate, talk to these guys." },
        ].map((t, i) => (
          <div key={i} className="glass-card p-10">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#dc2626" color="#dc2626" />)}
            </div>
            <p className="text-lg italic mb-8">"{t.text}"</p>
            <div>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-[var(--text-muted)] transition-colors">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-32 px-6 bg-[var(--bg-color)] relative overflow-hidden transition-colors">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl mb-10 leading-tight">
          WE'RE NOT AN <span className="strikethrough">AGENCY.</span><br />
          WE'RE A <span className="text-red">GROWTH PARTNER.</span>
        </h2>
        <p className="text-2xl md:text-3xl text-[var(--text-muted)] font-medium transition-colors">
          For brands that don't just want to participate, but want to <span className="font-bold text-[var(--text-color)] underline decoration-red decoration-4 transition-colors">dominate.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl mb-6">INVEST IN <span className="text-red">DOMINATION</span></h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="glass-card p-10 border-[var(--glass-border)] opacity-80">
        <h3 className="text-xl mb-2">STARTER</h3>
        <div className="text-4xl font-bold mb-6">₹1.5L<span className="text-lg font-normal text-[var(--text-muted)]">/mo</span></div>
        <ul className="space-y-4 mb-10">
          {["Ads Management", "Weekly Reports", "Email Support", "1 Funnel Build"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm transition-colors"><Check size={16} className="text-red" /> {item}</li>
          ))}
        </ul>
        <button className="btn btn-outline w-full justify-center">GET STARTED</button>
      </div>

      <div className="glass-card p-12 border-red shadow-2xl relative z-10 md:scale-105">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red text-white px-4 py-1 rounded-full text-xs font-bold">MOST PICKED</div>
        <h3 className="text-xl mb-2 text-red">SCALE</h3>
        <div className="text-4xl font-bold mb-6">₹3.5L<span className="text-lg font-normal text-[var(--text-muted)]">/mo</span></div>
        <ul className="space-y-4 mb-10">
          {["Full Content Warfare", "Daily Optimization", "Priority Support", "Unlimited Funnels", "CRM Integration"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-bold transition-colors"><Check size={16} className="text-red" /> {item}</li>
          ))}
        </ul>
        <button className="btn btn-primary w-full justify-center">GO AGGRESSIVE</button>
      </div>

      <div className="glass-card p-10 border-[var(--glass-border)] opacity-80">
        <h3 className="text-xl mb-2">CUSTOM</h3>
        <div className="text-4xl font-bold mb-6">POA</div>
        <ul className="space-y-4 mb-10">
          {["Full Growth Studio", "Equity Partnerships", "M&A Strategy", "Dedicated Team"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm transition-colors"><Check size={16} className="text-red" /> {item}</li>
          ))}
        </ul>
        <button className="btn btn-outline w-full justify-center">TALK TO FOUNDER</button>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-6">
    <div className="max-w-5xl mx-auto glass-card p-16 md:p-24 text-center relative overflow-hidden bg-navy-900 text-white">
      <div className="radial-glow opacity-30"></div>

      <h2 className="text-4xl md:text-7xl mb-8 relative z-10">READY TO <br /><span className="text-red">SET FIRES?</span></h2>
      <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto relative z-10">Stop playing it safe. Your competitors are hoping you stay small. Let's make them regret it.</p>

      <Link to="/audit" className="btn btn-primary text-xl px-12 py-5 relative z-10 inline-block">
        BOOK FREE GROWTH AUDIT
      </Link>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <CaseStudies />
      <WhyUs />
      <Process />
      <Testimonials />
      <About />
      <Pricing />
      <FinalCTA />
    </>
  );
};

export default Home;
