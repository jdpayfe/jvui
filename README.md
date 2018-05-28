# jdPay ui组件库

> ###一、介绍

jdPay ui 是 移动端Vue组件库


> ###二、组件库使用说明

####1. demo线上地址, 使用前可查看有没有你需要的组件：
``` bash
    http://pb.jd.com/jdpayui/index.html
```
####2. 在项目中安装组件库
``` bash
    需要在packages.json->dependencies中添加：
    
    "jvui": "git+http://source.jd.com/app/jdpay-ui.git"
    
    然后npm install
```
####3. 在项目中导入所有组件以及rem适配
``` bash
    // main.js中
    import jvui from 'jvui'
    import 'jvui/lib/style/index.css'
    
    // (1) Vue.use不传参则使用jvui中默认的rem适配
    Vue.use(JVui)
    
    // 或(2) Vue.use传参则使用自定义的rem适配
    Vue.use(jvui, {
      baseFont: 37.5
    })
    
    // 使用，例：
    <jv-button>基本按钮</jv-button>
```
#####下面是jvui中rem适配的代码, baseFont默认使用100

```bash
    export const setBaseFont = function (doc, win, baseFont) {
        let docEl = doc.documentElement;
        let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        let recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = baseFont * (clientWidth / 375) + 'px';
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        let devicePixelRatio = window.devicePixelRatio;
        docEl.setAttribute('data-dpr', devicePixelRatio);
    };
```

####4. 在项目中按需引入组件，组件的rem适配会使用的引用jvui所在项目中的rem适配
``` bash
  <template>
    <div class="ui-wrapper">
      <jv-button>基本按钮</jv-button>
  
    </div>
  </template>
  
  <script>
  import JVButton from 'jvui/lib/button/button.js'
  import 'jvui/lib/style/base.css'
  import 'jvui/lib/style/button.css'
  
  export default {
    components: {
      [JVButton.name]: JVButton
    }
  }
  </script>
```
####5. rem 适配
```bash
jdPay ui中的组件样式默认使用rem作为单位，若你在使用此组件库前项目中已有rem适配，请注意是否会有覆盖问题（！）
```  

> ###三、组件库开发指南


####1. 初始化项目（ npm）

``` bash
// 安装依赖
npm install

// 浏览器访问 http://localhost:8066/#/ 就可以看到所有组件的示例了
npm run dev

```

```bash
 开发时版本：node v8.9.4
            npm 5.6.0
 npm install 时部分包失败可使用cnpm镜像（npm install -g cnpm --registry=https://registry.npm.taobao.org）
```
  
 
####2. 代码结构
``` bash
|--demos  //组件示例
    |--pages //所有示例页面
        |--index.vue // jdpay ui首页
        |--home.vue  // demo 首页，每新增组件示例需要在此文件下添加引入组件示例页面
        |--tabbar.vue // 组件示例页面
        |
        ...
    |--app.vue   
    |--index.html  
    |--main.js  // 每新增组件示例需要在这里添加相应的router
|--lib  //先执行npm run build:components  然后npm run build:style   然后npm run build:jvui  
    |--area
    |--badge
    |--...
    |--index.js
    |--jvui.js
|--src
    |--assets  
    |--components // 所有组件源码
        |-- index.js // 统一注册组件并导出组件和指令等，每新增的组件和指令需要在此添加
    |--image // 开发过程中用到的示例图片
    |--style // 组价样式
        |--common // 公共样式文件
        |--mixins // 一些样式的mixin
        |--scss // 所有组建的scss文件
            |--index.scss // 统一导出所有scss文件，没新增的组建的scss文件需要在此添加
|--start // 执行npm run build 生成的，demo的包   
|--static // 静态文件
|--test // 单元测试--暂未使用
|--package.json  // 配置文件
|--develop.md // 使用开发说明
```



####3. 命名规范

