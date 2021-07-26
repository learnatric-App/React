const path = require('path');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.resolve(__dirname, 'public', 'build');

const rules = [
    {
        test: /\.(tsx|ts|js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            plugins: ['@babel/plugin-transform-runtime']
        }
    },
    // {
    //     test: /\.css$/i,
    //     exclude: /node_modules/,
    //     use: [
    //         'style-loader',
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 modules: true,
    //             },
    //         },
    //     ],
    // },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    },
    {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry:  './client/src/index.js',
    output:{
        path: OUT_DIR,
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {extensions: ['.js', '.jsx', '.tsx', '.ts']}
}