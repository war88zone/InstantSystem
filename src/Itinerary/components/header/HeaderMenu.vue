<template lang="html">
	<div class="HeaderMenu">
		<div v-for="(menuLink, index) in menuLinks"
			class="HeaderMenu-link"
			:to="menuLink.to"
			:key="'header-menu_'+index"
			:style="{ color: mainColor }">{{ menuLink.label }}
				<i class="material-icons HeaderMenu-more" :style="{ color: mainColor }">keyboard_arrow_down</i>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			menuLinks: {
				type: Array,
				required: true
			}
		},
		computed: {
			...mapState(['mainColor'])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.HeaderMenu {
		position: absolute;
		left: $menuVerticalWidth;
    display: flex;
    align-items: center;
    cursor: pointer;

		&-link {
			display: flex;
			align-items: center;
			margin-right: $padding-large;
			font-family: 'Open Sans', sans-serif;
			font-weight: 700;
			font-size: $font-small;
		}
	}
</style>
