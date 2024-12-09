const path = require('path');

module.exports = {
  entry: './src/app.jsx', // Replace with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development', // or 'production'
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      // Handle JS and JSX files with Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Handle CSS files with style-loader and css-loader
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Optionally add more loaders if needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow imports without file extensions
  },
};
