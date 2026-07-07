import { request } from './baseClient.js'

export function fetchDashboardOverview() {
  return request('/dashboard/overview')
}

export function fetchLiveMetrics() {
  return request('/dashboard/metrics')
}

export function fetchRoleInsights(role) {
  return request(`/dashboard/roles/${role}`)
}
