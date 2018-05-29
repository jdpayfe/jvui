----------
#### Area 省市县选择组件
省市县选择组件通常与 [弹出层](#/zh-CN/popup) 组件配合使用

##### 使用指南

```javascript
  import JVButton from 'jvui/lib/area/button.js'
  import 'jvui/lib/style/base.css'
  import 'jvui/lib/style/area.css'
```

##### 代码演示

##### 基础用法

要初始化一个`Area`组件，你需要传入一个`areaList`属性，数据格式具体可看下面数据格式章节

```html
<jv-area :areaList="areaList" showCloseBtn showConfirmBtn></jv-area>
```


##### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| showCloseBtn | 是否显示关闭按钮 | `Boolean` | `true` | - |
| showConfirmBtn | 是否显示确认按钮 | `Boolean` | `true` | - |
| areaList | 省市县数据，格式见下方 | `Array` | - | - |

##### Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击右上方完成按钮 | 一个数组参数，具体格式看下方数据格式章节 |
| cancel | 点击取消按钮时 | - |

##### 数据格式

##### 省市县列表数据格式

整体是一个 Array，包含 省Array[0]， 市Array[1]， 区Array[2] 三个 Object。

每个对象中以省市区编码作为 key，省市区名字作为 value。

`AreaList`具体格式如下：

```javascript
[
                {
                    '110000': '北京市',
                    '120000': '天津市',
                    //......
                },
                {
                    '130100': '石家庄市',
                    '130200': '唐山市',
                    //......
                },
                {
                    '110111': '房山区',
                    '110112': '通州区',
                    //......
                }
            ]
```

##### 点击完成时返回的数据格式

返回的数据整体为一个数组，数组内包含 `columnsNum` 个数据， 每个数据对应一列选项中被选中的数据。

`code` 代表被选中的地区编码， `name` 代表被选中的地区名称

```javascript
[
  {
    code: '110000',
    name: '北京市'
  },
  {
    code: '110100',
    name: '北京市'
  },
  {
    code: '110101',
    name: '东城区'
  }
];
```
