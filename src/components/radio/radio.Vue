<template>
    <div
        class="jv-radio"
        :class="{ 'jv-radio--disabled': isDisabled }"
        @click="$emit('click')"
    >
    <span class="jv-radio__input">
        <input
            :value="name"
            v-model="currentValue"
            type="radio"
            class="jv-radio__control"
            :disabled="isDisabled">
        <slot name="icon">
            <jv-icon class="jv-radio__icon" :width="0.2" :bgUrl="currentValue === name ? checked : unchecked"/>
        </slot>
        </span>
        <span class="jv-radio__label" @click="onClickLabel">
        <slot/>
    </span>
    </div>
</template>

<script>
import JvIcon from '../icon/icon';
import findParent from '../mixins/find-parent';

export default{
    name: 'jv-radio',

    mixins: [findParent],

    components: {
        JvIcon
    },

    data () {
        return {
            checked: require('src/image/checked.png'),
            unchecked: require('src/image/unchecked.png')
        };
    },

    props: {
        value: {},
        disabled: Boolean,
        name: [String, Number]
    },

    computed: {
        currentValue: {
            get () {
                return this.parent ? this.parent.value : this.value;
            },

            set (val) {
                (this.parent || this).$emit('input', val);
            }
        },

        isDisabled () {
            return this.parent
                ? this.parent.disabled || this.disabled
                : this.disabled;
        }
    },

    created () {
        this.findParent('jv-radio-group');
    },

    methods: {
        onClickLabel () {
            if (!this.isDisabled) {
                this.currentValue = this.name;
            }
        }
    }
};
</script>
