import React from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";

const Education = () => {
  const education = [
    {
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmpnvva.in%2FHome%2FUProfile%3FinstituteID%3D17&psig=AOvVaw0bwUOrL8u4pocFNoFrLECJ&ust=1756321764834000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOC5lNGWqY8DFQAAAAAdAAAAABAE",
      school: "Mandsaur University",
      degree: "BCA (Bachelor of Computer Applications)",
      cgpa: "Ongoing",
      period: "2023 - 2027",
      activities: ["Cybersecurity Club", "Workshops & Technical Events"],
      achievements: [
        "Completed internship at Albus Security",
        "Worked as Technical Projects & Outreach Lead at ACS",
        "Certificate of Appreciation for Vulnerability Assessment Framework Project",
      ],
    },
    {
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FFlorenceInternationalSchoolManasa%2F&psig=AOvVaw1-fdlPPsonlSyNuhfm0SC4&ust=1756321825495000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiA7eaWqY8DFQAAAAAdAAAAABAE", 
      school: "Florence International School, Manasa",
      degree: "High School ",
      period: "2015 - 2019",
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
              <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 mx-auto md:mx-0 mb-6 md:mb-0">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-full h-full object-contain rounded-full bg-white p-3 shadow-lg"
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
