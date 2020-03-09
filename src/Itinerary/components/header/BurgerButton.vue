<template lang="html">
	<i class="material-icons" :style="{ color: mainColor}" alt="Menu icon">menu</i>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['mainColor'])
		}
	}
</script>
