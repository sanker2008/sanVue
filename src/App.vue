<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Clock,
  Share,
} from '@element-plus/icons-vue'
//ElMessageBox({message: 'are you sure??'})

let name = "Jason";
function sayHello(){
	alert(`hello ${name}, haha`)
}

</script>

<template>
<div class="common-layout">
<el-container>
	<Sidebar></Sidebar>
	
	
  <el-container>
	<el-header><el-menu
:default-active="activeIndex"
class="el-menu-demo"
mode="horizontal"
@select="handleSelect"
>
<el-menu-item index="1">Processing Center</el-menu-item>
<el-sub-menu index="2">
  <template #title>Workspace</template>
  <el-menu-item index="2-1">item one</el-menu-item>
  <el-menu-item index="2-2">item two</el-menu-item>
  <el-menu-item index="2-3">item three</el-menu-item>
  <el-sub-menu index="2-4">
	<template #title>item four</template>
	<el-menu-item index="2-4-1">item one</el-menu-item>
	<el-menu-item index="2-4-2">item two</el-menu-item>
	<el-menu-item index="2-4-3">item three</el-menu-item>
  </el-sub-menu>
</el-sub-menu>
<el-menu-item index="3" disabled>Info</el-menu-item>
<el-menu-item index="4">Orders</el-menu-item>
</el-menu>
</el-header>
	<el-main>
		<div class="h-6" />
			<div @click="sayHello"> {{ name }}</div>
			<img alt="Vue logo" src="./assets/logo.png" />
			<HelloWorld msg="Hello Vue 3 + Vite" />
			<i-ep-menu></i-ep-menu>
			<i-ep-edit></i-ep-edit>
			<el-icon><Clock /></el-icon>
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
	</el-main>
	
	
  </el-container>
</el-container>
</div>




	<router-view></router-view>
	<Footer></Footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $baseColor;
}
</style>
