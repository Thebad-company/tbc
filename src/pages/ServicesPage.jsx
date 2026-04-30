import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Target, TrendingUp, Shield, BarChart3, ArrowRight, Check } from 'lucide-react';
import Scribble from '../components/Scribble';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    { 
      title: "Direct Response Ads", 
      desc: "We don't do 'brand awareness' that doesn't pay bills. We build aggressive direct-response campaigns that turn clicks into cash. Facebook, Google, TikTok—we dominate them all.", 
      icon: <Zap size={48} />,
      features: ["Psychological Triggers", "Aggressive Media Buying", "Creative Testing Framework", "Daily Optimization"]
    },
    { 
      title: "Virality Engines", 
      desc: "Stop hoping to go viral. We engineer it. We create content loops and social triggers that make your brand impossible to ignore in the digital noise.", 
      icon: <Users size={48} />,
      features: ["Short-form Video Mastery", "Community Engineering", "Influencer Warfare", "Trend Hijacking"]
    },
    { 
      title: "Funnel Engineering", 
      desc: "A pretty website is useless if it doesn't convert. We build high-velocity funnels designed for one thing: getting the user to say YES.", 
      icon: <TrendingUp size={48} />,
      features: ["LPs that Print", "A/B Testing", "Checkout Optimization", "Speed & Performance"]
    },
    { 
      title: "Retention Loops", 
      desc: "The real money is in the second purchase. We build automated systems that turn one-time buyers into loyal brand advocates.", 
      icon: <Target size={48} />,
      features: ["Email/SMS Warfare", "Loyalty Systems", "LTV Maximization", "Customer Psychology"]
    },
    { 
      title: "Content Warfare", 
      desc: "Saturate the market. We produce high-volume, high-impact content that builds authority and keeps you top-of-mind 24/7.", 
      icon: <Shield size={48} />,
      features: ["Bulk Production", "Platform Specific Content", "Authority Building", "Omnipresence"]
    },
    { 
      title: "Growth Analytics", 
      desc: "Stop guessing. We provide deep-dive analytics that show you exactly where every rupee is going and which campaigns are driving real profit.", 
      icon: <BarChart3 size={48} />,
      features: ["Real-time Dashboards", "Attribution Modeling", "Profit Tracking", "Predictive Scaling"]
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl mb-8"
          >
            OUR <span className="text-red relative inline-block">
              ARSENAL
              <Scribble type="underline" className="absolute -bottom-4 left-0 w-full" />
            </span>
          </motion.h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            We don't offer services. We offer weapons for market domination. Pick your poison.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 relative overflow-hidden group"
            >
              <div className="text-red mb-8 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-3xl mb-6 font-bold">{service.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                    <Check size={16} className="text-red" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red/5 -translate-y-1/2 translate-x-1/2 blur-3xl rounded-full"></div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-16 text-center bg-red/[0.02] border-red/20">
            <h2 className="text-4xl md:text-6xl mb-8">NEED A <span className="text-red">CUSTOM WAR PLAN?</span></h2>
            <p className="text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
                Sometimes the standard arsenal isn't enough. We partner with select brands for full-scale growth equity and long-term domination.
            </p>
            <Link to="/audit" className="btn btn-primary text-xl px-12 py-5">
                LET'S TALK STRATEGY <ArrowRight size={20} className="ml-2" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
