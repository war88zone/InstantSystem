<template lang="html">
	<button class="ButtonPanel"
		@click="buttonClick"
		@mouseover="hover = true"
    @mouseleave="hover = false"
		:style="{ backgroundColor: getBackgroundColor, borderColor: mainColorDark }">
		<span class="ButtonPanel-label" :style="{ color: getTextColor }">{{ label }}</span>
	</button>
</template>

<script>
	import { mapState } from 'vuex'
	import * as breakpoints from './../js/global-breakpoints.js'

	export default {
		props: {
			label: {
				type: String,
				required: true
			}
		},
		data () {
			return {
				hover: false
			}
		},
		computed: {
			...mapState(['mainColor', 'mainColorLight', 'mainColorDark', 'secondColor']),
			getTextColor () {
				return this.hover && this.isBreakpointDesktop ? this.secondColor : this.mainColor
			},
			getBackgroundColor () {
				return this.hover && this.isBreakpointDesktop ? this.mainColorLight : this.secondColor
			},
			isBreakpointDesktop () {
        return this.$_globalMixin_currentBreakpoint === breakpoints.BREAKPOINT_DESKTOP
      }
		},
		methods: {
			buttonClick () {
				this.$emit('buttonClicked')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables';
	@import '../scss/_mixins';

	.ButtonPanel {
		display: flex;
		font-family: 'Open Sans', sans-serif;
		border-width: 3px;
		border-style: solid;
    border-radius: $borderRadius-large;
    transition: background-color .3s ease-in-out;
    cursor: pointer;

		&-label {
			@include handle-overflow-text-content;

			width: 100%;
			padding: $padding-xsmall $padding-xlarge;
			font-size: $font-small;
			font-weight: 600;
			transition: color .3s ease-in-out;
		}
	}
</style>
