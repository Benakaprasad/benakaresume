import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const pages = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About Me' },
  { icon: Briefcase, label: 'Experience' },
  { icon: Code, label: 'Skills' },
  { icon: Mail, label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="fixed top-4 left-4 z-40">
      <div className="flex flex-col gap-2 p-3 rounded-xl bg-card/90 backdrop-blur-md border-2 border-border shadow-xl">
        {pages.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onPageChange(idx)}
            className={`nav-button ${currentPage === idx ? 'active' : ''}`}
          >
            <item.icon size={18} />
            <span className="text-sm font-medium font-display">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
