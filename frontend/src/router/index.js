import Router from 'vue-router';
import Vue from 'vue';

import Onboarding from '../components/Onboarding.vue';
import NewStreakWizard from '../components/NewStreakWizard.vue';
import StreakTable from '../components/StreakTable.vue';

const routes = [
	{ path: '/', redirect: '/onboarding' },
	{ path: '/onboarding', component: Onboarding },
	{ path: '/new-streak', component: NewStreakWizard },
	{ path: '/streaks', component: StreakTable },
];

Vue.use(Router);

const router = new Router({
	routes,
});

export default router;
