import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from "vuex-router-sync";
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// 토스트 추가
//import './plugins/vue-toast.js'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import titleMixin from './mixins/title-mixin';

Vue.config.productionTip = false

export function createApp(ctx) {
	console.log('main.js createApp');
	const router = createRouter();
	const store = createStore();
	sync(store, router);

	const app = new Vue({
		data: { url: ctx ? ctx.url : '' },
		router,
		store,
		vuetify,
		render: h => h(App)
	});
	Vue.mixin(titleMixin);

	return { app, router, store };
}