import axios from 'axios'

const API = {
  signUp(userInfo) {
    return axios.post('/api/users/signup', {
      email: userInfo.email,
      password: userInfo.password,
    })
  },
  login(userInfo) {
    return axios.post('/api/users/login', {
      email: userInfo.email,
      password: userInfo.password,
    })
  },
  logout() {
    return axios.get('/api/users/logout')
  },
  getUserAccessToken(code) {
    return axios.post('/api/users/getAccessToken', { code })
  },
  setUserAccessToken(token, _id) {
    return axios.put('/api/users/setAccessToken', { token, _id })
  },
  createProfile(profile, _id) {
    return axios.post(`/api/profiles/newProfile/${_id}`, { profile })
  },
  updateProfile(newProfile, _id) {
    return axios.put(`/api/profiles/updateProfile/${_id}`, { newProfile })
  },
  post(postData) {
    return axios.post('/api/posts/newPost', postData)
  },
  // passing the user id so that we can filter the results to only include posts from people the user is following
  getPosts(_id) {
    return axios.get(`api/posts/getPosts/${_id}`)
  },
  getUser() {
    return axios.get('/api/users/getUser')
  },
}

export default API
