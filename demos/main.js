/**
 * Created by yangjiali on 2018/4/8.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import JVui, { JVLazyload } from '../src/components/index.js';
import 'src/style/scss/index.scss';
import App from './app';
import Index from './pages/index';
import Home from './pages/home';
// Basic
import Badge from './pages/badge';
import Button from './pages/button';
import Icon from './pages/icon';
import Radio from './pages/radio';
// Layout
import Cell from './pages/cell';
import NavBar from './pages/nav-bar';
import Tabs from './pages/tabs';
import Popup from './pages/popup';
import Tabbar from './pages/tabbar';
// Advanced
import Area from './pages/area';
import DatetimePicker from './pages/datetime-picker';
import Picker from './pages/picker';
import Swipe from './pages/swipe';
// directive
import Lazyload from './pages/lazyload';

Vue.use(VueRouter);
Vue.use(JVui);
Vue.use(JVLazyload, {
    lazyComponent: true
});

const routes = [
    {path: '/', component: Index},
    {path: '/home', component: Home},

    {path: '/basic/badge', component: Badge},
    {path: '/basic/button', component: Button},
    {path: '/basic/icon', component: Icon},
    {path: '/basic/radio', component: Radio},

    {path: '/layout/cell', component: Cell},
    {path: '/layout/navBar', component: NavBar},
    {path: '/layout/tabs', component: Tabs},
    {path: '/layout/popup', component: Popup},
    {path: '/layout/tabbar', component: Tabbar},

    {path: '/advanced/area', component: Area},
    {path: '/advanced/datetimePicker', component: DatetimePicker},
    {path: '/advanced/picker', component: Picker},
    {path: '/advanced/swipe', component: Swipe},

    {path: '/directive/lazyload', component: Lazyload}

];

const router = new VueRouter({
    routes: routes
});

new Vue({ // eslint-disable-line
    render: h => h(App),
    router,
    el: '#app'
});
