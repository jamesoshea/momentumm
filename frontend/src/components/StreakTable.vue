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
          @click="$router.push(`/streaks/${streak._id}`)"
        >
          <td
            class="uk-text-center"
            v-text="humanizeBoolean(streak.type)"/>
          <td
            class="uk-text-center"
            v-text="streak.title"/>
          <td
            class="uk-text-center"
            v-text="streak.reminderTime"/>
          <td class="uk-text-center">
            <span
              uk-icon="icon: trash"
              @click.stop="deleteStreak(streak._id)"
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
	data() {
		return {
			chatId: localStorage.getItem('momentummTelegramChatId'),
		};
	},
	computed: {
		...mapGetters({
			streaks: 'streak/streaks',
		}),
	},
	mounted() {
		this.$store.dispatch('streak/getAllStreaks', this.chatId);
	},
	methods: {
		deleteStreak(streakId) {
			this.$store
				.dispatch('streak/deleteStreak', streakId)
				.then(() => {
					this.$store.dispatch('streak/getAllStreaks', this.chatId);
				})
				.catch(() => {});
		},
		humanizeBoolean(boolean) {
			return boolean ? 'DO IT' : "DON'T IT";
		},
	},
};
</script>

<style>
</style>
