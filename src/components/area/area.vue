<template>
    <div class="jv-area">
        <header class="jv-area__title">请选择地址</header>
        <slot name="close">
            <span v-if="showCloseBtn" class="jv-area__cancel">×</span>
        </slot>
        <slot name="confirm">
            <span v-if="showConfirmBtn" class="jv-area__confirm">确认</span>
        </slot>
        <jv-tabs :active="activeTabIndex" swipeable @click="getTabIndex">
            <jv-tab :title="tabTitle" v-for="(tabTitle, index) in tabs" :key="index">
            </jv-tab>
        </jv-tabs>

        <jv-swipe @change="getSwipeIndex"
            :showIndicators="false"
            :initialSwipe="activeSwipeIndex"
            :loop="false">
            <jv-swipe-item v-for="(itemObj, areaIndex) in areaList"
                :key="areaIndex">

                <ul>
                    <li class="jv-area__item" @click="getSelectInfo(val, key, index, areaIndex)"
                        v-for="(val, key, index) in itemObj"
                        :key="index"
                    >{{ val }}
                    </li>
                </ul>
            </jv-swipe-item>
        </jv-swipe>
    </div>
</template>

<script>
import JvPopup from '../popup/popup';
import JvTabs from '../tabs/tabs';
import JvTab from '../tabs/tab';
import JvSwipe from '../swipe/swipe';
import JvSwipeItem from '../swipe/swipe-item';

export default {
    name: 'jv-area',

    components: {
        JvPopup,
        JvTabs,
        JvTab,
        JvSwipe,
        JvSwipeItem
    },
    props: {
        areaList: {
            type: Array,
            require: true
        },
        showCloseBtn: {
            type: Boolean,
            default: true
        }, // 是否显示关闭按钮
        showConfirmBtn: {
            type: Boolean,
            default: true
        } // 是否显示确认按钮
    },

    data () {
        return {
            activeSwipeIndex: 0,
            activeTabIndex: 0,
            tabs: ['请选择'],
            selectedArea: []
        };
    },
    computed: {
        count () {
            return this.areaList.length;
        }
    },

    methods: {
        getTabIndex (index, title) {
            this.activeSwipeIndex = index;
        },
        getSwipeIndex (index) {
            this.activeTabIndex = index;
        },

        getSelectInfo (val, key, index, areaIndex) {
            this.selectedArea[areaIndex] = {
                name: val,
                id: key
            };
            if (this.selectedArea.length < this.count) {
                if (areaIndex < this.count - 1) {
                    this.tabs.splice(-1, 0, this.selectedArea[areaIndex].name);
                    this.activeSwipeIndex = areaIndex + 1;
                    this.activeTabIndex = areaIndex + 1;
                } else if (areaIndex === this.count - 1) {
                    this.tabs.splice(-1, 1, this.selectedArea[areaIndex].name);
                }
            } else {
                this.tabs.splice(areaIndex, 1, this.selectedArea[areaIndex].name);
                if (areaIndex < this.count - 1) {
                    this.activeSwipeIndex = areaIndex + 1;
                    this.activeTabIndex = areaIndex + 1;
                }
            }
        }
    }
};
</script>
