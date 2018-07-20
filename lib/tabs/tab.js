
import findParent from '../mixins/find-parent';

/* slot
 * title 自定义标签
 * */
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-tab__pane", class: { 'jv-tab__pane--select': _vm.index === _vm.parent.curActive } }, [_vm._t("default")], 2);
    },

    name: 'jv-tab',

    mixins: [findParent],

    props: {
        title: String, //   标题
        disabled: Boolean //    是否禁用标签
    },
    computed: {
        index: function index() {
            return this.parent.tabs.indexOf(this);
        }
    },
    created: function created() {
        this.findParent('jv-tabs');
        this.parent.tabs.push(this);
    },
    destroyed: function destroyed() {
        this.parent.tabs.splice(this.index, 1);
    }
};