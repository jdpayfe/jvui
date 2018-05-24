
import JvIcon from '../icon/icon';

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-nav-bar jv-hairline--top-bottom", class: { 'jv-nav-bar--fixed': _vm.fixed }, style: _vm.style }, [_c('div', { staticClass: "jv-nav-bar__left", on: { "click": function click($event) {
                    _vm.$emit('click-left');
                } } }, [_vm._t("left", [_vm.leftArrow ? _c('jv-icon', { attrs: { "bgUrl": _vm.leftBgUrl, "width": 0.2, "height": 0.2 } }) : _vm._e(), _vm.leftText ? _c('span', { staticClass: "jv-nav-bar__text", domProps: { "textContent": _vm._s(_vm.leftText) } }) : _vm._e()])], 2), _c('div', { staticClass: "jv-nav-bar__title" }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { staticClass: "jv-nav-bar__right", on: { "click": function click($event) {
                    _vm.$emit('click-right');
                } } }, [_vm._t("right", [_vm.rightIcon ? _c('jv-icon', { attrs: { "bgUrl": _vm.rightBgUrl, "width": 0.2, "height": 0.2 } }) : _vm._e(), _vm.rightText ? _c('span', { staticClass: "jv-nav-bar__text", domProps: { "textContent": _vm._s(_vm.rightText) } }) : _vm._e()])], 2)]);
    },

    name: 'jv-nav-bar',

    components: {
        JvIcon: JvIcon
    },
    props: {
        title: String,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        rightIcon: Boolean,
        fixed: Boolean,
        zIndex: {
            type: Number,
            default: 1
        }
    },
    data: function data() {
        return {
            leftBgUrl: require('src/image/arrow-left.png'),
            rightBgUrl: require('src/image/threeSpot.png')
        };
    },

    computed: {
        style: function style() {
            return {
                zIndex: this.zIndex
            };
        }
    }
};