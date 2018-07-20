<template>
    <div class="jv-cell"
        :class="{
              'jv-hairline': border,
              'jv-cell--clickable': isLink || clickable
            }"
        @click="onClick">

        <div class="jv-cell__title" v-if="title || icon || $slots.title || $slots.icon">
            <slot name="icon">
                <jv-icon v-if="icon" :bgUrl="icon" :width="0.15" :height="0.2"/>
            </slot>
            <slot name="title">
                <span class="jv-cell__text" v-text="title"/>
                <span class="jv-cell__label" v-if="label" v-text="label"/>
            </slot>
        </div>
        <div class="jv-cell__value"
            v-if="value || $slots.default"
            :class="{
                'jv-cell__value--link': isLink,
                'jv-cell__value--alone': !$slots.title && !title && !label,
                'jv-cell__value--in-col': valInColumn
              }">
            <slot>
                <span v-text="value"/>
            </slot>
        </div>
        <slot name="right-icon">
            <jv-icon class="jv-cell__right-icon" :bgUrl="rightBgUrl" :width="0.15" :height="0.2" v-if="isLink"/>
        </slot>
        <slot name="extra"/>
    </div>
</template>

<script>
import JvIcon from '../icon/icon';

/* slot
 * icon 自定义icon
 * title 自定义title
 * right-icon 自定义右侧按钮，默认是arrow
 * */

export default {
    name: 'jv-cell',
    components: {
        JvIcon
    },
    data () {
        return {
            rightBgUrl: require('src/image/arrow-r-gray.png')
        };
    },
    props: {
        icon: String, // 左侧图标
        title: String, // 左侧标题
        label: String, // 标题下方的描述信息
        isLink: Boolean, // 是否展示右侧箭头并开启点击反馈
        clickable: Boolean, // 是否开启点击反馈
        value: [String, Number], // 右侧内容
        border: { // 是否显示内边框
            type: Boolean,
            default: true
        },
        valInColumn: { // 传入value为slot时，排成行 还是 列， 默认行
            type: Boolean,
            default: false
        }
    },

    methods: {
        onClick () { // 点击 cell 时触发
            this.$emit('click');
        }
    }
};
</script>
