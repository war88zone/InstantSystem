<template lang="html">
	<div class="Panel0">
		<field-panel class="Panel0-field" :title="'départ'" :placeholder="'adresse, arrêt, lieu...'"></field-panel>
		<field-panel class="Panel0-field" :title="'arrivée'" :placeholder="'adresse, arrêt, lieu...'"></field-panel>
		<div class="Panel0-container">
			<field-panel class="Panel0-field Panel0-field--small" :title="'date'" :placeholder="'29/05/1990'"></field-panel>
			<field-switch class="Panel0-switch" :title="'origine'" :label1="'Départ'" :label2="'Arrivée'"></field-switch>
		</div>
		<div class="Panel0-container Panel0-container--center">
			<button-panel class="Panel0-searchButton" :label="'Rechercher'" @buttonClicked="searchItinerary"></button-panel>
		</div>
	</div>
</template>

<script>
	import ButtonPanel from './../panel/ButtonPanel.vue'
	import FieldPanel from './../panel/FieldPanel.vue'
	import FieldSwitch from './../panel/FieldSwitch.vue'

  export default {
		components: {
			ButtonPanel,
			FieldPanel,
			FieldSwitch
		},
		methods: {
			searchItinerary () {
				alert('search Itinerary')
				this.closePanel()
			}
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/_variables';

	.Panel0 {
		&-field {
			margin: $padding-small 0;

			&--small {
				width: 80px;
				margin-right: $padding-large;
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
