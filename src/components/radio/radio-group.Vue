<template>
    <div class="jv-radio-group">
        <slot />
    </div>
</template>

<script>
export default{
    name: 'jv-radio-group',

    props: {
        value: {},
        disabled: Boolean
    },

    watch: {
        value (value) {
            this.$emit('change', value);
        }
    }
};
</script>
