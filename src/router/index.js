import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export function createRouter() {
	const router = new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes
	});

  router.beforeEach((to, from, next)=> {
		console.log('router.js beforeEach');
		next();
	})

	router.afterEach((to, from)=> {
		console.log('router.js afterEach')
	})

	return router;
}
