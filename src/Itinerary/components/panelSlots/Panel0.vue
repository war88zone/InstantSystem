<template lang="html">
	<div class="Panel0">
		<field-panel id="panel0-from"
			class="Panel0-field Panel0-field--withReverse"
			:title="'départ'"
			:value="getFromValue"
			:placeholder="'adresse, arrêt, lieu...'"
			@fieldChanged="fieldFromChanged"></field-panel>
		<button class="Panel0-reverse" @click="reverseDatas" :style="{ backgroundColor: mainColorDark }">
			<i class="Panel0-Reverse-icon material-icons"
				:style="{ color: secondColor}"
				alt="Reverse icon">swap_vert</i>
		</button>
		<field-panel id="panel0-to"
			class="Panel0-field Panel0-field--withReverse"
			:title="'arrivée'"
			:value="getToValue"
			:placeholder="'adresse, arrêt, lieu...'"
			@fieldChanged="fieldToChanged"></field-panel>
		<div class="Panel0-container">
			<field-panel class="Panel0-field Panel0-field--small"
			:title="'date'"
			:placeholder="'29/05/1990'"></field-panel>
			<field-switch class="Panel0-switch" :title="'origine'" :label1="'Départ'" :label2="'Arrivée'"></field-switch>
		</div>
		<div class="Panel0-container Panel0-container--center">
			<button-rounded class="Panel0-searchButton" :label="'Rechercher'" @buttonClicked="searchItinerary"></button-rounded>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import ButtonRounded from './../../../common/components/ButtonRounded.vue'
	import FieldPanel from './../panel/FieldPanel.vue'
	import FieldSwitch from './../panel/FieldSwitch.vue'

  export default {
		components: {
			ButtonRounded,
			FieldPanel,
			FieldSwitch
		},
		data () {
			return {
				fromFieldValue: '',
				toFieldValue: ''
			}
		},
		mounted () {
			let fieldFrom = document.querySelector('#panel0-from')
			document.querySelector('.Panel0-reverse').style.top = (fieldFrom.offsetTop + fieldFrom.offsetHeight) + 'px'
		},
		methods: {
			fieldFromChanged (value) {
				this.fromFieldValue = value
			},
			fieldToChanged (value) {
				this.toFieldValue = value
			},
			reverseDatas () {
				if (this.fromFieldValue !== '' || this.toFieldValue !== '') {
					document.querySelector('.Panel0-reverse').classList.toggle('Panel0-reverse--rotate')
				}
				let toFieldValueTmp = this.toFieldValue
				this.toFieldValue = this.fromFieldValue
				this.fromFieldValue = toFieldValueTmp
			},
			searchItinerary () {
				alert('search Itinerary')
				this.closePanel()
			}
    },
		computed: {
			...mapState(['mainColorDark', 'secondColor']),
			getFromValue () {
				return this.fromFieldValue
			},
			getToValue () {
				return this.toFieldValue
			}
		}
  }
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_mixins';
	@import '../../../common/scss/_variables';

	.Panel0 {
		&-field {
			margin: $padding-small 0;

			&--withReverse {
				width: calc(100% - #{$padding-small} - 50px);
			}

			&--small {
				width: 80px;
				margin-right: $padding-large;
			}
		}

		&-reverse {
			@include border-around-icon;

			position: absolute;
			right: $padding-small;
			width: 50px;
			height: 50px;
			transition: transform .3s ease-in-out;
			cursor: pointer;

			&--rotate {
				transform: rotate(180deg);
			}
		}

		&-container {
			display: flex;
			align-items: center;

			&--center {
				justify-content: center;
			}
		}

		&-searchButton {
			margin-top: $padding-large;
		}
	}
</style>
