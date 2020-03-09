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
		logoHeader: '',
		mainColor: '',
		mainColorDark: '',
		mainColorLight: '',
		menuItems: [],
		secondColor: '',
		showPanel: false
	}
})

export default store
