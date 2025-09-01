import { useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './theme-provider';

const helloInLanguages = [
  'नमस्ते ',
  'Hello',
  'Bonjour',
  'Hola',
  'Olá',
  'Здравствуйте',
  'こんにちは',
];

const DISPLAY_MS = 200; // hold each word
const FADE_MS = 200;    // fade duration

const SplashScreen = ({ onFinish }) => {
  const { theme, resolvedTheme } = useTheme();        // <- many providers expose this shape
  const activeTheme = resolvedTheme ?? theme ?? 'light';

  const { backgroundColor, color } = useMemo(
    () =>
      activeTheme === 'dark'
        ? { backgroundColor: '#000000', color: '#ffffff' }
        : { backgroundColor: '#ffffe3', color: '#000000' },
    [activeTheme]
  );

  // console.log({ theme, resolvedTheme });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // ensure onFinish runs only once
  const finishedRef = useRef(false);

  // keep handles to clear timeouts on unmount/re-run
  const holdTimeoutRef = useRef(null);
  const fadeTimeoutRef = useRef(null);
  const finishTimeoutRef = useRef(null);

  useEffect(() => {
    // if we're at the last word, give it a beat then finish
    if (currentIndex === helloInLanguages.length - 1) {
      if (!finishedRef.current) {  // protects against StrictMode double mount in dev
        finishedRef.current = true;
        finishTimeoutRef.current = setTimeout(() => {
          onFinish?.();
        }, DISPLAY_MS + FADE_MS);
      }
      return () => clearTimeout(finishTimeoutRef.current);
    }

    // 1) hold the current word visible
    holdTimeoutRef.current = setTimeout(() => {
      // 2) fade out
      setFade(true);

      // 3) after fade-out, switch to next word and fade back in
      fadeTimeoutRef.current = setTimeout(() => {
        setCurrentIndex((i) => i + 1);
        setFade(false);
      }, FADE_MS);
    }, DISPLAY_MS);

    return () => {
      clearTimeout(holdTimeoutRef.current);
      clearTimeout(fadeTimeoutRef.current);
    };
  }, [currentIndex, onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          color,
          fontSize: '3rem',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontWeight: 300,
          transition: `opacity ${FADE_MS}ms`,
          opacity: fade ? 0 : 1,
        }}
      >
        {helloInLanguages[currentIndex]}
      </div>
    </div>
  );
};

SplashScreen.propTypes = {
  onFinish: PropTypes.func,
};

export default SplashScreen;
