<template lang="html">
	<div class="FieldSwitch" @click="switchElement">
		<span class="FieldSwitch-title" :style="{ color: secondColor }">{{ title }}</span>
		<div class="FieldSwitch-switch">
			<span class="Switch-element"
				:style="{ color: getActiveColor }">{{ label1 }}</span>
			<span class="Switch-element"
				:style="{ color: getPassiveColor }">{{ label2 }}</span>
			<div class="Switch-background" :class="{ 'Switch-background--rightSide' : !getIsFirstElementSelected }"></div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			label1: {
				type: String,
				required: true
			},
			label2: {
				type: String,
				required: true
			}
		},
		data () {
			return {
				firstElementSelected: true
			}
		},
		computed: {
			...mapState(['mainColor', 'secondColor']),
			getIsFirstElementSelected () {
				return this.firstElementSelected
			},
			getActiveColor () {
				return this.firstElementSelected ? this.mainColor : 'rgba(255, 255, 255, 0.6)'
			},
			getPassiveColor () {
				return this.firstElementSelected ? 'rgba(255, 255, 255, 0.6)' : this.mainColor
			}
		},
		methods: {
			switchElement () {
				this.firstElementSelected = !this.firstElementSelected
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';
	@import '../../../common/scss/_mixins';

	.FieldSwitch {
		display: flex;
		flex-direction: column;
		font-family: 'Open Sans', sans-serif;

		&-title {
			@include handle-overflow-text-content;

			width: calc(100% - #{$font-large});
			margin-bottom: .2rem;
			font-size: $font-small;
			font-weight: 600;
			text-transform: uppercase;
		}

		&-switch {
			position: relative;
			display: flex;
			align-items: center;
			width: 150px;
			height: $panelComponentHeight;
			border: 1px solid white;
			border-radius: $borderRadius-medium;
			cursor: pointer;
		}
	}

	.Switch {
		&-element {
			width: 50%;
			z-index: 2;
			text-align: center;
			font-size: $font-xsmall;
			transition: color .3s ease-in-out;
		}

		&-background {
			position: absolute;
			left: 2px;
			width: calc(50% - 2px);
			height: calc(100% - 4px);
			border-radius: $borderRadius-medium;
			background-color: white;
			transition: left .3s ease-in-out;

			&--rightSide {
				left: 50%;
			}
		}
	}
</style>
