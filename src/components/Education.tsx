import React from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";

const Education = () => {
  const education = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-U_fG-jRjom8yGQgmwIc-g7Y_o2yw1Omhw&s",
      school: "Mandsaur University",
      degree: "BCA (Bachelor of Computer Applications)",
      cgpa: "Ongoing",
      period: "2024 - 2027",
      activities: ["Cybersecurity Club", "Workshops & Technical Events"],
      achievements: [
        "published a research paper on 'Reducing SOC Analyst Burnout' in the International Conference on Innovative Engineering and Computational Technologies (ICIECT).",
    
      ],
    },
    {
      logo: "https://lh3.googleusercontent.com/p/AF1QipNA8eNKER8wOI-24PSplUwpf_pdvMuaBbWBN5DS=s1360-w1360-h1020", 
      school: "Florence International School, Manasa",
      degree: "High School ",
      period: "2015 - 2023",
      activities: ["Sports In charge", "Football Team Vice-Captain"],
      achievements: [
        "Won the district level football competition",
        "Sports in charge of sunflower house",
        ],
    },
  ];

  return (
    <section id="education" className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <GraduationCap className="mx-auto text-emerald-400 mb-6" size={50} />
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Education
          </h2>
          <p className="text-xl md:text-2xl text-slate-400">
            My academic background and the institutions that shaped me.
          </p>
        </div>

        {/* Education Entries */}
        <div className="space-y-20">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start md:space-x-10"
            >
              {/* Logo on Left */}
              <div className="flex-shrink-0 w-36 h-36 md:w-36 md:h-36 mx-auto md:mx-0 mb-6 md:mb-0">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>

              {/* Content on Right */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {edu.school}
                </h3>
                <p className="text-emerald-400 text-xl md:text-2xl font-medium mb-4">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap gap-6 text-slate-400 text-lg mb-6">
                  <span className="flex items-center">
                    <Star size={18} className="mr-2 text-yellow-400" />
                    {edu.cgpa}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    {edu.period}
                  </span>
                </div>

                {/* Activities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-200 text-xl mb-2">
                    Activities & Societies:
                  </h4>
                  <p className="text-slate-300 text-lg">
                    {edu.activities.join(", ")}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-slate-200 text-xl mb-2">
                    Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-slate-300 text-lg space-y-2">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
