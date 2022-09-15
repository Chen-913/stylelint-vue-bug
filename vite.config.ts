/* eslint-disable import/no-extraneous-dependencies */
// 引入开发依赖导致的错误，不需要显示错误
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
// eslint-disable-next-line import/no-unresolved
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const path = require('path');

// unplugin-vue-components/vite 包的按需引入配置项
// https://www.npmjs.com/package/unplugin-vue-components
const ComponentsOptions = {
  directoryAsNamespace: false,
  // 设置为 true 能够为 volar 提供更好的支持
  dts: true,
  dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]dist[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  // 以后组件库需要异步加载的就把解析器放 resolvers 数组里
  resolvers: [ElementPlusResolver()],
  // importPathTransform: (v) => {
  //   console.log(v);
  //   return v;
  // },
};

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 按需引入的插件
    Components(ComponentsOptions),
    // eslint 会检查 src 下的所有 .js 文件，所有 .vue 文件
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 处理全局别名
    },
  },
  server: {
    // vite 热更新，禁用或配置 HMR 连接
    hmr: true,
    port: 3000, // 端口号
  },
});
