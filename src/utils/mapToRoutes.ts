import { alllayoutChildren } from '@/router/mapMainChildren'

export default function mapToRoutes (userMenus: any|[]) {

  const routes: any = [] 

  const getUserMenus = (userMenus: any|[]) => {
    
    userMenus.forEach( (item: { type: any, url: any, children?: [] }) => {
      if(item.type === 1) {
        getUserMenus(item.children)
      }else if( item.type === 2) {
        const route = alllayoutChildren.find( v =>  v.path == item.url )
        routes.push(route)
      }
    }) 
  }

  //调用函数
  getUserMenus(userMenus)

  return routes
}