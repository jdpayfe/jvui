<template>
    <i class="jv-icon" :style="styleObj">
        <slot/>
        <!--<div v-if="info" class="jv-icon__info">{{ info }}</div>-->
    </i>
</template>

<script>
export default {
    name: 'jv-icon',

    props: {
        bgUrl: { // 背景图片src
            type: String,
            require: true
        },
        width: { // 宽
            type: Number,
            // require: true,
            default: 0.2
        },
        height: Number, // 高 可省略 则默认为宽
        bgWidth: Number, // 背景图宽 可省略 则默认为 宽
        bgHeight: Number // 背景图高 可省略 则默认为 高
        // info: String
    },
    computed: {
        styleObj () {
            return {
                width: `${this.width}rem`,
                height: `${this.compHeight}rem`,
                background: `url(${this.bgUrl}) center center / ${this.bg_width}rem ${this.bg_height}rem no-repeat`
            };
        },
        compHeight () {
            return this.height ? this.height : this.width;
        },
        bg_width () {
            return this.bgWidth ? this.bgWidth : this.width;
        },
        bg_height () {
            return this.bgHeight ? this.bgHeight : this.compHeight;
        }
    }
};
</script>
