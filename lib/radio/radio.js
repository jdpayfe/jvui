
import JvIcon from '../icon/icon';
import findParent from '../mixins/find-parent';

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-radio", class: { 'jv-radio--disabled': _vm.isDisabled }, on: { "click": function click($event) {
                    _vm.$emit('click');
                } } }, [_c('span', { staticClass: "jv-radio__input" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "jv-radio__control", attrs: { "type": "radio", "disabled": _vm.isDisabled }, domProps: { "value": _vm.name, "checked": _vm._q(_vm.currentValue, _vm.name) }, on: { "change": function change($event) {
                    _vm.currentValue = _vm.name;
                } } }), _vm._t("icon", [_c('jv-icon', { staticClass: "jv-radio__icon", attrs: { "width": 0.2, "bgUrl": _vm.currentValue === _vm.name ? _vm.checked : _vm.unchecked } })])], 2), _c('span', { staticClass: "jv-radio__label", on: { "click": _vm.onClickLabel } }, [_vm._t("default")], 2)]);
    },

    name: 'jv-radio',

    mixins: [findParent],

    components: {
        JvIcon: JvIcon
    },

    data: function data() {
        return {
            checked: require('src/image/checked.png'),
            unchecked: require('src/image/unchecked.png')
        };
    },


    props: {
        value: {},
        disabled: Boolean,
        name: [String, Number]
    },

    computed: {
        currentValue: {
            get: function get() {
                return this.parent ? this.parent.value : this.value;
            },
            set: function set(val) {
                (this.parent || this).$emit('input', val);
            }
        },

        isDisabled: function isDisabled() {
            return this.parent ? this.parent.disabled || this.disabled : this.disabled;
        }
    },

    created: function created() {
        this.findParent('jv-radio-group');
    },


    methods: {
        onClickLabel: function onClickLabel() {
            if (!this.isDisabled) {
                this.currentValue = this.name;
            }
        }
    }
};