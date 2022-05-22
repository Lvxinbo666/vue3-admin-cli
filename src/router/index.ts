import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})

// 删除/重置路由
export function resetRoute(): void {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export function setupRouter(app: App<Element>) {
  app.use(router)
}
export default router
