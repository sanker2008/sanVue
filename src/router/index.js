import { createRouter,createWebHashHistory } from 'vue-router'
import commRoute from './modules/commRoute'
import adminRoute from './modules/adminRoute'
import webRoute from './modules/webRoute'

//console.log(import.meta.env.VITE_BASE_URL)
const routes = [].concat(adminRoute).concat(webRoute);
const router = createRouter({
	history: createWebHashHistory(),
	routes: [...commRoute, ...routes]
});

export default router