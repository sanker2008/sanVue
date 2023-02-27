import axios from 'axios';
import router from 'vue-router';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


axios.interceptors.request.use(
	async config => {
		config.headers.token = '';
		return config;
	},
	error => {
		return Promise.error(error);
	}
)	
export default {
	
}