<template>
  <div>
    <h3
      class="uk-heading uk-text-center"
      v-text="'Your Streaks'"
    />
    <table
      v-if="streaks.length"
      class="uk-table"
    >
      <tbody>
        <tr
          v-for="streak in streaks"
          :key="streak._id"
        >
          <td v-text="humanizeBoolean(streak.type)"/>
          <td v-text="streak.title"/>
          <td v-text="streak.reminderTime"/>
          <td>
            <span
              uk-icon="icon: trash"
              @click="deleteStreak(streak._id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
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
	methods: {
		deleteStreak(streakId) {
			this.$store
				.dispatch('streak/deleteStreak', streakId)
				.then(() => {
					this.$store.dispatch('streak/getAllStreaks');
				})
				.catch(() => {});
		},
		humanizeBoolean(boolean) {
			return boolean ? 'DO' : "DON'T";
		},
	},
};
</script>

<style>
</style>
