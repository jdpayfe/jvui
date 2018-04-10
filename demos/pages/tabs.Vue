<template>
    <div class="tabs-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-tabs :active="active">
                <jv-tab :title="tab+ index" v-for="index in tabs" :key="index">
                    {{ content}} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">横向滚动</div>
        <div class="block">
            <jv-tabs>
                <jv-tab v-for="index in 8" :title="tab + index" :key="index">
                    {{ content }} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">禁用标签</div>
        <div class="block">
            <jv-tabs @disabled="onClickDisabled">
                <jv-tab v-for="index in 4" :title="tab + index" :disabled="index === 2" :key="index">
                    {{ content }} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">样式风格</div>
        <div class="block">
            <jv-tabs type="card">
                <jv-tab v-for="index in 4" :title="tab + index" :key="index">
                    {{ content }} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">点击事件</div>
        <div class="block">
            <jv-tabs @click="onClick">
                <jv-tab v-for="index in 4" :title="tab + index" :key="index">
                    {{ content }} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">粘性布局</div>
        <div class="block">
            <jv-tabs :active="active" sticky>
                <jv-tab :title="tab + index" v-for="index in tabs" :key="index">
                    {{ content}} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">自定义标签</div>
        <div class="block">
            <jv-tabs :active="active">
                <jv-tab v-for="index in 2" :key="index">
                    <div slot="title">
                        <jv-icon name="more-o"/>
                        {{ tab }}
                    </div>
                    {{ content }} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

        <div class="block-title">滑动切换</div>
        <div class="block">
            <jv-tabs :active="active" swipeable>
                <jv-tab :title="tab + index" v-for="index in tabs" :key="index">
                    {{ content }} {{ index }}
                </jv-tab>
            </jv-tabs>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: this.$route.query.title,
                active: 2,
                tabs: [1, 2, 3, 4],
                content: '内容',
                tab: '选项'
            };
        },

        methods: {
            onClickDisabled(index, title) {
//                this.$toast(title + this.$t('disabled'));
            },

            onClick(index, title) {
//                this.$toast(title);
            }
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .tabs-demo {
        margin-bottom: 300px;

        .jv-tab .jv-icon {
            margin-right: 5px;
            vertical-align: -2px;
        }

        .jv-tab__pane {
            background-color: #fff;
            padding: 20px;
        }

        .jv-tabs--card .jv-tab__pane {
            background-color: transparent;
        }

        .custom-tabwrap .jv-tab-active {
            color: #20a0ff;
        }
        .custom-tabwrap .jv-tabs-nav-bar {
            background: #20a0ff;
        }
        .custom-pane {
            text-align: center;
            height: 50px;
            line-height: 50px;
        }

        .jv-doc-demo-block:last-child {
            .jv-tab__pane {
                padding: 50px 20px;
            }
        }
    }
</style>
