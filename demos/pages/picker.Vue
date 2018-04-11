<template>
    <div class="picker-demo">
        <jv-nav-bar :title="title" left-arrow
            @click-left="$router.replace('/home')"/>

        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-picker :columns="column1" @change="onChange1"/>
        </div>

        <div class="block-title">禁用选项</div>
        <div class="block">
            <jv-picker :columns="column2"/>

        </div>

        <div class="block-title">展示顶部栏</div>
        <div class="block">
            <jv-picker
                show-toolbar
                :title="area"
                :columns="column1"
                @cancel="onCancel"
                @confirm="onConfirm"
            />
        </div>

        <div class="block-title">多列联动</div>
        <div class="block">
            <jv-picker :columns="columns" @change="onChange2"/>

        </div>

        <div class="block-title">加载状态</div>
        <div class="block">
            <jv-picker :columns="columns" loading/>

        </div>

        <div class="block-title">微商城中picker</div>
        <div class="block">
            <jv-picker class="custom-lm"
                show-toolbar
                mask
                title="请选择地址"
                itemHeight=".49rem"
                cancelButtonText=" "
                :columns="weiArr"
                @cancel="onCancel"
                @confirm="onConfirm"
            />
        </div>

    </div>
</template>

<script>
export default{

    data () {
        return {
            title: this.$route.query.title,
            area: '标题',
            column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            column2: [
                {text: '杭州', disabled: true},
                {text: '宁波'},
                {text: '温州'}
            ],
            column3: {
                浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
                福建: ['福州', '厦门', '莆田', '三明', '泉州']
            },
            weiArr: ['六环以外', '五环至六环之间', '四环至五环之间', '亦庄开发区']
        };
    },

    computed: {
        columns () {
            const column = this.column3;
            return [
                {
                    values: Object.keys(column),
                    className: 'column1'
                },
                {
                    values: column[Object.keys(column)[0]],
                    className: 'column2',
                    defaultIndex: 2
                }
            ];
        }
    },

    methods: {
        onChange1 (picker, value, index) {
            alert('you need a alert component', picker, value, index);
        },
        onChange2 (picker, values) {
            picker.setColumnValues(1, this.column3[values[0]]);
        },
        onConfirm (value, index) {
            alert(value + index);
        },
        onCancel () {
            alert('cancel');
        }
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.picker-demo {

    /* 微商城中picker */

    .custom-lm {
        position: relative;
        height: 3.54rem;
        padding-bottom: .55rem;

        .jv-picker__toolbar {
            position: static !important;
            height: .6rem;
            line-height: .6rem;

        }

        .jv-picker__title {
            max-width: 100% !important;
            width: 100%;
            font-size: .16rem;
            color: #666;
        }

        .jv-picker__confirm {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 5;
            height: .55rem;
            width: 100%;
            background-image: linear-gradient(-225deg, #FF4A00 0%, #F6002F 100%);
            font-size: .16rem;
            color: #FFF;
            text-align: center;
        }

        .jv-picker__cancel {
            position: absolute;
            top: .16rem;
            right: .15rem;
            width: .225rem;
            height: .225rem;
            background: url("../../src/image/closepopup.png") no-repeat center;
            background-size: .18rem;
        }

        .jv-picker-column--selected {
            font-size: .18rem;
            color: #EE3D3D;
        }

    }

}
</style>
