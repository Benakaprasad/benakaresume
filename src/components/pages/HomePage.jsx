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
          Full Stack Developer with hands-on experience across the entire web stack — from designing 
          REST APIs, JWT authentication systems, and relational database schemas in Node.js and 
          PostgreSQL, to building interactive frontend interfaces with React.js and modern CSS.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          On the frontend, I build and ship complete user experiences including custom animations, 
          component architecture, responsive layouts, and real-time UI interactions — as demonstrated 
          in this portfolio itself. On the backend, I design role-based access systems, integrate 
          third-party APIs, and structure databases for reliability and performance.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground">
          I work across the full request lifecycle — from what the user sees and clicks, to the API 
          that handles it, to the database query that resolves it. My focus is on building systems 
          that are predictable, maintainable, and easy for other developers to work with.
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
