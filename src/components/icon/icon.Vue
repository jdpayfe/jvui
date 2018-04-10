<template>
    <i class="jv-icon" :style="styleObj">
        <slot />
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
            width: { //  宽
        	    type: Number,
                require: true
            },
            height: { // 高
                type: Number,
                require: true
            },
            bgWidth: Number, // 背景图宽
            bgHeight: Number, // 背景图高
//            info: String //
        },
        computed: {
            styleObj () {
            	return {
            		width: `${this.width}rem`,
                    height: `${this.height}rem`,
            		background: `url(${this.bgUrl}) no-repeat center`,
                    backgroundSize: `${this.bg_width}rem ${this.bg_height}rem`
                }
            },
            bg_width () {
            	return this.bgWidth ? this.bgWidth : this.width;
            },
            bg_height () {
                return this.bgHeight ? this.bgHeight : this.height;
            }
        }
    };
</script>
