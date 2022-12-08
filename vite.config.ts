import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      /* options */
      configFile: 'unocss.config.ts',
    }),
    webfontDownload(),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
