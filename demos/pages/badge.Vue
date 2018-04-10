<template>
    <div class="badge-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-badge :num="8" radius="0.05rem" />
            <jv-badge :num="11" radius="0.2rem" />
            <jv-badge :num="6" radius="0.2rem" />
            <jv-badge :num="199" :maxNum="99" radius="10%" />
            <jv-badge :num="199" radius="0.05rem" />
            <jv-badge class="badge-demo-border" :num="199" radius=".2rem" borderColor="#000"/>

        </div>

        <!--<div class="block">-->
        <!--</div>-->

        <!--<div class="block">-->
        <!--</div>-->

    </div>
</template>

<script>
    export default {

        data() {
            return {
                title: this.$route.query.title,
            };
        },

        methods: {
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .badge-demo {

        .block {
            padding: .1rem;
        }

        &-border {
            line-height: calc(.2rem - 2px);
            background-color: #fff;
            color: #000;
        }
    }
</style>
