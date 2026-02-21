import { useState, useEffect, useCallback, useRef } from 'react';
import Owl from '@/components/Owl.jsx';
import BabyOwl from '@/components/BabyOwl.jsx';
import NestWithEgg from '@/components/NestWithEgg.jsx';
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
import Branch from '@/components/Branch.jsx';
import { useIsMobile } from '@/hooks/use-mobile';

const PAGES = [
  { component: HomePage, label: 'Home' },
  { component: AboutPage, label: 'About' },
  { component: ExperiencePage, label: 'Experience' },
  { component: SkillsPage, label: 'Skills' },
  { component: ContactPage, label: 'Contact' },
];

const Index = () => {
  const isMobile = useIsMobile();

  const [stage, setStage] = useState('landing');
  const [darkMode, setDarkMode] = useState(false);
  const [owlState, setOwlState] = useState('sleeping');
  const [showHint, setShowHint] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [isLandingHiding, setIsLandingHiding] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Baby owl states
  const [babyOwlStage, setBabyOwlStage] = useState('egg');
  const [isEggHatched, setIsEggHatched] = useState(false);
  const [isEggCracking, setIsEggCracking] = useState(false);
  const [showBrokenEgg, setShowBrokenEgg] = useState(false);
  const [showBranch, setShowBranch] = useState(true);

  const isEggHatchedRef = useRef(isEggHatched);
  const babyOwlStageRef = useRef(babyOwlStage);

  useEffect(() => { isEggHatchedRef.current = isEggHatched; }, [isEggHatched]);
  useEffect(() => { babyOwlStageRef.current = babyOwlStage; }, [babyOwlStage]);

  // Check localStorage for hatched state on mount — desktop only
  useEffect(() => {
    if (isMobile) return;
    const hatched = localStorage.getItem('babyOwlHatched') === 'true';
    if (hatched) {
      setIsEggHatched(true);
      setBabyOwlStage('landed');
      setShowBrokenEgg(false);
    }
  }, [isMobile]);

  // Branch visibility — desktop only
  useEffect(() => {
    if (isMobile) return;
    const parentOnBranch =
      owlState === 'sitting' ||
      owlState === 'sleeping' ||
      owlState === 'flapping' ||
      owlState === 'disturbed';
    const babyNeedsBranch =
      babyOwlStage === 'landed' ||
      babyOwlStage === 'hatching' ||
      babyOwlStage === 'flying';
    setShowBranch(parentOnBranch || babyNeedsBranch);
  }, [owlState, babyOwlStage, isMobile]);

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

  // Owl state on theme change — desktop only
  useEffect(() => {
    if (isMobile) return;
    if (
      stage === 'resume' &&
      owlState !== 'disturbed' &&
      owlState !== 'flapping' &&
      owlState !== 'flyingAway' &&
      owlState !== 'returning'
    ) {
      setOwlState(darkMode ? 'sitting' : 'sleeping');
    }
  }, [darkMode, stage, isMobile]);

  // Track active section for nav highlighting
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
    return () => { observers.forEach(obs => obs?.disconnect()); };
  }, [stage]);

  // Owl click:
  // - Landing stage: works identically on ALL devices (full animation)
  // - Resume stage: desktop only (owl not rendered on mobile in resume)
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
      if (isMobile) return; // owl not shown in resume on mobile, safety guard

      if (darkMode) {
        setOwlState('disturbed');
        setTimeout(() => {
          setOwlState('flyingAway');

          if (isEggHatchedRef.current && babyOwlStageRef.current !== 'egg') {
            setTimeout(() => { setBabyOwlStage('followingParent'); }, 800);
          }

          setTimeout(() => {
            setOwlState('returning');

            if (isEggHatchedRef.current && babyOwlStageRef.current !== 'egg') {
              setTimeout(() => { setBabyOwlStage('returningWithParent'); }, 600);
            }

            setTimeout(() => {
              setOwlState('sitting');

              if (isEggHatchedRef.current && babyOwlStageRef.current !== 'egg') {
                setTimeout(() => { setBabyOwlStage('landed'); }, 400);
              }
            }, 1000);
          }, 20000);
        }, 1000);
      } else {
        setOwlState('flapping');
        setTimeout(() => { setOwlState('sleeping'); }, 3000);
      }
    }
  }, [stage, darkMode, isMobile]);

  const handleEggClick = useCallback(() => {
    if (isMobile) return;
    if (isEggHatched || babyOwlStage !== 'egg') return;
    setIsEggCracking(true);
    setTimeout(() => {
      setIsEggCracking(false);
      setShowBrokenEgg(true);
      setBabyOwlStage('hatching');
      setTimeout(() => { setBabyOwlStage('flying'); }, 800);
    }, 800);
  }, [isEggHatched, babyOwlStage, isMobile]);

  const handleSkipAnimation = useCallback(() => {
    setIsLandingHiding(true);
    setTimeout(() => {
      setStage('resume');
      setOwlState(darkMode ? 'sitting' : 'sleeping');
    }, 300);
  }, [darkMode]);

  const handleResetEgg = useCallback(() => {
    if (isMobile) return;
    localStorage.removeItem('babyOwlHatched');
    setIsEggHatched(false);
    setIsEggCracking(false);
    setShowBrokenEgg(false);
    setBabyOwlStage('egg');
  }, [isMobile]);

  const handleBabyOwlLanded = useCallback(() => {
    setBabyOwlStage('landed');
    setIsEggHatched(true);
    setTimeout(() => { setShowBrokenEgg(false); }, 500);
    localStorage.setItem('babyOwlHatched', 'true');
  }, []);

  const toggleTheme = useCallback(() => { setDarkMode(prev => !prev); }, []);

  const scrollToSection = useCallback((idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 relative">
      <ParticleBackground isDarkMode={darkMode} />

      {/* ── DESKTOP ONLY in resume stage ── */}
      {!isMobile && stage === 'resume' && <Branch />}

      {!isMobile && stage === 'resume' && (
        <NestWithEgg
          onEggClick={handleEggClick}
          isHatched={isEggHatched}
          isEggCracking={isEggCracking}
          showBrokenEgg={showBrokenEgg}
        />
      )}

      {!isMobile && stage === 'resume' && babyOwlStage !== 'egg' && (
        <BabyOwl
          stage={babyOwlStage}
          onLanded={handleBabyOwlLanded}
          parentOwlState={owlState}
          isDarkMode={darkMode}
        />
      )}

      {/*
        Owl rendering:
        - Landing stage → show on ALL devices (full animation)
        - Resume stage  → show on DESKTOP only
      */}
      {(stage === 'landing' || !isMobile) &&
        (owlState !== 'flyingAway' || stage !== 'resume') &&
        owlState !== 'returning' && (
          <Owl
            state={owlState}
            isDarkMode={darkMode}
            stage={stage}
            onClick={handleOwlClick}
            showMail={showMail}
          />
        )
      }

      {!isMobile && owlState === 'flyingAway' && (
        <Owl
          state="flyingAway"
          isDarkMode={darkMode}
          stage={stage}
          onClick={() => {}}
          showMail={false}
        />
      )}

      {!isMobile && owlState === 'returning' && (
        <Owl
          state="returning"
          isDarkMode={darkMode}
          stage={stage}
          onClick={() => {}}
          showMail={false}
        />
      )}

      {/* Landing stage — identical on ALL devices */}
      {stage === 'landing' && (
        <LandingStage
          showHint={showHint}
          isHiding={isLandingHiding}
          onSkipAnimation={handleSkipAnimation}
        />
      )}

      {/* Resume stage */}
      {stage === 'resume' && (
        <>
          <Navigation
            currentPage={activeSection}
            onPageChange={scrollToSection}
            babyOwlHatched={isEggHatched}
            onResetEgg={handleResetEgg}
            isMobile={isMobile}
          />
          <ThemeToggle isDarkMode={darkMode} onToggle={toggleTheme} />

          <div className="relative z-10">
            {PAGES.map((page, idx) => (
              <section
                key={idx}
                ref={el => sectionRefs.current[idx] = el}
                className="min-h-screen flex items-start justify-center p-4 md:p-8 pt-20 md:pt-24 pb-8"
              >
                <div className="relative w-full max-w-4xl">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
                  <div className="relative parchment-texture min-h-[70vh] p-6 md:p-12 rounded-2xl border border-parchment-border/30 shadow-2xl">
                    <div className="absolute top-3 left-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                    <div className="absolute top-3 right-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
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
