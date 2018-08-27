<template>
  <div>
    wow
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'StreakDetail',
	computed: {
		...mapGetters({
			streaks: 'streak/streaks',
		}),
		currentStreak() {
			return this.streaks.find(
				({ _id }) => _id === this.$route.params.streakId,
			);
		},
	},
};
</script>
