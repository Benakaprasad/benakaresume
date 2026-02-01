const BabyOwl = ({ stage, onLanded }) => {
  const getPositionClasses = () => {
    if (stage === 'hatching') return 'top-4 left-20 scale-0';
    if (stage === 'flying') return 'top-4 left-20';
    if (stage === 'landed') return 'top-8 right-28 md:top-12 md:right-32';
    return 'top-8 right-28 md:top-12 md:right-32';
  };

  const getAnimationClass = () => {
    if (stage === 'hatching') return 'animate-hatch';
    if (stage === 'flying') return 'animate-baby-fly';
    if (stage === 'landed') return 'animate-breathe';
    return '';
  };

  return (
    <div 
      className={`fixed ${getPositionClasses()} ${getAnimationClass()} z-50 transition-all duration-1000`}
      onAnimationEnd={() => {
        if (stage === 'flying') {
          onLanded();
        }
      }}
    >
      <svg width="60" height="80" viewBox="0 0 80 100" className="drop-shadow-lg">
        {/* Baby Owl Body - smaller and rounder */}
        <ellipse cx="40" cy="55" rx="24" ry="30" fill="hsl(25, 30%, 50%)" />
        
        {/* Baby Wings - tiny and fluffy */}
        <ellipse 
          cx="20" cy="58" 
          rx="12" ry="18" 
          fill="hsl(25, 25%, 40%)"
          className={stage === 'flying' ? 'origin-right animate-flap' : ''}
        />
        <ellipse 
          cx="60" cy="58" 
          rx="12" ry="18" 
          fill="hsl(25, 25%, 40%)"
          className={stage === 'flying' ? 'origin-left animate-flap' : ''}
        />
        
        {/* Baby Belly - fluffy */}
        <ellipse cx="40" cy="60" rx="16" ry="20" fill="hsl(35, 40%, 75%)" />
        <ellipse cx="40" cy="63" rx="13" ry="16" fill="hsl(35, 45%, 80%)" />
        
        {/* Big baby eyes - curious and wide */}
        <circle cx="32" cy="45" r="10" fill="white" stroke="hsl(25, 20%, 30%)" strokeWidth="1.5" />
        <circle cx="48" cy="45" r="10" fill="white" stroke="hsl(25, 20%, 30%)" strokeWidth="1.5" />
        
        {/* Baby pupils - larger for cute effect */}
        <circle cx="32" cy="45" r="5" fill="hsl(25, 30%, 15%)" />
        <circle cx="48" cy="45" r="5" fill="hsl(25, 30%, 15%)" />
        
        {/* Eye highlights - sparkly baby eyes */}
        <circle cx="34" cy="43" r="2" fill="white" />
        <circle cx="50" cy="43" r="2" fill="white" />
        
        {/* Tiny beak */}
        <path d="M 40 51 L 37 56 L 40 55 L 43 56 Z" fill="hsl(35, 100%, 55%)" />
        
        {/* Small ear tufts - just sprouting */}
        <path d="M 25 32 L 22 22 L 28 28 Z" fill="hsl(25, 30%, 50%)" />
        <path d="M 55 32 L 58 22 L 52 28 Z" fill="hsl(25, 30%, 50%)" />
        
        {/* Tiny feet */}
        {stage === 'landed' && (
          <g>
            <path d="M 34 82 L 31 87 M 34 82 L 34 87 M 34 82 L 37 87" stroke="hsl(35, 60%, 45%)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 46 82 L 43 87 M 46 82 L 46 87 M 46 82 L 49 87" stroke="hsl(35, 60%, 45%)" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
        
        {/* Cute blush marks */}
        <ellipse cx="22" cy="52" rx="4" ry="2" fill="hsl(0, 60%, 70%)" opacity="0.3" />
        <ellipse cx="58" cy="52" rx="4" ry="2" fill="hsl(0, 60%, 70%)" opacity="0.3" />
      </svg>
    </div>
  );
};

export default BabyOwl;
