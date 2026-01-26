import React from 'react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Led development of interactive web applications using React and Three.js, improving user engagement by 40%. Mentored junior developers and established best practices for the frontend team.',
  },
  {
    title: 'Web Developer',
    company: 'Creative Studio',
    period: '2020 - 2022',
    description: 'Built responsive websites and interactive experiences for diverse clients, focusing on performance and accessibility. Collaborated with designers to bring creative visions to life.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Labs',
    period: '2018 - 2020',
    description: 'Developed full-stack features for SaaS products using React and Node.js. Participated in agile development cycles and contributed to architectural decisions.',
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        Experience
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-primary/30">
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <p className="text-foreground leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
