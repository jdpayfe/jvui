<template>
    <div class="datetime-picker-demo">
        <jv-nav-bar :title="title" left-arrow
            @click-left="$router.replace('/home')"/>

        <div class="block-title">选择完整时间</div>
        <div class="block">
            <jv-datetime-picker
                v-model="currentDate1"
                type="datetime"
                :min-date="minDate"
                :max-date="maxDate"
            />
        </div>

        <div class="block-title">选择日期（年月日）</div>
        <div class="block">
            <jv-datetime-picker
                v-model="currentDate2"
                type="date"
                :min-date="minDate"
            />
        </div>

        <div class="block-title">选择日期（年月）</div>
        <div class="block">
            <jv-datetime-picker
                v-model="currentDate3"
                type="year-month"
                :min-date="minDate"
            />
        </div>

        <div class="block-title">选择时间</div>
        <div class="block">
            <jv-datetime-picker
                v-model="currentDate4"
                type="time"
                :min-hour="minHour"
                :max-hour="maxHour"
            />
        </div>

    </div>
</template>

<script>
export default{

    data () {
        return {
            title: this.$route.query.title,
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate1: new Date(2018, 0, 1),
            currentDate2: null,
            currentDate3: new Date(2018, 0, 1),
            currentDate4: '12:00'
        };
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.datetime-picker-demo {

    .lm-datetime-demo {

    }
}
</style>
