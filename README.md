### 这是一个练习webpack5和vue3的项目

#### 手动打包命令
npx webpack

#### Vue3配置注意点
1. vue-template-compiler 在 Vue3中被 @vue/compiler-sfc 替换，vue-template-compiler还停留在Vue2上；
2. vue-loader 版本大于16的话，vue-loader/lib/plugin是不存在的;需要从vue-loader/dist/plugin中获取VueLoaderPlugin
3. 插件 vue-loader-plugin 只适用于 vue-loader 15及以下版本，更高的版本会保错；

#### webpack基础loader和plugin
1. html-webpack-plugin
2. vue-loader
3. babel-loader @babel/preset-env @babel/core
4. vue-style-loader css-loader postcss-loader sass-loader node-sass(node-sass不好装，可以使用sass)
5. webpack-dev-server
6. css-minimizer-webpack-plugin mini-css-extract-plugin

#### 第三方库
+ UI: ememetUI (按需加载， babel-plugin-component)
+ Router: vue-router
+ Sotre: vuex | pinia

#### 数据共享
+ vue3 和 vuex 不是很搭配，vuex的map辅助函数不能再vue3的<script setup></script>中使用。但是vuex提供了useStore的方法，我们可以在组合式中获取到store，然后进行对应的操作；

+ 新的数据共享方案：pinia，后续研究一下；

#### 路由
+ 将路由history配置为createWebHistory()时，需要将webpack的devServer.historyApiFallback设置为true，防止刷新页面丢失（开发环境）；上线的话需要配置正确的nginx；

+ 通过import函数对组件实现懒加载，需要结合webpack的chunkSplit配置；


#### webpack-cli
+ 可以通过npx webpack init ./demo -t=default 创建webpack打包的初始项目，目前只有default和react两种模板
