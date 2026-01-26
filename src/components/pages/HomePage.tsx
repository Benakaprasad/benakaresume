import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          John Developer
        </h1>
        <p className="text-xl text-muted-foreground font-serif italic">
          Full Stack Developer & Creative Technologist
        </p>
      </div>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
      
      <p className="text-lg leading-relaxed text-foreground">
        Welcome to my portfolio! I'm passionate about creating unique, interactive web experiences
        that blend creativity with cutting-edge technology. This portfolio itself is a testament
        to that philosophy—featuring an interactive owl companion that responds to your actions.
      </p>
      
      <p className="text-lg leading-relaxed text-foreground">
        Browse through the pages using the navigation on the left or the arrows below. 
        Each section reveals more about my journey, skills, and passion for development.
      </p>
      
      <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="text-lg">💡</span>
          <span><strong>Tip:</strong> Try clicking on the owl in different modes to see how it reacts! In dark mode, the owl is awake. In light mode, it prefers to sleep.</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
