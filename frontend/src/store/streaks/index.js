import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
	streaks: [],
};

export default {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
};
