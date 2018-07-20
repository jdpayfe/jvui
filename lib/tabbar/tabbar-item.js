
import JvIcon from '../icon/icon';

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-tabbar-item", class: { 'jv-tabbar-item--active': _vm.active }, on: { "click": _vm.onClick } }, [_c('div', { staticClass: "jv-tabbar-item__icon", class: { 'jv-tabbar-item__icon-dot': _vm.dot } }, [_vm._t("icon", [_vm.icon ? _c('jv-icon', { attrs: { "bgUrl": _vm.icon } }) : _vm._e()], { active: _vm.active }), _vm.info ? _c('div', { staticClass: "jv-tabbar-item__icon-info" }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()], 2), _c('div', { staticClass: "jv-tabbar-item__text" }, [_vm._t("default", null, { active: _vm.active })], 2)]);
    },

    name: 'jv-tabbar-item',
    data: function data() {
        return {
            active: false
        };
    },

    props: {
        icon: String,
        dot: Boolean,
        info: String
    },
    components: {
        JvIcon: JvIcon
    },
    beforeCreate: function beforeCreate() {
        this.$parent.items.push(this);
    },
    destroyed: function destroyed() {
        this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
    },

    methods: {
        onClick: function onClick(event) {
            this.$parent.onChange(this.$parent.items.indexOf(this));
            this.$emit('click', event);
        }
    }
};