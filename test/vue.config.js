module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [{
            loader: '../atomcss-loader.js',
            options: { }
          }]
        }
      ]
    }
  }
}
