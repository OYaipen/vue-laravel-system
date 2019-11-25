import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})

// require('./bootstrap');

//  import '~/components'

// window.Vue = require('vue');
// import moment from 'moment';
// import swal from "sweetalert2";
// import VueProgressBar from 'vue-progressbar'
// import { HasError, AlertError } from 'vform';
// import router from './routes';
// import Gate from "./Gate";
// import VueRouter from 'vue-router';
// import { Form } from "vform";
// Vue.prototype.$gate = new Gate(window.user);
// Vue.use(VueRouter);
// Vue.use(VueProgressBar, {
//   color: 'rgb(143, 255, 199)',
//   failedColor: 'red',
//   height: '3px'
// })

// window.Form = Form;
// window.swal = swal;
// const toast = swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
// });
// window.toast = toast;
// Vue.filter('upText', function (text) {
//   return text.charAt(0).toUpperCase() + text.slice(1)
// });
// Vue.filter('myDate', function (created) {
//   moment.locale('es');
//   return moment(created).format('D MMM YYYY');
// });
// window.Fire = new Vue();

// Vue.component(HasError.name, HasError)
// Vue.component(AlertError.name, AlertError)
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
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
// Vue.component(
//   'not-found',
//   require('./components/404/NotFound').default
// );
// Vue.component('pagination', require('laravel-vue-pagination'));

// new Vue({
//   el: '#app',
//   router,
//   data: {
//     search: ''
//   },
//   methods: {
//     searchit: _.debounce(() => {
//       Fire.$emit('searching');
//     }, 1000),

//     printme() {
//       window.print();
//     }
//   }
// });
