import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
// 按需自动导入ElementPlus组件和图标
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
const { resolve } = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  vue(),
	  viteMockServe({
		  mockPath: '/mock',
		  localEnabled: true
	  }),
	  AutoImport({
		resolvers: [
			// 自动导入 Element Plus 组件
			ElementPlusResolver(),
			// 自动导入图标组件 https://iconify.design/
			IconResolver({
				prefix: 'i'
			})
		],
	  }),
	  Components({
		resolvers: [
			// 自动注册 Element Plus 组件
			ElementPlusResolver(),
			// 自动注册图标组件 https://iconify.design/
			IconResolver({
				//enabledCollections: ['ep','ph']
			})
		],
	  }),
	  Icons({
		  autoInstall: true
	  })
  ],
  resolve: {
	  alias: {
		  "@": resolve(__dirname, "./src"),
		  "@components": resolve(__dirname, "./src/components"),
		  "@views": resolve(__dirname, "./src/views"),
	  }
  },
  css: {
	  preprocessorOptions: {
		  scss: {
			  additionalData: '@import "@/styles/globalVariable.scss"; @import "@/styles/styles.scss";'
		  }
	  }
  },
  server: {
	  hmr: true
  }
})
