import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-40 p-3 rounded-full bg-card border-2 border-border shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun size={24} className="text-primary" />
      ) : (
        <Moon size={24} className="text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
