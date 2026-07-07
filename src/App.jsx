import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'
import Toast from './components/Toast'
import HomePage from './pages/HomePage'
import CommunityPage from './pages/CommunityPage'
import ComplaintsPage from './pages/ComplaintsPage'
import ClimateMapPage from './pages/ClimateMapPage'
import LearnPage from './pages/LearnPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DashboardPage from './pages/DashboardPage'
import AuthPage from './pages/AuthPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import PetitionsPage from './pages/PetitionsPage'
import CarbonCalculatorPage from './pages/CarbonCalculatorPage'
import AIAssistantPage from './pages/AIAssistantPage'
import { AuthProvider } from './context/AuthContext'

function AppContent() {
  const location = useLocation()
  const [theme, setTheme] = useState('light')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [notification, setNotification] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    if (!toastVisible) {
      return undefined
    }

    const timeout = window.setTimeout(() => setToastVisible(false), 3200)
    return () => window.clearTimeout(timeout)
  }, [toastVisible])

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  const handleNotify = (message) => {
    setNotification(message)
    setToastVisible(true)
  }

  const workspaceRoutes = ['/dashboard', '/community', '/complaints', '/petitions', '/climate-map', '/carbon-calculator', '/ai-assistant']
  const showSidebar = workspaceRoutes.includes(location.pathname)
  const showBreadcrumb = location.pathname !== '/' && location.pathname !== '/auth' && location.pathname !== '/forgot-password'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 transition-colors dark:bg-slate-950 dark:text-slate-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} onNotify={handleNotify} />
      <main className="py-8">
  {showBreadcrumb && (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb />
    </div>
  )}

  <div className="flex flex-col gap-6 lg:flex-row">
    {showSidebar && (
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 lg:max-w-fit">
        <Sidebar />
      </div>
    )}

    <div className="flex-1">
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/community"
          element={<CommunityPage />}
        />

        <Route
          path="/complaints"
          element={<ComplaintsPage />}
        />

        <Route
          path="/climate-map"
          element={<ClimateMapPage />}
        />

        <Route
          path="/learn"
          element={<LearnPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/dashboard"
          element={
            user
              ? <DashboardPage />
              : <Navigate to="/auth" replace />
          }
        />

        <Route
          path="/auth"
          element={
            !user
              ? <AuthPage />
              : <Navigate to="/dashboard" replace />
          }
        />

        <Route
          path="/login"
          element={
            !user
              ? <AuthPage />
              : <Navigate to="/dashboard" replace />
          }
        />

        <Route
          path="/signup"
          element={
            !user
              ? <AuthPage />
              : <Navigate to="/dashboard" replace />
          }
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route
          path="/petitions"
          element={<PetitionsPage />}
        />

        <Route
          path="/carbon-calculator"
          element={<CarbonCalculatorPage />}
        />

        <Route
          path="/ai-assistant"
          element={<AIAssistantPage />}
        />

        <Route
          path="*"
          element={<HomePage />}
        />

      </Routes>
    </div>
  </div>
</main>
      <Footer />
      <Toast message={notification} type="info" visible={toastVisible} />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
