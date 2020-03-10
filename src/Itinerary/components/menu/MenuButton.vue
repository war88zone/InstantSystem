<template lang="html">
	<div :class="{ 'MenuButton--active' : isActive, 'MenuButton-vertical' : verticalMod }"
		class="MenuButton"
		:style="{ backgroundColor: getBackgroundColor }"
		@click="switchActive"
		@mouseover="hover = true"
    @mouseleave="hover = false">
		<div class="MenuButton-triangle" :style="{ borderColor: getBorderColor}"></div>
		<i class="MenuButton-icon material-icons" :style="{ color: getTextColor }">{{ icon }}</i>
		<span class="MenuButton-label" :style="{ color: getTextColor }">{{ getLabel }}</span>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as breakpoints from './../../../common/js/global-breakpoints.js'

	export default {
		props: {
			buttonId: {
				type: Number,
				required: true
			},
			isActive: {
				type: Boolean,
				required: false,
				default: false
			},
			icon: {
				type: String,
				required: true
			},
			label: {
				type: String,
				required: true
			},
			labelFull: {
				type: String,
				required: false,
				default: ''
			},
			verticalMod: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		data () {
			return {
				hover: false
			}
		},
		computed: {
			...mapState(['mainColor', 'mainColorLight', 'secondColor']),
			getBackgroundColor () {
				return this.hover && this.isBreakpointDesktop ? this.mainColor : ''
			},
			getBorderColor () {
				return this.verticalMod ? 'transparent transparent transparent' + this.mainColorLight : 'transparent transparent ' + this.mainColorLight + ' transparent'
			},
			getLabel () {
				return this.isBreakpointDesktop ? this.labelFull : this.label
			},
			getTextColor () {
				return this.hover && !this.isActive && this.isBreakpointDesktop ? this.mainColorLight : this.isActive ? this.secondColor : this.mainColor
			},
			isBreakpointDesktop () {
        return this.$_globalMixin_currentBreakpoint === breakpoints.BREAKPOINT_DESKTOP
      }
		},
		methods: {
			switchActive (event) {
				this.$emit('menuButtonClicked', this.buttonId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';
	@import '../../../common/scss/_mixins';

	.MenuButton {
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 25%;
		height: 100%;
		padding: 0 $padding-tiny;
		border-right: 1px dashed $fontColor-white;
		cursor: pointer;
		transition: background-color .3s ease-in-out;

		&-vertical {
			flex-direction: row;
			justify-content: flex-start;
			width: 100%;
			height: 80px;
			border-right: none;
			border-bottom: 1px dashed $fontColor-white;

			.MenuButton {
				&-icon {
					margin-bottom: 0;
					margin-right: $padding-small;
				}

				&-triangle {
					top: calc(50% - 10px);
					left: calc(100% - 10px);
					border-width: 10px 0 10px 10px;
					transition: opacity .3s ease-in-out, left .3s ease-in-out;
				}
			}
		}

		&:last-child {
			border-right: none;
		}

		&-icon {
			margin-bottom: 3px;
			font-size: $padding-large;
			transition: color .3s ease-in-out;
		}

		&-label {
			@include handle-overflow-text-content;

			max-width: 100%;
			font-family: 'Open Sans', sans-serif;
			font-weight: 700;
			font-size: $font-tiny;
			transition: color .3s ease-in-out;
		}

		// Used for the triangle animation
		&--active {
			.MenuButton-triangle {
				top: calc(-50% + 10px + #{$padding-tiny} / 2);
				opacity: 1;
			}
		}

		&--active.MenuButton-vertical {
			.MenuButton-triangle {
				top: calc(50% - 10px);
				left: calc(100% + 15px);
				opacity: 1;
			}
		}

		&-triangle {
			position: absolute;
			top: 0;
			left: calc(50% - 10px);
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 0 10px 10px 10px;
			transition: opacity .3s ease-in-out, top .3s ease-in-out;
			opacity: 0;
		}
	}
</style>
