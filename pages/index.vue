<template>
  <div>
    <p>
      <nuxt-link to="/next">next</nuxt-link>
    </p>

    <p>
      I've run
    </p>

    <p>
      a value came from: {{ a }}
    </p>
  </div>
</template>

<script>
import { log } from '~/log.js'

export default {
  name: 'index',
  middleware() {
    log('home: middleware')
  },
  fetch(_context) {
    log('home: legacy fetch')
  },
  asyncData(_context) {
    log('home: asyncData')
    return { a: 'server' }
  },
  data() {
    log('home: data')
    return { a: 'client' }
  },
  beforeCreate() {
    log('home: beforeCreate')
  },
  created() {
    log('home: created')
  },
  beforeMount() {
    log('home: beforeMount')
  },
  mounted() {
    log('home: mounted')
  },
  beforeUpdate() {
    log('home: beforeUpdate')
  },
  updated() {
    log('home: updated')
  },
  beforeDestroy() {
    log('home: beforeDestroy')
  },
  destroyed() {
    log('home: destroyed')
  },
  beforeRouteEnter(_to, _from, next) {
    log('home: beforeRouteEnter')
    next()
  },
  beforeRouteUpdate() {
    log('home: beforeRouteUpdate')
  },
  beforeRouteLeave(_to, _from, next) {
    log('home: beforeRouteLeave')
    next()
  },
};
</script>
