/**
 * 动态注册路由
 * 
 * 1.在router文件下的mapMainChildren.ts中定义所有的路由，并没在router中注册
 * 2.用户点击登录会获取当前登录用的所拥有的路由，将这些路由保存在store中
 * 3.通过全部定义的路由过滤出当前用户所拥有的路由，然后在store的login模块中使用router.addRoute('layout', route)来注册路由
 * 
 */

import { alllayoutChildren } from '@/router/mapMainChildren'

//用户第一个权限菜单,用来用户首次登录显示默认的菜单栏
let firstMenu: any = ''


/*
** 通过全部路由来匹配属于用户的权限路由,来进行用户的所属路由的动态注册
*/
export default function mapToRoutes (userMenus: any|[]) {

  const routes: any = [] 

  const getUserMenus = (userMenus: any|[]) => {
    
    userMenus.forEach( (item: { type: any, url: any, children?: [] }) => {
      if(item.type === 1) {
        getUserMenus(item.children)
      }else if( item.type === 2) {
        if(firstMenu === ''){
          firstMenu = item
        }
        const route = alllayoutChildren.find( v =>  v.path == item.url )
        routes.push(route)
      }
    }) 
  }
  //调用函数
  getUserMenus(userMenus)

  return routes
}

/*
**获取用户当前路由对应的菜单栏,刷新页面的时候不至于丢失当前显示的菜单栏
*/

export function getDefaultActive(userMenus: any, pathCurrent: any, breadCrumbArr?:  {name: any, path?: any}[]) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu: any = getDefaultActive(menu.children, pathCurrent)
      if (findMenu) {
        breadCrumbArr?.push({'name': menu.name, path: menu.url})
        breadCrumbArr?.push({'name': findMenu.name, path: findMenu.url})
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === pathCurrent) {
      return menu
    }
  }
}

/*
 * * 面包屑
 */

export function createBreadCrumbArr(userMenus: any, pathCurrent: any) {
  let breadCrumbArr: {name: any, path?: any}[] = []
  getDefaultActive(userMenus, pathCurrent, breadCrumbArr)
  return breadCrumbArr
}

export { firstMenu }
