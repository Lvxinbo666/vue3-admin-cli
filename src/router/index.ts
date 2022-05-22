import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import layout from '@/components/layout/index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: layout,
      name: 'layout',
      children: [
        {
          path: 'homePage',
          component: () => import('@/views/homePage/index.vue'),
          meta: {
            title: '首页'
          }
        }
      ]
    }
  ]
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
