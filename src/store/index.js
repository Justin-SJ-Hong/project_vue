import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
	const store = new Vuex.Store({
		state: {
			config: {
				title : "projectVue",
				footer : "projectVue all right reserved.",
				// menu : [
				// 	{}
				// ]
			}
		},
		mutations: {
		},
		actions: {
		},
		modules: {
		}
	});
	return store;
}