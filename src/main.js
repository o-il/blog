import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/global.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn
    })


app.mount('#app')
