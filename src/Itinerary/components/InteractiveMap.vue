<template lang="html">
	<iframe class="Map"
		frameborder="0" style="border:0"
		src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCAFr_RPh7RtLKg8w1QefR8FmQdguNtghM&q=Nice"
		allowfullscreen>
	</iframe>
</template>

<style lang="scss" scoped>
	@import '../../common/scss/variables';

	.Map {
		width: 100%;
    height: $mapHeight;
    background-size: cover;
	}
</style>
