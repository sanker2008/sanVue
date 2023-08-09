<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'
//ElMessageBox({message: 'are you sure??'})


</script>

<template>
<div class="common-layout">
<el-container>
	<Sidebar></Sidebar>
	
	
  <el-container>
	<el-header>
		
		<el-menu
		router
:default-active="activeIndex"
class="el-menu-demo"
mode="horizontal"
@select="handleSelect"
>
<el-menu-item index="/">Home</el-menu-item>
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
<el-menu-item index="/dashboard">Dashboard</el-menu-item>
<el-menu-item index="/login">Login</el-menu-item>
</el-menu>
</el-header>
	<el-main>
	<router-view></router-view>
	<Footer></Footer>
	</el-main>
	  </el-container>
	</el-container>
	</div>
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
