const NestWithEgg = ({ onEggClick, isHatched, isEggCracking, showBrokenEgg = false }) => {
  // Don't render anything if fully hatched and baby owl has settled
  if (isHatched && !showBrokenEgg) return null;

  return (
    <div 
      className={`NestWithEgg fixed z-40 ${!isEggCracking && !showBrokenEgg ? 'cursor-pointer' : 'pointer-events-none'} group`}
      onClick={!isEggCracking && !showBrokenEgg ? onEggClick : undefined}
      title={!isEggCracking && !showBrokenEgg ? "Click me! 🥚" : ""}
    >
      {/* Click me tooltip - only show before cracking */}
      {!isEggCracking && !showBrokenEgg && (
        <div className="absolute top-6 -right-20 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap animate-bounce pointer-events-none shadow-xl border-2 border-primary-foreground/20">
          Click me!
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '-12px',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              borderRight: '12px solid hsl(var(--primary))'
            }}
          />
        </div>
      )}
      
      <svg width="100" height="110" viewBox="0 0 100 110" className="drop-shadow-lg">
        {/* Branch for the nest */}
        <g>
          <path 
            d="M 0 90 Q 25 87 50 90 Q 75 93 100 88" 
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path 
            d="M 0 90 Q 25 85 50 88 Q 75 91 100 86" 
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Branch texture - small twigs */}
          <path 
            d="M 20 87 L 15 80" 
            stroke="hsl(25, 45%, 32%)" 
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path 
            d="M 45 88 L 42 82" 
            stroke="hsl(25, 45%, 32%)" 
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path 
            d="M 75 89 L 78 83" 
            stroke="hsl(25, 45%, 32%)" 
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Leaves on branch */}
          <ellipse cx="12" cy="83" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-25, 12, 83)" />
          <ellipse cx="85" cy="82" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(20, 85, 82)" />
          <ellipse cx="40" cy="85" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-10, 40, 85)" />
          
          {/* Branch knots for detail */}
          <circle cx="30" cy="88" r="2" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="65" cy="89" r="1.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
        </g>
        
        {/* Nest */}
        <g className={`${!isEggCracking && !showBrokenEgg ? 'group-hover:scale-105' : ''} transition-transform origin-center`}>
          {/* Nest shadow on branch */}
          <ellipse cx="50" cy="88" rx="26" ry="5" fill="hsl(0, 0%, 0%)" opacity="0.15" />
          
          {/* Nest base - woven twigs */}
          <ellipse cx="50" cy="82" rx="26" ry="9" fill="hsl(30, 35%, 35%)" />
          <ellipse cx="50" cy="80" rx="24" ry="8" fill="hsl(30, 40%, 40%)" />
          
          {/* Nest walls - layered twigs with more detail */}
          <path d="M 26 82 Q 24 72 28 65 L 30 67 Q 27 73 28 82" fill="hsl(30, 35%, 38%)" />
          <path d="M 74 82 Q 76 72 72 65 L 70 67 Q 73 73 72 82" fill="hsl(30, 35%, 38%)" />
          <path d="M 32 82 Q 30 75 32 69 L 34 70 Q 32 75 33 82" fill="hsl(30, 40%, 42%)" />
          <path d="M 68 82 Q 70 75 68 69 L 66 70 Q 68 75 67 82" fill="hsl(30, 40%, 42%)" />
          
          {/* Additional nest wall details */}
          <path d="M 38 82 Q 37 77 38 73 L 39 74 Q 38 77 39 82" fill="hsl(30, 38%, 40%)" />
          <path d="M 62 82 Q 63 77 62 73 L 61 74 Q 62 77 61 82" fill="hsl(30, 38%, 40%)" />
          
          {/* Nest interior - soft lining */}
          <ellipse cx="50" cy="75" rx="20" ry="7" fill="hsl(35, 45%, 55%)" />
          <ellipse cx="50" cy="74" rx="18" ry="6" fill="hsl(35, 50%, 60%)" />
          
          {/* Interior texture - soft material */}
          <ellipse cx="50" cy="74" rx="16" ry="5" fill="hsl(35, 55%, 65%)" opacity="0.7" />

          {/* Egg - with different states */}
          {showBrokenEgg ? (
            // Show broken egg pieces (static)
            <g>
              {/* Bottom egg pieces */}
              <g>
                {/* Left bottom piece */}
                <path 
                  d="M 42 72 Q 40 68 42 64 L 45 65 Q 44 68 45 72 Z" 
                  fill="hsl(35, 30%, 88%)" 
                  stroke="hsl(35, 25%, 75%)" 
                  strokeWidth="1"
                />
                <path d="M 42 64 L 44 66" stroke="hsl(25, 30%, 50%)" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Right bottom piece */}
                <path 
                  d="M 58 72 Q 60 68 58 64 L 55 65 Q 56 68 55 72 Z" 
                  fill="hsl(35, 30%, 88%)" 
                  stroke="hsl(35, 25%, 75%)" 
                  strokeWidth="1"
                />
                <path d="M 58 64 L 56 66" stroke="hsl(25, 30%, 50%)" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Center bottom piece */}
                <path 
                  d="M 48 73 Q 47 70 48 68 L 52 68 Q 53 70 52 73 Z" 
                  fill="hsl(35, 30%, 88%)" 
                  stroke="hsl(35, 25%, 75%)" 
                  strokeWidth="1"
                />
              </g>
              
              {/* Top egg pieces */}
              <g>
                {/* Left top piece */}
                <path 
                  d="M 40 62 Q 38 58 40 52 L 43 53 Q 42 57 44 62 Z" 
                  fill="hsl(35, 30%, 88%)" 
                  stroke="hsl(35, 25%, 75%)" 
                  strokeWidth="1"
                />
                <path d="M 40 52 L 42 56" stroke="hsl(25, 30%, 50%)" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Right top piece */}
                <path 
                  d="M 60 62 Q 62 58 60 52 L 57 53 Q 58 57 56 62 Z" 
                  fill="hsl(35, 30%, 88%)" 
                  stroke="hsl(35, 25%, 75%)" 
                  strokeWidth="1"
                />
                <path d="M 60 52 L 58 56" stroke="hsl(25, 30%, 50%)" strokeWidth="1.5" strokeLinecap="round" />
              </g>
              
              {/* Egg spots on pieces */}
              <circle cx="41" cy="58" r="1.5" fill="hsl(30, 25%, 70%)" opacity="0.4" />
              <circle cx="59" cy="58" r="1.5" fill="hsl(30, 25%, 70%)" opacity="0.4" />
              <circle cx="43" cy="69" r="1.2" fill="hsl(30, 25%, 70%)" opacity="0.4" />
              <circle cx="57" cy="69" r="1.2" fill="hsl(30, 25%, 70%)" opacity="0.4" />
            </g>
          ) : (
            // Show intact or cracking egg
            <g className={isEggCracking ? 'animate-egg-crack' : 'animate-egg-shake'}>
              {/* Egg shadow */}
              <ellipse cx="50" cy="73" rx="12" ry="2" fill="hsl(0, 0%, 0%)" opacity="0.25" />
              
              {/* Egg body - slightly larger and more detailed */}
              <ellipse cx="50" cy="62" rx="11" ry="14" fill="hsl(35, 30%, 88%)" stroke="hsl(35, 25%, 75%)" strokeWidth="1" />
              
              {/* Crack lines - only show when cracking */}
              {isEggCracking && (
                <g>
                  <path d="M 50 52 L 48 58 L 51 64 L 47 68" stroke="hsl(25, 30%, 50%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M 50 52 L 52 56 L 50 62 L 54 66" stroke="hsl(25, 30%, 50%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M 46 60 L 44 63" stroke="hsl(25, 30%, 50%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M 54 60 L 56 63" stroke="hsl(25, 30%, 50%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </g>
              )}
              
              {/* Egg spots/texture */}
              <ellipse cx="45" cy="58" rx="2" ry="2.5" fill="hsl(30, 25%, 70%)" opacity="0.4" />
              <ellipse cx="54" cy="61" rx="1.5" ry="2" fill="hsl(30, 25%, 70%)" opacity="0.4" />
              <ellipse cx="48" cy="66" rx="2" ry="2.5" fill="hsl(30, 25%, 70%)" opacity="0.4" />
              <ellipse cx="52" cy="59" rx="1.8" ry="2.2" fill="hsl(30, 25%, 70%)" opacity="0.35" />
              
              {/* Egg highlight - makes it look shiny */}
              <ellipse cx="47" cy="56" rx="3.5" ry="5" fill="white" opacity="0.4" />
              <ellipse cx="46" cy="55" rx="2" ry="3" fill="white" opacity="0.3" />
            </g>
          )}
        </g>
      </svg>
      
      <style>{`
        @keyframes egg-shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        
        @keyframes egg-crack {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-5deg) scale(1.02); }
          50% { transform: rotate(5deg) scale(1.05); }
          75% { transform: rotate(-3deg) scale(1.03); }
          100% { transform: rotate(0deg) scale(1); }
        }
        
        .animate-egg-shake {
          animation: egg-shake 0.5s ease-in-out infinite;
        }
        
        .animate-egg-crack {
          animation: egg-crack 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default NestWithEgg;