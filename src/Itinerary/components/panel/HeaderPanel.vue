<template lang="html">
	<div class="HeaderPanel">
		<span class="HeaderPanel-title">{{ titleP1 + ' '  }}
			<span class="HeaderPanel-titleP2" :style="{ color: secondColor }">{{ titleP2 }}</span>
		</span>
		<i class="HeaderPanel-close material-icons"
		@click="closePanel"
		alt="Close header panel"
		:style="{ color: getColor }"
		@mouseover="hover = true"
    @mouseleave="hover = false">close</i>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			titleP1: {
				type: String,
				required: true
			},
			titleP2: {
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
			...mapState(['mainColorLight', 'secondColor']),
			getColor () {
				return this.hover ? this.mainColorLight : this.secondColor
			}
		},
		methods: {
			closePanel (event) {
				this.$emit('closePanel')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';
	@import '../../../common/scss/_mixins';

	.HeaderPanel {
		display: flex;
    align-items: center;
    margin-bottom: $padding-large;
    font-family: 'Open Sans', sans-serif;

		&-title {
			@include handle-overflow-text-content;

			width: calc(100% - #{$font-large});
			font-size: $font-medium;
			font-weight: 300;
			color: $fontColor-lightWhite;
		}

		&-titleP2 {
			font-weight: 600;
		}

		&-close {
			font-size: $font-large;
			cursor: pointer;
			transition: color .3s ease-in-out;
		}
	}
</style>
