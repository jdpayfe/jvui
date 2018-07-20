
export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { staticClass: "jv-icon", style: _vm.styleObj }, [_vm._t("default")], 2);
    },

    name: 'jv-icon',

    props: {
        bgUrl: { // 背景图片src
            type: String,
            require: true
        },
        width: { // 宽
            type: Number,
            // require: true,
            default: 0.2
        },
        height: Number, // 高 可省略 则默认为宽
        bgWidth: Number, // 背景图宽 可省略 则默认为 宽
        bgHeight: Number // 背景图高 可省略 则默认为 高
        // info: String
    },
    computed: {
        styleObj: function styleObj() {
            return {
                width: this.width + "rem",
                height: this.compHeight + "rem",
                background: "url(" + this.bgUrl + ") center center / " + this.bg_width + "rem " + this.bg_height + "rem no-repeat"
            };
        },
        compHeight: function compHeight() {
            return this.height ? this.height : this.width;
        },
        bg_width: function bg_width() {
            return this.bgWidth ? this.bgWidth : this.width;
        },
        bg_height: function bg_height() {
            return this.bgHeight ? this.bgHeight : this.compHeight;
        }
    }
};