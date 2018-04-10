<template>
    <div class="area-demo">
        <jv-nav-bar :title="title" left-arrow
                    @click-left="$router.replace('/home')" />

        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-area :areaList="areaList" showCloseBtn showConfirmBtn></jv-area>

        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                title: this.$route.query.title,
                areaList: [
                    {
                        '110000': '北京市',
                        '120000': '天津市',
                        '130000': '河北省',
                        '140000': '山西省',
                        '150000': '内蒙古自治区',
                        '210000': '辽宁省',
                        '220000': '吉林省',
                        '230000': '黑龙江省',
                        '310000': '上海市'
                    },
                    {
                        '130100': '石家庄市',
                        '130200': '唐山市',
                        '130300': '秦皇岛市',
                        '130400': '邯郸市',
                        '130500': '邢台市',
                        '130600': '保定市',
                        '130700': '张家口市',
                        '130800': '承德市',
                        '130900': '沧州市',
                        '131000': '廊坊市',
                        '131100': '衡水市'
                    },
                    {
                        '110111': '房山区',
                        '110112': '通州区',
                        '110113': '顺义区',
                        '110114': '昌平区',
                        '110115': '大兴区',
                        '110116': '怀柔区',
                        '110117': '平谷区',
                        '110228': '密云县',
                        '110229': '延庆县',
                        '120101': '和平区'
                    }
                ],
            };
        },

        methods: {
        }
    };
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
    .area-demo {

    }
</style>
