<template>
  <div class="uk-text-center">
    <div v-if="username">
      <p
        class="uk-text-lead"
      >
        Hi, {{ username }}.
      </p>
      <p>Let's get started.</p>
      <router-link to="/new-streak">
        <span uk-icon="arrow-right" />
      </router-link>
    </div>
    <div v-else>
      <p class="uk-text-meta">
        Go to
        <a
          href="https://telegram.me/momentumm_bot"
          target="blank"
        >
          telegram.me/momentumm_bot
        </a>
      </p>
      <p class="uk-text-meta">...and then enter this code:</p>
      <p
        class="uk-text-lead"
        v-text="signupCode"
      />
    </div>
  </div>
</template>

<script>
export default {
	name: 'Onboarding',
	data() {
		return {
			signupCode: null,
			username: '',
		};
	},
	mounted() {
		if (localStorage.getItem('momentummTelegramUsername')) {
			this.$router.push('/streaks');
		}
		this.signupCode = `_${Math.random()
			.toString(36)
			.substr(2, 9)}`;
		this.$store
			.dispatch('user/createSignupCode', this.signupCode)
			.then(({ data }) => {
				this.username = data.user.first_name || data.user.username;
				localStorage.setItem('momentummTelegramId', data.user.id);
			});
	},
};
</script>

<style>
</style>
