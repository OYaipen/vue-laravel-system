
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
import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);
window.Fire = new Vue();

Vue.component('pagination', require('laravel-vue-pagination'));

// Vue.component(
//   'passport-clients',
//   require('./components/passport/Clients.vue').default
// );
// Vue.component(
//   'passport-authorized-clients',
//   require('./components/passport/AuthorizedClients.vue').default
// );
// Vue.component(
//   'passport-personal-access-tokens',
//   require('./components/passport/PersonalAccessTokens.vue').default
// );


