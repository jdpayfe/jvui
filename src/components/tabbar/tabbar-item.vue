<template>
<div class="jv-tabbar-item" :class="{'jv-tabbar-item--active': active}" @click="onClick">
    <div class="jv-tabbar-item__icon" :class="{'jv-tabbar-item__icon-dot': dot}">
        <slot name="icon" :active="active">
            <jv-icon v-if="icon" :bgUrl="icon"></jv-icon>
        </slot>
        <div v-if="info" class="jv-tabbar-item__icon-info">{{ info }}</div>
    </div>

    <div class="jv-tabbar-item__text">
        <slot :active="active"></slot>
    </div>
</div>
</template>

<script>
import JvIcon from '../icon/icon';

export default {
    name: 'jv-tabbar-item',
    data () {
        return {
            active: false
        };
    },
    props: {
        icon: String,
        dot: Boolean,
        info: String
    },
    components: {
        JvIcon
    },
    beforeCreate () {
        this.$parent.items.push(this);
    },
    destroyed () {
        this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
    },
    methods: {
        onClick (event) {
            this.$parent.onChange(this.$parent.items.indexOf(this));
            this.$emit('click', event);
        }
    }
};
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">

</style>
