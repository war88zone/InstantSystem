import Vue from 'vue'
import Router from 'vue-router'
import Itinerary from '../Itinerary/components/Itinerary'
import Search from '../Itinerary/components/Search'

Vue.use(Router)

export function createRouter () {
	let routes = [
		{
			path: '/',
			name: 'Itinerary',
			component: Itinerary
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		}
	]

  return new Router({routes})
}
