import photo from '@/assets/photo.jpeg';

const AboutPage = () => {
  return (
    <div className="space-y-8">
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
      <div className="space-y-5">
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
      <div className="space-y-6 mt-10">
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">Education</h3>
        
        <div className="space-y-4">
          <div className="glass-card p-5 md:p-6 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <h4 className="font-bold text-primary text-base md:text-lg">
                B.E. - Information Science & Engineering
              </h4>
              <span className="text-sm md:text-base font-semibold text-primary">CGPA: 8.73</span>
            </div>
            <p className="text-foreground font-medium mb-1">Global Academy of Technology, Bangalore</p>
            <p className="text-sm text-muted-foreground">Expected Graduation: July 2027</p>
          </div>
          
          <div className="glass-card p-5 md:p-6 border-l-4 border-primary/60">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <h4 className="font-bold text-primary text-base md:text-lg">
                Pre-University Education (State Board)
              </h4>
              <span className="text-sm md:text-base font-semibold text-primary">86.17%</span>
            </div>
            <p className="text-foreground font-medium mb-1">RNS Vidyanikethan Composite PU College, Bangalore</p>
            <p className="text-sm text-muted-foreground">Completed: September 2023</p>
          </div>
          
          <div className="glass-card p-5 md:p-6 border-l-4 border-primary/40">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <h4 className="font-bold text-primary text-base md:text-lg">
                ICSE Board
              </h4>
              <span className="text-sm md:text-base font-semibold text-primary">84.13%</span>
            </div>
            <p className="text-foreground font-medium mb-1">Bunts Sangha RNS Vidyanikethan, Bangalore</p>
            <p className="text-sm text-muted-foreground">Completed: October 2021</p>
          </div>
        </div>
      </div>
      
      {/* What Drives Me */}
      <div className="mt-10 space-y-6">
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">What Drives Me</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Building scalable and efficient web applications',
            'Solving complex problems with elegant solutions',
            'Deep understanding of systems from UI to database',
            'Root cause debugging rather than quick fixes',
            'Continuous learning through real projects',
            'Writing clean, maintainable code for teams',
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm md:text-base">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;