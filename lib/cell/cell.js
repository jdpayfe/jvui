
import JvIcon from '../icon/icon';

/* slot
 * icon 自定义icon
 * title 自定义title
 * right-icon 自定义右侧按钮，默认是arrow
 * */

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-cell", class: {
                'jv-hairline': _vm.border,
                'jv-cell--clickable': _vm.isLink || _vm.clickable
            }, on: { "click": _vm.onClick } }, [_vm.title || _vm.icon || _vm.$slots.title || _vm.$slots.icon ? _c('div', { staticClass: "jv-cell__title" }, [_vm._t("icon", [_vm.icon ? _c('jv-icon', { attrs: { "bgUrl": _vm.icon, "width": 0.15, "height": 0.2 } }) : _vm._e()]), _vm._t("title", [_c('span', { staticClass: "jv-cell__text", domProps: { "textContent": _vm._s(_vm.title) } }), _vm.label ? _c('span', { staticClass: "jv-cell__label", domProps: { "textContent": _vm._s(_vm.label) } }) : _vm._e()])], 2) : _vm._e(), _vm.value || _vm.$slots.default ? _c('div', { staticClass: "jv-cell__value", class: {
                'jv-cell__value--link': _vm.isLink,
                'jv-cell__value--alone': !_vm.$slots.title && !_vm.title && !_vm.label,
                'jv-cell__value--in-col': _vm.valInColumn
            } }, [_vm._t("default", [_c('span', { domProps: { "textContent": _vm._s(_vm.value) } })])], 2) : _vm._e(), _vm._t("right-icon", [_vm.isLink ? _c('jv-icon', { staticClass: "jv-cell__right-icon", attrs: { "bgUrl": _vm.rightBgUrl, "width": 0.15, "height": 0.2 } }) : _vm._e()]), _vm._t("extra")], 2);
    },

    name: 'jv-cell',
    components: {
        JvIcon: JvIcon
    },
    data: function data() {
        return {
            rightBgUrl: require('src/image/arrow-r-gray.png')
        };
    },

    props: {
        icon: String, // 左侧图标
        title: String, // 左侧标题
        label: String, // 标题下方的描述信息
        isLink: Boolean, // 是否展示右侧箭头并开启点击反馈
        clickable: Boolean, // 是否开启点击反馈
        value: [String, Number], // 右侧内容
        border: { // 是否显示内边框
            type: Boolean,
            default: true
        },
        valInColumn: { // 传入value为slot时，排成行 还是 列， 默认行
            type: Boolean,
            default: false
        }
    },

    methods: {
        onClick: function onClick() {
            // 点击 cell 时触发
            this.$emit('click');
        }
    }
};