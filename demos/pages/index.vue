<template>
    <div class="page">
        <div class="page-content">
            <div class="code-name">JDPay UI</div>

            <div class="text-center code-desc">
                Mobile UI Components<br>based on Vue.js
            </div>

            <jv-cell-group>
                <jv-cell title="Demo" @click="demo">
                    <jv-icon slot="right-icon" :bgUrl="arrowIconUrl" :width="0.2" :height="0.2"
                        class="jv-cell__right-icon"/>
                </jv-cell>

                <jv-cell title="Code">
                    <jv-icon slot="right-icon" :bgUrl="arrowIconUrl" :width="0.2" :height="0.2"
                        class="jv-cell__right-icon"/>
                </jv-cell>

                <jv-cell title="Doc">
                    <jv-icon slot="right-icon" :bgUrl="arrowIconUrl" :width="0.2" :height="0.2"
                        class="jv-cell__right-icon"/>
                </jv-cell>
            </jv-cell-group>

        </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            arrowIconUrl: require('src/image/arrow-r-gray.png')
        };
    },

    methods: {
        demo () {
            this.$router.push({path: '/home'});
        },

        code () {
        },

        doc () {
        }
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.page {
    .code-name {
        text-align: center;
        font-family: "Monoton", sans-serif;
        font-size: 24px;
        line-height: .24rem;
        color: #47B584;
        margin: .15rem 0 .1rem;
    }

    .jv-cell__text {
        font-family: "Monoton", sans-serif;
        font-size: 18px;
        line-height: .18rem;
    }

    .code-desc {
        color: #999;
        margin: .05px auto .25rem auto;
        font-family: "Josefin Sans", sans-serif;
    }
}

</style>
