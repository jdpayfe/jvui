<template>
    <div class="nav-bar-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block">
            <jv-nav-bar :title="demoTitle"
                        :left-text="back"
                        :right-text="more"
                        left-arrow
                        @click-left="onClickLeft"
                        @click-right="onClickRight"/>
        </div>

        <div class="block">
            <jv-nav-bar :title="demoTitle" :left-text="back" left-arrow/>
        </div>

        <div class="block">
            <jv-nav-bar :title="demoTitle" left-arrow right-icon/>

        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                title: this.$route.query.title,
                demoTitle: '导航条',
                back: '返回',
                more: '更多',
            };
        },

        methods: {
            onClickLeft() {
                alert('left')
            },
            onClickRight() {
                alert('right')
            },
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .nav-bar-demo {

    }
</style>
