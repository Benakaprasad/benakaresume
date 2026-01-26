import { useCallback, useRef } from 'react';

// Sound URLs - using free owl sounds
const SOUNDS = {
  hoot: 'https://assets.mixkit.co/active_storage/sfx/2418/2418-preview.mp3',
  wing: 'https://assets.mixkit.co/active_storage/sfx/123/123-preview.mp3',
  sleepy: 'https://assets.mixkit.co/active_storage/sfx/2417/2417-preview.mp3',
};

export const useOwlSounds = () => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const playSound = useCallback((sound: keyof typeof SOUNDS, volume = 0.3) => {
    try {
      // Create or reuse audio element
      if (!audioRefs.current[sound]) {
        audioRefs.current[sound] = new Audio(SOUNDS[sound]);
      }
      
      const audio = audioRefs.current[sound];
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Ignore autoplay errors - user hasn't interacted yet
      });
    } catch (error) {
      // Silently fail - sound is non-essential
      console.log('Sound playback failed');
    }
  }, []);

  const playHoot = useCallback(() => playSound('hoot', 0.4), [playSound]);
  const playWingFlap = useCallback(() => playSound('wing', 0.2), [playSound]);
  const playSleepy = useCallback(() => playSound('sleepy', 0.3), [playSound]);

  return { playHoot, playWingFlap, playSleepy };
};
