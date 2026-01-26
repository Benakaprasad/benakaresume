import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        About Me
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <p className="text-lg leading-relaxed text-foreground">
        I'm currently pursuing Information Science and Engineering at Global Academy of Technology, 
        Bangalore (Expected graduation: July 2027). With a CGPA of 8.91, I'm dedicated to mastering 
        full-stack development.
      </p>
      
      <p className="text-lg leading-relaxed text-foreground">
        I believe in continuous learning and love tackling challenging problems that push the 
        boundaries of what's possible on the web. My goal is to build clean architecture, 
        optimized backend systems, and engaging front-end designs.
      </p>
      
      <div className="mt-8">
        <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">🎓</span>
          Education
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground">Global Academy Of Technology, Bangalore</h4>
            <p className="text-sm text-muted-foreground">B.E in Information Science & Engineering • CGPA: 8.91</p>
            <p className="text-xs text-primary">Expected July 2027</p>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground">RNS Vidyanikethan Composite PU College</h4>
            <p className="text-sm text-muted-foreground">State Board (PU) • GPA: 86.17</p>
            <p className="text-xs text-primary">September 2023</p>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground">Bunts Sangha RNS Vidyanikethan</h4>
            <p className="text-sm text-muted-foreground">ICSE Board • GPA: 84.13</p>
            <p className="text-xs text-primary">October 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
