// 配置具體的修改規則
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': 'orange' },
        }
    }),
);