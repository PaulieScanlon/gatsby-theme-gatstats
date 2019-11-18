module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          propFilter: prop => {
            if (prop.parent == null) {
              return true
            }
            // Filter out props inherited from extending interface with React.HTMLProps< - element - >
            return prop.parent.fileName.indexOf('node_modules/@types/react') < 0
          }
        }
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
