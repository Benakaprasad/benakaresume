import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Frameworks',
    icon: '🚀',
    skills: ['Node.js', 'Express.js', 'React', 'WebSockets.io'],
  },
  {
    title: 'Tools & Databases',
    icon: '🛠️',
    skills: ['MongoDB', 'MySQL', 'Git', 'GitHub'],
  },
  {
    title: 'Platforms',
    icon: '💡',
    skills: ['PyCharm', 'Visual Studio Code', 'IntelliJ IDE'],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: ['Problem Solving', 'Communication', 'Adaptability', 'Task Prioritization', 'Teamwork'],
  },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        Technical Skills
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
