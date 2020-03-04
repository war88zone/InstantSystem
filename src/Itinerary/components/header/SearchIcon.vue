<template lang="html">
	<i class="material-icons" :style="{ color: fillColor}" alt="Search icon">>search</i>
</template>

<script>
	export default {
		props: {
			fillColor: {
				type: String,
				required: false,
				default: '#454545'
			}
		}
	}
</script>
