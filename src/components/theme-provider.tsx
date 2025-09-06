import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(storageKey) as Theme | null
      return saved ?? defaultTheme
    } catch {
      return defaultTheme
    }
  })

  // Keep a stable media query ref
  const mqlRef = useRef<MediaQueryList | null>(null)
  if (typeof window !== "undefined" && !mqlRef.current) {
    mqlRef.current = window.matchMedia("(prefers-color-scheme: dark)")
  }

  // Resolve the *actual* theme we will apply as a class
  const resolvedTheme: "dark" | "light" = useMemo(() => {
    if (theme === "system") {
      return mqlRef.current?.matches ? "dark" : "light"
    }
    return theme
  }, [theme])

  // Apply classes before paint to avoid a “first click does nothing” feel
  useLayoutEffect(() => {
    const root = document.documentElement
    // Tailwind cares about the 'dark' class only; no need for 'light'
    root.classList.toggle("dark", resolvedTheme === "dark")
    // Helps native form controls match
    root.style.colorScheme = resolvedTheme
  }, [resolvedTheme])

  // Attach/remove system listener only when theme === 'system'
  useEffect(() => {
    const mql = mqlRef.current
    if (!mql) return

    if (theme !== "system") return // ensure no listener when manual mode

    const handle = () => {
      // When OS theme changes while in 'system', re-apply immediately
      const next = mql.matches ? "dark" : "light"
      const root = document.documentElement
      root.classList.toggle("dark", next === "dark")
      root.style.colorScheme = next
    }

    mql.addEventListener("change", handle)
    return () => mql.removeEventListener("change", handle)
  }, [theme])

  const value = useMemo<ThemeProviderState>(() => ({
    theme,
    setTheme: (t: Theme) => {
      try {
        localStorage.setItem(storageKey, t)
      } catch {}
      setTheme(t)
    },
  }), [theme, storageKey])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
