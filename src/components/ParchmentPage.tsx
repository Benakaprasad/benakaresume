import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ParchmentPageProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  children: React.ReactNode;
}

const ParchmentPage: React.FC<ParchmentPageProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  children,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pt-24">
      <div className="relative w-full max-w-4xl">
        {/* Parchment edges/torn effect */}
        <div className="absolute -inset-2 bg-gradient-to-br from-parchment-border/20 to-transparent rounded-2xl blur-sm" />
        
        {/* Main parchment */}
        <div className="relative parchment-texture min-h-[600px] p-12 rounded-xl border-4 border-parchment-border/60 shadow-2xl">
          {/* Decorative corner flourishes */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-parchment-border/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-parchment-border/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-parchment-border/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-parchment-border/40 rounded-br-lg" />
          
          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {children}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between">
            <button
              onClick={onPrevious}
              disabled={currentPage === 0}
              className="page-arrow"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Page indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentPage 
                      ? 'bg-primary w-4' 
                      : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={onNext}
              disabled={currentPage === totalPages - 1}
              className="page-arrow"
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParchmentPage;
