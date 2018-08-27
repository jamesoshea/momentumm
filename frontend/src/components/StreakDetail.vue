<template>
  <div>
    <h2
      class="uk-heading-divider"
      v-text="currentStreak.title"
    />
    <h3
      class="uk-heading-line"
    >
      <span>stats</span>
    </h3>

    <h3
      class="uk-heading-line"
    >
      <span>update</span>
    </h3>
    <button
      class="uk-button uk-button-default uk-width-1-1"
      @click="updateStreak(true)"
      v-text="'I SUCCEEDED'"
    />
    <button
      class="uk-button uk-button-default uk-width-1-1 uk-margin-top"
      @click="updateStreak(false)"
      v-text="'TOMORROW I WILL SUCCEED'"
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
