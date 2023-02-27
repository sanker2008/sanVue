const commRoute = [
	{ 
		path: '/:pathMatch(.*)*', 
		//name: 'NotFound', 
		component: import("@views/404.vue")
	},
	/*{
		path: '/404',
		component: ()=> import("@views/404.vue")
	},*/
	{
		path: '/login',
		component: ()=> import("@views/login.vue")
	}
]
export default commRoute