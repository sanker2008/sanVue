import { createRouter,createWebHashHistory } from 'vue-router'
// 进度条插件
import NProgress from 'nprogress'
// 通用路由
import commRoute from './modules/commRoute'
// 后台路由
import adminRoute from './modules/adminRoute'
// 前台路由
import webRoute from './modules/webRoute'

// 页面加载进度条
NProgress.configure({
  showSpinner: false, // true 开启loading false 关闭
});


//console.log(import.meta.env.VITE_BASE_URL)
const routes = [].concat(adminRoute).concat(webRoute);
const router = createRouter({
	history: createWebHashHistory(),
	routes: [...commRoute, ...routes]
});
// 路由跳转前触发
router.beforeEach((to,from,next) => {
	console.log(to)
	if(to.matched.some(record => record.meta.requiresAuth)){
		//判断是否登录，未登录跳转到登录路由
		if(!true){
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		}else{
			NProgress.start()
			next()
		}
	}else{
		NProgress.start()
		next()
	}
// ...
})
// 全局解析守卫，调用时机：在 beforeEach(to, from, next)和组件内beforeRouteEnter(to, from, next)之后，afterEach(to, from)之前调用
router.beforeResolve((to,from,next) => {
	next()
// ...
})
router.afterEach((to, from) => {
	NProgress.done()
// ...
})
export default router