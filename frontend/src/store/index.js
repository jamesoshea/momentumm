import Vue from 'vue';
import Vuex from 'vuex';

import StreakModule from './streaks';

Vue.use(Vuex);

const modules = {
	streak: StreakModule,
};

export default new Vuex.Store({
	modules,
});
