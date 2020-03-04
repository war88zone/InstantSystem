<template lang="html">
	<div class="HeaderMobile">
		<burger-icon class="HeaderMobile-burgerIcon"></burger-icon>
		<logo-header></logo-header>
		<search-icon class="HeaderMobile-searchIcon"></search-icon>
	</div>
</template>

<script>
	import BurgerIcon from './BurgerIcon.vue'
	import LogoHeader from './LogoHeader.vue'
	import SearchIcon from './SearchIcon.vue'

	export default {
		name: 'headerMobile',
		components: {
			BurgerIcon,
			LogoHeader,
			SearchIcon
		}
	}
</script>

<style lang="scss" scoped>
	.HeaderMobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;

		&-burgerIcon,
		&-searchIcon {
			width: 2rem;
			height: 2rem;
			line-height: 2rem;
			text-align: left;
			font-size: 2rem;
		}

		&-searchIcon {
			text-align: right
		}
	}
</style>
