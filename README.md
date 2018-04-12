# jdPay ui

> vue ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8066
npm run dev

```

##组件库
1. 示例线上地址：
``` bash
    http://pb.jd.com/jdpayui/index.html
```
2. 在项目中安装组件库
``` bash
    需要在packages.json->dependencies中添加：
    "jdpayui": "git+http://source.jd.com/app/jdpay-ui.git#dev"
    
    然后npm install,或者直接：
    npm install git+http://source.jd.com/app/jdpay-ui.git#dev
```
3. 在项目中导入所有组件
``` bash
    // main.js中
    import JVui from 'jdpayui'
    import 'jdpayui/lib/jvui.css'

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
  import {JVButton} from 'jdpayui'
  
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

##现有组件
``` bash
1.选择省市区area
2.徽章badge
3.按钮button
4.单元格cell
5.图标icon (使用设计稿中切图)
6.导航条nav-bar
7.选择列表picker
8.遮罩弹框popup
9.轮播swipe
10.选项卡tabs
```

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
##ui组件库参考
``` bash
1. https://www.youzanyun.com/zanui/vant#/zh-CN/intro
2. https://github.com/youzan/vant
 ```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
