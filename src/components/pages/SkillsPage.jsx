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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
        Technical Skills
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 md:p-6 glass-card text-center">
        <p className="text-primary font-display font-semibold text-lg mb-2">
          Always Learning
        </p>
        <p className="text-muted-foreground text-sm md:text-base">
          Currently exploring TypeScript, Next.js, and cloud technologies
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
