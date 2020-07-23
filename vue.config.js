
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
        open:true,
        proxy: {
            '/api': {
                target: 'http://localhost:9000/api',
                changeOrigin: true
            }
        }
    }
};
