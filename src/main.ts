import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'

import 'normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import './assets/css/index.css'
import { globalRegister } from './global'

// 每次刷新都vuex中的login模块赋值
setupStore()

// app.use(globalRegister)等同globalRegister(app)

createApp(App).use(store).use(router).use(ElementPlus, {
  locale: zhCn,
}).use(globalRegister).mount('#app')
