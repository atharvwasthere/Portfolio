import { useState, useEffect } from "react"
import {  motion } from "framer-motion"
import ContactCards from "./ContactCards"

import mypic3 from '../data/mee3.png'
import mypic4 from '../data/mee4.png'


const Contact = () => {
  const images = [
    mypic3, mypic4
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change every 4 seconds for more contemplative viewing

      return () => clearInterval(interval)
    }
  }, [images.length])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x: x * 10, y: y * 10 }) // Subtle parallax range

    // Track actual cursor position for the floating text
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setCursorPosition({ x: 0, y: 0 })
  }

  return (
    <>
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <ContactCards />

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Subtle background gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)",
                    "linear-gradient(225deg, rgba(147, 51, 234, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Main image with parallax and hover effects */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Profile"
                  className="object-cover w-full h-full transition-all duration-500 group-hover:brightness-110 group-hover:saturate-110"
                  style={{
                    filter: "grayscale(20%) contrast(0.9)",
                  }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>

              {/* Text overlay that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                animate={{
                  x: mousePosition.x * 0.3,
                  y: mousePosition.y * 0.3,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-white space-y-2"
                >
                  <h3 className="text-2xl font-bold tracking-tight">Atharv Singh</h3>
                  <p className="text-sm opacity-90 font-medium">
                    Crafting useful, scalable, thoughtful products
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 mt-3"></div>
                </motion.div>
              </motion.div>

              {/* Cursor follower with "hey it's me" text */}
              <motion.div
                className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  left: cursorPosition.x,
                  top: cursorPosition.y,
                  transform: 'translate(-50%, -120%)',
                }}
                animate={{
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-green-100/10 text-green-400  dark:text-cyan-400 dark:bg-teal-200/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                  <span className="text-xs font-medium  whitespace-nowrap">
                    hey it&apos;s me 🗿
                  </span>
                </div>
              </motion.div>

              {/* Subtle light sweep effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)",
                  transform: "translateX(-100%)"
                }}
                animate={{
                  transform: ["translateX(-100%)", "translateX(100%)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />

              {/* Soft vignette */}
              <div className="absolute inset-0 rounded-2xl shadow-inner"
                style={{
                  boxShadow: "inset 0 0 60px rgba(0,0,0,0.1)"
                }}
              />

              {/* Breathing/pulse effect on border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Animated quote with staggered reveal */}
            <motion.blockquote 
              className="border-l-4 border-primary pl-4 italic text-cyan-500/90 dark:text-green-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                &quot;To be insanely hopeful even after all that, you call it madness, 
                <br />
                I call it strength.&quot;
              </motion.span>
            </motion.blockquote>

            {/* Minimal image indicators - only show if multiple images */}
            {images.length > 1 && (
              <motion.div
                className="flex justify-center space-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex
                        ? 'bg-primary scale-125'
                        : 'bg-gray-300/60 dark:bg-gray-600/60 hover:bg-gray-400/80'
                      }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact