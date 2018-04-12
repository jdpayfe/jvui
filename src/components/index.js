import '../style/common/rem/rem.js';
import '../style/index.scss';
// vue
import JVArea from './area/area';
import JVBadge from './badge/badge';
import JVButton from './button/button';
import JVCell from './cell/cell';
import JVCellGroup from './cell/cell-group';
import JVIcon from './icon/icon';
import JVNavBar from './nav-bar/nav-bar';
import JVDatetimePicker from './datetime-picker/datetime-picker';
import JVPicker from './picker/picker';
import JVPickerColumn from './picker/picker-column';
import JVPopup from './popup/popup';
import JVSwipe from './swipe/swipe';
import JVSwipeItem from './swipe/swipe-item';
import JVTab from './tabs/tab';
import JVTabs from './tabs/tabs';

// 指令
import JVLazyload from './lazyload/lazyload.js';

const components = [
    JVArea,
    JVBadge,
    JVButton,
    JVCell,
    JVCellGroup,
    JVIcon,
    JVNavBar,
    JVDatetimePicker,
    JVPicker,
    JVPickerColumn,
    JVPopup,
    JVSwipe,
    JVSwipeItem,
    JVTab,
    JVTabs
];

const install = (Vue) => {
    components.forEach((Component) => {
        Vue.component(Component.name, Component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    JVArea,
    JVBadge,
    JVButton,
    JVCell,
    JVCellGroup,
    JVIcon,
    JVNavBar,
    JVDatetimePicker,
    JVPicker,
    JVPickerColumn,
    JVPopup,
    JVSwipe,
    JVSwipeItem,
    JVTab,
    JVTabs,
    // 指令
    JVLazyload
};

export default {
    install
};
