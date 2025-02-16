import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const helloInLanguages = [
  "Hello",
  "Bonjour",
  "Hola",
  "Olá",
  "Здравствуйте",
  "こんにちは",
];

const SplashScreen = ({ onFinish, duration = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % helloInLanguages.length);
        setFade(false);
      }, 200); // Slightly longer fade out time for better visibility
    }, 500); // Slightly longer interval for better readability

    // Set a timeout to finish the splash screen
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      if (onFinish) onFinish();
    }, duration);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [onFinish, duration]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      zIndex: 9999,
    }}>
      <div 
        style={{
          color: '#FFFFFF',
          fontSize: '3rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontWeight: 300,
          transition: 'opacity 200ms',
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
  duration: PropTypes.number,
};

export default SplashScreen;