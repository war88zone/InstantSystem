<template lang="html">
	<div class="HeaderTabletDesktop">
		<div class="HeaderTabletDesktop-leftBloc">
			<logo-header></logo-header>
			<header-menu :menuLinks="menuLinks"></header-menu>
		</div>
		<div class="HeaderTabletDesktop-rightBloc">
			<router-link :to="'/search'">
				<search-button :displayLabel="isBreakpointDesktop"></search-button>
			</router-link>
			<lang-selector :displayLabel="isBreakpointDesktop"
				:currentLang="currentLang"
				:currentLangLabel="getCurrentLangLabel"
				@openLangModal="openLangModal"
				class="HeaderTabletDesktop-langSelector"></lang-selector>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as breakpoints from './../../../common/js/global-breakpoints.js'
	import * as mutationTypes from './../../store/mutation-types.js'
	import HeaderMenu from './HeaderMenu'
	import LangSelector from './LangSelector.vue'
	import LogoHeader from './LogoHeader.vue'
	import SearchButton from './SearchButton.vue'

	export default {
		components: {
			HeaderMenu,
			LangSelector,
			LogoHeader,
			SearchButton
		},
		computed: {
			...mapState(['availableLangs', 'currentLang', 'menuLinks']),
			isBreakpointDesktop () {
        return this.$_globalMixin_currentBreakpoint === breakpoints.BREAKPOINT_DESKTOP
      },
      getCurrentLangLabel () {
				return this.availableLangs.find(x => x.id === this.currentLang) ? this.availableLangs.find(x => x.id === this.currentLang).label : ''
      }
		},
		methods: {
			openLangModal () {
				this.$store.commit(mutationTypes.UPDATE_SHOW_POPUP, true)
			},
			updateCurrentLang (currentLangCode) {
				this.$store.commit(mutationTypes.UPDATE_CURRENT_LANG, currentLangCode)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.HeaderTabletDesktop {
		position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $menuHeight;
    padding: $padding-small $padding-medium;
    background-color: $fontColor-white;

    &-leftBloc,
		&-rightBloc {
			display: flex;
			align-items: center;
		}

		&-langSelector {
			margin-left: $padding-tiny;
		}
	}
</style>
