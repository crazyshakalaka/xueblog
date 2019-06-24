import axios from '@/libs/api.request'

export const commentlist = (params) => {
return axios.request({url: '/houtai/commentlist', params: params})
}
export const userlist = (params) => {
return axios.request({url: '/houtai/userlist', params: params})
}
export const deletearticle = (params) => {
return axios.request({url: '/houtai/deletearticle', params: params})
}
export const deletecomment = (params) => {
return axios.request({url: '/houtai/deletecomment', params: params})
}
export const deleteuser = (params) => {
return axios.request({url: '/houtai/deleteuser', params: params})
}