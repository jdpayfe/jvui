<template>
    <div class="button-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block">
            <jv-button>基本按钮</jv-button>

            <jv-button :disabled="true" @click="clickDisabledBtn">禁用状态
            </jv-button>

            <jv-button class="button-custom"
                       tag="a"
                       href="https://www.jd.com"
                       target="_blank">自定义标签a
            </jv-button>
        </div>

        <div class="block">
            <jv-button :block="true">加载状态</jv-button>

        </div>


        <div class="block">
            <jv-button :block="true" class="button-footer--single">底部操作按钮</jv-button>

        </div>

        <div class="block button-footer--double">
            <jv-button class="button-footer--cancel">取消</jv-button>
            <jv-button class="button-footer--confirm">确认</jv-button>
        </div>



    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: this.$route.query.title,
            }
        },
        methods: {
            clickDisabledBtn (ifDisabled) {
                if (ifDisabled) {
                    alert('按钮被禁用了！！！');
                }
            }
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    @import '../../src/style/scss/common/var.scss';

    .button-demo {

        .block {
            padding: .2rem;
        }

        .button-custom {
            background-color: $button-primary-background-color;
        }

        .button-footer--single {
            width: 3.4rem;
            background-color: $orange;
            color: $white;
            margin: 0 auto;
        }

        .button-footer--double {
            display: flex;
            /*padding: 0 .2rem;*/
        }

        .button-footer--cancel,
        .button-footer--confirm {
            flex: 1;
            border-radius: 0;
            border: none;
            color: $white;
        }

        .button-footer--cancel {
            background-color: $gray;
        }

        .button-footer--confirm {
            background-color: $red;
        }
    }

</style>
