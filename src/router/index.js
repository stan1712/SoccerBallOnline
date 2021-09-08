import Vue from "vue";
import VueRouter from "vue-router";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('@/views/Home')
	}, {
		path: "/access",
		name: "Access",
		component: () => import('@/views/Access')
	}, {
		path: "/lobby",
		name: "Lobby",
		component: () => import('@/views/Lobby'),
		meta: {
			requiresAuth: true
		}
	}, {
		path: "/profile",
		name: "Profile",
		component: () => import('@/views/Profile'),
		meta: {
			requiresAuth: true
		}
	}, {
		path: "/game",
		name: "Game",
		component: () => import('@/views/Game'),
		meta: {
			requiresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const isAuthenticated = firebase.auth().currentUser;

	if (requiresAuth && !isAuthenticated) {
		next("/access");
	} else {
		next();
	}
});

export default router;
