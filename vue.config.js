module.exports = {
    runtimeCompiler: true,
    devServer:{
        overlay: true,
        proxy: {
            '/api': {
                target: 'http://localshot:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}