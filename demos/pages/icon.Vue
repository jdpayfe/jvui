<template>
    <div class="icon-demo">
        <jv-nav-bar :title="title" left-arrow
            @click-left="$router.replace('/home')"/>

        <div class="block-title">基础用法</div>
        <div class="block block-icon">
            <div class="item" v-for="(img, index) in bgUrls" :key="index">
                <jv-icon :bgUrl="img.url" :width="0.2" :height="0.2" info="图标"/>
            </div>
        </div>

    </div>
</template>

<script>
export default{

    data () {
        return {
            title: this.$route.query.title,
            bgUrls: [
                {url: require('src/image/arrow-left.png')},
                {url: require('src/image/arrow-left-w.png')},
                {url: require('src/image/addressSelected.png')},
                {url: require('src/image/addShoppingCart.png')},
                {url: require('src/image/applyservice.png')},
                {url: require('src/image/brand.png')},
                {url: require('src/image/brandSelect1.png')},
                {url: require('src/image/brandSelect2.png')},
                {url: require('src/image/cancelorder.png')},
                {url: require('src/image/checked.png')},
                {url: require('src/image/close.png')},
                {url: require('src/image/closepopup.png')},
                {url: require('src/image/closeup.png')},
                {url: require('src/image/dcmode.png')},
                {url: require('src/image/feedback.png')},
                {url: require('src/image/helpcenter.png')},
                {url: require('src/image/homePage.png')},
                {url: require('src/image/index-car-a.png')},
                {url: require('src/image/index-home-a.png')},
                {url: require('src/image/index-my-a.png')},
                {url: require('src/image/index-sort-a.png')},
                {url: require('src/image/message-w.png')},
                {url: require('src/image/notsupport.png')},
                {url: require('src/image/opendown.png')},
                {url: require('src/image/order-all.png')},
                {url: require('src/image/order-patch.png')},
                {url: require('src/image/order-pay.png')},
                {url: require('src/image/priceHighSelect.png')},
                {url: require('src/image/priceLowSelect.png')},
                {url: require('src/image/priceHigh.png')},
                {url: require('src/image/priceLow.png')},
                {url: require('src/image/queryorder.png')},
                {url: require('src/image/queryorder-help.png')},
                {url: require('src/image/receiveaddr.png')},
                {url: require('src/image/saleapply.png')},
                {url: require('src/image/scancode.png')},
                {url: require('src/image/searchSmall.png')},
                {url: require('src/image/selectAddress.png')},
                {url: require('src/image/selected.png')},
                {url: require('src/image/share.png')},
                {url: require('src/image/shopping.png')},
                {url: require('src/image/shoppingAddress.png')},
                {url: require('src/image/support.png')},
                {url: require('src/image/threeSpot.png')},
                {url: require('src/image/thumbUp.png')},
                {url: require('src/image/thumbUped.png')},
                {url: require('src/image/toSelect.png')},
                {url: require('src/image/unchecked.png')},
                {url: require('src/image/support.png')}
            ]
        };
    },
    methods: {}
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.icon-demo {
    .block-icon {
        background-color: #c3c3c3;
        position: relative;

        .item {
            display: inline-block;
            padding: .1rem;
        }
    }
}
</style>
