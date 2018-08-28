<template>
  <div class="uk-text-center">
    <div v-if="username">
      <GetStarted
        :username="username"
      />
    </div>
    <div v-else>
      <p class="uk-text-lead">
        Momentumm is a basic streak tracker.
      </p>
      <p class="uk-text">
        Use it to motivate you to do something every day.
        It will send you a Telegram reminder at a time of your choosing, and you can
        track your progress here.
      </p>
      <TelegramSignup
        @accountCreated="handleAccountCreation"
      />
    </div>
  </div>
</template>

<script>
import GetStarted from './GetStarted.vue';
import TelegramSignup from './TelegramSignup.vue';

export default {
	name: 'Onboarding',
	components: {
		GetStarted,
		TelegramSignup,
	},
	data() {
		return {
			username: '',
		};
	},
	mounted() {
		if (localStorage.getItem('momentummTelegramChatId')) {
			this.$router.push('/streaks');
		}
	},
	methods: {
		handleAccountCreation(username) {
			this.username = username;
		},
	},
};
</script>
