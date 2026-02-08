const Branch = () => {
  return (
    <div className="fixed top-20 right-0 md:top-20 md:right-0 z-30 pointer-events-none">
      <svg width="300" height="110" viewBox="0 0 300 110" className="drop-shadow-lg">
        <g>
          {/* Extended branch for both owls */}
          <path 
            d="M 0 90 Q 75 87 150 90 Q 225 93 300 88" 
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path 
            d="M 0 90 Q 75 85 150 88 Q 225 91 300 86" 
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Small twigs for texture */}
          <path d="M 50 87 L 45 80" stroke="hsl(25, 45%, 32%)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 150 88 L 145 82" stroke="hsl(25, 45%, 32%)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 250 89 L 255 83" stroke="hsl(25, 45%, 32%)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Leaves scattered along branch */}
          <ellipse cx="40" cy="83" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-25, 40, 83)" />
          <ellipse cx="260" cy="82" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(20, 260, 82)" />
          <ellipse cx="140" cy="85" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-10, 140, 85)" />
          
          {/* Branch knots */}
          <circle cx="80" cy="88" r="2" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="200" cy="89" r="1.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default Branch;
