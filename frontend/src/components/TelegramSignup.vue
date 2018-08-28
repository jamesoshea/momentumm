<template>
  <div>
    <div v-if="showTelegramLink">
      <p class="uk-text">
        Now, go to
        <a
          href="https://telegram.me/momentumm_bot"
          target="blank"
        >
          telegram.me/momentumm_bot
        </a>
        to send the code to our bot and get started.
      </p>
    </div>
    <div v-else>
      <p class="uk-text-meta">First, copy this code:</p>
      <p
        class="uk-text-lead"
        v-text="signupCode"
      />
      <button
        class="uk-button uk-button-default"
        @click="copySignupCode"
        v-text="'Copy to clipboard'"
      />
    </div>
  </div>
</template>

<script>
export default {
	name: 'TelegramSignup',
	data() {
		return {
			showTelegramLink: false,
			signupCode: null,
		};
	},
	mounted() {
		this.signupCode = `_${Math.random()
			.toString(36)
			.substr(2, 9)}`;
		this.$store
			.dispatch('user/createSignupCode', {
				userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				signupCode: this.signupCode,
			})
			.then(({ data }) => {
				const username = data.user.first_name || data.user.username;
				localStorage.setItem('momentummTelegramChatId', data.chat.id);
				localStorage.setItem(
					'momentummTelegramFirstName',
					data.user.first_name,
				);
				this.$emit('accountCreated', username);
			});
	},
	methods: {
		copySignupCode() {
			const textArea = document.createElement('textarea');
			document.body.appendChild(textArea);
			textArea.value = this.signupCode;
			textArea.focus();
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			this.showTelegramLink = true;
		},
	},
};
</script>
