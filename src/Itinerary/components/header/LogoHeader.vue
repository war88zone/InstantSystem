<template lang="html">
	<img class="LogoHeader" :src="getLogoHeader" alt="Logo of the company">
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['logoHeader']),
			getLogoHeader () {
				return this.logoHeader ? require('./../../assets/' + this.logoHeader + '.png') : ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.LogoHeader {
		max-width: 200px;
    height: 40px;
    background-size: contain;
	}
</style>
