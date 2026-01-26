import React from 'react';

const projects = [
  {
    title: 'Child Vaccination Reminder & Management System',
    role: 'Backend Developer',
    tech: 'Flutter | Node.js, Express.js | MongoDB Atlas | Twilio | Gmail OAuth2 | Cron Jobs',
    points: [
      'Developed automated reminder system using Node.js, Express, and Cron Jobs for vaccination alerts',
      'Integrated Twilio SMS API and Gmail OAuth2 for multi-channel message delivery',
      'Built reliable notification pipeline with error handling and API endpoints',
      'Ensured data security through encrypted credentials and secure authentication',
    ],
  },
  {
    title: 'Bingo Multiplayer Game',
    role: 'Full Stack Developer',
    tech: 'Node.js | Express.js | WebSockets | HTML | CSS | JavaScript',
    points: [
      'Developed real-time Bingo game using WebSockets with solo and multiplayer modes',
      'Designed modern UI with room creation and fair coin-toss matchmaking',
      'Optimized server performance for smooth, low-latency gameplay',
    ],
  },
];

const certificates = [
  'IBM Z Datathon Participation — October 2025',
  'J.P. Morgan Software Engineering Simulation — September 2025',
  'Green Sunday Volunteer Program — October 2024',
  'AI Foundation Certification — April 2024',
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        Projects & Experience
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-primary/30">
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-primary font-medium">{project.role}</p>
              <p className="text-xs text-muted-foreground mb-3">{project.tech}</p>
              <ul className="space-y-1">
                {project.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="text-sm text-foreground flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
          <span className="text-xl">🏆</span>
          Certificates
        </h3>
        <div className="flex flex-wrap gap-2">
          {certificates.map((cert, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-foreground border border-border"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
