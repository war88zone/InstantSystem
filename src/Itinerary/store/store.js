import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	mutations,
	state: {
		currentMenuItemActive: -1,
		mainColor: '',
		mainColorLight: '',
		menuItems: [],
		secondColor: '',
		showMenuPanel: false
	}
})

export default store
