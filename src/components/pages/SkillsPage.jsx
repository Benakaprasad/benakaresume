const SkillsPage = () => {
  const skillCategories = [
    { title: 'Programming Languages', skills: ['C', 'Java', 'JavaScript', 'SQL'] },
    { title: 'Frontend Development', skills: ['HTML5', 'CSS3', 'React.js', 'Responsive Design'] },
    { title: 'Backend Development', skills: ['Node.js', 'Express.js', 'WebSockets', 'REST APIs'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm', 'IntelliJ IDEA'] },
    { title: 'Core Concepts', skills: ['Data Structures & Algorithms', 'Problem Solving', 'Authentication', 'Database Design'] },
  ];

  const allSkills = [
    { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'React.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Express.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', color: '#000000' },
    { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
    { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', color: '#4479A1' },
    { name: 'HTML5', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'CSS3', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', color: '#007396' },
    { name: 'C', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', color: '#A8B9CC' },
    { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', color: '#F05032' },
    { name: 'GitHub', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', color: '#181717' },
    { name: 'VS Code', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg', color: '#007ACC' },
    { name: 'Postman', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg', color: '#FF6C37' },
    { name: 'Socket.io', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg', color: '#010101' },
  ];

  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills, ...allSkills];

  const softSkills = ['Communication', 'Adaptability', 'Task Prioritization', 'Teamwork', 'Collaboration'];

  const certifications = [
    { name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate (OCI)', date: 'October 2025' },
    { name: 'Software Engineering Job Simulation — J.P. Morgan Chase & Co.', date: 'September 2025' },
    { name: 'Unix Shell Scripting — Global Academy of Technology', date: 'April–May 2025' },
    { name: 'Python Programming & Libraries — Mevi Technologies LLP', date: 'August 2025' },
    { name: 'Artificial Intelligence Foundations', date: 'April 2024' },
  ];

  return (
    <div className="space-y-10 md:space-y-12 overflow-hidden">
      {/* Header */}
      <div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Technical Skills
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent mb-6" />
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
          Technologies and tools I use to build robust, scalable applications
        </p>

      </div>

      {/* ── INFINITE SCROLL — UNTOUCHED ── */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-[5] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-[5] pointer-events-none" />
        <div className="skills-scroll-container">
          {duplicatedSkills.map((skill, idx) => (
            <div key={idx} className="skill-item group">
              <div className="skill-logo-wrapper">
                <div className="skill-logo-box">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo-img" loading="lazy" />
                </div>
                <div className="skill-glow" style={{ backgroundColor: skill.color }} />
              </div>
              <div className="skill-tooltip">
                <div className="skill-tooltip-content" style={{ backgroundColor: skill.color }}>
                  {skill.name}
                  <div className="skill-tooltip-arrow" style={{ backgroundColor: skill.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills by Category — table-style rows, no chips */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
          Skills by Category
        </h3>
        <div className="glass-card overflow-hidden">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 md:px-6 py-4 ${
                idx !== skillCategories.length - 1 ? 'border-b border-border/50' : ''
              }`}
            >
              <p className="font-sans font-semibold text-primary text-sm md:text-base w-full sm:w-52 flex-shrink-0">
                {category.title}
              </p>
              <p className="font-sans text-foreground text-sm md:text-base leading-relaxed">
                {category.skills.join('  ·  ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills — clean inline text */}
      <div className="glass-card p-6 md:p-8 border-l-4 border-primary">
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
          Soft Skills
        </h3>
        <p className="font-sans text-sm md:text-base text-foreground leading-relaxed">
          {softSkills.join('  ·  ')}
        </p>
      </div>

      {/* Certifications — clean list rows */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-5">
          Certifications
        </h3>
        <div className="glass-card overflow-hidden">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-5 md:px-6 py-4 ${
                idx !== certifications.length - 1 ? 'border-b border-border/50' : ''
              }`}
            >
              <p className="font-sans text-sm md:text-base text-foreground font-medium">{cert.name}</p>
              <span className="font-sans text-xs md:text-sm text-muted-foreground whitespace-nowrap">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-scroll-container {
          display: flex;
          gap: 4rem;
          animation: infiniteScroll 50s linear infinite;
          width: max-content;
        }
        .skills-scroll-container:hover { animation-play-state: paused; }
        .skill-item { position: relative; flex-shrink: 0; cursor: pointer; }
        .skill-logo-wrapper { position: relative; }
        .skill-logo-box {
          width: 5rem; height: 5rem; border-radius: 1rem;
          background-color: white; padding: 1.25rem;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(229, 231, 235, 1);
          transition: all 0.3s ease;
        }
        .dark .skill-logo-box { background-color: rgba(31, 41, 55, 1); border-color: rgba(55, 65, 81, 1); }
        .skill-item:hover .skill-logo-box { transform: scale(1.1) translateY(-0.5rem); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .skill-logo-img { width: 100%; height: 100%; object-fit: contain; }
        .skill-glow {
          position: absolute; inset: 0; border-radius: 1rem;
          filter: blur(1rem); opacity: 0; transition: opacity 0.3s ease; z-index: -10;
        }
        .skill-item:hover .skill-glow { opacity: 0.5; }
        .skill-tooltip {
          position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%);
          white-space: nowrap; z-index: 30; pointer-events: none; opacity: 0; transition: opacity 0.2s ease;
          margin-bottom: 0.75rem;
        }
        .skill-item:hover .skill-tooltip { opacity: 1; animation: tooltipFadeIn 0.2s ease-out forwards; }
        .skill-tooltip-content {
          padding: 0.5rem 1rem; border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          font-weight: 600; font-size: 0.875rem; color: white; position: relative;
        }
        .skill-tooltip-arrow {
          position: absolute; bottom: -0.25rem; left: 50%;
          transform: translateX(-50%) rotate(45deg); width: 0.5rem; height: 0.5rem;
        }
        @keyframes infiniteScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-20%); } }
        @keyframes tooltipFadeIn { from { opacity: 0; transform: translateY(-0.5rem); } to { opacity: 1; transform: translateY(0); } }
        @media (min-width: 768px) {
          .skills-scroll-container { gap: 5rem; }
          .skill-logo-box { width: 7rem; height: 7rem; padding: 1.5rem; }
        }
        @media (max-width: 767px) { .skills-scroll-container { gap: 3rem; } }
      `}</style>
    </div>
  );
};

export default SkillsPage;
