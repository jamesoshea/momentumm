<template>
  <div class="uk-text-center">
    <p class="uk-text-meta">
      Go to
      <a
        href="https://telegram.me/momentumm_bot"
        target="blank"
      >
        telegram.me/momentumm_bot
      </a>
    </p>
    <p class="uk-text-meta">type '/start' and then enter this code:</p>
    <p
      class="uk-text-lead"
      v-text="signupCode"
    />
  </div>
</template>

<script>
export default {
	name: 'Onboarding',
	data() {
		return {
			signupCode: null,
		};
	},
	mounted() {
		if (localStorage.getItem('momentummTelegramUsername')) {
			this.$router.push('/streaks');
		}
		this.signupCode = `_${Math.random()
			.toString(36)
			.substr(2, 9)}`;
		this.$store.dispatch('user/createSignupCode', this.signupCode);
	},
};
</script>

<style>
</style>
