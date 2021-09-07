import Vue from "vue";
import VueRouter from "vue-router";

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
		component: () => import('@/views/Lobby')
	}, {
		path: "/profile",
		name: "Profile",
		component: () => import('@/views/Profile')
	}, {
		path: "/game",
		name: "Game",
		component: () => import('@/views/Game')
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
