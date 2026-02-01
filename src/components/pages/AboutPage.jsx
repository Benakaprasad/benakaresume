import photo from '@/assets/photo.jpeg';

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="hidden sm:block relative group flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <img 
            src={photo} 
            alt="Benaka Prasad M"
            className="relative w-28 h-28 rounded-2xl object-cover border-2 border-primary/30 shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-6" />
        </div>
      </div>
      
      <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
        I am a passionate developer currently pursuing my Bachelor of Engineering in 
        Information Science & Engineering at Vidyavardhaka College of Engineering, Mysuru.
        Expected to graduate in 2026.
      </p>
      
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">Education</h3>
        
        <div className="glass-card p-4 md:p-6">
          <h4 className="font-semibold text-primary text-base md:text-lg">
            Bachelor of Engineering - Information Science & Engineering
          </h4>
          <p className="text-muted-foreground">Vidyavardhaka College of Engineering, Mysuru</p>
          <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">What Drives Me</h3>
        
        <ul className="space-y-3">
          {[
            '🚀 Building scalable and efficient web applications',
            '🎯 Solving complex problems with elegant solutions',
            '📚 Continuous learning and staying updated with latest technologies',
            '🤝 Collaborating with teams to create impactful products',
          ].map((item, idx) => (
            <li key={idx} className="text-foreground flex items-start gap-2 text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
