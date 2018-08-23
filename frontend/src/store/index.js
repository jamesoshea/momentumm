import Vue from 'vue';
import Vuex from 'vuex';

import StreakModule from './streak';
import UserModule from './user';

Vue.use(Vuex);

const modules = {
	streak: StreakModule,
	user: UserModule,
};

export default new Vuex.Store({
	modules,
});
