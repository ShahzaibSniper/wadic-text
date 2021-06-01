/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
import VueRouter from 'vue-router'
import Routes from './routes/routes'
import indexComponent from "./components/indexComponent";
import { store } from './store/store'

window.Vue = require('vue').default;
Vue.use(FlashMessage);
Vue.use(VueRouter)

Vue.component('index-component', indexComponent);
Vue.component('loading', Loading);

const router = new VueRouter({
    base: '/',
    linkExactActiveClass: 'active',
    linkActiveClass: 'no-active',
    routes: Routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store: store,
    el: '#app',
    router,
});
