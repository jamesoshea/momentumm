<template>
  <div>
    <p
      class="uk-text-lead"
      v-text="userGreeting"
    />
    <p
      class="uk-text-meta"
      v-text="'Let\'s get started'"
    />
    <router-link to="/new-streak">
      <span uk-icon="icon: arrow-right; ratio: 2" />
    </router-link>
  </div>
</template>

<script>
export default {
	name: 'GetStarted',
	props: {
		username: {
			type: String,
			required: true,
		},
	},
	computed: {
		userGreeting() {
			return `Great job, ${this.username}.`;
		},
	},
};
</script>
