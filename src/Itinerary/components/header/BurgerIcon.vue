<template lang="html">
	<i class="material-icons" :style="{ color: mainColor}" alt="Menu icon">menu</i>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['mainColor'])
		}
	}
</script>

<style lang="scss" scoped>
	.MenuBurger {
		width: 100%;
		height: 100%;
	}
</style>
