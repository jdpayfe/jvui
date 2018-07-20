
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", staticClass: "jv-button", class: { 'jv-button--block': _vm.block }, attrs: { "disabled": _vm.disabled }, on: { "click": _vm.onClick } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
    },

    name: 'jv-button',

    props: {
        text: String, // button 文本
        block: { // button是否为块级元素
            type: Boolean,
            default: false
        },
        //  loading: Boolean,
        disabled: { // 是否禁用
            type: Boolean,
            default: false
        },
        tag: { // 按钮标签
            type: String,
            default: 'button'
        }
    },
    computed: {},
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
};