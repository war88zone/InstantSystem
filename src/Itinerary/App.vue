<template lang="html">
	<div id="app">
		<itinerary></itinerary>
	</div>
</template>

<script>
	import Itinerary from './components/Itinerary.vue'

	export default {
		name: 'app',
		components: {
			Itinerary
		}
	}
</script>

<style lang="scss">
	@import '../common/scss/main';
</style>
