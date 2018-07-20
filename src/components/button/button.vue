<template>
    <component
        :is="tag"
        :disabled="disabled"
        class="jv-button"
        :class="{'jv-button--block': block}"
        @click="onClick">

        <!--稍后添加loading组件-->
        <!-- 'jv-button--loading': loading,-->
        <!--<loading v-if="loading" size="20px" :color="type === 'default' ? 'black' : 'white'" />-->
        <slot>{{ text }}</slot>
    </component>
</template>

<script>
export default{
    name: 'jv-button',

    props: {
        text: String, // button 文本
        block: { // button是否为块级元素
            type: Boolean,
            default: false
        },
        //  loading: Boolean,
        disabled: { // 是否禁用
            type: Boolean,
            default: false
        },
        tag: { // 按钮标签
            type: String,
            default: 'button'
        }
    },
    computed: {},
    methods: {
        onClick (event) {
            this.$emit('click', event);
        }
    }
};
</script>
