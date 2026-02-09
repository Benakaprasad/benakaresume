const ExperiencePage = () => {
  const projects = [
    {
      title: 'Gym Management System',
      role: 'Full Stack Developer',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
      description: 'A comprehensive role-based system supporting Admin, Trainer, and Customer workflows with secure authentication and real-time operations.',
      highlights: [
        'Designed and implemented role-based access control for three user types',
        'Built secure REST APIs with JWT authentication and authorization',
        'Modeled relational database using PostgreSQL with constraints and indexing',
        'Developed React.js dashboards consuming backend APIs for live management',
        'Structured backend for maintainability and scalability with ORM planning',
      ],
    },
    {
      title: 'Child Vaccination Reminder & Management System',
      role: 'Backend Developer',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Twilio', 'Gmail SMTP', 'Cron Jobs'],
      description: 'Backend system to manage vaccination schedules and automate multi-channel reminder notifications for parents.',
      highlights: [
        'Implemented time-based job execution using Cron for dose tracking',
        'Integrated Twilio and Gmail OAuth2 for SMS and email notifications',
        'Developed REST APIs with validation, error handling, and authentication',
        'Ensured secure handling of sensitive parent-child data',
        'Automated missed and upcoming vaccination reminders',
      ],
    },
    {
      title: 'Bingo Multiplayer Game',
      role: 'Full Stack Developer',
      tech: ['Node.js', 'Express.js', 'WebSockets', 'HTML', 'CSS', 'JavaScript'],
      description: 'Real-time multiplayer Bingo game with room-based architecture and live synchronization.',
      highlights: [
        'Built real-time game supporting solo and multiplayer modes',
        'Implemented server-controlled turn-based logic using WebSockets',
        'Designed randomized board generation and win-condition evaluation',
        'Developed room-based architecture with unique Room IDs',
        'Created responsive frontend for real-time user interaction',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
          Technical Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-6" />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Real-world applications demonstrating full-stack development, system design, 
          and problem-solving skills across different domains.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="glass-card p-5 md:p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            {/* Project Header */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {project.title}
                </h3>
                <span className="text-sm md:text-base text-primary font-semibold">
                  {project.role}
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, techIdx) => (
                <span 
                  key={techIdx}
                  className="px-3 py-1.5 text-xs md:text-sm bg-primary/10 text-primary rounded-lg font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="space-y-2.5">
              {project.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="glass-card p-6 md:p-8 text-center mt-8 border-l-4 border-primary">
        <p className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
          Want to see the code?
        </p>
        <p className="text-sm md:text-base text-muted-foreground mb-4">
          Visit my GitHub for source code, documentation, and more projects
        </p>
        <a
          href="https://github.com/Benakaprasad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default ExperiencePage;