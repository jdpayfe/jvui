<template>
    <div class="lazyload-demo">
        <div class="block-title">基本用法</div>
        <div class="block">
            <img v-for="img in imageList" v-lazy="img" :key="img">
        </div>

        <div class="block-title">背景图懒加载</div>
        <div class="block">
            <div v-for="img in backgroundImageList" :key="img" v-lazy:background-image="img"/>
        </div>

        <div class="block-title">懒加载模块</div>
        <div class="block">
            <lazy-component>
                <img v-for="img in componentImageList" :key="img" v-lazy="img">
            </lazy-component>
        </div>
        <p>
            <a href="https://www.npmjs.com/package/vue-lazyload#usage" target="_blank">
                使用参考：https://www.npmjs.com/package/vue-lazyload#usage
            </a>
        </p>
    </div>
</template>

<script>
export default{

    data () {
        return {
            imageList: [
                'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
            ],
            backgroundImageList: [
                'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'
            ],
            componentImageList: [
                'https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/8a4f5be8289cb3a7434fc19a3de780a2.jpg'
            ]
        };
    },

    methods: {
        handleComponentShow () {
            console.log('component show');
        }
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.lazyload-demo {
    padding: 0 .15rem;

    img,
    div[lazy] {
        padding: .15rem;
        width: 100%;
        height: 2.5rem;
        margin: .1rem 0 0;
        background-color: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background-size: 3.15rem 2.5rem;
        background-position: .15rem;
        background-repeat: no-repeat;
        box-sizing: border-box;
    }

    .van-doc-demo-block__title,
    .van-doc-demo-section__title {
        padding-left: 0;
    }

}
</style>
