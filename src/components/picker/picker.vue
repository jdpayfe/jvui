<template>
    <div class="jv-picker">
        <div class="jv-picker__toolbar " v-if="showToolbar">
            <slot>
                <div class="jv-picker__cancel" @click="emit('cancel')">{{ cancelButtonText || cancel }}</div>
                <div class="jv-picker__title jv-ellipsis" v-if="title" v-text="title"/>
                <div class="jv-picker__confirm" @click="emit('confirm')">{{ confirmButtonText || confirm }}</div>
            </slot>
        </div>
        <div class="jv-picker__toolbar--hairline jv-hairline--top-bottom"></div>
        <!--TODO add loading -->
        <!--<div v-if="loading" class="jv-picker__loading">-->
            <!--<loading/>-->
        <!--</div>-->
        <div class="jv-picker__columns" :style="columnsStyle" @touchmove.prevent>
            <picker-column
                v-for="(item, index) in currentColumns"
                :key="index"
                :value-key="valueKey"
                :options="item.values"
                :class-name="item.className"
                :default-index="item.defaultIndex"
                :item-height="itemHeightPX"
                :visible-item-count="visibleItemCount"
                @change="onChange(index)"
            />
            <div class="jv-picker__frame jv-hairline--top-bottom" :style="frameStyle"/>
            <slot name="mask" v-if="mask">
                <div class="jv-picker__mask--top" :style="maskStyle"></div>
                <div class="jv-picker__mask--bottom" :style="maskStyle"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    import PickerColumn from './picker-column';
    import deepClone from '../utils/deep-clone';

    export default {
        name: 'jv-picker',

        components: {
            PickerColumn
        },

        props: {
            title: String, //  顶部栏标题
            loading: Boolean, // 是否显示加载状态
            showToolbar: Boolean, //  是否显示顶部栏
            confirmButtonText: String, // 	确认按钮文字
            cancelButtonText: String, // 取消按钮文字
            visibleItemCount: { // 	可见的选项个数
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
            columns: { // 	对象数组，配置每一列显示的数据
                type: Array,
                default: () => []
            },
            mask: { // 是否显示加载状态
                type: Boolean,
                default: false
            },

        },

        data() {
            return {
                children: [],
                currentColumns: [],
                cancel: '取消',
                confirm: '确定'
            };
        },

        created() {
            this.initColumns();
        },

        watch: {
            columns() {
                this.initColumns();
            }
        },

        computed: {
            itemHeightPX () {
                return this.itemHeight.substring(0, this.itemHeight.length-3)*100;
            },
            frameStyle() {
                return {
                    height: this.itemHeightPX + 'px',
                };
            },

            maskStyle() {
                return {
                    height: this.itemHeightPX*(this.visibleItemCount - 1)/2 + 'px',
                };
            },

            columnsStyle() {
                return {
                    height: this.itemHeightPX * this.visibleItemCount + 'px'
                };
            }
        },

        methods: {
            initColumns() {
                const columns = this.columns.map(deepClone);
                this.isSimpleColumn = columns.length && !columns[0].values;
                this.currentColumns = this.isSimpleColumn ? [{values: columns}] : columns;
            },

            emit(event) {
                if (this.isSimpleColumn) {
                    this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
                } else {
                    this.$emit(event, this.getValues(), this.getIndexes());
                }
            },

            onChange(columnIndex) {
                if (this.isSimpleColumn) {
                    this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
                } else {
                    this.$emit('change', this, this.getValues(), columnIndex);
                }
            },

            // get column instance by index
            getColumn(index) {
                return this.children[index];
            },

            // get column value by index
            getColumnValue(index) {
                return (this.getColumn(index) || {}).currentValue;
            },

            // set column value by index
            setColumnValue(index, value) {
                const column = this.getColumn(index);
                column && column.setValue(value);
            },

            // get column option index by column index
            getColumnIndex(columnIndex) {
                return (this.getColumn(columnIndex) || {}).currentIndex;
            },

            // set column option index by column index
            setColumnIndex(columnIndex, optionIndex) {
                const column = this.getColumn(columnIndex);
                column && column.setIndex(optionIndex);
            },

            // get options of column by index
            getColumnValues(index) {
                return (this.currentColumns[index] || {}).values;
            },

            // set options of column by index
            setColumnValues(index, options) {
                const column = this.currentColumns[index];
                if (column) {
                    column.values = options;
                }
            },

            // get values of all columns
            getValues() {
                return this.children.map(child => child.currentValue);
            },

            // set values of all columns
            setValues(values) {
                values.forEach((value, index) => {
                    this.setColumnValue(index, value);
                });
            },

            // get indexes of all columns
            getIndexes() {
                return this.children.map(child => child.currentIndex);
            },

            // set indexes of all columns
            setIndexes(indexes) {
                indexes.forEach((optionIndex, columnIndex) => {
                    this.setColumnIndex(columnIndex, optionIndex);
                });
            }
        }
    };
</script>

