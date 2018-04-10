<template>
    <div class="jv-cell"
        :class="{
              'jv-hairline': border,
              'jv-cell--required': required,
              'jv-cell--clickable': isLink || clickable
            }"
        @click="onClick">

        <div class="jv-cell__title" v-if="title || icon || $slots.title || $slots.icon">
            <slot name="icon">
                <jv-icon v-if="icon" :bgUrl="icon" :width="0.15" :height="0.2" />
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
    import JvIcon from '../icon/icon'

    export default {
        name: 'jv-cell',
        components: {
            JvIcon
        },
        data () {
        	return {
                rightBgUrl: require('src/image/toSelect.png')
            };
        },
        props: {
            icon: String,
            title: String,
            label: String,
            isLink: Boolean,
            required: Boolean,
            clickable: Boolean,
            value: [String, Number],
            border: {
                type: Boolean,
                default: true
            },
            valInColumn: {
                type: Boolean,
                default: false
            } // 传入value为slot时，排成行 还是 列
        },

        methods: {
            onClick() {
                this.$emit('click');
            }
        }
    };
</script>

