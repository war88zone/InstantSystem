<template lang="html">
	<iframe class="Map"
		:class="{ 'Map--withoutMenuBottom' : !hasMenuBottom }"
		frameborder="0" style="border:0"
		src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCAFr_RPh7RtLKg8w1QefR8FmQdguNtghM&q=Nice"
		allowfullscreen>
	</iframe>
</template>

<script>
	export default {
		props: {
			hasMenuBottom: {
				type: Boolean,
				required: false,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/scss/variables';

	.Map {
		width: 100%;
    height: $contentHeight;
    background-size: cover;

    &--withoutMenuBottom {
			height: $contentHeight-desktop;
			padding-left: $menuVerticalWidth;
    }
	}
</style>
