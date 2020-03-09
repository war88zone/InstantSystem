<template lang="html">
	<div class="Search" :style="{ backgroundColor: mainColor }">
		<header-mobile></header-mobile>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as actionTypes from './../store/action-types.js'
	import HeaderMobile from './header/HeaderMobile.vue'

	export default {
		components: {
			HeaderMobile
		},
		mounted () {
			// Get values from API (here faked)
      this.$store.dispatch(actionTypes.INIT)
    },
		computed: {
			...mapState(['mainColor'])
		}
  }
</script>

<style lang="scss" scoped>
	.Search {
    width: 100%;
    height: 100vh;
	}
</style>
