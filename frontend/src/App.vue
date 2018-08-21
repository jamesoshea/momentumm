<template>
  <div id="app">
    <div
      id="my-id"
      uk-offcanvas="overlay: true"
    >
      ...
    </div>
    <div class="uk-container">
      <h2 class="uk-heading-primary">Streaks</h2>
      <NewStreakWizard />
      <StreakTable />
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
