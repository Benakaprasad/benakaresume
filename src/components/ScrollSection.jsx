import { useEffect, useRef, useState } from 'react';

const ScrollSection = ({ children, index }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationDirection = () => {
    const directions = ['slide-left', 'slide-right', 'slide-up', 'slide-left', 'slide-right'];
    return directions[index % directions.length];
  };

  return (
    <div
      ref={sectionRef}
      className={`scroll-section ${getAnimationDirection()} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
