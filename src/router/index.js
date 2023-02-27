import { createRouter, createWebHistory } from 'vue-router'
import { useToggleStore } from '../stores/stores';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repos',
      name: 'repos',
      component: () => import('../views/PopularRepos.vue')
    },
    {
      path: '/interview',
      name: 'interview',
      component: () => import('../views/InterviewQuestions.vue')
    },
    {
      path: '/resources/websites',
      name: 'websites',
      component: () => import('../views/WebsitesView.vue'),
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!useToggleStore.user) {
            next({
              name: "login"
            });
          } else {
            next();
          }
        }
      }
    },
    {
      path: '/resources/applications',
      name: 'applications',
      component: () => import('../views/ApplicationsView.vue'),
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!useToggleStore.user) {
            next({
              name: "login"
            });
          } else {
            next();
          }
        }
      }
    },
    {
      path: '/adminPanel',
      name: 'adminPanel',
      component: () => import('../views/AdminPanel.vue'),
      children: [
        {
          path: '/adminPanel/home',
          name: 'adminHome',
          component: () => import('../views/AdminPanel/AdminHome.vue'),
        },
        {
          path: '/adminPanel/resources',
          name: 'adminResources',
          component: () => import('../views/AdminPanel/AdminResources.vue'),
        },
        {
          path: '/adminPanel/about',
          name: 'adminAbout',
          component: () => import('../views/AdminPanel/AdminAbout.vue'),
        },
        {
          path: '/adminPanel/interview-questions',
          name: 'adminInterview',
          component: () => import('../views/AdminPanel/AdminInterviewQuestions.vue'),
        }
      ],
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!useToggleStore.user) {
            next({
              name: "login"
            });
          } else {
            next();
          }
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
});

export default router;
