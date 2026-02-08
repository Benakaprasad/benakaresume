const Branch = () => {
  return (
    <div className="fixed top-4 left-20 z-30">
      <svg width="100" height="110" viewBox="0 0 100 110" className="drop-shadow-lg">
        <g>
          {/* Main branch */}
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
      </svg>
    </div>
  );
};

export default Branch;
