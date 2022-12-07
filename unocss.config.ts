import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetForms } from '@julr/unocss-preset-forms'
import {
  defineConfig,
  presetIcons,
  presetAttributify,
  presetTypography,
  presetWebFonts,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
// import presetTheme from 'unocss-preset-theme'
// import type { Theme } from 'unocss/preset-uno'



export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      primary: '#0078f0',
      primaryText: '#3A3C6D',
    },
  },
  rules: [],
  variants: [],
  presets: [
    presetAttributify(),
    presetUno(),
    presetForms(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
        mulish: ['Mulish', 'Arial', 'sans-serif'],
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        others: FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetScrollbar(),
    // @ts-ignore
    // presetTheme<Theme>({
    //   theme: {
    //     dark: {
    //       colors: {
    //         primary: '#0078f0',
    //         primaryText: '#3A3C6D',
    //       },
    //     },
    //   },
    // }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
