<template>
  <div>
    <h3 class="uk-heading">New Streak</h3>
    <form @submit.prevent="submitStreak">
      <fieldset class="uk-fieldset">
        <legend
          class="uk-text"
          v-text="'Title'"
        />
        <input
          v-model="newStreak.title"
          type="text"
          class="uk-input"
          placeholder="Title"
        >
        <legend
          class="uk-text"
          v-text="'Reminder Time'"
        />
        <input
          v-model="newStreak.reminderTime"
          type="time"
          class="uk-input"
          pattern="[0-9]{2}:[0-9]{2}"
        >
        <legend
          class="uk-text"
          v-text="'Type'"
        />
        <label>
          <input
            v-model="newStreak.type"
            :value="true"
            type="radio"
            name="do-dont"
            class="uk-radio"
          >
          DO IT
        </label>
        <label>
          <input
            v-model="newStreak.type"
            :value="false"
            type="radio"
            name="do-dont"
            class="uk-radio"
          >
          DON'T DO IT
        </label>
      </fieldset>
      <button
        :disabled="streaks.length >= 3"
        class="uk-button-primary uk-width-1-1"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { streakValidator } from '../util/validators';

export default {
	name: 'NewStreakWizard',
	data() {
		return {
			newStreak: {
				chatId: localStorage.getItem('momentummTelegramChatId'),
				reminderTime: '',
				title: '',
				type: true,
				userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			},
		};
	},
	computed: {
		...mapGetters({
			streaks: 'streak/streaks',
		}),
	},
	methods: {
		submitStreak() {
			if (!streakValidator(this.newStreak)) {
				return;
			}
			this.$store
				.dispatch('streak/addNewStreak', this.newStreak)
				.then(() => {
					this.$store.dispatch('streak/getAllStreaks', this.newStreak.chatId);
					this.$router.push('/streaks');
				})
				.catch(() => {});
		},
	},
};
</script>

<style>
</style>
