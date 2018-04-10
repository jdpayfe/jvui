<template>
	<transition :name="currentTransition">
        <div v-show="value" class="jv-popup" :class="{[`jv-popup--${position}`]: position}">
            <slot />
        </div>
	</transition>
</template>

<script>
    import Popup from '../mixins/popup';

    /*props in mixin
    * v-model	当前组件是否显示
    * lock-scroll	是否锁定背景滚动
    * overlay-class	自定义蒙层 class
    * overlay-style	自定义蒙层样式
    * get-container	指定弹出层挂载的 HTML 节点
    *
    * event
    * click-overlay	点击蒙层时触发
    * */
	export default {
		name: 'jv-popup',

        mixins: [Popup],

        props: {
            transition: String, // transition 名称 ,默认 popup-slide
            overlay: { // 是否显示背景蒙层
                type: Boolean,
                default: true
            },
            closeOnClickOverlay: { // 点击蒙层是否关闭 Popup
                type: Boolean,
                default: true
            },
            position: { // Popup 位置
                type: String,
                default: ''
            }
        },
        data () {
			const transition = this.transition || (this.position === '' ? 'jv-fade' : `popup-slide-${this.position}`);
			return {
				currentValue: false,
                currentTransition: transition
            }
        }
    };
</script>
