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
  async getUserInfo(userId) {
    if (userId) {
      const { data } = await axios.get(
        `/api/users/getUserInfo/${userId}?target=true`,
      )
      return data
    }

    const { data } = await axios.get('/api/users/checkUser')
    const user = await axios.get(`/api/users/getUserInfo/${data._id}`)
    // NOTE THAT THIS USER VARIABLE IS AN ARRAY [USER, PROFILE], SO THAT YOU CAN GET USER AND PROFILE DATA IN ONE CALL
    return user.data
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
  async post(post) {
    const res = await axios.post('/api/posts/newPost', { post })
    return res.data
  },
  async getPosts(_id) {
    // I switched this back. On second thought, it didn't make sense to write two functions that essesntially do the same thing
    const posts = await axios.get(`/api/posts/getPosts/${_id}`)
    return posts.data
  },
  async removePost(_id){
    const post = await axios.delete(`/api/posts/${_id}`)
    return post.data
  },
  addLike(newLike) {
    return axios.put('/api/posts/addLike', newLike)
  },
  removeLike(oldLike) {
    return axios.put('/api/posts/removeLike', oldLike)
  },
  addComment(newComment) {
    return axios.put('/api/posts/addComment', newComment)
  },
  async getAllUsers() {
    const { data } = await axios.get('/api/users/getAllUsers')
    return data
  },
  sendResetLink(user) {
    return axios.get(`/api/users/sendResetLink/${user}`)
  },
  async verifyResetCode(resetCode) {
    const { data } = await axios.get(`/api/users/verifyResetCode/${resetCode}`)
    return data
  },
  resetPassword(newPassword, _id) {
    return axios.put('/api/users/resetPassword', { newPassword, _id })
  },
  deleteUser(userId, profileId) {
    return axios.delete(
      `/api/users/destroy/?user=${userId}&profile=${profileId}`,
    )
  },
  async getAndSaveProfilePic(githubUsername, accessToken, _id) {
    const queryResult = await axios.post(
      `https://api.github.com/graphql`,
      {
        query: `{ 
                  user(login : "${githubUsername}") {
                  avatarUrl
                  }
                }`,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      },
    )
    const { avatarUrl } = queryResult.data.data.user
    return this.updateProfile({ avatarUrl }, _id)
  },
  async getGithubInfo(githubUsername, accessToken) {
    const queryResult = await axios.post(
      `https://api.github.com/graphql`,
      {
        query: `{ 
                  user(login : "${githubUsername}") {
                  avatarUrl
                  pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                      ... on Repository {
                        name
                        url
                        description
                        }
                      }
                    }
                  }
                }`,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      },
    )
    return queryResult.data.data
  },
}

export default API
