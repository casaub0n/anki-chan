
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'public.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};