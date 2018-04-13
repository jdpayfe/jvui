<template>
    <div class="cell-demo">
        <jv-nav-bar :title="title" left-arrow
            @click-left="$router.replace('/home')"/>

        <div class="block">
            <jv-cell-group>
                <div class="block-title">基础用法</div>

                <jv-cell :title="cell" :value="content"/>

                <div class="block-title">只设置title，无边框</div>

                <jv-cell :title="cell" :border="false"/>
                <div class="block-title">只设置value</div>

                <jv-cell :value="content"/>

                <div class="block-title">多列value</div>

                <jv-cell :value="content" :valInColumn="false">
                    <template slot="title">
                        <span class="jv-cell__text">{{ cell}}</span>
                        <span class="jv-cell__label">{{ desc }}1</span>
                        <span class="jv-cell__label">{{ desc }}2</span>

                    </template>

                    <template>
                        <span>{{ content}}1</span>
                        <span>{{ content}}2</span>
                    </template>
                </jv-cell>

                <div class="block-title">多行value</div>

                <jv-cell :value="content" :valInColumn="true">
                    <template slot="title">
                        <span class="jv-cell__text">{{ cell}}</span>
                    </template>

                    <template>
                        <span>{{ content}}1</span>
                        <span>{{ content}}2</span>
                    </template>
                </jv-cell>
                <jv-cell :value="content" is-link :valInColumn="true" class="multi-column">
                    <template slot="title">
                        <span class="jv-cell__text">支付配送</span>
                    </template>

                    <template>
                        <span>在线支付</span>
                        <span>京东大厦A座</span>
                        <span>12月6日(周三)</span>
                    </template>

                    <!--<jv-icon slot="right-icon" :bgUrl="searchIcon" :width="0.2" :height="0.2"-->
                        <!--class="jv-cell__right-icon"/>-->
                </jv-cell>

                <jv-cell :value="content" :valInColumn="true" class="multi-column2">
                    <template slot="title">
                        <span class="jv-cell__text">送至</span>
                    </template>

                    <template>
                        <span>北京大兴区亦庄开发区科创十二街…</span>
                        <span>现货，11点之前下单预计今天(12月14日)送达</span>
                    </template>

                    <jv-icon slot="right-icon" :bgUrl="threeSpot" :width="0.2" :height="0.2"
                    class="jv-cell__right-icon"/>
                </jv-cell>
            </jv-cell-group>
        </div>

        <div class="block">
            <jv-cell-group>
                <div class="block-title">is-link用法</div>

                <jv-cell :value="content" is-link @click="showTips">
                    <template slot="title">
                        <span class="jv-cell-text">{{ cell }}</span>
                    </template>
                </jv-cell>

                <div class="block-title">icon、clickable用法</div>

                <jv-cell :title="cell" :icon="bgUrl" clickable @click="showTips"/>
                <div class="block-title">其他图标</div>

                <jv-cell :title="cell">
                    <jv-icon slot="right-icon" :bgUrl="searchIcon" :width="0.2" :height="0.2"
                        class="jv-cell__right-icon"/>
                </jv-cell>
            </jv-cell-group>
        </div>

        <div class="block-title">微商城中选择列表</div>
        <div class="block">
            <jv-button @click="show2 = true;">请选择(+图标)</jv-button>

            <jv-popup v-model="show2" position="bottom">
                <div class="jv-extend__select">
                    <div class="jv-extend__select--title jv-hairline--top-bottom">
                        请选择地址
                        <span class="jv-extend__select--title--close"></span>
                    </div>
                    <div class="jv-extend__select--content">
                        <jv-cell v-for="i in 5" :key="i"
                            :title="'北京大兴区亦庄开发区京东大厦A座' + i"
                            clickable
                            @click="doSelect(i)">
                            <jv-icon slot="icon"
                                :bgUrl="selectedIndex === i ? bgUrl : bgUrl2"
                                :width="0.12"
                                :height="0.15"/>

                            <jv-icon v-show="selectedIndex === i"
                                slot="right-icon"
                                :bgUrl="selectedIcon"
                                :width="0.14"
                                :height="0.1"
                                class="jv-cell__right-icon"/>
                        </jv-cell>
                    </div>
                    <div class="jv-extend__select--confirm">
                        选择其他地址
                    </div>
                </div>
            </jv-popup>
        </div>
    </div>
</template>

<script>
export default{

    data () {
        return {
            bgUrl: require('src/image/addressSelected.png'),
            bgUrl2: require('src/image/selectAddress.png'),
            searchIcon: require('src/image/searchSmall.png'),
            selectedIcon: require('src/image/selected.png'),
            threeSpot: require('src/image/threeSpot.png'),
            title: this.$route.query.title,
            cell: '单元格',
            content: '内容',
            desc: '单元格描述信息',
            show2: false,
            selectedIndex: ''
        };
    },

    methods: {
        showTips () {
            alert('you need a alert component');
        },
        doSelect (i) {
            this.selectedIndex = i;
        }
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.cell-demo {

    .block-title {
        background-color: #f8f8f8;
    }

    .jv-cell__right-icon {
        /*margin-top: 50%;*/
    }

    .jv-extend__select {
        padding-bottom: .55rem;

        &--title {
            width: 100%;
            height: .6rem;
            line-height: .6rem;
            text-align: center;
            font-size: .16rem;
            color: #666;

            &--close {
                position: absolute;
                top: .16rem;
                right: .15rem;
                width: .225rem;
                height: .225rem;
                background: url("../../src/image/closepopup.png") no-repeat center;
                background-size: .18rem;
            }
        }

        &--content {
            height: 2.39rem;
            overflow: scroll;
        }

        &--confirm {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 5;
            height: .55rem;
            line-height: .55rem;
            width: 100%;
            background-image: linear-gradient(-225deg, #FF4A00 0%, #F6002F 100%);
            font-size: .16rem;
            color: #FFF;
            text-align: center;
        }

        .jv-cell {
            padding: .2rem .21rem .2rem .23rem;
        }

        .jv-cell__text {
            color: #333;
            font-size: .14rem;
        }

        .jv-cell__title .jv-icon {
            margin-right: .1rem !important;
        }
    }

    .multi-column {
        .jv-cell__value {
            padding-right: .3rem;
        }
    }

    .multi-column2 {
        .jv-cell__value {
            padding-right: .3rem;
            margin-left: .25rem;
            text-align: left;
        }

        .jv-cell__right-icon {
            top: .1rem;
            transform: none;
        }
    }
}
</style>
