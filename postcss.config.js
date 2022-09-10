module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['sticky', 'bs-wrapper'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/Bar/, /App/, /TabControl/, /CartItem/],
      include: undefined
    }
  }
}
