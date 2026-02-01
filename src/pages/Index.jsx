import { useState, useEffect, useCallback, useRef } from 'react';
import Owl from '@/components/Owl.jsx';
import Navigation from '@/components/Navigation.jsx';
import ThemeToggle from '@/components/ThemeToggle.jsx';
import LandingStage from '@/components/LandingStage.jsx';
import ParticleBackground from '@/components/ParticleBackground.jsx';
import ScrollSection from '@/components/ScrollSection.jsx';
import HomePage from '@/components/pages/HomePage.jsx';
import AboutPage from '@/components/pages/AboutPage.jsx';
import ExperiencePage from '@/components/pages/ExperiencePage.jsx';
import SkillsPage from '@/components/pages/SkillsPage.jsx';
import ContactPage from '@/components/pages/ContactPage.jsx';

const PAGES = [
  { component: HomePage, label: 'Home' },
  { component: AboutPage, label: 'About' },
  { component: ExperiencePage, label: 'Experience' },
  { component: SkillsPage, label: 'Skills' },
  { component: ContactPage, label: 'Contact' },
];

const Index = () => {
  const [stage, setStage] = useState('landing');
  const [darkMode, setDarkMode] = useState(false);
  const [owlState, setOwlState] = useState('sleeping');
  const [showHint, setShowHint] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [isLandingHiding, setIsLandingHiding] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (stage === 'resume' && owlState !== 'disturbed' && owlState !== 'flapping' && owlState !== 'flyingAway' && owlState !== 'returning') {
      setOwlState(darkMode ? 'sitting' : 'sleeping');
    }
  }, [darkMode, stage]);

  // Track which section is active for navigation highlighting
  useEffect(() => {
    if (stage !== 'resume') return;

    const observers = sectionRefs.current.map((ref, idx) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(idx);
          }
        },
        { threshold: [0.3, 0.5] }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, [stage]);

  const handleOwlClick = useCallback(() => {
    if (stage === 'landing') {
      setShowHint(false);
      setIsLandingHiding(true);
      setOwlState('waking');
      
      setTimeout(() => {
        setOwlState('flying');
        setShowMail(true);
        
        setTimeout(() => {
          setStage('resume');
          setShowMail(false);
          setOwlState(darkMode ? 'sitting' : 'sleeping');
        }, 2500);
      }, 600);
    } else if (stage === 'resume') {
      if (darkMode) {
        setOwlState('disturbed');
        setTimeout(() => {
          setOwlState('flyingAway');
          setTimeout(() => {
            setOwlState('returning');
            setTimeout(() => {
              setOwlState('sitting');
            }, 1000);
          }, 20000);
        }, 1000);
      } else {
        setOwlState('flapping');
        setTimeout(() => {
          setOwlState('sleeping');
        }, 3000);
      }
    }
  }, [stage, darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const scrollToSection = useCallback((idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 relative">
      {/* Particle Background */}
      <ParticleBackground isDarkMode={darkMode} />
      
      {/* Owl - always visible */}
      {(owlState !== 'flyingAway' || stage !== 'resume') && owlState !== 'returning' && (
        <Owl
          state={owlState}
          isDarkMode={darkMode}
          stage={stage}
          onClick={handleOwlClick}
          showMail={showMail}
        />
      )}
      
      {owlState === 'flyingAway' && (
        <Owl
          state="flyingAway"
          isDarkMode={darkMode}
          stage={stage}
          onClick={() => {}}
          showMail={false}
        />
      )}
      
      {owlState === 'returning' && (
        <Owl
          state="returning"
          isDarkMode={darkMode}
          stage={stage}
          onClick={() => {}}
          showMail={false}
        />
      )}

      {stage === 'landing' && <LandingStage showHint={showHint} isHiding={isLandingHiding} />}

      {stage === 'resume' && (
        <>
          <Navigation currentPage={activeSection} onPageChange={scrollToSection} />
          <ThemeToggle isDarkMode={darkMode} onToggle={toggleTheme} />
          
          <div className="relative z-10">
            {PAGES.map((page, idx) => (
              <section
                key={idx}
                ref={el => sectionRefs.current[idx] = el}
                className="min-h-screen flex items-start justify-center p-4 md:p-8 pt-20 md:pt-24 pb-8"
              >
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
                    
                    {/* Content with scroll animation */}
                    <ScrollSection index={idx}>
                      <page.component />
                    </ScrollSection>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
