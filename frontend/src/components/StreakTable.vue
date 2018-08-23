<template>
  <div>
    <table
      v-if="streaks.length"
      class="uk-table"
    >
      <thead>
        <tr>
          <th>title</th>
          <th>do it or not</th>
          <th>reminder time</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="streak in streaks"
          :key="streak._id"
        >
          <td>{{ streak.type }}</td>
          <td>{{ streak.title }}</td>
          <td>{{ streak.reminderTime }}</td>
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
	},
};
</script>

<style>
</style>
