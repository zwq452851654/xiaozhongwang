
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                prependData: `@import "@/theme/_variables.scss";`
            }
        }
    },
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port:8088,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                changeOrigin: true
            },
						'/xzwang': {
						    target: 'http://39.107.227.98:8002',
						    changeOrigin: true
						}
        }
    }
};
