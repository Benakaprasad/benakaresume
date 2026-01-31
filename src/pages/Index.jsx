import { useState, useEffect, useCallback } from 'react';
import Owl from '@/components/Owl.jsx';
import Terminal from '@/components/Terminal.jsx';
import Navigation from '@/components/Navigation.jsx';
import ThemeToggle from '@/components/ThemeToggle.jsx';
import ParchmentPage from '@/components/ParchmentPage.jsx';
import LandingStage from '@/components/LandingStage.jsx';
import HomePage from '@/components/pages/HomePage.jsx';
import AboutPage from '@/components/pages/AboutPage.jsx';
import ExperiencePage from '@/components/pages/ExperiencePage.jsx';
import SkillsPage from '@/components/pages/SkillsPage.jsx';
import ContactPage from '@/components/pages/ContactPage.jsx';

const PAGES = [
  { component: HomePage },
  { component: AboutPage },
  { component: ExperiencePage },
  { component: SkillsPage },
  { component: ContactPage },
];

const Index = () => {
  const [stage, setStage] = useState('landing');
  const [darkMode, setDarkMode] = useState(false);
  const [owlState, setOwlState] = useState('sleeping');
  const [currentPage, setCurrentPage] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [isLandingHiding, setIsLandingHiding] = useState(false);

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

  const handleOwlClick = useCallback(() => {
    if (stage === 'landing') {
      setShowHint(false);
      setIsLandingHiding(true);
      setOwlState('waking');
      
      setTimeout(() => {
        setOwlState('flying');
        setShowMail(true);
        
        setTimeout(() => {
          setStage('terminal');
          setShowMail(false);
          setOwlState('sitting');
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

  const handleTerminalComplete = useCallback(() => {
    setStage('resume');
    setOwlState(darkMode ? 'sitting' : 'sleeping');
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(PAGES.length - 1, prev + 1));
  }, []);

  const CurrentPageComponent = PAGES[currentPage].component;

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
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

      {stage === 'terminal' && (
        <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
          <Terminal onComplete={handleTerminalComplete} />
        </div>
      )}

      {stage === 'resume' && (
        <>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <ThemeToggle isDarkMode={darkMode} onToggle={toggleTheme} />
          
          <ParchmentPage
            currentPage={currentPage}
            totalPages={PAGES.length}
            onPrevious={handlePrevPage}
            onNext={handleNextPage}
          >
            <CurrentPageComponent />
          </ParchmentPage>
        </>
      )}
    </div>
  );
};

export default Index;
