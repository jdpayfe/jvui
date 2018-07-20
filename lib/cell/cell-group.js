
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-cell-group", class: { 'jv-hairline--top-bottom': _vm.border } }, [_vm._t("default")], 2);
    },

    name: 'jv-cell-group',

    props: {
        border: {
            type: Boolean,
            default: true
        }
    }
};