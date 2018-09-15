module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    extra: {
      module: {
        rules: [
          {
            test: /\.(gltf|obj)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        ]
      }
    }
  }
}
