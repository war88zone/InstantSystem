<template lang="html">
	<div class="Itinerary">
		<header-mobile></header-mobile>
		<interactive-map></interactive-map>
		<menu-mobile></menu-mobile>
	</div>
</template>

<script>
	import HeaderMobile from './header/HeaderMobile.vue'
	import InteractiveMap from './InteractiveMap.vue'
	import MenuMobile from './menu/MenuMobile.vue'

	export default {
		components: {
			HeaderMobile,
			InteractiveMap,
			MenuMobile
		}
	}
</script>

<style lang="scss" scoped>

</style>
