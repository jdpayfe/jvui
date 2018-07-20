<template>
    <div class="tabbar-demo">
        <jv-nav-bar :title="title" left-arrow
            @click-left="$router.replace('/home')"/>

        <div class="block">
            <div class="block-title">基本用法</div>

            <div class="block-title">不使用dot, info</div>

            <jv-tabbar v-model="active">
                <jv-tabbar-item v-for="(item, index) in items"
                    :icon="active === index ? item.active : item.normal"
                    :key="index">{{ item.title }}</jv-tabbar-item>
            </jv-tabbar>

            <div class="block-title">使用dot</div>

            <jv-tabbar v-model="active">
                <jv-tabbar-item v-for="(item, index) in items"
                    :icon="active === index ? item.active : item.normal"
                    :dot="item.info > 0 ? true : false"
                    :key="index">{{ item.title }}</jv-tabbar-item>
            </jv-tabbar>

            <div class="block-title">使用info</div>

            <jv-tabbar v-model="active">
                <jv-tabbar-item v-for="(item, index) in items"
                    :icon="active === index ? item.active : item.normal"
                    :info="item.info + ''"
                    :key="index">{{ item.title }}</jv-tabbar-item>
            </jv-tabbar>
        </div>

        <div class="block">
            <div class="block-title">自定义图标标签</div>

            <jv-tabbar v-model="active2">
                <jv-tabbar-item v-for="(item, index) in items"
                    :key="index">

                    <span>{{ item.title }}</span>
                    <template slot="icon" slot-scope="props">
                        <img :src="props.active ? item.active : item.normal">
                    </template>

                </jv-tabbar-item>

            </jv-tabbar>
        </div>
    </div>
</template>

<script>
export default {

    data () {
        return {
            title: this.$route.query.title,
            tab: '标签',
            active: 0,
            active2: 0,
            icon: {
                normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
                active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
            },
            items: [
                {title: '首页', info: 0, normal: require('src/image/index-home.png'), active: require('src/image/index-home-a.png')},
                {title: '分类', info: 5, normal: require('src/image/index-sort.png'), active: require('src/image/index-sort-a.png')},
                {title: '购物车', info: 78, normal: require('src/image/index-car.png'), active: require('src/image/index-car-a.png')},
                {title: '我的', info: 123, normal: require('src/image/index-my.png'), active: require('src/image/index-my-a.png')}
            ]
        };
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.tabbar-demo {
    .jv-tabbar {
        position: relative;

        &-item {
            cursor: pointer;
        }
    }
}
</style>
