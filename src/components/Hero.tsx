import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "a Cybersecurity Researcher",
    "an Ethical Hacker",
    "a SOC Analyst",
    "a Mentor & Learner"
  ];

  // Typewriter effect
  useEffect(() => {
    const current = roles[currentRole];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + current.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentRole, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 bg-[#0a0f1c] text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-slate-600/50 shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEGqshBmY9ENQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719171097113?e=1759363200&v=beta&t=LkWAWoX4pVm36wq5hS-Iwtrd9axuI0EGxCqFyCCRFZM"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/kartavya-ojha-564726314"
              className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="text-slate-300 hover:text-white" size={24} />
            </a>
            <a
              href="https://github.com/kartavyaojha"
              className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github className="text-slate-300 hover:text-white" size={24} />
            </a>
            <a
              href="https://defencelogic.wordpress.com/"
              className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-6 h-6 bg-slate-300 hover:bg-white rounded-full"></div>
            </a>
            <a
              href="mailto:kartavya9977@gmail.com"
              className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="text-slate-300 hover:text-white" size={24} />
            </a>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-[#00FF00]">Kartavya</span> Ojha
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl text-[#00FF00] mb-8 font-light h-8">
            <span className="inline-block">{displayedText}|</span>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8 text-left">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I’m a cybersecurity professional passionate about{' '}
              <span className="text-[#00FF00]">ethical hacking, SOC operations, and system defense</span>.
              I previously served as{' '}
              <span className="text-[#00FF00]">Technical Projects & Outreach Lead at ACS</span>
              and completed an internship with{' '}
              <span className="text-[#00FF00]">Albus Security</span>,
              gaining hands-on experience in security tools, penetration testing, and team mentorship.
            </p>

            <p className="text-lg text-[#00FF00] font-medium mb-8 leading-relaxed">
              Currently focusing on building SOC simulations, mastering Splunk, and advancing my expertise in threat detection and response.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-700/50 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-[#00FF00] rounded-full"></div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Led cybersecurity workshops, awareness drives, and social media initiatives at ACS, building strong community engagement.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-slate-700/50 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-[#00FF00] rounded-full"></div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Mentored a 13-member project team to develop a Vulnerability Assessment Framework — awarded a Certificate of Appreciation for leadership.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-slate-700/50 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-[#00FF00] rounded-full"></div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Built practical security tools at Albus Security, including a Remote Code Execution detector and automation scripts for penetration testing.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/Kartavya_Resume/"
              target="_blank"
              className="bg-slate-700/50 hover:bg-slate-600/50 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>

            <a
              href="mailto:kartavya9977@gmail.com"
              className="bg-slate-700/50 hover:bg-slate-600/50 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 flex items-center space-x-4">
        <p className="text-slate-500 text-sm">© 2025 / Kartavya Ojha</p>
        <div className="flex space-x-3">
          <a href="https://linkedin.com/in/kartavya-ojha-564726314" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/kartavyaojha" className="text-slate-500 hover:text-white transition-colors">
            <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
