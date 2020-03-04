<template lang="html">
	<div class="MenuMobile" :style="{ backgroundColor: mainColorLight}">
		<menu-button v-for="(menuItem, index) in menuItems"
			:key="'menu-item_'+index"
			:label="menuItem">
		</menu-button>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import MenuButton from './MenuButton'

	export default {
		components: {
			MenuButton
		},
		data () {
			return {
				menuItems: ['Itinéraire', 'A proximité', 'Infos trafic', 'Horaires']
			}
		},
		computed: {
			...mapState(['mainColorLight'])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/variables';

	.MenuMobile {
		position: absolute;
		bottom: 0;
		z-index: 2;
		display: flex;
		width: 100%;
		height: $menuHeight;
		padding: .5rem 0;
		box-shadow: 0px -5px 5px 0px rgba(115,115,115,1);
	}
</style>
