import axios from 'axios'

const API = {
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
  setUserAccessToken(token) {
    return axios.put('/api/users/setAccessToken', { token })
  },
  getUser() {
    return axios.get('/api/users/getUser')
  },
  logout() {
    return axios.get('/api/users/logout')
  },
}

export default API
