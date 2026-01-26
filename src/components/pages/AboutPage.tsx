import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        About Me
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <p className="text-lg leading-relaxed text-foreground">
        I'm a creative developer with a passion for building engaging digital experiences.
        With expertise in React, Node.js, and creative coding, I bring ideas to life through
        clean code and thoughtful design.
      </p>
      
      <p className="text-lg leading-relaxed text-foreground">
        When I'm not coding, you can find me exploring nature, sketching ideas, or learning
        about the latest web technologies. I believe in continuous learning and love tackling
        challenging problems that push the boundaries of what's possible on the web.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-4 bg-secondary/50 rounded-lg border border-border">
          <h3 className="font-display font-semibold text-lg mb-2">🎯 Philosophy</h3>
          <p className="text-muted-foreground">
            Code should be elegant, maintainable, and serve the user experience above all.
          </p>
        </div>
        <div className="p-4 bg-secondary/50 rounded-lg border border-border">
          <h3 className="font-display font-semibold text-lg mb-2">🌱 Always Learning</h3>
          <p className="text-muted-foreground">
            Technology evolves rapidly, and I embrace the journey of continuous growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
