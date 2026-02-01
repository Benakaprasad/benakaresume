import { Download } from 'lucide-react';
import photo from '@/assets/photo.jpeg';

const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
        {/* Photo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src={photo} 
            alt="Benaka Prasad M"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-card shadow-xl"
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
            Benaka Prasad M
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Full Stack Developer & MERN Stack Enthusiast
          </p>
          
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Benaka_Prasad_M_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto md:mx-0 mb-8" />
      
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
