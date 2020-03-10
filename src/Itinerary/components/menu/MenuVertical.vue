<template lang="html">
	<div class="MenuVertical"
	:class="isMenuActive ? 'MenuVertical--opened' : ''"
	:style="{ backgroundColor: mainColorLight}">
		<menu-button v-for="(menuItem, index) in menuItems"
			:key="'menu-item_'+index"
			:id="'menu-item_'+index"
			:buttonId="index"
			:isActive= "currentMenuItemActive == index ? true : false"
			:label="menuItem.label"
			:labelFull="menuItem.labelFull"
			:icon="menuItem.icon"
			:verticalMod=true
			@menuButtonClicked="updateCurrent">
		</menu-button>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as mutationTypes from './../../store/mutation-types.js'
	import MenuButton from './MenuButton'

	export default {
		components: {
			MenuButton
		},
		computed: {
			...mapState(['mainColorLight', 'menuItems', 'currentMenuItemActive']),
			isMenuActive () {
				return this.currentMenuItemActive >= 0
			}
		},
		methods: {
			updateCurrent (currentButtonId) {
				this.$store.commit(mutationTypes.UPDATE_CURRENT_MENU_ITEM_ACTIVE, currentButtonId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/variables';

	.MenuVertical {
		position: absolute;
		top: $menuHeight;
		display: flex;
		flex-direction: column;
		width: $menuVerticalWidth;
    height: $contentHeight-desktop;
    padding: 0px $padding-small;
    z-index: 2;
    transition: box-shadow .3s ease-in-out;

		&--opened {
			box-shadow: $boxShadow-light;
		}
	}
</style>
