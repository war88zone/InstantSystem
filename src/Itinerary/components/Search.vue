<template lang="html">
	<div class="Search" :style="{ backgroundColor: mainColor }">
		<!-- HEADER -->
		<header-mobile v-if="isBreakpointPhone"></header-mobile>
		<header-tablet-desktop v-else></header-tablet-desktop>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as actionTypes from './../store/action-types.js'
	import * as breakpoints from './../../common/js/global-breakpoints.js'
	import HeaderMobile from './header/HeaderMobile.vue'
	import HeaderTabletDesktop from './header/HeaderTabletDesktop.vue'

	export default {
		components: {
			HeaderMobile,
			HeaderTabletDesktop
		},
		mounted () {
			// Get values from API (here faked)
      this.$store.dispatch(actionTypes.INIT)
    },
		computed: {
			...mapState(['mainColor']),
			isBreakpointPhone () {
        return this.$_globalMixin_currentBreakpoint === breakpoints.BREAKPOINT_PHONE
      }
		}
  }
</script>

<style lang="scss" scoped>
	.Search {
    width: 100%;
    height: 100vh;
	}
</style>
