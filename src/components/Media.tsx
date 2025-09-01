import React from 'react';
import { Image, ExternalLink, Calendar } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      type: "article",
      title: "How Hackers Use Your Social Media for OSINT and Why It Is an Information Goldmine",
      description: "Exploring how attackers use open-source intelligence (OSINT) from platforms like Instagram, LinkedIn, and Twitter to craft targeted attacks—and how you can safeguard your digital footprint.",
      thumbnail: "https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AdC6yYmAkwVq2UeF8HngSVw.jpeg",
      platform: "WordPress",
      link: "https://defencelogic.wordpress.com/2025/08/18/how-hackers-use-your-social-media-for-osint-and-why-it-is-an-information-goldmine/"
    },
    {
      type: "article",
      title: "The Journey from CTFs to Google: Real Lessons from a Cybersecurity Pro",
      description: "A personal narrative on how participating in Capture The Flag (CTF) competitions can pave the way to a career in cybersecurity, A story of growth, learning, and seizing opportunities.",
      thumbnail: "https://flashpoint.io/wp-content/uploads/2022/08/What_OSINT_1200x628-1024x536.png", 
      date: "Augest 25, 2025",
      platform: "WordPress",
      link: "https://defencelogic.wordpress.com/2025/08/28/the-journey-from-ctfs-to-google-real-lessons-from-a-cybersecurity-pro/"
    },
    {
      type: "article",
      title: "Welcome to SOC School: Your Cyber Mentor’s Guide!",
      description: "An engaging introduction to Security Operations Centers (SOC)—breaking down how SOCs detect, respond, and manage cyber threats in a fun, relatable way.",
      thumbnail: "https://flashpoint.io/wp-content/uploads/2022/08/What_OSINT_1200x628-1024x536.png", 
      date: "July 31, 2025",
      platform: "WordPress",
      link: "https://defencelogic.wordpress.com/2025/07/31/welcome-to-soc-school-your-cyber-mentors-guide/"
    }
  ];

  return (
    <section id="blogs" className="min-h-screen py-32 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blogs & Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              Insightful walkthroughs and guides I’ve shared with the cybersecurity community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">
                      <Image size={18} />
                      <span>Article</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2 text-slate-400 text-sm">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <span className="bg-slate-700/50 px-2 py-1 rounded">{post.platform}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              View All Blogs
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blogs;
