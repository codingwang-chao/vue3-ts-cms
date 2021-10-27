import { App } from 'vue'

import { formatUtcString } from '@/utils/dateFormat'
export default function registerProperties(app: App) {
  // 进行全局属性的注册，然后全局所有地方可以直接使用。app.config.globalProperties这个方法直接在main.ts中使用，就直接注册全局属性了，
  // 放在这里注册是方便管理，及减少main.ts中代码量
  app.config.globalProperties.$filters = {
    formatTime(value: any) {
      return formatUtcString(value)
    }
  }
}