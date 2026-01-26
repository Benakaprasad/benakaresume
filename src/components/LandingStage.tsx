import React from 'react';

interface LandingStageProps {
  showHint: boolean;
  isHiding: boolean;
}

const LandingStage: React.FC<LandingStageProps> = ({ showHint, isHiding }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen px-4 transition-all duration-700 ${isHiding ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
          Welcome to My
          <span className="block text-primary">Portfolio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif">
          An owl has a message for you...
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-muted-foreground">
            Click the owl to begin your journey
          </p>
          
          {showHint && (
            <div className="flex items-center gap-2 animate-bounce">
              <span className="text-4xl">👉</span>
              <span className="text-muted-foreground font-medium">Look to the bottom right!</span>
            </div>
          )}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-8 opacity-30">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
          <div className="text-2xl">🦉</div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default LandingStage;
