/**
 * 传入类型为App类型，就是传入一个main.ts中的app,在这里进行汇总然后到main.ts中使用这个globalRegister方法来进行所有方法的注册
 */
import { App } from 'vue'

import registerProperties from './register-properties'

export function globalRegister(app: App) {
  app.use(registerProperties)
}