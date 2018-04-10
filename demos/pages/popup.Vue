<template>
    <div class="popup-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-button @click="show1 = true">弹出 Popup</jv-button>
            <jv-popup v-model="show1">内容1</jv-popup>
        </div>

        <div class="block-title">弹出位置</div>
        <div class="block">
            <jv-button @click="show2 = true;">底部弹出</jv-button>

            <jv-popup v-model="show2" position="bottom">内容2</jv-popup>
        </div>


    </div>
</template>

<script>
    export default {

        data() {
            return {
                title: this.$route.query.title,
                show1: false,
                show2: false,

            };
        },

        methods: {
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .popup-demo {
        .jv-button {
            margin: .1rem 0 .1rem .15rem;
        }

        .jv-popup {
            width: 60%;
            padding: .2rem;
            border-radius: .05rem;
            box-sizing: border-box;

            &--bottom {
                width: 100%;
                height: 2rem;
                padding: 0;
                border-radius: 0;
            }

            &--top {
                color: #fff;
                width: 100%;
                border-radius: 0;
                line-height: .2rem;
                background-color: rgba(0, 0, 0, 0.8);
            }

            &--left,
            &--right {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
