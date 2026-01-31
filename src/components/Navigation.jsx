import { useState } from 'react';
import { Home, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';

const pages = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: Briefcase, label: 'Experience' },
  { icon: Code, label: 'Skills' },
  { icon: Mail, label: 'Contact' },
];

const Navigation = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (idx) => {
    onPageChange(idx);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-4 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation Menu */}
      <div 
        className={`absolute top-14 left-0 flex flex-col gap-2 p-3 rounded-xl glass-card transition-all duration-300 origin-top-left ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {pages.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx)}
            className={`nav-button ${currentPage === idx ? 'active' : ''}`}
          >
            <item.icon size={18} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
