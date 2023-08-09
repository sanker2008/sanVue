<template>
	<h1>Dashboard</h1>
	<WeEditor :handle="handle"></WeEditor>
</template>

<script setup>
	import '@wangeditor/editor/dist/css/style.css'
	import { WeEditor, useWangEditor } from 'wangeditor5-for-vue3'
	//ElMessageBox('1212')
	const { opts, handle, instance, clearContent, syncContent, reloadEditor } = useWangEditor({
	        // 防抖时长。当会触发重载的配置项发生变化 365ms 后，编辑器会重载
	        reloadDelary: 365,
	        // 编辑器配置
	        toolbar: {},
	        // 菜单栏配置
	        editable: {
	          config: {
	            placeholder: '请开始你的表演'
	          }
	        }
	      })
</script>

<style>
	
</style>