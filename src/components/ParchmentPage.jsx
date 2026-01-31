import { ChevronLeft, ChevronRight } from 'lucide-react';

const ParchmentPage = ({ currentPage, totalPages, onPrevious, onNext, children }) => {
  return (
    <div className="flex items-start justify-center min-h-screen p-4 md:p-8 pt-20 md:pt-24 pb-8">
      <div className="relative w-full max-w-4xl">
        {/* Background glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
        
        {/* Main parchment */}
        <div className="relative parchment-texture min-h-[70vh] p-6 md:p-12 rounded-2xl border border-parchment-border/30 shadow-2xl">
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
          
          {/* Content */}
          <div className="pb-20">
            {children}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            <button
              onClick={onPrevious}
              disabled={currentPage === 0}
              className="page-arrow"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Page indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentPage 
                      ? 'bg-primary w-6' 
                      : 'bg-primary/30 w-2'
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
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParchmentPage;
