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
		name: 'notFound',
		meta: {
			title: '404 Page Not Found!'
		},
		component: ()=> import("@views/404.vue")
	},
	{
		path: '/login',
		name: 'login',
		component: ()=> import("@views/Login.vue")
	}
]
export default commRoute