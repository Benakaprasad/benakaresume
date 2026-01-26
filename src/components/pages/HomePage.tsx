import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          Benaka Prasad M
        </h1>
        <p className="text-xl text-muted-foreground font-serif italic">
          Full Stack Developer & MERN Stack Enthusiast
        </p>
      </div>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
      
      <p className="text-lg leading-relaxed text-foreground">
        I am an aspiring Full Stack Developer with a strong foundation in the MERN stack 
        (MongoDB, Express.js, React, Node.js) and a passion for building seamless, efficient, 
        and user-focused web applications.
      </p>
      
      <p className="text-lg leading-relaxed text-foreground">
        Adept at translating ideas into responsive and scalable digital solutions that prioritize 
        performance, data privacy, and intuitive user experiences. Driven by curiosity and continuous 
        learning, I aim to leverage technology to solve real-world problems.
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
