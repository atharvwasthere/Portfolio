import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import { lazy, Suspense } from "react"
import "./index.css"
import App from "./App.jsx"
// import "./fonts.css";
import { ThemeProvider } from "./components/theme-provider"

// Lazy imports
const BlogSection = lazy(() => import("./components/Blogs"))
const ProjectPage = lazy(() => import("./pages/ProjectPage"))

// Exporting at least one component so Fast Refresh can track it
export function Root() {
  return (
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
}

createRoot(document.getElementById("root")).render(<Root />)