import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// User actions
export const register = payload => api.post('/users/register', payload)
export const login = payload => api.post('/users/login', payload)

// Post actions
export const insertPost = payload => api.post(`/post`, payload)
export const getAllPosts = () => api.get(`/posts`)
export const updatePostById = (id, payload) => api.put(`/post/${id}`, payload)
export const deletePostById = id => api.delete(`/post/${id}`)
export const getPostById = id => api.get(`/post/${id}`)

const apis = {
  register,
  login,
  insertPost,
  getAllPosts,
  updatePostById,
  deletePostById,
  getPostById,
}

export default apis
