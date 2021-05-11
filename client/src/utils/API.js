import axios from 'axios'

const API = {
  signUp(userInfo) {
    return axios.post('/api/users/signup', {
      email: userInfo.email,
      password: userInfo.password,
      githubUsername: userInfo.githubUsername,
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
  async getUserInfo() {
    const { data } = await axios.get('/api/users/checkUser')
    const user = await axios.get(`/api/users/getUserInfo/${data._id}`)
    return user
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
    return axios.get(`/api/posts/getPosts/${_id}`)
  },
  // ! may not need this route
  // checkUser() {
  //   return axios.get('/api/users/checkUser')
  // },
  sendResetLink(user) {
    return axios.get(`/api/users/sendResetLink/${user}`)
  },
  verifyResetCode(resetCode) {
    return axios.get(`/api/users/verifyResetCode/${resetCode}`)
  },
  resetPassword(newPassword, _id) {
    return axios.put('/api/users/resetPassword', { newPassword, _id })
  },
  deleteUser(userId, profileId) {
    return axios.delete(
      `/api/users/destroy/?user=${userId}&profile=${profileId}`,
    )
  },
  async getGithubInfo(githubUsername, accessToken) {
    const queryResult = await axios.post(`https://api.github.com/graphql`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
        ContentType: 'Application/json',
      },
      data: {
        query: `{ 
                  user(login : ${githubUsername}) {
                  avatarUrl
                  pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                      ... on Repository {
                        name
                        projectsUrl
                        description
                        }
                      }
                    }
                  }
                }`,
      },
    })
    return queryResult
    // console.log(queryResult.data.data)
  },
}

export default API
