import * as actionTypes from './action-types.js'
import * as mutationTypes from './mutation-types.js'

export default {

	/**
	* Init
	* @param {Object} context.dispatch
	* @param {Object} context.commit
	* @param {Object} context.state
	* @param {Object} data
	*/
  [actionTypes.INIT] ({dispatch, commit, state}, data) {
		// Values should come from data but for our example we set them hard
		commit(mutationTypes.SET_AVAILABLE_LANGS, [
			{ id: 'FR', label: 'Français' },
			{ id: 'EN', label: 'English' }
		])
		commit(mutationTypes.SET_LOGO_HEADER, 'logoHeader_xxx')
    commit(mutationTypes.SET_MAIN_COLOR, '#58811d')
    commit(mutationTypes.SET_MAIN_COLOR_LIGHT, '#7bc521')
    commit(mutationTypes.SET_MAIN_COLOR_DARK, '#37560b')
    commit(mutationTypes.SET_SECOND_COLOR, '#ffffff')
    commit(mutationTypes.SET_MENU_ITEMS, [
			{ id: 0, label: 'Itinéraire', labelFull: 'Rechercher un itinéraire', icon: 'navigation', titleP1: 'Rechercher', titleP2: 'un itinéraire' },
			{ id: 1, label: 'A proximité', labelFull: 'Rechercher à proximité', icon: 'place', titleP1: 'Trouver', titleP2: 'autour de moi' },
			{	id: 2, label: 'Infos trafic', labelFull: 'Infos trafic', icon: 'traffic', titleP1: 'Obtenir', titleP2: 'l\'info traffic' },
			{ id: 3, label: 'Horaires', labelFull: 'Horaires', icon: 'departure_board', titleP1: 'Afficher', titleP2: 'les horaires' }
		])
		commit(mutationTypes.SET_MENU_LINKS, [
			{ id: 0, label: 'Le SIT', to: '/sit', subLinks: ['Le Sit 0', 'Le Sit 1'] },
			{ id: 1, label: 'Se déplacer', to: '/move', subLinks: ['Se déplacer 0', 'Se déplacer 1', 'Se déplacer 2', 'Services 3'] },
			{	id: 2, label: 'Services', to: '/services', subLinks: ['Services 0', 'Services 1', 'Services 2'] }
		])
  }
}
