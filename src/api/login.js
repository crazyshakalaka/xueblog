import axios from '@/libs/api.request'

export const login = (data) => {
  return axios.request({ url: '/admin/login', data: data,method:'post' })
}
export const register = (data) => {
  return axios.request({ url: '/admin/register', data: data,method:'post' })
}
export const userInfo = () => {
  return axios.request({ url: '/admin/user',})
}
export const logOut = () => {
  return axios.request({ url: '/admin/loginOut', })
}
