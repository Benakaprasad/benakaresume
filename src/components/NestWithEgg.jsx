const NestWithEgg = ({ onEggClick, isHatched }) => {
  if (isHatched) return null;

  return (
    <div 
      className="fixed top-4 left-20 z-40 cursor-pointer group"
      onClick={onEggClick}
      title="Click me! 🥚"
    >
      {/* Click me tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap animate-bounce pointer-events-none">
        Click me! 👆
      </div>

      <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-lg">
        {/* Branch Extension */}
        <path 
          d="M 10 85 Q 25 82 40 85 Q 55 88 70 83" 
          fill="none" 
          stroke="hsl(25, 50%, 28%)" 
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path 
          d="M 10 85 Q 25 80 40 83 Q 55 86 70 81" 
          fill="none" 
          stroke="hsl(25, 40%, 35%)" 
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Small leaves on branch */}
        <ellipse cx="15" cy="78" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-20, 15, 78)" />
        <ellipse cx="60" cy="77" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(15, 60, 77)" />

        {/* Nest */}
        <g className="group-hover:scale-105 transition-transform origin-center">
          {/* Nest base - woven twigs */}
          <ellipse cx="40" cy="75" rx="24" ry="8" fill="hsl(30, 35%, 35%)" />
          <ellipse cx="40" cy="73" rx="22" ry="7" fill="hsl(30, 40%, 40%)" />
          
          {/* Nest walls - layered twigs */}
          <path d="M 18 75 Q 16 65 20 58 L 22 60 Q 19 66 20 75" fill="hsl(30, 35%, 38%)" />
          <path d="M 62 75 Q 64 65 60 58 L 58 60 Q 61 66 60 75" fill="hsl(30, 35%, 38%)" />
          <path d="M 24 75 Q 22 68 24 62 L 26 63 Q 24 68 25 75" fill="hsl(30, 40%, 42%)" />
          <path d="M 56 75 Q 58 68 56 62 L 54 63 Q 56 68 55 75" fill="hsl(30, 40%, 42%)" />
          
          {/* Nest interior - soft lining */}
          <ellipse cx="40" cy="68" rx="18" ry="6" fill="hsl(35, 45%, 55%)" />
          <ellipse cx="40" cy="67" rx="16" ry="5" fill="hsl(35, 50%, 60%)" />

          {/* Egg */}
          <g className="animate-breathe">
            {/* Egg shadow */}
            <ellipse cx="40" cy="66" rx="11" ry="2" fill="hsl(0, 0%, 0%)" opacity="0.2" />
            
            {/* Egg body */}
            <ellipse cx="40" cy="56" rx="10" ry="13" fill="hsl(35, 30%, 88%)" stroke="hsl(35, 25%, 75%)" strokeWidth="1" />
            
            {/* Egg spots/texture */}
            <ellipse cx="36" cy="52" rx="2" ry="2.5" fill="hsl(30, 25%, 70%)" opacity="0.4" />
            <ellipse cx="43" cy="55" rx="1.5" ry="2" fill="hsl(30, 25%, 70%)" opacity="0.4" />
            <ellipse cx="38" cy="59" rx="2" ry="2.5" fill="hsl(30, 25%, 70%)" opacity="0.4" />
            
            {/* Egg highlight */}
            <ellipse cx="37" cy="50" rx="3" ry="4" fill="white" opacity="0.3" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NestWithEgg;
