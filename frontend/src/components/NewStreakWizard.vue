<template>
  <div>
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
          v-text="'Remider Time'"
        />
        <input
          v-model="newStreak.reminderTime"
          type="time"
          class="uk-input"
          pattern="[0-9]{2}:[0-9]{2}"
        >
        <legend
          class="uk-text"
          v-text="'Reminder Time'"
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
      <button class="uk-button-primary uk-width-1-1">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { streakValidator } from '../util/validators';

export default {
	name: 'NewStreakWizard',
	data() {
		return {
			newStreak: {
				title: '',
				reminderTime: '',
				type: true,
				userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			},
		};
	},
	methods: {
		submitStreak() {
			if (!streakValidator(this.newStreak)) {
				return;
			}
			this.$store
				.dispatch('streak/addNewStreak', this.newStreak)
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
