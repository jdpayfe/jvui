
import Popup from '../mixins/popup';

/* props in mixin
 * v-model 当前组件是否显示
 * lock-scroll 是否锁定背景滚动
 * overlay-class 自定义蒙层 class
 * overlay-style 自定义蒙层样式
 * get-container 指定弹出层挂载的 HTML 节点
 *
 * event
 * click-overlay 点击蒙层时触发
 * */
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.currentTransition } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], staticClass: "jv-popup", class: (_obj = {}, _obj["jv-popup--" + _vm.position] = _vm.position, _obj) }, [_vm._t("default")], 2)]);
        var _obj;
    },

    name: 'jv-popup',

    mixins: [Popup],

    props: {
        transition: String, // transition 名称 ,默认 popup-slide
        overlay: { // 是否显示背景蒙层
            type: Boolean,
            default: true
        },
        closeOnClickOverlay: { // 点击蒙层是否关闭 Popup
            type: Boolean,
            default: true
        },
        position: { // Popup 位置
            type: String,
            default: ''
        }
    },
    data: function data() {
        var transition = this.transition || (this.position === '' ? 'jv-fade' : 'popup-slide-' + this.position);
        return {
            currentValue: false,
            currentTransition: transition
        };
    }
};