import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias: {
      '@': resolve(__dirname , 'src')
    }
  }
})
