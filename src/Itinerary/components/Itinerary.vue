<template lang="html">
	<div class="Itinerary">
		<header-mobile></header-mobile>
		<interactive-map></interactive-map>
		<menu-horizontal></menu-horizontal>
		<menu-horizontal-panel :showMenuPanel="showMenuPanel"
			@hideHorizontalPanel="hideHorizontalPanel"
			@horizontalPanelClosed="horizontalPanelClosed">
		</menu-horizontal-panel>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as actionTypes from './../store/action-types.js'
	import * as mutationTypes from './../store/mutation-types.js'
	import HeaderMobile from './header/HeaderMobile.vue'
	import InteractiveMap from './InteractiveMap.vue'
	import MenuHorizontal from './menu/MenuHorizontal.vue'
	import MenuHorizontalPanel from './menu/MenuHorizontalPanel'

	export default {
		components: {
			HeaderMobile,
			InteractiveMap,
			MenuHorizontal,
			MenuHorizontalPanel
		},
		mounted () {
      this.$store.dispatch(actionTypes.INIT)
    },
    data () {
			return {
				callbackAfterAnimationEnded: null,
				horizontalPanelAlreadyOpen: false
			}
		},
		computed: {
			...mapState(['showMenuPanel', 'currentMenuItemActive'])
		},
		methods: {
			horizontalPanelClosed () {
				this.horizontalPanelAlreadyOpen = false
				// The animation used to close the menu is complete, the callback can now be executed
				if (this.callbackAfterAnimationEnded) {
					this.callbackAfterAnimationEnded()
				}
			},
			hideHorizontalPanel (callbackAfterAnimationEnded) {
				// Set the callback to be executed once the menu is closed
				this.callbackAfterAnimationEnded = callbackAfterAnimationEnded
				this.$store.commit(mutationTypes.UPDATE_SHOW_MENU_PANEL, false)
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
							this.$store.commit(mutationTypes.UPDATE_SHOW_MENU_PANEL, true)
							this.horizontalPanelAlreadyOpen = true
						})
					} else {
						this.$store.commit(mutationTypes.UPDATE_SHOW_MENU_PANEL, true)
						this.horizontalPanelAlreadyOpen = true
					}
				}
			}
		}
	}
</script>
