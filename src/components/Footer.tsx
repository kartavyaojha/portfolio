import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                Kartavya Ojha
              </div>
              <p className="text-slate-400">Security Engineer & Cybersecurity Researcher</p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center space-x-2">
              <span>&copy; 2025 Kartavya Ojha. Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>and lots of coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;