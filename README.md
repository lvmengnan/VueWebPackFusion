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

+ 新的数据共享方案：pinia；

+ pina与vuex的对比：
  * mutation 已被弃用。它们经常被认为是极其冗余的。它们初衷是带来 devtools 的集成方案，但这已不再是一个问题了。
  * 无需要创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。
  * 无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。
  * 无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
  * 不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。
  * 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。

#### 路由
+ 将路由history配置为createWebHistory()时，需要将webpack的devServer.historyApiFallback设置为true，防止刷新页面丢失（开发环境）；上线的话需要配置正确的nginx；

+ 通过import函数对组件实现懒加载，需要结合webpack的chunkSplit配置；


#### webpack-cli
+ 可以通过npx webpack init ./demo -t=default 创建webpack打包的初始项目，目前只有default和react两种模板


#### webpack.resolve
+ 添加了别名（alias）配置，方便导入模块

+ 添加了扩展名（extensions）配置，让webpack自动辨别文件类型


#### webpack.externals
externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法

>在项目中，我们引入了jquery包，并且配置了webpack.externals。可以减小最终打包的体积
```js
// webpack.config.js
config.externals = {
  jQuery: 'jQuery',
};

// index.html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```

#### 初学pinia的探索
+ pinia也分为选项式和组合式，那么选项式生成的store能在组合式的组件中使用吗？反之呢？
  >实验结果：
  1. 都可以使用，在选项式组件中，我们可以将值store进行实例话以后得到的值（一个proxy对象）放到data上或者computed中，然后对store实例下的属性进行访问；也可以通过pinia提供的map辅助函数进行映射；**注意：** 在用pinia的选项式创建store时，对于操作this的函数不要使用箭头函数进行声明；
  2. 无论是pinia组合式创建的store还是选项式创建的store都可以通过map辅助函数进行映射 **结论：** 任何方式创建的pinia的store，都应该可以用相同的方式使用

#### 关于UI升级
本来打算使用element-ui为此项目的UI库，但是发现现有的库对vue3不支持，所以升级到element-plus
安装：
```js
 npm install element-plus --save
```
用到的插件：
unplugin-vue-components （按需加载）
unplugin-auto-import （自动导入）
```js
npm install -D unplugin-vue-components unplugin-auto-import
```
需要添加的webpack配置
```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```
*按需加载及自动导入成功以后，不需要在入口文件对ElementPlus进行初始化，也不需要在组件内手动引入*

#### 路由嵌套
在做路由嵌套是，子路由path为单纯字段，不带"/"；

**一个BUG：** 由于一开始项目没有在webpack.output中配置publicPath,导致Html加载js时使用的是相对路径。当加载子路由时，js资源指向错误地址，请求不到资源；

**修改方案：**  webpack.output.publicPath: '/';

#### hover.css
引入hover.css文件，提供了炫酷的hover效果

[hover.css官网](https://ianlunn.github.io/Hover/)
