<template>
	<transition :name="currentTransition">
        <div v-show="value" class="jv-popup" :class="{[`jv-popup-${position}`]: position}">
            <slot />
        </div>
	</transition>
</template>

<script>
    import Popup from '../mixins/popup';

	export default {
		name: 'jv-popup',

        mixins: [Popup],

        props: {
            transition: String,
            overlay: {
                type: Boolean,
                default: true
            },
            closeOnClickOverlay: {
                type: Boolean,
                default: true
            },
            position: {
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
