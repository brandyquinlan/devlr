import API from './API'

const useAuth = async () => {
  const user = await API.getUser()
  console.log(user)

  if (user.data._id) return true
  return false
}

export default useAuth
