<template lang="html">
	<div class="MenuHorizontal"
	:class="isMenuActive ? 'MenuHorizontal--opened' : ''"
	:style="{ backgroundColor: mainColorLight}">
		<menu-button v-for="(menuItem, index) in menuItems"
			:key="'menu-item_'+index"
			:id="'menu-item_'+index"
			:buttonId="index"
			:isActive= "currentMenuItemActive == index ? true : false"
			:label="menuItem.label"
			:icon="menuItem.icon"
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

	.MenuHorizontal {
		position: absolute;
		bottom: 0;
		z-index: 2;
		display: flex;
		width: 100%;
		height: $menuHeight;
		padding: $padding-tiny 0;

		&--opened {
			box-shadow: $boxShadow-light;
		}
	}
</style>
