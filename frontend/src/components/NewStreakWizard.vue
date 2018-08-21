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
        >
        <legend
          class="uk-text"
          v-text="'Reminder Time'"
        />
        <label>
          <input
            v-model="newStreak.type"
            :value="'DO'"
            type="radio"
            name="do-dont"
            class="uk-radio"
          >
          DO IT
        </label>
        <label>
          <input
            v-model="newStreak.type"
            :value="'DONT'"
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
				type: 'DO',
			},
		};
	},
	methods: {
		submitStreak() {
			if (!streakValidator(this.newStreak)) {
				return;
			}
			console.log('hello');
			this.$store.dispatch('streak/addNewStreak', this.newStreak);
		},
	},
};
</script>

<style>
</style>
