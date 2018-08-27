<template>
  <div>
    <h2
      class="uk-heading-divider"
      v-text="currentStreak.title"
    />
    <button
      class="uk-button uk-button-default"
      @click="updateStreak(true)"
      v-text="'DID IT'"
    />
    <button
      class="uk-button uk-button-default"
      @click="updateStreak(false)"
      v-text="'DIDN\'T IT'"
    />
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
	methods: {
		updateStreak(result) {
			const payload = {
				date: new Date().toLocaleDateString(),
				result,
				streakId: this.$route.params.streakId,
			};
			this.$store.dispatch('streak/updateStreak', payload);
		},
	},
};
</script>
