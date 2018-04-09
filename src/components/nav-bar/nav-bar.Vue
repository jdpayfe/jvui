<template>
    <div
        class="jv-nav-bar jv-hairline--top-bottom"
        :class="{ 'jv-nav-bar--fixed': fixed }"
        :style="style"
    >
        <div class="jv-nav-bar__left" @click="$emit('click-left')">
            <slot name="left">
                <jv-icon v-if="leftArrow" :bgUrl="leftBgUrl" :width="0.2" :height="0.2"/>
                <span v-if="leftText" v-text="leftText" class="jv-nav-bar__text"/>
            </slot>
        </div>
        <div class="jv-nav-bar__title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="jv-nav-bar__right" @click="$emit('click-right')">
            <slot name="right">
                <jv-icon v-if="rightIcon" :bgUrl="rightBgUrl" :width="0.2" :height="0.2"/>
                <span v-if="rightText" v-text="rightText" class="jv-nav-bar__text"/>
            </slot>
        </div>
    </div>
</template>

<script>
    import JvIcon from '../icon/icon'

    export default {
        name: 'jv-nav-bar',

        components: {
            JvIcon
        },
        props: {
            title: String,
            leftText: String,
            rightText: String,
            leftArrow: Boolean,
            rightIcon: Boolean,
            fixed: Boolean,
            zIndex: {
                type: Number,
                default: 1
            }
        },
        data () {
        	return {
                leftBgUrl: require('src/image/arrow-left.png'),
                rightBgUrl: require('src/image/threeSpot.png')
            };
        },
        computed: {
            style() {
                return {
                    zIndex: this.zIndex
                };
            }
        }
    };
</script>
