import { createRouter, createWebHistory } from 'vue-router'
import PersonalityTest from '../pages/PersonalityTest.vue'

const routes = [
  {
    path: '/',
    component: PersonalityTest,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
router.afterEach((to, from) => {
  const toDepth = to.meta.permission || 0
  const fromDepth = from.meta.permission || 0
  to.meta.leaveClass = fromDepth < toDepth ? 'animate__animated animate__fadeOut animate__fast' : 'animate__animated animate__slideOutRight animate__fast'
  to.meta.enterClass = fromDepth < toDepth ? 'animate__animated animate__slideInRight animate__fast' : 'animate__animated animate__fadeIn animate__fast'
})

export default router
