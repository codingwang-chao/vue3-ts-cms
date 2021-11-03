import request from '../../request'

//获取列表数据
export const getListData = (url: any, data: any) => {
  return request({
    method: 'post',
    url: url,
    data
  })
}

//删除url/user/id  id直接拼在url上面
export const htttpDeleteHandle = (url: any) => {
  return request({
    method: 'delete',
    url: url
  })
}

//新增数据
export const httpAddHandle = (url: any, data: any) => {
  return request({
    method: 'POST',
    url: url,
    data
  })
}

//修改数据
export const httpEditHandle = (url: any, data: any) => {
  return request({
    method: 'patch',
    url: url,
    data
  })
}