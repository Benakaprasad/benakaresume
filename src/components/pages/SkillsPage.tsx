import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js & WebGL', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js & Express', 'Python & Django', 'PostgreSQL', 'MongoDB', 'REST & GraphQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Docker', 'CI/CD Pipelines', 'AWS & Vercel', 'Testing (Jest, Cypress)'],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: ['Team Leadership', 'Agile/Scrum', 'Technical Writing', 'Problem Solving', 'Mentoring'],
  },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        Skills
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="p-5 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <li 
                  key={skillIdx}
                  className="flex items-center gap-2 text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
