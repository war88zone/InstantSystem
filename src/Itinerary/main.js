// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createRouter} from './../router/router.js'
import {globalMixin} from './../common/js/global-mixin.js'
import store from './store/store.js'

// Inject mixins
Vue.mixin(globalMixin)

Vue.config.productionTip = false

const router = createRouter()

/* eslint-disable no-new */
new Vue({
	components: { App },
	el: '#app',
	router,
	store,
	template: '<App/>'
})
