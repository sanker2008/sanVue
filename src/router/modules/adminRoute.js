const adminRoute = [
	{
		path: '/dashboard',
		component: ()=> import("@views/Dashboard.vue"),
		meta: {
			title: '控制面板',
			requiresAuth: true
		// ...
		},
		beforeEnter: (to, from, next) => {
			next()
		// ...
		}
	}
]
export default adminRoute