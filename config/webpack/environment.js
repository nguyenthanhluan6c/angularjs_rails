const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

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

environment.loaders.set('json', {
  test: /\.json$/,
  use: 'json-loader'
})

environment.loaders.set('css', {
  test: /\.css$/,
  use: [{
    loader: 'css-loader',
  }]
})

// Get a pre-configured plugin
environment.plugins.get('ExtractText') // Is an ExtractTextPlugin instance

// Add an additional plugin of your choosing : ProvidePlugin
environment.plugins.set(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.Tether': 'tether',
    Popper: ['popper.js', 'default'],
    ActionCable: 'actioncable',
    Vue: 'vue',
    VueResource: 'vue-resource',
  })
)

environment.plugins.set(
  'CommonsChunkVendor',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      // this assumes your vendor imports exist in the node_modules directory
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  })
)

environment.plugins.set(
  'CommonsChunkManifest',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  })
)
