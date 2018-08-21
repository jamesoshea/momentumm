<template>
  <div id="app">
    <div class="uk-container">
      <h2 class="uk-heading-primary">Streaks</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'App',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
	mounted() {
		axios.get('/api/streaks').then((response) => console.log(response));
	},
};
</script>

<style lang="css" scoped>
</style>
