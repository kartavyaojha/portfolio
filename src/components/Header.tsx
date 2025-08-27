import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, GraduationCap, Briefcase, Award, FileText, Image, Code, User, FileUp as FileUser } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/education', label: 'Education', icon: GraduationCap },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/awards', label: 'Awards & Involvements', icon: Award },
    { path: '/publications', label: 'Publications', icon: FileText },
    { path: '/media', label: 'Media', icon: Image },
    { path: '/projects', label: 'Projects', icon: Code },
    { path: '/contact', label: 'Contact', icon: FileUser },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          {/* Horizontal Navigation - Pill Shape */}
          <nav className="flex bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-full px-3 py-3 shadow-2xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;