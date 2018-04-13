# jdPay ui

> vue ui

## 初始化项目 npm

``` bash
# 安装依赖
npm install

// 开发时版本：node v8.9.4
              npm 5.6.0
// npm install 时部分包失败可使用cnpm镜像
  （npm install -g cnpm --registry=https://registry.npm.taobao.org）
// 

# 
npm run dev

```
#使用
##组件库
1. 示例线上地址：
``` bash
    http://pb.jd.com/jdpayui/index.html
```
2. 在项目中安装组件库
``` bash
    需要在packages.json->dependencies中添加：
    "jvui": "git+http://source.jd.com/app/jdpay-ui.git#dev"
    
    然后npm install,或者直接：
    npm install git+http://source.jd.com/app/jdpay-ui.git#dev
```
3. 在项目中导入所有组件
``` bash
    // main.js中
    import JVui from 'jvui'
    import 'jvui/lib/jvui.css'

    Vue.use(JVui)
    
    // 使用，例：
    <jv-button>基本按钮</jv-button>
```

4. 在项目中按需引入组件
``` bash
  <template>
    <div class="ui-wrapper">
      <jv-button>基本按钮</jv-button>
    </div>
  </template>
  
  <script>
  import {JVButton} from 'jvui'
  
  export default {
    components: {
      [JVButton.name]: JVButton
    }
  }
  </script>
```

##代码结构
``` bash
1. ./demos 组件示例
    1.1 每添加一个组件，在demos/pages/home中添加组件目录
    1.2 每个组件示例的单文件代码结构保持一致
2. ./src   组件源码
    2.1 src/components/下: 存放组件,mixins,utils，index.js导出所有组件
    2.3 src/style/下: scss 存放组件样式,common中公共样式，index.scss导出所有组件样式文件
```

#开发
##建议规则
``` bash
1、文件命名使用中划线链接
2、每个组件新建一个文件夹，vue模板尽量与文件夹同名
3、组件中需有属性 name: 'jv-button'， 组件名加前缀jv-
4、class命名： 
    4.1 组件：jv-tabs`
    4.2 块(block)使用双下划线："jv-tabs__wrap"
    4.3 元素(element)使用双下划线："jv-tabs__nav-bar"
    4.4 修饰符(modifier)使用双中划线："jv-tabs--active"
                                  "jv-tabs__wrap--top"

```
##开发完一个组件实例后，需要做什么
``` bash
1. 打包demos代码，并更新到线上dev环境 -> npm run build
2. 打包jvui组件库代码，提交后，需要使用最新库的项目需要再次install同步代码 -> npm run build:jvui
```
#参考
##ui组件库参考
``` bash
1. https://www.youzanyun.com/zanui/vant#/zh-CN/intro
2. https://github.com/youzan/vant
 ```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
