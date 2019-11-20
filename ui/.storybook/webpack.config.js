

const path = require("path");
// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: [/stories\.(ts|tsx)$/],
//     use: [
//       {
//         loader: require.resolve('awesome-typescript-loader'),
//       }
//     ]
//   });
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };

module.exports = function({ config }) {
  config.module.rules.push({
    test: [/stories\.(ts|tsx)$/],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  },{
    test: /\.(eot|svg|cur)$/,
    loader: 'file-loader',
    options: {
      name: `[name].[ext]`,
      limit: 10000
    }
  });

  return config;
};