//传入类型为App类型，就是传入一个main.ts中的app在这里进行汇总注册然后到main.ts中使用这个globalRegister方法。来进行所有方法的注册
import { App } from 'vue'

import registerProperties from './register-properties'

export function globalRegister(app: App) {
  app.use(registerProperties)
}