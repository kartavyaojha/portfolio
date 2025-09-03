import React from 'react';
import { Award, Trophy, Star, BookOpen, ExternalLink } from 'lucide-react';

const Awards = () => {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      organization: "Google",
      year: "2025",
      description: "Comprehensive program covering core cybersecurity concepts, risk management, and hands-on skills.",
      icon: Award,
      color: "text-orange-400",
      link: "https://coursera.org/verify/professional-cert/WZZRLA4CFJOG" // replace with your actual link
    },
    {
      title: "Ethical Hacking Essentials",
      organization: "EC-Council",
      year: "2024",
      description: "Credential demonstrating proficiency in ethical hacking fundamentals and penetration testing practices.",
      icon: Award,
      color: "text-emerald-400",
      link: "https://aspen.eccouncil.org/certificate/verify" // replace with your actual verification link
    },
    {
      title: "Cybersecurity Fundamentals",
      organization: "IBM",
      year: "2024",
      description: "Certification covering networking security, incident response, and core cybersecurity concepts.",
      icon: BookOpen,
      color: "text-purple-400",
      link: "https://www.credly.com/badges/ibm-cybersecurity-fundamentals" // replace with your actual link
    },
    {
      title: "Introduction to Splunk",
      organization: "sp",
      year: "2024",
      description: "Certified in leveraging Splunk for data analysis, SPL queries, and monitoring security logs.",
      icon: Award,
      color: "text-orange-400",
      link: "https://www.credly.com/badges/splunk-introduction" // replace with your actual link
    }
  ];

  const awards = [
    {
      title: "Certificate of Excellence",
      organization: "Albus Security",
      year: "2024",
      description: "Awarded for outstanding contributions during cybersecurity internship, including development of RCE detector and penetration testing tools.",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Certificate of Appreciation",
      organization: "Association for Cyber Security (ACS)",
      year: "2025",
      description: "Recognized for mentoring Team Guardian in the development of a Vulnerability Assessment Framework and providing leadership guidance.",
      icon: Star,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="awards" className="min-h-screen py-32 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certifications & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              Professional certifications and recognitions earned through dedication to cybersecurity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Award className="text-emerald-400 mr-3" size={28} />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-slate-700/50 p-3 rounded-full">
                          <Icon className={cert.color} size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                            <span className="text-slate-400 text-sm">{cert.year}</span>
                          </div>
                          <p className="text-emerald-400 font-medium mb-3">{cert.organization}</p>
                          <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
                          {cert.link && (
                            <a 
                              href={cert.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-2"
                            >
                              <ExternalLink size={14} className="mr-1" /> View Certificate
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Awards Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Trophy className="text-yellow-400 mr-3" size={28} />
                Awards & Recognition
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => {
                  const Icon = award.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/50 hover:border-yellow-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-slate-700/50 p-3 rounded-full">
                          <Icon className={award.color} size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                            <span className="text-slate-400 text-sm">{award.year}</span>
                          </div>
                          <p className="text-blue-400 font-medium mb-3">{award.organization}</p>
                          <p className="text-slate-300 text-sm leading-relaxed">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
