import * as mutationTypes from './mutation-types'

export default {
	[mutationTypes.SET_MAIN_COLOR] (state, mainColor) {
		state.mainColor = mainColor
	},
	[mutationTypes.SET_MAIN_COLOR_LIGHT] (state, mainColorLight) {
		state.mainColorLight = mainColorLight
	},
	[mutationTypes.SET_SECOND_COLOR] (state, secondColor) {
		state.secondColor = secondColor
	},
	[mutationTypes.UPDATE_CURRENT_MENU_ITEM_ACTIVE] (state, currentMenuItemActive) {
		state.currentMenuItemActive = currentMenuItemActive
	},
	[mutationTypes.UPDATE_SHOW_MENU_PANEL] (state, showMenuPanel) {
		state.showMenuPanel = showMenuPanel
	},
	[mutationTypes.SET_MENU_ITEMS] (state, menuItems) {
		state.menuItems = menuItems
	}
}
