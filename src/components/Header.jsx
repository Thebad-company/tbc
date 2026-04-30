import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-6 inset-x-0 mx-auto z-50 w-[95%] max-w-6xl px-4">
      <nav className="glass-card flex items-center justify-between px-6 py-2 rounded-full border border-white/10 shadow-2xl relative">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-24 md:w-32 h-12 md:h-14 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/tbc-logo.png" alt="The Bad Company" className="w-full h-full object-contain p-2" />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-bold text-xs uppercase tracking-widest">
          <Link to="/services" className="hover:text-red transition-colors">Services</Link>
          <Link to="/work" className="hover:text-red transition-colors">Our Work</Link>
          <Link to="/manifesto" className="hover:text-red transition-colors">Manifesto</Link>
          {isHome && <a href="#pricing" className="hover:text-red transition-colors">Pricing</a>}
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>
          
          <Link to="/audit" className="hidden sm:inline-flex btn btn-primary text-xs font-bold px-6 py-2.5 tracking-tighter">
            JOIN REBELLION
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[var(--text-color)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 glass-card p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Services</Link>
            <Link to="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Our Work</Link>
            <Link to="/manifesto" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Manifesto</Link>
            {isHome && <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Pricing</a>}
            <Link to="/audit" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary w-full justify-center py-4">JOIN REBELLION</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
