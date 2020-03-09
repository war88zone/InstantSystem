<template lang="html">
	<div class="HeaderMobile">
		<burger-button class="HeaderMobile-burgerButton"></burger-button>
		<logo-header></logo-header>
		<router-link :to="'/search'">
			<search-button class="HeaderMobile-searchButton"></search-button>
		</router-link>
	</div>
</template>

<script>
	import BurgerButton from './BurgerButton.vue'
	import LogoHeader from './LogoHeader.vue'
	import SearchButton from './SearchButton.vue'

	export default {
		components: {
			BurgerButton,
			LogoHeader,
			SearchButton
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.HeaderMobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $padding-small $padding-medium;
    background-color: white;

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
