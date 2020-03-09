<template lang="html">
	<div class="Itinerary">
		<header-mobile></header-mobile>
		<interactive-map></interactive-map>
		<menu-horizontal></menu-horizontal>
		<horizontal-panel :showHorizontalPanel="showPanel"
			:currentPanel="getCurrentPanel"
			:titleP1="getTitleP1"
			:titleP2="getTitleP2"
			@hideHorizontalPanel="hideHorizontalPanel"
			@horizontalPanelClosed="horizontalPanelClosed">
		</horizontal-panel>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as actionTypes from './../store/action-types.js'
	import * as mutationTypes from './../store/mutation-types.js'
	import HeaderMobile from './header/HeaderMobile.vue'
	import HorizontalPanel from './panel/HorizontalPanel'
	import InteractiveMap from './InteractiveMap.vue'
	import MenuHorizontal from './menu/MenuHorizontal.vue'

	export default {
		components: {
			HeaderMobile,
			HorizontalPanel,
			InteractiveMap,
			MenuHorizontal
		},
		mounted () {
			// Get values from API (here faked)
      this.$store.dispatch(actionTypes.INIT)
    },
    data () {
			return {
				callbackAfterAnimationEnded: null,
				currentPanel: '',
				horizontalPanelAlreadyOpen: false,
				titleP1: '',
				titleP2: ''
			}
		},
		computed: {
			...mapState(['currentMenuItemActive', 'menuItems', 'showPanel']),
			getCurrentPanel () {
				return this.currentPanel
			},
			getTitleP1 () {
				return this.titleP1
			},
			getTitleP2 () {
				return this.titleP2
			}
		},
		methods: {
			horizontalPanelClosed () {
				// Reset the values
				this.horizontalPanelAlreadyOpen = false
				this.currentPanel = ''
				this.titleP1 = ''
				this.titleP2 = ''
				// The animation used to close the menu is complete, the callback can now be executed
				if (this.callbackAfterAnimationEnded) {
					this.callbackAfterAnimationEnded()
				}
			},
			hideHorizontalPanel (callbackAfterAnimationEnded) {
				// Set the callback to be executed once the menu is closed
				this.callbackAfterAnimationEnded = callbackAfterAnimationEnded
				this.$store.commit(mutationTypes.UPDATE_SHOW_PANEL, false)
			},
			showHorizontalPanel () {
				this.$store.commit(mutationTypes.UPDATE_SHOW_PANEL, true)
				this.horizontalPanelAlreadyOpen = true
				// We need to set the new values here to be sure the previous panel is closed
				this.currentPanel = 'Panel' + this.currentMenuItemActive
				this.titleP1 = this.menuItems.find(x => x.id === this.currentMenuItemActive) ? this.menuItems.find(x => x.id === this.currentMenuItemActive).titleP1 : ''
				this.titleP2 = this.menuItems.find(x => x.id === this.currentMenuItemActive) ? this.menuItems.find(x => x.id === this.currentMenuItemActive).titleP2 : ''
			}
		},
		watch: {
			// Watcher is used here when the currentMenuItemActive is gonna change
			currentMenuItemActive: function () {
				// Manage only if event is from the menu
				if (this.currentMenuItemActive !== -1) {
					// If the panel if alrealy opened
					if (this.horizontalPanelAlreadyOpen) {
						// Open the new panel only when the previous one is closed
						this.hideHorizontalPanel(() => {
							this.showHorizontalPanel()
						})
					} else {
						this.showHorizontalPanel()
					}
				}
			}
		}
	}
</script>
