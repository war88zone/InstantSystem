<template lang="html">
	<div class="FieldPanel">
		<span class="FieldPanel-title" :style="{ color: secondColor }">{{ title }}</span>
		<input class="FieldPanel-input" :placeholder="placeholder">
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
			placeholder: {
				type: String,
				required: false,
				default: ''
			}
		},
		computed: {
			...mapState(['mainColorLight', 'secondColor'])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';
	@import '../../../common/scss/_mixins';

	.FieldPanel {
		display: flex;
		flex-direction: column;
    font-family: 'Open Sans', sans-serif;

		&-title {
			@include handle-overflow-text-content;

			width: calc(100% - #{$font-large});
			font-size: $font-small;
			font-weight: 600;
			text-transform: uppercase;
		}

		&-input {
			height: $panelComponentHeight;
			border: none;
			border-bottom: 1px solid white;
			font-family: 'Open Sans', sans-serif;
			font-size: $font-xsmall;
			color: white;
			background-color: transparent;
			outline: none;

			&::placeholder {
				color: $fontColor-lightWhite;
			}
		}
	}
</style>
