<template lang="html">
	<div class="MenuButton" @click="switchActive">
		<i class="MenuButton-icon material-icons" :style="{ color: mainColor}" alt="Explore button">explore</i>
		<span class="MenuButton-label" :style="{ color: mainColor}">{{ label }}</span>
	</div>
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
			...mapState(['mainColor', 'secondColor'])
		},
		methods: {
			switchActive (event) {
				document.getElementsByClassName("MenuButton").remove("MenuButton--active")
				event.target.parentElement.classList.add("MenuButton--active")
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
	}
</style>
