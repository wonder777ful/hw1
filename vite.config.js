//vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath } from 'url'; 
import { dirname, resolve } from 'path'; 

// 获取当前文件的目录路径
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/hw1/',
  plugins: [
    vue(),
    legacy(),
    vueJsx(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      // 使用 path.resolve 解析路径
      '@': resolve(__dirname, 'src')
    }
  },
  build: setupBuild()
});

// 打包配置
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export function setupBuild() {
  return {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    cache: false,
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        index: 'index.html'
      },
      output: {
        assetFileNames: 'assets/[name]-[hash:8][extname]', 
        chunkFileNames: 'assets/[name]-[hash:8].js',
        entryFileNames: 'assets/[name]-[hash:8].js',
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
        },
        manualChunks(id) {
          const match = id.match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//);
          return match?.groups?.moduleName || 'vender';
        }
      }
    }
  };
}