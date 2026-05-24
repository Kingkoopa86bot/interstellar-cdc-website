import { Home, Users, Briefcase, BookOpen } from 'lucide-react';
import './Programs.css';

function Programs() {
  const programs = [
    {
      icon: <Home size={40} />,
      title: 'Housing Stability',
      description: 'Support and resources to ensure stable housing for all members of our community.'
    },
    {
      icon: <Users size={40} />,
      title: 'Veteran Support',
      description: 'Dedicated services and assistance programs for our nation\'s veterans.'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Workforce Development',
      description: 'Training and job placement programs to build careers and economic opportunity.'
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Financial Education',
      description: 'Comprehensive financial literacy programs for long-term economic empowerment.'
    }
  ];

  return (
    <section id="programs" className="programs">
      <div className="programs-container">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;