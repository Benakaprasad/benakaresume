import React, { useState, useEffect, useCallback } from 'react';
import Owl, { OwlState } from '@/components/Owl';
import Terminal from '@/components/Terminal';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import ParchmentPage from '@/components/ParchmentPage';
import LandingStage from '@/components/LandingStage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ExperiencePage from '@/components/pages/ExperiencePage';
import SkillsPage from '@/components/pages/SkillsPage';
import ContactPage from '@/components/pages/ContactPage';
import { useOwlSounds } from '@/hooks/useOwlSounds';

type Stage = 'landing' | 'terminal' | 'resume';

const PAGES = [
  { component: HomePage },
  { component: AboutPage },
  { component: ExperiencePage },
  { component: SkillsPage },
  { component: ContactPage },
];

const Index: React.FC = () => {
  const [stage, setStage] = useState<Stage>('landing');
  const [darkMode, setDarkMode] = useState(false);
  const [owlState, setOwlState] = useState<OwlState>('sleeping');
  const [currentPage, setCurrentPage] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [isLandingHiding, setIsLandingHiding] = useState(false);

  const { playHoot, playWingFlap, playSleepy } = useOwlSounds();

  // Hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Update owl state based on dark mode when in resume stage
  useEffect(() => {
    if (stage === 'resume' && owlState !== 'disturbed' && owlState !== 'flapping' && owlState !== 'flyingAway' && owlState !== 'returning') {
      setOwlState(darkMode ? 'sitting' : 'sleeping');
    }
  }, [darkMode, stage]);

  const handleOwlClick = useCallback(() => {
    if (stage === 'landing') {
      setShowHint(false);
      setIsLandingHiding(true); // Start hiding landing text
      playHoot();
      setOwlState('waking');
      
      setTimeout(() => {
        setOwlState('flying');
        playWingFlap();
        setShowMail(true);
        
        setTimeout(() => {
          setStage('terminal');
          setShowMail(false);
          setOwlState('sitting');
        }, 2500);
      }, 600);
    } else if (stage === 'resume') {
      // Disturb the owl!
      if (darkMode) {
        // Dark mode: owl flies away for 20 seconds
        playHoot();
        setOwlState('disturbed');
        setTimeout(() => {
          playWingFlap();
          setOwlState('flyingAway');
          setTimeout(() => {
            // After 20 seconds, owl returns
            playWingFlap();
            setOwlState('returning');
            setTimeout(() => {
              playHoot();
              setOwlState('sitting');
            }, 1000);
          }, 20000);
        }, 1000);
      } else {
        // Light mode: owl flaps and tells user to go away
        playSleepy();
        setOwlState('flapping');
        setTimeout(() => {
          setOwlState('sleeping');
        }, 3000);
      }
    }
  }, [stage, darkMode, playHoot, playWingFlap, playSleepy]);

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
      
      {/* Flying away owl - separate instance for animation */}
      {owlState === 'flyingAway' && (
        <Owl
          state="flyingAway"
          isDarkMode={darkMode}
          stage={stage}
          onClick={() => {}}
          showMail={false}
        />
      )}
      
      {/* Returning owl */}
      {owlState === 'returning' && (
        <Owl
          state="returning"
          isDarkMode={darkMode}
          stage={stage}
          onClick={() => {}}
          showMail={false}
        />
      )}

      {/* Landing Stage */}
      {stage === 'landing' && <LandingStage showHint={showHint} isHiding={isLandingHiding} />}

      {/* Terminal Stage */}
      {stage === 'terminal' && (
        <div className="flex items-center justify-center min-h-screen p-8">
          <Terminal onComplete={handleTerminalComplete} />
        </div>
      )}

      {/* Resume Stage */}
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
