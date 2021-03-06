const path = require('path')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const nextConfig = {
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        include: [path.resolve(__dirname, 'data')],
        use: [
          'json-loader',
          path.resolve('webpack/data-loader.js'),
          'yaml-loader',
        ],
      },
      {
        test: /\.ya?ml$/,
        exclude: [path.resolve(__dirname, 'data')],
        use: ['json-loader', 'yaml-loader'],
      },
      {
        test: /\.md$/,
        use: ['raw-loader'],
      }
    )

    return config
  },

  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
}

module.exports = withImages(withSass(nextConfig))
