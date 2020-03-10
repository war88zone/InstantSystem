import * as mutationTypes from './mutation-types'

export default {
	[mutationTypes.SET_AVAILABLE_LANGS] (state, availableLangs) {
		state.availableLangs = availableLangs
	},
	[mutationTypes.SET_LOGO_HEADER] (state, logoHeader) {
		state.logoHeader = logoHeader
	},
	[mutationTypes.SET_MAIN_COLOR] (state, mainColor) {
		state.mainColor = mainColor
	},
	[mutationTypes.SET_MAIN_COLOR_DARK] (state, mainColorDark) {
		state.mainColorDark = mainColorDark
	},
	[mutationTypes.SET_MAIN_COLOR_LIGHT] (state, mainColorLight) {
		state.mainColorLight = mainColorLight
	},
	[mutationTypes.SET_SECOND_COLOR] (state, secondColor) {
		state.secondColor = secondColor
	},
	[mutationTypes.SET_MENU_ITEMS] (state, menuItems) {
		state.menuItems = menuItems
	},
	[mutationTypes.SET_MENU_LINKS] (state, menuLinks) {
		state.menuLinks = menuLinks
	},
	[mutationTypes.UPDATE_CURRENT_LANG] (state, currentLang) {
		state.currentLang = currentLang
	},
	[mutationTypes.UPDATE_CURRENT_MENU_ITEM_ACTIVE] (state, currentMenuItemActive) {
		state.currentMenuItemActive = currentMenuItemActive
	},
	[mutationTypes.UPDATE_SHOW_BURGER_MENU] (state, showBurgerMenu) {
		state.showBurgerMenu = showBurgerMenu
	},
	[mutationTypes.UPDATE_SHOW_PANEL] (state, showPanel) {
		state.showPanel = showPanel
	},
	[mutationTypes.UPDATE_SHOW_POPUP] (state, showPopup) {
	state.showPopup = showPopup
	}
}
