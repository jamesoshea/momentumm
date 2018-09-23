<template>
	<div>
		<form @submit.prevent="submitStreak">
			<fieldset class="uk-fieldset">
				<legend
					class="uk-text uk-margin-top"
					v-text="'Title'"
				/>
				<input
					v-model="newStreak.title"
					type="text"
					class="uk-input"
					placeholder="What do you want to do?"
				>
				<legend
					class="uk-text uk-margin-top"
					v-text="'Reminder Time'"
				/>
				<input
					v-model="newStreak.reminderTime"
					type="time"
					class="uk-input"
					pattern="[0-9]{2}:[0-9]{2}"
				>
				<legend
					class="uk-text uk-margin-top"
					v-text="'Type'"
				/>
				<div class="uk-flex uk-flex-around uk-text-center">
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
				</div>
			</fieldset>
			<button
				:disabled="streaks.length >= 3"
				class="uk-button uk-button-default uk-width-1-1 uk-margin-top"
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
				results: [],
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
