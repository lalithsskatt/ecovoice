import { request } from './baseClient.js'

export function submitComplaint(details) {
  return request('/complaints', { method: 'POST', body: details })
}

export function fetchComplaints({ status, page = 1 } = {}) {
  const query = new URLSearchParams({ status, page }).toString()
  return request(`/complaints?${query}`)
}

export function fetchComplaintStatus(id) {
  return request(`/complaints/${id}`)
}
