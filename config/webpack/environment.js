const { environment } = require('@rails/webpacker')

module.exports = environment

environment.loaders.set('html', {
  test: /\.html$/,
  use: [{
    loader: 'html-loader',
    options: {
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
      customAttrAssign: [ /\)?\]?=/ ]
    }
  }]
})	

environment.loaders.set('css', {
  test: /\.css$/,
  use: [{
    loader: 'css-loader',
  }]
})	