<template>
    <div class="home">
        <jv-nav-bar title="示例" left-arrow
            @click-left="onClickLeft"/>

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
export default{
    data () {
        return {
            arrowIconUrl: require('src/image/arrow-r-gray.png'),
            components: { // 请在这里添加组件示例的标题和路由
                basic: {
                    blockTitle: '基础',
                    members: [
                        {name: '徽章 - Badge', router: '/basic/badge'},
                        {name: '按钮 - Button', router: '/basic/button'},
                        {name: '图标 - Icon', router: '/basic/icon'},
                        {name: '单选框 - Radio', router: '/basic/radio'}
                    ]
                },
                layout: {
                    blockTitle: '布局',
                    members: [
                        {name: '单元格 - Cell', router: '/layout/cell'},
                        {name: '导航条 - NavBar', router: '/layout/navBar'},
                        {name: '选项卡 - Tabs', router: '/layout/tabs'},
                        {name: '弹出层 - Popup', router: '/layout/popup'},
                        {name: '标签栏 - Tabbar', router: '/layout/tabbar'}
                    ]
                },
                advanced: {
                    blockTitle: '高级',
                    members: [
                        {name: '省市区 - Area', router: '/advanced/area'},
                        {name: '时间选择器 - datetimePicker', router: '/advanced/datetimePicker'},
                        {name: '选择器 - Picker', router: '/advanced/picker'},
                        {name: '轮播 - Swipe', router: '/advanced/swipe'}

                    ]
                },
                directive: {
                    blockTitle: '指令',
                    members: [
                        {name: '懒加载 - Lazyload', router: '/directive/lazyload'}

                    ]
                }
            }
        };
    },

    methods: {
        onClickLeft () {
            this.$router.push('/');
        },
        routerLink (member) {
            this.$router.push({
                path: member.router,
                query: {
                    title: member.name
                }
            });
        }
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.home {

    .jv-cell__text {
        font-family: "Monoton", sans-serif;
        font-size: 16px;
        line-height: .16rem;
    }
}
</style>
