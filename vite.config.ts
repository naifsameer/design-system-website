import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      hydratable: true,
    },

    preprocess: sveltePreprocess({
      postcss: true,
      scss: true,
    }),
  })],


  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      store: path.resolve(__dirname, './src/store'),
      pages: path.resolve(__dirname, './src/pages'),
      svg: path.resolve(__dirname, './src/svg'),
    },
  },
})
