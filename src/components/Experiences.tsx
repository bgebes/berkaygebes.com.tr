import React from 'react';
import { MapPin } from 'lucide-react';

export interface ExperienceItem {
  role?: string;
  title?: string;
  org: string;
  period?: string;
  date?: string;
  loc: string;
  desc: string;
  type: string;
}

interface ExperiencesProps {
  experiences?: ExperienceItem[];
  events?: ExperienceItem[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences: expProp, events: evtProp }) => {
  const experiences = expProp && expProp.length > 0 ? expProp : [
    { role: "Research Assistant", org: "Hitit University", period: "Mar 2025 – Present", loc: "Çorum, Türkiye", desc: "Leading advanced research in Machine Learning and Computer Vision. Contributing to academic curriculum, mentoring engineering students, and developing institutional AI intelligence projects.", type: "work" },
    { role: "Volunteer Software Developer", org: "CEITSS, AUS Turkey", period: "Nov 2023 – Feb 2025", loc: "Samsun, Türkiye", desc: "Contributed to the development of intelligent transportation systems (SHATRIP). Lead architect for multidisciplinary smart city systems sponsored by the Intelligent Transportation Systems Association of Turkey (AUS Turkey).", type: "work" },
    { role: "Software Engineer Intern", org: "isTechSoft Yazılım", period: "Jun 2023 – Oct 2023", loc: "Samsun, Türkiye", desc: "Built cross-platform mobile apps using Flutter. Implemented MVC architecture, managed complex state with GetX, and integrated Firebase for real-time backend synchronization.", type: "work" }
  ];

  const events = evtProp && evtProp.length > 0 ? evtProp : [
    { title: "Android Training Instructor", org: "Ondokuz Mayıs University", date: "Nov 2023", loc: "Samsun, Türkiye", desc: "Selected as an instructor by the university to lead a specialized Android Development training program for the engineering department.", type: "event" },
    { title: "Webathon Jury Member", org: "Ondokuz Mayıs University", date: "Dec 2022", loc: "Samsun, Türkiye", desc: "Invited as a technical jury member for a high-intensity 72-hour web development competition, evaluating architectural decisions and project implementation for various student teams.", type: "event" },
    { title: "Automotive Summer Camp Summit", org: "University Representative (OMU)", date: "July 2021", loc: "Online / Virtual", desc: "Represented OMU at a global virtual summit featuring industry giants like Ford Otosan, Mercedes-Benz, and Toyota. Participated in high-level conferences on automotive software systems.", type: "event" },
    { title: "13th Int. MEB Robot Competition", org: "Team Lead / Competitor", date: "April 2019", loc: "Samsun, Türkiye", desc: "Ranked 15th among 271 robots in the Caretta Caretta Collection category. Gained direct TEKNOFEST eligibility. Represented Fatsa Cahit Zarifoğlu Anatolian High School in the 3-day elimination tournament.", type: "event" },
    { title: "Robotics and Coding Festival", org: "Exhibitor / Team Member", date: "April 2019", loc: "Ordu, Türkiye", desc: "Successfully presented school-led engineering projects and technical demos at the regional Robotics and Coding Festival.", type: "event" }
  ];

  const renderCard = (item: ExperienceItem) => (
    <div key={item.role || item.title} className="unified-card animate-in">
      <div className="unified-header">
        <span className="unified-date">{item.period || item.date}</span>
        <h3 className="unified-title">{item.role || item.title}</h3>
        <h4 className="unified-org">{item.org}</h4>
      </div>
      <p className="unified-desc">{item.desc}</p>
      <div className="unified-footer">
        <span className="unified-loc">
          <MapPin size={12} /> {item.loc}
        </span>
      </div>
    </div>
  );

  return (
    <div className="experiences-lansman">
      <div className="container">
        <h2 className="section-title-launch">Experiments & Events</h2>
        
        <div className="unified-grid-lansman">
          
          {/* Column 1: Employment */}
          <div className="unified-col">
            <div className="unified-stack timeline-line">
              {experiences.map(renderCard)}
            </div>
          </div>

          {/* Column 2: Events */}
          <div className="unified-col">
            <div className="unified-stack timeline-line">
              {events.map(renderCard)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experiences;
