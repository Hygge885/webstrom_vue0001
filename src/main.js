import { createApp } from 'vue'
// 引入 Element Plus 库
import ElementPlus from 'element-plus'
// 引入 Element Plus 样式
import 'element-plus/dist/index.css'
// 引入项目入口组件 App.vue
import App from './App.vue'

const app = createApp(App)
// 全局注册 Element Plus
app.use(ElementPlus)
// 挂载到页面 #app 节点
app.mount('#app')