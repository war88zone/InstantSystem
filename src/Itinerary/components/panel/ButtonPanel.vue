<template lang="html">
	<button class="ButtonPanel" @click="buttonClick" :style="{ backgroundColor: secondColor, borderColor: mainColorDark }">
		<span class="ButtonPanel-label" :style="{ color: mainColor }">{{ label }}</span>
	</button>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			label: {
				type: String,
				required: true
			}
		},
		computed: {
			...mapState(['mainColor', 'mainColorDark', 'secondColor'])
		},
		methods: {
			buttonClick () {
				this.$emit('buttonClicked')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';
	@import '../../../common/scss/_mixins';

	.ButtonPanel {
		display: flex;
		font-family: 'Open Sans', sans-serif;
		border-width: 3px;
		border-style: solid;
    border-radius: $borderRadius-large;

		&-label {
			@include handle-overflow-text-content;

			width: 100%;
			padding: $padding-xsmall $padding-xlarge;
			font-size: $font-small;
			font-weight: 600;
		}
	}
</style>
