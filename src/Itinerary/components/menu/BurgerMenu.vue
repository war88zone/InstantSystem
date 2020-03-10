<template lang="html">
	<transition name="slide"
		class="BurgerMenu"
		mode="out-in">
		<div class="BurgerMenu-mask" v-show="showBurgerMenu" @click.stop="closeBurgerMenu">
			<div class="BurgerMenu-content" :style="{ backgroundColor: mainColor }"></div>
		</div>
	</transition>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['mainColor', 'showBurgerMenu'])
		},
		methods: {
			closeBurgerMenu () {
				this.$emit('closeBurgerMenu')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_mixins';
	@import '../../../common/scss/_variables';

	.BurgerMenu {
		&-mask {
      @include container-mask;
    }

		&-content {
			position: absolute;
			top: $menuHeight;
			left: 0;
			width: 80%;
			max-width: 300px;
			height: $contentHeight;
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: left .3s ease-in-out, opacity .3s ease-in-out;
	}

	.slide-enter, .slide-leave-to {
		left: -100%;
		opacity: 0;
	}
</style>
