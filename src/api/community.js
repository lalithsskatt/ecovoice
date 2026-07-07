import { request } from './baseClient.js'

export function fetchCommunityFeed({ page = 1, pageSize = 10 } = {}) {
  return request(`/community/feed?page=${page}&pageSize=${pageSize}`)
}

export function createCommunityPost(post) {
  return request('/community/posts', { method: 'POST', body: post })
}

export function fetchTrends() {
  return request('/community/trends')
}
