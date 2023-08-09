<template>
	<div class="h-6">
				<div @click="sayHello"> {{ name }}</div>
				<img alt="Vue logo" src="@/assets/logo.png" />
				<HelloWorld msg="Hello Vue 3 + Vite" />
				<i-ph-AddressBookThin></i-ph-AddressBookThin>
				<i-ep-menu></i-ep-menu>
				<i-ep-edit></i-ep-edit>
				<i-ep-clock></i-ep-clock>
				<el-icon><Clock /></el-icon>
				<i icon="bi:airplane"></i>
			<el-button-group>
				<el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
				<el-button type="primary">
				Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
				</el-button>
			</el-button-group>
			<el-button-group class="ml-4">
				<el-button type="primary" :icon="Edit" />
				<el-button type="primary" :icon="Share" />
				<el-button type="primary" :icon="Delete" />
			  </el-button-group>
			  
			  <el-icon :size="size" :color="color">
				<ArrowRight />
			  </el-icon>
			  
	</div>
</template>

<script setup>
	import {
	  ArrowLeft,
	  ArrowRight,
	  Delete,
	  Edit,
	  Clock,
	  Share,
	} from '@element-plus/icons-vue'
	
	let name = "Jason";
	function sayHello(){
		alert(`hello ${name}, haha`)
	}
	
</script>

<style>
</style>