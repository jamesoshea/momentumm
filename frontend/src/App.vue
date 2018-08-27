<template>
  <div id="app">
    <div class="uk-container">
      <nav
        class="uk-navbar-container"
        uk-navbar
      >
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-parent">
              <router-link :to="'/new-streak'">
                <a>New</a>
              </router-link>
            </li>
            <li class="uk-parent">
              <router-link :to="'/streaks'">
                <a>All Streaks</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import NewStreakWizard from './components/NewStreakWizard.vue';
import StreakTable from './components/StreakTable.vue';

export default {
	name: 'App',
	components: {
		NewStreakWizard,
		StreakTable,
	},
};
</script>

<style lang="css" scoped>
</style>
