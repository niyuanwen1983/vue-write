import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mutations from './mutations'

let state = {sum: 0, wrong: 0, right: 0}
export default new Vuex.Store({
  state,
  mutations
})





