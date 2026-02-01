import { useState } from 'react';
import { Home, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';

const pages = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: Briefcase, label: 'Experience' },
  { icon: Code, label: 'Skills' },
  { icon: Mail, label: 'Contact' },
];

const Navigation = ({ currentPage, onPageChange, babyOwlHatched, onResetEgg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (idx) => {
    onPageChange(idx);
    setIsOpen(false);
  };

  if (!babyOwlHatched) {
    return null;
  }

  return (
    <nav className="fixed top-20 left-4 z-40 animate-fade-up">
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
        
        {/* Reset Egg Animation Button */}
        <div className="mt-2 pt-2 border-t border-primary/20">
          <button
            onClick={onResetEgg}
            className="nav-button text-xs"
            title="Replay egg hatching animation"
          >
            Reset Egg Animation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
