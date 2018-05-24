
import { raf } from '../utils/raf';
import { on, off } from '../utils/event';
import JvNode from '../utils/node';
import scrollUtils from '../utils/scroll';

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jv-tabs", class: "jv-tabs--" + _vm.type }, [_c('div', { ref: "wrap", staticClass: "jv-tabs__wrap", class: ["jv-tabs__wrap--" + _vm.position, {
                'jv-tabs--scrollable': _vm.scrollable,
                'jv-hairline--top-bottom': _vm.type === 'line'
            }] }, [_c('div', { ref: "nav", staticClass: "jv-tabs__nav", class: "jv-tabs__nav--" + _vm.type }, [_vm.type === 'line' ? _c('div', { staticClass: "jv-tabs__nav-bar", style: _vm.navBarStyle }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
            return _c('div', { key: index, ref: "tabs", refInFor: true, staticClass: "jv-tab", class: {
                    'jv-tab--active': index === _vm.curActive,
                    'jv-tab--disabled': tab.disabled
                }, on: { "click": function click($event) {
                        _vm.onClick(index);
                    } } }, [tab.$slots.title ? _c('jv-node', { attrs: { "node": tab.$slots.title } }) : _c('span', { staticClass: "jv-ellipsis" }, [_vm._v(_vm._s(tab.title))])], 1);
        })], 2)]), _c('div', { ref: "content", staticClass: "jv-tabs__content" }, [_vm._t("default")], 2)]);
    },

    name: 'jv-tabs',

    components: {
        JvNode: JvNode
    },

    props: {
        sticky: Boolean, // 是否使用粘性定位布局,当Tab 滚动到顶部时会自动吸顶
        active: { // 默认激活的tab
            type: [Number, String],
            default: 0
        },
        type: { // tab样式类型， 可选card
            type: String,
            default: 'line'
        },
        duration: { // 切换 tab 的动画时间
            type: Number,
            default: 0.1
        },
        swipeThreshold: { // 滚动阀值，设置 Tab 超过多少个可滚动
            type: Number,
            default: 4
        },
        swipeable: Boolean // 是否可以滑动内容切换
    },

    data: function data() {
        return {
            tabs: [],
            position: 'content-top',
            curActive: 0,
            navBarStyle: {}
        };
    },


    computed: {
        // whether the nav is scrollable
        scrollable: function scrollable() {
            return this.tabs.length > this.swipeThreshold;
        }
    },

    watch: {
        active: function active(val) {
            this.correctActive(val);
        },
        tabs: function tabs(_tabs) {
            this.correctActive(this.curActive || this.active);
            this.setNavBar();
        },
        curActive: function curActive() {
            this.scrollIntoView();
            this.setNavBar();

            // scroll to correct position
            if (this.position === 'page-top' || this.position === 'content-bottom') {
                scrollUtils.setScrollTop(this.scrollEl, scrollUtils.getElementTop(this.$el));
            }
        },
        sticky: function sticky(isSticky) {
            this.scrollHandler(isSticky);
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.correctActive(this.active);
        this.setNavBar();

        this.$nextTick(function () {
            if (_this.sticky) {
                _this.scrollHandler(true);
            }
            if (_this.swipeable) {
                _this.swipeableHandler(true);
            }
            _this.scrollIntoView();
        });
    },
    beforeDestroy: function beforeDestroy() {
        /* istanbul ignore next */
        if (this.sticky) {
            this.scrollHandler(false);
        }
        /* istanbul ignore next */
        if (this.swipeable) {
            this.swipeableHandler(false);
        }
    },


    methods: {
        // whether to bind sticky listener
        scrollHandler: function scrollHandler(init) {
            this.scrollEl = this.scrollEl || scrollUtils.getScrollEventTarget(this.$el);
            (init ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
            if (init) {
                this.onScroll();
            }
        },


        // whether to bind content swipe listener
        swipeableHandler: function swipeableHandler(init) {
            var swipeableEl = this.$refs.content;

            (init ? on : off)(swipeableEl, 'touchstart', this.onTouchStart, false);
            (init ? on : off)(swipeableEl, 'touchmove', this.onTouchMove, false);
            (init ? on : off)(swipeableEl, 'touchend', this.onTouchEnd, false);
            (init ? on : off)(swipeableEl, 'touchcancel', this.onTouchEnd, false);
        },


        // record swipe touch start position
        onTouchStart: function onTouchStart(event) {
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        },


        // watch swipe touch move
        onTouchMove: function onTouchMove(event) {
            this.deltaX = event.touches[0].clientX - this.startX;
            this.direction = this.getDirection(event.touches[0]);
        },


        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            var direction = this.direction,
                deltaX = this.deltaX,
                curActive = this.curActive;

            var minSwipeDistance = 50;

            /* istanbul ignore else */
            if (direction === 'horizontal' && Math.abs(deltaX) >= minSwipeDistance) {
                /* istanbul ignore else */
                if (deltaX > 0 && curActive !== 0) {
                    this.curActive = curActive - 1;
                } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
                    this.curActive = curActive + 1;
                }
            }
        },


        // get swipe direction
        getDirection: function getDirection(touch) {
            var distanceX = Math.abs(touch.clientX - this.startX);
            var distanceY = Math.abs(touch.clientY - this.startY);
            return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : '';
        },


        // adjust tab position
        onScroll: function onScroll() {
            var scrollTop = scrollUtils.getScrollTop(this.scrollEl);
            var elTopToPageTop = scrollUtils.getElementTop(this.$el);
            var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
            if (scrollTop > elBottomToPageTop) {
                this.position = 'content-bottom';
            } else if (scrollTop > elTopToPageTop) {
                this.position = 'page-top';
            } else {
                this.position = 'content-top';
            }
        },


        // update nav bar style
        setNavBar: function setNavBar() {
            var _this2 = this;

            this.$nextTick(function () {
                if (!_this2.$refs.tabs) {
                    return;
                }

                var tab = _this2.$refs.tabs[_this2.curActive];
                _this2.navBarStyle = {
                    width: (tab.offsetWidth || 0) + 'px',
                    transform: 'translate(' + (tab.offsetLeft || 0) + 'px, 0)',
                    transitionDuration: _this2.duration + 's'
                };
            });
        },


        // correct the value of active
        correctActive: function correctActive(active) {
            active = +active;
            var exist = this.tabs.some(function (tab) {
                return tab.index === active;
            });
            var defaultActive = (this.tabs[0] || {}).index || 0;
            this.curActive = exist ? active : defaultActive;
        },


        // emit event when clicked
        onClick: function onClick(index) {
            var _tabs$index = this.tabs[index],
                title = _tabs$index.title,
                disabled = _tabs$index.disabled;

            if (disabled) {
                this.$emit('disabled', index, title);
            } else {
                this.$emit('click', index, title);
                this.curActive = index;
            }
        },


        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            if (!this.scrollable || !this.$refs.tabs) {
                return;
            }

            var tab = this.$refs.tabs[this.curActive];
            var nav = this.$refs.nav;
            var scrollLeft = nav.scrollLeft,
                navWidth = nav.offsetWidth;
            var offsetLeft = tab.offsetLeft,
                tabWidth = tab.offsetWidth;


            this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
        },


        // animate the scrollLeft of nav
        scrollTo: function scrollTo(el, from, to) {
            var count = 0;
            var frames = Math.round(this.duration * 1000 / 16);
            var animate = function animate() {
                el.scrollLeft += (to - from) / frames;
                /* istanbul ignore next */
                if (++count < frames) {
                    raf(animate);
                }
            };
            animate();
        }
    }
};