const Branch = () => {
  return (
    <div className="fixed top-4 right-4 md:top-8 md:right-16 z-30 pointer-events-none">
      <svg 
        width="120" 
        height="150" 
        viewBox="0 0 120 150" 
        className="drop-shadow-lg"
      >
        <g>
          {/* Main branch - extended for both owls */}
          <path 
            d="M -30 135 Q 10 130 60 135 Q 110 140 500 132" 
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path 
            d="M -30 135 Q 10 128 60 133 Q 110 138 500 130" 
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Leaves on branch */}
          <ellipse cx="5" cy="128" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(-20, 5, 128)" />
          <ellipse cx="460" cy="125" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(15, 460, 125)" />
          <ellipse cx="50" cy="130" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(5, 50, 130)" />
          <ellipse cx="95" cy="132" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-8, 95, 132)" />
        </g>
      </svg>
    </div>
  );
};

export default Branch;
