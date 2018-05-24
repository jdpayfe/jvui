
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-tabbar jv-hairline--top-bottom", class: { 'jv-tabbar--fixed': _vm.fixed } }, [_vm._t("default")], 2);
    },

    name: 'jv-tabbar',

    data: function data() {
        return {
            items: []
        };
    },

    props: {
        value: Number,
        fixed: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        items: function items() {
            this.setActiveItem();
        },
        value: function value() {
            this.setActiveItem();
        }
    },
    methods: {
        setActiveItem: function setActiveItem() {
            var _this = this;

            this.items.forEach(function (item, index) {
                item.active = index === _this.value;
            });
        },
        onChange: function onChange(active) {
            this.$emit('input', active);
            this.$emit('change', active);
        }
    }
};