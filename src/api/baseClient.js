const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

function getAuthToken() {
  return localStorage.getItem('ecovoice_token')
}

function handleResponse(response) {
  return response.json().then((payload) => {
    if (!response.ok) {
      const error = new Error(payload?.message || 'API request failed')
      error.status = response.status
      error.payload = payload
      throw error
    }
    return payload
  })
}

export async function request(endpoint, { method = 'GET', body, headers = {}, auth = true } = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (auth) {
    const token = getAuthToken()
    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`
    }
  }

  const response = await fetch(url, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })

  return handleResponse(response)
}

export function setAuthToken(token) {
  localStorage.setItem('ecovoice_token', token)
}

export function removeAuthToken() {
  localStorage.removeItem('ecovoice_token')
}
