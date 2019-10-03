import { terser } from 'rollup-plugin-terser'

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { file: 'dist/isDifferent.cjs.js', format: 'cjs', indent: false }
  },

  // ES
  {
    input: 'src/index.js',
    output: { file: 'dist/isDifferent.es.js', format: 'es', indent: false }
  },

  // ES for Browsers
  {
    input: 'src/index.js',
    output: { file: 'dist/isDifferent.es.min.js', format: 'es', indent: false },
    plugins: [
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  },

  // IIFE Production
  {
    input: 'src/index.js',
    output: {
      file: 'dist/isDifferent.js',
      format: 'iife',
      name: 'isDifferent',
      indent: false
    },
    plugins: [
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
]
