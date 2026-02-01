const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.io'],
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Database Design'],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
    },
  ];

  // All skills with working logo URLs
  const allSkills = [
    {
      name: 'React.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    {
      name: 'HTML5',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      color: '#1572B6'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
      color: '#06B6D4'
    },
    {
      name: 'Node.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    {
      name: 'Express.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
      color: '#000000'
    },
    {
      name: 'REST APIs',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
      color: '#FF6C37'
    },
    {
      name: 'Socket.io',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
      color: '#010101'
    },
    {
      name: 'MongoDB',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      color: '#47A248'
    },
    {
      name: 'MySQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      color: '#4479A1'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
      color: '#4169E1'
    },
    {
      name: 'Git',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      color: '#F05032'
    },
    {
      name: 'GitHub',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
      color: '#181717'
    },
    {
      name: 'VS Code',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
      color: '#007ACC'
    },
    {
      name: 'Postman',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
      color: '#FF6C37'
    },
    {
      name: 'npm',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg',
      color: '#CB3837'
    },
    {
      name: 'TypeScript',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      color: '#3178C6'
    },
    {
      name: 'Next.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
      color: '#000000'
    },
    {
      name: 'Docker',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
      color: '#2496ED'
    },
  ];

  // Duplicate skills multiple times for seamless infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <div className="space-y-12 md:space-y-16 overflow-hidden">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 mb-4">
          Tech Stack
        </h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full" />
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Technologies I work with to build amazing digital experiences
        </p>
      </div>

      {/* Infinite Scrolling Row */}
      <div className="relative py-12">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <div className="skills-scroll-container">
          {duplicatedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item group"
            >
              {/* Logo Container */}
              <div className="skill-logo-wrapper">
                <div className="skill-logo-box">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo-img"
                    loading="lazy"
                  />
                </div>
                
                {/* Glow Effect */}
                <div 
                  className="skill-glow"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Tooltip */}
              <div className="skill-tooltip">
                <div 
                  className="skill-tooltip-content"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name}
                  <div 
                    className="skill-tooltip-arrow"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center glass-card p-6 md:p-8 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-2">
          Always Learning, Always Growing
        </p>
        <p className="text-muted-foreground text-sm md:text-base">
          Constantly exploring new technologies and improving my craft
        </p>
      </div>

      <style jsx>{`
        /* Scrolling Container */
        .skills-scroll-container {
          display: flex;
          gap: 2rem;
          animation: infiniteScroll 40s linear infinite;
          will-change: transform;
        }

        .skills-scroll-container:hover {
          animation-play-state: paused;
        }

        /* Skill Item */
        .skill-item {
          position: relative;
          flex-shrink: 0;
          cursor: pointer;
        }

        /* Logo Wrapper */
        .skill-logo-wrapper {
          position: relative;
        }

        /* Logo Box */
        .skill-logo-box {
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          background-color: white;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(229, 231, 235, 1);
          transition: all 0.3s ease;
        }

        .dark .skill-logo-box {
          background-color: rgba(31, 41, 55, 1);
          border-color: rgba(55, 65, 81, 1);
        }

        .skill-item:hover .skill-logo-box {
          transform: scale(1.1) translateY(-0.5rem);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Logo Image */
        .skill-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Glow Effect */
        .skill-glow {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          filter: blur(1rem);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -10;
        }

        .skill-item:hover .skill-glow {
          opacity: 0.5;
        }

        /* Tooltip */
        .skill-tooltip {
          position: absolute;
          bottom: -3.5rem;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          z-index: 20;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .skill-item:hover .skill-tooltip {
          opacity: 1;
          animation: tooltipFadeIn 0.2s ease-out forwards;
        }

        .skill-tooltip-content {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          font-weight: 600;
          font-size: 0.875rem;
          color: white;
          position: relative;
        }

        .skill-tooltip-arrow {
          position: absolute;
          top: -0.25rem;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 0.5rem;
          height: 0.5rem;
        }

        /* Infinite Scroll Animation */
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Tooltip Fade In */
        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translateY(0.313rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (min-width: 768px) {
          .skills-scroll-container {
            gap: 2rem;
          }

          .skill-logo-box {
            width: 7rem;
            height: 7rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
