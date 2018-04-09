<template>
    <div class="swipe-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-swipe :autoplay="3000">
                <jv-swipe-item>1</jv-swipe-item>
                <jv-swipe-item>2</jv-swipe-item>
                <jv-swipe-item>3</jv-swipe-item>
                <jv-swipe-item>4</jv-swipe-item>
            </jv-swipe>
        </div>

        <div class="block-title">图片懒加载</div>
        <!--TODO 暂未添加懒加载指令-->
        <div class="block">
            <jv-swipe :autoplay="3000">
                <jv-swipe-item v-for="(image, index) in images" :key="index">
                    <!--<img v-lazy="image">-->
                    <img :src="image">

                </jv-swipe-item>
            </jv-swipe>
        </div>

        <div class="block-title">监听 change 事件</div>
        <div class="block">
            <jv-swipe @change="onChange">
                <jv-swipe-item>1</jv-swipe-item>
                <jv-swipe-item>2</jv-swipe-item>
                <jv-swipe-item>3</jv-swipe-item>
                <jv-swipe-item>4</jv-swipe-item>
            </jv-swipe>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                title: this.$route.query.title,
                images: [
                    require('src/image/swipe1.jpg'),
                    require('src/image/swipe2.jpg'),
                    require('src/image/swipe3.jpg'),
                    require('src/image/swipe4.jpg')
                ]
            };
        },

        methods: {
            onChange(index) {

            }
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .swipe-demo {
        padding-bottom: 30px;

        .jv-swipe {
            cursor: pointer;

            &-item {
                color: #fff;
                min-height: 140px;
                font-size: 20px;
                text-align: center;
                line-height: 150px;

                &:nth-child(even) {
                    background-color: #39a9ed;
                }

                &:nth-child(odd) {
                    background-color: #66c6f2;
                }
            }

            img {
                width: 100%;
                display: block;
                box-sizing: border-box;
                background-color: #fff;
                pointer-events: none;
            }
        }
    }
</style>
