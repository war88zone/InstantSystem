<template lang="html">
	<transition name="slide" class="MenuHorizontalPanel" v-on:after-leave="animationFinished">
    <div v-show="showMenuPanel"
    class="MenuHorizontalPanel-content"
    @click="closeContent"></div>
  </transition>
</template>

<script>
	import * as mutationTypes from './../../store/mutation-types.js'

  export default {
    props: {
      showMenuPanel: {
        type: Boolean,
        required: true
      }
    },
    methods: {
			closeContent (event) {
				// -1 value is here meaning menu items are all inactive
				this.$store.commit(mutationTypes.UPDATE_CURRENT_MENU_ITEM_ACTIVE, -1)

				this.$emit('hideHorizontalPanel')
			},
			animationFinished (event) {
				this.$emit('horizontalPanelClosed')
			}
    }
  }
</script>

<style lang="scss" scoped>
	.MenuHorizontalPanel {
		&-content {
			position: absolute;
			bottom: 72px;
			width: 100%;
			height: calc(80% - 72px);
			background-color: red;
			cursor: pointer;
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: transform .3s ease-in-out, opacity .3s ease-in-out;
	}

	.slide-enter, .slide-leave-to {
		transform: scale(0.95);
		opacity: 0;
	}
</style>
