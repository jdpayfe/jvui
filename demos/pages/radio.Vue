<template>
    <div class="radio-demo">
        <div class="block-title">基础用法</div>
        <div class="block">
            <jv-radio name="1" v-model="radio1">{{ '单选框' }} 1</jv-radio>
            <jv-radio name="2" v-model="radio1">{{ '单选框' }} 2</jv-radio>
        </div>

        <div class="block-title">禁用状态</div>
        <div class="block">
            <jv-radio name="1" v-model="radio2" disabled>{{ '未选中禁用' }}</jv-radio>
            <jv-radio name="2" v-model="radio2" disabled>{{ '选中且禁用' }}</jv-radio>
        </div>

        <div class="block-title">Radio 组</div>
        <div class="block">
            <jv-radio-group v-model="radio3">
                <jv-radio name="1">{{ '单选框' }} 1</jv-radio>
                <jv-radio name="2">{{ '单选框' }} 2</jv-radio>
            </jv-radio-group>
        </div>

        <div class="block-title">与 Cell 组件一起使用</div>
        <jv-radio-group v-model="radio4">
            <jv-cell-group>
                <jv-cell>
                    <jv-radio name="1">{{ '单选框' }}1</jv-radio>
                </jv-cell>
                <jv-cell>
                    <jv-radio name="2">{{ '单选框' }}2</jv-radio>
                </jv-cell>
            </jv-cell-group>
        </jv-radio-group>
    </div>
</template>

<script>
export default{

    data () {
        return {
            radio1: '1',
            radio2: '2',
            radio3: '1',
            radio4: '1'
        };
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.radio-demo {
    .block {
        padding: 0 20px;

        .jv-radio {
            margin: 10px 0;
        }
    }

    .jv-cell {
        .jv-radio__input {
            float: right;
            position: static;
        }

        .jv-radio__label {
            margin: 0;
        }
    }
}
</style>
