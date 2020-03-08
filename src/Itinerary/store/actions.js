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
    commit(mutationTypes.SET_MAIN_COLOR, '#58811d')
    commit(mutationTypes.SET_MAIN_COLOR_LIGHT, '#90cb48')
    commit(mutationTypes.SET_SECOND_COLOR, '#ffffff')
    commit(mutationTypes.SET_MENU_ITEMS, [
			{ id: 0, label: 'Itinéraire', icon: 'navigation' },
			{ id: 1, label: 'A proximité', icon: 'place' },
			{	id: 2, label: 'Infos trafic', icon: 'traffic' },
			{ id: 3, label: 'Horaires', icon: 'departure_board' }
		])
  }
}
