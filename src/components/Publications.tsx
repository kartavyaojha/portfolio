import React from 'react';
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Performance Optimization Techniques for React Applications",
      authors: ["Your Name"],
      journal: "Journal of Web Engineering",
      year: "2021",
      type: "Technical Article",
      abstract: "An in-depth analysis of performance optimization techniques for React applications, including code splitting, lazy loading, and state management strategies. Includes real-world case studies and benchmarks.",
      citations: 18,
      link: "#",
      tags: ["React", "Performance", "Web Development"]
    },
  ];

  return (
    <section id="publications" className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              My research contributions and published work in computer science and technology
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                    <FileText className="text-blue-400" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                          <div className="flex items-center">
                            <Users size={16} className="mr-2" />
                            <span>{pub.authors.join(", ")}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{pub.year}</span>
                          </div>
                          <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                            {pub.type}
                          </div>
                        </div>
                        
                        <p className="text-blue-400 font-medium mb-4">{pub.journal}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{pub.citations}</div>
                          <div className="text-xs text-slate-400">Citations</div>
                        </div>
                        <a 
                          href={pub.link}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                          aria-label="View publication"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {pub.abstract}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              Total Citations: <span className="text-white font-semibold">123</span> | 
              H-Index: <span className="text-white font-semibold">8</span>
            </p>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View full publication list on Google Scholar</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;