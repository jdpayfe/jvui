

export default {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.num && _vm.num > 0 ? _c('div', { staticClass: "jv-badge", style: _vm.styleObj }, [_vm._v(_vm._s(_vm.resultNum))]) : _vm._e();
    },

    name: 'jv-badge',

    props: {
        maxNum: Number, // 显示到的最大数
        num: Number, // 实际数
        radius: { // 圆角 0.2rem 50%
            type: String,
            default: '0'
        },
        borderColor: String // 边框颜色，不需要则不传
    },
    computed: {
        resultNum: function resultNum() {
            if (this.maxNum) {
                return this.num > this.maxNum ? this.maxNum + '+' : this.num;
            } else {
                return this.num;
            }
        },
        styleObj: function styleObj() {
            var style = {
                borderRadius: this.radius
            };

            if (this.borderColor) {
                style.border = '1px solid ' + this.borderColor;
            }

            return style;
        }
    }
};