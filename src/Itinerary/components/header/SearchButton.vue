<template lang="html">
	<button class="SearchButton">
		<i class="SearchButton-icon material-icons"
		:style="{ color: fillColor}"
		alt="Search icon">search</i>
		<span v-if="displayLabel" class="SearchButton-label">Recherche</span>
	</button>
</template>

<script>
	export default {
		props: {
			fillColor: {
				type: String,
				required: false,
				default: '#454545'
			},
			displayLabel: {
				type: Boolean,
				requied: false,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/mixins';
	@import '../../../common/scss/variables';

	.SearchButton {
		display: flex;
		align-items: center;
		width: auto;
    height: auto;
		border: none;
		text-align: right;
		line-height: $padding-large;
		text-align: left;
		font-size: $padding-large;
		background-color: transparent;
		cursor: pointer;

		&-icon {
			@include border-around-icon;
		}

		&-label {
			margin-left: $padding-tiny;
			font-family: 'Open Sans', sans-serif;
			font-weight: 700;
			font-size: $font-tiny;
			color: $fontColor-grey;
			text-transform: uppercase;
		}
	}
</style>
