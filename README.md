# jdPay ui

> vue ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8066
npm run dev

```

##代码结构
1. ./demos 组件示例
    1.1 每添加一个组件，在demos/pages/home中添加组件目录
    1.2 每个组件示例的单文件代码结构保持一致
2. ./src   组件源码
    2.1 src/components/下: 存放组件,mixins,utils，index.js导出所有组件
    2.3 src/style/下: scss 存放组件样式,common中公共样式，index.scss导出所有组件样式文件


##现有组件
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


##建议规则
1、文件命名使用中划线链接
2、每个组件新建一个文件夹，vue模板尽量与文件夹同名
3、组件中需有属性 name: 'jv-button'， 组件名加前缀jv-
4、class命名： 
    4.1 组件：jv-tabs`
    4.2 块(block)使用双下划线："jv-tabs__wrap"
    4.3 元素(element)使用双下划线："jv-tabs__nav-bar"
    4.4 修饰符(modifier)使用双中划线："jv-tabs--active"
                                  "jv-tabs__wrap--top"


##ui组件库参考
1. https://www.youzanyun.com/zanui/vant#/zh-CN/intro
2. https://github.com/youzan/vant
 
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
