import photo from '@/assets/photo.jpeg';

const AboutPage = () => {
  const drives = [
    'Building scalable and efficient web applications',
    'Solving complex problems with elegant solutions',
    'Deep understanding of systems from UI to database',
    'Root cause debugging rather than quick fixes',
    'Continuous learning through real projects',
    'Writing clean, maintainable code for teams',
  ];

  const education = [
    {
      degree: 'B.E. — Information Science & Engineering',
      school: 'Global Academy of Technology, Bangalore',
      meta: 'CGPA: 8.73',
      period: 'Expected Graduation: July 2027',
      strength: 'border-primary',
    },
    {
      degree: 'Pre-University Education (State Board)',
      school: 'RNS Vidyanikethan Composite PU College, Bangalore',
      meta: '86.17%',
      period: 'Completed: September 2023',
      strength: 'border-primary/60',
    },
    {
      degree: 'ICSE Board',
      school: 'Bunts Sangha RNS Vidyanikethan, Bangalore',
      meta: '84.13%',
      period: 'Completed: October 2021',
      strength: 'border-primary/40',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4 font-sans">
        <p className="text-base md:text-lg leading-relaxed text-foreground">
          I approach development with a focus on clarity and control. I enjoy building applications
          from the ground up and understanding how each layer works from browser interactions to
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

      {/* Education */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">Education</h3>
        <div className="space-y-3">
          {education.map((edu, idx) => (
            <div key={idx} className={`glass-card p-5 md:p-6 border-l-4 ${edu.strength}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                <h4 className="font-sans font-bold text-primary text-base md:text-lg">
                  {edu.degree}
                </h4>
                <span className="font-sans font-semibold text-primary text-sm md:text-base whitespace-nowrap">
                  {edu.meta}
                </span>
              </div>
              <p className="font-sans text-foreground font-medium text-sm md:text-base">{edu.school}</p>
              <p className="font-sans text-muted-foreground text-xs md:text-sm mt-1">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Drives Me */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">What Drives Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {drives.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 py-4 px-1 border-b border-border/50 md:[&:nth-last-child(-n+2)]:border-0 last:border-0"
            >
              <span className="font-display text-primary font-bold text-base leading-none mt-1 flex-shrink-0 opacity-60">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="font-sans text-foreground text-sm md:text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
