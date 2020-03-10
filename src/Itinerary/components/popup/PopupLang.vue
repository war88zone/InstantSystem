<template lang="html">
	<transition name="fade" class="PopupLang" v-on:after-leave="animationFinished" mode="out-in">
		<div class="PopupLang-mask" v-show="showPopup" @click.stop="clickFromMask">
			<div class="PopupLang-content" :style="{ backgroundColor: mainColor}">
				<header-popup :title="'Selectionner votre langue'" @closePopup="closePopup"></header-popup>
				<radio-button-list :items="availableLangs"
					:value="currentLang"
					@change="updateCurrentLang">
        </radio-button-list>
			</div>
		</div>
  </transition>
</template>

<script>
	import { mapState } from 'vuex'
	import * as mutationTypes from './../../store/mutation-types.js'
	import HeaderPopup from './HeaderPopup.vue'
	import RadioButtonList from './../../../common/components/RadioButtonList.vue'

  export default {
		props: {
			closeFromMask: {
				type: Boolean,
				required: false,
				default: true
			}
		},
		components: {
			HeaderPopup,
			RadioButtonList
		},
		computed: {
			...mapState(['availableLangs', 'currentLang', 'mainColor', 'showPopup'])
		},
		methods: {
			animationFinished () {
				this.$emit('panelClosed')
			},
			clickFromMask (event) {
        if (this.closeFromMask && event.target.className === 'PopupLang-mask') {
          this.closePopup()
        }
      },
			closePopup () {
				this.$store.commit(mutationTypes.UPDATE_SHOW_POPUP, false)
			},
			updateCurrentLang (newLang) {
				this.$store.commit(mutationTypes.UPDATE_CURRENT_LANG, newLang)
				this.closePopup()
			}
		}
  }
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_mixins';
	@import '../../../common/scss/_variables';

	.PopupLang {
		&-mask {
      @include container-mask;
    }

		&-content {
			position: relative;
      align-self: center;
			width: 50%;
			max-width: 500px;
			height: 50%;
			max-height: 300px;
			margin: 0 auto;
      padding: $padding-small;
			z-index: 4;
			overflow: auto;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s ease-in-out;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
