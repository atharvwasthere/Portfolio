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

const SplashScreen = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          // If we've reached the last greeting, clear interval and finish
          if (prevIndex === helloInLanguages.length - 1) {
            clearInterval(intervalId);
            if (onFinish) onFinish();
            return prevIndex;
          }
          return prevIndex + 1;
        });
        setFade(false);
      }, 200);
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [onFinish]);

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
};

export default SplashScreen;