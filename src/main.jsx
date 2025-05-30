import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import BlogSection from './components/Blogs';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Blogs" element={<BlogSection />} />


            </Routes>
        </BrowserRouter>
    </ThemeProvider>

)
