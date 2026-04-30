import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="py-20 px-6 border-t border-[var(--glass-border)] transition-colors">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="w-32 h-16 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/tbc-logo.png" alt="Logo" className="w-full h-full object-contain" />
          </Link>
        </div>
        <p className="text-[var(--text-muted)] max-w-sm mb-8 text-lg transition-colors">
          We are the anti-corporate growth studio. We don't follow trends. We set fires.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-3 glass-card rounded-full hover:bg-red hover:text-white transition-all"><Linkedin size={20} /></a>
          <a href="#" className="p-3 glass-card rounded-full hover:bg-red hover:text-white transition-all"><Twitter size={20} /></a>
          <a href="#" className="p-3 glass-card rounded-full hover:bg-red hover:text-white transition-all"><Instagram size={20} /></a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-8 tracking-widest text-xs">COMPANY</h4>
        <ul className="space-y-4 text-[var(--text-muted)]">
          <li><Link to="/about" className="hover:text-red transition-colors">About Us</Link></li>
          <li><Link to="/careers" className="hover:text-red transition-colors">Careers</Link></li>
          <li><Link to="/manifesto" className="hover:text-red transition-colors">Manifesto</Link></li>
          <li><Link to="/audit" className="hover:text-red transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 tracking-widest text-xs">RESOURCES</h4>
        <ul className="space-y-4 text-[var(--text-muted)]">
          <li><Link to="/work" className="hover:text-red transition-colors">Case Studies</Link></li>
          <li><Link to="/blog" className="hover:text-red transition-colors">Growth Blog</Link></li>
          <li><Link to="/audit" className="hover:text-red transition-colors">Free Audit</Link></li>
          <li><Link to="/tools" className="hover:text-red transition-colors">Tools</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[var(--text-muted)] gap-6 transition-colors border-t border-[var(--glass-border)] pt-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <p>© 2026 THE BAD COMPANY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-red transition-colors">PRIVACY POLICY</Link>
          <Link to="/terms" className="hover:text-red transition-colors">TERMS OF SERVICE</Link>
        </div>
      </div>
      
      {/* Credit Section */}
      <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/10 dark:border-white/30 bg-white/5 dark:bg-white/15 shadow-sm hover:shadow-md hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300">
        <a
          href="https://fabulousmedia.in"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded p-0.5 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="FabulousMedia"
        >
          <img
            src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
            alt="FabulousMedia"
            className="h-3 w-auto"
            loading="lazy"
            width="80"
            height="12"
          />
        </a>
        <div className="h-3 w-px bg-white/20 dark:bg-white/30 transition-colors duration-300"></div>
        <a
          href="https://gocommercially.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded p-0.5 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="GoCommercially"
        >
          <img
            src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
            alt="GoCommercially"
            className="h-3 w-auto"
            loading="lazy"
            width="80"
            height="12"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
