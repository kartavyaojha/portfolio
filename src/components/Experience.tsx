import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Projects & Outreach Lead",
      company: "Association for Cyber Security (ACS)",
      location: "Remote / India",
      period: "Jul 2024 – july 2025",
      type: "Internship",
      description: "Led technical initiatives and outreach efforts to strengthen ACS’s presence in cybersecurity education and awareness.",
      responsibilities: [
        "Spearheaded creation and management of cybersecurity-focused content across ACS social media platforms, boosting community engagement.",
        "Launched awareness campaigns to educate students and professionals on security fundamentals and best practices.",
        "Coordinated training and upskilling programs , streamlining onboarding and boosting effectiveness.",
        "Organized and facilitated webinars and technical workshops, attracting participants from multiple universities."
      ],
      technologies: ["Cybersecurity Awareness", "Team Leadership", "Content Strategy", "Workshops"]
    },
    {
      title: "Cybersecurity Project Mentor",
      company: "Association for Cyber Security (ACS)",
      location: "Remote / India",
      period: "Jul 2024 – Feb 2025",
      type: "Mentorship",
      description: "Guided Team Guardian in developing a Vulnerability Assessment Framework while ensuring secure coding practices.",
      responsibilities: [
        "Mentored and guided a team of 13 members in building a full Vulnerability Assessment Framework.",
        "Provided project planning, secure coding reviews, and technical leadership.",
        "Ensured delivery of robust and sustainable cybersecurity solutions.",
        "Received Certificate of Appreciation for outstanding mentorship and leadership."
      ],
      technologies: ["Python", "Security Frameworks", "Mentorship", "Project Management"]
    },
    {
      title: "Cybersecurity Intern",
      company: "Albus Security",
      location: "Remote / India",
      period: "Feb 2024 – Sep 2024",
      type: "Internship",
      description: "Worked on security tool development, penetration testing, and vulnerability remediation.",
      responsibilities: [
        "Developed and deployed tools like a Remote Code Execution (RCE) detector and an educational keylogger.",
        "Engineered and tested automation scripts including brute-force and reverse shell payloads, improving penetration testing coverage.",
        "Diagnosed and fixed web application vulnerabilities such as open redirections and logic flaws.",
        "Awarded Certificate of Excellence and Letter of Recommendation for impactful contributions."
      ],
      technologies: ["Python", "Burp Suite", "Linux", "Web Security", "Penetration Testing"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              My professional journey in cybersecurity and technology
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="text-emerald-400 mr-3" size={24} />
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                    </div>
                    <h4 className="text-xl text-emerald-400 font-medium mb-2">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-400 mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-white font-medium mb-3">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-medium mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-slate-700/50 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
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

export default Experience;
