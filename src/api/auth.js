import { request, setAuthToken, removeAuthToken } from './baseClient.js'

export async function login(credentials) {
  const payload = await request('/auth/login', { method: 'POST', body: credentials, auth: false })
  if (payload.token) {
    setAuthToken(payload.token)
  }
  return payload
}

export async function signup(details) {
  const payload = await request('/auth/signup', { method: 'POST', body: details, auth: false })
  if (payload.token) {
    setAuthToken(payload.token)
  }
  return payload
}

export async function refreshToken() {
  return request('/auth/refresh', { method: 'POST' })
}

export function logout() {
  removeAuthToken()
}
