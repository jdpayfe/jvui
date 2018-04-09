<template>
    <div v-if="num && num > 0" class="jv-badge" :style="styleObj">{{ resultNum }}</div>
</template>

<script>

    export default  {
        name: 'jv-badge',

        props: {
            maxNum: Number, // 显示到的最大数
            num: Number, // 实际数
            radius: { // 圆角 0.2rem   50%
                type: String,
                default: '0'
            },
            borderColor: String // 边框颜色，不需要则不传
        },
        computed: {
            resultNum () {
                if (this.maxNum) {
                    return this.num > this.maxNum ? this.maxNum + '+' : this.num;
                } else {
                    return this.num;
                }
            },
            styleObj () {
            	let style = {
                    borderRadius: this.radius
                };

            	if (this.borderColor) {
                    style.border = `1px solid ${this.borderColor}`;
                }

                return style;
            }
        }
    };
</script>

