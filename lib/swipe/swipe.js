
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-swipe" }, [_vm.count > 1 ? _c('div', { staticClass: "jv-swipe__track", style: _vm.trackStyle, on: { "touchstart": _vm.onTouchStart, "touchmove": _vm.onTouchMove, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd, "transitionend": function transitionend($event) {
                    _vm.$emit('change', _vm.activeIndicator);
                } } }, [_vm._t("default")], 2) : _c('div', { staticClass: "jv-swipe__track" }, [_vm._t("default")], 2), _vm.showIndicators && _vm.count > 1 ? _c('div', { staticClass: "jv-swipe__indicators" }, _vm._l(_vm.count, function (index) {
            return _c('i', { key: index, class: { 'jv-swipe__indicator--active': index - 1 === _vm.activeIndicator } });
        })) : _vm._e()]);
    },

    name: 'jv-swipe',

    props: {
        autoplay: Number, // 自动轮播间隔，单位为 ms
        loop: {
            type: Boolean, // 是否开启循环播放
            default: true
        },
        initialSwipe: { // 初始位置，从 0 开始算
            type: Number,
            default: 0
        },
        showIndicators: { // 是否显示指示器
            type: Boolean,
            default: true
        },
        duration: { // 动画时长，单位为 ms
            type: Number,
            default: 500
        }
    },

    data: function data() {
        return {
            width: 0,
            offset: 0,
            startX: 0,
            startY: 0,
            active: 0,
            deltaX: 0,
            swipes: [],
            direction: '',
            currentDuration: 0
        };
    },
    created: function created() {
        this.active = this.initialSwipe;
    },
    mounted: function mounted() {
        this.initialize();
    },
    destroyed: function destroyed() {
        clearTimeout(this.timer);
    },


    watch: {
        swipes: function swipes() {
            this.initialize();
        },
        initialSwipe: function initialSwipe(val, oldVal) {
            clearTimeout(this.timer);
            this.width = this.$el.getBoundingClientRect().width;
            this.active = this.initialSwipe;
            this.currentDuration = this.duration;

            this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0;
            this.swipes.forEach(function (swipe) {
                swipe.offset = 0;
            });
            this.autoPlay();
        },
        autoplay: function autoplay(_autoplay) {
            if (!_autoplay) {
                clearTimeout(this.timer);
            }
        }
    },

    computed: {
        count: function count() {
            return this.swipes.length;
        },
        trackStyle: function trackStyle() {
            return {
                paddingLeft: this.width + 'px',
                width: (this.count + 2) * this.width + 'px',
                transitionDuration: this.currentDuration + 'ms',
                transform: 'translate(' + this.offset + 'px, 0)'
            };
        },
        activeIndicator: function activeIndicator() {
            return (this.active + this.count) % this.count;
        }
    },

    methods: {
        initialize: function initialize() {
            // reset offset when children changes
            clearTimeout(this.timer);
            this.width = this.$el.getBoundingClientRect().width;
            this.active = this.initialSwipe;
            this.currentDuration = 0;
            this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0;
            this.swipes.forEach(function (swipe) {
                swipe.offset = 0;
            });
            this.autoPlay();
        },
        onTouchStart: function onTouchStart(event) {
            clearTimeout(this.timer);

            this.deltaX = 0;
            this.direction = '';
            this.currentDuration = 0;
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;

            if (this.active <= -1) {
                this.move(this.count);
            }
            if (this.active >= this.count) {
                this.move(-this.count);
            }
        },
        onTouchMove: function onTouchMove(event) {
            this.direction = this.direction || this.getDirection(event.touches[0]);

            if (this.direction === 'horizontal') {
                event.preventDefault();
                this.deltaX = event.touches[0].clientX - this.startX;
                this.move(0, this.range(this.deltaX, [-this.width, this.width]));
            }
        },
        onTouchEnd: function onTouchEnd() {
            if (this.deltaX) {
                this.move(Math.abs(this.deltaX) > 50 ? this.deltaX > 0 ? -1 : 1 : 0);
                this.currentDuration = this.duration;
            }
            this.autoPlay();
        },
        move: function move() {
            var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var active = this.active,
                count = this.count,
                swipes = this.swipes,
                deltaX = this.deltaX,
                width = this.width;


            if (!this.loop && (active === 0 && (offset > 0 || move < 0) || active === count - 1 && (offset < 0 || move > 0))) {
                return;
            }

            if (move) {
                if (active === -1) {
                    swipes[count - 1].offset = 0;
                }
                swipes[0].offset = active === count - 1 && move > 0 ? count * width : 0;

                this.active += move;
            } else {
                if (active === 0) {
                    swipes[count - 1].offset = deltaX > 0 ? -count * width : 0;
                } else if (active === count - 1) {
                    swipes[0].offset = deltaX < 0 ? count * width : 0;
                }
            }
            this.offset = offset - (this.active + 1) * this.width;
        },
        autoPlay: function autoPlay() {
            var _this = this;

            var autoplay = this.autoplay;

            if (autoplay && this.count > 1) {
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    _this.currentDuration = 0;

                    if (_this.active >= _this.count) {
                        _this.move(-_this.count);
                    }

                    setTimeout(function () {
                        _this.currentDuration = _this.duration;
                        _this.move(1);
                        _this.autoPlay();
                    }, 30);
                }, autoplay);
            }
        },
        getDirection: function getDirection(touch) {
            var offsetX = Math.abs(touch.clientX - this.startX);
            var offsetY = Math.abs(touch.clientY - this.startY);
            return offsetX > offsetY ? 'horizontal' : offsetX < offsetY ? 'vertical' : '';
        },
        range: function range(num, arr) {
            return Math.min(Math.max(num, arr[0]), arr[1]);
        }
    }
};