import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetForms } from '@julr/unocss-preset-forms'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
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
import { darkTheme, getCSSPreflights, lightTheme } from './style.config'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      brand: 'var(--edso-brand)',
      primary: 'var(--edso-primary)',
      success: 'var(--edso-success)',
      danger: 'var(--edso--danger)',
      warning: 'var(--edso-warning)',
      info: 'var(--edso-info)',
      disabled: 'var(--edso-disabled)',
      black: 'var(--edso-black)',
      white: 'var(--edso-white)',
      pink: 'var(--edso-pink)',
      yellow: 'var(--edso-yellow)',
      teal: 'var(--edso-teal)',
      purple: 'var(--edso-purple)',
      indigo: 'var(--edso-indigo)',
      title: 'var(--edso-title)',
      subtitle: 'var(--edso-subtitle)',
      content: 'var(--edso-content)',
      borderInput: 'var(--edso-border-input)',
      borderTable: 'var(--edso-border-table)',
      background: 'var(--edso-background)',
      scrollTrack: 'var(--edso-track-color)',
      scrollThumb: 'var(--edso-thumb-color)',
    },
  },
  rules: [],
  variants: [],
  presets: [
    presetAttributify({
      prefix: 'edso-',
      prefixedOnly: true,
    }),
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
        edso: FileSystemIconLoader('./src/assets/icons', (svg) => svg),
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
  transformers: [transformerAttributifyJsx(), transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  preflights: [
    {
      layer: 'base',
      getCSS: () => `
    :root {
      ${getCSSPreflights(lightTheme)}
    }
    :root.dark {
      ${getCSSPreflights(darkTheme)}
    }
    button,select,input,option {
      outline: none;
      -webkit-appearance: none
    }
    `,
    },
  ],
})
