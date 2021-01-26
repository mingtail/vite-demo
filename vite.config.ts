import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/**
 * plugins:
 * vue: https://github.com/vitejs/vite/tree/main/packages/plugin-vue
 * vueJsx: https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
 */
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