######3.1 文件命名
```bash
1. 单个词： button, tabbar
2. 多个词使用一个中划线（尽量使用不超过两个中划线）： tabbar-item
3. demos/pages/下的组件文件名尽量与src/components/下的组件文件夹同名
4. src/components/下组件文件夹中的文件尽量与文件夹同名且vue文件的'.vue'必须是小写！！！

```

######3.2 组件命名 - 组件源码中需有属性 name: 'jv-组件名'， 组件名加前缀jv-
```bash
1. 单个词： jv-tabbar
2. 多个单词使用一个中划线（尽量使用不超过两个中划线）： jv-tabbar-item

```
######3.2 组件源码 - 选择器命名
```bash
1. 最外层div的class与组件同名： jv-tabbar, jv-tabbar-item
2. 块(block)，元素(element)使用双下划线：
        jv-tabbar-item中的块可以用：jv-tabbar-item__icon
                                   jv-tabbar-item__icon-info
3. 修饰符(modifier)使用双中划线：
        jv-tabbar块的修饰符可以使用：jv-tabbar--fixed
        jv-tabbar-item块的修饰符可以使用：jv-tabbar-item--active                                   
4. 使用单中划线连接的部分相当于一个单词拼接的名字： 
        可以这样理解： [块名]__[子块名] <==> [jv-tabbar-item]__[icon-info]
5. 命名规则的理解可以参考：http://getbem.com/
```
######3.3 组件demo - 选择器命名
```bash
1. 最外层div的class 为组件demo文件名拼接-demo： tabbar-demo
2. 块(block) class 为block 已写成全局，可直接使用
3. 块标题 class 为 block-title 已写成全局，可直接使用
```

####4. 添加新组件
``` bash  
    主要步骤：
    
    1. 添加 vue 代码
    以添加新组件 Tabbar 为例，首先在 src/components 目录下新建目录 tabbar，用 tabbar.vue 文件做为组件入口，需要的话可以建其他文件tabbar-item.vue来组织代码。
    
    2. 添加样式代码
    组件对应的样式需要放到 src/style/scss 目录下，Tabbar 组件的话需要新建一个文件 tabbar.scss 如若个组件样式比较复杂，为了方便组织代码可以在 src/style/scss 下面新建一个同名目录 tabbar，里面可以放一些 partial 样式。
    
    新添加的 tabbar.scss 文件需要在 src/style/scss/index.scss 中手动 import。
    
    3. 添加demo
    以添加新组件 Tabbar 的demo为例在 demos/pages 下创建组件示例tabbar.vue, 在home.vue中添加入口和main.js中添加路由
    
    4. 打包demos代码，并更新到线上dev环境 -> npm run build
    
    5. 打包jvui组件库代码，先执行npm run build:components --for组件按需引用
                        然后npm run build:style --编译src/style/scss下的scss文件并copy到根目录下的lib/style中 
                        然后npm run build:jvui --组件库入口文件
    
    
```

####5. 一些实用技巧
``` bash
1. 组件互相引用
比如说 cell 里面引用了 icon 组件，直接写相对路径引用即可。

2. 组件导出
为了统一管理，每个组件只能通过 export default 一个东西，如果需要导出多个变量，请把其余变量挂载在 export default 的变量上。

3. 样式
组件样式使用 scss，语法请参考 scss 文档.

4. 关于 z-index
为了防止 z-index 滥用，我们规定了组件库内部的 z-index 使用规范。

    z-index 优先级（从高到低）：
        特殊组件：Toast 永远在最上面，[3000, +∞)
        ‘用完就关’ 的组件：Dialog, Pop, Actionsheet, ImagePreview 等 [2000, 3000)
        其他：组件内部用来控制层次的 z-index 的区间 [-10, 10]，尽可能写小，一般1，2，3这种就够了。

 ```

> ###参考
#### ui组件库参考
``` bash
1. https://www.youzanyun.com/zanui/vant#/zh-CN/intro
2. https://github.com/youzan/vant
 ```

