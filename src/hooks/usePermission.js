/**
 * hooks里面是一个方法，utils是全局经常用的公共方法
 * 
 * @param {页面名} pageName 
 * @param {页面里的按钮} handleName 
 * @returns 返回true/false, true就是有权限，false就是没有权限
 * 
 * 在这个钩子(函数)中，传入两个参数，来判断这个页面里的这个按钮是否有权限
 */

import store from '@/store'

export default function userPermission(pageName, handleName) {
  const permissionArr = store.state.login.permissionArr
  const isHavePermission = `system:${pageName}:${handleName}`
  //!!两个感叹号，两次取反，将有值的转化为true，没有值的转化为false
  return !!permissionArr.find( item => item == isHavePermission)
}