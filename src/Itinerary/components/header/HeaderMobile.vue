<template lang="html">
	<div class="HeaderMobile">
		<burger-button class="HeaderMobile-burgerButton" @openBurgerMenu="openBurgerMenu"></burger-button>
		<logo-header></logo-header>
		<router-link class="HeaderMobile-link" :to="'/search'">
			<search-button class="HeaderMobile-searchButton"></search-button>
		</router-link>
	</div>
</template>

<script>
	import * as mutationTypes from './../../store/mutation-types.js'
	import BurgerButton from './BurgerButton.vue'
	import LogoHeader from './LogoHeader.vue'
	import SearchButton from './SearchButton.vue'

	export default {
		components: {
			BurgerButton,
			LogoHeader,
			SearchButton
		},
		methods: {
			openBurgerMenu () {
				this.$store.commit(mutationTypes.UPDATE_SHOW_BURGER_MENU, true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.HeaderMobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $menuHeight;
    padding: $padding-small $padding-medium;
    background-color: $fontColor-white;

		&-burgerButton,
		&-searchButton {
			width: $padding-large;
			height: $padding-large;
			line-height: $padding-large;
			text-align: left;
			font-size: $padding-large;
		}

		&-searchButton {
			text-align: right
		}
	}
</style>
