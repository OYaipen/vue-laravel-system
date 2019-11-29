import Vue from 'vue'
import moment from 'moment';
Vue.filter('myDate', function (created) {
    moment.locale('es');
    return moment(created).format('D MMM YYYY');
});
Vue.filter('upText', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
});

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
})
window.Fire = new Vue();
import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

