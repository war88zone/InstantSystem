import Vue from 'vue'
import Router from 'vue-router'
import Itinerary from '../Itinerary/components/Itinerary'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Itinerary',
			component: Itinerary
		}
	]
})
