<script setup>
	import '@wangeditor/editor/dist/css/style.css'
	import * as echarts from "echarts"
	import {
		useWangEditor,
		WeEditable,
		WeEditor,
		WeToolbar
	} from 'wangeditor5-for-vue3'
	import {
		onMounted,
		ref
	} from "vue"
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
	const chart1 = ref(null);
	let name = "Jason"

	const {
		opts,
		handle,
		instance,
		clearContent,
		syncContent,
		reloadEditor
	} = useWangEditor({
		// 防抖时长。当会触发重载的配置项发生变化 365ms 后，编辑器会重载
		reloadDelary: 365,
		// 编辑器配置
		toolbar: {},
		// 菜单栏配置
		editable: {
			config: {
				itemHeight: 500,
				placeholder: '请开始你的表演'
			}
		}
	})


	function sayHello() {
		alert(`hello ${name}, haha`)
	}
	const chart = () => {
		// 解决echarts在vue中切换到其他页面再返回来就不显示的问题
		chart1.value.setAttribute("_echarts_instance_", "");
		// 这里使用chart1.value的形式获取到dom节点
		let myChart = echarts.init(chart1.value);

		// 绘制图表
		myChart.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			grid: {
				top: "30",
				right: "30",
				bottom: "30",
				left: "30",
			},
			legend: {
				show: true,
				data: ['1212', '2323'],
				top: 30,
				left: 30,
				itemGap: 26,
				itemHeight: 5,
			},
			xAxis: {
				type: "category",
				data: ["1", "2", "3", "4", "5", "6", "7"],
			},
			yAxis: {
				type: "value",
			},
			series: [{
					name: '1212',
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: "line",
					smooth: true,
				},
				{
					name: '2323',
					data: [545, 45, 799, 44, 744, 1224, 544],
					type: "line",
					smooth: true,
				},
			],
		});
		// echarts 自适应，如果dom元素是自适应高宽，会随之改变echarts大小
		window.addEventListener("resize", () => {
			myChart.resize();
		});
	};
	onMounted(() => {
		chart()
	})
</script>

<template>
	<div class="common-layout">
		<el-container>
			<Sidebar></Sidebar>
			<el-container>
				<el-header><el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
						@select="handleSelect">
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

<WeEditor  :handle="handle"/>



					<div class="chartSection p-50px" ref="chart1">曲线图</div>


					<div class="h-6" />
					<div @click="sayHello"> {{ name }}</div>
					<img alt="Vue logo" src="./assets/logo.png" />
					<HelloWorld msg="Hello Vue 3 + Vite" />
					<i-ep-menu></i-ep-menu>
					<i-ep-edit></i-ep-edit>
					<el-icon>
						<Clock />
					</el-icon>
					<el-button-group>
						<el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
						<el-button type="primary">
							Next Page<el-icon class="el-icon--right">
								<ArrowRight />
							</el-icon>
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
	.chartSection {
		width: 1000px;
		height: 800px;
		background-color: #fff;
		border-radius: 5px;
		border: 1px solid #ccc;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $baseColor;
	}
</style>