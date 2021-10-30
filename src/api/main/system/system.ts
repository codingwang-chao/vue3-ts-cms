import request from '../../request'

export const getListData = (url: any, data: any) => {
  return request({
    method: 'post',
    url: url,
    data
  })
}