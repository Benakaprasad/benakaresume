const ExperiencePage = () => {
  const projects = [
    {
      title: 'Child Vaccination & Reminder Management System',
      description: 'A full-stack web application to help parents track and manage their child\'s vaccination schedules with automated reminders through multiple channels.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      highlights: ['In-app push notifications for vaccination reminders', 'Email and SMS reminder integration', 'User registration and authentication', 'Admin panel for vaccine management'],
    },
    {
      title: 'Real-Time Bingo Game',
      description: 'An interactive multiplayer Bingo game with real-time updates and room-based gameplay.',
      tech: ['React', 'Node.js', 'Socket.io', 'WebSockets'],
      highlights: ['Real-time multiplayer functionality', 'Room creation and joining', 'Live game state synchronization'],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
        Projects & Experience
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card p-4 md:p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIdx) => (
                <span 
                  key={techIdx}
                  className="px-3 py-1 text-xs md:text-sm bg-primary/10 text-primary rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <ul className="space-y-1">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
