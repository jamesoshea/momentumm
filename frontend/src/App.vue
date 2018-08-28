<template>
  <div id="app">
    <nav
      v-if="alreadyOnboarded"
      class="uk-navbar-container"
      uk-navbar
    >
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo">Momentumm</a>
      </div>
      <div class="uk-navbar-right uk-margin-right">
        <ul class="uk-navbar-nav">
          <li class="uk-parent">
            <a @click="$router.push('/new-streak')">New</a>
          </li>
          <li class="uk-parent">
            <a @click="$router.push('/streaks')">All</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="uk-container uk-padding">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
	name: 'App',
	computed: {
		alreadyOnboarded() {
			return this.$route.path !== '/onboarding';
		},
	},
};
</script>

<style lang="css" scoped>
</style>
