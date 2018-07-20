import manager from './manager';
import context from './context';
import scrollUtils from '../../utils/scroll';
import { on, off } from '../../utils/event';

export default {
    props: {
        // whether to show popup
        value: Boolean,
        // whether to show overlay
        overlay: Boolean,
        // overlay custom style
        overlayStyle: Object,
        // overlay custom class name
        overlayClass: String,
        // whether to close popup when click overlay
        closeOnClickOverlay: Boolean,
        // z-index
        zIndex: [String, Number],
        // return the mount node for popup
        getContainer: Function,
        // prevent body scroll
        lockScroll: {
            type: Boolean,
            default: true
        }
    },

    watch: {
        value: function value(val) {
            this[val ? 'open' : 'close']();
        },
        getContainer: function getContainer() {
            this.move();
        },
        overlay: function overlay() {
            this.renderOverlay();
        }
    },

    created: function created() {
        this._popupId = 'popup-' + context.plusKey('id');
        this.pos = {
            x: 0,
            y: 0
        };
    },
    mounted: function mounted() {
        if (this.getContainer) {
            this.move();
        }
        if (this.value) {
            this.open();
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.close();
    },


    methods: {
        open: function open() {
            /* istanbul ignore next */
            if (this.$isServer) {
                return;
            }

            // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
            if (this.zIndex !== undefined) {
                context.zIndex = this.zIndex;
            }

            if (this.lockScroll) {
                document.body.classList.add('jv-overflow-hidden');
                on(document, 'touchstart', this.onTouchStart);
                on(document, 'touchmove', this.onTouchMove);
            }

            this.renderOverlay();
            this.$emit('input', true);
        },
        close: function close() {
            if (this.lockScroll) {
                document.body.classList.remove('jv-overflow-hidden');
                off(document, 'touchstart', this.onTouchStart);
                off(document, 'touchmove', this.onTouchMove);
            }

            manager.close(this._popupId);
            this.$emit('input', false);
        },
        move: function move() {
            if (this.getContainer) {
                this.getContainer().appendChild(this.$el);
            } else if (this.$parent) {
                this.$parent.$el.appendChild(this.$el);
            }
        },
        onTouchStart: function onTouchStart(e) {
            this.pos = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        },
        onTouchMove: function onTouchMove(e) {
            var pos = this.pos;

            var dx = e.touches[0].clientX - pos.x;
            var dy = e.touches[0].clientY - pos.y;
            var direction = dy > 0 ? '10' : '01';
            var el = scrollUtils.getScrollEventTarget(e.target, this.$el);
            var scrollHeight = el.scrollHeight,
                offsetHeight = el.offsetHeight,
                scrollTop = el.scrollTop;

            var isVertical = Math.abs(dx) < Math.abs(dy);

            var status = '11';

            /* istanbul ignore next */
            if (scrollTop === 0) {
                status = offsetHeight >= scrollHeight ? '00' : '01';
            } else if (scrollTop + offsetHeight >= scrollHeight) {
                status = '10';
            }

            /* istanbul ignore next */
            if (status !== '11' && isVertical && !(parseInt(status, 2) & parseInt(direction, 2))) {
                e.preventDefault();
                e.stopPropagation();
            }
        },
        renderOverlay: function renderOverlay() {
            if (this.overlay) {
                manager.open(this, {
                    zIndex: context.plusKey('zIndex'),
                    className: this.overlayClass,
                    customStyle: this.overlayStyle
                });
            } else {
                manager.close(this._popupId);
            }
            this.$el.style.zIndex = context.plusKey('zIndex');
        }
    }
};