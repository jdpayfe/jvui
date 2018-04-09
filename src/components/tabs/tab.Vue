<template>
	<div class="jv-tab__pane" :class="{'jv-tab__pane--select': index === parent.curActive }">
        <slot />
	</div>
</template>

<script>
    import findParent from '../mixins/find-parent';

	export default {
		name: 'jv-tab',

        mixins: [findParent],

        props: {
			title: String, // 	标题
            disabled: Boolean // 	是否禁用标签
        },
        computed: {
			index () {
				return this.parent.tabs.indexOf(this);
            }
        },
        created () {
			this.findParent('jv-tabs');
			this.parent.tabs.push(this);
        },
        destroyed () {
			this.parent.tabs.splice(this.index, 1)
        }
    };
</script>

