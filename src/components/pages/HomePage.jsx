const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
          Benaka Prasad M
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Full Stack Developer & MERN Stack Enthusiast
        </p>
      </div>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
      
      <p className="text-base md:text-lg leading-relaxed text-foreground">
        I am an aspiring Full Stack Developer with a strong foundation in the MERN stack 
        (MongoDB, Express.js, React, Node.js) and a passion for building seamless, efficient, 
        and user-focused web applications.
      </p>
      
      <p className="text-base md:text-lg leading-relaxed text-foreground">
        Adept at translating ideas into responsive and scalable digital solutions that prioritize 
        performance, data privacy, and intuitive user experiences. Driven by curiosity and continuous 
        learning, I aim to leverage technology to solve real-world problems.
      </p>
      
      <div className="mt-8 p-4 md:p-6 glass-card">
        <p className="text-sm md:text-base text-muted-foreground flex items-start gap-3">
          <span className="text-lg flex-shrink-0">💡</span>
          <span><strong>Tip:</strong> Try clicking on the owl in different modes to see how it reacts! In dark mode, the owl is awake. In light mode, it prefers to sleep.</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
