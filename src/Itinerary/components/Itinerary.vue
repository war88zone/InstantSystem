<template lang="html">
	<div class="Itinerary">
		<!-- HEADER -->
		<header-mobile v-if="isBreakpointPhone"></header-mobile>
		<header-tablet-desktop v-else></header-tablet-desktop>
		<!-- MAP -->
		<interactive-map :hasMenuBottom="isBreakpointPhone"></interactive-map>
		<!-- MENU -->
		<burger-menu v-if="isBreakpointPhone" @closeBurgerMenu="closeBurgerMenu"></burger-menu>
		<menu-horizontal v-if="isBreakpointPhone"></menu-horizontal>
		<menu-vertical v-else></menu-vertical>
		<!-- PANEL -->
		<panel-horizontal v-if="isBreakpointPhone"
			:showPanel="showPanel"
			:currentPanel="getCurrentPanel"
			:titleP1="getTitleP1"
			:titleP2="getTitleP2"
			@hidePanel="hidePanel"
			@panelClosed="panelClosed">
		</panel-horizontal>
		<panel-vertical v-else
			:showPanel="showPanel"
			:currentPanel="getCurrentPanel"
			:titleP1="getTitleP1"
			:titleP2="getTitleP2"
			@hidePanel="hidePanel"
			@panelClosed="panelClosed">
		</panel-vertical>
		<!-- POPUP -->
		<popup-lang :showPopup="showPopup"></popup-lang>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as actionTypes from './../store/action-types.js'
	import * as breakpoints from './../../common/js/global-breakpoints.js'
	import * as mutationTypes from './../store/mutation-types.js'
	import BurgerMenu from './menu/BurgerMenu.vue'
	import HeaderMobile from './header/HeaderMobile.vue'
	import HeaderTabletDesktop from './header/HeaderTabletDesktop.vue'
	import InteractiveMap from './InteractiveMap.vue'
	import MenuHorizontal from './menu/MenuHorizontal.vue'
	import MenuVertical from './menu/MenuVertical.vue'
	import PanelHorizontal from './panel/PanelHorizontal'
	import PanelVertical from './panel/PanelVertical'
	import PopupLang from './popup/PopupLang'

	export default {
		components: {
			BurgerMenu,
			HeaderMobile,
			HeaderTabletDesktop,
			InteractiveMap,
			MenuHorizontal,
			MenuVertical,
			PanelHorizontal,
			PanelVertical,
			PopupLang
		},
		mounted () {
			// Get values from API (here faked)
      this.$store.dispatch(actionTypes.INIT)
    },
    data () {
			return {
				callbackAfterAnimationEnded: null,
				currentPanel: '',
				panelAlreadyOpen: false,
				titleP1: '',
				titleP2: ''
			}
		},
		computed: {
			...mapState(['currentMenuItemActive', 'menuItems', 'showPanel', 'showPopup']),
			getCurrentPanel () {
				return this.currentPanel
			},
			getTitleP1 () {
				return this.titleP1
			},
			getTitleP2 () {
				return this.titleP2
			},
			isBreakpointPhone () {
        return this.$_globalMixin_currentBreakpoint === breakpoints.BREAKPOINT_PHONE
      }
		},
		methods: {
			closeBurgerMenu () {
				this.$store.commit(mutationTypes.UPDATE_SHOW_BURGER_MENU, false)
			},
			displayPanel () {
				this.$store.commit(mutationTypes.UPDATE_SHOW_PANEL, true)
				this.panelAlreadyOpen = true
				// We need to set the new values here to be sure the previous panel is closed
				this.currentPanel = 'Panel' + this.currentMenuItemActive
				this.titleP1 = this.menuItems.find(x => x.id === this.currentMenuItemActive) ? this.menuItems.find(x => x.id === this.currentMenuItemActive).titleP1 : ''
				this.titleP2 = this.menuItems.find(x => x.id === this.currentMenuItemActive) ? this.menuItems.find(x => x.id === this.currentMenuItemActive).titleP2 : ''
			},
			hidePanel (callbackAfterAnimationEnded) {
				// Set the callback to be executed once the menu is closed
				this.callbackAfterAnimationEnded = callbackAfterAnimationEnded
				this.$store.commit(mutationTypes.UPDATE_SHOW_PANEL, false)
			},
			panelClosed () {
				// Reset the values
				this.panelAlreadyOpen = false
				this.currentPanel = ''
				this.titleP1 = ''
				this.titleP2 = ''
				// The animation used to close the menu is complete, the callback can now be executed
				if (this.callbackAfterAnimationEnded) {
					this.callbackAfterAnimationEnded()
				}
			}
		},
		watch: {
			// Watcher is used here when the currentMenuItemActive is gonna change
			currentMenuItemActive: function () {
				// Manage only if event is from the menu
				if (this.currentMenuItemActive !== -1) {
					// If the panel if alrealy opened
					if (this.panelAlreadyOpen) {
						// Open the new panel only when the previous one is closed
						this.hidePanel(() => {
							this.displayPanel()
						})
					} else {
						this.displayPanel()
					}
				}
			}
		}
	}
</script>
