import request from '../../request'

export const usersListData = (url: any, data: any) => {
  return request({
    method: 'post',
    url: url,
    data
  })
}