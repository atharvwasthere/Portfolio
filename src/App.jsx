import './App.css'
import Landing from './pages/Landing'
import { ThemeProvider } from './components/theme-provider'
function App() {

  return (
    <ThemeProvider defaultTheme='light' storageKey = "vite-ui-theme">
    <div className='min-h-screen flex bg-background text-foreground'>
      <Landing />
    </div>  
    </ThemeProvider>

  )
}

export default App
