import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import { checkFilter } from './util/bus';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
// componentからアクセスできるように定義
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } });

new Vue({
    el: '#app',
    data: {
      genre: [],
      time: [],
      movies: [],
      moment,
      day: moment(),
      bus
    },
    components: {
        MovieList,
        MovieFilter,
    },
    created(){
        this.$http.get('/api').then(response => {
            // get body data
            this.movies = response.data;
        }, response => {
            // error callback
        });

        this.bus.$on('check-filter', checkFilter.bind(this));
    }
});