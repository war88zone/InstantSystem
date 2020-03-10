<template lang="html">
	<transition name="pop" class="PanelHorizontal" v-on:after-leave="animationFinished" mode="out-in">
    <div v-show="showPanel"
    class="PanelHorizontal-content"
    :style="{ backgroundColor: mainColor}">
			<header-panel :titleP1="titleP1" :titleP2="titleP2" @closePanel="closePanel"></header-panel>
			<keep-alive>
				<component v-bind:is="currentPanel"></component>
			</keep-alive>
    </div>
  </transition>
</template>

<script>
	import { mapState } from 'vuex'
	import * as mutationTypes from './../../store/mutation-types.js'
	import HeaderPanel from './HeaderPanel.vue'
	import Panel0 from './../panelSlots/Panel0.vue'
	import Panel1 from './../panelSlots/Panel1.vue'
	import Panel2 from './../panelSlots/Panel2.vue'
	import Panel3 from './../panelSlots/Panel3.vue'

  export default {
		components: {
			HeaderPanel,
			Panel0,
			Panel1,
			Panel2,
			Panel3
		},
		props: {
			currentPanel: {
				type: String,
				required: true
			},
			showPanel: {
				type: Boolean,
				required: true
			},
			titleP1: {
				type: String,
				required: true
			},
			titleP2: {
				type: String,
				required: true
			}
		},
		data () {
			return {
				isClosing: false
			}
		},
		computed: {
			...mapState(['mainColor'])
		},
		methods: {
			closePanel () {
				// -1 value is here meaning menu items are all inactive
				this.$store.commit(mutationTypes.UPDATE_CURRENT_MENU_ITEM_ACTIVE, -1)
				this.$emit('hidePanel')
			},
			animationFinished () {
				this.$emit('panelClosed')
				this.isClosing = false
			}
		}
  }
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.PanelHorizontal {
		&-content {
			position: absolute;
			bottom: $menuHeight;
			width: 100%;
			height: $horizontalPanel-portrait;
			padding: $padding-small;
			overflow: auto;
		}
	}

	@media (orientation: landscape) {
		.PanelHorizontal-content {
			height: $horizontalPanel-landscape;
		}
	}

	.pop-enter-active,
	.pop-leave-active {
		transition: transform .3s ease-in-out, opacity .3s ease-in-out;
	}

	.pop-enter, .pop-leave-to {
		transform: scale(0.95);
		opacity: 0;
	}
</style>
