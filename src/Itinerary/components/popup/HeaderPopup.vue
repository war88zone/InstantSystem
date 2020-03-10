<template lang="html">
	<div class="HeaderPopup">
		<span class="HeaderPopup-title">{{ title }}</span>
		<i class="HeaderPopup-close material-icons"
		@click="closePopup"
		alt="Close popup"
		:style="{ color: getColor }"
		@mouseover="hover = true"
    @mouseleave="hover = false">close</i>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			title: {
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
			closePopup (event) {
				this.$emit('closePopup')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';
	@import '../../../common/scss/_mixins';

	.HeaderPopup {
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

		&-close {
			font-size: $font-large;
			cursor: pointer;
			transition: color .3s ease-in-out;
		}
	}
</style>
