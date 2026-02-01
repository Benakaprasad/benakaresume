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
      
      {/* Personal Approach to Development */}
      <div className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          I approach development with a focus on clarity and control. I enjoy building applications 
          from the ground up and understanding how each layer works, from browser interactions to 
          database queries. Working extensively with JavaScript and Node.js has helped me become 
          confident in handling user input, managing state, and writing backend logic that behaves 
          predictably.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          Debugging is a regular part of my workflow. I spend time reading errors carefully, tracing 
          issues through the code, and fixing problems at their root rather than applying temporary 
          patches. I value clean logic, consistent behavior, and code that another developer can read 
          and understand without confusion.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          I continue to improve by building real projects, revisiting my own code, and refining it 
          as I learn better ways to structure and solve problems.
        </p>
      </div>
      
      {/* Education Section */}
      <div className="space-y-4 mt-8">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">Education</h3>
        
        <div className="glass-card p-4 md:p-6">
          <h4 className="font-semibold text-primary text-base md:text-lg">
            Bachelor of Engineering - Information Science & Engineering
          </h4>
          <p className="text-muted-foreground">Global Academy of Technology, Bangalore</p>
          <p className="text-sm text-muted-foreground">Expected Graduation: July 2027</p>
          <p className="text-sm text-primary font-medium mt-1">CGPA: 8.91</p>
        </div>
        
        <div className="glass-card p-4 md:p-6">
          <h4 className="font-semibold text-primary text-base md:text-lg">
            Pre-University Education (PU)
          </h4>
          <p className="text-muted-foreground">RNS Vidyanikethan Composite PU College, Bangalore</p>
          <p className="text-sm text-muted-foreground">Completed: September 2023</p>
          <p className="text-sm text-primary font-medium mt-1">Percentage: 86.17%</p>
        </div>
        
        <div className="glass-card p-4 md:p-6">
          <h4 className="font-semibold text-primary text-base md:text-lg">
            ICSE Board
          </h4>
          <p className="text-muted-foreground">Bunts Sangha RNS Vidyanikethan, Bangalore</p>
          <p className="text-sm text-muted-foreground">Completed: October 2021</p>
          <p className="text-sm text-primary font-medium mt-1">Percentage: 84.13%</p>
        </div>
      </div>
      
      {/* What Drives Me */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">What Drives Me</h3>
        
        <ul className="space-y-3">
          {[
            '🚀 Building scalable and efficient web applications',
            '🎯 Solving complex problems with elegant solutions',
            '🔍 Deep understanding of how systems work from UI to database',
            '🐛 Root cause debugging rather than quick fixes',
            '📚 Continuous learning through building real projects',
            '🤝 Writing clean, maintainable code that others can understand',
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
