/**
 * @param tree 树结构数组
 * 
 * 通过遍历拿到树结构的叶子节点
 * 
 * _recursion遍历
 */

export function mapTreeLastChildren(tree: any) {

  const lastChildren: any[] = []
  const _recursion = (tree: any) => {
    tree.forEach( (item: { children: any, id: any }) => {
      if(item.children) {
        _recursion(item.children)
      }else {
        lastChildren.push(item.id)
      }
    })
  }

  _recursion(tree)

  return lastChildren
}