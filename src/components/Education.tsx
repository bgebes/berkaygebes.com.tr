import React from 'react';
import { GraduationCap } from 'lucide-react';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  desc: string;
}

interface EducationProps {
  data?: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ data = [] }) => {
  const education = data.length > 0 ? data : [
    {
      degree: "M.Sc. in Computer Engineering",
      institution: "Ondokuz Mayıs University",
      period: "2024 – Present",
      desc: "Graduate study focused on advanced algorithm design and machine learning architectures within the Department of Computer Engineering. Actively participating in research seminars and collaborative lab projects."
    },
    {
      degree: "B.Sc. in Computer Engineering",
      institution: "Ondokuz Mayıs University",
      period: "2020 – 2024",
      desc: "Completed the Computer Engineering program with a strong focus on core engineering principles and intelligent systems. Served as a mobile development instructor and led multiple student-led tech initiatives."
    },
    {
      degree: "High School Diploma",
      institution: "Anatolian High School",
      period: "2016 – 2020",
      desc: "Developed a strong foundation in mathematics and analytical thinking. Participated in national robot competitions, marking the beginning of a dedicated journey into engineering and robotics."
    }
  ];

  return (
    <div className="education-lansman">
      <div className="container">
        <h2 className="section-title-launch">Educational Journey</h2>
        
        <div className="education-grid-lansman">
          {education.map((edu, i) => (
            <div key={i} className="education-card-lansman animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="education-icon-wrap">
                 <GraduationCap size={24} />
              </div>
              <div className="education-info">
                 <span className="edge-date">{edu.period}</span>
                 <h3 className="degree-title">{edu.degree}</h3>
                 <h4 className="institution-title">{edu.institution}</h4>
                 <p className="edu-desc-p">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
