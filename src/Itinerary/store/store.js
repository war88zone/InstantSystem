import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	mutations,
	state: {
		availableLangs: [],
		currentMenuItemActive: -1,
		currentLang: 'FR',
		logoHeader: '',
		mainColor: '',
		mainColorDark: '',
		mainColorLight: '',
		menuItems: [],
		menuLinks: [],
		secondColor: '',
		showBurgerMenu: false,
		showPanel: false,
		showPopup: false
	}
})

export default store
