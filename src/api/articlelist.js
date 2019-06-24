import axios from '@/libs/api.request'

export const articleList = (params) => {
  return axios.request({url: '/articlelist', params: params})
}
export const articleDeil = (params) => {
  return axios.request({url: '/articleDeil', params: params})
}
export const articleclassify = (params) => {
  return axios.request({url: '/articleclassify', params: params})
}
export const Messagein = (data) => {
  return axios.request({url: '/Messagein', data: data, method: 'post'})
}
export const AddArticle = (data) => {
  return axios.request({url: '/AddArticle', data: data, method: 'post'})
}
export const updateArticle = (data) => {
  return axios.request({url: '/updateArticle', data: data, method: 'post'})
}
export const Comment = (params) => {
  return axios.request({url: '/Comment', params: params})
}
