import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AnimatedUnderline = ({ 
  children, 
  className = "", 
  strokeColor = "#7043EC", 
  strokeWidth = 2,
  width = 37,
  height = 8
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute -bottom-[1px] left-0 right-0 h-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg width={width} height={height} viewBox="0 0 37 8" fill="none">
              <motion.path
                d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  strokeDasharray: 84.20591735839844,
                  strokeDashoffset: 84.20591735839844,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 1,
                }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedUnderline;