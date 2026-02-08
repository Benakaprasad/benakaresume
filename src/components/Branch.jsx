const Branch = () => {
  return (
    <div className="fixed top-[146px] md:top-[162px] right-0 z-30 pointer-events-none">
      <svg 
        width="350" 
        height="20" 
        viewBox="0 0 350 20" 
        className="drop-shadow-lg"
      >
        <g>
          {/* Main branch - horizontal at the top of SVG */}
          <path 
            d="M 0 8 Q 87.5 6 175 8 Q 262.5 10 350 6" 
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path 
            d="M 0 8 Q 87.5 5 175 7 Q 262.5 9 350 5" 
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Small twigs */}
          <path d="M 60 6 L 55 1" stroke="hsl(25, 45%, 32%)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 175 7 L 173 2" stroke="hsl(25, 45%, 32%)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 290 6 L 295 1" stroke="hsl(25, 45%, 32%)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Leaves on branch */}
          <ellipse cx="45" cy="4" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-20, 45, 4)" />
          <ellipse cx="310" cy="3" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(15, 310, 3)" />
          <ellipse cx="150" cy="5" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(5, 150, 5)" />
          <ellipse cx="220" cy="7" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-8, 220, 7)" />
          
          {/* Branch knots */}
          <circle cx="100" cy="7" r="2" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="250" cy="7" r="1.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default Branch;
