import { useState, useEffect } from 'react';
import { Home, User, Code, Mail, Award, RotateCcw, LogOut } from 'lucide-react';
import photo from '@/assets/photo.jpeg';

const pages = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Award, label: 'Projects' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navigation = ({ currentPage, onPageChange, babyOwlHatched, onResetEgg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(currentPage);

  // Update active page when currentPage prop changes
  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const handlePageChange = (idx) => {
    setActivePage(idx);
    onPageChange(idx);
    
    // Small delay before closing menu to ensure navigation completes
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleResetEgg = () => {
    onResetEgg();
    setIsOpen(false);
  };

  if (!babyOwlHatched) {
    return null;
  }

  return (
    <>
      {/* Hamburger Button - Only visible when menu is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-[100] w-14 h-14 rounded-2xl glass-card transition-all duration-500 shadow-lg hover:shadow-2xl group animate-fade-up flex items-center justify-center"
          aria-label="Open menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-300 group-hover:w-5/6" />
            <span className="w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-300" />
            <span className="w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-300 group-hover:w-5/6 group-hover:ml-auto" />
          </div>
        </button>
      )}

      {/* Subtle Backdrop Overlay - Much lighter for better content readability */}
      <div 
        className={`fixed inset-0 bg-black/20 z-[90] transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Navigation Panel - Redesigned */}
      <nav 
        className="fixed top-0 left-0 h-screen w-80 glass-card border-r border-border/20 shadow-2xl z-[95] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          boxShadow: isOpen ? '20px 0 60px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
        
        {/* Header Section with Profile Photo and Exit Button */}
        <div className="relative p-8 border-b border-border/20">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              {/* Profile Photo and Info */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg relative group flex-shrink-0">
                  <img 
                    src={photo}
                    alt="Benaka Prasad M" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent truncate">
                    Benaka Prasad M
                  </h2>
                  <p className="text-xs text-muted-foreground">Portfolio</p>
                </div>
              </div>

              {/* Exit Door Button - Aligned to right */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 rounded-xl glass-card hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center group border border-border/50 hover:border-red-500/50 shadow-md hover:shadow-lg flex-shrink-0"
                aria-label="Close menu"
                title="Exit menu"
              >
                <LogOut className="w-5 h-5 text-foreground group-hover:text-red-500 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Items with Staggered Animation */}
        <div className="py-6 px-6 space-y-2 overflow-y-auto h-[calc(100vh-280px)] scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {pages.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activePage === idx;
            
            return (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={`
                  w-full group relative overflow-hidden
                  flex items-center gap-4 px-5 py-4 rounded-2xl
                  transition-all duration-500 ease-out
                  ${isActive 
                    ? 'bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary shadow-lg shadow-primary/20' 
                    : 'hover:bg-secondary/50 text-foreground/70 hover:text-foreground'
                  }
                `}
                style={{
                  transitionDelay: isOpen ? `${idx * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.95)',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-r-full" />
                )}
                
                {/* Icon with animation */}
                <div className={`
                  relative z-10 transition-all duration-500
                  ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                `}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
                  )}
                </div>
                
                {/* Label */}
                <span className={`
                  relative z-10 font-semibold text-base transition-all duration-300
                  ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}
                `}>
                  {item.label}
                </span>
                
                {/* Active pulse indicator */}
                {isActive && (
                  <div className="ml-auto relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="absolute w-4 h-4 rounded-full bg-primary/30 animate-ping" />
                  </div>
                )}
                
                {/* Hover gradient effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-purple-500/5
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${isActive ? 'opacity-100' : ''}
                `} />
              </button>
            );
          })}
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/20 glass-card space-y-4">
          {/* Reset Button with Modern Design */}
          <button
            onClick={handleResetEgg}
            className="
              w-full group relative overflow-hidden
              flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl
              bg-gradient-to-r from-secondary to-secondary/80
              hover:from-primary hover:to-purple-500
              border border-border/50 hover:border-primary/50
              shadow-lg hover:shadow-xl hover:shadow-primary/20
              transition-all duration-500 ease-out
              hover:scale-[1.02] active:scale-[0.98]
            "
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon with rotation on hover */}
            <RotateCcw className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:rotate-180" />
            
            {/* Text */}
            <span className="text-sm font-semibold relative z-10 bg-gradient-to-r from-foreground to-foreground group-hover:from-primary-foreground group-hover:to-primary-foreground bg-clip-text transition-all duration-300">
              Reset Animation
            </span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </button>
          
          {/* Footer Text */}
          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
            <span>Made with</span>
            <span className="inline-block animate-pulse">🦉</span>
            <span>by Benaka Prasad M</span>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;