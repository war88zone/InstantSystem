<template lang="html">
	<button class="langSelector" @click="openLangModal">
		<img class="langSelector-flag" :src="getFlag" alt="Flag of the current language">
		<span v-if="displayLabel" class="langSelector-label">{{ currentLangLabel }}</span>
	</button>
</template>

<script>
	export default {
		props: {
			currentLang: {
				type: String,
				required: true
			},
			currentLangLabel: {
				type: String,
				required: true
			},
			displayLabel: {
				type: Boolean,
				requied: false,
				default: false
			},
			fillColor: {
				type: String,
				required: false,
				default: '#454545'
			}
		},
		computed: {
			getFlag () {
				return this.currentLang ? require('./../../assets/lang/' + this.currentLang + '.png') : ''
			}
		},
		methods: {
			openLangModal () {
				this.$emit('openLangModal')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/mixins';
	@import '../../../common/scss/variables';

	.langSelector {
		display: flex;
		align-items: center;
		border: none;
		background-color: transparent;
		cursor: pointer;

		&-flag {
			@include border-around-icon;

			width: 30px;
			height: 30px;
			border-radius: 50%;
			transform: background-image .3s ease-in-out;
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
