/***
 * 
 * 动态获取用户的按钮权限
 * 
 * 1.从用户的菜单中获取所有的permissions按钮权限就是这里的mapBtnPermissions()方法
 * 2.hooks文件中写一个函数，传入这个页面的pageName，和这个页面的按钮，来判断permissions里是否存在这个按钮权限
 * 如果存在就返回true，不存咋返回false
 * 3.在pageContent里面里调用这个函数，传入使用这个组件的pageName，和按钮名称，根据返回的true/false来控制页面的按钮和隐藏
 * 
 * 
 * 获取用户按钮权限
 */  

//加default到时候引用的时候这个方法就不需要用{}包裹，没有default直接使用就需要用{}
export default function mapBtnPermissions(userMenus: any) {

  let permissions: any[] = []

  const mapBtnreCursion = (userMenus: any) => {
    userMenus.forEach( (item: { type: string; permission: any; children: any })  => {
      if(item.type == '1' || item.type == '2') {
        if(item.children) {
          mapBtnreCursion(item.children)
        }
      }else if(item.type == '3') {
        permissions.push(item.permission)
      }
    })
  }

  //调用这个递归函数，上面定义了并没有调用
  mapBtnreCursion(userMenus)

  return permissions
}