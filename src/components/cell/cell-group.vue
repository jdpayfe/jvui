<template>
    <div class="jv-cell-group" :class="{ 'jv-hairline--top-bottom': border }">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'jv-cell-group',

    props: {
        border: {
            type: Boolean,
            default: true
        }
    }
};
</script>
