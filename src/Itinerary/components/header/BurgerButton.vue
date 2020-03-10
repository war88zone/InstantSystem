<template lang="html">
	<button class="BurgerButton" @click="openBurgerMenu">
		<i class="BurgerButton-icon material-icons" :style="{ color: mainColor}" alt="Menu icon">menu</i>
	</button>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['mainColor'])
		},
		methods: {
			openBurgerMenu () {
				this.$emit('openBurgerMenu')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.BurgerButton {
		display: flex;
		align-items: center;
		width: auto;
    height: auto;
		border: none;
		background-color: transparent;

		&-icon {
			font-size: $font-large;
		}
	}
</style>
