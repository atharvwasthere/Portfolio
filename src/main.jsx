// main.jsx
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import { lazy, Suspense } from "react"
import "./index.css"
import App from "./App.jsx"
import "./segment.css"
import "./satoshi.css"
import "./cabinetGrotesk.css"
import "./zodiak.css"
import "./autography.css"
import { ThemeProvider } from "./components/theme-provider"

// Lazy imports
const BlogSection = lazy(() => import("./components/Blogs"))
const ProjectPage = lazy(() => import("./pages/ProjectPage"))

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Blogs" element={<BlogSection />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
)
