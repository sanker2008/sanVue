import { createApp } from 'vue'
import router from './router'
/*
安装插件按需自动引入：npm install -D unplugin-vue-components unplugin-auto-import unplugin-icons
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
*/

import App from './App.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import pinia from './store'

console.log(pinia)
createApp(App).use(router).use(pinia)/*.use(ElementPlus)*/.mount('#app')
