<template>
  <div>
    wow
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'StreakTable',
	computed: {
		...mapGetters({
			streaks: 'streak/streaks',
		}),
	},
	mounted() {
		this.$store.dispatch('streak/getAllStreaks');
	},
};
</script>

<style>
</style>
