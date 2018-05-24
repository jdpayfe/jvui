
import PickerColumn from './picker-column';
import deepClone from '../utils/deep-clone';

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-picker" }, [_vm.showToolbar ? _c('div', { staticClass: "jv-picker__toolbar " }, [_vm._t("default", [_c('div', { staticClass: "jv-picker__cancel", on: { "click": function click($event) {
                    _vm.emit('cancel');
                } } }, [_vm._v(_vm._s(_vm.cancelButtonText || _vm.cancel))]), _vm.title ? _c('div', { staticClass: "jv-picker__title jv-ellipsis", domProps: { "textContent": _vm._s(_vm.title) } }) : _vm._e(), _c('div', { staticClass: "jv-picker__confirm", on: { "click": function click($event) {
                    _vm.emit('confirm');
                } } }, [_vm._v(_vm._s(_vm.confirmButtonText || _vm.confirm))])])], 2) : _vm._e(), _c('div', { staticClass: "jv-picker__toolbar--hairline jv-hairline--top-bottom" }), _c('div', { staticClass: "jv-picker__columns", style: _vm.columnsStyle, on: { "touchmove": function touchmove($event) {
                    $event.preventDefault();
                } } }, [_vm._l(_vm.currentColumns, function (item, index) {
            return _c('picker-column', { key: index, attrs: { "value-key": _vm.valueKey, "options": item.values, "class-name": item.className, "default-index": item.defaultIndex, "item-height": _vm.itemHeightPX, "visible-item-count": _vm.visibleItemCount }, on: { "change": function change($event) {
                        _vm.onChange(index);
                    } } });
        }), _c('div', { staticClass: "jv-picker__frame jv-hairline--top-bottom", style: _vm.frameStyle }), _vm.mask ? _vm._t("mask", [_c('div', { staticClass: "jv-picker__mask--top", style: _vm.maskStyle }), _c('div', { staticClass: "jv-picker__mask--bottom", style: _vm.maskStyle })]) : _vm._e()], 2)]);
    },

    name: 'jv-picker',

    components: {
        PickerColumn: PickerColumn
    },

    props: {
        title: String, // 顶部栏标题
        loading: Boolean, // 是否显示加载状态
        showToolbar: Boolean, // 是否显示顶部栏
        confirmButtonText: String, // 确认按钮文字
        cancelButtonText: String, // 取消按钮文字
        visibleItemCount: { // 可见的选项个数
            type: Number,
            default: 5
        },
        valueKey: { // 选项对象中，文字对应的 key
            type: String,
            default: 'text'
        },
        itemHeight: { // 选项高度  带单位rem
            type: String,
            default: '.44rem'
        },
        columns: { // 对象数组，配置每一列显示的数据
            type: Array,
            default: function _default() {
                return [];
            }
        },
        mask: { // 是否显示加载状态
            type: Boolean,
            default: false
        }

    },

    data: function data() {
        return {
            children: [],
            currentColumns: [],
            cancel: '取消',
            confirm: '确定'
        };
    },
    created: function created() {
        this.initColumns();
    },


    watch: {
        columns: function columns() {
            this.initColumns();
        }
    },

    computed: {
        itemHeightPX: function itemHeightPX() {
            return this.itemHeight.substring(0, this.itemHeight.length - 3) * 100;
        },
        frameStyle: function frameStyle() {
            return {
                height: this.itemHeightPX + 'px'
            };
        },
        maskStyle: function maskStyle() {
            return {
                height: this.itemHeightPX * (this.visibleItemCount - 1) / 2 + 'px'
            };
        },
        columnsStyle: function columnsStyle() {
            return {
                height: this.itemHeightPX * this.visibleItemCount + 'px'
            };
        }
    },

    methods: {
        initColumns: function initColumns() {
            var columns = this.columns.map(deepClone);
            this.isSimpleColumn = columns.length && !columns[0].values;
            this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
        },
        emit: function emit(event) {
            if (this.isSimpleColumn) {
                this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
            } else {
                this.$emit(event, this.getValues(), this.getIndexes());
            }
        },
        onChange: function onChange(columnIndex) {
            if (this.isSimpleColumn) {
                this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
            } else {
                this.$emit('change', this, this.getValues(), columnIndex);
            }
        },


        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },


        // get column value by index
        getColumnValue: function getColumnValue(index) {
            return (this.getColumn(index) || {}).currentValue;
        },


        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            column && column.setValue(value);
        },


        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).currentIndex;
        },


        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            column && column.setIndex(optionIndex);
        },


        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.currentColumns[index] || {}).values;
        },


        // set options of column by index
        setColumnValues: function setColumnValues(index, options) {
            var column = this.currentColumns[index];
            if (column) {
                column.values = options;
            }
        },


        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.currentValue;
            });
        },


        // set values of all columns
        setValues: function setValues(values) {
            var _this = this;

            values.forEach(function (value, index) {
                _this.setColumnValue(index, value);
            });
        },


        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.currentIndex;
            });
        },


        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this2 = this;

            indexes.forEach(function (optionIndex, columnIndex) {
                _this2.setColumnIndex(columnIndex, optionIndex);
            });
        }
    }
};