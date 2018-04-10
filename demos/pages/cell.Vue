<template>
    <div class="cell-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block">
            <jv-cell-group>
                <div class="block-title">基础用法</div>

                <jv-cell :title="cell" :value="content" />

                <div class="block-title">只设置title，无边框</div>

                <jv-cell :title="cell" :border="false"/>
                <div class="block-title">只设置value</div>

                <jv-cell :value="content"/>


                <div class="block-title">多行value</div>

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

                <div class="block-title">多列value</div>

                <jv-cell :value="content" :valInColumn="true">
                    <template slot="title">
                        <span class="jv-cell__text">{{ cell}}</span>
                        <!--<span class="jv-cell__label">{{ desc }}1</span>-->
                        <!--<span class="jv-cell__label">{{ desc }}2</span>-->

                    </template>

                    <template>
                        <span>{{ content}}1</span>
                        <span>{{ content}}2</span>
                    </template>
                </jv-cell>
            </jv-cell-group>
        </div>


        <div class="block">
            <jv-cell-group>
                <div class="block-title">is-link用法</div>

                <jv-cell :value="content" is-link @click="showTips">
                    <template slot="title">
                        <span class="jv-cell-text">{{ cell }}</span>
                        <!--<jv-tag type="danger">{{ $t('tag') }}</jv-tag>-->
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

    </div>
</template>

<script>
    export default {

        data() {
            return {
                bgUrl: require('src/image/addressSelected.png'),
                searchIcon: require('src/image/searchSmall.png'),
                title: this.$route.query.title,
                cell: '单元格',
                content: '内容',
                desc: '单元格描述信息',
            };
        },

        methods: {
            showTips () {
                alert('you need a alert component')
            }
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .cell-demo {

        .block-title {
            background-color: #f8f8f8;
        }
    }
</style>
