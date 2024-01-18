import { log } from '~/log.js'
import { createStore } from 'vuex';

log('create plugin');

const store = createStore({});

// but it is a MutableReactiveHandlerProxy,
// must be a Vuex thing
log(`Vuex state: [isRef=${isRef(store.state)}]`, store.state);

export default defineNuxtPlugin(function () {
  log('plugin')
});
