import { useState } from 'react';
import { Home, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';

const pages = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: Briefcase, label: 'Experience' },
  { icon: Code, label: 'Skills' },
  { icon: Mail, label: 'Contact' },
];

const Navigation = ({ currentPage, onPageChange, babyOwlHatched }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (idx) => {
    onPageChange(idx);
    setIsOpen(false);
  };

  // Only show navigation after baby owl has hatched
  if (!babyOwlHatched) {
    return null;
  }

  return (
    <nav className="fixed top-20 left-4 z-40 animate-fade-up">
      {/* Navigation Menu - now always visible after hatching */}
      <div className="flex flex-col gap-2 p-3 rounded-xl glass-card">
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
