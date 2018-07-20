
import JvPopup from '../popup/popup';
import JvTabs from '../tabs/tabs';
import JvTab from '../tabs/tab';
import JvSwipe from '../swipe/swipe';
import JvSwipeItem from '../swipe/swipe-item';

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-area" }, [_c('header', { staticClass: "jv-area__title" }, [_vm._v("请选择地址")]), _vm._t("close", [_vm.showCloseBtn ? _c('span', { staticClass: "jv-area__cancel" }, [_vm._v("×")]) : _vm._e()]), _vm._t("confirm", [_vm.showConfirmBtn ? _c('span', { staticClass: "jv-area__confirm" }, [_vm._v("确认")]) : _vm._e()]), _c('jv-tabs', { attrs: { "active": _vm.activeTabIndex, "swipeable": "" }, on: { "click": _vm.getTabIndex } }, _vm._l(_vm.tabs, function (tabTitle, index) {
            return _c('jv-tab', { key: index, attrs: { "title": tabTitle } });
        })), _c('jv-swipe', { attrs: { "showIndicators": false, "initialSwipe": _vm.activeSwipeIndex, "loop": false }, on: { "change": _vm.getSwipeIndex } }, _vm._l(_vm.areaList, function (itemObj, areaIndex) {
            return _c('jv-swipe-item', { key: areaIndex }, [_c('ul', _vm._l(itemObj, function (val, key, index) {
                return _c('li', { key: index, staticClass: "jv-area__item", on: { "click": function click($event) {
                            _vm.getSelectInfo(val, key, index, areaIndex);
                        } } }, [_vm._v(_vm._s(val) + "\n                ")]);
            }))]);
        }))], 2);
    },

    name: 'jv-area',

    components: {
        JvPopup: JvPopup,
        JvTabs: JvTabs,
        JvTab: JvTab,
        JvSwipe: JvSwipe,
        JvSwipeItem: JvSwipeItem
    },
    props: {
        areaList: {
            type: Array,
            require: true
        },
        showCloseBtn: {
            type: Boolean,
            default: true
        }, // 是否显示关闭按钮
        showConfirmBtn: {
            type: Boolean,
            default: true // 是否显示确认按钮
        } },

    data: function data() {
        return {
            activeSwipeIndex: 0,
            activeTabIndex: 0,
            tabs: ['请选择'],
            selectedArea: []
        };
    },

    computed: {
        count: function count() {
            return this.areaList.length;
        }
    },

    methods: {
        getTabIndex: function getTabIndex(index, title) {
            this.activeSwipeIndex = index;
        },
        getSwipeIndex: function getSwipeIndex(index) {
            this.activeTabIndex = index;
        },
        getSelectInfo: function getSelectInfo(val, key, index, areaIndex) {
            this.selectedArea[areaIndex] = {
                name: val,
                id: key
            };
            if (this.selectedArea.length < this.count) {
                if (areaIndex < this.count - 1) {
                    this.tabs.splice(-1, 0, this.selectedArea[areaIndex].name);
                    this.activeSwipeIndex = areaIndex + 1;
                    this.activeTabIndex = areaIndex + 1;
                } else if (areaIndex === this.count - 1) {
                    this.tabs.splice(-1, 1, this.selectedArea[areaIndex].name);
                }
            } else {
                this.tabs.splice(areaIndex, 1, this.selectedArea[areaIndex].name);
                if (areaIndex < this.count - 1) {
                    this.activeSwipeIndex = areaIndex + 1;
                    this.activeTabIndex = areaIndex + 1;
                }
            }
        }
    }
};