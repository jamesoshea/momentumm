<template>
	<div v-if="currentStreak">
		<h2
			class="uk-heading-divider"
			v-text="currentStreak.title"
		/>
		<h3
			class="uk-heading-line"
		>
			<span>stats</span>
		</h3>
		longest streak: {{ currentStreak.stats.longestStreak }} days<br>
		current streak: {{ currentStreak.stats.currentStreak }} days
		<h3
			class="uk-heading-line"
		>
			<span>update</span>
		</h3>
		<button
			class="uk-button uk-button-default uk-width-1-1 uk-display-block"
			@click="updateStreak(true)"
		>
			I DID THIS TODAY
		</button>
		<div
			v-if="streakUpdating"
			class="streak__loading-spinner"
			uk-spinner="ratio:0.5"
		/>
		<div
			class="uk-text-meta uk-text-center"
			v-text="errorMessage"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'StreakDetail',
	data() {
		return {
			errorMessage: '',
			streakUpdating: false,
		};
	},
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
	mounted() {
		const chatId = localStorage.getItem('momentummTelegramChatId');
		if (!chatId) {
			return;
		}
		this.$store.dispatch('streak/getAllStreaks', chatId);
	},
	methods: {
		updateStreak(result) {
			this.streakUpdating = true;
			const payload = {
				date: Date.now(),
				result,
				streakId: this.$route.params.streakId,
			};
			this.$store
				.dispatch('streak/updateStreak', payload)
				.then(() => {
					this.streakUpdating = false;
					this.errorMessage = '';
				})
				.catch((error) => {
					this.streakUpdating = false;
					this.errorMessage = error.response.data;
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.streak__loading-spinner {
	margin-top: 1rem;
	width: 100%;
	text-align: center;
}
</style>
