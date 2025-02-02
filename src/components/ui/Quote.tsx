"use client"
import React from "react"
import { motion } from "framer-motion"

export default function QuoteSection() {
  return (
      <div className="p-4 md:p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Corner Dots */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-emerald-500 rounded-full" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full" />

        {/* Border Lines */}
        <div className="absolute top-1 left-1 right-3 h-px bg-gradient-to-r from-white via-zinc-800 to-black" />
        <div className="absolute bottom-1 left-2 right-2 h-px bg-gradient-to-r from-white via-zinc-800 to-black" />
        <div className="absolute left-1 top-2 bottom-2 w-px bg-gradient-to-b from-white via-zinc-800 to-black" />
        <div className="absolute right-1 top-2 bottom-2 w-px bg-gradient-to-b from-white via-zinc-800 to-black" />

        <div className="p-8 md:p-12">
          <blockquote className="text-lg md:text-xl text-primary-400 italic">
            "To be insanely hopeful even after all that, you call it madness, I call it strength."
          </blockquote>
        </div>
      </motion.div>
    </div>

  )
}

