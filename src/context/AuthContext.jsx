import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('ecovoice_user')
    return stored ? JSON.parse(stored) : null
  })
  const [token, setToken] = useState(localStorage.getItem('ecovoice_token'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

 const login = async (credentials) => {
  const storedUser = JSON.parse(localStorage.getItem('ecovoice_user'))

  if (
    storedUser &&
    storedUser.email === credentials.email
  ) {
    const sessionToken = 'ecovoice-session-token'

    localStorage.setItem('ecovoice_token', sessionToken)

    setUser(storedUser)
    setToken(sessionToken)

    return {
      user: storedUser,
      token: sessionToken,
    }
  }

  throw new Error('Invalid email')
}

 const signup = async (details) => {
  const incomingUser = {
    name: details.name,
    email: details.email,
  }

  const sessionToken = 'ecovoice-session-token'

  localStorage.setItem('ecovoice_user', JSON.stringify(incomingUser))
  localStorage.setItem('ecovoice_token', sessionToken)

  setUser(incomingUser)
  setToken(sessionToken)

  return {
    user: incomingUser,
    token: sessionToken,
  }
}

  const logout = () => {
    localStorage.removeItem('ecovoice_user')
    localStorage.removeItem('ecovoice_token')
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
