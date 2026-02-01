import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Benakaprasad', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/benakaprasadm', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:benakaprasadm82@gmail.com', label: 'Email' },
];

const LandingStage = ({ showHint, isHiding }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen px-4 transition-all duration-700 ${isHiding ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <button
        onClick={onSkipAnimation}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-foreground rounded-lg border border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-up"
        style={{ animationDelay: '0.6s' }}
      >
        Skip Animation →
      </button>
      <div className="text-center max-w-3xl">
        {/* Greeting */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Hello, I'm
        </p>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Benaka Prasad M
        </h1>
        
        {/* Role */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="gradient-text font-semibold">Full Stack Developer</span>
        </p>
        
        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Specializing in MERN Stack development with a passion for building 
          seamless, efficient, and user-focused web applications.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="social-btn"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
        
        {/* Hint */}
        <div className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 animate-bounce">
            <span className="text-2xl md:text-3xl">👉</span>
            <span className="text-muted-foreground font-medium text-sm md:text-base">Click the owl to explore my portfolio!</span>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="mt-12 flex justify-center items-center gap-4 opacity-30">
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
          <span className="text-xl md:text-2xl">🦉</span>
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default LandingStage;
