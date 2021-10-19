import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'

import 'normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/css/index.css'

// 每次刷新都vuex中的login模块赋值
setupStore()

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
