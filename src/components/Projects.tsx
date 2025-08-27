import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SOC-L1 SimLab",
      description: "An open-source SOC Level 1 triage simulator built with Python and Streamlit. Features a war-room dashboard, severity color coding, contextual event details, and hands-on incident triage with escalation and documentation.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Python", "Streamlit", "SOC", "Incident Response"],
      github: "https://github.com/kartavyaojha/SOC-L1-SimLab",
      live: "#"
    },
    {
      title: "Python Security Tools Suite",
      description: "A collection of security testing tools including a keylogger, RCE scanner, brute-force scripts, and reverse shell payloads. Designed for training and penetration testing in controlled environments.",
      image: "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Python", "Cybersecurity", "Pentesting", "Automation"],
      github: "https://github.com/kartavyaojha", // replace with repo if separate
      live: "#"
    },
    {
      title: "Exploit Development Project",
      description: "Developed Python-based exploits including a keylogger and RCE script to demonstrate common vulnerabilities. Enhanced detection and mitigation of exploit patterns through lab exercises.",
      image: "https://images.pexels.com/photos/5380647/pexels-photo-5380647.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Python", "Exploits", "Security Research"],
      github: "https://github.com/kartavyaojha", // replace with repo if separate
      live: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-32 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              A selection of projects showcasing my skills in cybersecurity, SOC operations, and exploit development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-slate-700/50 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
