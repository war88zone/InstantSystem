<template lang="html">
	<div :class="isActive ? 'MenuButton--active': ''" class="MenuButton" @click="switchActive">
		<div class="MenuButton-triangle" :style="{ borderColor: getBorderColor}"></div>
		<i class="MenuButton-icon material-icons" :style="{ color: mainColor}">{{ icon }}</i>
		<span class="MenuButton-label" :style="{ color: mainColor}">{{ label }}</span>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			buttonId: {
				type: Number,
				required: true
			},
			isActive: {
				type: Boolean,
				required: false,
				default: false
			},
			label: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				required: true
			}
		},
		computed: {
			...mapState(['mainColor', 'mainColorLight', 'secondColor']),
			getBorderColor () {
				return 'transparent transparent ' + this.mainColorLight + ' transparent'
			}
		},
		methods: {
			switchActive (event) {
				this.$emit('menuButtonClicked', this.buttonId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.MenuButton {
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 25%;
		height: 100%;
		padding: 0 .5rem;
		border-right: 1px dashed white;

		&:last-child {
			border-right: none;
		}

		&-icon {
			font-size: 2rem;
		}

		&-label {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		// Used for the triangle animation
		&--active {
			.MenuButton-triangle {
				top: calc(-50% + 10px);
				opacity: 1;
			}
		}

		&-triangle {
			position: absolute;
			top: 0;
			left: calc(50% - 10px);
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 0 10px 10px 10px;
			transition: opacity .3s ease-in-out, top .3s ease-in-out;
			opacity: 0;
		}
	}
</style>
