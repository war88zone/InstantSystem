import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		mainColor: '#58811d',
		mainColorLight: '#90cb48',
		secondColor: '#ffffff'
	}
})

export default store
