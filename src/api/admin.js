import axios from '@/libs/api.request'

export const islogin = (params) => {
  return axios.request({url: '/admin/islogin', params: params})
}
