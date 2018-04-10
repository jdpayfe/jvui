<template>
    <div class="home">
        <jv-nav-bar title="示例" left-arrow
                    @click-left="onClickLeft" />

        <div class="home-content">

            <div v-for="(value, key, index) in components" :key="index">
                <div class="block-title">{{ value.blockTitle }}</div>

                <div v-for="(member, index) in value.members" :key="index">
                    <jv-cell-group>
                        <jv-cell :title="member.name"
                                 @click="routerLink(member)">
                            <jv-icon slot="right-icon"
                                     :bgUrl="arrowIconUrl"
                                     :width="0.2"
                                     :height="0.2"
                                     class="jv-cell__right-icon"/>
                        </jv-cell>
                    </jv-cell-group>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arrowIconUrl: require('src/image/arrow-r-gray.png'),
                components: { //  请在这里添加组件示例的标题和路由
                    basic: {
                        blockTitle: '基础',
                        members: [
                            {name: '徽章 - Badge', router: '/basic/badge'},
                            {name: '按钮 - Button', router: '/basic/button'},
                        ]
                    },
                    layout: {
                        blockTitle: '布局',
                        members: [
                            {name: '导航条 - NavBar', router: '/layout/navBar'},
                            {name: '选项卡 - Tabs', router: '/layout/tabs'}

                        ]
                    },
                    advanced: {
                        blockTitle: '高级',
                        members: [
                            {name: '省市区 - Area', router: '/advanced/area'},
                            {name: '轮播 - Swipe', router: '/advanced/swipe'}

                        ]
                    }

                }
            }
        },

        methods: {
            onClickLeft () {
                this.$router.replace('/')
            },
            routerLink (member) {
                this.$router.replace({
                    path: member.router,
                    query: {
                        title: member.name
                    }
                });
            },
        }
    }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .home {

        .jv-cell__text {
            font-family: "Monoton", sans-serif;
            font-size: .16rem;
            line-height: .16rem;
        }
    }
</style>
