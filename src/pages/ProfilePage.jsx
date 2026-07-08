import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import DashboardPage from './DashboardPage'
import Sidebar from '../components/Sidebar'
import GlobalCommunityPage from './GlobalCommunityPage'
import InteractiveMapPage from './InteractiveMapPage'
import CarbonCalculatorPage from './CarbonCalculatorPage'
import PetitionsPage from './PetitionsPage'
import ComplaintsPage from './ComplaintsPage'
import AIAssistantPage from './AIAssistantPage'
import { useState } from 'react'
 
function ProfilePage() {
  const { user } = useAuth()
 
  if (!user) {
    return <Navigate to="/auth" replace />
  }
 
  const [active, setActive] = useState('/dashboard')
 
  function renderActive() {
    switch (active) {
      case '/dashboard':
        return (
          <>
            <section className="rounded-[2rem] border border-emerald-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Profile</p>
                    <h1 className="text-3xl font-semibold text-slate-900">{user?.name || 'Citizen'}</h1>
                    <p className="text-slate-600">{user?.email || 'Active EcoVoice member'}</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Member activity</p>
                  <p className="mt-1">Your EcoVoice dashboard and community activity live here.</p>
                </div>
              </div>
            </section>
            <div className="rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm">
              <DashboardPage />
            </div>
          </>
        )
      case '/global-community':
        return <GlobalCommunityPage />
      case '/interactive-map':
        return <InteractiveMapPage />
      case '/carbon-calculator':
        return <CarbonCalculatorPage />
      case '/petitions':
        return <PetitionsPage />
      case '/complaints':
        return <ComplaintsPage />
      case '/ai-assistant':
        return <AIAssistantPage />
      default:
        return <DashboardPage />
    }
  }
 
  return (
    <div className="flex w-full">
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1 space-y-8 p-8">
        {renderActive()}
      </main>
    </div>
  )
}
 
export default ProfilePage
 