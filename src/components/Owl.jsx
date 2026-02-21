const Owl = ({ state, isDarkMode, stage, onClick, showMail = false }) => {
  const getAnimationClass = () => {
    switch (state) {
      case 'waking': return 'animate-wake';
      case 'flying': return 'animate-fly';
      case 'flapping': return 'animate-flap';
      case 'flyingAway': return 'animate-fly-away';
      case 'returning': return 'animate-return';
      case 'sitting': return 'animate-breathe';
      case 'sleeping': return 'animate-breathe';
      default: return '';
    }
  };

  const isAsleep = state === 'sleeping' || (!isDarkMode && stage === 'resume' && state !== 'flapping' && state !== 'waking');

  // Special positioning for landing stage
  const positionClass = stage === 'landing' ? 'Owl-landing' : 'Owl';

  return (
    <div 
      className={`${positionClass} fixed ${getAnimationClass()} cursor-pointer z-50 transition-all duration-500`}
      onClick={onClick}
      title={isAsleep ? "Zzz... Click to wake me!" : "Hoot hoot!"}
    >
      {/* Speech bubble - flapping in light mode */}
{state === 'flapping' && (
  <div 
    style={{
      position: 'fixed',
      top: '30px',
      right: '100px',
      zIndex: 9999999,
      backgroundColor: 'white',
      color: 'black',
      border: '3px solid #3b82f6',
      borderRadius: '12px',
      padding: '12px 16px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      fontSize: '14px',
      fontWeight: 'bold'
    }}
  >
    Let me sleep! 💤
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

{/* Speech bubble - disturbed in dark mode */}
{state === 'disturbed' && isDarkMode && (
  <div 
    style={{
      position: 'fixed',
      top: '10px',
      right: '260px',
      zIndex: 9999999,
      backgroundColor: 'white',
      color: 'black',
      border: '3px solid #3b82f6',
      borderRadius: '12px',
      padding: '12px 16px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      fontSize: '14px',
      fontWeight: 'bold'
    }}
  >
    I'll be back! 🦉
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

<svg width="100" height="130" viewBox="0 0 120 150" className="drop-shadow-lg w-20 h-26 md:w-[100px] md:h-[130px]">
  {/* Landing page branch only - inside main owl SVG */}
  {stage === 'landing' && state !== 'flying' && state !== 'flyingAway' && (
    <g>
      <path 
        d="M 0 135 Q 40 130 60 135 Q 80 140 120 132" 
        fill="none" 
        stroke="hsl(25, 50%, 28%)" 
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path 
        d="M 0 135 Q 40 128 60 133 Q 80 138 120 130" 
        fill="none" 
        stroke="hsl(25, 40%, 35%)" 
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="15" cy="128" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(-20, 15, 128)" />
      <ellipse cx="100" cy="125" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(15, 100, 125)" />
    </g>
  )}
      
      {/* Owl Body */}
      <ellipse cx="60" cy="85" rx="38" ry="48" fill="hsl(25, 25%, 42%)" />
      
      {/* Wings */}
      <ellipse 
        cx="28" cy="90" 
        rx="18" ry="30" 
        fill="hsl(25, 20%, 32%)"
        className={state === 'flying' || state === 'flapping' || state === 'flyingAway' ? 'origin-right animate-flap' : ''}
      />
      <ellipse 
        cx="92" cy="90" 
        rx="18" ry="30" 
        fill="hsl(25, 20%, 32%)"
        className={state === 'flying' || state === 'flapping' || state === 'flyingAway' ? 'origin-left animate-flap' : ''}
      />
      
      {/* Belly */}
      <ellipse cx="60" cy="95" rx="22" ry="30" fill="hsl(35, 35%, 70%)" />
      <ellipse cx="60" cy="100" rx="18" ry="24" fill="hsl(35, 40%, 75%)" />
      
      {/* Eye circles */}
      <circle cx="48" cy="65" r="14" fill="white" stroke="hsl(25, 20%, 30%)" strokeWidth="2" />
      <circle cx="72" cy="65" r="14" fill="white" stroke="hsl(25, 20%, 30%)" strokeWidth="2" />
      
      {/* Eyes */}
      {isAsleep ? (
        <>
          <path d="M 40 65 Q 48 68 56 65" fill="none" stroke="hsl(25, 30%, 20%)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 64 65 Q 72 68 80 65" fill="none" stroke="hsl(25, 30%, 20%)" strokeWidth="2.5" strokeLinecap="round" />
          <text x="85" y="45" fill="hsl(200, 60%, 50%)" fontSize="14" fontWeight="bold" className="animate-pulse">z</text>
          <text x="95" y="35" fill="hsl(200, 60%, 50%)" fontSize="12" fontWeight="bold" className="animate-pulse">z</text>
          <text x="102" y="28" fill="hsl(200, 60%, 50%)" fontSize="10" fontWeight="bold" className="animate-pulse">z</text>
        </>
      ) : (
        <>
          <circle cx="48" cy="65" r="7" fill="hsl(25, 30%, 15%)" />
          <circle cx="72" cy="65" r="7" fill="hsl(25, 30%, 15%)" />
          <circle cx="51" cy="62" r="2.5" fill="white" />
          <circle cx="75" cy="62" r="2.5" fill="white" />
          
          {(state === 'disturbed' || state === 'flapping') && (
            <>
              <path d="M 38 52 L 58 56" stroke="hsl(25, 30%, 25%)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 82 52 L 62 56" stroke="hsl(25, 30%, 25%)" strokeWidth="3" strokeLinecap="round" />
            </>
          )}
        </>
      )}
      
      {/* Beak */}
      <path d="M 60 73 L 54 82 L 60 80 L 66 82 Z" fill="hsl(35, 100%, 50%)" />
      
      {/* Ear tufts */}
      <path d="M 35 45 L 28 28 L 42 38 Z" fill="hsl(25, 25%, 42%)" />
      <path d="M 85 45 L 92 28 L 78 38 Z" fill="hsl(25, 25%, 42%)" />
      <path d="M 36 44 L 32 32 L 40 40 Z" fill="hsl(25, 20%, 35%)" />
      <path d="M 84 44 L 88 32 L 80 40 Z" fill="hsl(25, 20%, 35%)" />
      
      {/* Feet */}
      {(stage === 'landing' || stage === 'resume') && state !== 'flying' && state !== 'flyingAway' && (
        <g>
          <path d="M 50 130 L 45 138 M 50 130 L 50 138 M 50 130 L 55 138" stroke="hsl(35, 60%, 40%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 70 130 L 65 138 M 70 130 L 70 138 M 70 130 L 75 138" stroke="hsl(35, 60%, 40%)" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      
      {/* Mail */}
      {showMail && (
        <g className={state === 'flying' ? '' : 'animate-drop'}>
          <rect x="45" y="125" width="30" height="22" rx="2" fill="hsl(45, 50%, 92%)" stroke="hsl(220, 50%, 45%)" strokeWidth="1.5" />
          <path d="M 45 127 L 60 140 L 75 127" fill="none" stroke="hsl(220, 50%, 45%)" strokeWidth="1.5" />
          <circle cx="60" cy="133" r="4" fill="hsl(0, 60%, 50%)" />
        </g>
      )}
    </svg>
    </div>
  );
};

export default Owl;
