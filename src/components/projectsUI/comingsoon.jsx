import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import PropTypes from "prop-types"

export function ComingSoon({
  title = "Coming Soon",
  subtitle = "This project is currently in development",
  className,
}) {
  const [dots, setDots] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("min-h-screen flex items-center justify-center bg-background text-foreground", className)}>
      <div
        className={cn(
          "text-center space-y-8 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        {/* Main Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-satoshi  font-bold tracking-tight">{title}</h1>
          <div className="flex items-center justify-center gap-1">
            <span className="text-lg font-satoshi text-muted-foreground">{subtitle}</span>
            <span className="text-primary font-mono text-xl w-8 text-left">{dots}</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="space-y-4">
          <div className="w-64 h-1 bg-muted rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse"
              style={{ width: "60%" }}
            />
          </div>
          <p className="text-sm font-satoshi text-muted-foreground font-mono">Building something amazing...</p>
        </div>

        {/* Minimal Animation Elements */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn("w-2 h-2 rounded-full bg-primary", "animate-bounce")}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Terminal-style Status */}
        <div className="bg-card  text-card-foreground rounded-lg p-4 font-mono text-sm max-w-md mx-auto border border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-accent/70" />
              <div className="w-3 h-3 rounded-full bg-accent/40" />
            </div>
            <span className="text-muted-foreground">~/project-status</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">$</span>
              <span className="animate-pulse text-primary">npm run build</span>
            </div>
            <div className="text-muted-foreground">✓ Compiling components...</div>
            <div className="text-muted-foreground">✓ Optimizing for production...</div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span className="text-primary">Almost ready...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ComingSoon.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
}
