import axios from 'axios'

const API = {
  post(postData) {
    return axios.post('/api/posts/newPost', postData)
  },
  login(userInfo) {
    return axios.post('/api/users/login', {
      email: userInfo.email,
      password: userInfo.password,
    })
  },
  signUp(userInfo) {
    return axios.post('/api/users/signup', {
      email: userInfo.email,
      password: userInfo.password,
    })
  },
  getUserAccessToken(code) {
    return axios.post('/api/users/getAccessToken', { code })
  },
  setUserAccessToken(token, _id) {
    return axios.put('/api/users/setAccessToken', { token, _id })
  },
  getUser() {
    return axios.get('/api/users/getUser')
  },
  logout() {
    return axios.get('/api/users/logout')
  },
}

export default API
