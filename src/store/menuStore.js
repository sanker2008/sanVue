import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menuKeys', () => {
	const menuList = ref([])
	const permList = ref([])
	
	function setMenuList(menus){
		menuList.value = menus
	}
	function setPermList(authoritys) {
	    permList.value = authoritys
	}
	return {
		menuList,
		setMenuList,
		setPermList
	}
})
/*
export const useMenuStore = defineStore('menuKeys',{
	state: () => ({
		list: []
	}),
	actions: {
		setMenu(){
			//....
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				storage: localStorage
			}
			// storage 存储到哪里 sessionStorage/localStorage
			// paths是一个数组,要存储缓存的变量,当然也可以写多个
			// paths如果不写就默认存储state里边的所有数据，如果写了就存储指定的变量
		]
	}
})*/