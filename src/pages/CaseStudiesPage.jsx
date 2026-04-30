import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Target } from 'lucide-react';
import Scribble from '../components/Scribble';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const cases = [
    {
      brand: "Aetheris",
      tag: "E-COMMERCE",
      metric: "5x ROAS",
      title: "Dominating the Minimalist Watch Market",
      desc: "How we took a boutique watch brand from zero to ₹2Cr monthly revenue in just 90 days using aggressive short-form video and psychological triggers.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
      stats: [
        { label: "Revenue Growth", value: "850%" },
        { label: "New Customers", value: "25k+" },
        { label: "Cost Per Acquisition", value: "₹450" }
      ]
    },
    {
      brand: "Lumina",
      tag: "SAAS",
      metric: "₹50L→₹2.4Cr",
      title: "Engineering Viral Growth for B2B SaaS",
      desc: "Optimizing the entire user journey from first touch to referral. We built a product-led growth engine that turned every new user into a customer acquisition tool.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      stats: [
        { label: "User Base", value: "100k+" },
        { label: "Churn Rate", value: "-15%" },
        { label: "Viral K-Factor", value: "1.2" }
      ]
    },
    {
      brand: "Zenith",
      tag: "TECH",
      metric: "CAC -62%",
      title: "Winning the Content Warfare",
      desc: "Saturating the market with high-authority content that positioned Zenith as the only viable option in the tech infrastructure space.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      stats: [
        { label: "Market Share", value: "12% → 28%" },
        { label: "Lead Quality", value: "+200%" },
        { label: "Organic Reach", value: "2M/mo" }
      ]
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
            THE <span className="text-red relative inline-block">
              RECEIPTS
              <Scribble type="underline" className="absolute -bottom-4 left-0 w-full" />
            </span>
          </motion.h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            We don't talk about 'potential'. We talk about profit. Here's how we set the market on fire for our partners.
          </p>
        </div>

        <div className="space-y-32">
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative group overflow-hidden rounded-3xl">
                  <img src={study.image} alt={study.brand} className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="btn btn-primary">VIEW FULL CASE STUDY</button>
                  </div>
                  <div className="absolute top-6 left-6 bg-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest">
                    {study.metric}
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div>
                  <span className="text-red font-bold tracking-widest text-sm">{study.tag}</span>
                  <h2 className="text-4xl md:text-5xl mt-4 font-bold">{study.brand}</h2>
                </div>
                <h3 className="text-2xl font-medium text-slate-700 dark:text-slate-300 italic">"{study.title}"</h3>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                  {study.desc}
                </p>
                <div className="grid grid-cols-3 gap-4 py-8 border-y border-[var(--glass-border)]">
                  {study.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl md:text-3xl font-bold text-red">{stat.value}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline w-full md:w-auto justify-center">
                  READ CASE STUDY <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
            <h2 className="text-3xl md:text-5xl mb-12">WANT YOUR BRAND TO BE THE <span className="text-red">NEXT STORY?</span></h2>
            <Link to="/audit" className="btn btn-primary text-xl px-12 py-5">
                APPLY FOR GROWTH AUDIT
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
