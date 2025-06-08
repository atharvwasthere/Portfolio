import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import './segment.css'
import './satoshi.css'
import './cabinetGrotesk.css'
import BlogSection from './components/Blogs';
import { ThemeProvider } from './components/theme-provider';
import ProjectPage from './pages/ProjectPage';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Blogs" element={<BlogSection />} />
                <Route path="/project/:slug" element={<ProjectPage />} />


            </Routes>
        </BrowserRouter>
    </ThemeProvider>

)
