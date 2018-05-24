
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-radio-group" }, [_vm._t("default")], 2);
    },

    name: 'jv-radio-group',

    props: {
        value: {},
        disabled: Boolean
    },

    watch: {
        value: function value(_value) {
            this.$emit('change', _value);
        }
    }
};