import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router' // 路由
import { setupElement } from './plugins/Element'

const app = createApp(App)
setupElement(app)
setupRouter(app) // 引入路由
router.isReady().then(() => {
  app.mount('#app')
})
