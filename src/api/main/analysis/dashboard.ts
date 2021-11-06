import request from '../../request'

export function getCategoryGoodsCount() {
  return request({
    method: 'get',
    url: '/goods/category/count',
  })
}

export function getCategoryGoodsSale() {
  return request({
    method: 'get',
    url: '/goods/category/sale',
  })
}

export function getCategoryGoodsFavor() {
  return request({
    method: 'get',
    url: '/goods/category/favor',
  })
}

export function getAddressGoodsSale() {
  return request({
    method: 'get',
    url: '/goods/address/sale',
  })
}