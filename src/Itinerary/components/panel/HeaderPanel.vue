<template lang="html">
	<div class="HeaderPanel">
		<span class="HeaderPanel-title">{{ titleP1 + ' '  }}
			<span class="HeaderPanel-titleP2" :style="{ color: secondColor }">{{ titleP2 }}</span>
		</span>
		<i class="HeaderPanel-close material-icons"
		:style="{ color: secondColor}"
		@click="closePanel"
		alt="Close header panel">close</i>
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
		computed: {
			...mapState(['secondColor'])
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
		}
	}
</style>
