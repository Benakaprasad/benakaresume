const BabyOwl = ({ stage, onLanded, parentOwlState, isDarkMode}) => {
  const getPositionClasses = () => {
    if (stage === 'hatching') return 'top-4 left-20 scale-0';
    if (stage === 'flying') return 'top-4 left-20';
    
    // Follow parent owl when it flies away - positioned to right of parent
    if (stage === 'followingParent') {
     return 'top-20 right-1 md:top-20 md:right-4'; 
    }
    if (stage === 'returningWithParent') {
      return 'top-20 right-1 md:top-20 md:right-4';
    }
    
    // Normal sitting position - to the RIGHT of parent owl on the branch
    if (stage === 'landed') return 'top-20 right-1 md:top-20 md:right-4'; 
    return 'top-20 right-1 md:top-20 md:right-4';
  };

  const getAnimationClass = () => {
    if (stage === 'hatching') return 'animate-hatch';
    if (stage === 'flying') return 'animate-baby-fly';
    
    // Follow parent with delay
    if (stage === 'followingParent') {
      return 'animate-baby-fly-away-delayed';
    }
    if (stage === 'returningWithParent') {
      return 'animate-baby-return-delayed';
    }
    
    if (stage === 'landed') return 'animate-breathe';
    return '';
  };

  const isFlying = stage === 'flying' || 
                   stage === 'followingParent' || 
                   stage === 'returningWithParent';

  // Baby owl sleeps in light mode, awake in dark mode (like parent)
  const isAsleep = !isDarkMode && stage === 'landed' && !isFlying;

  // Show speech bubble when parent is disturbed and baby is about to follow
  const showSpeechBubble = stage === 'landed' && 
                           parentOwlState === 'disturbed' && 
                           isDarkMode;

  return (
    <>
      {/* Baby owl speech bubble - "Wait for me!" */}
      {showSpeechBubble && (
        <div 
          style={{
            position: 'fixed',
            top: '80px',
            right: '80px',
            zIndex: 9999999,
            backgroundColor: 'white',
            color: 'black',
            border: '3px solid #f59e0b',
            borderRadius: '12px',
            padding: '10px 14px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            fontSize: '13px',
            fontWeight: 'bold'
          }}
        >
          Wait for me! 🐣
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              right: '-12px',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '12px solid white'
            }}
          />
        </div>
      )}

      <div 
        className={`fixed ${getPositionClasses()} ${getAnimationClass()} z-[50] transition-all duration-1000`}
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
            className={isFlying ? 'origin-right animate-flap' : ''}
          />
          <ellipse 
            cx="60" cy="58" 
            rx="12" ry="18" 
            fill="hsl(25, 25%, 40%)"
            className={isFlying ? 'origin-left animate-flap' : ''}
          />
          
          {/* Baby Belly - fluffy */}
          <ellipse cx="40" cy="60" rx="16" ry="20" fill="hsl(35, 40%, 75%)" />
          <ellipse cx="40" cy="63" rx="13" ry="16" fill="hsl(35, 45%, 80%)" />
          
          {/* Big baby eyes - curious and wide */}
          <circle cx="32" cy="45" r="10" fill="white" stroke="hsl(25, 20%, 30%)" strokeWidth="1.5" />
          <circle cx="48" cy="45" r="10" fill="white" stroke="hsl(25, 20%, 30%)" strokeWidth="1.5" />
          
          {/* Eyes - sleeping or awake */}
          {isAsleep ? (
            <>
              {/* Closed eyes - sleeping in light mode */}
              <path d="M 24 45 Q 32 48 40 45" fill="none" stroke="hsl(25, 30%, 20%)" strokeWidth="2" strokeLinecap="round" />
              <path d="M 40 45 Q 48 48 56 45" fill="none" stroke="hsl(25, 30%, 20%)" strokeWidth="2" strokeLinecap="round" />
              {/* Z's for sleeping */}
              <text x="60" y="35" fill="hsl(200, 60%, 50%)" fontSize="10" fontWeight="bold" className="animate-pulse">z</text>
              <text x="66" y="28" fill="hsl(200, 60%, 50%)" fontSize="8" fontWeight="bold" className="animate-pulse">z</text>
            </>
          ) : (
            <>
              {/* Open eyes - awake in dark mode */}
              <circle cx="32" cy="45" r="5" fill="hsl(25, 30%, 15%)" />
              <circle cx="48" cy="45" r="5" fill="hsl(25, 30%, 15%)" />
              
              {/* Eye highlights - sparkly baby eyes */}
              <circle cx="34" cy="43" r="2" fill="white" />
              <circle cx="50" cy="43" r="2" fill="white" />
              
              {/* Worried eyebrows when following parent */}
              {(stage === 'followingParent' || parentOwlState === 'disturbed') && (
                <>
                  <path d="M 25 38 L 38 40" stroke="hsl(25, 30%, 25%)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 55 38 L 42 40" stroke="hsl(25, 30%, 25%)" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </>
          )}
          
          {/* Tiny beak */}
          <path d="M 40 51 L 37 56 L 40 55 L 43 56 Z" fill="hsl(35, 100%, 55%)" />
          
          {/* Small ear tufts - just sprouting */}
          <path d="M 25 32 L 22 22 L 28 28 Z" fill="hsl(25, 30%, 50%)" />
          <path d="M 55 32 L 58 22 L 52 28 Z" fill="hsl(25, 30%, 50%)" />
          
          {/* Tiny feet - gripping the branch */}
          {(stage === 'landed' || stage === 'followingParent' || stage === 'returningWithParent') && (
            <g>
              {/* Baby owl's feet on parent's branch */}
              <path d="M 34 82 L 31 90 M 34 82 L 34 90 M 34 82 L 37 90" stroke="hsl(35, 60%, 45%)" strokeWidth="2" strokeLinecap="round" />
              <path d="M 46 82 L 43 90 M 46 82 L 46 90 M 46 82 L 49 90" stroke="hsl(35, 60%, 45%)" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}
          {/* Cute blush marks */}
          <ellipse cx="22" cy="52" rx="4" ry="2" fill="hsl(0, 60%, 70%)" opacity="0.3" />
          <ellipse cx="58" cy="52" rx="4" ry="2" fill="hsl(0, 60%, 70%)" opacity="0.3" />
        </svg>
      </div>
    </>
  );
};

export default BabyOwl;
