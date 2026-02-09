import { Download } from 'lucide-react';
import photo from '@/assets/photo.jpeg';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
        {/* Photo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src={photo} 
            alt="Benaka Prasad M"
            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-card shadow-xl"
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
            Benaka Prasad M
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Full Stack Developer
          </p>
          
          {/* Download Resume Button */}
          <a 
            href="/resume.pdf"
            download="Benaka_Prasad_M_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto md:mx-0 mb-8" />
      
      {/* Professional Summary */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          Professional Summary
        </h3>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          Full Stack Developer with strong experience in building secure, role-based web applications 
          using Node.js, Express.js, and PostgreSQL. Designed and implemented REST APIs, authentication 
          systems, and relational database schemas with constraints and indexing for performance.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          Hands-on experience integrating frontend interfaces using HTML, CSS, and JavaScript, and 
          deploying scalable backend systems with a focus on clean architecture and maintainability.
        </p>
      </div>
      
      <div className="mt-8 p-5 md:p-6 glass-card border-l-4 border-primary">
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          <span className="font-semibold text-primary">💡 Interactive Tip:</span> Try clicking on the owl in different modes! In dark mode, the owl stays awake and alert. In light mode, it prefers to rest peacefully.
        </p>
      </div>
    </div>
  );
};

export default HomePage;