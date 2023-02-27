import Axios from 'axios'
import QS from 'qs'
import router from '@/router'
import { ElMessage, ElMessageBox } from 'element-plus'
// 获取 .env.development / .env.production 里配置好的 VITE_BASE_URL
Axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
const axios = Axios.create({
	//baseURL: '',
	timeout: 60000
})
// console.log(request.defaults.baseURL)
// 请求拦截器
axios.interceptors.request.use(
	config => {
		config.headers.token = sessionStorage.getItem('token')
		return config
	},
	error => {
		ElMessageBox(error.message)
		return Promise.error(error)
	}
)	

// 响应拦截器
axios.interceptors.response.use(
	response => {
		if(response.data.code == '401'){
			sessionStorage.removeItem('token')
			router.push('/login')
			location.reload()
		}
		return response.data
	},
	error => {
		ElMessageBox(error.message)
		return Promise.error(error)
	}
)

const $get = (url, params) =>{
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		})
		.then(res => {
			resolve(res.data)
		})
		.catch(err => {
			reject(err.data)
		})
	})
}

const $post = (url, params) =>{
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params)) // 将对象 序列化成URL的形式，以&进行拼接
		.then(res => {
			resolve(res.data)
		})
		.catch(err => {
			reject(err.data)
		})
	})
}

export default {
	axios,
	$get,
	$post
}