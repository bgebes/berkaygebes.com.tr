import React from 'react';
import { getIcon } from '../utils/iconUtils';

export interface SkillItem {
  title: string;
  desc: string;
  iconName: string;
  tags: string[];
}

interface SkillsProps {
  data?: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({ data = [] }) => {
  const skillGroups = data.length > 0 ? data : [
    {
      title: "Machine Learning & AI",
      desc: "Expertise in developing intelligent systems and machine learning models.",
      iconName: "Brain",
      tags: ["Machine Learning", "Artificial Intelligence", "Deep Learning", "Neural Networks"]
    },
    {
      title: "Image Processing",
      desc: "Advanced knowledge in computer vision and image analysis techniques.",
      iconName: "Camera",
      tags: ["Computer Vision", "Image Analysis", "Pattern Recognition", "OpenCV"]
    },
    {
      title: "Mobile Development",
      desc: "Experienced in building Android applications and teaching mobile development.",
      iconName: "Smartphone",
      tags: ["Android Development", "Mobile Apps", "Java", "Kotlin", "Flutter"]
    },
    {
      title: "Robotic Coding",
      desc: "Skilled in robotic systems development and automation.",
      iconName: "Code",
      tags: ["Robotics", "Embedded Systems", "Arduino", "Automation"]
    },
    {
      title: "Software Development",
      desc: "Full-stack development with focus on intelligent transportation systems.",
      iconName: "Terminal",
      tags: ["Python", "Java", "Web Development", "Backend Systems"]
    },
    {
      title: "Research & Innovation",
      desc: "Leading research projects in intelligent transportation and smart systems.",
      iconName: "Database",
      tags: ["Research", "Project Management", "Technical Documentation", "Innovation"]
    }
  ];

  return (
    <div className="skills-image-inspired">
      <div className="container">
        <h2 className="section-title-launch">Skills & Abilities</h2>
        <div className="skills-image-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-image-card">
              <div className="skill-card-top">
                <div className="skill-icon-box">
                  {getIcon(group.iconName, 24)}
                </div>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <p className="skill-card-desc">{group.desc}</p>
              <div className="skill-card-tags">
                {group.tags.map((tag, j) => (
                  <span key={j} className="skill-tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
