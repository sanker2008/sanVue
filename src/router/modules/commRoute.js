const commRoute = [
	{ 
		path: '/:pathMatch(.*)*', 
		//name: 'NotFound', 
		meta: {
			title: '404 Page Not Found!'
		},
		component: ()=> import("@views/404.vue")
	},
	{
		path: '/404',
		meta: {
			title: '404 Page Not Found!'
		},
		component: ()=> import("@views/404.vue")
	},
	{
		path: '/login',
		component: ()=> import("@views/login.vue")
	}
]
export default commRoute