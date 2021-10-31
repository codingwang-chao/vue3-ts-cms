import request from './request'

export const loginHttp = (data: any) => {
  return request({
    method: 'post',
    url: '/login',
    data,
    loading: false
  })
}

export const loginUserInfo = (id: number) => {
  return request({
    method: 'get', 
    url: `/users/${id}`
  })
}

export const loginUserMenuById = (id: number) => {
  return request({
    method: 'get', 
    url: `/role/${id}/menu`
  })
}