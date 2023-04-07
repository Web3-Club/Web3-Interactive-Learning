const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/imports.styl'),
        ],
      })
  }

module.exports = defineConfig({
  transpileDependencies: true,
//   chainWebpack:config => {
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//     types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
//   },
lintOnSave: false,
  css: {
    loaderOptions: {
        less: {
            lessOptions: {
                javascriptEnabled: true 
            } 
        } 
    } 
},
devServer:{
  proxy:{
    '/api':{
      target: 'http://localhost:3000',
      changeOrigin:true,
      pathRewrite:{
        '^/api':''
      }
    }
  }
}

})
