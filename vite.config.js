import { defineConfig } from 'vite'
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
	  AutoImport({
		resolvers: [
			ElementPlusResolver(),
			IconResolver({
				prefix: 'Icon'
			})
		],
	  }),
	  Components({
		resolvers: [
			ElementPlusResolver(),
			IconResolver({
				enabledCollections: ['ep']
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
	  
  }
})
