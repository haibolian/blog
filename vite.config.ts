import DefineOptions from 'unplugin-vue-define-options/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    DefineOptions(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts"
    })
    
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname , 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://v2.jinrishici.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
