<template lang="html">
	<div :class="isActive ? 'MenuButton--active': ''" class="MenuButton" @click="switchActive">
		<div class="MenuButton-triangle" :style="{ borderColor: getBorderColor}"></div>
		<i class="MenuButton-icon material-icons" :style="{ color: getTextColor}">{{ icon }}</i>
		<span class="MenuButton-label" :style="{ color: getTextColor}">{{ label }}</span>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

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
			label: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				required: true
			}
		},
		computed: {
			...mapState(['mainColor', 'mainColorLight', 'secondColor']),
			getBorderColor () {
				return 'transparent transparent ' + this.mainColorLight + ' transparent'
			},
			getTextColor () {
				return this.isActive ? this.secondColor : this.mainColor
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
		border-right: 1px dashed white;

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
