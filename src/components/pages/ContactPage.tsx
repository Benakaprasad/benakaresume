import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'john.developer@email.com', href: 'mailto:john.developer@email.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/johndeveloper', href: 'https://linkedin.com/in/johndeveloper' },
  { icon: Github, label: 'GitHub', value: 'github.com/johndeveloper', href: 'https://github.com/johndeveloper' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
];

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
        Contact Me
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
      
      <p className="text-lg leading-relaxed text-foreground mb-8">
        I'd love to hear from you! Whether you have a project in mind, want to collaborate,
        or just want to say hello, feel free to reach out.
      </p>
      
      <div className="space-y-4">
        {contactInfo.map((item, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <item.icon size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
              {item.href ? (
                <a 
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20 text-center">
        <p className="text-lg font-display font-semibold text-primary mb-2">
          Let's build something amazing together!
        </p>
        <p className="text-muted-foreground">
          I'm currently open to new opportunities and collaborations.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
